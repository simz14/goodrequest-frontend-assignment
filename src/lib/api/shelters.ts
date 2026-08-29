import { queryOptions } from "@tanstack/react-query";
import { apiFetch } from "./client";

export type Shelter = {
  id: number;
  name: string;
};

type SheltersResponse = {
  shelters: Shelter[];
};

export const sheltersQueryOptions = () =>
  queryOptions({
    queryKey: ["shelters"],
    queryFn: ({ signal }) => {
      return apiFetch<SheltersResponse>(`/api/v1/shelters`, {
        signal
      });
    },
    select: (data) => data.shelters
  });
