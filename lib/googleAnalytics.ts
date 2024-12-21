async function getAnalyticsData(clientKey: string) {
  try {
    const response = await fetch(`/api/analytics/${clientKey}`)
    if (!response.ok) {
      throw new Error('Failed to fetch analytics data')
    }
    return await response.json()
  } catch (error) {
    console.error(`Error fetching Google Analytics data for ${clientKey}:`, error)
    throw error
  }
}

export const getCleanSlateAnalyticsData = () => getAnalyticsData('cleanSlate')
export const getPristineCleanAnalyticsData = () => getAnalyticsData('pristineClean')
export const getOutkastAnalyticsData = () => getAnalyticsData('outkast')

