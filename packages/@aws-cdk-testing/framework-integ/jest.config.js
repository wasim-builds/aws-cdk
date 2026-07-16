/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  // Purposely only run .js files, not .ts files. This is so that the unit tests
  // here will use the jsii-compiled version of `aws-cdk-lib`, and not the live-interpreted
  // .ts files.
  moduleFileExtensions: [
    'js',
  ],
  testMatch: [
    '<rootDir>/test/**/?(*.)+(test).js',
  ],

  testEnvironment: 'node',

  // Acknowledge test-only CloudFormationValidatePlugin warnings, like every other
  // aws-cdk-lib-dependent package gets via the cdk-build-tools base jest config.
  setupFilesAfterEnv: [
    'aws-cdk-lib/testhelpers/jest-global-app-testhook',
  ],
};
