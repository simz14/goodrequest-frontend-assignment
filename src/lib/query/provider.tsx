"use client";

import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { makeQueryClient } from "./client";

declare global {
  interface Window {
    __TANSTACK_QUERY_CLIENT__?: QueryClient;
  }
}

export default function QueryProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(makeQueryClient);

  useEffect(() => {
    if (process.env.NODE_ENV === "production") return;

    window.__TANSTACK_QUERY_CLIENT__ = queryClient;

    return () => {
      delete window.__TANSTACK_QUERY_CLIENT__;
    };
  }, [queryClient]);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
