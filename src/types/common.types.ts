// =============================================================================
// CLIENT COMMON TYPES
// =============================================================================

// Market Rate Interface
export interface MarketRate {
  _id: string;
  rateName: string;
  displayName: string;
  currentRate: number;
  previousRate?: number;
  change?: number;
  changePercent?: number;
  lastUpdated: string;
  source: string;
  description?: string;
  category: string;
  order: number;
  isActive: boolean;
  historicalData: Array<{
    date: string;
    rate: number;
  }>;
  createdAt: string;
  updatedAt: string;
}

// Pagination and Query Types
export interface PaginationQuery {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

// API Response Wrapper
export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
  code?: string;
}