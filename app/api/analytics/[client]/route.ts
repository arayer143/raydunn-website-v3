import { NextResponse } from 'next/server';
import { getCleanSlateAnalyticsData } from '@/lib/googleAnalytics';

export async function GET() {
  try {
    const data = await getCleanSlateAnalyticsData();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in analytics API route:', error);
    return NextResponse.json({ error: 'Failed to fetch analytics data' }, { status: 500 });
  }
}

