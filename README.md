# @rodrigoehlers/fetch

Just an extension to `fetch` which makes it reject on HTTP error codes and throw an appropiate error.

## Installation

Install with `npm i @rodrigoehlers/fetch`.

## Usage

Simply `import` / `require` the module in your code and use it as you'd use `fetch` with the simple difference that the returned Promise will reject if the response contains an HTTP status in the range of 4XX - 5XX.

```js
import fetch from '@rodrigoehlers/fetch';

fetch('https://httpstat.us/500')
  .then(() => console.log('successful'))
  .catch(error => console.log(error));
```

You'll see this in the console:

```js
{
  code: 500,
  status: 'Bad Request',
  body: ... // Optional response body
}
```

## Compatibility

This module depends on `fetch` and therefore **won't** natively work in nodejs.

You can check browser support [here (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API#Browser_compatibility) or [here (caniuse.com)](https://caniuse.com/#feat=fetch).

## License

[MIT](https://github.com/rodrigoehlers/fetch/blob/master/LICENSE.md) - Made by [Rodrigo Ehlers](https://rodrigoehlers.com)
