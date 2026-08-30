const API_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  "https://frontend-assignment-api.goodrequest.dev";

export type ApiMessage = {
  message: string;
  type: "SUCCESS" | "ERROR" | "INFO" | "WARNING";
};

export type ApiMessagesResponse = {
  messages: ApiMessage[];
};

export class ApiError extends Error {
  constructor(
    message: string,
    readonly status: number,
    readonly messages: ApiMessage[] = []
  ) {
    super(message);
    this.name = "ApiError";
  }
}

const readMessages = async (response: Response) => {
  try {
    const body: unknown = await response.json();
    const messages = (body as Partial<ApiMessagesResponse>)?.messages;

    return Array.isArray(messages) ? messages : [];
  } catch {
    return [];
  }
};

export async function apiFetch<T>(path: string, init?: RequestInit) {
  const response = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...init?.headers }
  });

  if (!response.ok) {
    const messages = await readMessages(response);

    throw new ApiError(
      messages[0]?.message ?? `${init?.method ?? "GET"} ${path} failed`,
      response.status,
      messages
    );
  }

  return (await response.json()) as T;
}
