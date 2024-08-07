import { QueryClient, QueryClientConfig } from 'react-query';

const cacheConfigs: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 3600000, // Data is fresh for 1 hour
      cacheTime: 86400000, // Keep data in cache for 24 hours
    },
  },
};

export const queryClient = new QueryClient(cacheConfigs);
