/*!
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

(function(){

  var iframe = document.createElement('iframe');

  // TODO
  iframe.style.position = 'fixed';
  iframe.style.top = '0px';
  iframe.style.left = '0px';
  iframe.style.bottom = '0px';
  iframe.style.right = '0px';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';
  iframe.style.margin = 0;
  iframe.style.padding = 0;
  iframe.style.overflow = 'hidden';
  iframe.style.zIndex = 2147483647;

  // TODO
  document.body.appendChild(iframe);
  var html = '<!DOCTYPE html>' +
             '<html lang="en">' +
               '<head>' +
                 '<meta charset="utf-8">' +
                 '<meta http-equiv="X-UA-Compatible" content="IE=edge">' +
                 //'<!-- CSS -->' +
                 '<link href="http://localhost:2000/lib/bootstrap/dist/css/bootstrap.css" rel="stylesheet">' +
                 '<link href="http://localhost:2000/assets/css/bookmarklet.css" rel="stylesheet">' +
                 //'<!-- JavaScript -->' +
                 '<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>' +
                 '<script src="http://localhost:2000/lib/bootstrap/dist/js/bootstrap.js"></script>' +
               '</head>' +
               '<body>' +
                 '<script src="http://localhost:2000/assets/js/bookmarklet.js"></script>' +
               '</body>' +
             '</html>';
  iframe.contentWindow.document.open();
  iframe.contentWindow.document.write(html);
  iframe.contentWindow.document.close();

})();