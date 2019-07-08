# web-workers-and-service-workers

> Code Repository for my talk about Web Workers and Service Workers

## Web Workers

All code residing in the web workers directory is regarding to web worker examples. It is a simple web page with a css animation (for comparison purposes), a input and two buttons. It'll calculate fibonacci's sequence. If you click the button to run **without** web workers, the whole page will freeze depending on the number of terms you fill in (42 is a good number).

If you want to run it locally you **must** use a local web server (with `php -S` or any other), otherwise chrome won't let you load local files.

You can also access this same example at https://lsantos-web-workers.now.sh/
