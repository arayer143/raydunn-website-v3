export interface ClientInfo {
  name: string;
  code: string;
}

type ClientCodeKey = 'CLEAN_SLATE_CODE' | 'PRISTINE_CLEAN_CODE' | 'OUTKAST_INDUSTRIAL_CODE';

const clientInfoMap: Record<ClientCodeKey, Omit<ClientInfo, 'code'>> = {
  CLEAN_SLATE_CODE: {
    name: "Clean Slate Pressure Washing",
  },
  PRISTINE_CLEAN_CODE: {
    name: "Pristine Clean Softwash",
  },
  OUTKAST_INDUSTRIAL_CODE: {
    name: "Outkast Industrial",
  }
};

function getClientCodes(): Record<string, ClientInfo> {
  const codes: Record<string, ClientInfo> = {};
  console.log("Attempting to load client codes...");
  (Object.keys(clientInfoMap) as ClientCodeKey[]).forEach((envKey) => {
    const code = process.env[envKey];
    console.log(`Checking ${envKey}: ${code}`);
    if (code) {
      codes[code] = { ...clientInfoMap[envKey], code };
      console.log(`Loaded client code for ${envKey}: ${code}`);
    } else {
      console.warn(`Environment variable ${envKey} is not set.`);
    }
  });
  console.log("Finished loading client codes. Loaded codes:", Object.keys(codes));
  return codes;
}

export const clientCodes = getClientCodes();

export function getClientByCode(code: string): ClientInfo | undefined {
  const clientInfo = clientCodes[code];
  console.log(`Getting client info for code: ${code}, Result:`, clientInfo);
  return clientInfo;
}

export function isValidClientCode(code: string): boolean {
  const isValid = code in clientCodes;
  console.log(`Validating client code: ${code}, isValid: ${isValid}`);
  return isValid;
}

export const validCodes = Object.keys(clientCodes);

export function getEnvNameForCode(code: string): ClientCodeKey | undefined {
  const envName = (Object.keys(clientInfoMap) as ClientCodeKey[]).find(key => process.env[key] === code);
  console.log(`Getting env name for code: ${code}, Result: ${envName}`);
  return envName;
}

// For debugging purposes
if (typeof window !== 'undefined') {
  console.log("Client-side: Exported clientCodes:", clientCodes);
  console.log("Client-side: All valid client codes:", validCodes);
} else {
  console.log("Server-side: Exported clientCodes:", clientCodes);
  console.log("Server-side: All valid client codes:", validCodes);
}

// Fallback for client-side
if (typeof window !== 'undefined' && Object.keys(clientCodes).length === 0) {
  console.warn("No client codes loaded. Using fallback codes for client-side validation.");
  Object.assign(clientCodes, {
    'CSPW2024X': { name: "Clean Slate Pressure Washing", code: 'CSPW2024X' },
    'PCSW2024Y': { name: "Pristine Clean Softwash", code: 'PCSW2024Y' },
    'OKIND2024Z': { name: "Outkast Industrial", code: 'OKIND2024Z' }
  });
}