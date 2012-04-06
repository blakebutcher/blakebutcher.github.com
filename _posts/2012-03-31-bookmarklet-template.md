---
layout: post
title: Bookmarklet template
---

Bookmarklets are used to trigger JavaScript code on any web page. This can be useful for many situations, such as:

* Overlaying a grid on a page to ensure conformance to user interface guidelines.

* Submitting content about the current page to an issue tracking system.

The following code can be used to create a link to a bookmarklet:

<pre class="prettyprint">&lt;a href="javascript:(function(){document.body.appendChild(document.createElement('script')).src='http://blakebutcher.com/content/example-bookmarklet.js?'+Math.floor(new%20Date().getTime()/(2*60*1000));})();"&gt;activate example bookmarklet&lt;/a&gt;
</pre>

<script src="https://gist.github.com/2316513.js?file=bookmarklet-example-markup.html"></script>

Which will render like so:

<a class="btn" href="javascript:(function(){document.body.appendChild(document.createElement('script')).src='http://blakebutcher.com/content/example-bookmarklet.js?'+Math.floor(new%20Date().getTime()/(2*60*1000));})();">activate example bookmarklet</a>

The user then drags this link to their bookmark bar in their browser. From there they can click to activate the bookmarklet.

This bookmarklet itself just inserts a script tag that loads a <a href="http://blakebutcher.com/content/example-bookmarklet.js">specified JS file</a> into the current page. It has a 2 minute cache-busting query string to ensure that the latest version of the JS is loaded.

The benefits of keeping the rest of your code outside of the bookmarklet are:

* It is easier to maintain a normal JS file, rather than compiling it to bookmarklet form.

* There is no character limit on the length of the script, but there is inside the bookmarklet itself (depending on browser).

* You can update the script and everyone that has added the bookmarklet previously will receive the changes.