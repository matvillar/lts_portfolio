// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://92f9c12ea02489add9a545ecdcc1dcc8@o4507930452164608.ingest.us.sentry.io/4507930455375872',

  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: 'dark',
    }),
    Sentry.replayIntegration(),
  ],
  // Session Replays
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
