#!/usr/bin/env node

/**
 * Copyright 2015 UC Berkeley (UCB) Licensed under the
 * Educational Community License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may
 * obtain a copy of the License at
 *
 *     http://opensource.org/licenses/ECL-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an "AS IS"
 * BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

var Collabosphere = require('col-core');

var log = require('col-core/lib/logger')('app');

// Initialize the app server
Collabosphere.init(function(err) {
  if (err) {
    return log.error({'err': err}, 'An error has occured while starting Collabosphere');
  }

  log.info('Collabosphere has started up. Enjoy!');
});
