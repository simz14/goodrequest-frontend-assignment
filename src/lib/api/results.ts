import { queryOptions } from "@tanstack/react-query";
import { apiFetch } from "./client";

export type SheltersResults = {
  contributors: number;
  contribution: number;
};

export const resultsQueryOptions = () =>
  queryOptions({
    queryKey: ["shelters", "results"],
    queryFn: ({ signal }) => {
      return apiFetch<SheltersResults>(`/api/v1/shelters/results`, {
        signal
      });
    }
  });
