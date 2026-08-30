import { mutationOptions } from "@tanstack/react-query";
import { apiFetch, type ApiMessagesResponse } from "./client";

export type Contributor = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export type ContributePayload = {
  contributors: Contributor[];
  shelterID?: number;
  value: number;
};

export const contributeMutationOptions = () =>
  mutationOptions({
    mutationKey: ["shelters", "contribute"],
    mutationFn: (payload: ContributePayload) =>
      apiFetch<ApiMessagesResponse>(`/api/v1/shelters/contribute`, {
        method: "POST",
        body: JSON.stringify(payload)
      })
  });
