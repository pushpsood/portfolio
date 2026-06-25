import * as Sentry from "@sentry/nextjs";

export function onRouterTransitionStart(routeChangeData: { url: string }) {
  Sentry.startSpanManual(
    { op: "navigation", name: routeChangeData.url },
    (span) => {
      span.end();
    }
  );
}

Sentry.init({
  dsn: "https://a791133966f0a427ee82646b8da2d9ad@o4507504673816576.ingest.us.sentry.io/4507504677552128",
  tracesSampleRate: 1,
  debug: false,
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
    Sentry.feedbackIntegration({
      colorScheme: "dark",
    }),
  ],
});
