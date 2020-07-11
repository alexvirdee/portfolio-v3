
var serverlessSDK = require('./serverless_sdk/index.js');
serverlessSDK = new serverlessSDK({
  orgId: 'alexvirdee08',
  applicationName: 'portfolio-contact',
  appUid: 'PgJpP8CHqJ6HjKWqzg',
  orgUid: 'G4WZlJhwG4CMNqkQp2',
  deploymentUid: '668a57b3-bf1c-40f3-9991-3f766f03ba9b',
  serviceName: 'contact-mailer',
  shouldLogMeta: true,
  shouldCompressLogs: true,
  disableAwsSpans: false,
  disableHttpSpans: false,
  stageName: 'dev',
  serverlessPlatformStage: 'prod',
  devModeEnabled: false,
  accessKey: null,
  pluginVersion: '3.6.15',
  disableFrameworksInstrumentation: false
});

const handlerWrapperArgs = { functionName: 'contact-mailer-dev-staticSiteMailer', timeout: 6 };

try {
  const userHandler = require('./handler.js');
  module.exports.handler = serverlessSDK.handler(userHandler.staticSiteMailer, handlerWrapperArgs);
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs);
}