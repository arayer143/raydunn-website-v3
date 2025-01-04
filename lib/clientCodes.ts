export interface ClientInfo {
  name: string;
  code: string;
}

export type ClientCodes = Record<string, ClientInfo>;

export const getClientCodes = (): ClientCodes => {
  if (typeof window !== 'undefined') {
    console.warn("Attempted to access client codes on the client side");
    return {};
  }

  const clientCodesString = process.env.CLIENT_CODES;
  if (!clientCodesString) {
    console.error("CLIENT_CODES environment variable is not set");
    return {};
  }

  try {
    return JSON.parse(clientCodesString);
  } catch (error) {
    console.error("Failed to parse CLIENT_CODES:", error);
    return {};
  }
};

export const isValidClientCode = (code: string): boolean => {
  const clientCodes = getClientCodes();
  return Object.keys(clientCodes).includes(code);
};

