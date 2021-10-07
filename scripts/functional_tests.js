/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

require('../src/setup_node_env');
require('@kbn/test').runTestsCli([
  require.resolve('../test/functional/config.js'),
  require.resolve('../test/api_integration/config.js'),
  require.resolve('../test/plugin_functional/config.ts'),
  require.resolve('../test/interpreter_functional/config.ts'),
  require.resolve('../test/ui_capabilities/newsfeed_err/config.ts'),
  require.resolve('../test/examples/config.js'),
  require.resolve('../test/new_visualize_flow/config.ts'),
]);
