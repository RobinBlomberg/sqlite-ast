# SQLite AST

A library for creating abstract syntax trees for SQLite. Useful in conjunction with
[@robinblomberg/sqlite-compiler](https://github.com/RobinBlomberg/sqlite-compiler) to
programmatically create and manipulate SQLite. It is well-tested and covers the entire SQLite
specification (at the time of creation).

## Installation

```sh
npm install @robinblomberg/sqlite-ast
```

## Usage

```js
import { Nodes } from '@robinblomberg/sqlite-ast';

// 'SELECT result-column FROM ((SELECT 1), table-name AS table-alias)'
const ast = Nodes.SelectStmt(
  null,
  [
    Nodes._SelectClause(
      null,
      [Nodes.ResultColumn(Nodes._Identifier('result-column'))],
      [
        Nodes._TableQueryClause([
          Nodes._TableSelectClause(
            Nodes.SelectStmt(
              null,
              [
                Nodes._SelectClause(
                  null,
                  [Nodes.ResultColumn(Nodes._NumericLiteral(1))],
                  [],
                  null,
                  null,
                  [],
                ),
              ],
              null,
            ),
            null,
          ),
          Nodes.QualifiedTableName(
            Nodes._Identifier('table-name'),
            Nodes._Identifier('table-alias'),
            null,
          ),
        ]),
      ],
      null,
      null,
      [],
    ),
  ],
  null,
);
```
