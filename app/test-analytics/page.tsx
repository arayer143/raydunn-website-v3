'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function TestAnalyticsPage() {
  const [analyticsData, setAnalyticsData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAnalyticsData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/test-analytics');
      const result = await response.json();
      if (result.success) {
        setAnalyticsData(result.data);
      } else {
        setError('Failed to fetch analytics data');
      }
    } catch (err) {
      setError('An error occurred while fetching data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Test Google Analytics API</CardTitle>
          <CardDescription>Click the button below to test the connection to Google Analytics</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={fetchAnalyticsData} disabled={loading}>
            {loading ? 'Fetching...' : 'Fetch Analytics Data'}
          </Button>
          {error && <p className="text-red-500 mt-4">{error}</p>}
          {analyticsData && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Analytics Data:</h3>
              <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
                {JSON.stringify(analyticsData, null, 2)}
              </pre>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

