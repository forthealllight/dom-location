# `dom-location`

> React hook for subscribing to window size

> **Note:** This is using the new [React Hooks API Proposal](https://reactjs.org/docs/hooks-intro.html)
> which is subject to change until React 16.7 final.
>
> You'll need to install `react`, `react-dom`, etc at `^16.7.0-alpha.0`

## Install

```sh
yarn add dom-location

```
or

```sh
npm i -s dom-location

```

## Usage

```js

import useDomLocation from 'dom-location';

function App() {
  let element = document.getElementsByTagName('body')[0];
  let obj = useDomLocation(element);
  console.log(obj);
  return (
    <div>
      <h1>{111}</h1>
    </div>
  );
}

ReactDOM.render(<App />, window.root);
```
