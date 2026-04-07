/**
 * MEOK AI LABS — Research Error Handler
 *
 * Standardized error handling and retry logic for research system.
 */

export class ResearchError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number = 500,
    public retryable: boolean = false,
    public details?: any
  ) {
    super(message);
    this.name = 'ResearchError';
  }
}

export const RESEARCH_ERROR_CODES = {
  // Client errors (4xx)
  INVALID_QUERY: 'INVALID_QUERY',
  MISSING_QUERY: 'MISSING_QUERY',
  RATE_LIMITED: 'RATE_LIMITED',
  UNAUTHORIZED: 'UNAUTHORIZED',
  TEMPLATE_NOT_FOUND: 'TEMPLATE_NOT_FOUND',
  
  // Server errors (5xx)
  DECOMPOSITION_FAILED: 'DECOMPOSITION_FAILED',
  SEARCH_FAILED: 'SEARCH_FAILED',
  SYNTHESIS_FAILED: 'SYNTHESIS_FAILED',
  STREAM_FAILED: 'STREAM_FAILED',
  TIMEOUT: 'TIMEOUT',
  
  // Network errors (retryable)
  NETWORK_ERROR: 'NETWORK_ERROR',
  EXTERNAL_SERVICE_ERROR: 'EXTERNAL_SERVICE_ERROR',
} as const;

export function createResearchError(
  code: string,
  message: string,
  statusCode: number,
  retryable: boolean = false,
  details?: any
): ResearchError {
  return new ResearchError(message, code, statusCode, retryable, details);
}

export function isRetryable(error: any): boolean {
  if (error instanceof ResearchError) {
    return error.retryable;
  }
  // Network errors are typically retryable
  if (error?.cause?.code === 'ECONNRESET' || error?.cause?.code === 'ETIMEDOUT') {
    return true;
  }
  return false;
}

export function shouldRetry(error: any, attempt: number, maxAttempts = 3): boolean {
  if (attempt >= maxAttempts) return false;
  return isRetryable(error);
}

export function getRetryDelay(attempt: number, baseDelay = 1000): number {
  // Exponential backoff with jitter
  const delay = Math.min(baseDelay * Math.pow(2, attempt), 10000);
  const jitter = Math.random() * 0.3 * delay;
  return Math.round(delay + jitter);
}

export async function withRetry<T>(
  fn: () => Promise<T>,
  maxAttempts = 3,
  onRetry?: (attempt: number, error: any) => void
): Promise<T> {
  let lastError: any;
  
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      
      if (!shouldRetry(error, attempt, maxAttempts)) {
        throw error;
      }
      
      if (onRetry) {
        onRetry(attempt + 1, error);
      }
      
      const delay = getRetryDelay(attempt);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  
  throw lastError;
}

export function formatResearchError(error: any): {
  message: string;
  code: string;
  details?: any;
  retryable: boolean;
} {
  if (error instanceof ResearchError) {
    return {
      message: error.message,
      code: error.code,
      details: error.details,
      retryable: error.retryable,
    };
  }
  
  // Handle generic errors
  return {
    message: error?.message || 'An unexpected error occurred',
    code: 'UNKNOWN_ERROR',
    details: error?.stack,
    retryable: false,
  };
}