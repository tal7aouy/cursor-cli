# Cursor-cli

A library for toggling the CLI cursor in the terminal.

## Install

Get it on [npm](https://www.npmjs.com/package/cursor-cli)

```bash
npm install cursor-cli
```

Get it on [yarn](https://yarnpkg.com/package/cursor-cli)

```bash
yarn add  cursor-cli
```

## Usage

```ts
import Cursor from "cursor-cli";

Cursor.has(); // => true, the cursor is visible

Cursor.hide();

Cursor.has(); // => false, the cursor is not visible

Cursor.show();

Cursor.has(); // => true, the cursor is visible

Cursor.toggle();

Cursor.has(); // => false, the cursor is not visible
```

## License

[MIT © License](LICENSE)
