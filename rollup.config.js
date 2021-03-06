import typescript from "rollup-typescript";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import del from "rollup-plugin-delete";
import postcss from "rollup-plugin-postcss";
import builtins from "rollup-plugin-node-builtins";
import globals from "rollup-plugin-node-globals";

const outputFolder = "dist";

export default {
  input: "./index.tsx",
  output: {
    file: `${outputFolder}/index.js`,
    format: "system"
  },

  plugins: [
    del({ targets: `${outputFolder}/*` }),

    typescript(),
    resolve(),
    commonjs({
      namedExports: {
        // The commonjs plugin can't figure out the exports of some modules, so if rollup gives warnings like:
        // ⚠️   'render' is not exported by 'node_modules/react-dom/index.js'
        // Just add the mentioned file / export here
        "node_modules/react-dom/index.js": [
          "render",
          "findDOMNode",
          "unmountComponentAtNode",
          "createPortal",
          "unstable_renderSubtreeIntoContainer"
        ],
        "node_modules/react/index.js": [
          "Component",
          "Children",
          "cloneElement",
          "PropTypes",
          "createElement",
          "PureComponent",
          "isValidElement"
        ],
        "node_modules/graphql/language/index.js": [
          "print",
          "getLocation",
          "Kind",
          "createLexer",
          "TokenKind",
          "parse",
          "parseValue",
          "parseType",
          "Source",
          "visit",
          "visitInParallel",
          "visitWithTypeInfo",
          "getVisitFn",
          "BREAK",
          "DirectiveLocation",
          "isDefinitionNode",
          "isExecutableDefinitionNode",
          "isSelectionNode",
          "isValueNode",
          "isTypeNode",
          "isTypeSystemDefinitionNode",
          "isTypeDefinitionNode",
          "isTypeSystemExtensionNode",
          "isTypeExtensionNode"
        ],
        "node_modules/graphql/execution/index.js": [
          "execute",
          "defaultFieldResolver",
          "responsePathAsArray",
          "getDirectiveValues"
        ],
        "node_modules/graphql/error/index.js": [
          "syntaxError",
          "GraphQLError",
          "locatedError",
          "printError",
          "formatError"
        ],
        "node_modules/graphql/type/index.js": [
          "isSchema",
          "GraphQLSchema",
          "GraphQLScalarType",
          "GraphQLObjectType",
          "GraphQLInterfaceType",
          "GraphQLUnionType",
          "GraphQLEnumType",
          "GraphQLInputObjectType",
          "GraphQLList",
          "GraphQLNonNull",
          "GraphQLDirective",
          "TypeKind",
          "specifiedScalarTypes",
          "GraphQLInt",
          "GraphQLFloat",
          "GraphQLString",
          "GraphQLBoolean",
          "GraphQLID",
          "specifiedDirectives",
          "GraphQLIncludeDirective",
          "GraphQLSkipDirective",
          "GraphQLDeprecatedDirective",
          "DEFAULT_DEPRECATION_REASON",
          "SchemaMetaFieldDef",
          "TypeMetaFieldDef",
          "TypeNameMetaFieldDef",
          "validateSchema",
          "assertValidSchema",
          "isType",
          "isScalarType",
          "isObjectType",
          "isInterfaceType",
          "isUnionType",
          "isEnumType",
          "isInputObjectType",
          "isListType",
          "isNonNullType",
          "isInputType",
          "isOutputType",
          "isLeafType",
          "isCompositeType",
          "isAbstractType",
          "isWrappingType",
          "isNullableType",
          "isNamedType",
          "isDirective",
          "isRequiredArgument",
          "isRequiredInputField",
          "introspectionTypes",
          "isSpecifiedScalarType",
          "isIntrospectionType",
          "isSpecifiedDirective",
          "__Schema",
          "__Directive",
          "__DirectiveLocation",
          "__Type",
          "__Field",
          "__InputValue",
          "__EnumValue",
          "__TypeKind",
          "assertType",
          "assertScalarType",
          "assertObjectType",
          "assertInterfaceType",
          "assertUnionType",
          "assertEnumType",
          "assertInputObjectType",
          "assertListType",
          "assertNonNullType",
          "assertInputType",
          "assertOutputType",
          "assertLeafType",
          "assertCompositeType",
          "assertAbstractType",
          "assertWrappingType",
          "assertNullableType",
          "assertNamedType",
          "getNullableType",
          "getNamedType"
        ],
        "node_modules/graphql/subscription/index.js": [
          "subscribe",
          "createSourceEventStream"
        ],
        "node_modules/graphql/validation/index.js": [
          "validate",
          "ValidationContext",
          "specifiedRules",
          "FieldsOnCorrectTypeRule",
          "FragmentsOnCompositeTypesRule",
          "KnownArgumentNamesRule",
          "KnownDirectivesRule",
          "KnownFragmentNamesRule",
          "KnownTypeNamesRule",
          "LoneAnonymousOperationRule",
          "NoFragmentCyclesRule",
          "NoUndefinedVariablesRule",
          "NoUnusedFragmentsRule",
          "NoUnusedVariablesRule",
          "OverlappingFieldsCanBeMergedRule",
          "PossibleFragmentSpreadsRule",
          "ProvidedRequiredArgumentsRule",
          "ScalarLeafsRule",
          "SingleFieldSubscriptionsRule",
          "UniqueArgumentNamesRule",
          "UniqueDirectivesPerLocationRule",
          "UniqueFragmentNamesRule",
          "UniqueInputFieldNamesRule",
          "UniqueOperationNamesRule",
          "UniqueVariableNamesRule",
          "ValuesOfCorrectTypeRule",
          "VariablesAreInputTypesRule",
          "VariablesInAllowedPositionRule"
        ],
        "node_modules/graphql/utilities/index.js": [
          "getIntrospectionQuery",
          "introspectionQuery",
          "getOperationAST",
          "getOperationRootType",
          "introspectionFromSchema",
          "buildClientSchema",
          "buildASTSchema",
          "buildSchema",
          "getDescription",
          "extendSchema",
          "lexicographicSortSchema",
          "printSchema",
          "printType",
          "printIntrospectionSchema",
          "typeFromAST",
          "valueFromAST",
          "valueFromASTUntyped",
          "astFromValue",
          "TypeInfo",
          "coerceValue",
          "isValidJSValue",
          "isValidLiteralValue",
          "concatAST",
          "separateOperations",
          "isEqualType",
          "isTypeSubTypeOf",
          "doTypesOverlap",
          "assertValidName",
          "isValidNameError",
          "BreakingChangeType",
          "DangerousChangeType",
          "findBreakingChanges",
          "findDeprecatedUsages",
          "findDangerousChanges"
        ],
        "node_modules/prop-types/index.js": [
          "bool",
          "object",
          "func",
          "oneOfType",
          "string",
          "arrayOf",
          "number",
          "node"
        ],
        "node_modules/graphql-anywhere/lib/async.js": ["graphql"],
        "node_modules/react-dom/server.js": ["renderToString"]
      }
    }),

    globals(),
    builtins(),

    postcss({
      extensions: [".css", ".sss", ".pcss", ".less", ".scss"]
    })
  ]
};
