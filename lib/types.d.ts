export {};

declare function _AddClause(
  columnDef: ColumnDef
): _AddClause;

declare function _AggregateArgs(
  distinct: boolean,
  expressions: [Expr, ...Expr[]]
): _AggregateArgs;

declare function _AsClause(
  generatedAlways: boolean,
  as: Expr,
  mode: null | 'STORED' | 'VIRTUAL'
): _AsClause;

declare function _BetweenExpression(
  negated: boolean,
  lower: Expr,
  upper: Expr
): _BetweenExpression;

declare function _BinaryExpression(
  left: Expr,
  operator: _BinaryOperator,
  right: Expr
): _BinaryExpression;

declare function _BinaryKeywordExpression(
  negated: boolean,
  operator: 'LIKE' | 'GLOB' | 'REGEXP' | 'MATCH',
  expr: Expr,
  escape: null | Expr
): _BinaryKeywordExpression;

declare function _BindParameter(
  bindParameter: string
): _BindParameter;

declare function _BlobLiteral(
  value: string[]
): _BlobLiteral;

declare function _CallExpression(
  functionName: string,
  args: Expr[] | '*',
  filter: null | FilterClause,
  over: null | OverClause
): _CallExpression;

declare function _CaseExpression(
  discriminant: Expr | null,
  cases: [_CaseClause, ..._CaseClause[]],
  alternate: Expr | null
): _CaseExpression;

declare function _CaseClause(
  when: Expr,
  then: Expr
): _CaseClause;

declare function _CastExpression(
  cast: Expr,
  as: TypeName
): _CastExpression;

declare function _CheckClause(
  expr: Expr
): _CheckClause;

declare function _CheckConstraint(
  check: Expr
): _CheckConstraint;

declare function _CollateClause(
  collationName: string
): _CollateClause;

declare function _CollateExpression(
  expr: Expr,
  collationName: string
): _CollateExpression;

declare function _ColumnAliasClause(
  expr: Expr,
  as: string | null
): _ColumnAliasClause;

declare function _ColumnSelectorClause(
  indexedColumns: [string, ...string[]],
  where: null | Expr
): _ColumnSelectorClause;

declare function _CteSelectClause(
  cteTableName: CteTableName,
  as: SelectStmt
): _CteSelectClause;

declare function _DefaultClause(
  expr: Expr | LiteralValue | number
): _DefaultClause;

declare function _DeferrableClause(
  negated: boolean,
  initially: 'DEFERRED' | 'IMMEDIATE' | null
): _DeferrableClause;

declare function _ExistsExpression(
  negated: boolean,
  select: SelectStmt
): _ExistsExpression;

declare function _ForeignKeyConstraint(
  columnNames: [string, ...string[]],
  foreignKey: ForeignKeyClause
): _ForeignKeyConstraint;

declare function _FrameSpecBetweenClause(
  between: 'UNBOUNDED PRECEDING' | _FrameSpecExprClause | 'CURRENT ROW',
  and: _FrameSpecExprClause | 'CURRENT ROW' | 'UNBOUNDED FOLLOWING'
): _FrameSpecBetweenClause;

declare function _FrameSpecExprClause(
  expr: Expr,
  position: 'PRECEDING' | 'FOLLOWING'
): _FrameSpecExprClause;

declare function _GroupByClause(
  expressions: [Expr, ...Expr[]],
  having: Expr | null
): _GroupByClause;

declare function _Identifier(
  name: N
): _Identifier;

declare function _InExpression(
  negated: boolean,
  selector: _SelectorClause | _TableSelectorClause
): _InExpression;

declare function _InsertSelectClause(
  select: SelectStmt,
  upsert: null | UpsertClause
): _InsertSelectClause;

declare function _InsertValuesClause(
  values: _ValuesClause,
  upsert: null | UpsertClause
): _InsertValuesClause;

declare function _IsExpression(
  left: Expr,
  negated: boolean,
  right: Expr
): _IsExpression;

declare function _JoinCompound(
  operator: JoinOperator,
  query: TableOrSubquery,
  constraint: JoinConstraint
): _JoinCompound;

declare function _JoinOnClause(
  on: Expr
): _JoinOnClause;

declare function _JoinUsingClause(
  columnNames: [string, ...string[]]
): _JoinUsingClause;

declare function _LimitClause(
  left: Expr,
  right: _LimitTailClause | null
): _LimitClause;

declare function _LimiterClause(
  orderBy: OrderingTerm[],
  limit: _LimitClause | null
): _LimiterClause;

declare function _LimitTailClause(
  offset: boolean,
  expr: Expr
): _LimitTailClause;

declare function _MatchClause(
  name: string
): _MatchClause;

declare function _NotNullClause(
  onConflict: ConflictClause
): _NotNullClause;

declare function _NullComparisonExpression(
  expr: Expr,
  negated: boolean
): _NullComparisonExpression;

declare function _OnClause(
  on: 'DELETE' | 'UPDATE',
  action: 'SET NULL' | 'SET DEFAULT' | 'CASCADE' | 'RESTRICT' | 'NO ACTION'
): _OnClause;

declare function _PragmaGetter(
  value: PragmaValue
): _PragmaGetter;

declare function _PragmaSetter(
  value: PragmaValue
): _PragmaSetter;

declare function _PrimaryKeyClause(
  orderBy: null | 'ASC' | 'DESC',
  onConflict: ConflictClause,
  autoincrement: boolean
): _PrimaryKeyClause;

declare function _PrimaryKeyConstraint(
  indexedColumns: [IndexedColumn, ...IndexedColumn[]],
  onConflict: null | ConflictClause
): _PrimaryKeyConstraint;

declare function _ReindexNameClause(
  name: [string, string] | string
): _ReindexNameClause;

declare function _RenameClause(
  from: null | string,
  to: string
): _RenameClause;

declare function _SelectClause(
  modifier: null | 'DISTINCT' | 'ALL',
  resultColumns: [ResultColumn, ...ResultColumn[]],
  from: _SelectFromClause,
  where: null | Expr,
  groupBy: null | _GroupByClause,
  window: _WindowAsClause[]
): _SelectClause;

declare function _SelectCompound(
  operator: CompoundOperator,
  selector: SelectCore
): _SelectCompound;

declare function _SelectFromClause(
  query: TableOrSubquery | null
): _SelectFromClause;

declare function _SelectorClause(
  selector: SelectStmt | Expr[]
): _SelectorClause;

declare function _SequenceExpression(
  expressions: [Expr, ...Expr[]]
): _SequenceExpression;

declare function _SetClause(
  columns: string | ColumnNameList,
  expr: Expr
): _SetClause;

declare function _StringLiteral(
  value: string
): _StringLiteral;

declare function _TableCallClause(
  name: [string, string] | string,
  args: [Expr, ...Expr[]],
  tableAlias: string
): _TableCallClause;

declare function _TableDef(
  columnDefs: [ColumnDef, ...ColumnDef[]],
  tableConstraints: TableConstraint[],
  withoutRowId: boolean
): _TableDef;

declare function _TableQueryClause(
  query: [TableOrSubquery, ...TableOrSubquery[]] | JoinClause
): _TableQueryClause;

declare function _TableSelectClause(
  select: SelectStmt,
  tableAlias: string
): _TableSelectClause;

declare function _TableSelectorClause(
  name: [string, string] | string,
  args: Expr[]
): _TableSelectorClause;

declare function _UniqueClause(
  conflict: ConflictClause
): _UniqueClause;

declare function _UniqueConstraint(
  indexedColumns: [IndexedColumn, ...IndexedColumn[]],
  conflict: null | ConflictClause
): _UniqueConstraint;

declare function _UpdateClause(
  columnNames: string[]
): _UpdateClause;

declare function _UpdateSetClause(
  set: [_SetClause, ..._SetClause[]],
  where: null | Expr
): _UpdateSetClause;

declare function _ValueClause(
  values: [Expr, ...Expr[]]
): _ValueClause;

declare function _ValuesClause(
  rows: [_ValueClause, ..._ValueClause[]]
): _ValuesClause;

declare function _WindowAsClause(
  windowName: string,
  windowDefn: WindowDefn
): _WindowAsClause;

declare function AggregateFunctionInvocation(
  aggregateFunc: string,
  args: _AggregateArgs | '*' | null,
  filter: null | FilterClause
): AggregateFunctionInvocation;

declare function AlterTableStmt(
  name: [string, string] | string,
  action: _RenameClause | _AddClause
): AlterTableStmt;

declare function AnalyzeStmt(
  name: null | [string, string] | string
): AnalyzeStmt;

declare function AttachStmt(
  expr: Expr,
  schemaName: string
): AttachStmt;

declare function BeginStmt(
  mode: null | 'DEFERRED' | 'IMMEDIATE' | 'EXCLUSIVE'
): BeginStmt;

declare function ColumnConstraint(
  name: string | null,
  constraint: _ColumnConstraintClause
): ColumnConstraint;

declare function ColumnDef(
  columnName: string,
  typeName: string | null,
  columnConstraints: ColumnConstraint[]
): ColumnDef;

declare function ColumnNameList(
  columnNames: [string, ...string[]]
): ColumnNameList;

declare function CommitStmt(): CommitStmt;

declare function CommonTableExpression(
  tableName: string,
  columnNames: string[],
  as: SelectStmt
): CommonTableExpression;

declare function CompoundSelectStmt(
  withClause: WithClause | null,
  select: [SelectCore, ..._SelectCompound[]],
  limiter: _LimiterClause | null
): CompoundSelectStmt;

declare function ConflictClause(
  onConflict: null | 'ROLLBACK' | 'ABORT' | 'FAIL' | 'IGNORE' | 'REPLACE'
): ConflictClause;

declare function CreateIndexStmt(
  unique: boolean,
  ifNotExists: boolean,
  name: [string, string] | string,
  tableName: string,
  selector: _ColumnSelectorClause
): CreateIndexStmt;

declare function CreateTableStmt(
  temporary: boolean,
  ifNotExists: boolean,
  name: [string, string] | string,
  target: SelectStmt | _TableDef
): CreateTableStmt;

declare function CreateTriggerStmt(
  temporary: boolean,
  ifNotExists: boolean,
  name: [string, string] | string,
  position: 'BEFORE' | 'AFTER' | 'INSTEAD OF' | null,
  event: 'DELETE' | 'INSERT' | _UpdateClause,
  tableName: string,
  forEachRow: boolean,
  when: Expr | null,
  begin: [_TriggerStmt, ..._TriggerStmt[]]
): CreateTriggerStmt;

declare function CreateViewStmt(
  temporary: boolean,
  ifNotExists: boolean,
  name: [string, string] | string,
  columns: string[],
  select: SelectStmt
): CreateViewStmt;

declare function CreateVirtualTableStmt(
  ifNotExists: boolean,
  name: [string, string] | string,
  moduleName: string,
  moduleArguments: string[]
): CreateVirtualTableStmt;

declare function CteTableName(
  tableName: string,
  columnNames: string[]
): CteTableName;

declare function DeleteStmt(
  withClause: WithClause | null,
  qualifiedTableName: QualifiedTableName,
  where: Expr | null,
  limiter: _LimiterClause | null
): DeleteStmt;

declare function DetachStmt(
  schemaName: string
): DetachStmt;

declare function DropIndexStmt(
  ifExists: boolean,
  name: [string, string] | string
): DropIndexStmt;

declare function DropTableStmt(
  ifExists: boolean,
  name: [string, string] | string
): DropTableStmt;

declare function DropTriggerStmt(
  ifExists: boolean,
  name: [string, string] | string
): DropTriggerStmt;

declare function DropViewStmt(
  ifExists: boolean,
  name: [string, string] | string
): DropViewStmt;

declare function Expr(
  expr: _ExprClause
): Expr;

declare function FactoredSelectStmt(
  withClause: WithClause | null,
  selectors: [SelectCore, ..._SelectCompound[]],
  limiter: _LimiterClause | null
): FactoredSelectStmt;

declare function FilterClause(
  where: Expr
): FilterClause;

declare function ForeignKeyClause(
  foreignTable: string,
  columnNames: string[],
  events: (_OnClause | _MatchClause)[],
  deferrable: _DeferrableClause | null
): ForeignKeyClause;

declare function FrameSpec(
  frame: 'RANGE' | 'ROWS' | 'GROUPS',
  target: _FrameSpecBetweenClause | 'UNBOUNDED PRECEDING' | Expr | 'CURRENT ROW',
  exclude: 'NOT OTHERS' | 'CURRENT ROW' | 'GROUP' | 'TIES' | null
): FrameSpec;

declare function IndexedColumn(
  target: string | Expr,
  collationName: string | null,
  orderBy: null | 'ASC' | 'DESC'
): IndexedColumn;

declare function InsertStmt(
  withClause: WithClause,
  operator: _InsertOperator,
  name: [string, string] | string,
  alias: string | null,
  columns: string[],
  source: _InsertValuesClause | _InsertSelectClause | 'DEFAULT VALUES'
): InsertStmt;

declare function JoinClause(
  joinees: [TableOrSubquery, ..._JoinCompound[]]
): JoinClause;

declare function JoinConstraint(
  constraint: _JoinOnClause | _JoinUsingClause | null
): JoinConstraint;

declare function LiteralValue(
  value: _LiteralValue
): LiteralValue;

declare function NumericLiteral(
  value: number
): NumericLiteral;

declare function OrderingTerm(
  indexedColumn: IndexedColumn,
  nulls: 'FIRST' | 'LAST' | null
): OrderingTerm;

declare function OverClause(
  over: string | WindowDefn
): OverClause;

declare function PragmaStmt(
  name: [string, string] | string,
  right: null | _PragmaSetter | _PragmaGetter
): PragmaStmt;

declare function PragmaValue(
  value: number | string
): PragmaValue;

declare function QualifiedTableName(
  name: [string, string] | string,
  alias: null | string,
  indexedBy: string | false | null
): QualifiedTableName;

declare function RaiseFunction(
  onError: ['ROLLBACK' | 'ABORT' | 'FAIL', string] | null
): RaiseFunction;

declare function RecursiveCte(
  cteTableName: CteTableName,
  initialSelect: string,
  all: boolean,
  recursiveSelect: string
): RecursiveCte;

declare function ReindexStmt(
  target: null | string | _ReindexNameClause
): ReindexStmt;

declare function ReleaseStmt(
  savepointName: string
): ReleaseStmt;

declare function ResultColumn(
  source: _ColumnAliasClause | string
): ResultColumn;

declare function RollbackStmt(
  savepointName: string
): RollbackStmt;

declare function SavepointStmt(
  savepointName: string
): SavepointStmt;

declare function SelectStmt(
  withClause: WithClause | null,
  select: [SelectCore, ..._SelectCompound[]],
  limiter: _LimiterClause | null
): SelectStmt;

declare function SimpleFunctionInvocation(
  simpleFunc: string,
  args: Expr[] | '*'
): SimpleFunctionInvocation;

declare function SimpleSelectStmt(
  withClause: WithClause | null,
  select: SelectCore,
  limiter: _LimiterClause | null
): SimpleSelectStmt;

declare function SqlStmt(
  explain: boolean,
  statement: _SqlStmt
): SqlStmt;

declare function SqlStmtList(
  statements: SqlStmt[]
): SqlStmtList;

declare function TableConstraint(
  name: null | string,
  constraint: _TableConstraint
): TableConstraint;

declare function TableOrSubquery(
  query: _TableOrSubquery
): TableOrSubquery;

declare function TypeName(
  names: [string, ...string[]],
  args: [number?, number?]
): TypeName;

declare function UpdateStmt(
  withClause: WithClause,
  updateOr: null | 'ABORT' | 'FAIL' | 'IGNORE' | 'REPLACE' | 'ROLLBACK',
  name: QualifiedTableName,
  set: [_SetClause, ..._SetClause[]],
  from: _TableQueryClause,
  where: Expr | null,
  limiter: _LimiterClause | null
): UpdateStmt;

declare function UpsertClause(
  onConflict: null | _ColumnSelectorClause,
  action: null | _UpdateSetClause
): UpsertClause;

declare function VacuumStmt(
  schemaName: null | string,
  filename: null | string
): VacuumStmt;

declare function WindowDefn(
  baseWindowName: null | string,
  partitionBy: Expr[],
  orderBy: OrderingTerm[],
  frameSpec: FrameSpec | null
): WindowDefn;

declare function WindowFunctionInvocation(
  windowFunc: string,
  expr: Expr[] | '*',
  filter: null | FilterClause,
  over: WindowDefn | string
): WindowFunctionInvocation;

declare function WithClause(
  recursive: boolean,
  expressions: [_CteSelectClause, ..._CteSelectClause[]]
): WithClause;
