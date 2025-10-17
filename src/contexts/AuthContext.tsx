import { createContext, useContext, useReducer, useEffect, type ReactNode } from "react";
import { authApi } from "../services/api";
import type { User } from "../types/auth.types";

// Local interface to avoid import issues
// interface AuthResponse {
//   success: boolean;
//   message: string;
//   user?: User;
//   token?: string;
//   refreshToken?: string;
// }

// Auth State Interface
interface AuthState {
	user: User | null;
	token: string | null;
	refreshToken: string | null;
	isAuthenticated: boolean;
	isLoading: boolean;
	error: string | null;
}

// Auth Actions
type AuthAction =
	| { type: "AUTH_START" }
	| { type: "AUTH_SUCCESS"; payload: { user: User; token: string; refreshToken?: string } }
	| { type: "AUTH_FAILURE"; payload: string }
	| { type: "AUTH_LOGOUT" }
	| { type: "CLEAR_ERROR" }
	| { type: "UPDATE_USER"; payload: User };

// Initial State
const initialState: AuthState = {
	user: null,
	token: localStorage.getItem("accessToken"),
	refreshToken: localStorage.getItem("refreshToken"),
	isAuthenticated: false,
	isLoading: false,
	error: null,
};

// Auth Reducer
function authReducer(state: AuthState, action: AuthAction): AuthState {
	switch (action.type) {
		case "AUTH_START":
			return {
				...state,
				isLoading: true,
				error: null,
			};
		case "AUTH_SUCCESS":
			return {
				...state,
				user: action.payload.user,
				token: action.payload.token,
				refreshToken: action.payload.refreshToken || state.refreshToken,
				isAuthenticated: true,
				isLoading: false,
				error: null,
			};
		case "AUTH_FAILURE":
			return {
				...state,
				user: null,
				token: null,
				refreshToken: null,
				isAuthenticated: false,
				isLoading: false,
				error: action.payload,
			};
		case "AUTH_LOGOUT":
			return {
				...state,
				user: null,
				token: null,
				refreshToken: null,
				isAuthenticated: false,
				isLoading: false,
				error: null,
			};
		case "CLEAR_ERROR":
			return {
				...state,
				error: null,
			};
		case "UPDATE_USER":
			return {
				...state,
				user: action.payload,
			};
		default:
			return state;
	}
}

// Auth Context Interface
interface AuthContextType {
	state: AuthState;
	login: (email: string, password: string) => Promise<boolean>;
	register: (userData: any) => Promise<boolean>;
	logout: () => Promise<void>;
	clearError: () => void;
	updateUser: (user: User) => void;
}

// Create Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth Provider Component
interface AuthProviderProps {
	children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
	const [state, dispatch] = useReducer(authReducer, initialState);

	// Check if user is authenticated on mount
	useEffect(() => {
		const checkAuth = async () => {
			const token = localStorage.getItem("accessToken");
			if (token) {
				try {
					dispatch({ type: "AUTH_START" });
					const response = await authApi.getProfile();
					if (response.data.success) {
						dispatch({
							type: "AUTH_SUCCESS",
							payload: {
								user: response.data.user,
								token,
							},
						});
					}
				} catch (error) {
					dispatch({
						type: "AUTH_FAILURE",
						payload: "Session expired. Please login again.",
					});
					localStorage.removeItem("accessToken");
					localStorage.removeItem("refreshToken");
				}
			}
		};

		checkAuth();
	}, []);

	// Login function
	const login = async (email: string, password: string): Promise<boolean> => {
		try {
			dispatch({ type: "AUTH_START" });
			const response = await authApi.login({ email, password });

			if (response.data.success && response.data.user && response.data.token) {
				// Store tokens
				localStorage.setItem("accessToken", response.data.token);
				if (response.data.refreshToken) {
					localStorage.setItem("refreshToken", response.data.refreshToken);
				}

				dispatch({
					type: "AUTH_SUCCESS",
					payload: {
						user: response.data.user,
						token: response.data.token,
						refreshToken: response.data.refreshToken,
					},
				});
				return true;
			} else {
				dispatch({
					type: "AUTH_FAILURE",
					payload: response.data.message || "Login failed",
				});
				return false;
			}
		} catch (error: any) {
			const errorMessage = error.response?.data?.message || "Login failed. Please try again.";
			dispatch({
				type: "AUTH_FAILURE",
				payload: errorMessage,
			});
			return false;
		}
	};

	// Register function
	const register = async (userData: any): Promise<boolean> => {
		try {
			dispatch({ type: "AUTH_START" });
			const response = await authApi.register(userData);

			if (response.data.success && response.data.user && response.data.token) {
				// Store tokens
				localStorage.setItem("accessToken", response.data.token);
				if (response.data.refreshToken) {
					localStorage.setItem("refreshToken", response.data.refreshToken);
				}

				dispatch({
					type: "AUTH_SUCCESS",
					payload: {
						user: response.data.user,
						token: response.data.token,
						refreshToken: response.data.refreshToken,
					},
				});
				return true;
			} else {
				dispatch({
					type: "AUTH_FAILURE",
					payload: response.data.message || "Registration failed",
				});
				return false;
			}
		} catch (error: any) {
			const errorMessage = error.response?.data?.message || "Registration failed. Please try again.";
			dispatch({
				type: "AUTH_FAILURE",
				payload: errorMessage,
			});
			return false;
		}
	};

	// Logout function
	const logout = async (): Promise<void> => {
		try {
			await authApi.logout();
		} catch (error) {
			// Continue with logout even if API call fails
			console.error("Logout API call failed:", error);
		} finally {
			localStorage.removeItem("accessToken");
			localStorage.removeItem("refreshToken");
			dispatch({ type: "AUTH_LOGOUT" });
		}
	};

	// Clear error function
	const clearError = (): void => {
		dispatch({ type: "CLEAR_ERROR" });
	};

	// Update user function
	const updateUser = (user: User): void => {
		dispatch({ type: "UPDATE_USER", payload: user });
	};

	const contextValue: AuthContextType = {
		state,
		login,
		register,
		logout,
		clearError,
		updateUser,
	};

	return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}

// Custom hook to use auth context
export function useAuth(): AuthContextType {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
}

export default AuthContext;
