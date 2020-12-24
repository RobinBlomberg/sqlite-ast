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
  | _BindParameter
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
  | _ColumnSelectorClause
  | _DefaultClause
  | _DeferrableClause
  | _ExistsExpression
  | _ForeignKeyConstraint
  | _FrameSpecBetweenClause
  | _FrameSpecExprClause
  | _GroupByClause
  | _Identifier
  | _InExpression
  | _InsertSelectClause
  | _InsertValuesClause
  | _IsExpression
  | _JoinCompound
  | _JoinOnClause
  | _JoinUsingClause
  | _KeywordLiteral
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
  | _QualifiedPath
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

export type _TriggerStmt = UpdateStmt | InsertStmt | DeleteStmt | SelectStmt;

/*
 * SQLite aliases
 * -------------------------------------------------------------------------------------------------
 */

export type CompoundOperator = 'UNION' | 'UNION ALL' | 'INTERSECT' | 'EXCEPT';

export type Expr =
  | LiteralValue
  | _BindParameter
  | _QualifiedPath
  | _Path
  | _Identifier
  /**
   * The UnaryOperator + is a no-op, and has been omitted here.
   * @see https://sqlite.org/lang_expr.html
   */
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
  | TypeName
  | UpdateStmt
  | UpsertClause
  | VacuumStmt
  | WindowDefn
  | WindowFunctionInvocation
  | WithClause;

export type SelectCore = _SelectClause | _ValuesClause;

export type TableOrSubquery =
  | QualifiedTableName
  | _TableCallClause
  | _TableSelectClause
  | _TableQueryClause;

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

export type _AllColumnsClause = {
  type: '_AllColumnsClause';
  tableName: _Identifier;
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

export type _BindParameter = {
  type: '_BindParameter';
  bindParameter: _Identifier;
};

export type _BlobLiteral = {
  type: '_BlobLiteral';
  value: string[];
};

export type _CallExpression = {
  type: '_CallExpression';
  functionName: _Identifier;
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
  collationName: _Identifier;
};

export type _CollateExpression = {
  type: '_CollateExpression';
  expr: Expr;
  collationName: _Identifier;
};

export type _ColumnAliasClause = {
  type: '_ColumnAliasClause';
  expr: Expr;
  as: _Identifier;
};

export type _ColumnSelectorClause = {
  type: '_ColumnSelectorClause';
  indexedColumns: [_Identifier, ..._Identifier[]];
  where: null | Expr;
};

export type _DefaultClause = {
  type: '_DefaultClause';
  expr: Expr;
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
  columnNames: [_Identifier, ..._Identifier[]];
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

export type _Identifier = {
  type: '_Identifier';
  name: string;
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
  columnNames: [_Identifier, ..._Identifier[]];
};

export type _KeywordLiteral = {
  type: '_KeywordLiteral';
  value:
    | 'NULL'
    | 'TRUE'
    | 'FALSE'
    | 'CURRENT_TIME'
    | 'CURRENT_DATE'
    | 'CURRENT_TIMESTAMP';
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
  name: _Identifier;
};

export type _NotNullClause = {
  type: '_NotNullClause';
  onConflict: null | ConflictClause;
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
  object: _Identifier;
  property: _Identifier;
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
  onConflict: null | ConflictClause;
  autoincrement: boolean;
};

export type _PrimaryKeyConstraint = {
  type: '_PrimaryKeyConstraint';
  indexedColumns: [IndexedColumn, ...IndexedColumn[]];
  onConflict: null | ConflictClause;
};

export type _QualifiedPath = {
  type: '_QualifiedPath';
  schemaName: _Identifier;
  path: _Path;
};

export type _RenameClause = {
  type: '_RenameClause';
  from: null | _Identifier;
  to: _Identifier;
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
  columns: _Identifier | ColumnNameList;
  expr: Expr;
};

export type _StringLiteral = {
  type: '_StringLiteral';
  value: string;
};

export type _TableCallClause = {
  type: '_TableCallClause';
  path: _Path | _Identifier;
  args: [Expr, ...Expr[]];
  tableAlias: _Identifier | null;
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
  tableAlias: _Identifier | null;
};

export type _TableSelectorClause = {
  type: '_TableSelectorClause';
  path: _Path | _Identifier;
  args: Expr[];
};

export type _UniqueClause = {
  type: '_UniqueClause';
  onConflict: null | ConflictClause;
};

export type _UniqueConstraint = {
  type: '_UniqueConstraint';
  indexedColumns: [IndexedColumn, ...IndexedColumn[]];
  onConflict: null | ConflictClause;
};

export type _UpdateSetClause = {
  type: '_UpdateSetClause';
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
  windowName: _Identifier;
  windowDefn: _Identifier;
};

/*
  * SQLite nodes
  * ---------------------------------------------------------------------------------------------
  */

export type AggregateFunctionInvocation = {
  type: 'AggregateFunctionInvocation';
  aggregateFunc: _Identifier;
  args: _AggregateArgs | '*' | null;
  filter: null | FilterClause;
};

export type AlterTableStmt = {
  type: 'AlterTableStmt';
  path: _Path | _Identifier;
  action: _RenameClause | _AddClause;
};

export type AnalyzeStmt = {
  type: 'AnalyzeStmt';
  path: _Path | _Identifier | null;
};

export type AttachStmt = {
  type: 'AttachStmt';
  expr: Expr;
  schemaName: _Identifier;
};

export type BeginStmt = {
  type: 'BeginStmt';
  mode: null | 'DEFERRED' | 'IMMEDIATE' | 'EXCLUSIVE';
};

export type ColumnConstraint = {
  type: 'ColumnConstraint';
  name: null | _Identifier;
  constraint: _ColumnConstraintClause;
};

export type ColumnDef = {
  type: 'ColumnDef';
  columnName: _Identifier;
  typeName: TypeName | null;
  columnConstraints: ColumnConstraint[];
};

export type ColumnNameList = {
  type: 'ColumnNameList';
  columnNames: [_Identifier, ..._Identifier[]];
};

/* CommentSyntax (omitted syntax node) */

export type CommitStmt = {
  type: 'CommitStmt';
};

export type CommonTableExpression = {
  type: 'CommonTableExpression';
  tableName: CteTableName;
  as: SelectStmt;
};

/* CompoundSelectStmt (duplicate of SelectStmt) */

export type ConflictClause = {
  type: 'ConflictClause';
  onConflict: 'ROLLBACK' | 'ABORT' | 'FAIL' | 'IGNORE' | 'REPLACE';
};

export type CreateIndexStmt = {
  type: 'CreateIndexStmt';
  unique: boolean;
  ifNotExists: boolean;
  path: _Path | _Identifier;
  tableName: _Identifier;
  selector: _ColumnSelectorClause;
};

export type CreateTableStmt = {
  type: 'CreateTableStmt';
  temporary: boolean;
  ifNotExists: boolean;
  path: _Path | _Identifier;
  target: SelectStmt | _TableDef;
};

export type CreateTriggerStmt = {
  type: 'CreateTriggerStmt';
  temporary: boolean;
  ifNotExists: boolean;
  path: _Path | _Identifier;
  position: 'BEFORE' | 'AFTER' | 'INSTEAD OF' | null;
  event: 'DELETE' | 'INSERT' | 'UPDATE' | _Identifier[];
  tableName: _Identifier;
  forEachRow: boolean;
  when: Expr | null;
  begin: [_TriggerStmt, ..._TriggerStmt[]];
};

export type CreateViewStmt = {
  type: 'CreateViewStmt';
  temporary: boolean;
  ifNotExists: boolean;
  path: _Path | _Identifier;
  columns: _Identifier[];
  select: SelectStmt;
};

export type CreateVirtualTableStmt = {
  type: 'CreateVirtualTableStmt';
  ifNotExists: boolean;
  path: _Path | _Identifier;
  moduleName: _Identifier;
  moduleArguments: _Identifier[];
};

export type CteTableName = {
  type: 'CteTableName';
  tableName: _Identifier;
  columnNames: _Identifier[];
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
  schemaName: _Identifier;
};

export type DropIndexStmt = {
  type: 'DropIndexStmt';
  ifExists: boolean;
  path: _Path | _Identifier;
};

export type DropTableStmt = {
  type: 'DropTableStmt';
  ifExists: boolean;
  path: _Path | _Identifier;
};

export type DropTriggerStmt = {
  type: 'DropTriggerStmt';
  ifExists: boolean;
  path: _Path | _Identifier;
};

export type DropViewStmt = {
  type: 'DropViewStmt';
  ifExists: boolean;
  path: _Path | _Identifier;
};

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
  foreignTable: _Identifier;
  columnNames: _Identifier[];
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
  target: _Identifier | Expr;
  collationName: _Identifier | null;
  orderBy: null | 'ASC' | 'DESC';
};

export type InsertStmt = {
  type: 'InsertStmt';
  withClause: WithClause;
  operator: _InsertOperator;
  path: _Path | _Identifier;
  alias: _Identifier | null;
  columns: _Identifier[];
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
  | _KeywordLiteral;

export type OrderingTerm = {
  type: 'OrderingTerm';
  indexedColumn: IndexedColumn;
  nulls: 'FIRST' | 'LAST' | null;
};

export type OverClause = {
  type: 'OverClause';
  over: _Identifier | WindowDefn;
};

export type PragmaStmt = {
  type: 'PragmaStmt';
  path: _Path | _Identifier;
  right: null | _PragmaSetter | _PragmaGetter;
};

export type PragmaValue = {
  type: 'PragmaValue';
  value: _NumericLiteral | _Identifier;
};

export type QualifiedTableName = {
  type: 'QualifiedTableName';
  path: _Path | _Identifier;
  alias: null | _Identifier;
  indexedBy: _Identifier | false | null;
};

export type RaiseFunction = {
  type: 'RaiseFunction';
  onError: ['ROLLBACK' | 'ABORT' | 'FAIL', _StringLiteral] | null;
};

export type RecursiveCte = {
  type: 'RecursiveCte';
  cteTableName: CteTableName;
  initialSelect: _Identifier;
  all: boolean;
  recursiveSelect: _Identifier;
};

export type ReindexStmt = {
  type: 'ReindexStmt';
  target: _Path | _Identifier | null;
};

export type ReleaseStmt = {
  type: 'ReleaseStmt';
  savepointName: _Identifier;
};

export type ResultColumn = {
  type: 'ResultColumn';
  source: Expr | _ColumnAliasClause | '*' | _AllColumnsClause;
};

export type RollbackStmt = {
  type: 'RollbackStmt';
  savepointName: _Identifier;
};

export type SavepointStmt = {
  type: 'SavepointStmt';
  savepointName: _Identifier;
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
  simpleFunc: _Identifier;
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
  name: _Identifier | null;
  constraint: _TableConstraint;
};

export type TypeName = {
  type: 'TypeName';
  names: [string, ...string[]];
  args: [_NumericLiteral?, _NumericLiteral?];
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
  schemaName: null | _Identifier;
  filename: null | _Identifier;
};

export type WindowDefn = {
  type: 'WindowDefn';
  baseWindowName: null | _Identifier;
  partitionBy: Expr[];
  orderBy: OrderingTerm[];
  frameSpec: FrameSpec | null;
};

export type WindowFunctionInvocation = {
  type: 'WindowFunctionInvocation';
  windowFunc: _Identifier;
  expr: Expr[] | '*';
  filter: null | FilterClause;
  over: WindowDefn | _Identifier;
};

export type WithClause = {
  type: 'WithClause';
  recursive: boolean;
  expressions: [CommonTableExpression, ...CommonTableExpression[]];
};
