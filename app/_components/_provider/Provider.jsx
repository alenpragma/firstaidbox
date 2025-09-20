"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

export const Provider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children} <Toaster position="bottom-center" reverseOrder={false} />
    </QueryClientProvider>
  );
};
