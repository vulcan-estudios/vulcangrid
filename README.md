# vulcangrid

[![vulcan-estudios](https://img.shields.io/badge/vulcan_estudios-project-db8836.svg)](http://vulcanst.co)
[![npm version](https://badge.fury.io/js/vulcangrid.svg)](https://badge.fury.io/js/vulcangrid)
[![Build Status](https://travis-ci.org/vulcan-estudios/vulcangrid.svg?branch=master)](https://travis-ci.org/vulcan-estudios/vulcangrid)
[![license](https://img.shields.io/github/license/vulcan-estudios/vulcangrid.svg?maxAge=2592000)](./LICENSE)
[![changelog](https://img.shields.io/badge/changelog-md-007ec6.svg)](./CHANGELOG.md)

[Zurb Foundation](http://foundation.zurb.com/) [grid system](http://foundation.zurb.com/sites/docs/grid.html) for [React](https://facebook.github.io/react/).

## Install

```bash
$ npm install --save vulcangrid
```

## Example

```js
import React from 'react';
import { Row, Column } from 'vulcangrid';

function App () {
  return (
    <Row>
      <Column sm={12} md={6} lg={4}>
        <p>...</p>
      </Column>
      <Column sm={12} md={6} lg={4}>
        <p>...</p>
      </Column>
      <Column sm={12} md={6} lg={4}>
        <p>...</p>
      </Column>
    </Row>
  );
}
```

## API

### `Row`

The `<Row />` component receives the properties:

- Boolean `column` - Enables the row as a **combined column/row**.
- Boolean `expanded` - Enables the row as **fluid row**.

It also accepts `className` and `children`.

### `Column`

The `<Column />` component receives the properties:

- Number `sm` - Small number of column.
- Number `smOffset` - Small offset number of column.
- Number `md` - Medium number of column.
- Number `mdOffset` - Medium offset number of column.
- Number `lg` - Large number of column.
- Number `lgOffset` - Large offset number of column.

It also accepts `className` and `children`.
