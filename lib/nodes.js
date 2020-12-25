import * as AST from './ast.js';

/**
 * @param {AST.ColumnDef} columnDef
 * @return {AST._AddClause}
 */
export const _AddClause = (columnDef) => {
  return {
    type: '_AddClause',
    columnDef
  };
};

/**
 * @param {AST._Identifier | null} tableName
 * @return {AST._AllColumnsClause}
 */
export const _AllColumnsClause = (tableName) => {
  return {
    type: '_AllColumnsClause',
    tableName
  };
};

/**
 * @param {boolean} distinct
 * @param {[AST.Expr, ...AST.Expr[]]} args
 * @return {AST._Args}
 */
export const _Args = (distinct, args) => {
  return {
    type: '_Args',
    distinct,
    args
  };
};

/**
 * @param {boolean} generatedAlways
 * @param {AST.Expr} as
 * @param {'STORED' | 'VIRTUAL' | null} mode
 * @return {AST._AsClause}
 */
export const _AsClause = (generatedAlways, as, mode) => {
  return {
    type: '_AsClause',
    generatedAlways,
    as,
    mode
  };
};

/**
 * @param {AST.Expr} argument
 * @param {boolean} negated
 * @param {AST.Expr} lower
 * @param {AST.Expr} upper
 * @return {AST._BetweenExpression}
 */
export const _BetweenExpression = (argument, negated, lower, upper) => {
  return {
    type: '_BetweenExpression',
    argument,
    negated,
    lower,
    upper
  };
};

/**
 * @param {AST.Expr} left
 * @param {AST._BinaryOperator} operator
 * @param {AST.Expr} right
 * @return {AST._BinaryExpression}
 */
export const _BinaryExpression = (left, operator, right) => {
  return {
    type: '_BinaryExpression',
    left,
    operator,
    right
  };
};

/**
 * @param {AST.Expr} left
 * @param {boolean} negated
 * @param {'LIKE' | 'GLOB' | 'REGEXP' | 'MATCH'} operator
 * @param {AST.Expr} right
 * @param {AST.Expr | null} escape
 * @return {AST._BinaryKeywordExpression}
 */
export const _BinaryKeywordExpression = (left, negated, operator, right, escape) => {
  return {
    type: '_BinaryKeywordExpression',
    left,
    negated,
    operator,
    right,
    escape
  };
};

/**
 * @param {string[]} value
 * @return {AST._BlobLiteral}
 */
export const _BlobLiteral = (value) => {
  return {
    type: '_BlobLiteral',
    value
  };
};

/**
 * @param {AST.Expr | null} discriminant
 * @param {[AST._CaseClause, ...AST._CaseClause[]]} cases
 * @param {AST.Expr | null} alternate
 * @return {AST._CaseExpression}
 */
export const _CaseExpression = (discriminant, cases, alternate) => {
  return {
    type: '_CaseExpression',
    discriminant,
    cases,
    alternate
  };
};

/**
 * @param {AST.Expr} when
 * @param {AST.Expr} then
 * @return {AST._CaseClause}
 */
export const _CaseClause = (when, then) => {
  return {
    type: '_CaseClause',
    when,
    then
  };
};

/**
 * @param {AST.Expr} cast
 * @param {AST.TypeName} as
 * @return {AST._CastExpression}
 */
export const _CastExpression = (cast, as) => {
  return {
    type: '_CastExpression',
    cast,
    as
  };
};

/**
 * @param {AST.Expr} expr
 * @return {AST._CheckClause}
 */
export const _CheckClause = (expr) => {
  return {
    type: '_CheckClause',
    expr
  };
};

/**
 * @param {AST.Expr} check
 * @return {AST._CheckConstraint}
 */
export const _CheckConstraint = (check) => {
  return {
    type: '_CheckConstraint',
    check
  };
};

/**
 * @param {AST._Identifier} collationName
 * @return {AST._CollateClause}
 */
export const _CollateClause = (collationName) => {
  return {
    type: '_CollateClause',
    collationName
  };
};

/**
 * @param {AST.Expr} expr
 * @param {AST._Identifier} collationName
 * @return {AST._CollateExpression}
 */
export const _CollateExpression = (expr, collationName) => {
  return {
    type: '_CollateExpression',
    expr,
    collationName
  };
};

/**
 * @param {AST.Expr} expr
 * @param {AST._Identifier} as
 * @return {AST._ColumnAliasClause}
 */
export const _ColumnAliasClause = (expr, as) => {
  return {
    type: '_ColumnAliasClause',
    expr,
    as
  };
};

/**
 * @param {[AST._Identifier, ...AST._Identifier[]]} indexedColumns
 * @param {AST.Expr | null} where
 * @return {AST._ColumnSelectorClause}
 */
export const _ColumnSelectorClause = (indexedColumns, where) => {
  return {
    type: '_ColumnSelectorClause',
    indexedColumns,
    where
  };
};

/**
 * @param {AST.Expr} expr
 * @return {AST._DefaultClause}
 */
export const _DefaultClause = (expr) => {
  return {
    type: '_DefaultClause',
    expr
  };
};

/**
 * @param {boolean} negated
 * @param {'DEFERRED' | 'IMMEDIATE' | null} initially
 * @return {AST._DeferrableClause}
 */
export const _DeferrableClause = (negated, initially) => {
  return {
    type: '_DeferrableClause',
    negated,
    initially
  };
};

/**
 * @param {boolean} negated
 * @param {AST.SelectStmt} select
 * @return {AST._ExistsExpression}
 */
export const _ExistsExpression = (negated, select) => {
  return {
    type: '_ExistsExpression',
    negated,
    select
  };
};

/**
 * @param {[AST._Identifier, ...AST._Identifier[]]} columnNames
 * @param {AST.ForeignKeyClause} foreignKey
 * @return {AST._ForeignKeyConstraint}
 */
export const _ForeignKeyConstraint = (columnNames, foreignKey) => {
  return {
    type: '_ForeignKeyConstraint',
    columnNames,
    foreignKey
  };
};

/**
 * @param {'UNBOUNDED PRECEDING' | AST._FrameSpecExprClause | 'CURRENT ROW'} between
 * @param {AST._FrameSpecExprClause | 'CURRENT ROW' | 'UNBOUNDED FOLLOWING'} and
 * @return {AST._FrameSpecBetweenClause}
 */
export const _FrameSpecBetweenClause = (between, and) => {
  return {
    type: '_FrameSpecBetweenClause',
    between,
    and
  };
};

/**
 * @param {AST.Expr} expr
 * @param {'PRECEDING' | 'FOLLOWING'} position
 * @return {AST._FrameSpecExprClause}
 */
export const _FrameSpecExprClause = (expr, position) => {
  return {
    type: '_FrameSpecExprClause',
    expr,
    position
  };
};

/**
 * @param {AST._Identifier} name
 * @param {AST._Args | '*' | null} args
 * @param {AST.FilterClause | null} filter
 * @param {AST.OverClause | null} over
 * @return {AST._FunctionInvocation}
 */
export const _FunctionInvocation = (name, args, filter, over) => {
  return {
    type: '_FunctionInvocation',
    name,
    args,
    filter,
    over
  };
};

/**
 * @param {[AST.Expr, ...AST.Expr[]]} expressions
 * @param {AST.Expr | null} having
 * @return {AST._GroupByClause}
 */
export const _GroupByClause = (expressions, having) => {
  return {
    type: '_GroupByClause',
    expressions,
    having
  };
};

/**
 * @param {string} name
 * @return {AST._Identifier}
 */
export const _Identifier = (name) => {
  return {
    type: '_Identifier',
    name
  };
};

/**
 * @param {AST.Expr} argument
 * @param {boolean} negated
 * @param {AST._SelectorClause | AST._TableSelectorClause} selector
 * @return {AST._InExpression}
 */
export const _InExpression = (argument, negated, selector) => {
  return {
    type: '_InExpression',
    argument,
    negated,
    selector
  };
};

/**
 * @param {AST.SelectStmt} select
 * @param {AST.UpsertClause | null} upsert
 * @return {AST._InsertSelectClause}
 */
export const _InsertSelectClause = (select, upsert) => {
  return {
    type: '_InsertSelectClause',
    select,
    upsert
  };
};

/**
 * @param {AST._ValuesClause} values
 * @param {AST.UpsertClause | null} upsert
 * @return {AST._InsertValuesClause}
 */
export const _InsertValuesClause = (values, upsert) => {
  return {
    type: '_InsertValuesClause',
    values,
    upsert
  };
};

/**
 * @param {AST.Expr} left
 * @param {boolean} negated
 * @param {AST.Expr} right
 * @return {AST._IsExpression}
 */
export const _IsExpression = (left, negated, right) => {
  return {
    type: '_IsExpression',
    left,
    negated,
    right
  };
};

/**
 * @param {AST.JoinOperator} operator
 * @param {AST.TableOrSubquery} query
 * @param {AST.JoinConstraint | null} constraint
 * @return {AST._JoinCompound}
 */
export const _JoinCompound = (operator, query, constraint) => {
  return {
    type: '_JoinCompound',
    operator,
    query,
    constraint
  };
};

/**
 * @param {AST.Expr} on
 * @return {AST._JoinOnClause}
 */
export const _JoinOnClause = (on) => {
  return {
    type: '_JoinOnClause',
    on
  };
};

/**
 * @param {[AST._Identifier, ...AST._Identifier[]]} columnNames
 * @return {AST._JoinUsingClause}
 */
export const _JoinUsingClause = (columnNames) => {
  return {
    type: '_JoinUsingClause',
    columnNames
  };
};

/**
 * @template {string} T
 * @param {T} value
 * @return {AST._KeywordLiteral<T>}
 */
export const _KeywordLiteral = (value) => {
  return {
    type: '_KeywordLiteral',
    value
  };
};

/**
 * @param {AST.Expr} left
 * @param {AST._LimitTailClause | null} right
 * @return {AST._LimitClause}
 */
export const _LimitClause = (left, right) => {
  return {
    type: '_LimitClause',
    left,
    right
  };
};

/**
 * @param {AST.OrderingTerm[]} orderBy
 * @param {AST._LimitClause | null} limit
 * @return {AST._LimiterClause}
 */
export const _LimiterClause = (orderBy, limit) => {
  return {
    type: '_LimiterClause',
    orderBy,
    limit
  };
};

/**
 * @param {boolean} offset
 * @param {AST.Expr} expr
 * @return {AST._LimitTailClause}
 */
export const _LimitTailClause = (offset, expr) => {
  return {
    type: '_LimitTailClause',
    offset,
    expr
  };
};

/**
 * @param {AST._Identifier} name
 * @return {AST._MatchClause}
 */
export const _MatchClause = (name) => {
  return {
    type: '_MatchClause',
    name
  };
};

/**
 * @param {AST.ConflictClause | null} onConflict
 * @return {AST._NotNullClause}
 */
export const _NotNullClause = (onConflict) => {
  return {
    type: '_NotNullClause',
    onConflict
  };
};

/**
 * @param {AST.Expr} expr
 * @param {boolean} negated
 * @return {AST._NullComparisonExpression}
 */
export const _NullComparisonExpression = (expr, negated) => {
  return {
    type: '_NullComparisonExpression',
    expr,
    negated
  };
};

/**
 * @param {number} value
 * @return {AST._NumericLiteral}
 */
export const _NumericLiteral = (value) => {
  return {
    type: '_NumericLiteral',
    value
  };
};

/**
 * @param {'DELETE' | 'UPDATE'} on
 * @param {'SET NULL' | 'SET DEFAULT' | 'CASCADE' | 'RESTRICT' | 'NO ACTION'} action
 * @return {AST._OnClause}
 */
export const _OnClause = (on, action) => {
  return {
    type: '_OnClause',
    on,
    action
  };
};

/**
 * @param {AST._Identifier} object
 * @param {AST._Identifier} property
 * @return {AST._Path}
 */
export const _Path = (object, property) => {
  return {
    type: '_Path',
    object,
    property
  };
};

/**
 * @param {AST.PragmaValue} value
 * @return {AST._PragmaGetter}
 */
export const _PragmaGetter = (value) => {
  return {
    type: '_PragmaGetter',
    value
  };
};

/**
 * @param {AST.PragmaValue} value
 * @return {AST._PragmaSetter}
 */
export const _PragmaSetter = (value) => {
  return {
    type: '_PragmaSetter',
    value
  };
};

/**
 * @param {'ASC' | 'DESC' | null} orderBy
 * @param {AST.ConflictClause | null} onConflict
 * @param {boolean} autoincrement
 * @return {AST._PrimaryKeyClause}
 */
export const _PrimaryKeyClause = (orderBy, onConflict, autoincrement) => {
  return {
    type: '_PrimaryKeyClause',
    orderBy,
    onConflict,
    autoincrement
  };
};

/**
 * @param {[AST.IndexedColumn, ...AST.IndexedColumn[]]} indexedColumns
 * @param {AST.ConflictClause | null} onConflict
 * @return {AST._PrimaryKeyConstraint}
 */
export const _PrimaryKeyConstraint = (indexedColumns, onConflict) => {
  return {
    type: '_PrimaryKeyConstraint',
    indexedColumns,
    onConflict
  };
};

/**
 * @param {AST._Identifier} schemaName
 * @param {AST._Path} path
 * @return {AST._QualifiedPath}
 */
export const _QualifiedPath = (schemaName, path) => {
  return {
    type: '_QualifiedPath',
    schemaName,
    path
  };
};

/**
 * @param {AST._Identifier | null} from
 * @param {AST._Identifier} to
 * @return {AST._RenameClause}
 */
export const _RenameClause = (from, to) => {
  return {
    type: '_RenameClause',
    from,
    to
  };
};

/**
 * @param {'DISTINCT' | 'ALL' | null} modifier
 * @param {[AST.ResultColumn, ...AST.ResultColumn[]]} resultColumns
 * @param {AST.TableOrSubquery[]} from
 * @param {AST.Expr | null} where
 * @param {AST._GroupByClause | null} groupBy
 * @param {AST._WindowAsClause[]} window
 * @return {AST._SelectClause}
 */
export const _SelectClause = (modifier, resultColumns, from, where, groupBy, window) => {
  return {
    type: '_SelectClause',
    modifier,
    resultColumns,
    from,
    where,
    groupBy,
    window
  };
};

/**
 * @param {AST.CompoundOperator} operator
 * @param {AST.SelectCore} selector
 * @return {AST._SelectCompound}
 */
export const _SelectCompound = (operator, selector) => {
  return {
    type: '_SelectCompound',
    operator,
    selector
  };
};

/**
 * @param {AST.SelectStmt | AST.Expr[]} selector
 * @return {AST._SelectorClause}
 */
export const _SelectorClause = (selector) => {
  return {
    type: '_SelectorClause',
    selector
  };
};

/**
 * @param {[AST.Expr, ...AST.Expr[]]} expressions
 * @return {AST._SequenceExpression}
 */
export const _SequenceExpression = (expressions) => {
  return {
    type: '_SequenceExpression',
    expressions
  };
};

/**
 * @param {AST._Identifier | AST.ColumnNameList} columns
 * @param {AST.Expr} expr
 * @return {AST._SetClause}
 */
export const _SetClause = (columns, expr) => {
  return {
    type: '_SetClause',
    columns,
    expr
  };
};

/**
 * @param {string} value
 * @return {AST._StringLiteral}
 */
export const _StringLiteral = (value) => {
  return {
    type: '_StringLiteral',
    value
  };
};

/**
 * @param {AST._Path | AST._Identifier} path
 * @param {[AST.Expr, ...AST.Expr[]]} args
 * @param {AST._Identifier | null} tableAlias
 * @return {AST._TableCallClause}
 */
export const _TableCallClause = (path, args, tableAlias) => {
  return {
    type: '_TableCallClause',
    path,
    args,
    tableAlias
  };
};

/**
 * @param {[AST.ColumnDef, ...AST.ColumnDef[]]} columnDefs
 * @param {AST.TableConstraint[]} tableConstraints
 * @param {boolean} withoutRowId
 * @return {AST._TableDef}
 */
export const _TableDef = (columnDefs, tableConstraints, withoutRowId) => {
  return {
    type: '_TableDef',
    columnDefs,
    tableConstraints,
    withoutRowId
  };
};

/**
 * @param {[AST.TableOrSubquery, ...AST.TableOrSubquery[]] | AST.JoinClause} query
 * @return {AST._TableQueryClause}
 */
export const _TableQueryClause = (query) => {
  return {
    type: '_TableQueryClause',
    query
  };
};

/**
 * @param {AST.SelectStmt} select
 * @param {AST._Identifier | null} tableAlias
 * @return {AST._TableSelectClause}
 */
export const _TableSelectClause = (select, tableAlias) => {
  return {
    type: '_TableSelectClause',
    select,
    tableAlias
  };
};

/**
 * @param {AST._Path | AST._Identifier} path
 * @param {AST.Expr[]} args
 * @return {AST._TableSelectorClause}
 */
export const _TableSelectorClause = (path, args) => {
  return {
    type: '_TableSelectorClause',
    path,
    args
  };
};

/**
 * @param {AST._UnaryOperator} operator
 * @param {AST.Expr} argument
 */
export const _UnaryExpression = (operator, argument) => {
  return {
    type: '_UnaryExpression',
    operator,
    argument
  };
};

/**
 * @param {AST.ConflictClause | null} onConflict
 * @return {AST._UniqueClause}
 */
export const _UniqueClause = (onConflict) => {
  return {
    type: '_UniqueClause',
    onConflict
  };
};

/**
 * @param {[AST.IndexedColumn, ...AST.IndexedColumn[]]} indexedColumns
 * @param {AST.ConflictClause | null} onConflict
 * @return {AST._UniqueConstraint}
 */
export const _UniqueConstraint = (indexedColumns, onConflict) => {
  return {
    type: '_UniqueConstraint',
    indexedColumns,
    onConflict
  };
};

/**
 * @param {[AST._SetClause, ...AST._SetClause[]]} set
 * @param {AST.Expr | null} where
 * @return {AST._UpdateSetClause}
 */
export const _UpdateSetClause = (set, where) => {
  return {
    type: '_UpdateSetClause',
    set,
    where
  };
};

/**
 * @param {[AST.Expr, ...AST.Expr[]]} values
 * @return {AST._ValueClause}
 */
export const _ValueClause = (values) => {
  return {
    type: '_ValueClause',
    values
  };
};

/**
 * @param {[AST._ValueClause, ...AST._ValueClause[]]} rows
 * @return {AST._ValuesClause}
 */
export const _ValuesClause = (rows) => {
  return {
    type: '_ValuesClause',
    rows
  };
};

/**
 * @param {AST._Identifier} windowName
 * @param {AST._Identifier} windowDefn
 * @return {AST._WindowAsClause}
 */
export const _WindowAsClause = (windowName, windowDefn) => {
  return {
    type: '_WindowAsClause',
    windowName,
    windowDefn
  };
};

/**
 * @param {AST._Identifier} name
 * @param {AST._Args | '*' | null} args
 * @param {AST.FilterClause | null} filter
 * @return {AST.AggregateFunctionInvocation}
 */
export const AggregateFunctionInvocation = (name, args, filter) => {
  return {
    type: 'AggregateFunctionInvocation',
    name,
    args,
    filter
  };
};

/**
 * @param {AST._Path | AST._Identifier} path
 * @param {AST._RenameClause | AST._AddClause} action
 * @return {AST.AlterTableStmt}
 */
export const AlterTableStmt = (path, action) => {
  return {
    type: 'AlterTableStmt',
    path,
    action
  };
};

/**
 * @param {AST._Path | AST._Identifier} path
 * @return {AST.AnalyzeStmt}
 */
export const AnalyzeStmt = (path) => {
  return {
    type: 'AnalyzeStmt',
    path
  };
};

/**
 * @param {AST.Expr} expr
 * @param {AST._Identifier} schemaName
 * @return {AST.AttachStmt}
 */
export const AttachStmt = (expr, schemaName) => {
  return {
    type: 'AttachStmt',
    expr,
    schemaName
  };
};

/**
 * @param {'DEFERRED' | 'IMMEDIATE' | 'EXCLUSIVE' | null} mode
 * @return {AST.BeginStmt}
 */
export const BeginStmt = (mode) => {
  return {
    type: 'BeginStmt',
    mode
  };
};

/**
 * @param {AST._Identifier | null} name
 * @param {AST._ColumnConstraintClause} constraint
 * @return {AST.ColumnConstraint}
 */
export const ColumnConstraint = (name, constraint) => {
  return {
    type: 'ColumnConstraint',
    name,
    constraint
  };
};

/**
 * @param {AST._Identifier} columnName
 * @param {AST.TypeName | null} typeName
 * @param {AST.ColumnConstraint[]} columnConstraints
 * @return {AST.ColumnDef}
 */
export const ColumnDef = (columnName, typeName, columnConstraints) => {
  return {
    type: 'ColumnDef',
    columnName,
    typeName,
    columnConstraints
  };
};

/**
 * @param {[AST._Identifier, ...AST._Identifier[]]} columnNames
 * @return {AST.ColumnNameList}
 */
export const ColumnNameList = (columnNames) => {
  return {
    type: 'ColumnNameList',
    columnNames
  };
};

/**
 * @return {AST.CommitStmt}
 */
export const CommitStmt = () => {
  return {
    type: 'CommitStmt'
  };
};

/**
 * @param {AST.CteTableName} tableName
 * @param {AST.SelectStmt} as
 * @return {AST.CommonTableExpression}
 */
export const CommonTableExpression = (tableName, as) => {
  return {
    type: 'CommonTableExpression',
    tableName,
    as
  };
};

/**
 * @param {'ROLLBACK' | 'ABORT' | 'FAIL' | 'IGNORE' | 'REPLACE'} onConflict
 * @return {AST.ConflictClause}
 */
export const ConflictClause = (onConflict) => {
  return {
    type: 'ConflictClause',
    onConflict
  };
};

/**
 * @param {boolean} unique
 * @param {boolean} ifNotExists
 * @param {AST._Path | AST._Identifier} path
 * @param {AST._Identifier} tableName
 * @param {AST._ColumnSelectorClause} selector
 * @return {AST.CreateIndexStmt}
 */
export const CreateIndexStmt = (unique, ifNotExists, path, tableName, selector) => {
  return {
    type: 'CreateIndexStmt',
    unique,
    ifNotExists,
    path,
    tableName,
    selector
  };
};

/**
 * @param {boolean} temporary
 * @param {boolean} ifNotExists
 * @param {AST._Path | AST._Identifier} path
 * @param {AST.SelectStmt | AST._TableDef} target
 * @return {AST.CreateTableStmt}
 */
export const CreateTableStmt = (temporary, ifNotExists, path, target) => {
  return {
    type: 'CreateTableStmt',
    temporary,
    ifNotExists,
    path,
    target
  };
};

/**
 * @param {boolean} temporary
 * @param {boolean} ifNotExists
 * @param {AST._Path | AST._Identifier} path
 * @param {'BEFORE' | 'AFTER' | 'INSTEAD OF' | null} position
 * @param {'DELETE' | 'INSERT' | 'UPDATE' | AST._Identifier[]} event
 * @param {AST._Identifier} tableName
 * @param {boolean} forEachRow
 * @param {AST.Expr | null} when
 * @param {[AST._TriggerStmt, ...AST._TriggerStmt[]]} begin
 * @return {AST.CreateTriggerStmt}
 */
export const CreateTriggerStmt = (
  temporary,
  ifNotExists,
  path,
  position,
  event,
  tableName,
  forEachRow,
  when,
  begin
) => {
  return {
    type: 'CreateTriggerStmt',
    temporary,
    ifNotExists,
    path,
    position,
    event,
    tableName,
    forEachRow,
    when,
    begin
  };
};

/**
 * @param {boolean} temporary
 * @param {boolean} ifNotExists
 * @param {AST._Path | AST._Identifier} path
 * @param {AST._Identifier[]} columns
 * @param {AST.SelectStmt} select
 * @return {AST.CreateViewStmt}
 */
export const CreateViewStmt = (temporary, ifNotExists, path, columns, select) => {
  return {
    type: 'CreateViewStmt',
    temporary,
    ifNotExists,
    path,
    columns,
    select
  };
};

/**
 * @param {boolean} ifNotExists
 * @param {AST._Path | AST._Identifier} path
 * @param {AST._Identifier} moduleName
 * @param {AST._Identifier[]} moduleArguments
 * @return {AST.CreateVirtualTableStmt}
 */
export const CreateVirtualTableStmt = (ifNotExists, path, moduleName, moduleArguments) => {
  return {
    type: 'CreateVirtualTableStmt',
    ifNotExists,
    path,
    moduleName,
    moduleArguments
  };
};

/**
 * @param {AST._Identifier} tableName
 * @param {AST._Identifier[]} columnNames
 * @return {AST.CteTableName}
 */
export const CteTableName = (tableName, columnNames) => {
  return {
    type: 'CteTableName',
    tableName,
    columnNames
  };
};

/**
 * @param {AST.WithClause | null} withClause
 * @param {AST.QualifiedTableName} name
 * @param {AST.Expr | null} where
 * @param {AST._LimiterClause | null} limiter
 * @return {AST.DeleteStmt}
 */
export const DeleteStmt = (withClause, name, where, limiter) => {
  return {
    type: 'DeleteStmt',
    withClause,
    name,
    where,
    limiter
  };
};

/**
 * @param {AST._Identifier} schemaName
 * @return {AST.DetachStmt}
 */
export const DetachStmt = (schemaName) => {
  return {
    type: 'DetachStmt',
    schemaName
  };
};

/**
 * @param {boolean} ifExists
 * @param {AST._Path | AST._Identifier} path
 * @return {AST.DropIndexStmt}
 */
export const DropIndexStmt = (ifExists, path) => {
  return {
    type: 'DropIndexStmt',
    ifExists,
    path
  };
};

/**
 * @param {boolean} ifExists
 * @param {AST._Path | AST._Identifier} path
 * @return {AST.DropTableStmt}
 */
export const DropTableStmt = (ifExists, path) => {
  return {
    type: 'DropTableStmt',
    ifExists,
    path
  };
};

/**
 * @param {boolean} ifExists
 * @param {AST._Path | AST._Identifier} path
 * @return {AST.DropTriggerStmt}
 */
export const DropTriggerStmt = (ifExists, path) => {
  return {
    type: 'DropTriggerStmt',
    ifExists,
    path
  };
};

/**
 * @param {boolean} ifExists
 * @param {AST._Path | AST._Identifier} path
 * @return {AST.DropViewStmt}
 */
export const DropViewStmt = (ifExists, path) => {
  return {
    type: 'DropViewStmt',
    ifExists,
    path
  };
};

/**
 * @param {AST.WithClause | null} withClause
 * @param {[AST.SelectCore, ...AST._SelectCompound[]]} selectors
 * @param {AST._LimiterClause | null} limiter
 * @return {AST.FactoredSelectStmt}
 */
export const FactoredSelectStmt = (withClause, selectors, limiter) => {
  return {
    type: 'FactoredSelectStmt',
    withClause,
    selectors,
    limiter
  };
};

/**
 * @param {AST.Expr} where
 * @return {AST.FilterClause}
 */
export const FilterClause = (where) => {
  return {
    type: 'FilterClause',
    where
  };
};

/**
 * @param {AST._Identifier} foreignTable
 * @param {AST._Identifier[]} columnNames
 * @param {(AST._OnClause | AST._MatchClause)[]} events
 * @param {AST._DeferrableClause | null} deferrable
 * @return {AST.ForeignKeyClause}
 */
export const ForeignKeyClause = (foreignTable, columnNames, events, deferrable) => {
  return {
    type: 'ForeignKeyClause',
    foreignTable,
    columnNames,
    events,
    deferrable
  };
};

/**
 * @param {'RANGE' | 'ROWS' | 'GROUPS'} frame
 * @param {AST._FrameSpecBetweenClause | 'UNBOUNDED PRECEDING' | AST.Expr | 'CURRENT ROW'} target
 * @param {'NOT OTHERS' | 'CURRENT ROW' | 'GROUP' | 'TIES' | null} exclude
 * @return {AST.FrameSpec}
 */
export const FrameSpec = (frame, target, exclude) => {
  return {
    type: 'FrameSpec',
    frame,
    target,
    exclude
  };
};

/**
 * @param {AST._Identifier | AST.Expr} target
 * @param {AST._Identifier | null} collationName
 * @param {'ASC' | 'DESC' | null} orderBy
 * @return {AST.IndexedColumn}
 */
export const IndexedColumn = (target, collationName, orderBy) => {
  return {
    type: 'IndexedColumn',
    target,
    collationName,
    orderBy
  };
};

/**
 * @param {AST.WithClause | null} withClause
 * @param {AST._InsertOperator} operator
 * @param {AST._Path | AST._Identifier} path
 * @param {AST._Identifier | null} alias
 * @param {AST._Identifier[]} columns
 * @param {AST._InsertValuesClause | AST._InsertSelectClause | 'DEFAULT VALUES'} source
 * @return {AST.InsertStmt}
 */
export const InsertStmt = (withClause, operator, path, alias, columns, source) => {
  return {
    type: 'InsertStmt',
    withClause,
    operator,
    path,
    alias,
    columns,
    source
  };
};

/**
 * @param {[AST.TableOrSubquery, ...AST._JoinCompound[]]} joinees
 * @return {AST.JoinClause}
 */
export const JoinClause = (joinees) => {
  return {
    type: 'JoinClause',
    joinees
  };
};

/**
 * @param {AST._JoinOnClause | AST._JoinUsingClause} constraint
 * @return {AST.JoinConstraint}
 */
export const JoinConstraint = (constraint) => {
  return {
    type: 'JoinConstraint',
    constraint
  };
};

/**
 * @param {AST.IndexedColumn} indexedColumn
 * @param {'FIRST' | 'LAST' | null} nulls
 * @return {AST.OrderingTerm}
 */
export const OrderingTerm = (indexedColumn, nulls) => {
  return {
    type: 'OrderingTerm',
    indexedColumn,
    nulls
  };
};

/**
 * @param {AST._Identifier | AST.WindowDefn} over
 * @return {AST.OverClause}
 */
export const OverClause = (over) => {
  return {
    type: 'OverClause',
    over
  };
};

/**
 * @param {AST._Path | AST._Identifier} path
 * @param {AST._PragmaSetter | AST._PragmaGetter | null} right
 * @return {AST.PragmaStmt}
 */
export const PragmaStmt = (path, right) => {
  return {
    type: 'PragmaStmt',
    path,
    right
  };
};

/**
 * @param {AST._NumericLiteral | AST._KeywordLiteral} value
 * @return {AST.PragmaValue}
 */
export const PragmaValue = (value) => {
  return {
    type: 'PragmaValue',
    value
  };
};

/**
 * @param {AST._Path | AST._Identifier} path
 * @param {AST._Identifier | null} alias
 * @param {AST._Identifier | false | null} indexedBy
 * @return {AST.QualifiedTableName}
 */
export const QualifiedTableName = (path, alias, indexedBy) => {
  return {
    type: 'QualifiedTableName',
    path,
    alias,
    indexedBy
  };
};

/**
 * @param {['ROLLBACK' | 'ABORT' | 'FAIL', AST._StringLiteral] | null} onError
 * @return {AST.RaiseFunction}
 */
export const RaiseFunction = (onError) => {
  return {
    type: 'RaiseFunction',
    onError
  };
};

/**
 * @param {AST.CteTableName} cteTableName
 * @param {AST._Identifier} initialSelect
 * @param {boolean} all
 * @param {AST._Identifier} recursiveSelect
 * @return {AST.RecursiveCte}
 */
export const RecursiveCte = (cteTableName, initialSelect, all, recursiveSelect) => {
  return {
    type: 'RecursiveCte',
    cteTableName,
    initialSelect,
    all,
    recursiveSelect
  };
};

/**
 * @param {AST._Path | AST._Identifier | null} target
 * @return {AST.ReindexStmt}
 */
export const ReindexStmt = (target) => {
  return {
    type: 'ReindexStmt',
    target
  };
};

/**
 * @param {AST._Identifier} savepointName
 * @return {AST.ReleaseStmt}
 */
export const ReleaseStmt = (savepointName) => {
  return {
    type: 'ReleaseStmt',
    savepointName
  };
};

/**
 * @param {AST.Expr | AST._ColumnAliasClause | AST._AllColumnsClause} source
 * @return {AST.ResultColumn}
 */
export const ResultColumn = (source) => {
  return {
    type: 'ResultColumn',
    source
  };
};

/**
 * @param {AST._Identifier | null} savepointName
 * @return {AST.RollbackStmt}
 */
export const RollbackStmt = (savepointName) => {
  return {
    type: 'RollbackStmt',
    savepointName
  };
};

/**
 * @param {AST._Identifier} savepointName
 * @return {AST.SavepointStmt}
 */
export const SavepointStmt = (savepointName) => {
  return {
    type: 'SavepointStmt',
    savepointName
  };
};

/**
 * @param {AST.WithClause | null} withClause
 * @param {[AST.SelectCore, ...AST._SelectCompound[]]} select
 * @param {AST._LimiterClause | null} limiter
 * @return {AST.SelectStmt}
 */
export const SelectStmt = (withClause, select, limiter) => {
  return {
    type: 'SelectStmt',
    withClause,
    select,
    limiter
  };
};

/**
 * @param {AST._Identifier} name
 * @param {AST.Expr[] | '*'} args
 * @return {AST.SimpleFunctionInvocation}
 */
export const SimpleFunctionInvocation = (name, args) => {
  return {
    type: 'SimpleFunctionInvocation',
    name,
    args
  };
};

/**
 * @param {AST.WithClause | null} withClause
 * @param {AST.SelectCore} select
 * @param {AST._LimiterClause | null} limiter
 * @return {AST.SimpleSelectStmt}
 */
export const SimpleSelectStmt = (withClause, select, limiter) => {
  return {
    type: 'SimpleSelectStmt',
    withClause,
    select,
    limiter
  };
};

/**
 * @param {AST._Stmt} statement
 * @return {AST.SqlStmt}
 */
export const SqlStmt = (statement) => {
  return {
    type: 'SqlStmt',
    statement
  };
};

/**
 * @param {(AST.SqlStmt | AST._Stmt)[]} statements
 * @return {AST.SqlStmtList}
 */
export const SqlStmtList = (statements) => {
  return {
    type: 'SqlStmtList',
    statements
  };
};

/**
 * @param {AST._Identifier | null} name
 * @param {AST._TableConstraint} constraint
 * @return {AST.TableConstraint}
 */
export const TableConstraint = (name, constraint) => {
  return {
    type: 'TableConstraint',
    name,
    constraint
  };
};

/**
 * @param {[string, ...string[]]} names
 * @param {[AST._NumericLiteral?, AST._NumericLiteral?]} args
 * @return {AST.TypeName}
 */
export const TypeName = (names, args) => {
  return {
    type: 'TypeName',
    names,
    args
  };
};

/**
 * @param {AST.WithClause | null} withClause
 * @param {'ABORT' | 'FAIL' | 'IGNORE' | 'REPLACE' | 'ROLLBACK' | null} alternate
 * @param {AST.QualifiedTableName} name
 * @param {[AST._SetClause, ...AST._SetClause[]]} set
 * @param {AST._TableQueryClause | null} from
 * @param {AST.Expr | null} where
 * @param {AST._LimiterClause | null} limiter
 * @return {AST.UpdateStmt}
 */
export const UpdateStmt = (withClause, alternate, name, set, from, where, limiter) => {
  return {
    type: 'UpdateStmt',
    withClause,
    alternate,
    name,
    set,
    from,
    where,
    limiter
  };
};

/**
 * @param {AST._ColumnSelectorClause | null} onConflict
 * @param {AST._UpdateSetClause | null} action
 * @return {AST.UpsertClause}
 */
export const UpsertClause = (onConflict, action) => {
  return {
    type: 'UpsertClause',
    onConflict,
    action
  };
};

/**
 * @param {AST._Identifier | null} schemaName
 * @param {AST._Identifier | null} filename
 * @return {AST.VacuumStmt}
 */
export const VacuumStmt = (schemaName, filename) => {
  return {
    type: 'VacuumStmt',
    schemaName,
    filename
  };
};

/**
 * @param {AST._Identifier | null} baseWindowName
 * @param {AST.Expr[]} partitionBy
 * @param {AST.OrderingTerm[]} orderBy
 * @param {AST.FrameSpec | null} frameSpec
 * @return {AST.WindowDefn}
 */
export const WindowDefn = (baseWindowName, partitionBy, orderBy, frameSpec) => {
  return {
    type: 'WindowDefn',
    baseWindowName,
    partitionBy,
    orderBy,
    frameSpec
  };
};

/**
 * @param {AST._Identifier} name
 * @param {AST.Expr[] | '*'} args
 * @param {AST.FilterClause | null} filter
 * @param {AST.OverClause} over
 * @return {AST.WindowFunctionInvocation}
 */
export const WindowFunctionInvocation = (name, args, filter, over) => {
  return {
    type: 'WindowFunctionInvocation',
    name,
    args,
    filter,
    over
  };
};

/**
 * @param {boolean} recursive
 * @param {[AST.CommonTableExpression, ...AST.CommonTableExpression[]]} expressions
 * @return {AST.WithClause}
 */
export const WithClause = (recursive, expressions) => {
  return {
    type: 'WithClause',
    recursive,
    expressions
  };
};
