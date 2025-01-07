export interface ClientInfo {
  name: string;
  code: string;
  excelFileName: string;
}

export function getClientCodes(): { [key: string]: ClientInfo } {
  const clientCodesString = process.env.CLIENT_CODES;
  if (!clientCodesString) {
    throw new Error('CLIENT_CODES environment variable is not set');
  }
  return JSON.parse(clientCodesString);
}

export function isValidClientCode(code: string): boolean {
  const clientCodes = getClientCodes();
  return Object.keys(clientCodes).includes(code);
}
