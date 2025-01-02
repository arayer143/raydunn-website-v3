export function logEnvironmentVariables() {
    console.log('Environment Variables:');
    console.log('CLEANSLATE_GA_CLIENT_EMAIL:', process.env.CLEANSLATE_GA_CLIENT_EMAIL ? 'Set' : 'Not set');
    console.log('CLEANSLATE_GA_PRIVATE_KEY:', process.env.CLEANSLATE_GA_PRIVATE_KEY ? 'Set' : 'Not set');
    console.log('CLEANSLATE_GA_PROPERTY_ID:', process.env.CLEANSLATE_GA_PROPERTY_ID ? 'Set' : 'Not set');
  }
  
  