/**
 * @see https://sqlite.org/syntaxdiagrams.html
 */

/*
 * Internal aliases
 * -------------------------------------------------------------------------------------------------
 */

export type _BinaryOperator = string;

export type _ColumnConstraintClause =
  | _PrimaryKeyClause
  | _NotNullClause
  | _UniqueClause
  | _CheckClause
  | _DefaultClause
  | _CollateClause
  | ForeignKeyClause
  | _AsClause;

export type _InsertOperator =
  | 'REPLACE'
  | 'INSERT'
  | 'INSERT OR ABORT'
  | 'INSERT OR FAIL'
  | 'INSERT OR IGNORE'
  | 'INSERT OR REPLACE'
  | 'INSERT OR ROLLBACK';

export type _Node =
  | Node
  | _AddClause
  | _AggregateArgs
  | _AsClause
  | _BetweenExpression
  | _BinaryExpression
  | _BinaryKeywordExpression
  | _BlobLiteral
  | _CallExpression
  | _CaseExpression
  | _CaseClause
  | _CastExpression
  | _CheckClause
  | _CheckConstraint
  | _CollateClause
  | _CollateExpression
  | _ColumnAliasClause
  | _ColumnPath
  | _ColumnSelectorClause
  | _CteSelectClause
  | _DefaultClause
  | _DeferrableClause
  | _ExistsExpression
  | _ForeignKeyConstraint
  | _FrameSpecBetweenClause
  | _FrameSpecExprClause
  | _GroupByClause
  | _InExpression
  | _InsertSelectClause
  | _InsertValuesClause
  | _IsExpression
  | _JoinCompound
  | _JoinOnClause
  | _JoinUsingClause
  | _LimitClause
  | _LimiterClause
  | _LimitTailClause
  | _MatchClause
  | _NotNullClause
  | _NullComparisonExpression
  | _NumericLiteral
  | _OnClause
  | _Path
  | _PragmaGetter
  | _PragmaSetter
  | _PrimaryKeyClause
  | _PrimaryKeyConstraint
  | _RenameClause
  | _SelectClause
  | _SelectCompound
  | _SelectorClause
  | _SequenceExpression
  | _SetClause
  | _StringLiteral
  | _TableCallClause
  | _TableDef
  | _TableQueryClause
  | _TableSelectClause
  | _TableSelectorClause
  | _UniqueClause
  | _UniqueConstraint
  | _UpdateSetClause
  | _ValueClause
  | _ValuesClause
  | _WindowAsClause;

export type _SqlStmt =
  | AlterTableStmt
  | AnalyzeStmt
  | AttachStmt
  | BeginStmt
  | CommitStmt
  | CreateIndexStmt
  | CreateTableStmt
  | CreateTriggerStmt
  | CreateViewStmt
  | CreateVirtualTableStmt
  | DeleteStmt
  | DetachStmt
  | DropIndexStmt
  | DropTableStmt
  | DropTriggerStmt
  | DropViewStmt
  | InsertStmt
  | PragmaStmt
  | ReindexStmt
  | ReleaseStmt
  | RollbackStmt
  | SavepointStmt
  | SelectStmt
  | UpdateStmt
  | VacuumStmt;

export type _TableConstraint =
  | _PrimaryKeyConstraint
  | _UniqueConstraint
  | _CheckConstraint
  | _ForeignKeyConstraint;

export type _TableOrSubquery =
  | QualifiedTableName
  | _TableCallClause
  | _TableSelectClause
  | _TableQueryClause;

export type _TriggerStmt = UpdateStmt | InsertStmt | DeleteStmt | SelectStmt;

export type _UnaryOperator = string;

/*
 * SQLite aliases
 * -------------------------------------------------------------------------------------------------
 */

export type CompoundOperator = 'UNION' | 'UNION ALL' | 'INTERSECT' | 'EXCEPT';

export type JoinOperator =
  | ','
  | 'JOIN'
  | 'LEFT OUTER JOIN'
  | 'LEFT JOIN'
  | 'INNER JOIN'
  | 'CROSS JOIN'
  | 'NATURAL JOIN'
  | 'NATURAL LEFT OUTER JOIN'
  | 'NATURAL LEFT JOIN'
  | 'NATURAL INNER JOIN'
  | 'NATURAL CROSS JOIN';

export type Node =
  | AggregateFunctionInvocation
  | AlterTableStmt
  | AnalyzeStmt
  | AttachStmt
  | BeginStmt
  | ColumnConstraint
  | ColumnDef
  | ColumnNameList
  | CommitStmt
  | CommonTableExpression
  | CompoundSelectStmt
  | ConflictClause
  | CreateIndexStmt
  | CreateTableStmt
  | CreateTriggerStmt
  | CreateViewStmt
  | CreateVirtualTableStmt
  | CteTableName
  | DeleteStmt
  | DetachStmt
  | DropIndexStmt
  | DropTableStmt
  | DropTriggerStmt
  | DropViewStmt
  | FactoredSelectStmt
  | FilterClause
  | ForeignKeyClause
  | FrameSpec
  | IndexedColumn
  | InsertStmt
  | JoinClause
  | JoinConstraint
  | OrderingTerm
  | OverClause
  | PragmaStmt
  | PragmaValue
  | QualifiedTableName
  | RaiseFunction
  | RecursiveCte
  | ReindexStmt
  | ReleaseStmt
  | ResultColumn
  | RollbackStmt
  | SavepointStmt
  | SelectStmt
  | SimpleFunctionInvocation
  | SimpleSelectStmt
  | SqlStmt
  | SqlStmtList
  | TableConstraint
  | TableOrSubquery
  | TypeName
  | UpdateStmt
  | UpsertClause
  | VacuumStmt
  | WindowDefn
  | WindowFunctionInvocation
  | WithClause;

export type SelectCore = _SelectClause | _ValuesClause;

/*
  * Internal nodes
  * -------------------------------------------------------------------------------------------------
  */

export type _AddClause = {
  type: '_AddClause';
  columnDef: ColumnDef;
};

export type _AggregateArgs = {
  type: '_AggregateArgs';
  distinct: boolean;
  expressions: [Expr, ...Expr[]];
};

export type _AsClause = {
  type: '_AsClause';
  generatedAlways: boolean;
  as: Expr;
  mode: null | 'STORED' | 'VIRTUAL';
};

export type _BetweenExpression = {
  type: '_BetweenExpression';
  negated: boolean;
  lower: Expr;
  upper: Expr;
};

export type _BinaryExpression = {
  type: '_BinaryExpression';
  left: Expr;
  operator: _BinaryOperator;
  right: Expr;
};

export type _BinaryKeywordExpression = {
  type: '_BinaryKeywordExpression';
  negated: boolean;
  operator: 'LIKE' | 'GLOB' | 'REGEXP' | 'MATCH';
  expr: Expr;
  escape: null | Expr;
};

export type _BlobLiteral = {
  type: '_BlobLiteral';
  value: string[];
};

export type _CallExpression = {
  type: '_CallExpression';
  functionName: string;
  args: Expr[] | '*';
  filter: null | FilterClause;
  over: null | OverClause;
};

export type _CaseExpression = {
  type: '_CaseExpression';
  discriminant: Expr | null;
  cases: [_CaseClause, ..._CaseClause[]];
  alternate: Expr | null;
};

export type _CaseClause = {
  type: '_CaseClause';
  when: Expr;
  then: Expr;
};

export type _CastExpression = {
  type: '_CastExpression';
  cast: Expr;
  as: TypeName;
};

export type _CheckClause = {
  type: '_CheckClause';
  expr: Expr;
};

export type _CheckConstraint = {
  type: '_CheckConstraint';
  check: Expr;
};

export type _CollateClause = {
  type: '_CollateClause';
  collationName: string;
};

export type _CollateExpression = {
  type: '_CollateExpression';
  expr: Expr;
  collationName: string;
};

export type _ColumnAliasClause = {
  type: '_ColumnAliasClause';
  expr: Expr;
  as: string | null;
};

export type _ColumnSelectorClause = {
  type: '_ColumnSelectorClause';
  indexedColumns: [string, ...string[]];
  where: null | Expr;
};

export type _CteSelectClause = {
  type: '_CteSelectClause';
  cteTableName: CteTableName;
  as: SelectStmt;
};

export type _ColumnPath = {
  type: '_ColumnPath';
  tablePath: _Path | null;
  columnName: string;
};

export type _DefaultClause = {
  type: '_DefaultClause';
  expr: Expr | LiteralValue | number; // LiteralValue exists in Expr, but can have a simpler syntax.
};

export type _DeferrableClause = {
  type: '_DeferrableClause';
  negated: boolean;
  initially: 'DEFERRED' | 'IMMEDIATE' | null;
};

export type _ExistsExpression = {
  type: '_ExistsExpression';
  negated: boolean;
  select: SelectStmt;
};

export type _ForeignKeyConstraint = {
  type: '_ForeignKeyConstraint';
  columnNames: [string, ...string[]];
  foreignKey: ForeignKeyClause;
};

export type _FrameSpecBetweenClause = {
  type: '_FrameSpecBetweenClause';
  between: 'UNBOUNDED PRECEDING' | _FrameSpecExprClause | 'CURRENT ROW';
  and: _FrameSpecExprClause | 'CURRENT ROW' | 'UNBOUNDED FOLLOWING';
};

export type _FrameSpecExprClause = {
  type: '_FrameSpecExprClause';
  expr: Expr;
  position: 'PRECEDING' | 'FOLLOWING';
};

export type _GroupByClause = {
  type: '_GroupByClause';
  expressions: [Expr, ...Expr[]];
  having: Expr | null;
};

export type _InExpression = {
  type: '_InExpression';
  negated: boolean;
  selector: _SelectorClause | _TableSelectorClause;
};

export type _InsertSelectClause = {
  type: '_InsertSelectClause';
  select: SelectStmt;
  upsert: null | UpsertClause;
};

export type _InsertValuesClause = {
  type: '_InsertValuesClause';
  values: _ValuesClause;
  upsert: null | UpsertClause;
};

export type _IsExpression = {
  type: '_IsExpression';
  left: Expr;
  negated: boolean;
  right: Expr;
};

export type _JoinCompound = {
  type: '_JoinCompound';
  operator: JoinOperator;
  query: TableOrSubquery;
  constraint: JoinConstraint;
};

export type _JoinOnClause = {
  type: '_JoinOnClause';
  on: Expr;
};

export type _JoinUsingClause = {
  type: '_JoinUsingClause';
  columnNames: [string, ...string[]];
};

export type _LimitClause = {
  type: '_LimitClause';
  left: Expr;
  right: _LimitTailClause | null;
};

export type _LimiterClause = {
  type: '_LimiterClause';
  orderBy: OrderingTerm[];
  limit: _LimitClause | null;
};

export type _LimitTailClause = {
  type: '_LimitTailClause';
  offset: boolean;
  expr: Expr;
};

export type _MatchClause = {
  type: '_MatchClause';
  name: string;
};

export type _NotNullClause = {
  type: '_NotNullClause';
  onConflict: ConflictClause;
};

export type _NullComparisonExpression = {
  type: '_NullComparisonExpression';
  expr: Expr;
  negated: boolean;
};

export type _NumericLiteral = {
  type: '_NumericLiteral';
  value: number;
};

export type _OnClause = {
  type: '_OnClause';
  on: 'DELETE' | 'UPDATE';
  action: 'SET NULL' | 'SET DEFAULT' | 'CASCADE' | 'RESTRICT' | 'NO ACTION';
};

export type _Path = {
  type: '_Path';
  object: string | null;
  property: string;
};

export type _PragmaGetter = {
  type: '_PragmaGetter';
  value: PragmaValue;
};

export type _PragmaSetter = {
  type: '_PragmaSetter';
  value: PragmaValue;
};

export type _PrimaryKeyClause = {
  type: '_PrimaryKeyClause';
  orderBy: null | 'ASC' | 'DESC';
  onConflict: ConflictClause;
  autoincrement: boolean;
};

export type _PrimaryKeyConstraint = {
  type: '_PrimaryKeyConstraint';
  indexedColumns: [IndexedColumn, ...IndexedColumn[]];
  onConflict: null | ConflictClause;
};

export type _RenameClause = {
  type: '_RenameClause';
  from: null | string;
  to: string;
};

export type _SelectClause = {
  type: '_SelectClause';
  modifier: null | 'DISTINCT' | 'ALL';
  resultColumns: [ResultColumn, ...ResultColumn[]];
  from: TableOrSubquery | null;
  where: null | Expr;
  groupBy: null | _GroupByClause;
  window: _WindowAsClause[];
};

export type _SelectCompound = {
  type: '_SelectCompound';
  operator: CompoundOperator;
  selector: SelectCore;
};

export type _SelectorClause = {
  type: '_SelectorClause';
  selector: SelectStmt | Expr[];
};

export type _SequenceExpression = {
  type: '_SequenceExpression';
  expressions: [Expr, ...Expr[]];
};

export type _SetClause = {
  type: '_SetClause';
  columns: string | ColumnNameList;
  expr: Expr;
};

export type _StringLiteral = {
  type: '_StringLiteral';
  value: string;
};

export type _TableCallClause = {
  type: '_TableCallClause';
  path: _Path;
  args: [Expr, ...Expr[]];
  tableAlias: string;
};

export type _TableDef = {
  type: '_TableDef';
  columnDefs: [ColumnDef, ...ColumnDef[]];
  tableConstraints: TableConstraint[];
  withoutRowId: boolean;
};

export type _TableQueryClause = {
  type: '_TableQueryClause';
  query: [TableOrSubquery, ...TableOrSubquery[]] | JoinClause;
};

export type _TableSelectClause = {
  type: '_TableSelectClause';
  select: SelectStmt;
  tableAlias: string;
};

export type _TableSelectorClause = {
  type: '_TableSelectorClause';
  path: _Path;
  args: Expr[];
};

export type _UniqueClause = {
  type: '_UniqueClause';
  conflict: ConflictClause;
};

export type _UniqueConstraint = {
  type: '_UniqueConstraint';
  indexedColumns: [IndexedColumn, ...IndexedColumn[]];
  conflict: null | ConflictClause;
};

export type _UpdateSetClause = {
  type: '_UpsertSetClause';
  set: [_SetClause, ..._SetClause[]];
  where: null | Expr;
};

export type _ValueClause = {
  type: '_ValueClause';
  values: [Expr, ...Expr[]];
};

export type _ValuesClause = {
  type: '_ValuesClause';
  rows: [_ValueClause, ..._ValueClause[]];
};

export type _WindowAsClause = {
  type: '_WindowAsClause';
  windowName: string;
  windowDefn: WindowDefn;
};

/*
  * SQLite nodes
  * ---------------------------------------------------------------------------------------------
  */

export type AggregateFunctionInvocation = {
  type: 'AggregateFunctionInvocation';
  aggregateFunc: string;
  args: _AggregateArgs | '*' | null;
  filter: null | FilterClause;
};

export type AlterTableStmt = {
  type: 'AlterTableStmt';
  path: _Path;
  action: _RenameClause | _AddClause;
};

export type AnalyzeStmt = {
  type: 'AnalyzeStmt';
  path: null | _Path;
};

export type AttachStmt = {
  type: 'AttachStmt';
  expr: Expr;
  schemaName: string;
};

export type BeginStmt = {
  type: 'BeginStmt';
  mode: null | 'DEFERRED' | 'IMMEDIATE' | 'EXCLUSIVE';
};

export type ColumnConstraint = {
  type: 'ColumnConstraint';
  path: string | null;
  constraint: _ColumnConstraintClause;
};

export type ColumnDef = {
  type: 'ColumnDef';
  columnName: string;
  typeName: string | null;
  columnConstraints: ColumnConstraint[];
};

export type ColumnNameList = {
  type: 'ColumnNameList';
  columnNames: [string, ...string[]];
};

/* CommentSyntax (omitted syntax node) */

export type CommitStmt = {
  type: 'CommitStmt';
};

export type CommonTableExpression = {
  type: 'CommonTableExpresison';
  tableName: string;
  columnNames: string[];
  as: SelectStmt;
};

export type CompoundSelectStmt = {
  type: 'CompoundSelectStmt';
  withClause: WithClause | null;
  select: [SelectCore, ..._SelectCompound[]];
  limiter: _LimiterClause | null;
};

export type ConflictClause = {
  type: 'ConflictClause';
  onConflict: null | 'ROLLBACK' | 'ABORT' | 'FAIL' | 'IGNORE' | 'REPLACE';
};

export type CreateIndexStmt = {
  type: 'CreateIndexStmt';
  unique: boolean;
  ifNotExists: boolean;
  path: _Path;
  tableName: string;
  selector: _ColumnSelectorClause;
};

export type CreateTableStmt = {
  type: 'CreateTableStmt';
  temporary: boolean;
  ifNotExists: boolean;
  path: _Path;
  target: SelectStmt | _TableDef;
};

export type CreateTriggerStmt = {
  type: 'CreateTriggerStmt';
  temporary: boolean;
  ifNotExists: boolean;
  path: _Path;
  position: 'BEFORE' | 'AFTER' | 'INSTEAD OF' | null;
  event: 'DELETE' | 'INSERT' | string[];
  tableName: string;
  forEachRow: boolean;
  when: Expr | null;
  begin: [_TriggerStmt, ..._TriggerStmt[]];
};

export type CreateViewStmt = {
  type: 'CreateViewStmt';
  temporary: boolean;
  ifNotExists: boolean;
  path: _Path;
  columns: string[];
  select: SelectStmt;
};

export type CreateVirtualTableStmt = {
  type: 'CreateVirtualTableStmt';
  ifNotExists: boolean;
  path: _Path;
  moduleName: string;
  moduleArguments: string[];
};

export type CteTableName = {
  type: 'CteTableName';
  tableName: string;
  columnNames: string[];
};

export type DeleteStmt = {
  type: 'DeleteStmt';
  withClause: WithClause | null;
  qualifiedTableName: QualifiedTableName;
  where: Expr | null;
  limiter: _LimiterClause | null; // Merged from DeleteStmtLimited.
};

/* DeleteStmtLimited (merged into DeleteStmt) */

export type DetachStmt = {
  type: 'DetachStmt';
  schemaName: string;
};

export type DropIndexStmt = {
  type: 'DropIndexStmt';
  ifExists: boolean;
  path: _Path;
};

export type DropTableStmt = {
  type: 'DropTableStmt';
  ifExists: boolean;
  path: _Path;
};

export type DropTriggerStmt = {
  type: 'DropTriggerStmt';
  ifExists: boolean;
  path: _Path;
};

export type DropViewStmt = {
  type: 'DropViewStmt';
  ifExists: boolean;
  path: _Path;
};

export type Expr =
  | LiteralValue
  | string
  | _ColumnPath
  | _UnaryOperator
  | _BinaryExpression
  | _CallExpression
  | _SequenceExpression
  | _CastExpression
  | _CollateExpression
  | _BinaryKeywordExpression
  | _NullComparisonExpression
  | _IsExpression
  | _BetweenExpression
  | _InExpression
  | _ExistsExpression
  | _CaseExpression
  | RaiseFunction;

export type FactoredSelectStmt = {
  type: 'FactoredSelectStmt';
  withClause: WithClause | null;
  selectors: [SelectCore, ..._SelectCompound[]];
  limiter: _LimiterClause | null;
};

export type FilterClause = {
  type: 'FilterClause';
  where: Expr;
};

export type ForeignKeyClause = {
  type: 'ForeignKeyClause';
  foreignTable: string;
  columnNames: string[];
  events: (_OnClause | _MatchClause)[];
  deferrable: _DeferrableClause | null;
};

export type FrameSpec = {
  type: 'FrameSpec';
  frame: 'RANGE' | 'ROWS' | 'GROUPS';
  target: _FrameSpecBetweenClause | 'UNBOUNDED PRECEDING' | Expr | 'CURRENT ROW';
  exclude: 'NOT OTHERS' | 'CURRENT ROW' | 'GROUP' | 'TIES' | null;
};

export type IndexedColumn = {
  type: 'IndexedColumn';
  target: string | Expr;
  collationName: string | null;
  orderBy: null | 'ASC' | 'DESC';
};

export type InsertStmt = {
  type: 'InsertStmt';
  withClause: WithClause;
  operator: _InsertOperator;
  path: _Path;
  alias: string | null;
  columns: string[];
  source: _InsertValuesClause | _InsertSelectClause | 'DEFAULT VALUES';
};

export type JoinClause = {
  type: 'JoinClause';
  joinees: [TableOrSubquery, ..._JoinCompound[]];
};

export type JoinConstraint = {
  type: 'JoinConstraint';
  constraint: _JoinOnClause | _JoinUsingClause | null;
};

export type LiteralValue =
  | _NumericLiteral
  | _StringLiteral
  | _BlobLiteral
  'NULL'
  'TRUE'
  'FALSE'
  'CURRENT_TIME'
  'CURRENT_DATE'
  'CURRENT_TIMESTAMP';

export type OrderingTerm = {
  type: 'OrderingTerm';
  indexedColumn: IndexedColumn;
  nulls: 'FIRST' | 'LAST' | null;
};

export type OverClause = {
  type: 'OverClause';
  over: string | WindowDefn;
};

export type PragmaStmt = {
  type: 'PragmaStmt';
  path: _Path;
  right: null | _PragmaSetter | _PragmaGetter;
};

export type PragmaValue = {
  type: 'PragmaValue';
  value: number | string;
};

export type QualifiedTableName = {
  type: 'QualifiedTableName';
  path: _Path;
  alias: null | string;
  indexedBy: string | false | null;
};

export type RaiseFunction = {
  type: 'RaiseFunction';
  onError: ['ROLLBACK' | 'ABORT' | 'FAIL', string] | null;
};

export type RecursiveCte = {
  type: 'RecursiveCte';
  cteTableName: CteTableName;
  initialSelect: string;
  all: boolean;
  recursiveSelect: string;
};

export type ReindexStmt = {
  type: 'ReindexStmt';
  target: null | string | _Path;
};

export type ReleaseStmt = {
  type: 'ReleaseStmt';
  savepointName: string;
};

export type ResultColumn = {
  type: 'ResultColumn';
  source: _ColumnAliasClause | string;
};

export type RollbackStmt = {
  type: 'RollbackStmt';
  savepointName: string;
};

export type SavepointStmt = {
  type: 'SavepointStmt';
  savepointName: string;
};

export type SelectStmt = {
  type: 'SelectStmt';
  withClause: WithClause | null;
  select: [SelectCore, ..._SelectCompound[]];
  limiter: _LimiterClause | null;
};

/* SignedNumber (omitted syntax node) */

export type SimpleFunctionInvocation = {
  type: 'SimpleFunctionInvocation';
  simpleFunc: string;
  args: Expr[] | '*';
};

export type SimpleSelectStmt = {
  type: 'SimpleSelectStmt';
  withClause: WithClause | null;
  select: SelectCore;
  limiter: _LimiterClause | null;
};

export type SqlStmt = {
  type: 'SqlStmt';
  explain: boolean;
  statement: _SqlStmt;
};

export type SqlStmtList = {
  type: 'SqlStmtList';
  statements: SqlStmt[];
};

export type TableConstraint = {
  type: 'TableConstraint';
  path: null | string;
  constraint: _TableConstraint;
};

export type TableOrSubquery = {
  type: 'TableOrSubquery';
  query: _TableOrSubquery;
};

export type TypeName = {
  type: 'TypeName';
  names: [string, ...string[]];
  args: [number?, number?];
};

export type UpdateStmt = {
  type: 'UpdateStmt';
  withClause: WithClause;
  updateOr: null | 'ABORT' | 'FAIL' | 'IGNORE' | 'REPLACE' | 'ROLLBACK';
  path: QualifiedTableName;
  set: [_SetClause, ..._SetClause[]];
  from: _TableQueryClause;
  where: Expr | null;
  limiter: _LimiterClause | null; // Merged from UpdateStmtLimited.
};

/* UpdateStmtLimited (merged into UpdateStmt) */

export type UpsertClause = {
  type: 'UpsertClause';
  onConflict: null | _ColumnSelectorClause;
  action: null | _UpdateSetClause;
};

export type VacuumStmt = {
  type: 'VacuumStmt';
  schemaName: null | string;
  filename: null | string;
};

export type WindowDefn = {
  type: 'WindowDefn';
  baseWindowName: null | string;
  partitionBy: Expr[];
  orderBy: OrderingTerm[];
  frameSpec: FrameSpec | null;
};

export type WindowFunctionInvocation = {
  type: 'WindowFunctionInvocation';
  windowFunc: string;
  expr: Expr[] | '*';
  filter: null | FilterClause;
  over: WindowDefn | string;
};

export type WithClause = {
  type: 'WithClause';
  recursive: boolean;
  expressions: [_CteSelectClause, ..._CteSelectClause[]];
};
