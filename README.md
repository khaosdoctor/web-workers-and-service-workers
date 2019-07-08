# web-workers-and-service-workers

> Code Repository for my talk about Web Workers and Service Workers

If you want to run any of these locally you **must** use a local web server (with `php -S` or any other), otherwise chrome won't let you load local files.

## Web Workers

All code residing in the web workers directory is regarding to web worker examples. It is a simple web page with a css animation (for comparison purposes), a input and two buttons. It'll calculate fibonacci's sequence. If you click the button to run **without** web workers, the whole page will freeze depending on the number of terms you fill in (42 is a good number).

You can also access this same example at https://lsantos-web-workers.now.sh/

## Service Workers

This is a simple example where I show how service workers work with cache. Simply put an ID (number ID) and hit submit. If the image is localized within the cache, it'll serve locally, otherwise, it'll download from the source, add it to the cache and serve it from local cache.

You can also access this same example at https://lsantos-service-workers.now.sh/
