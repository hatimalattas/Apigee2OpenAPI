#!/usr/bin/env node

import { Command } from 'commander';
import fetch from './fetchApi.js';

const program = new Command();

program
  .usage('<options>')
  .option('-o, --output <file>', 'Outout path for the openapi spec')
  .option('-i, --input <file>', 'Path to your bundle.zip file')
  .option('-n, --name <API name>', 'API proxy name. Required if local bundle is used')
  .option('-b, --baseurl <API proxy base URL>', 'API proxy URL e.g. https://api.exmaple.com. Required if local bundle is used.')
  .option('-a, --auth <type>', 'Specify the authentication type (basic, apiKey, oauth2, none).')
  .description('Generates openapi 3.0.0 Spec from Apigee Proxy');

program.parse(process.argv);

const options = {};
options.destination = program._optionValues.output;
options.file = program._optionValues.input;
options.api = program._optionValues.name;
options.proxyEndPoint = program._optionValues.baseurl;
options.authType = program._optionValues.auth;

fetch(options, function (err) {
  if (err) {
    console.log(err);
  }
  else {
    // nothing for now..
  }
});
