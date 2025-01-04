import { isValidClientCode, clientCodes } from '@/lib/clientCodes.ts'

console.log('Loaded client codes:', clientCodes);

const testCodes = [
  'CSPW2024X',
  'PCSW2024Y',
  'OKIND2024Z',
  'INVALID_CODE'
];

testCodes.forEach(code => {
  console.log(`Testing code ${code}: ${isValidClientCode(code)}`);
});

