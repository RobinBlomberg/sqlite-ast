import * as AST from './ast';

declare function _AddClause(
  columnDef: AST.ColumnDef
): AST._AddClause;

declare function _AggregateArgs(
  distinct: boolean,
  expressions: [AST.Expr, ...AST.Expr[]]
): AST._AggregateArgs;

declare function _AllColumnsClause(
  tableName: AST._Identifier
): AST._AllColumnsClause;

declare function _AsClause(
  generatedAlways: boolean,
  as: AST.Expr,
  mode: null | 'STORED' | 'VIRTUAL'
): AST._AsClause;

declare function _BetweenExpression(
  negated: boolean,
  lower: AST.Expr,
  upper: AST.Expr
): AST._BetweenExpression;

declare function _BinaryExpression(
  left: AST.Expr,
  operator: AST._BinaryOperator,
  right: AST.Expr
): AST._BinaryExpression;

declare function _BinaryKeywordExpression(
  negated: boolean,
  operator: 'LIKE' | 'GLOB' | 'REGEXP' | 'MATCH',
  expr: AST.Expr,
  escape: null | AST.Expr
): AST._BinaryKeywordExpression;

declare function _BindParameter(
  bindParameter: AST._Identifier
): Ast._BindParameter;

declare function _BlobLiteral(
  value: string[]
): AST._BlobLiteral;

declare function _CallExpression(
  functionName: AST._Identifier,
  args: AST.Expr[] | '*',
  filter: null | AST.FilterClause,
  over: null | AST.OverClause
): AST._CallExpression;

declare function _CaseExpression(
  discriminant: AST.Expr | null,
  cases: [AST._CaseClause, ...AST._CaseClause[]],
  alternate: AST.Expr | null
): AST._CaseExpression;

declare function _CaseClause(
  when: AST.Expr,
  then: AST.Expr
): AST._CaseClause;

declare function _CastExpression(
  cast: AST.Expr,
  as: AST.TypeName
): AST._CastExpression;

declare function _CheckClause(
  expr: AST.Expr
): AST._CheckClause;

declare function _CheckConstraint(
  check: AST.Expr
): AST._CheckConstraint;

declare function _CollateClause(
  collationName: AST._Identifier
): AST._CollateClause;

declare function _CollateExpression(
  expr: AST.Expr,
  collationName: AST._Identifier
): AST._CollateExpression;

declare function _ColumnAliasClause(
  expr: AST.Expr,
  as: AST._Identifier | null
): AST._ColumnAliasClause;

declare function _ColumnSelectorClause(
  indexedColumns: [AST._Identifier, ...AST._Identifier[]],
  where: null | AST.Expr
): AST._ColumnSelectorClause;

declare function _DefaultClause(
  expr: AST.Expr
): AST._DefaultClause;

declare function _DeferrableClause(
  negated: boolean,
  initially: 'DEFERRED' | 'IMMEDIATE' | null
): AST._DeferrableClause;

declare function _ExistsExpression(
  negated: boolean,
  select: AST.SelectStmt
): AST._ExistsExpression;

declare function _ForeignKeyConstraint(
  columnNames: [AST._Identifier, ...AST._Identifier[]],
  foreignKey: AST.ForeignKeyClause
): AST._ForeignKeyConstraint;

declare function _FrameSpecBetweenClause(
  between: 'UNBOUNDED PRECEDING' | AST._FrameSpecExprClause | 'CURRENT ROW',
  and: AST._FrameSpecExprClause | 'CURRENT ROW' | 'UNBOUNDED FOLLOWING'
): AST._FrameSpecBetweenClause;

declare function _FrameSpecExprClause(
  expr: AST.Expr,
  position: 'PRECEDING' | 'FOLLOWING'
): AST._FrameSpecExprClause;

declare function _GroupByClause(
  expressions: [AST.Expr, ...AST.Expr[]],
  having: AST.Expr | null
): AST._GroupByClause;

declare function _Identifier(
  name: string
): AST._Identifier;

declare function _InExpression(
  negated: boolean,
  selector: AST._SelectorClause | AST._TableSelectorClause
): AST._InExpression;

declare function _InsertSelectClause(
  select: AST.SelectStmt,
  upsert: null | AST.UpsertClause
): AST._InsertSelectClause;

declare function _InsertValuesClause(
  values: AST._ValuesClause,
  upsert: null | AST.UpsertClause
): AST._InsertValuesClause;

declare function _IsExpression(
  left: AST.Expr,
  negated: boolean,
  right: AST.Expr
): AST._IsExpression;

declare function _JoinCompound(
  operator: AST.JoinOperator,
  query: AST.TableOrSubquery,
  constraint: AST.JoinConstraint
): AST._JoinCompound;

declare function _JoinOnClause(
  on: AST.Expr
): AST._JoinOnClause;

declare function _JoinUsingClause(
  columnNames: [AST._Identifier, ...AST._Identifier[]]
): AST._JoinUsingClause;

declare function _KeywordLiteral(
  value: 'NULL' | 'TRUE' | 'FALSE' | 'CURRENT_TIME' | 'CURRENT_DATE' | 'CURRENT_TIMESTAMP'
): AST._KeywordLiteral

declare function _LimitClause(
  left: AST.Expr,
  right: AST._LimitTailClause | null
): AST._LimitClause;

declare function _LimiterClause(
  orderBy: AST.OrderingTerm[],
  limit: AST._LimitClause | null
): AST._LimiterClause;

declare function _LimitTailClause(
  offset: boolean,
  expr: AST.Expr
): AST._LimitTailClause;

declare function _MatchClause(
  name: AST._Identifier
): AST._MatchClause;

declare function _NotNullClause(
  onConflict: null | AST.ConflictClause
): AST._NotNullClause;

declare function _NullComparisonExpression(
  expr: AST.Expr,
  negated: boolean
): AST._NullComparisonExpression;

declare function _NumericLiteral(
  value: number
): AST._NumericLiteral;

declare function _OnClause(
  on: 'DELETE' | 'UPDATE',
  action: 'SET NULL' | 'SET DEFAULT' | 'CASCADE' | 'RESTRICT' | 'NO ACTION'
): AST._OnClause;

declare function _Path(
  object: AST._Identifier,
  property: AST._Identifier
): AST._Path;

declare function _PragmaGetter(
  value: AST.PragmaValue
): AST._PragmaGetter;

declare function _PragmaSetter(
  value: AST.PragmaValue
): AST._PragmaSetter;

declare function _PrimaryKeyClause(
  orderBy: null | 'ASC' | 'DESC',
  onConflict: null | AST.ConflictClause,
  autoincrement: boolean
): AST._PrimaryKeyClause;

declare function _PrimaryKeyConstraint(
  indexedColumns: [AST.IndexedColumn, ...AST.IndexedColumn[]],
  onConflict: null | AST.ConflictClause
): AST._PrimaryKeyConstraint;

declare function _QualifiedPath(
  schemaName: AST._Identifier,
  path: AST._Path
): AST._QualifiedPath;

declare function _RenameClause(
  from: null | AST._Identifier,
  to: AST._Identifier
): AST._RenameClause;

declare function _SelectClause(
  modifier: null | 'DISTINCT' | 'ALL',
  resultColumns: [AST.ResultColumn, ...AST.ResultColumn[]],
  from: AST.TableOrSubquery | null,
  where: null | AST.Expr,
  groupBy: null | AST._GroupByClause,
  window: AST._WindowAsClause[]
): AST._SelectClause;

declare function _SelectCompound(
  operator: AST.CompoundOperator,
  selector: AST.SelectCore
): AST._SelectCompound;

declare function _SelectorClause(
  selector: AST.SelectStmt | AST.Expr[]
): AST._SelectorClause;

declare function _SequenceExpression(
  expressions: [AST.Expr, ...AST.Expr[]]
): AST._SequenceExpression;

declare function _SetClause(
  columns: AST._Identifier | AST.ColumnNameList,
  expr: AST.Expr
): AST._SetClause;

declare function _StringLiteral(
  value: string
): AST._StringLiteral;

declare function _TableCallClause(
  path: AST._Path | AST._Identifier,
  args: [AST.Expr, ...AST.Expr[]],
  tableAlias: AST._Identifier | null
): AST._TableCallClause;

declare function _TableDef(
  columnDefs: [AST.ColumnDef, ...AST.ColumnDef[]],
  tableConstraints: AST.TableConstraint[],
  withoutRowId: boolean
): AST._TableDef;

declare function _TableQueryClause(
  query: [AST.TableOrSubquery, ...AST.TableOrSubquery[]] | AST.JoinClause
): AST._TableQueryClause;

declare function _TableSelectClause(
  select: AST.SelectStmt,
  tableAlias: AST._Identifier | null
): AST._TableSelectClause;

declare function _TableSelectorClause(
  path: AST._Path | AST._Identifier,
  args: AST.Expr[]
): AST._TableSelectorClause;

declare function _UnaryExpression(
  operator: AST._UnaryOperator,
  argument: AST.Expr
): Ast._UnaryExpression;

declare function _UniqueClause(
  onConflict: null | AST.ConflictClause
): AST._UniqueClause;

declare function _UniqueConstraint(
  indexedColumns: [AST.IndexedColumn, ...AST.IndexedColumn[]],
  onConflict: null | AST.ConflictClause
): AST._UniqueConstraint;

declare function _UpdateSetClause(
  set: [AST._SetClause, ...AST._SetClause[]],
  where: null | AST.Expr
): AST._UpdateSetClause;

declare function _ValueClause(
  values: [AST.Expr, ...AST.Expr[]]
): AST._ValueClause;

declare function _ValuesClause(
  rows: [AST._ValueClause, ...AST._ValueClause[]]
): AST._ValuesClause;

declare function _WindowAsClause(
  windowName: AST._Identifier,
  windowDefn: AST._Identifier
): AST._WindowAsClause;

declare function AggregateFunctionInvocation(
  aggregateFunc: AST._Identifier,
  args: AST._AggregateArgs | '*' | null,
  filter: null | AST.FilterClause
): AST.AggregateFunctionInvocation;

declare function AlterTableStmt(
  path: AST._Path | AST._Identifier,
  action: AST._RenameClause | AST._AddClause
): AST.AlterTableStmt;

declare function AnalyzeStmt(
  path: AST._Path | AST._Identifier | null
): AST.AnalyzeStmt;

declare function AttachStmt(
  expr: AST.Expr,
  schemaName: AST._Identifier
): AST.AttachStmt;

declare function BeginStmt(
  mode: null | 'DEFERRED' | 'IMMEDIATE' | 'EXCLUSIVE'
): AST.BeginStmt;

declare function ColumnConstraint(
  name: null | AST._Identifier,
  constraint: AST._ColumnConstraintClause
): AST.ColumnConstraint;

declare function ColumnDef(
  columnName: AST._Identifier,
  typeName: AST.TypeName | null,
  columnConstraints: AST.ColumnConstraint[]
): AST.ColumnDef;

declare function ColumnNameList(
  columnNames: [AST._Identifier, ...AST._Identifier[]]
): AST.ColumnNameList;

declare function CommitStmt(): AST.CommitStmt;

declare function CommonTableExpression(
  tableName: AST.CteTableName,
  as: AST.SelectStmt
): AST.CommonTableExpression;

declare function ConflictClause(
  onConflict: 'ROLLBACK' | 'ABORT' | 'FAIL' | 'IGNORE' | 'REPLACE'
): AST.ConflictClause;

declare function CreateIndexStmt(
  unique: boolean,
  ifNotExists: boolean,
  path: AST._Path | AST._Identifier,
  tableName: AST._Identifier,
  selector: AST._ColumnSelectorClause
): AST.CreateIndexStmt;

declare function CreateTableStmt(
  temporary: boolean,
  ifNotExists: boolean,
  path: AST._Path | AST._Identifier,
  target: AST.SelectStmt | AST._TableDef
): AST.CreateTableStmt;

declare function CreateTriggerStmt(
  temporary: boolean,
  ifNotExists: boolean,
  path: AST._Path | AST._Identifier,
  position: 'BEFORE' | 'AFTER' | 'INSTEAD OF' | null,
  event: 'DELETE' | 'INSERT' | 'UPDATE' | AST._Identifier[],
  tableName: AST._Identifier,
  forEachRow: boolean,
  when: AST.Expr | null,
  begin: [AST._TriggerStmt, ...AST._TriggerStmt[]]
): AST.CreateTriggerStmt;

declare function CreateViewStmt(
  temporary: boolean,
  ifNotExists: boolean,
  path: AST._Path | AST._Identifier,
  columns: AST._Identifier[],
  select: AST.SelectStmt
): AST.CreateViewStmt;

declare function CreateVirtualTableStmt(
  ifNotExists: boolean,
  path: AST._Path | AST._Identifier,
  moduleName: AST._Identifier,
  moduleArguments: AST._Identifier[]
): AST.CreateVirtualTableStmt;

declare function CteTableName(
  tableName: AST._Identifier,
  columnNames: AST._Identifier[]
): AST.CteTableName;

declare function DeleteStmt(
  withClause: AST.WithClause | null,
  qualifiedTableName: AST.QualifiedTableName,
  where: AST.Expr | null,
  limiter: AST._LimiterClause | null
): AST.DeleteStmt;

declare function DetachStmt(
  schemaName: AST._Identifier
): AST.DetachStmt;

declare function DropIndexStmt(
  ifExists: boolean,
  path: AST._Path | AST._Identifier
): AST.DropIndexStmt;

declare function DropTableStmt(
  ifExists: boolean,
  path: AST._Path | AST._Identifier
): AST.DropTableStmt;

declare function DropTriggerStmt(
  ifExists: boolean,
  path: AST._Path | AST._Identifier
): AST.DropTriggerStmt;

declare function DropViewStmt(
  ifExists: boolean,
  path: AST._Path | AST._Identifier
): AST.DropViewStmt;

declare function FactoredSelectStmt(
  withClause: AST.WithClause | null,
  selectors: [AST.SelectCore, ...AST._SelectCompound[]],
  limiter: AST._LimiterClause | null
): AST.FactoredSelectStmt;

declare function FilterClause(
  where: AST.Expr
): AST.FilterClause;

declare function ForeignKeyClause(
  foreignTable: AST._Identifier,
  columnNames: AST._Identifier[],
  events: (AST._OnClause | AST._MatchClause)[],
  deferrable: AST._DeferrableClause | null
): AST.ForeignKeyClause;

declare function FrameSpec(
  frame: 'RANGE' | 'ROWS' | 'GROUPS',
  target: AST._FrameSpecBetweenClause | 'UNBOUNDED PRECEDING' | AST.Expr | 'CURRENT ROW',
  exclude: 'NOT OTHERS' | 'CURRENT ROW' | 'GROUP' | 'TIES' | null
): AST.FrameSpec;

declare function IndexedColumn(
  target: AST._Identifier | AST.Expr,
  collationName: AST._Identifier | null,
  orderBy: null | 'ASC' | 'DESC'
): AST.IndexedColumn;

declare function InsertStmt(
  withClause: AST.WithClause,
  operator: AST._InsertOperator,
  path: AST._Path | AST._Identifier,
  alias: AST._Identifier | null,
  columns: AST._Identifier[],
  source: AST._InsertValuesClause | AST._InsertSelectClause | 'DEFAULT VALUES'
): AST.InsertStmt;

declare function JoinClause(
  joinees: [AST.TableOrSubquery, ...AST._JoinCompound[]]
): AST.JoinClause;

declare function JoinConstraint(
  constraint: AST._JoinOnClause | AST._JoinUsingClause | null
): AST.JoinConstraint;

declare function OrderingTerm(
  indexedColumn: AST.IndexedColumn,
  nulls: 'FIRST' | 'LAST' | null
): AST.OrderingTerm;

declare function OverClause(
  over: AST._Identifier | AST.WindowDefn
): AST.OverClause;

declare function PragmaStmt(
  path: AST._Path | AST._Identifier,
  right: null | AST._PragmaSetter | AST._PragmaGetter
): AST.PragmaStmt;

declare function PragmaValue(
  value: AST._NumericLiteral | AST._Identifier
): AST.PragmaValue;

declare function QualifiedTableName(
  path: AST._Path | AST._Identifier,
  alias: null | AST._Identifier,
  indexedBy: AST._Identifier | false | null
): AST.QualifiedTableName;

declare function RaiseFunction(
  onError: ['ROLLBACK' | 'ABORT' | 'FAIL', AST._StringLiteral] | null
): AST.RaiseFunction;

declare function RecursiveCte(
  cteTableName: AST.CteTableName,
  initialSelect: AST._Identifier,
  all: boolean,
  recursiveSelect: AST._Identifier
): AST.RecursiveCte;

declare function ReindexStmt(
  target: AST._Path | AST._Identifier | null
): AST.ReindexStmt;

declare function ReleaseStmt(
  savepointName: AST._Identifier
): AST.ReleaseStmt;

declare function ResultColumn(
  source: AST.Expr | AST._ColumnAliasClause | '*' | AST._AllColumnsClause
): AST.ResultColumn;

declare function RollbackStmt(
  savepointName: AST._Identifier
): AST.RollbackStmt;

declare function SavepointStmt(
  savepointName: AST._Identifier
): AST.SavepointStmt;

declare function SelectStmt(
  withClause: AST.WithClause | null,
  select: [AST.SelectCore, ...AST._SelectCompound[]],
  limiter: AST._LimiterClause | null
): AST.SelectStmt;

declare function SimpleFunctionInvocation(
  simpleFunc: AST._Identifier,
  args: AST.Expr[] | '*'
): AST.SimpleFunctionInvocation;

declare function SimpleSelectStmt(
  withClause: AST.WithClause | null,
  select: AST.SelectCore,
  limiter: AST._LimiterClause | null
): AST.SimpleSelectStmt;

declare function SqlStmt(
  explain: boolean,
  statement: AST._SqlStmt
): AST.SqlStmt;

declare function SqlStmtList(
  statements: AST.SqlStmt[]
): AST.SqlStmtList;

declare function TableConstraint(
  name: AST._Identifier | null,
  constraint: AST._TableConstraint
): AST.TableConstraint;

declare function TypeName(
  names: [string, ...string[]],
  args: [AST._NumericLiteral?, AST._NumericLiteral?]
): AST.TypeName;

declare function UpdateStmt(
  withClause: AST.WithClause,
  updateOr: null | 'ABORT' | 'FAIL' | 'IGNORE' | 'REPLACE' | 'ROLLBACK',
  path: AST.QualifiedTableName,
  set: [AST._SetClause, ...AST._SetClause[]],
  from: AST._TableQueryClause,
  where: AST.Expr | null,
  limiter: AST._LimiterClause | null
): AST.UpdateStmt;

declare function UpsertClause(
  onConflict: null | AST._ColumnSelectorClause,
  action: null | AST._UpdateSetClause
): AST.UpsertClause;

declare function VacuumStmt(
  schemaName: null | AST._Identifier,
  filename: null | AST._Identifier
): AST.VacuumStmt;

declare function WindowDefn(
  baseWindowName: null | AST._Identifier,
  partitionBy: AST.Expr[],
  orderBy: AST.OrderingTerm[],
  frameSpec: AST.FrameSpec | null
): AST.WindowDefn;

declare function WindowFunctionInvocation(
  windowFunc: AST._Identifier,
  expr: AST.Expr[] | '*',
  filter: null | AST.FilterClause,
  over: AST.WindowDefn | AST._Identifier
): AST.WindowFunctionInvocation;

declare function WithClause(
  recursive: boolean,
  expressions: [AST.CommonTableExpression, ...AST.CommonTableExpression[]]
): AST.WithClause;

export { AST };

export const BinaryOperatorPrecedence = {
  '||': 7,
  '*': 6,
  '/': 6,
  '%': 6,
  '+': 5,
  '-': 5,
  '<<': 4,
  '>>': 4,
  '&': 4,
  '|': 4,
  '<': 3,
  '<=': 3,
  '>': 3,
  '>=': 3,
  '=': 2,
  '==': 2,
  '!=': 2,
  '<>': 2,
  IS: 2,
  'IS NOT': 2,
  IN: 2,
  LIKE: 2,
  GLOB: 2,
  MATCH: 2,
  REGEXP: 2,
  AND: 1,
  OR: 0
};

export const Nodes = {
  _AddClause,
  _AggregateArgs,
  _AsClause,
  _BetweenExpression,
  _BinaryExpression,
  _BinaryKeywordExpression,
  _BindParameter,
  _BlobLiteral,
  _CallExpression,
  _CaseExpression,
  _CaseClause,
  _CastExpression,
  _CheckClause,
  _CheckConstraint,
  _CollateClause,
  _CollateExpression,
  _ColumnAliasClause,
  _ColumnSelectorClause,
  _DefaultClause,
  _DeferrableClause,
  _ExistsExpression,
  _ForeignKeyConstraint,
  _FrameSpecBetweenClause,
  _FrameSpecExprClause,
  _GroupByClause,
  _Identifier,
  _InExpression,
  _InsertSelectClause,
  _InsertValuesClause,
  _IsExpression,
  _JoinCompound,
  _JoinOnClause,
  _JoinUsingClause,
  _KeywordLiteral,
  _LimitClause,
  _LimiterClause,
  _LimitTailClause,
  _MatchClause,
  _NotNullClause,
  _NullComparisonExpression,
  _NumericLiteral,
  _OnClause,
  _Path,
  _PragmaGetter,
  _PragmaSetter,
  _PrimaryKeyClause,
  _PrimaryKeyConstraint,
  _QualifiedPath,
  _RenameClause,
  _SelectClause,
  _SelectCompound,
  _SelectorClause,
  _SequenceExpression,
  _SetClause,
  _StringLiteral,
  _TableCallClause,
  _TableDef,
  _TableQueryClause,
  _TableSelectClause,
  _TableSelectorClause,
  _UnaryExpression,
  _UniqueClause,
  _UniqueConstraint,
  _UpdateSetClause,
  _ValueClause,
  _ValuesClause,
  _WindowAsClause,
  AggregateFunctionInvocation,
  AlterTableStmt,
  AnalyzeStmt,
  AttachStmt,
  BeginStmt,
  ColumnConstraint,
  ColumnDef,
  ColumnNameList,
  CommitStmt,
  CommonTableExpression,
  ConflictClause,
  CreateIndexStmt,
  CreateTableStmt,
  CreateTriggerStmt,
  CreateViewStmt,
  CreateVirtualTableStmt,
  CteTableName,
  DeleteStmt,
  DetachStmt,
  DropIndexStmt,
  DropTableStmt,
  DropTriggerStmt,
  DropViewStmt,
  FactoredSelectStmt,
  FilterClause,
  ForeignKeyClause,
  FrameSpec,
  IndexedColumn,
  InsertStmt,
  JoinClause,
  JoinConstraint,
  OrderingTerm,
  OverClause,
  PragmaStmt,
  PragmaValue,
  QualifiedTableName,
  RaiseFunction,
  RecursiveCte,
  ReindexStmt,
  ReleaseStmt,
  ResultColumn,
  RollbackStmt,
  SavepointStmt,
  SelectStmt,
  SimpleFunctionInvocation,
  SimpleSelectStmt,
  SqlStmt,
  SqlStmtList,
  TableConstraint,
  TypeName,
  UpdateStmt,
  UpsertClause,
  VacuumStmt,
  WindowDefn,
  WindowFunctionInvocation,
  WithClause
};
