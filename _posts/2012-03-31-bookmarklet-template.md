---
layout: post
title: Bookmarklet template
---

Bookmarklets are used to trigger some JavaScript on the currently open web page. This can be useful for many situations, such as:

* Overlaying a grid on a page to ensure conformance to user interface guidelines.
* Submitting content about the current page to an issue tracking system.
* Toggling between development / testing / production environments.

I use the following code to create a bookmarklet link:

<pre class="prettyprint">&lt;a href="javascript:(function(){document.body.appendChild(document.createElement('script')).src='http://blakebutcher.com/content/example-bookmarklet.js?'+Math.floor(new%20Date().getTime()/(2*60*1000));})();"&gt;
	activate example bookmarklet
&lt;/a&gt;
</pre>

Which will render like so:

<p><a class="btn" href="javascript:(function(){document.body.appendChild(document.createElement('script')).src='http://blakebutcher.com/content/example-bookmarklet.js?'+Math.floor(new%20Date().getTime()/(2*60*1000));})();">activate example bookmarklet</a></p>

The users can then drags the link to their browser bookmark bar. From there they can click to activate the bookmarklet.

This bookmarklet itself just inserts a script tag that loads the specified external JavaScript file into the current page. In this case the [external JavaScript](/content/example-bookmarklet.js) just triggers a simple alert box.

It has a 2 minute cache-busting query string to ensure that the latest version of the JavaScript file is loaded.

The benefits of keeping the rest of your JavaScript outside of the bookmarklet are:

* It is easier to maintain a JavaScript file, rather than compiling it to bookmarklet form.
* There is no character limit on the length of the script, but there is inside the bookmarklet itself (depending on browser).
* You can update the script and everyone that has added the bookmarklet previously will receive the updates.