const API_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  "https://frontend-assignment-api.goodrequest.dev";

export class ApiError extends Error {
  constructor(
    message: string,
    readonly status: number
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export async function apiFetch<T>(path: string, init?: RequestInit) {
  const response = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...init?.headers }
  });

  if (!response.ok) {
    throw new ApiError(
      `${init?.method ?? "GET"} ${path} failed`,
      response.status
    );
  }

  return (await response.json()) as T;
}
