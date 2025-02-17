interface CacheEntry {
    stars: number;
    timestamp: number;
  }
  
  interface CacheData {
    [repoKey: string]: CacheEntry;
  }
  
  // Cache configuration
  const CACHE_KEY = 'github-stars-cache';
  const CACHE_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
  
  export const getStarsFromCache = (repoKey: string): number | null => {
    try {
      const cachedData = localStorage.getItem(CACHE_KEY);
      if (!cachedData) return null;
      
      const cache: CacheData = JSON.parse(cachedData);
      const entry = cache[repoKey];
      
      if (!entry) return null;
      
      // Check if cache is still valid
      if (Date.now() - entry.timestamp < CACHE_EXPIRY) {
        return entry.stars;
      }
      return null;
    } catch (error) {
      console.error('Error reading from cache:', error);
      return null;
    }
  };
  
  export const saveStarsToCache = (repoKey: string, stars: number): void => {
    try {
      // Get existing cache
      const cachedData = localStorage.getItem(CACHE_KEY);
      const cache: CacheData = cachedData ? JSON.parse(cachedData) : {};
      
      // Update cache with new data
      cache[repoKey] = {
        stars,
        timestamp: Date.now()
      };
      
      // Save back to localStorage
      localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
    } catch (error) {
      console.error('Error saving to cache:', error);
    }
  };
  
  export const clearStarsCache = (): void => {
    try {
      localStorage.removeItem(CACHE_KEY);
    } catch (error) {
      console.error('Error clearing cache:', error);
    }
  };
  
  export const getExpiredStarsFromCache = (repoKey: string): number | null => {
    try {
      const cachedData = localStorage.getItem(CACHE_KEY);
      if (!cachedData) return null;
      
      const cache: CacheData = JSON.parse(cachedData);
      return cache[repoKey]?.stars || null;
    } catch (error) {
      console.error('Error reading expired cache:', error);
      return null;
    }
  };