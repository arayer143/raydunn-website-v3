import { NextResponse } from 'next/server';
import { getCleanSlateAnalyticsData } from '@/lib/googleAnalytics';

export async function GET() {
  try {
    const data = await getCleanSlateAnalyticsData();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error in test-analytics API route:', error);
    let errorMessage = 'Failed to fetch analytics data';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}

