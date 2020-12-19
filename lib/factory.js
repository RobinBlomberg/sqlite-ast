/**
 * @typedef {import('./ast')._AddClause} _AddClause
 * @typedef {import('./ast')._AggregateArgs} _AggregateArgs
 * @typedef {import('./ast')._AsClause} _AsClause
 * @typedef {import('./ast')._BetweenExpression} _BetweenExpression
 * @typedef {import('./ast')._BinaryExpression} _BinaryExpression
 * @typedef {import('./ast')._BinaryKeywordExpression} _BinaryKeywordExpression
 * @typedef {import('./ast')._BinaryOperator} _BinaryOperator
 * @typedef {import('./ast')._BindParameter} _BindParameter
 * @typedef {import('./ast')._BlobLiteral} _BlobLiteral
 * @typedef {import('./ast')._CallExpression} _CallExpression
 * @typedef {import('./ast')._CaseExpression} _CaseExpression
 * @typedef {import('./ast')._CaseClause} _CaseClause
 * @typedef {import('./ast')._CastExpression} _CastExpression
 * @typedef {import('./ast')._CheckClause} _CheckClause
 * @typedef {import('./ast')._CheckConstraint} _CheckConstraint
 * @typedef {import('./ast')._CollateClause} _CollateClause
 * @typedef {import('./ast')._CollateExpression} _CollateExpression
 * @typedef {import('./ast')._ColumnAliasClause} _ColumnAliasClause
 * @typedef {import('./ast')._ColumnConstraintClause} _ColumnConstraintClause
 * @typedef {import('./ast')._ColumnSelectorClause} _ColumnSelectorClause
 * @typedef {import('./ast')._CteSelectClause} _CteSelectClause
 * @typedef {import('./ast')._DefaultClause} _DefaultClause
 * @typedef {import('./ast')._DeferrableClause} _DeferrableClause
 * @typedef {import('./ast')._ExistsExpression} _ExistsExpression
 * @typedef {import('./ast')._ExprClause} _ExprClause
 * @typedef {import('./ast')._ForeignKeyConstraint} _ForeignKeyConstraint
 * @typedef {import('./ast')._FrameSpecBetweenClause} _FrameSpecBetweenClause
 * @typedef {import('./ast')._FrameSpecExprClause} _FrameSpecExprClause
 * @typedef {import('./ast')._GroupByClause} _GroupByClause
 * @typedef {import('./ast')._Identifier} _Identifier
 * @typedef {import('./ast')._InExpression} _InExpression
 * @typedef {import('./ast')._InsertOperator} _InsertOperator
 * @typedef {import('./ast')._InsertSelectClause} _InsertSelectClause
 * @typedef {import('./ast')._InsertValuesClause} _InsertValuesClause
 * @typedef {import('./ast')._IsExpression} _IsExpression
 * @typedef {import('./ast')._JoinCompound} _JoinCompound
 * @typedef {import('./ast')._JoinOnClause} _JoinOnClause
 * @typedef {import('./ast')._JoinUsingClause} _JoinUsingClause
 * @typedef {import('./ast')._LimitClause} _LimitClause
 * @typedef {import('./ast')._LimiterClause} _LimiterClause
 * @typedef {import('./ast')._LimitTailClause} _LimitTailClause
 * @typedef {import('./ast')._LiteralValue} _LiteralValue
 * @typedef {import('./ast')._MatchClause} _MatchClause
 * @typedef {import('./ast')._NotNullClause} _NotNullClause
 * @typedef {import('./ast')._NullComparisonExpression} _NullComparisonExpression
 * @typedef {import('./ast')._OnClause} _OnClause
 * @typedef {import('./ast')._PragmaGetter} _PragmaGetter
 * @typedef {import('./ast')._PragmaSetter} _PragmaSetter
 * @typedef {import('./ast')._PrimaryKeyClause} _PrimaryKeyClause
 * @typedef {import('./ast')._PrimaryKeyConstraint} _PrimaryKeyConstraint
 * @typedef {import('./ast')._ReindexNameClause} _ReindexNameClause
 * @typedef {import('./ast')._RenameClause} _RenameClause
 * @typedef {import('./ast')._SelectClause} _SelectClause
 * @typedef {import('./ast')._SelectCompound} _SelectCompound
 * @typedef {import('./ast')._SelectFromClause} _SelectFromClause
 * @typedef {import('./ast')._SelectorClause} _SelectorClause
 * @typedef {import('./ast')._SequenceExpression} _SequenceExpression
 * @typedef {import('./ast')._SetClause} _SetClause
 * @typedef {import('./ast')._SqlStmt} _SqlStmt
 * @typedef {import('./ast')._StringLiteral} _StringLiteral
 * @typedef {import('./ast')._TableCallClause} _TableCallClause
 * @typedef {import('./ast')._TableConstraint} _TableConstraint
 * @typedef {import('./ast')._TableDef} _TableDef
 * @typedef {import('./ast')._TableOrSubquery} _TableOrSubquery
 * @typedef {import('./ast')._TableQueryClause} _TableQueryClause
 * @typedef {import('./ast')._TableSelectClause} _TableSelectClause
 * @typedef {import('./ast')._TableSelectorClause} _TableSelectorClause
 * @typedef {import('./ast')._TriggerStmt} _TriggerStmt
 * @typedef {import('./ast')._UnaryOperator} _UnaryOperator
 * @typedef {import('./ast')._UniqueClause} _UniqueClause
 * @typedef {import('./ast')._UniqueConstraint} _UniqueConstraint
 * @typedef {import('./ast')._UpdateClause} _UpdateClause
 * @typedef {import('./ast')._UpdateSetClause} _UpdateSetClause
 * @typedef {import('./ast')._ValueClause} _ValueClause
 * @typedef {import('./ast')._ValuesClause} _ValuesClause
 * @typedef {import('./ast')._WindowAsClause} _WindowAsClause
 * @typedef {import('./ast').AggregateFunctionInvocation} AggregateFunctionInvocation
 * @typedef {import('./ast').AlterTableStmt} AlterTableStmt
 * @typedef {import('./ast').AnalyzeStmt} AnalyzeStmt
 * @typedef {import('./ast').AttachStmt} AttachStmt
 * @typedef {import('./ast').BeginStmt} BeginStmt
 * @typedef {import('./ast').ColumnConstraint} ColumnConstraint
 * @typedef {import('./ast').ColumnDef} ColumnDef
 * @typedef {import('./ast').ColumnNameList} ColumnNameList
 * @typedef {import('./ast').CommitStmt} CommitStmt
 * @typedef {import('./ast').CommonTableExpression} CommonTableExpression
 * @typedef {import('./ast').CompoundOperator} CompoundOperator
 * @typedef {import('./ast').CompoundSelectStmt} CompoundSelectStmt
 * @typedef {import('./ast').ConflictClause} ConflictClause
 * @typedef {import('./ast').CreateIndexStmt} CreateIndexStmt
 * @typedef {import('./ast').CreateTableStmt} CreateTableStmt
 * @typedef {import('./ast').CreateTriggerStmt} CreateTriggerStmt
 * @typedef {import('./ast').CreateViewStmt} CreateViewStmt
 * @typedef {import('./ast').CreateVirtualTableStmt} CreateVirtualTableStmt
 * @typedef {import('./ast').CteTableName} CteTableName
 * @typedef {import('./ast').DeleteStmt} DeleteStmt
 * @typedef {import('./ast').DetachStmt} DetachStmt
 * @typedef {import('./ast').DropIndexStmt} DropIndexStmt
 * @typedef {import('./ast').DropTableStmt} DropTableStmt
 * @typedef {import('./ast').DropTriggerStmt} DropTriggerStmt
 * @typedef {import('./ast').DropViewStmt} DropViewStmt
 * @typedef {import('./ast').Expr} Expr
 * @typedef {import('./ast').FactoredSelectStmt} FactoredSelectStmt
 * @typedef {import('./ast').FilterClause} FilterClause
 * @typedef {import('./ast').ForeignKeyClause} ForeignKeyClause
 * @typedef {import('./ast').FrameSpec} FrameSpec
 * @typedef {import('./ast').IndexedColumn} IndexedColumn
 * @typedef {import('./ast').InsertStmt} InsertStmt
 * @typedef {import('./ast').JoinClause} JoinClause
 * @typedef {import('./ast').JoinConstraint} JoinConstraint
 * @typedef {import('./ast').JoinOperator} JoinOperator
 * @typedef {import('./ast').LiteralValue} LiteralValue
 * @typedef {import('./ast').NumericLiteral} NumericLiteral
 * @typedef {import('./ast').OrderingTerm} OrderingTerm
 * @typedef {import('./ast').OverClause} OverClause
 * @typedef {import('./ast').PragmaStmt} PragmaStmt
 * @typedef {import('./ast').PragmaValue} PragmaValue
 * @typedef {import('./ast').QualifiedTableName} QualifiedTableName
 * @typedef {import('./ast').RaiseFunction} RaiseFunction
 * @typedef {import('./ast').RecursiveCte} RecursiveCte
 * @typedef {import('./ast').ReindexStmt} ReindexStmt
 * @typedef {import('./ast').ReleaseStmt} ReleaseStmt
 * @typedef {import('./ast').ResultColumn} ResultColumn
 * @typedef {import('./ast').RollbackStmt} RollbackStmt
 * @typedef {import('./ast').SavepointStmt} SavepointStmt
 * @typedef {import('./ast').SelectCore} SelectCore
 * @typedef {import('./ast').SelectStmt} SelectStmt
 * @typedef {import('./ast').SimpleFunctionInvocation} SimpleFunctionInvocation
 * @typedef {import('./ast').SimpleSelectStmt} SimpleSelectStmt
 * @typedef {import('./ast').SqlStmt} SqlStmt
 * @typedef {import('./ast').SqlStmtList} SqlStmtList
 * @typedef {import('./ast').TableConstraint} TableConstraint
 * @typedef {import('./ast').TableOrSubquery} TableOrSubquery
 * @typedef {import('./ast').TypeName} TypeName
 * @typedef {import('./ast').UpdateStmt} UpdateStmt
 * @typedef {import('./ast').UpsertClause} UpsertClause
 * @typedef {import('./ast').VacuumStmt} VacuumStmt
 * @typedef {import('./ast').WindowDefn} WindowDefn
 * @typedef {import('./ast').WindowFunctionInvocation} WindowFunctionInvocation
 * @typedef {import('./ast').WithClause} WithClause
 */

/**
 * @param {ColumnDef} columnDef
 * @return {_AddClause}
 */
export const _AddClause = (columnDef) => {
  return {
    type: '_AddColumnClause',
    columnDef
  };
};

/**
 * @param {boolean} distinct
 * @param {[Expr, ...Expr[]]} expressions
 * @return {_AggregateArgs}
 */
export const _AggregateArgs = (distinct, expressions) => {
  return {
    type: '_AggregateArgs',
    distinct,
    expressions
  };
};

/**
 * @param {boolean} generatedAlways
 * @param {Expr} as
 * @param {'STORED' | 'VIRTUAL' | null} mode
 * @return {_AsClause}
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
 * @param {boolean} negated
 * @param {Expr} lower
 * @param {Expr} upper
 * @return {_BetweenExpression}
 */
export const _BetweenExpression = (negated, lower, upper) => {
  return {
    type: '_BetweenExpression',
    negated,
    lower,
    upper
  };
};

/**
 * @param {Expr} left
 * @param {_BinaryOperator} operator
 * @param {Expr} right
 * @return {_BinaryExpression}
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
 * @param {boolean} negated
 * @param {'LIKE' | 'GLOB' | 'REGEXP' | 'MATCH'} operator
 * @param {Expr} expr
 * @param {Expr | null} escape
 * @return {_BinaryKeywordExpression}
 */
export const _BinaryKeywordExpression = (negated, operator, expr, escape) => {
  return {
    type: '_BinaryKeywordExpression',
    negated,
    operator,
    expr,
    escape
  };
};

/**
 * @param {string} bindParameter
 * @return {_BindParameter}
 */
export const _BindParameter = (bindParameter) => {
  return {
    type: '_BindParameter',
    bindParameter
  };
};

/**
 * @param {string[]} value
 * @return {_BlobLiteral}
 */
export const _BlobLiteral = (value) => {
  return {
    type: '_BlobLiteral',
    value
  };
};

/**
 * @param {string} functionName
 * @param {Expr[] | '*'} args
 * @param {FilterClause | null} filter
 * @param {OverClause | null} over
 * @return {_CallExpression}
 */
export const _CallExpression = (functionName, args, filter, over) => {
  return {
    type: '_CallExpression',
    functionName,
    args,
    filter,
    over
  };
};

/**
 * @param {Expr | null} discriminant
 * @param {[_CaseClause, ..._CaseClause[]]} cases
 * @param {Expr | null} alternate
 * @return {_CaseExpression}
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
 * @param {Expr} when
 * @param {Expr} then
 * @return {_CaseClause}
 */
export const _CaseClause = (when, then) => {
  return {
    type: '_CaseClause',
    when,
    then
  };
};

/**
 * @param {Expr} cast
 * @param {TypeName} as
 * @return {_CastExpression}
 */
export const _CastExpression = (cast, as) => {
  return {
    type: '_CastExpression',
    cast,
    as
  };
};

/**
 * @param {Expr} expr
 * @return {_CheckClause}
 */
export const _CheckClause = (expr) => {
  return {
    type: '_CheckClause',
    expr
  };
};

/**
 * @param {Expr} check
 * @return {_CheckConstraint}
 */
export const _CheckConstraint = (check) => {
  return {
    type: '_CheckConstraint',
    check
  };
};

/**
 * @param {string} collationName
 * @return {_CollateClause}
 */
export const _CollateClause = (collationName) => {
  return {
    type: '_CollateClause',
    collationName
  };
};

/**
 * @param {Expr} expr
 * @param {string} collationName
 * @return {_CollateExpression}
 */
export const _CollateExpression = (expr, collationName) => {
  return {
    type: '_CollateExpression',
    expr,
    collationName
  };
};

/**
 * @param {Expr} expr
 * @param {string | null} as
 * @return {_ColumnAliasClause}
 */
export const _ColumnAliasClause = (expr, as) => {
  return {
    type: '_ColumnAliasClause',
    expr,
    as
  };
};

/**
 * @param {[string, ...string[]]} indexedColumns
 * @param {Expr | null} where
 * @return {_ColumnSelectorClause}
 */
export const _ColumnSelectorClause = (indexedColumns, where) => {
  return {
    type: '_ColumnSelectorClause',
    indexedColumns,
    where
  };
};

/**
 * @param {CteTableName} cteTableName
 * @param {SelectStmt} as
 * @return {_CteSelectClause}
 */
export const _CteSelectClause = (cteTableName, as) => {
  return {
    type: '_CteSelectClause',
    cteTableName,
    as
  };
};

/**
 * @param {number | Expr | LiteralValue} expr
 * @return {_DefaultClause}
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
 * @return {_DeferrableClause}
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
 * @param {SelectStmt} select
 * @return {_ExistsExpression}
 */
export const _ExistsExpression = (negated, select) => {
  return {
    type: '_ExistsExpression',
    negated,
    select
  };
};

/**
 * @param {[string, ...string[]]} columnNames
 * @param {ForeignKeyClause} foreignKey
 * @return {_ForeignKeyConstraint}
 */
export const _ForeignKeyConstraint = (columnNames, foreignKey) => {
  return {
    type: '_ForeignKeyConstraint',
    columnNames,
    foreignKey
  };
};

/**
 * @param {'UNBOUNDED PRECEDING' | _FrameSpecExprClause | 'CURRENT ROW'} between
 * @param {_FrameSpecExprClause | 'CURRENT ROW' | 'UNBOUNDED FOLLOWING'} and
 * @return {_FrameSpecBetweenClause}
 */
export const _FrameSpecBetweenClause = (between, and) => {
  return {
    type: '_FrameSpecBetweenClause',
    between,
    and
  };
};

/**
 * @param {Expr} expr
 * @param {'PRECEDING' | 'FOLLOWING'} position
 * @return {_FrameSpecExprClause}
 */
export const _FrameSpecExprClause = (expr, position) => {
  return {
    type: '_FrameSpecExprClause',
    expr,
    position
  };
};

/**
 * @param {[Expr, ...Expr[]]} expressions
 * @param {Expr | null} having
 * @return {_GroupByClause}
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
 * @return {_Identifier}
 */
export const _Identifier = (name) => {
  return {
    type: '_Identifier',
    name
  };
};

/**
 * @param {boolean} negated
 * @param {_SelectorClause | _TableSelectorClause} selector
 * @return {_InExpression}
 */
export const _InExpression = (negated, selector) => {
  return {
    type: '_InExpression',
    negated,
    selector
  };
};

/**
 * @param {SelectStmt} select
 * @param {null | UpsertClause} upsert
 * @return {_InsertSelectClause}
 */
export const _InsertSelectClause = (select, upsert) => {
  return {
    type: '_InsertSelectClause',
    select,
    upsert
  };
};

/**
 * @param {_ValuesClause} values
 * @param {null | UpsertClause} upsert
 * @return {_InsertValuesClause}
 */
export const _InsertValuesClause = (values, upsert) => {
  return {
    type: '_InsertValuesClause',
    values,
    upsert
  };
};

/**
 * @param {Expr} left
 * @param {boolean} negated
 * @param {Expr} right
 * @return {_IsExpression}
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
 * @param {JoinOperator} operator
 * @param {TableOrSubquery} query
 * @param {JoinConstraint} constraint
 * @return {_JoinCompound}
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
 * @param {Expr} on
 * @return {_JoinOnClause}
 */
export const _JoinOnClause = (on) => {
  return {
    type: '_JoinOnClause',
    on
  };
};

/**
 * @param {[string, ...string[]]} columnNames
 * @return {_JoinUsingClause}
 */
export const _JoinUsingClause = (columnNames) => {
  return {
    type: '_JoinUsingClause',
    columnNames
  };
};

/**
 * @param {Expr} left
 * @param {_LimitTailClause | null} right
 * @return {_LimitClause}
 */
export const _LimitClause = (left, right) => {
  return {
    type: '_LimitClause',
    left,
    right
  };
};

/**
 * @param {OrderingTerm[]} orderBy
 * @param {_LimitClause | null} limit
 * @return {_LimiterClause}
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
 * @param {Expr} expr
 * @return {_LimitTailClause}
 */
export const _LimitTailClause = (offset, expr) => {
  return {
    type: '_LimitTailClause',
    offset,
    expr
  };
};

/**
 * @param {string} name
 * @return {_MatchClause}
 */
export const _MatchClause = (name) => {
  return {
    type: '_MatchClause',
    name
  };
};

/**
 * @param {ConflictClause} onConflict
 * @return {_NotNullClause}
 */
export const _NotNullClause = (onConflict) => {
  return {
    type: '_NotNullClause',
    onConflict
  };
};

/**
 * @param {Expr} expr
 * @param {boolean} negated
 * @return {_NullComparisonExpression}
 */
export const _NullComparisonExpression = (expr, negated) => {
  return {
    type: '_NullComparisonExpression',
    expr,
    negated
  };
};

/**
 * @param {'DELETE' | 'UPDATE'} on
 * @param {'SET NULL' | 'SET DEFAULT' | 'CASCADE' | 'RESTRICT' | 'NO ACTION'} action
 * @return {_OnClause}
 */
export const _OnClause = (on, action) => {
  return {
    type: '_OnClause',
    on,
    action
  };
};

/**
 * @param {PragmaValue} value
 * @return {_PragmaGetter}
 */
export const _PragmaGetter = (value) => {
  return {
    type: '_PragmaGetter',
    value
  };
};

/**
 * @param {PragmaValue} value
 * @return {_PragmaSetter}
 */
export const _PragmaSetter = (value) => {
  return {
    type: '_PragmaSetter',
    value
  };
};

/**
 * @param {null | 'ASC' | 'DESC'} orderBy
 * @param {ConflictClause} onConflict
 * @param {boolean} autoincrement
 * @return {_PrimaryKeyClause}
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
 * @param {[IndexedColumn, ...IndexedColumn[]]} indexedColumns
 * @param {null | ConflictClause} onConflict
 * @return {_PrimaryKeyConstraint}
 */
export const _PrimaryKeyConstraint = (indexedColumns, onConflict) => {
  return {
    type: '_PrimaryKeyConstraint',
    indexedColumns,
    onConflict
  };
};

/**
 * @param {[string, string] | string} name
 * @return {_ReindexNameClause}
 */
export const _ReindexNameClause = (name) => {
  return {
    type: '_ReindexTargetClause',
    name
  };
};

/**
 * @param {null | string} from
 * @param {string} to
 * @return {_RenameClause}
 */
export const _RenameClause = (from, to) => {
  return {
    type: '_RenameClause',
    from,
    to
  };
};

/**
 * @param {null | 'DISTINCT' | 'ALL'} modifier
 * @param {[ResultColumn, ...ResultColumn[]]} resultColumns
 * @param {_SelectFromClause} from
 * @param {null | Expr} where
 * @param {null | _GroupByClause} groupBy
 * @param {_WindowAsClause[]} window
 * @return {_SelectClause}
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
 * @param {CompoundOperator} operator
 * @param {SelectCore} selector
 * @return {_SelectCompound}
 */
export const _SelectCompound = (operator, selector) => {
  return {
    type: '_SelectCompound',
    operator,
    selector
  };
};

/**
 * @param {TableOrSubquery | null} query
 * @return {_SelectFromClause}
 */
export const _SelectFromClause = (query) => {
  return {
    type: '_SelectFromClause',
    query
  };
};

/**
 * @param {SelectStmt | Expr[]} selector
 * @return {_SelectorClause}
 */
export const _SelectorClause = (selector) => {
  return {
    type: '_SelectorClause',
    selector
  };
};

/**
 * @param {[Expr, ...Expr[]]} expressions
 * @return {_SequenceExpression}
 */
export const _SequenceExpression = (expressions) => {
  return {
    type: '_SequenceExpression',
    expressions
  };
};

/**
 * @param {string | ColumnNameList} columns
 * @param {Expr} expr
 * @return {_SetClause}
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
 * @return {_StringLiteral}
 */
export const _StringLiteral = (value) => {
  return {
    type: '_StringLiteral',
    value
  };
};

/**
 * @param {[string, string] | string} name
 * @param {[Expr, ...Expr[]]} args
 * @param {string} tableAlias
 * @return {_TableCallClause}
 */
export const _TableCallClause = (name, args, tableAlias) => {
  return {
    type: '_TableCallClause',
    name,
    args,
    tableAlias
  };
};

/**
 * @param {[ColumnDef, ...ColumnDef[]]} columnDefs
 * @param {TableConstraint[]} tableConstraints
 * @param {boolean} withoutRowId
 * @return {_TableDef}
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
 * @param {[TableOrSubquery, ...TableOrSubquery[]] | JoinClause} query
 * @return {_TableQueryClause}
 */
export const _TableQueryClause = (query) => {
  return {
    type: '_TableQueryClause',
    query
  };
};

/**
 * @param {SelectStmt} select
 * @param {string} tableAlias
 * @return {_TableSelectClause}
 */
export const _TableSelectClause = (select, tableAlias) => {
  return {
    type: '_TableSelectClause',
    select,
    tableAlias
  };
};

/**
 * @param {[string, string] | string} name
 * @param {Expr[]} args
 * @return {_TableSelectorClause}
 */
export const _TableSelectorClause = (name, args) => {
  return {
    type: '_TableSelectorClause',
    name,
    args
  };
};

/**
 * @param {ConflictClause} conflict
 * @return {_UniqueClause}
 */
export const _UniqueClause = (conflict) => {
  return {
    type: '_UniqueClause',
    conflict
  };
};

/**
 * @param {[IndexedColumn, ...IndexedColumn[]]} indexedColumns
 * @param {null | ConflictClause} conflict
 * @return {_UniqueConstraint}
 */
export const _UniqueConstraint = (indexedColumns, conflict) => {
  return {
    type: '_UniqueConstraint',
    indexedColumns,
    conflict
  };
};

/**
 * @param {string[]} columnNames
 * @return {_UpdateClause}
 */
export const _UpdateClause = (columnNames) => {
  return {
    type: '_UpdateClause',
    columnNames
  };
};

/**
 * @param {[_SetClause, ..._SetClause[]]} set
 * @param {null | Expr} where
 * @return {_UpdateSetClause}
 */
export const _UpdateSetClause = (set, where) => {
  return {
    type: '_UpsertSetClause',
    set,
    where
  };
};

/**
 * @param {[Expr, ...Expr[]]} values
 * @return {_ValueClause}
 */
export const _ValueClause = (values) => {
  return {
    type: '_ValueClause',
    values
  };
};

/**
 * @param {[_ValueClause, ..._ValueClause[]]} rows
 * @return {_ValuesClause}
 */
export const _ValuesClause = (rows) => {
  return {
    type: '_ValuesClause',
    rows
  };
};

/**
 * @param {string} windowName
 * @param {WindowDefn} windowDefn
 * @return {_WindowAsClause}
 */
export const _WindowAsClause = (windowName, windowDefn) => {
  return {
    type: '_WindowAsClause',
    windowName,
    windowDefn
  };
};

/**
 * @param {string} aggregateFunc
 * @param {_AggregateArgs | '*' | null} args
 * @param {null | FilterClause} filter
 * @return {AggregateFunctionInvocation}
 */
export const AggregateFunctionInvocation = (aggregateFunc, args, filter) => {
  return {
    type: 'AggregateFunctionInvocation',
    aggregateFunc,
    args,
    filter
  };
};

/**
 * @param {[string, string] | string} name
 * @param {_RenameClause | _AddClause} action
 * @return {AlterTableStmt}
 */
export const AlterTableStmt = (name, action) => {
  return {
    type: 'AlterTableStmt',
    name,
    action
  };
};

/**
 * @param {null | [string, string] | string} name
 * @return {AnalyzeStmt}
 */
export const AnalyzeStmt = (name) => {
  return {
    type: 'AnalyzeStmt',
    name
  };
};

/**
 * @param {Expr} expr
 * @param {string} schemaName
 * @return {AttachStmt}
 */
export const AttachStmt = (expr, schemaName) => {
  return {
    type: 'AttachStmt',
    expr,
    schemaName
  };
};

/**
 * @param {null | 'DEFERRED' | 'IMMEDIATE' | 'EXCLUSIVE'} mode
 * @return {BeginStmt}
 */
export const BeginStmt = (mode) => {
  return {
    type: 'BeginStmt',
    mode
  };
};

/**
 * @param {string | null} name
 * @param {_ColumnConstraintClause} constraint
 * @return {ColumnConstraint}
 */
export const ColumnConstraint = (name, constraint) => {
  return {
    type: 'ColumnConstraint',
    name,
    constraint
  };
};

/**
 * @param {string} columnName
 * @param {string | null} typeName
 * @param {ColumnConstraint[]} columnConstraints
 * @return {ColumnDef}
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
 * @param {[string, ...string[]]} columnNames
 * @return {ColumnNameList}
 */
export const ColumnNameList = (columnNames) => {
  return {
    type: 'ColumnNameList',
    columnNames
  };
};

/**
 * @return {CommitStmt}
 */
export const CommitStmt = () => {
  return {
    type: 'CommitStmt'
  };
};

/**
 * @param {string} tableName
 * @param {string[]} columnNames
 * @param {SelectStmt} as
 * @return {CommonTableExpression}
 */
export const CommonTableExpression = (tableName, columnNames, as) => {
  return {
    type: 'CommonTableExpresison',
    tableName,
    columnNames,
    as
  };
};

/**
 * @param {WithClause | null} withClause
 * @param {[SelectCore, ..._SelectCompound[]]} select
 * @param {_LimiterClause | null} limiter
 * @return {CompoundSelectStmt}
 */
export const CompoundSelectStmt = (withClause, select, limiter) => {
  return {
    type: 'CompoundSelectStmt',
    withClause,
    select,
    limiter
  };
};

/**
 * @param {null | 'ROLLBACK' | 'ABORT' | 'FAIL' | 'IGNORE' | 'REPLACE'} onConflict
 * @return {ConflictClause}
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
 * @param {[string, string] | string} name
 * @param {string} tableName
 * @param {_ColumnSelectorClause} selector
 * @return {CreateIndexStmt}
 */
export const CreateIndexStmt = (unique, ifNotExists, name, tableName, selector) => {
  return {
    type: 'CreateIndexStmt',
    unique,
    ifNotExists,
    name,
    tableName,
    selector
  };
};

/**
 * @param {boolean} temporary
 * @param {boolean} ifNotExists
 * @param {[string, string] | string} name
 * @param {SelectStmt | _TableDef} target
 * @return {CreateTableStmt}
 */
export const CreateTableStmt = (temporary, ifNotExists, name, target) => {
  return {
    type: 'CreateTableStmt',
    temporary,
    ifNotExists,
    name,
    target
  };
};

/**
 * @param {boolean} temporary
 * @param {boolean} ifNotExists
 * @param {[string, string] | string} name
 * @param {'BEFORE' | 'AFTER' | 'INSTEAD OF' | null} position
 * @param {'DELETE' | 'INSERT' | _UpdateClause} event
 * @param {string} tableName
 * @param {boolean} forEachRow
 * @param {Expr | null} when
 * @param {[_TriggerStmt, ..._TriggerStmt[]]} begin
 * @return {CreateTriggerStmt}
 */
export const CreateTriggerStmt = (
  temporary,
  ifNotExists,
  name,
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
    name,
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
 * @param {[string, string] | string} name
 * @param {string[]} columns
 * @param {SelectStmt} select
 * @return {CreateViewStmt}
 */
export const CreateViewStmt = (temporary, ifNotExists, name, columns, select) => {
  return {
    type: 'CreateViewStmt',
    temporary,
    ifNotExists,
    name,
    columns,
    select
  };
};

/**
 * @param {boolean} ifNotExists
 * @param {[string, string] | string} name
 * @param {string} moduleName
 * @param {string[]} moduleArguments
 * @return {CreateVirtualTableStmt}
 */
export const CreateVirtualTableStmt = (ifNotExists, name, moduleName, moduleArguments) => {
  return {
    type: 'CreateVirtualTableStmt',
    ifNotExists,
    name,
    moduleName,
    moduleArguments
  };
};

/**
 * @param {string} tableName
 * @param {string[]} columnNames
 * @return {CteTableName}
 */
export const CteTableName = (tableName, columnNames) => {
  return {
    type: 'CteTableName',
    tableName,
    columnNames
  };
};

/**
 * @param {WithClause | null} withClause
 * @param {QualifiedTableName} qualifiedTableName
 * @param {Expr | null} where
 * @param {_LimiterClause | null} limiter
 * @return {DeleteStmt}
 */
export const DeleteStmt = (withClause, qualifiedTableName, where, limiter) => {
  return {
    type: 'DeleteStmt',
    withClause,
    qualifiedTableName,
    where,
    limiter
  };
};

/**
 * @param {string} schemaName
 * @return {DetachStmt}
 */
export const DetachStmt = (schemaName) => {
  return {
    type: 'DetachStmt',
    schemaName
  };
};

/**
 * @param {boolean} ifExists
 * @param {[string, string] | string} name
 * @return {DropIndexStmt}
 */
export const DropIndexStmt = (ifExists, name) => {
  return {
    type: 'DropIndexStmt',
    ifExists,
    name
  };
};

/**
 * @param {boolean} ifExists
 * @param {[string, string] | string} name
 * @return {DropTableStmt}
 */
export const DropTableStmt = (ifExists, name) => {
  return {
    type: 'DropTableStmt',
    ifExists,
    name
  };
};

/**
 * @param {boolean} ifExists
 * @param {[string, string] | string} name
 * @return {DropTriggerStmt}
 */
export const DropTriggerStmt = (ifExists, name) => {
  return {
    type: 'DropTriggerStmt',
    ifExists,
    name
  };
};

/**
 * @param {boolean} ifExists
 * @param {[string, string] | string} name
 * @return {DropViewStmt}
 */
export const DropViewStmt = (ifExists, name) => {
  return {
    type: 'DropViewStmt',
    ifExists,
    name
  };
};

/**
 * @param {_ExprClause} expr
 * @return {Expr}
 */
export const Expr = (expr) => {
  return {
    type: 'Expr',
    expr
  };
};

/**
 * @param {WithClause | null} withClause
 * @param {[SelectCore, ..._SelectCompound[]]} selectors
 * @param {_LimiterClause | null} limiter
 * @return {FactoredSelectStmt}
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
 * @param {Expr} where
 * @return {FilterClause}
 */
export const FilterClause = (where) => {
  return {
    type: 'FilterClause',
    where
  };
};

/**
 * @param {string} foreignTable
 * @param {string[]} columnNames
 * @param {(_OnClause | _MatchClause)[]} events
 * @param {_DeferrableClause | null} deferrable
 * @return {ForeignKeyClause}
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
 * @param {_FrameSpecBetweenClause | 'UNBOUNDED PRECEDING' | Expr | 'CURRENT ROW'} target
 * @param {'NOT OTHERS' | 'CURRENT ROW' | 'GROUP' | 'TIES' | null} exclude
 * @return {FrameSpec}
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
 * @param {string | Expr} target
 * @param {string | null} collationName
 * @param {null | 'ASC' | 'DESC'} orderBy
 * @return {IndexedColumn}
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
 * @param {WithClause} withClause
 * @param {_InsertOperator} operator
 * @param {[string, string] | string} name
 * @param {string | null} alias
 * @param {string[]} columns
 * @param {_InsertValuesClause | _InsertSelectClause | 'DEFAULT VALUES'} source
 * @return {InsertStmt}
 */
export const InsertStmt = (withClause, operator, name, alias, columns, source) => {
  return {
    type: 'InsertStmt',
    withClause,
    operator,
    name,
    alias,
    columns,
    source
  };
};

/**
 * @param {[TableOrSubquery, ..._JoinCompound[]]} joinees
 * @return {JoinClause}
 */
export const JoinClause = (joinees) => {
  return {
    type: 'JoinClause',
    joinees
  };
};

/**
 * @param {_JoinOnClause | _JoinUsingClause | null} constraint
 * @return {JoinConstraint}
 */
export const JoinConstraint = (constraint) => {
  return {
    type: 'JoinConstraint',
    constraint
  };
};

/**
 * @param {_LiteralValue} value
 * @return {LiteralValue}
 */
export const LiteralValue = (value) => {
  return {
    type: 'LiteralValue',
    value
  };
};

/**
 * @param {number} value
 * @return {NumericLiteral}
 */
export const NumericLiteral = (value) => {
  return {
    type: 'NumericLiteral',
    value
  };
};

/**
 * @param {IndexedColumn} indexedColumn
 * @param {'FIRST' | 'LAST' | null} nulls
 * @return {OrderingTerm}
 */
export const OrderingTerm = (indexedColumn, nulls) => {
  return {
    type: 'OrderingTerm',
    indexedColumn,
    nulls
  };
};

/**
 * @param {string | WindowDefn} over
 * @return {OverClause}
 */
export const OverClause = (over) => {
  return {
    type: 'OverClause',
    over
  };
};

/**
 * @param {[string, string] | string} name
 * @param {null | _PragmaSetter | _PragmaGetter} right
 * @return {PragmaStmt}
 */
export const PragmaStmt = (name, right) => {
  return {
    type: 'PragmaStmt',
    name,
    right
  };
};

/**
 * @param {number | string} value
 * @return {PragmaValue}
 */
export const PragmaValue = (value) => {
  return {
    type: 'PragmaValue',
    value
  };
};

/**
 * @param {[string, string] | string} name
 * @param {null | string} alias
 * @param {string | false | null} indexedBy
 * @return {QualifiedTableName}
 */
export const QualifiedTableName = (name, alias, indexedBy) => {
  return {
    type: 'QualifiedTableName',
    name,
    alias,
    indexedBy
  };
};

/**
 * @param {['ROLLBACK' | 'ABORT' | 'FAIL', string] | null} onError
 * @return {RaiseFunction}
 */
export const RaiseFunction = (onError) => {
  return {
    type: 'RaiseFunction',
    onError
  };
};

/**
 * @param {CteTableName} cteTableName
 * @param {string} initialSelect
 * @param {boolean} all
 * @param {string} recursiveSelect
 * @return {RecursiveCte}
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
 * @param {null | string | _ReindexNameClause} target
 * @return {ReindexStmt}
 */
export const ReindexStmt = (target) => {
  return {
    type: 'ReindexStmt',
    target
  };
};

/**
 * @param {string} savepointName
 * @return {ReleaseStmt}
 */
export const ReleaseStmt = (savepointName) => {
  return {
    type: 'ReleaseStmt',
    savepointName
  };
};

/**
 * @param {_ColumnAliasClause | string} source
 * @return {ResultColumn}
 */
export const ResultColumn = (source) => {
  return {
    type: 'ResultColumn',
    source
  };
};

/**
 * @param {string} savepointName
 * @return {RollbackStmt}
 */
export const RollbackStmt = (savepointName) => {
  return {
    type: 'RollbackStmt',
    savepointName
  };
};

/**
 * @param {string} savepointName
 * @return {SavepointStmt}
 */
export const SavepointStmt = (savepointName) => {
  return {
    type: 'SavepointStmt',
    savepointName
  };
};

/**
 * @param {WithClause | null} withClause
 * @param {[SelectCore, ..._SelectCompound[]]} select
 * @param {_LimiterClause | null} limiter
 * @return {SelectStmt}
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
 * @param {string} simpleFunc
 * @param {Expr[] | '*'} args
 * @return {SimpleFunctionInvocation}
 */
export const SimpleFunctionInvocation = (simpleFunc, args) => {
  return {
    type: 'SimpleFunctionInvocation',
    simpleFunc,
    args
  };
};

/**
 * @param {WithClause | null} withClause
 * @param {SelectCore} select
 * @param {_LimiterClause | null} limiter
 * @return {SimpleSelectStmt}
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
 * @param {boolean} explain
 * @param {_SqlStmt} statement
 * @return {SqlStmt}
 */
export const SqlStmt = (explain, statement) => {
  return {
    type: 'SqlStmt',
    explain,
    statement
  };
};

/**
 * @param {SqlStmt[]} statements
 * @return {SqlStmtList}
 */
export const SqlStmtList = (statements) => {
  return {
    type: 'SqlStmtList',
    statements
  };
};

/**
 * @param {null | string} name
 * @param {_TableConstraint} constraint
 * @return {TableConstraint}
 */
export const TableConstraint = (name, constraint) => {
  return {
    type: 'TableConstraint',
    name,
    constraint
  };
};

/**
 * @param {_TableOrSubquery} query
 * @return {TableOrSubquery}
 */
export const TableOrSubquery = (query) => {
  return {
    type: 'TableOrSubquery',
    query
  };
};

/**
 * @param {[string, ...string[]]} names
 * @param {[number?, number?]} args
 * @return {TypeName}
 */
export const TypeName = (names, args) => {
  return {
    type: 'TypeName',
    names,
    args
  };
};

/**
 * @param {WithClause} withClause
 * @param {null | 'ABORT' | 'FAIL' | 'IGNORE' | 'REPLACE' | 'ROLLBACK'} updateOr
 * @param {QualifiedTableName} name
 * @param {[_SetClause, ..._SetClause[]]} set
 * @param {_TableQueryClause} from
 * @param {Expr | null} where
 * @param {_LimiterClause | null} limiter
 * @return {UpdateStmt}
 */
export const UpdateStmt = (withClause, updateOr, name, set, from, where, limiter) => {
  return {
    type: 'UpdateStmt',
    withClause,
    updateOr,
    name,
    set,
    from,
    where,
    limiter
  };
};

/**
 * @param {null | _ColumnSelectorClause} onConflict
 * @param {null | _UpdateSetClause} action
 * @return {UpsertClause}
 */
export const UpsertClause = (onConflict, action) => {
  return {
    type: 'UpsertClause',
    onConflict,
    action
  };
};

/**
 * @param {null | string} schemaName
 * @param {null | string} filename
 * @return {VacuumStmt}
 */
export const VacuumStmt = (schemaName, filename) => {
  return {
    type: 'VacuumStmt',
    schemaName,
    filename
  };
};

/**
 * @param {null | string} baseWindowName
 * @param {Expr[]} partitionBy
 * @param {OrderingTerm[]} orderBy
 * @param {FrameSpec | null} frameSpec
 * @return {WindowDefn}
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
 * @param {string} windowFunc
 * @param {Expr[] | '*'} expr
 * @param {null | FilterClause} filter
 * @param {WindowDefn | string} over
 * @return {WindowFunctionInvocation}
 */
export const WindowFunctionInvocation = (windowFunc, expr, filter, over) => {
  return {
    type: 'WindowFunctionInvocation',
    windowFunc,
    expr,
    filter,
    over
  };
};

/**
 * @param {boolean} recursive
 * @param {[_CteSelectClause, ..._CteSelectClause[]]} expressions
 * @return {WithClause}
 */
export const WithClause = (recursive, expressions) => {
  return {
    type: 'WithClause',
    recursive,
    expressions
  };
};
