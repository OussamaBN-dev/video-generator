import * as Sentry from "@sentry/node"


Sentry.init({
  dsn: "https://978916c7266b930e1e37a5b0ec47acaf@o4511356647505920.ingest.de.sentry.io/4511356651634768",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});