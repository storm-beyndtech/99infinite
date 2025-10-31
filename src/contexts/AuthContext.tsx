import type { User } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: any) => {
	const [user, setUser] = useState(null);
	const [theme, setTheme] = useState("");
	const [fetching, setFetching] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const url = import.meta.env.VITE_REACT_APP_SERVER_URL;

	const setUserData = (userData: any) => {
		setUser(userData);
		localStorage.setItem("user", JSON.stringify(userData));
		if (userData?.token) {
			localStorage.setItem("token", userData.token);
		}
	};

	const login = (user: User) => {
		setUserData(user);
	};

	const clearAuthData = () => {
		localStorage.removeItem("user");
		localStorage.removeItem("token");
		setUser(null);
		setError(null);
	};

	const logout = () => {
		clearAuthData();
	};

	const clearError = () => {
		setError(null);
	};

	const fetchUser = async (userId: string, silent: boolean = true) => {
		try {
      const token = localStorage.getItem("token");
			if (!token || token === "null") {
				console.warn("No token available for user fetch");
				return;
			}

			const headers: any = {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			};

			const res = await fetch(`${url}/users/profile/${userId}`, {
				headers,
			});

			if (res.ok) {
        const data = await res.json();
				if (data.user) {
					setUser(data.user);
					localStorage.setItem("user", JSON.stringify(data.user));
					if (!silent) console.log("User data refreshed successfully");
				}
			} else if (res.status === 401 || res.status === 403) {
				console.warn("Token expired, clearing auth data");
				clearAuthData();
			} else {
				console.warn(`Failed to fetch user: ${res.status} ${res.statusText}`);
			}
		} catch (error: any) {
			console.error("Background user fetch error:", error.message);
		}
	};

	const updateUser = (userData: any) => {
		setUser(userData);
		localStorage.setItem("user", JSON.stringify(userData));
	};

	useEffect(() => {
		const initializeAuth = async () => {
			setFetching(true);
			const storageData = localStorage.getItem("user");
			const token = localStorage.getItem("token");

			if (storageData && storageData !== "undefined" && storageData !== "null" && token && token !== "null") {
				try {
					const userData = JSON.parse(storageData);
					if (userData && typeof userData === "object" && userData.id) {
						// Set stale data immediately for fast UI load
						setUser(userData);
						
						// Fetch fresh data in background
						try {
							await fetchUser(userData.id, true);
						} catch (error) {
							console.error("Failed to refresh user data:", error);
						}
						
						setFetching(false);

						// Set up periodic refresh every 10 minutes while authenticated
						const refreshInterval = setInterval(() => {
							const currentToken = localStorage.getItem("token");
							const currentUser = localStorage.getItem("user");
							
							if (currentToken && currentToken !== "null" && currentUser) {
								try {
									const parsedUser = JSON.parse(currentUser);
									if (parsedUser.id) {
										fetchUser(parsedUser.id, true);
									}
								} catch (error) {
									console.error("Failed to parse user in interval:", error);
									clearInterval(refreshInterval);
								}
							} else {
								clearInterval(refreshInterval);
							}
						}, 10 * 60 * 1000); // 10 minutes

						// Clean up interval on component unmount
						return () => clearInterval(refreshInterval);
					} else {
						console.warn("No valid user ID found, clearing localStorage...");
						clearAuthData();
						setFetching(false);
					}
				} catch (error) {
					console.error("Failed to parse user data:", error);
					clearAuthData();
					setFetching(false);
				}
			} else {
				// No user data, invalid data, or no token
				clearAuthData();
				setFetching(false);
			}
		};

		initializeAuth();
	}, []);

	return (
		<AuthContext.Provider
			value={{
				user,
				fetching,
				fetchUser,
				login,
				logout,
				setTheme,
				theme,
				updateUser,
				clearError,
				error,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

const useAuthContext = () => useContext(AuthContext);
export const useAuth = useAuthContext;
export const contextData = useAuthContext;
