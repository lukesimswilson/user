/**
 $tumblr.user.js v0.0.1
 Client side javascript for getting the currently logged in tumblr user

 Copyright (C) 2013 Andrew McGreevy }}8{{ (http://8le.gd)

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
*/

var $tumblrjs = $tumblrjs || {};
$tumblrjs.user = {};
$tumblrjs.user.ready = function (submissions_blog_url,callback) {
  try {
    if (arguments.length === 1) {
        callback = arguments[0];
        submissions_blog_url = null;
    }
    if (submissions_blog_url) {
        // TODO if submissions are not enabled or we are using a custom domain
        // we might want to open an iframe to another blog we use just for this purpose?
        // Still working on an `elegant` solution to this!?
    }
    if (document.URL && document.URL.toLowerCase().substring(document.URL.length-12) === '.tumblr.com/') {
      // add iframe to tumblr submissions page
      var frame = document.createElement('iframe');
      var tidyup = function() {
        frame.parentNode.removeChild(frame);
      }
      $.receiveMessage(function(e){
        // postMessage to recieve the user from the iframe
        if (e && e.data && e.data.substring(0,12) === 'tumblr_user=') {
          tidyup();
          callback(e.data.substring(12));        
        }
      });
      frame.setAttribute('style','display: none;');
      frame.setAttribute('src',document.URL + 'submit');
      document.body.appendChild(frame);
    } else {
      if (document.URL && document.URL.toLowerCase().substring(document.URL.length-18) === '.tumblr.com/submit') {
        // to access the iframe containing the logged in user we need to be on the same domain     
        document.domain = 'tumblr.com';
        var submit_form = document.getElementById('submit_form');
        if (submit_form) {
          $(submit_form).load(function() {
              var submit_form_document = submit_form.contentDocument || submit_form.contentWindow.document;
              tumblr_user = submit_form_document.getElementsByTagName('strong');
              if (tumblr_user && tumblr_user.length > 0) {
                // post the logged in user back to the parent
                $.postMessage({tumblr_user: tumblr_user.item(0).textContent},
                               document.URL.replace('submit',''),parent);
              } 
          });
        }
      }
    } 
  } catch(e) {
    callback(null);
  }             
}