import * as AST from './ast';

declare function _AddClause(
  columnDef: AST.ColumnDef
): AST._AddClause;

declare function _AggregateArgs(
  distinct: boolean,
  expressions: [AST.Expr, ...AST.Expr[]]
): AST._AggregateArgs;

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
  bindParameter: string
): Ast._BindParameter;

declare function _BlobLiteral(
  value: string[]
): AST._BlobLiteral;

declare function _CallExpression(
  functionName: string,
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
  collationName: string
): AST._CollateClause;

declare function _CollateExpression(
  expr: AST.Expr,
  collationName: string
): AST._CollateExpression;

declare function _ColumnAliasClause(
  expr: AST.Expr,
  as: string | null
): AST._ColumnAliasClause;

declare function _ColumnPath(
  tablePath: AST._Path | null,
  columnName: string
): AST._ColumnPath;

declare function _ColumnSelectorClause(
  indexedColumns: [string, ...string[]],
  where: null | AST.Expr
): AST._ColumnSelectorClause;

declare function _CteSelectClause(
  cteTableName: AST.CteTableName,
  as: AST.SelectStmt
): AST._CteSelectClause;

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
  columnNames: [string, ...string[]],
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
  columnNames: [string, ...string[]]
): AST._JoinUsingClause;

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
  name: string
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
  object: string | null,
  property: string
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

declare function _RenameClause(
  from: null | string,
  to: string
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
  columns: string | AST.ColumnNameList,
  expr: AST.Expr
): AST._SetClause;

declare function _StringLiteral(
  value: string
): AST._StringLiteral;

declare function _TableCallClause(
  path: AST._Path,
  args: [AST.Expr, ...AST.Expr[]],
  tableAlias: string
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
  tableAlias: string
): AST._TableSelectClause;

declare function _TableSelectorClause(
  path: AST._Path,
  args: AST.Expr[]
): AST._TableSelectorClause;

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
  windowName: string,
  windowDefn: AST.WindowDefn
): AST._WindowAsClause;

declare function AggregateFunctionInvocation(
  aggregateFunc: string,
  args: AST._AggregateArgs | '*' | null,
  filter: null | AST.FilterClause
): AST.AggregateFunctionInvocation;

declare function AlterTableStmt(
  path: AST._Path,
  action: AST._RenameClause | AST._AddClause
): AST.AlterTableStmt;

declare function AnalyzeStmt(
  path: null | AST._Path
): AST.AnalyzeStmt;

declare function AttachStmt(
  expr: AST.Expr,
  schemaName: string
): AST.AttachStmt;

declare function BeginStmt(
  mode: null | 'DEFERRED' | 'IMMEDIATE' | 'EXCLUSIVE'
): AST.BeginStmt;

declare function ColumnConstraint(
  name: null | string,
  constraint: AST._ColumnConstraintClause
): AST.ColumnConstraint;

declare function ColumnDef(
  columnName: string,
  typeName: string | null,
  columnConstraints: AST.ColumnConstraint[]
): AST.ColumnDef;

declare function ColumnNameList(
  columnNames: [string, ...string[]]
): AST.ColumnNameList;

declare function CommitStmt(): AST.CommitStmt;

declare function CommonTableExpression(
  tableName: string,
  columnNames: string[],
  as: AST.SelectStmt
): AST.CommonTableExpression;

declare function CompoundSelectStmt(
  withClause: AST.WithClause | null,
  select: [AST.SelectCore, ...AST._SelectCompound[]],
  limiter: AST._LimiterClause | null
): AST.CompoundSelectStmt;

declare function ConflictClause(
  onConflict: 'ROLLBACK' | 'ABORT' | 'FAIL' | 'IGNORE' | 'REPLACE'
): AST.ConflictClause;

declare function CreateIndexStmt(
  unique: boolean,
  ifNotExists: boolean,
  path: AST._Path,
  tableName: string,
  selector: AST._ColumnSelectorClause
): AST.CreateIndexStmt;

declare function CreateTableStmt(
  temporary: boolean,
  ifNotExists: boolean,
  path: AST._Path,
  target: AST.SelectStmt | AST._TableDef
): AST.CreateTableStmt;

declare function CreateTriggerStmt(
  temporary: boolean,
  ifNotExists: boolean,
  path: AST._Path,
  position: 'BEFORE' | 'AFTER' | 'INSTEAD OF' | null,
  event: 'DELETE' | 'INSERT' | string[],
  tableName: string,
  forEachRow: boolean,
  when: AST.Expr | null,
  begin: [AST._TriggerStmt, ...AST._TriggerStmt[]]
): AST.CreateTriggerStmt;

declare function CreateViewStmt(
  temporary: boolean,
  ifNotExists: boolean,
  path: AST._Path,
  columns: string[],
  select: AST.SelectStmt
): AST.CreateViewStmt;

declare function CreateVirtualTableStmt(
  ifNotExists: boolean,
  path: AST._Path,
  moduleName: string,
  moduleArguments: string[]
): AST.CreateVirtualTableStmt;

declare function CteTableName(
  tableName: string,
  columnNames: string[]
): AST.CteTableName;

declare function DeleteStmt(
  withClause: AST.WithClause | null,
  qualifiedTableName: AST.QualifiedTableName,
  where: AST.Expr | null,
  limiter: AST._LimiterClause | null
): AST.DeleteStmt;

declare function DetachStmt(
  schemaName: string
): AST.DetachStmt;

declare function DropIndexStmt(
  ifExists: boolean,
  path: AST._Path
): AST.DropIndexStmt;

declare function DropTableStmt(
  ifExists: boolean,
  path: AST._Path
): AST.DropTableStmt;

declare function DropTriggerStmt(
  ifExists: boolean,
  path: AST._Path
): AST.DropTriggerStmt;

declare function DropViewStmt(
  ifExists: boolean,
  path: AST._Path
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
  foreignTable: string,
  columnNames: string[],
  events: (AST._OnClause | AST._MatchClause)[],
  deferrable: AST._DeferrableClause | null
): AST.ForeignKeyClause;

declare function FrameSpec(
  frame: 'RANGE' | 'ROWS' | 'GROUPS',
  target: AST._FrameSpecBetweenClause | 'UNBOUNDED PRECEDING' | AST.Expr | 'CURRENT ROW',
  exclude: 'NOT OTHERS' | 'CURRENT ROW' | 'GROUP' | 'TIES' | null
): AST.FrameSpec;

declare function IndexedColumn(
  target: string | AST.Expr,
  collationName: string | null,
  orderBy: null | 'ASC' | 'DESC'
): AST.IndexedColumn;

declare function InsertStmt(
  withClause: AST.WithClause,
  operator: AST._InsertOperator,
  path: AST._Path,
  alias: string | null,
  columns: string[],
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
  over: string | AST.WindowDefn
): AST.OverClause;

declare function PragmaStmt(
  path: AST._Path,
  right: null | AST._PragmaSetter | AST._PragmaGetter
): AST.PragmaStmt;

declare function PragmaValue(
  value: number | string
): AST.PragmaValue;

declare function QualifiedTableName(
  path: AST._Path,
  alias: null | string,
  indexedBy: string | false | null
): AST.QualifiedTableName;

declare function RaiseFunction(
  onError: ['ROLLBACK' | 'ABORT' | 'FAIL', string] | null
): AST.RaiseFunction;

declare function RecursiveCte(
  cteTableName: AST.CteTableName,
  initialSelect: string,
  all: boolean,
  recursiveSelect: string
): AST.RecursiveCte;

declare function ReindexStmt(
  target: null | string | AST._Path
): AST.ReindexStmt;

declare function ReleaseStmt(
  savepointName: string
): AST.ReleaseStmt;

declare function ResultColumn(
  source: AST._ColumnAliasClause | string
): AST.ResultColumn;

declare function RollbackStmt(
  savepointName: string
): AST.RollbackStmt;

declare function SavepointStmt(
  savepointName: string
): AST.SavepointStmt;

declare function SelectStmt(
  withClause: AST.WithClause | null,
  select: [AST.SelectCore, ...AST._SelectCompound[]],
  limiter: AST._LimiterClause | null
): AST.SelectStmt;

declare function SimpleFunctionInvocation(
  simpleFunc: string,
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
  path: null | string,
  constraint: AST._TableConstraint
): AST.TableConstraint;

declare function TableOrSubquery(
  query: AST._TableOrSubquery
): AST.TableOrSubquery;

declare function TypeName(
  names: [string, ...string[]],
  args: [number?, number?]
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
  schemaName: null | string,
  filename: null | string
): AST.VacuumStmt;

declare function WindowDefn(
  baseWindowName: null | string,
  partitionBy: AST.Expr[],
  orderBy: AST.OrderingTerm[],
  frameSpec: AST.FrameSpec | null
): AST.WindowDefn;

declare function WindowFunctionInvocation(
  windowFunc: string,
  expr: AST.Expr[] | '*',
  filter: null | AST.FilterClause,
  over: AST.WindowDefn | string
): AST.WindowFunctionInvocation;

declare function WithClause(
  recursive: boolean,
  expressions: [AST._CteSelectClause, ...AST._CteSelectClause[]]
): AST.WithClause;

export { AST };

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
  _ColumnPath,
  _ColumnSelectorClause,
  _CteSelectClause,
  _DefaultClause,
  _DeferrableClause,
  _ExistsExpression,
  _ForeignKeyConstraint,
  _FrameSpecBetweenClause,
  _FrameSpecExprClause,
  _GroupByClause,
  _InExpression,
  _InsertSelectClause,
  _InsertValuesClause,
  _IsExpression,
  _JoinCompound,
  _JoinOnClause,
  _JoinUsingClause,
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
  CompoundSelectStmt,
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
  TableOrSubquery,
  TypeName,
  UpdateStmt,
  UpsertClause,
  VacuumStmt,
  WindowDefn,
  WindowFunctionInvocation,
  WithClause
};
