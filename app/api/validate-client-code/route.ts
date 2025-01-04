import { NextResponse } from 'next/server';
import { isValidClientCode } from '@/lib/clientCodes';

export async function POST(request: Request) {
  const { clientCode } = await request.json();

  if (!clientCode) {
    return NextResponse.json({ valid: false, error: 'Client code is required' }, { status: 400 });
  }

  const isValid = isValidClientCode(clientCode);

  return NextResponse.json({ valid: isValid });
}

