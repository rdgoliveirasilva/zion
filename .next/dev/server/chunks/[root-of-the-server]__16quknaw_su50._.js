module.exports = [
"[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("@prisma/client-2c3a283f134fdcb6", () => require("@prisma/client-2c3a283f134fdcb6"));

module.exports = mod;
}),
"[externals]/keyv [external] (keyv, cjs, [project]/node_modules/keyv)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("keyv-62fb9a63141d8891", () => require("keyv-62fb9a63141d8891"));

module.exports = mod;
}),
"[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
var mod = await __turbopack_context__.y("pg-587764f78a6c7a9c");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/node_modules/@prisma/adapter-pg/dist/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "PrismaPg",
    ()=>PrismaPgAdapterFactory
]);
// src/pg.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$debug$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/debug/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/driver-adapter-utils/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postgres$2d$array$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/postgres-array/index.js [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
// package.json
var name = "@prisma/adapter-pg";
// src/constants.ts
var FIRST_NORMAL_OBJECT_ID = 16384;
;
;
;
var { types } = __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["default"];
var { builtins: ScalarColumnType, getTypeParser } = types;
var AdditionalScalarColumnType = {
    NAME: 19
};
var ArrayColumnType = {
    BIT_ARRAY: 1561,
    BOOL_ARRAY: 1e3,
    BYTEA_ARRAY: 1001,
    BPCHAR_ARRAY: 1014,
    CHAR_ARRAY: 1002,
    CIDR_ARRAY: 651,
    DATE_ARRAY: 1182,
    FLOAT4_ARRAY: 1021,
    FLOAT8_ARRAY: 1022,
    INET_ARRAY: 1041,
    INT2_ARRAY: 1005,
    INT4_ARRAY: 1007,
    INT8_ARRAY: 1016,
    JSONB_ARRAY: 3807,
    JSON_ARRAY: 199,
    MONEY_ARRAY: 791,
    NUMERIC_ARRAY: 1231,
    OID_ARRAY: 1028,
    TEXT_ARRAY: 1009,
    TIMESTAMP_ARRAY: 1115,
    TIMESTAMPTZ_ARRAY: 1185,
    TIME_ARRAY: 1183,
    UUID_ARRAY: 2951,
    VARBIT_ARRAY: 1563,
    VARCHAR_ARRAY: 1015,
    XML_ARRAY: 143
};
var UnsupportedNativeDataType = class _UnsupportedNativeDataType extends Error {
    // map of type codes to type names
    static typeNames = {
        16: "bool",
        17: "bytea",
        18: "char",
        19: "name",
        20: "int8",
        21: "int2",
        22: "int2vector",
        23: "int4",
        24: "regproc",
        25: "text",
        26: "oid",
        27: "tid",
        28: "xid",
        29: "cid",
        30: "oidvector",
        32: "pg_ddl_command",
        71: "pg_type",
        75: "pg_attribute",
        81: "pg_proc",
        83: "pg_class",
        114: "json",
        142: "xml",
        194: "pg_node_tree",
        269: "table_am_handler",
        325: "index_am_handler",
        600: "point",
        601: "lseg",
        602: "path",
        603: "box",
        604: "polygon",
        628: "line",
        650: "cidr",
        700: "float4",
        701: "float8",
        705: "unknown",
        718: "circle",
        774: "macaddr8",
        790: "money",
        829: "macaddr",
        869: "inet",
        1033: "aclitem",
        1042: "bpchar",
        1043: "varchar",
        1082: "date",
        1083: "time",
        1114: "timestamp",
        1184: "timestamptz",
        1186: "interval",
        1266: "timetz",
        1560: "bit",
        1562: "varbit",
        1700: "numeric",
        1790: "refcursor",
        2202: "regprocedure",
        2203: "regoper",
        2204: "regoperator",
        2205: "regclass",
        2206: "regtype",
        2249: "record",
        2275: "cstring",
        2276: "any",
        2277: "anyarray",
        2278: "void",
        2279: "trigger",
        2280: "language_handler",
        2281: "internal",
        2283: "anyelement",
        2287: "_record",
        2776: "anynonarray",
        2950: "uuid",
        2970: "txid_snapshot",
        3115: "fdw_handler",
        3220: "pg_lsn",
        3310: "tsm_handler",
        3361: "pg_ndistinct",
        3402: "pg_dependencies",
        3500: "anyenum",
        3614: "tsvector",
        3615: "tsquery",
        3642: "gtsvector",
        3734: "regconfig",
        3769: "regdictionary",
        3802: "jsonb",
        3831: "anyrange",
        3838: "event_trigger",
        3904: "int4range",
        3906: "numrange",
        3908: "tsrange",
        3910: "tstzrange",
        3912: "daterange",
        3926: "int8range",
        4072: "jsonpath",
        4089: "regnamespace",
        4096: "regrole",
        4191: "regcollation",
        4451: "int4multirange",
        4532: "nummultirange",
        4533: "tsmultirange",
        4534: "tstzmultirange",
        4535: "datemultirange",
        4536: "int8multirange",
        4537: "anymultirange",
        4538: "anycompatiblemultirange",
        4600: "pg_brin_bloom_summary",
        4601: "pg_brin_minmax_multi_summary",
        5017: "pg_mcv_list",
        5038: "pg_snapshot",
        5069: "xid8",
        5077: "anycompatible",
        5078: "anycompatiblearray",
        5079: "anycompatiblenonarray",
        5080: "anycompatiblerange"
    };
    type;
    constructor(code){
        super();
        this.type = _UnsupportedNativeDataType.typeNames[code] || "Unknown";
        this.message = `Unsupported column type ${this.type}`;
    }
};
function fieldToColumnType(fieldTypeId) {
    switch(fieldTypeId){
        case ScalarColumnType.INT2:
        case ScalarColumnType.INT4:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Int32;
        case ScalarColumnType.INT8:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Int64;
        case ScalarColumnType.FLOAT4:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Float;
        case ScalarColumnType.FLOAT8:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Double;
        case ScalarColumnType.BOOL:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Boolean;
        case ScalarColumnType.DATE:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Date;
        case ScalarColumnType.TIME:
        case ScalarColumnType.TIMETZ:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Time;
        case ScalarColumnType.TIMESTAMP:
        case ScalarColumnType.TIMESTAMPTZ:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].DateTime;
        case ScalarColumnType.NUMERIC:
        case ScalarColumnType.MONEY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Numeric;
        case ScalarColumnType.JSON:
        case ScalarColumnType.JSONB:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Json;
        case ScalarColumnType.UUID:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Uuid;
        case ScalarColumnType.OID:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Int64;
        case ScalarColumnType.BPCHAR:
        case ScalarColumnType.TEXT:
        case ScalarColumnType.VARCHAR:
        case ScalarColumnType.BIT:
        case ScalarColumnType.VARBIT:
        case ScalarColumnType.INET:
        case ScalarColumnType.CIDR:
        case ScalarColumnType.XML:
        case AdditionalScalarColumnType.NAME:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Text;
        case ScalarColumnType.BYTEA:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Bytes;
        case ArrayColumnType.INT2_ARRAY:
        case ArrayColumnType.INT4_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Int32Array;
        case ArrayColumnType.FLOAT4_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].FloatArray;
        case ArrayColumnType.FLOAT8_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].DoubleArray;
        case ArrayColumnType.NUMERIC_ARRAY:
        case ArrayColumnType.MONEY_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].NumericArray;
        case ArrayColumnType.BOOL_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].BooleanArray;
        case ArrayColumnType.CHAR_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].CharacterArray;
        case ArrayColumnType.BPCHAR_ARRAY:
        case ArrayColumnType.TEXT_ARRAY:
        case ArrayColumnType.VARCHAR_ARRAY:
        case ArrayColumnType.VARBIT_ARRAY:
        case ArrayColumnType.BIT_ARRAY:
        case ArrayColumnType.INET_ARRAY:
        case ArrayColumnType.CIDR_ARRAY:
        case ArrayColumnType.XML_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].TextArray;
        case ArrayColumnType.DATE_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].DateArray;
        case ArrayColumnType.TIME_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].TimeArray;
        case ArrayColumnType.TIMESTAMP_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].DateTimeArray;
        case ArrayColumnType.TIMESTAMPTZ_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].DateTimeArray;
        case ArrayColumnType.JSON_ARRAY:
        case ArrayColumnType.JSONB_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].JsonArray;
        case ArrayColumnType.BYTEA_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].BytesArray;
        case ArrayColumnType.UUID_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].UuidArray;
        case ArrayColumnType.INT8_ARRAY:
        case ArrayColumnType.OID_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Int64Array;
        default:
            if (fieldTypeId >= FIRST_NORMAL_OBJECT_ID) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Text;
            }
            throw new UnsupportedNativeDataType(fieldTypeId);
    }
}
function normalize_array(element_normalizer) {
    return (str)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postgres$2d$array$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parse"])(str, element_normalizer);
}
function normalize_numeric(numeric) {
    return numeric;
}
function normalize_date(date) {
    return date;
}
function normalize_timestamp(time) {
    return `${time.replace(" ", "T")}+00:00`;
}
function normalize_timestamptz(time) {
    return time.replace(" ", "T").replace(/[+-]\d{2}(:\d{2})?$/, "+00:00");
}
function normalize_time(time) {
    return time;
}
function normalize_timez(time) {
    return time.replace(/[+-]\d{2}(:\d{2})?$/, "");
}
function normalize_money(money) {
    return money.slice(1);
}
function normalize_xml(xml) {
    return xml;
}
function toJson(json) {
    return json;
}
var parsePgBytes = getTypeParser(ScalarColumnType.BYTEA);
var normalizeByteaArray = getTypeParser(ArrayColumnType.BYTEA_ARRAY);
function convertBytes(serializedBytes) {
    return parsePgBytes(serializedBytes);
}
function normalizeBit(bit) {
    return bit;
}
var customParsers = {
    [ScalarColumnType.NUMERIC]: normalize_numeric,
    [ArrayColumnType.NUMERIC_ARRAY]: normalize_array(normalize_numeric),
    [ScalarColumnType.TIME]: normalize_time,
    [ArrayColumnType.TIME_ARRAY]: normalize_array(normalize_time),
    [ScalarColumnType.TIMETZ]: normalize_timez,
    [ScalarColumnType.DATE]: normalize_date,
    [ArrayColumnType.DATE_ARRAY]: normalize_array(normalize_date),
    [ScalarColumnType.TIMESTAMP]: normalize_timestamp,
    [ArrayColumnType.TIMESTAMP_ARRAY]: normalize_array(normalize_timestamp),
    [ScalarColumnType.TIMESTAMPTZ]: normalize_timestamptz,
    [ArrayColumnType.TIMESTAMPTZ_ARRAY]: normalize_array(normalize_timestamptz),
    [ScalarColumnType.MONEY]: normalize_money,
    [ArrayColumnType.MONEY_ARRAY]: normalize_array(normalize_money),
    [ScalarColumnType.JSON]: toJson,
    [ArrayColumnType.JSON_ARRAY]: normalize_array(toJson),
    [ScalarColumnType.JSONB]: toJson,
    [ArrayColumnType.JSONB_ARRAY]: normalize_array(toJson),
    [ScalarColumnType.BYTEA]: convertBytes,
    [ArrayColumnType.BYTEA_ARRAY]: normalizeByteaArray,
    [ArrayColumnType.BIT_ARRAY]: normalize_array(normalizeBit),
    [ArrayColumnType.VARBIT_ARRAY]: normalize_array(normalizeBit),
    [ArrayColumnType.XML_ARRAY]: normalize_array(normalize_xml)
};
function mapArg(arg, argType) {
    if (arg === null) {
        return null;
    }
    if (Array.isArray(arg) && argType.arity === "list") {
        return arg.map((value)=>mapArg(value, argType));
    }
    if (typeof arg === "string" && argType.scalarType === "datetime") {
        arg = new Date(arg);
    }
    if (arg instanceof Date) {
        switch(argType.dbType){
            case "TIME":
            case "TIMETZ":
                return formatTime(arg);
            case "DATE":
                return formatDate(arg);
            default:
                return formatDateTime(arg);
        }
    }
    if (typeof arg === "string" && argType.scalarType === "bytes") {
        return Buffer.from(arg, "base64");
    }
    if (ArrayBuffer.isView(arg)) {
        return new Uint8Array(arg.buffer, arg.byteOffset, arg.byteLength);
    }
    return arg;
}
function formatDateTime(date) {
    const pad = (n, z = 2)=>String(n).padStart(z, "0");
    const ms = date.getUTCMilliseconds();
    return pad(date.getUTCFullYear(), 4) + "-" + pad(date.getUTCMonth() + 1) + "-" + pad(date.getUTCDate()) + " " + pad(date.getUTCHours()) + ":" + pad(date.getUTCMinutes()) + ":" + pad(date.getUTCSeconds()) + (ms ? "." + String(ms).padStart(3, "0") : "");
}
function formatDate(date) {
    const pad = (n, z = 2)=>String(n).padStart(z, "0");
    return pad(date.getUTCFullYear(), 4) + "-" + pad(date.getUTCMonth() + 1) + "-" + pad(date.getUTCDate());
}
function formatTime(date) {
    const pad = (n, z = 2)=>String(n).padStart(z, "0");
    const ms = date.getUTCMilliseconds();
    return pad(date.getUTCHours()) + ":" + pad(date.getUTCMinutes()) + ":" + pad(date.getUTCSeconds()) + (ms ? "." + String(ms).padStart(3, "0") : "");
}
// src/errors.ts
var TLS_ERRORS = /* @__PURE__ */ new Set([
    "UNABLE_TO_GET_ISSUER_CERT",
    "UNABLE_TO_GET_CRL",
    "UNABLE_TO_DECRYPT_CERT_SIGNATURE",
    "UNABLE_TO_DECRYPT_CRL_SIGNATURE",
    "UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY",
    "CERT_SIGNATURE_FAILURE",
    "CRL_SIGNATURE_FAILURE",
    "CERT_NOT_YET_VALID",
    "CERT_HAS_EXPIRED",
    "CRL_NOT_YET_VALID",
    "CRL_HAS_EXPIRED",
    "ERROR_IN_CERT_NOT_BEFORE_FIELD",
    "ERROR_IN_CERT_NOT_AFTER_FIELD",
    "ERROR_IN_CRL_LAST_UPDATE_FIELD",
    "ERROR_IN_CRL_NEXT_UPDATE_FIELD",
    "DEPTH_ZERO_SELF_SIGNED_CERT",
    "SELF_SIGNED_CERT_IN_CHAIN",
    "UNABLE_TO_GET_ISSUER_CERT_LOCALLY",
    "UNABLE_TO_VERIFY_LEAF_SIGNATURE",
    "CERT_CHAIN_TOO_LONG",
    "CERT_REVOKED",
    "INVALID_CA",
    "INVALID_PURPOSE",
    "CERT_UNTRUSTED",
    "CERT_REJECTED",
    "HOSTNAME_MISMATCH",
    "ERR_TLS_CERT_ALTNAME_FORMAT",
    "ERR_TLS_CERT_ALTNAME_INVALID"
]);
var SOCKET_ERRORS = /* @__PURE__ */ new Set([
    "ENOTFOUND",
    "ECONNREFUSED",
    "ECONNRESET",
    "ETIMEDOUT"
]);
function convertDriverError(error) {
    if (isSocketError(error)) {
        return mapSocketError(error);
    }
    if (isTlsError(error)) {
        return {
            kind: "TlsConnectionError",
            reason: error.message
        };
    }
    if (isDriverError(error)) {
        return {
            originalCode: error.code,
            originalMessage: error.message,
            ...mapDriverError(error)
        };
    }
    throw error;
}
function mapDriverError(error) {
    switch(error.code){
        case "22001":
            return {
                kind: "LengthMismatch",
                column: error.column
            };
        case "22003":
            return {
                kind: "ValueOutOfRange",
                cause: error.message
            };
        case "22P02":
            return {
                kind: "InvalidInputValue",
                message: error.message
            };
        case "23505":
            {
                const fields = error.detail?.match(/Key \(([^)]+)\)/)?.at(1)?.split(", ");
                let constraint;
                if (error.constraint) {
                    constraint = {
                        index: error.constraint
                    };
                } else if (fields !== void 0) {
                    constraint = {
                        fields
                    };
                }
                let table = error.table;
                if (table === void 0 && fields !== void 0 && fields.length > 0) {
                    const suffix = `_${fields.join("_")}_key`;
                    if (error.constraint?.endsWith(suffix)) {
                        table = error.constraint.slice(0, -suffix.length);
                    }
                }
                return {
                    kind: "UniqueConstraintViolation",
                    constraint,
                    table
                };
            }
        case "23502":
            {
                const fields = error.detail?.match(/Key \(([^)]+)\)/)?.at(1)?.split(", ");
                return {
                    kind: "NullConstraintViolation",
                    constraint: fields !== void 0 ? {
                        fields
                    } : void 0
                };
            }
        case "23503":
            {
                let constraint;
                if (error.column) {
                    constraint = {
                        fields: [
                            error.column
                        ]
                    };
                } else if (error.constraint) {
                    constraint = {
                        index: error.constraint
                    };
                }
                return {
                    kind: "ForeignKeyConstraintViolation",
                    constraint
                };
            }
        case "23001":
            {
                let constraint;
                if (error.column) {
                    constraint = {
                        fields: [
                            error.column
                        ]
                    };
                } else if (error.constraint) {
                    constraint = {
                        index: error.constraint
                    };
                }
                return {
                    kind: "RestrictViolation",
                    constraint
                };
            }
        case "3D000":
            return {
                kind: "DatabaseDoesNotExist",
                db: error.message.split(" ").at(1)?.split('"').at(1)
            };
        case "28000":
            return {
                kind: "DatabaseAccessDenied",
                db: error.message.split(",").find((s)=>s.startsWith(" database"))?.split('"').at(1)
            };
        case "28P01":
            return {
                kind: "AuthenticationFailed",
                user: error.message.split(" ").pop()?.split('"').at(1)
            };
        case "40001":
        case "40P01":
            return {
                kind: "TransactionWriteConflict"
            };
        case "42P01":
            return {
                kind: "TableDoesNotExist",
                table: error.message.split(" ").at(1)?.split('"').at(1)
            };
        case "42703":
            {
                const rawColumn = error.message.match(/^column (.+) does not exist$/)?.at(1);
                return {
                    kind: "ColumnNotFound",
                    column: rawColumn?.replace(/"((?:""|[^"])*)"/g, (_, id)=>id.replaceAll('""', '"'))
                };
            }
        case "42P04":
            return {
                kind: "DatabaseAlreadyExists",
                db: error.message.split(" ").at(1)?.split('"').at(1)
            };
        case "53300":
            return {
                kind: "TooManyConnections",
                cause: error.message
            };
        default:
            return {
                kind: "postgres",
                code: error.code ?? "N/A",
                severity: error.severity ?? "N/A",
                message: error.message,
                detail: error.detail,
                column: error.column,
                hint: error.hint
            };
    }
}
function isDriverError(error) {
    return typeof error.code === "string" && typeof error.message === "string" && typeof error.severity === "string" && (typeof error.detail === "string" || error.detail === void 0) && (typeof error.column === "string" || error.column === void 0) && (typeof error.hint === "string" || error.hint === void 0);
}
function mapSocketError(error) {
    switch(error.code){
        case "ENOTFOUND":
        case "ECONNREFUSED":
            return {
                kind: "DatabaseNotReachable",
                host: error.address ?? error.hostname,
                port: error.port
            };
        case "ECONNRESET":
            return {
                kind: "ConnectionClosed"
            };
        case "ETIMEDOUT":
            return {
                kind: "SocketTimeout"
            };
    }
}
function isSocketError(error) {
    return typeof error.code === "string" && typeof error.syscall === "string" && typeof error.errno === "number" && SOCKET_ERRORS.has(error.code);
}
function isTlsError(error) {
    if (typeof error.code === "string") {
        return TLS_ERRORS.has(error.code);
    }
    switch(error.message){
        case "The server does not support SSL connections":
        case "There was an error establishing an SSL connection":
            return true;
    }
    return false;
}
// src/pg.ts
var types2 = __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["default"].types;
var debug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$debug$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Debug"])("prisma:driver-adapter:pg");
var PgQueryable = class {
    constructor(client, pgOptions){
        this.client = client;
        this.pgOptions = pgOptions;
    }
    provider = "postgres";
    adapterName = name;
    /**
   * Execute a query given as SQL, interpolating the given parameters.
   */ async queryRaw(query) {
        const tag = "[js::query_raw]";
        debug(`${tag} %O`, query);
        const { fields, rows } = await this.performIO(query);
        const columnNames = fields.map((field)=>field.name);
        let columnTypes = [];
        try {
            columnTypes = fields.map((field)=>fieldToColumnType(field.dataTypeID));
        } catch (e) {
            if (e instanceof UnsupportedNativeDataType) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DriverAdapterError"]({
                    kind: "UnsupportedNativeDataType",
                    type: e.type
                });
            }
            throw e;
        }
        const udtParser = this.pgOptions?.userDefinedTypeParser;
        if (udtParser) {
            for(let i = 0; i < fields.length; i++){
                const field = fields[i];
                if (field.dataTypeID >= FIRST_NORMAL_OBJECT_ID && !Object.hasOwn(customParsers, field.dataTypeID)) {
                    for(let j = 0; j < rows.length; j++){
                        rows[j][i] = await udtParser(field.dataTypeID, rows[j][i], this);
                    }
                }
            }
        }
        return {
            columnNames,
            columnTypes,
            rows
        };
    }
    /**
   * Execute a query given as SQL, interpolating the given parameters and
   * returning the number of affected rows.
   * Note: Queryable expects a u64, but napi.rs only supports u32.
   */ async executeRaw(query) {
        const tag = "[js::execute_raw]";
        debug(`${tag} %O`, query);
        return (await this.performIO(query)).rowCount ?? 0;
    }
    /**
   * Run a query against the database, returning the result set.
   * Should the query fail due to a connection error, the connection is
   * marked as unhealthy.
   */ async performIO(query) {
        const { sql, args } = query;
        const values = args.map((arg, i)=>mapArg(arg, query.argTypes[i]));
        try {
            const result = await this.client.query({
                name: this.pgOptions?.statementNameGenerator?.(query),
                text: sql,
                values,
                rowMode: "array",
                types: {
                    getTypeParser: (oid, format)=>{
                        if (format === "text" && customParsers[oid]) {
                            return customParsers[oid];
                        }
                        return types2.getTypeParser(oid, format);
                    }
                }
            });
            return result;
        } catch (e) {
            this.onError(e);
        }
    }
    onError(error) {
        debug("Error in performIO: %O", error);
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DriverAdapterError"](convertDriverError(error));
    }
};
var PgTransaction = class extends PgQueryable {
    constructor(client, options, pgOptions, cleanup){
        super(client, pgOptions);
        this.options = options;
        this.pgOptions = pgOptions;
        this.cleanup = cleanup;
    }
    async commit() {
        debug(`[js::commit]`);
        this.cleanup?.();
        this.client.release();
    }
    async rollback() {
        debug(`[js::rollback]`);
        this.cleanup?.();
        this.client.release();
    }
    async createSavepoint(name2) {
        await this.executeRaw({
            sql: `SAVEPOINT ${name2}`,
            args: [],
            argTypes: []
        });
    }
    async rollbackToSavepoint(name2) {
        await this.executeRaw({
            sql: `ROLLBACK TO SAVEPOINT ${name2}`,
            args: [],
            argTypes: []
        });
    }
    async releaseSavepoint(name2) {
        await this.executeRaw({
            sql: `RELEASE SAVEPOINT ${name2}`,
            args: [],
            argTypes: []
        });
    }
};
var PrismaPgAdapter = class extends PgQueryable {
    constructor(client, pgOptions, release){
        super(client);
        this.pgOptions = pgOptions;
        this.release = release;
    }
    async startTransaction(isolationLevel) {
        const options = {
            usePhantomQuery: false
        };
        const tag = "[js::startTransaction]";
        debug("%s options: %O", tag, options);
        const conn = await this.client.connect().catch((error)=>this.onError(error));
        const onError = (err)=>{
            debug(`Error from pool connection: ${err.message} %O`, err);
            this.pgOptions?.onConnectionError?.(err);
        };
        conn.on("error", onError);
        const cleanup = ()=>{
            conn.removeListener("error", onError);
        };
        try {
            const tx = new PgTransaction(conn, options, this.pgOptions, cleanup);
            await tx.executeRaw({
                sql: "BEGIN",
                args: [],
                argTypes: []
            });
            if (isolationLevel) {
                await tx.executeRaw({
                    sql: `SET TRANSACTION ISOLATION LEVEL ${isolationLevel}`,
                    args: [],
                    argTypes: []
                });
            }
            return tx;
        } catch (error) {
            cleanup();
            conn.release(error);
            this.onError(error);
        }
    }
    async executeScript(script) {
        const statements = script.split(";").map((stmt)=>stmt.trim()).filter((stmt)=>stmt.length > 0);
        for (const stmt of statements){
            try {
                await this.client.query(stmt);
            } catch (error) {
                this.onError(error);
            }
        }
    }
    getConnectionInfo() {
        return {
            schemaName: this.pgOptions?.schema,
            supportsRelationJoins: true
        };
    }
    async dispose() {
        return this.release?.();
    }
    underlyingDriver() {
        return this.client;
    }
};
var PrismaPgAdapterFactory = class {
    constructor(poolOrConfig, options){
        this.options = options;
        if (poolOrConfig instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["default"].Pool) {
            this.externalPool = poolOrConfig;
            this.config = poolOrConfig.options;
        } else if (typeof poolOrConfig === "string") {
            this.externalPool = null;
            this.config = {
                connectionString: poolOrConfig
            };
        } else {
            this.externalPool = null;
            this.config = poolOrConfig;
        }
    }
    provider = "postgres";
    adapterName = name;
    config;
    externalPool;
    async connect() {
        const client = this.externalPool ?? new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["default"].Pool(this.config);
        const onIdleClientError = (err)=>{
            debug(`Error from idle pool client: ${err.message} %O`, err);
            this.options?.onPoolError?.(err);
        };
        client.on("error", onIdleClientError);
        return new PrismaPgAdapter(client, this.options, async ()=>{
            if (this.externalPool) {
                if (this.options?.disposeExternalPool) {
                    await this.externalPool.end();
                    this.externalPool = null;
                } else {
                    this.externalPool.removeListener("error", onIdleClientError);
                }
            } else {
                await client.end();
            }
        });
    }
    async connectToShadowDb() {
        const conn = await this.connect();
        const database = `prisma_migrate_shadow_db_${globalThis.crypto.randomUUID()}`;
        await conn.executeScript(`CREATE DATABASE "${database}"`);
        const client = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["default"].Pool({
            ...this.config,
            database
        });
        return new PrismaPgAdapter(client, void 0, async ()=>{
            await conn.executeScript(`DROP DATABASE "${database}"`);
            await client.end();
        });
    }
};
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/@prisma/debug/dist/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Debug",
    ()=>Debug,
    "clearLogs",
    ()=>clearLogs,
    "default",
    ()=>index_default,
    "getLogs",
    ()=>getLogs
]);
var __defProp = Object.defineProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
// ../../node_modules/.pnpm/kleur@4.1.5/node_modules/kleur/colors.mjs
var colors_exports = {};
__export(colors_exports, {
    $: ()=>$,
    bgBlack: ()=>bgBlack,
    bgBlue: ()=>bgBlue,
    bgCyan: ()=>bgCyan,
    bgGreen: ()=>bgGreen,
    bgMagenta: ()=>bgMagenta,
    bgRed: ()=>bgRed,
    bgWhite: ()=>bgWhite,
    bgYellow: ()=>bgYellow,
    black: ()=>black,
    blue: ()=>blue,
    bold: ()=>bold,
    cyan: ()=>cyan,
    dim: ()=>dim,
    gray: ()=>gray,
    green: ()=>green,
    grey: ()=>grey,
    hidden: ()=>hidden,
    inverse: ()=>inverse,
    italic: ()=>italic,
    magenta: ()=>magenta,
    red: ()=>red,
    reset: ()=>reset,
    strikethrough: ()=>strikethrough,
    underline: ()=>underline,
    white: ()=>white,
    yellow: ()=>yellow
});
var FORCE_COLOR;
var NODE_DISABLE_COLORS;
var NO_COLOR;
var TERM;
var isTTY = true;
if (typeof process !== "undefined") {
    ({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env || {});
    isTTY = process.stdout && process.stdout.isTTY;
}
var $ = {
    enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== "dumb" && (FORCE_COLOR != null && FORCE_COLOR !== "0" || isTTY)
};
function init(x, y) {
    let rgx = new RegExp(`\\x1b\\[${y}m`, "g");
    let open = `\x1B[${x}m`, close = `\x1B[${y}m`;
    return function(txt) {
        if (!$.enabled || txt == null) return txt;
        return open + (!!~("" + txt).indexOf(close) ? txt.replace(rgx, close + open) : txt) + close;
    };
}
var reset = init(0, 0);
var bold = init(1, 22);
var dim = init(2, 22);
var italic = init(3, 23);
var underline = init(4, 24);
var inverse = init(7, 27);
var hidden = init(8, 28);
var strikethrough = init(9, 29);
var black = init(30, 39);
var red = init(31, 39);
var green = init(32, 39);
var yellow = init(33, 39);
var blue = init(34, 39);
var magenta = init(35, 39);
var cyan = init(36, 39);
var white = init(37, 39);
var gray = init(90, 39);
var grey = init(90, 39);
var bgBlack = init(40, 49);
var bgRed = init(41, 49);
var bgGreen = init(42, 49);
var bgYellow = init(43, 49);
var bgBlue = init(44, 49);
var bgMagenta = init(45, 49);
var bgCyan = init(46, 49);
var bgWhite = init(47, 49);
// src/index.ts
var MAX_ARGS_HISTORY = 100;
var COLORS = [
    "green",
    "yellow",
    "blue",
    "magenta",
    "cyan",
    "red"
];
var argsHistory = [];
var lastTimestamp = Date.now();
var lastColor = 0;
var processEnv = typeof process !== "undefined" ? process.env : {};
globalThis.DEBUG ??= processEnv.DEBUG ?? "";
globalThis.DEBUG_COLORS ??= processEnv.DEBUG_COLORS ? processEnv.DEBUG_COLORS === "true" : true;
var topProps = {
    enable (namespace) {
        if (typeof namespace === "string") {
            globalThis.DEBUG = namespace;
        }
    },
    disable () {
        const prev = globalThis.DEBUG;
        globalThis.DEBUG = "";
        return prev;
    },
    // this is the core logic to check if logging should happen or not
    enabled (namespace) {
        const listenedNamespaces = globalThis.DEBUG.split(",").map((s)=>{
            return s.replace(/[.+?^${}()|[\]\\]/g, "\\$&");
        });
        const isListened = listenedNamespaces.some((listenedNamespace)=>{
            if (listenedNamespace === "" || listenedNamespace[0] === "-") return false;
            return namespace.match(RegExp(listenedNamespace.split("*").join(".*") + "$"));
        });
        const isExcluded = listenedNamespaces.some((listenedNamespace)=>{
            if (listenedNamespace === "" || listenedNamespace[0] !== "-") return false;
            return namespace.match(RegExp(listenedNamespace.slice(1).split("*").join(".*") + "$"));
        });
        return isListened && !isExcluded;
    },
    log: (...args)=>{
        const [namespace, format, ...rest] = args;
        const logWithFormatting = console.warn ?? console.log;
        logWithFormatting(`${namespace} ${format}`, ...rest);
    },
    formatters: {}
};
function debugCreate(namespace) {
    const instanceProps = {
        color: COLORS[lastColor++ % COLORS.length],
        enabled: topProps.enabled(namespace),
        namespace,
        log: topProps.log,
        extend: ()=>{}
    };
    const debugCall = (...args)=>{
        const { enabled, namespace: namespace2, color, log } = instanceProps;
        if (args.length !== 0) {
            argsHistory.push([
                namespace2,
                ...args
            ]);
        }
        if (argsHistory.length > MAX_ARGS_HISTORY) {
            argsHistory.shift();
        }
        if (topProps.enabled(namespace2) || enabled) {
            const stringArgs = args.map((arg)=>{
                if (typeof arg === "string") {
                    return arg;
                }
                return safeStringify(arg);
            });
            const ms = `+${Date.now() - lastTimestamp}ms`;
            lastTimestamp = Date.now();
            if (globalThis.DEBUG_COLORS) {
                log(colors_exports[color](bold(namespace2)), ...stringArgs, colors_exports[color](ms));
            } else {
                log(namespace2, ...stringArgs, ms);
            }
        }
    };
    return new Proxy(debugCall, {
        get: (_, prop)=>instanceProps[prop],
        set: (_, prop, value)=>instanceProps[prop] = value
    });
}
var Debug = new Proxy(debugCreate, {
    get: (_, prop)=>topProps[prop],
    set: (_, prop, value)=>topProps[prop] = value
});
function safeStringify(value, indent = 2) {
    const cache = /* @__PURE__ */ new Set();
    return JSON.stringify(value, (key, value2)=>{
        if (typeof value2 === "object" && value2 !== null) {
            if (cache.has(value2)) {
                return `[Circular *]`;
            }
            cache.add(value2);
        } else if (typeof value2 === "bigint") {
            return value2.toString();
        }
        return value2;
    }, indent);
}
function getLogs(numChars = 7500) {
    const logs = argsHistory.map(([namespace, ...args])=>{
        return `${namespace} ${args.map((arg)=>{
            if (typeof arg === "string") {
                return arg;
            } else {
                return JSON.stringify(arg);
            }
        }).join(" ")}`;
    }).join("\n");
    if (logs.length < numChars) {
        return logs;
    }
    return logs.slice(-numChars);
}
function clearLogs() {
    argsHistory.length = 0;
}
var index_default = Debug;
;
}),
"[project]/node_modules/@prisma/driver-adapter-utils/dist/index.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ColumnTypeEnum",
    ()=>ColumnTypeEnum,
    "DriverAdapterError",
    ()=>DriverAdapterError,
    "bindAdapter",
    ()=>bindAdapter,
    "bindMigrationAwareSqlAdapterFactory",
    ()=>bindMigrationAwareSqlAdapterFactory,
    "bindSqlAdapterFactory",
    ()=>bindSqlAdapterFactory,
    "err",
    ()=>err,
    "isDriverAdapterError",
    ()=>isDriverAdapterError,
    "mockAdapter",
    ()=>mockAdapter,
    "mockAdapterErrors",
    ()=>mockAdapterErrors,
    "mockAdapterFactory",
    ()=>mockAdapterFactory,
    "mockMigrationAwareAdapterFactory",
    ()=>mockMigrationAwareAdapterFactory,
    "ok",
    ()=>ok
]);
// src/debug.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$debug$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/debug/dist/index.mjs [app-route] (ecmascript)");
;
// src/error.ts
var DriverAdapterError = class extends Error {
    name = "DriverAdapterError";
    cause;
    constructor(payload){
        super(typeof payload["message"] === "string" ? payload["message"] : payload.kind);
        this.cause = payload;
    }
};
function isDriverAdapterError(error) {
    return error["name"] === "DriverAdapterError" && typeof error["cause"] === "object";
}
// src/result.ts
function ok(value) {
    return {
        ok: true,
        value,
        map (fn) {
            return ok(fn(value));
        },
        flatMap (fn) {
            return fn(value);
        }
    };
}
function err(error) {
    return {
        ok: false,
        error,
        map () {
            return err(error);
        },
        flatMap () {
            return err(error);
        }
    };
}
// src/binder.ts
var debug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$debug$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Debug"])("driver-adapter-utils");
var ErrorRegistryInternal = class {
    registeredErrors = [];
    consumeError(id) {
        return this.registeredErrors[id];
    }
    registerNewError(error) {
        let i = 0;
        while(this.registeredErrors[i] !== void 0){
            i++;
        }
        this.registeredErrors[i] = {
            error
        };
        return i;
    }
};
function copySymbolsFromSource(source, target) {
    const symbols = Object.getOwnPropertySymbols(source);
    const symbolObject = Object.fromEntries(symbols.map((symbol)=>[
            symbol,
            true
        ]));
    Object.assign(target, symbolObject);
}
var bindMigrationAwareSqlAdapterFactory = (adapterFactory)=>{
    const errorRegistry = new ErrorRegistryInternal();
    const boundFactory = {
        adapterName: adapterFactory.adapterName,
        provider: adapterFactory.provider,
        errorRegistry,
        connect: async (...args)=>{
            const ctx = await wrapAsync(errorRegistry, adapterFactory.connect.bind(adapterFactory))(...args);
            return ctx.map((ctx2)=>bindAdapter(ctx2, errorRegistry));
        },
        connectToShadowDb: async (...args)=>{
            const ctx = await wrapAsync(errorRegistry, adapterFactory.connectToShadowDb.bind(adapterFactory))(...args);
            return ctx.map((ctx2)=>bindAdapter(ctx2, errorRegistry));
        }
    };
    copySymbolsFromSource(adapterFactory, boundFactory);
    return boundFactory;
};
var bindSqlAdapterFactory = (adapterFactory)=>{
    const errorRegistry = new ErrorRegistryInternal();
    const boundFactory = {
        adapterName: adapterFactory.adapterName,
        provider: adapterFactory.provider,
        errorRegistry,
        connect: async (...args)=>{
            const ctx = await wrapAsync(errorRegistry, adapterFactory.connect.bind(adapterFactory))(...args);
            return ctx.map((ctx2)=>bindAdapter(ctx2, errorRegistry));
        }
    };
    copySymbolsFromSource(adapterFactory, boundFactory);
    return boundFactory;
};
var bindAdapter = (adapter, errorRegistry = new ErrorRegistryInternal())=>{
    const boundAdapter = {
        adapterName: adapter.adapterName,
        errorRegistry,
        queryRaw: wrapAsync(errorRegistry, adapter.queryRaw.bind(adapter)),
        executeRaw: wrapAsync(errorRegistry, adapter.executeRaw.bind(adapter)),
        executeScript: wrapAsync(errorRegistry, adapter.executeScript.bind(adapter)),
        dispose: wrapAsync(errorRegistry, adapter.dispose.bind(adapter)),
        provider: adapter.provider,
        startTransaction: async (...args)=>{
            const ctx = await wrapAsync(errorRegistry, adapter.startTransaction.bind(adapter))(...args);
            return ctx.map((ctx2)=>bindTransaction(errorRegistry, ctx2));
        }
    };
    if (adapter.getConnectionInfo) {
        boundAdapter.getConnectionInfo = wrapSync(errorRegistry, adapter.getConnectionInfo.bind(adapter));
    }
    return boundAdapter;
};
var bindTransaction = (errorRegistry, transaction)=>{
    const boundTransaction = {
        adapterName: transaction.adapterName,
        provider: transaction.provider,
        options: transaction.options,
        queryRaw: wrapAsync(errorRegistry, transaction.queryRaw.bind(transaction)),
        executeRaw: wrapAsync(errorRegistry, transaction.executeRaw.bind(transaction)),
        commit: wrapAsync(errorRegistry, transaction.commit.bind(transaction)),
        rollback: wrapAsync(errorRegistry, transaction.rollback.bind(transaction))
    };
    if (transaction.createSavepoint) {
        boundTransaction.createSavepoint = wrapAsync(errorRegistry, transaction.createSavepoint.bind(transaction));
    }
    if (transaction.rollbackToSavepoint) {
        boundTransaction.rollbackToSavepoint = wrapAsync(errorRegistry, transaction.rollbackToSavepoint.bind(transaction));
    }
    if (transaction.releaseSavepoint) {
        boundTransaction.releaseSavepoint = wrapAsync(errorRegistry, transaction.releaseSavepoint.bind(transaction));
    }
    return boundTransaction;
};
function wrapAsync(registry, fn) {
    return async (...args)=>{
        try {
            return ok(await fn(...args));
        } catch (error) {
            debug("[error@wrapAsync]", error);
            if (isDriverAdapterError(error)) {
                return err(error.cause);
            }
            const id = registry.registerNewError(error);
            return err({
                kind: "GenericJs",
                id
            });
        }
    };
}
function wrapSync(registry, fn) {
    return (...args)=>{
        try {
            return ok(fn(...args));
        } catch (error) {
            debug("[error@wrapSync]", error);
            if (isDriverAdapterError(error)) {
                return err(error.cause);
            }
            const id = registry.registerNewError(error);
            return err({
                kind: "GenericJs",
                id
            });
        }
    };
}
// src/const.ts
var ColumnTypeEnum = {
    // Scalars
    Int32: 0,
    Int64: 1,
    Float: 2,
    Double: 3,
    Numeric: 4,
    Boolean: 5,
    Character: 6,
    Text: 7,
    Date: 8,
    Time: 9,
    DateTime: 10,
    Json: 11,
    Enum: 12,
    Bytes: 13,
    Set: 14,
    Uuid: 15,
    // Arrays
    Int32Array: 64,
    Int64Array: 65,
    FloatArray: 66,
    DoubleArray: 67,
    NumericArray: 68,
    BooleanArray: 69,
    CharacterArray: 70,
    TextArray: 71,
    DateArray: 72,
    TimeArray: 73,
    DateTimeArray: 74,
    JsonArray: 75,
    EnumArray: 76,
    BytesArray: 77,
    UuidArray: 78,
    // Custom
    UnknownNumber: 128
};
// src/mock.ts
var mockAdapterErrors = {
    queryRaw: new Error("Not implemented: queryRaw"),
    executeRaw: new Error("Not implemented: executeRaw"),
    startTransaction: new Error("Not implemented: startTransaction"),
    executeScript: new Error("Not implemented: executeScript"),
    dispose: new Error("Not implemented: dispose")
};
function mockAdapter(provider) {
    return {
        provider,
        adapterName: "@prisma/adapter-mock",
        queryRaw: ()=>Promise.reject(mockAdapterErrors.queryRaw),
        executeRaw: ()=>Promise.reject(mockAdapterErrors.executeRaw),
        startTransaction: ()=>Promise.reject(mockAdapterErrors.startTransaction),
        executeScript: ()=>Promise.reject(mockAdapterErrors.executeScript),
        dispose: ()=>Promise.reject(mockAdapterErrors.dispose),
        [Symbol.for("adapter.mockAdapter")]: true
    };
}
function mockAdapterFactory(provider) {
    return {
        provider,
        adapterName: "@prisma/adapter-mock",
        connect: ()=>Promise.resolve(mockAdapter(provider)),
        [Symbol.for("adapter.mockAdapterFactory")]: true
    };
}
function mockMigrationAwareAdapterFactory(provider) {
    return {
        provider,
        adapterName: "@prisma/adapter-mock",
        connect: ()=>Promise.resolve(mockAdapter(provider)),
        connectToShadowDb: ()=>Promise.resolve(mockAdapter(provider)),
        [Symbol.for("adapter.mockMigrationAwareAdapterFactory")]: true
    };
}
;
}),
"[project]/node_modules/@sindresorhus/is/dist/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/// <reference lib="es2018"/>
/// <reference lib="dom"/>
/// <reference types="node"/>
Object.defineProperty(exports, "__esModule", {
    value: true
});
const typedArrayTypeNames = [
    'Int8Array',
    'Uint8Array',
    'Uint8ClampedArray',
    'Int16Array',
    'Uint16Array',
    'Int32Array',
    'Uint32Array',
    'Float32Array',
    'Float64Array',
    'BigInt64Array',
    'BigUint64Array'
];
function isTypedArrayName(name) {
    return typedArrayTypeNames.includes(name);
}
const objectTypeNames = [
    'Function',
    'Generator',
    'AsyncGenerator',
    'GeneratorFunction',
    'AsyncGeneratorFunction',
    'AsyncFunction',
    'Observable',
    'Array',
    'Buffer',
    'Blob',
    'Object',
    'RegExp',
    'Date',
    'Error',
    'Map',
    'Set',
    'WeakMap',
    'WeakSet',
    'ArrayBuffer',
    'SharedArrayBuffer',
    'DataView',
    'Promise',
    'URL',
    'FormData',
    'URLSearchParams',
    'HTMLElement',
    ...typedArrayTypeNames
];
function isObjectTypeName(name) {
    return objectTypeNames.includes(name);
}
const primitiveTypeNames = [
    'null',
    'undefined',
    'string',
    'number',
    'bigint',
    'boolean',
    'symbol'
];
function isPrimitiveTypeName(name) {
    return primitiveTypeNames.includes(name);
}
// eslint-disable-next-line @typescript-eslint/ban-types
function isOfType(type) {
    return (value)=>typeof value === type;
}
const { toString } = Object.prototype;
const getObjectType = (value)=>{
    const objectTypeName = toString.call(value).slice(8, -1);
    if (/HTML\w+Element/.test(objectTypeName) && is.domElement(value)) {
        return 'HTMLElement';
    }
    if (isObjectTypeName(objectTypeName)) {
        return objectTypeName;
    }
    return undefined;
};
const isObjectOfType = (type)=>(value)=>getObjectType(value) === type;
function is(value) {
    if (value === null) {
        return 'null';
    }
    switch(typeof value){
        case 'undefined':
            return 'undefined';
        case 'string':
            return 'string';
        case 'number':
            return 'number';
        case 'boolean':
            return 'boolean';
        case 'function':
            return 'Function';
        case 'bigint':
            return 'bigint';
        case 'symbol':
            return 'symbol';
        default:
    }
    if (is.observable(value)) {
        return 'Observable';
    }
    if (is.array(value)) {
        return 'Array';
    }
    if (is.buffer(value)) {
        return 'Buffer';
    }
    const tagType = getObjectType(value);
    if (tagType) {
        return tagType;
    }
    if (value instanceof String || value instanceof Boolean || value instanceof Number) {
        throw new TypeError('Please don\'t use object wrappers for primitive types');
    }
    return 'Object';
}
is.undefined = isOfType('undefined');
is.string = isOfType('string');
const isNumberType = isOfType('number');
is.number = (value)=>isNumberType(value) && !is.nan(value);
is.bigint = isOfType('bigint');
// eslint-disable-next-line @typescript-eslint/ban-types
is.function_ = isOfType('function');
is.null_ = (value)=>value === null;
is.class_ = (value)=>is.function_(value) && value.toString().startsWith('class ');
is.boolean = (value)=>value === true || value === false;
is.symbol = isOfType('symbol');
is.numericString = (value)=>is.string(value) && !is.emptyStringOrWhitespace(value) && !Number.isNaN(Number(value));
is.array = (value, assertion)=>{
    if (!Array.isArray(value)) {
        return false;
    }
    if (!is.function_(assertion)) {
        return true;
    }
    return value.every(assertion);
};
is.buffer = (value)=>{
    var _a, _b, _c, _d;
    return (_d = (_c = (_b = (_a = value) === null || _a === void 0 ? void 0 : _a.constructor) === null || _b === void 0 ? void 0 : _b.isBuffer) === null || _c === void 0 ? void 0 : _c.call(_b, value)) !== null && _d !== void 0 ? _d : false;
};
is.blob = (value)=>isObjectOfType('Blob')(value);
is.nullOrUndefined = (value)=>is.null_(value) || is.undefined(value);
is.object = (value)=>!is.null_(value) && (typeof value === 'object' || is.function_(value));
is.iterable = (value)=>{
    var _a;
    return is.function_((_a = value) === null || _a === void 0 ? void 0 : _a[Symbol.iterator]);
};
is.asyncIterable = (value)=>{
    var _a;
    return is.function_((_a = value) === null || _a === void 0 ? void 0 : _a[Symbol.asyncIterator]);
};
is.generator = (value)=>{
    var _a, _b;
    return is.iterable(value) && is.function_((_a = value) === null || _a === void 0 ? void 0 : _a.next) && is.function_((_b = value) === null || _b === void 0 ? void 0 : _b.throw);
};
is.asyncGenerator = (value)=>is.asyncIterable(value) && is.function_(value.next) && is.function_(value.throw);
is.nativePromise = (value)=>isObjectOfType('Promise')(value);
const hasPromiseAPI = (value)=>{
    var _a, _b;
    return is.function_((_a = value) === null || _a === void 0 ? void 0 : _a.then) && is.function_((_b = value) === null || _b === void 0 ? void 0 : _b.catch);
};
is.promise = (value)=>is.nativePromise(value) || hasPromiseAPI(value);
is.generatorFunction = isObjectOfType('GeneratorFunction');
is.asyncGeneratorFunction = (value)=>getObjectType(value) === 'AsyncGeneratorFunction';
is.asyncFunction = (value)=>getObjectType(value) === 'AsyncFunction';
// eslint-disable-next-line no-prototype-builtins, @typescript-eslint/ban-types
is.boundFunction = (value)=>is.function_(value) && !value.hasOwnProperty('prototype');
is.regExp = isObjectOfType('RegExp');
is.date = isObjectOfType('Date');
is.error = isObjectOfType('Error');
is.map = (value)=>isObjectOfType('Map')(value);
is.set = (value)=>isObjectOfType('Set')(value);
is.weakMap = (value)=>isObjectOfType('WeakMap')(value);
is.weakSet = (value)=>isObjectOfType('WeakSet')(value);
is.int8Array = isObjectOfType('Int8Array');
is.uint8Array = isObjectOfType('Uint8Array');
is.uint8ClampedArray = isObjectOfType('Uint8ClampedArray');
is.int16Array = isObjectOfType('Int16Array');
is.uint16Array = isObjectOfType('Uint16Array');
is.int32Array = isObjectOfType('Int32Array');
is.uint32Array = isObjectOfType('Uint32Array');
is.float32Array = isObjectOfType('Float32Array');
is.float64Array = isObjectOfType('Float64Array');
is.bigInt64Array = isObjectOfType('BigInt64Array');
is.bigUint64Array = isObjectOfType('BigUint64Array');
is.arrayBuffer = isObjectOfType('ArrayBuffer');
is.sharedArrayBuffer = isObjectOfType('SharedArrayBuffer');
is.dataView = isObjectOfType('DataView');
is.enumCase = (value, targetEnum)=>Object.values(targetEnum).includes(value);
is.directInstanceOf = (instance, class_)=>Object.getPrototypeOf(instance) === class_.prototype;
is.urlInstance = (value)=>isObjectOfType('URL')(value);
is.urlString = (value)=>{
    if (!is.string(value)) {
        return false;
    }
    try {
        new URL(value); // eslint-disable-line no-new
        return true;
    } catch (_a) {
        return false;
    }
};
// Example: `is.truthy = (value: unknown): value is (not false | not 0 | not '' | not undefined | not null) => Boolean(value);`
is.truthy = (value)=>Boolean(value);
// Example: `is.falsy = (value: unknown): value is (not true | 0 | '' | undefined | null) => Boolean(value);`
is.falsy = (value)=>!value;
is.nan = (value)=>Number.isNaN(value);
is.primitive = (value)=>is.null_(value) || isPrimitiveTypeName(typeof value);
is.integer = (value)=>Number.isInteger(value);
is.safeInteger = (value)=>Number.isSafeInteger(value);
is.plainObject = (value)=>{
    // From: https://github.com/sindresorhus/is-plain-obj/blob/main/index.js
    if (toString.call(value) !== '[object Object]') {
        return false;
    }
    const prototype = Object.getPrototypeOf(value);
    return prototype === null || prototype === Object.getPrototypeOf({});
};
is.typedArray = (value)=>isTypedArrayName(getObjectType(value));
const isValidLength = (value)=>is.safeInteger(value) && value >= 0;
is.arrayLike = (value)=>!is.nullOrUndefined(value) && !is.function_(value) && isValidLength(value.length);
is.inRange = (value, range)=>{
    if (is.number(range)) {
        return value >= Math.min(0, range) && value <= Math.max(range, 0);
    }
    if (is.array(range) && range.length === 2) {
        return value >= Math.min(...range) && value <= Math.max(...range);
    }
    throw new TypeError(`Invalid range: ${JSON.stringify(range)}`);
};
const NODE_TYPE_ELEMENT = 1;
const DOM_PROPERTIES_TO_CHECK = [
    'innerHTML',
    'ownerDocument',
    'style',
    'attributes',
    'nodeValue'
];
is.domElement = (value)=>{
    return is.object(value) && value.nodeType === NODE_TYPE_ELEMENT && is.string(value.nodeName) && !is.plainObject(value) && DOM_PROPERTIES_TO_CHECK.every((property)=>property in value);
};
is.observable = (value)=>{
    var _a, _b, _c, _d;
    if (!value) {
        return false;
    }
    // eslint-disable-next-line no-use-extend-native/no-use-extend-native
    if (value === ((_b = (_a = value)[Symbol.observable]) === null || _b === void 0 ? void 0 : _b.call(_a))) {
        return true;
    }
    if (value === ((_d = (_c = value)['@@observable']) === null || _d === void 0 ? void 0 : _d.call(_c))) {
        return true;
    }
    return false;
};
is.nodeStream = (value)=>is.object(value) && is.function_(value.pipe) && !is.observable(value);
is.infinite = (value)=>value === Infinity || value === -Infinity;
const isAbsoluteMod2 = (remainder)=>(value)=>is.integer(value) && Math.abs(value % 2) === remainder;
is.evenInteger = isAbsoluteMod2(0);
is.oddInteger = isAbsoluteMod2(1);
is.emptyArray = (value)=>is.array(value) && value.length === 0;
is.nonEmptyArray = (value)=>is.array(value) && value.length > 0;
is.emptyString = (value)=>is.string(value) && value.length === 0;
const isWhiteSpaceString = (value)=>is.string(value) && !/\S/.test(value);
is.emptyStringOrWhitespace = (value)=>is.emptyString(value) || isWhiteSpaceString(value);
// TODO: Use `not ''` when the `not` operator is available.
is.nonEmptyString = (value)=>is.string(value) && value.length > 0;
// TODO: Use `not ''` when the `not` operator is available.
is.nonEmptyStringAndNotWhitespace = (value)=>is.string(value) && !is.emptyStringOrWhitespace(value);
is.emptyObject = (value)=>is.object(value) && !is.map(value) && !is.set(value) && Object.keys(value).length === 0;
// TODO: Use `not` operator here to remove `Map` and `Set` from type guard:
// - https://github.com/Microsoft/TypeScript/pull/29317
is.nonEmptyObject = (value)=>is.object(value) && !is.map(value) && !is.set(value) && Object.keys(value).length > 0;
is.emptySet = (value)=>is.set(value) && value.size === 0;
is.nonEmptySet = (value)=>is.set(value) && value.size > 0;
is.emptyMap = (value)=>is.map(value) && value.size === 0;
is.nonEmptyMap = (value)=>is.map(value) && value.size > 0;
// `PropertyKey` is any value that can be used as an object key (string, number, or symbol)
is.propertyKey = (value)=>is.any([
        is.string,
        is.number,
        is.symbol
    ], value);
is.formData = (value)=>isObjectOfType('FormData')(value);
is.urlSearchParams = (value)=>isObjectOfType('URLSearchParams')(value);
const predicateOnArray = (method, predicate, values)=>{
    if (!is.function_(predicate)) {
        throw new TypeError(`Invalid predicate: ${JSON.stringify(predicate)}`);
    }
    if (values.length === 0) {
        throw new TypeError('Invalid number of values');
    }
    return method.call(values, predicate);
};
is.any = (predicate, ...values)=>{
    const predicates = is.array(predicate) ? predicate : [
        predicate
    ];
    return predicates.some((singlePredicate)=>predicateOnArray(Array.prototype.some, singlePredicate, values));
};
is.all = (predicate, ...values)=>predicateOnArray(Array.prototype.every, predicate, values);
const assertType = (condition, description, value, options = {})=>{
    if (!condition) {
        const { multipleValues } = options;
        const valuesMessage = multipleValues ? `received values of types ${[
            ...new Set(value.map((singleValue)=>`\`${is(singleValue)}\``))
        ].join(', ')}` : `received value of type \`${is(value)}\``;
        throw new TypeError(`Expected value which is \`${description}\`, ${valuesMessage}.`);
    }
};
exports.assert = {
    // Unknowns.
    undefined: (value)=>assertType(is.undefined(value), 'undefined', value),
    string: (value)=>assertType(is.string(value), 'string', value),
    number: (value)=>assertType(is.number(value), 'number', value),
    bigint: (value)=>assertType(is.bigint(value), 'bigint', value),
    // eslint-disable-next-line @typescript-eslint/ban-types
    function_: (value)=>assertType(is.function_(value), 'Function', value),
    null_: (value)=>assertType(is.null_(value), 'null', value),
    class_: (value)=>assertType(is.class_(value), "Class" /* class_ */ , value),
    boolean: (value)=>assertType(is.boolean(value), 'boolean', value),
    symbol: (value)=>assertType(is.symbol(value), 'symbol', value),
    numericString: (value)=>assertType(is.numericString(value), "string with a number" /* numericString */ , value),
    array: (value, assertion)=>{
        const assert = assertType;
        assert(is.array(value), 'Array', value);
        if (assertion) {
            value.forEach(assertion);
        }
    },
    buffer: (value)=>assertType(is.buffer(value), 'Buffer', value),
    blob: (value)=>assertType(is.blob(value), 'Blob', value),
    nullOrUndefined: (value)=>assertType(is.nullOrUndefined(value), "null or undefined" /* nullOrUndefined */ , value),
    object: (value)=>assertType(is.object(value), 'Object', value),
    iterable: (value)=>assertType(is.iterable(value), "Iterable" /* iterable */ , value),
    asyncIterable: (value)=>assertType(is.asyncIterable(value), "AsyncIterable" /* asyncIterable */ , value),
    generator: (value)=>assertType(is.generator(value), 'Generator', value),
    asyncGenerator: (value)=>assertType(is.asyncGenerator(value), 'AsyncGenerator', value),
    nativePromise: (value)=>assertType(is.nativePromise(value), "native Promise" /* nativePromise */ , value),
    promise: (value)=>assertType(is.promise(value), 'Promise', value),
    generatorFunction: (value)=>assertType(is.generatorFunction(value), 'GeneratorFunction', value),
    asyncGeneratorFunction: (value)=>assertType(is.asyncGeneratorFunction(value), 'AsyncGeneratorFunction', value),
    // eslint-disable-next-line @typescript-eslint/ban-types
    asyncFunction: (value)=>assertType(is.asyncFunction(value), 'AsyncFunction', value),
    // eslint-disable-next-line @typescript-eslint/ban-types
    boundFunction: (value)=>assertType(is.boundFunction(value), 'Function', value),
    regExp: (value)=>assertType(is.regExp(value), 'RegExp', value),
    date: (value)=>assertType(is.date(value), 'Date', value),
    error: (value)=>assertType(is.error(value), 'Error', value),
    map: (value)=>assertType(is.map(value), 'Map', value),
    set: (value)=>assertType(is.set(value), 'Set', value),
    weakMap: (value)=>assertType(is.weakMap(value), 'WeakMap', value),
    weakSet: (value)=>assertType(is.weakSet(value), 'WeakSet', value),
    int8Array: (value)=>assertType(is.int8Array(value), 'Int8Array', value),
    uint8Array: (value)=>assertType(is.uint8Array(value), 'Uint8Array', value),
    uint8ClampedArray: (value)=>assertType(is.uint8ClampedArray(value), 'Uint8ClampedArray', value),
    int16Array: (value)=>assertType(is.int16Array(value), 'Int16Array', value),
    uint16Array: (value)=>assertType(is.uint16Array(value), 'Uint16Array', value),
    int32Array: (value)=>assertType(is.int32Array(value), 'Int32Array', value),
    uint32Array: (value)=>assertType(is.uint32Array(value), 'Uint32Array', value),
    float32Array: (value)=>assertType(is.float32Array(value), 'Float32Array', value),
    float64Array: (value)=>assertType(is.float64Array(value), 'Float64Array', value),
    bigInt64Array: (value)=>assertType(is.bigInt64Array(value), 'BigInt64Array', value),
    bigUint64Array: (value)=>assertType(is.bigUint64Array(value), 'BigUint64Array', value),
    arrayBuffer: (value)=>assertType(is.arrayBuffer(value), 'ArrayBuffer', value),
    sharedArrayBuffer: (value)=>assertType(is.sharedArrayBuffer(value), 'SharedArrayBuffer', value),
    dataView: (value)=>assertType(is.dataView(value), 'DataView', value),
    enumCase: (value, targetEnum)=>assertType(is.enumCase(value, targetEnum), 'EnumCase', value),
    urlInstance: (value)=>assertType(is.urlInstance(value), 'URL', value),
    urlString: (value)=>assertType(is.urlString(value), "string with a URL" /* urlString */ , value),
    truthy: (value)=>assertType(is.truthy(value), "truthy" /* truthy */ , value),
    falsy: (value)=>assertType(is.falsy(value), "falsy" /* falsy */ , value),
    nan: (value)=>assertType(is.nan(value), "NaN" /* nan */ , value),
    primitive: (value)=>assertType(is.primitive(value), "primitive" /* primitive */ , value),
    integer: (value)=>assertType(is.integer(value), "integer" /* integer */ , value),
    safeInteger: (value)=>assertType(is.safeInteger(value), "integer" /* safeInteger */ , value),
    plainObject: (value)=>assertType(is.plainObject(value), "plain object" /* plainObject */ , value),
    typedArray: (value)=>assertType(is.typedArray(value), "TypedArray" /* typedArray */ , value),
    arrayLike: (value)=>assertType(is.arrayLike(value), "array-like" /* arrayLike */ , value),
    domElement: (value)=>assertType(is.domElement(value), "HTMLElement" /* domElement */ , value),
    observable: (value)=>assertType(is.observable(value), 'Observable', value),
    nodeStream: (value)=>assertType(is.nodeStream(value), "Node.js Stream" /* nodeStream */ , value),
    infinite: (value)=>assertType(is.infinite(value), "infinite number" /* infinite */ , value),
    emptyArray: (value)=>assertType(is.emptyArray(value), "empty array" /* emptyArray */ , value),
    nonEmptyArray: (value)=>assertType(is.nonEmptyArray(value), "non-empty array" /* nonEmptyArray */ , value),
    emptyString: (value)=>assertType(is.emptyString(value), "empty string" /* emptyString */ , value),
    emptyStringOrWhitespace: (value)=>assertType(is.emptyStringOrWhitespace(value), "empty string or whitespace" /* emptyStringOrWhitespace */ , value),
    nonEmptyString: (value)=>assertType(is.nonEmptyString(value), "non-empty string" /* nonEmptyString */ , value),
    nonEmptyStringAndNotWhitespace: (value)=>assertType(is.nonEmptyStringAndNotWhitespace(value), "non-empty string and not whitespace" /* nonEmptyStringAndNotWhitespace */ , value),
    emptyObject: (value)=>assertType(is.emptyObject(value), "empty object" /* emptyObject */ , value),
    nonEmptyObject: (value)=>assertType(is.nonEmptyObject(value), "non-empty object" /* nonEmptyObject */ , value),
    emptySet: (value)=>assertType(is.emptySet(value), "empty set" /* emptySet */ , value),
    nonEmptySet: (value)=>assertType(is.nonEmptySet(value), "non-empty set" /* nonEmptySet */ , value),
    emptyMap: (value)=>assertType(is.emptyMap(value), "empty map" /* emptyMap */ , value),
    nonEmptyMap: (value)=>assertType(is.nonEmptyMap(value), "non-empty map" /* nonEmptyMap */ , value),
    propertyKey: (value)=>assertType(is.propertyKey(value), 'PropertyKey', value),
    formData: (value)=>assertType(is.formData(value), 'FormData', value),
    urlSearchParams: (value)=>assertType(is.urlSearchParams(value), 'URLSearchParams', value),
    // Numbers.
    evenInteger: (value)=>assertType(is.evenInteger(value), "even integer" /* evenInteger */ , value),
    oddInteger: (value)=>assertType(is.oddInteger(value), "odd integer" /* oddInteger */ , value),
    // Two arguments.
    directInstanceOf: (instance, class_)=>assertType(is.directInstanceOf(instance, class_), "T" /* directInstanceOf */ , instance),
    inRange: (value, range)=>assertType(is.inRange(value, range), "in range" /* inRange */ , value),
    // Variadic functions.
    any: (predicate, ...values)=>{
        return assertType(is.any(predicate, ...values), "predicate returns truthy for any value" /* any */ , values, {
            multipleValues: true
        });
    },
    all: (predicate, ...values)=>assertType(is.all(predicate, ...values), "predicate returns truthy for all values" /* all */ , values, {
            multipleValues: true
        })
};
// Some few keywords are reserved, but we'll populate them for Node.js users
// See https://github.com/Microsoft/TypeScript/issues/2536
Object.defineProperties(is, {
    class: {
        value: is.class_
    },
    function: {
        value: is.function_
    },
    null: {
        value: is.null_
    }
});
Object.defineProperties(exports.assert, {
    class: {
        value: exports.assert.class_
    },
    function: {
        value: exports.assert.function_
    },
    null: {
        value: exports.assert.null_
    }
});
exports.default = is;
// For CommonJS default export support
module.exports = is;
module.exports.default = is;
module.exports.assert = exports.assert;
}),
"[project]/node_modules/@szmarczak/http-timer/dist/source/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const defer_to_connect_1 = __turbopack_context__.r("[project]/node_modules/defer-to-connect/dist/source/index.js [app-route] (ecmascript)");
const util_1 = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
const nodejsMajorVersion = Number(process.versions.node.split('.')[0]);
const timer = (request)=>{
    if (request.timings) {
        return request.timings;
    }
    const timings = {
        start: Date.now(),
        socket: undefined,
        lookup: undefined,
        connect: undefined,
        secureConnect: undefined,
        upload: undefined,
        response: undefined,
        end: undefined,
        error: undefined,
        abort: undefined,
        phases: {
            wait: undefined,
            dns: undefined,
            tcp: undefined,
            tls: undefined,
            request: undefined,
            firstByte: undefined,
            download: undefined,
            total: undefined
        }
    };
    request.timings = timings;
    const handleError = (origin)=>{
        const emit = origin.emit.bind(origin);
        origin.emit = (event, ...args)=>{
            // Catches the `error` event
            if (event === 'error') {
                timings.error = Date.now();
                timings.phases.total = timings.error - timings.start;
                origin.emit = emit;
            }
            // Saves the original behavior
            return emit(event, ...args);
        };
    };
    handleError(request);
    const onAbort = ()=>{
        timings.abort = Date.now();
        // Let the `end` response event be responsible for setting the total phase,
        // unless the Node.js major version is >= 13.
        if (!timings.response || nodejsMajorVersion >= 13) {
            timings.phases.total = Date.now() - timings.start;
        }
    };
    request.prependOnceListener('abort', onAbort);
    const onSocket = (socket)=>{
        timings.socket = Date.now();
        timings.phases.wait = timings.socket - timings.start;
        if (util_1.types.isProxy(socket)) {
            return;
        }
        const lookupListener = ()=>{
            timings.lookup = Date.now();
            timings.phases.dns = timings.lookup - timings.socket;
        };
        socket.prependOnceListener('lookup', lookupListener);
        defer_to_connect_1.default(socket, {
            connect: ()=>{
                timings.connect = Date.now();
                if (timings.lookup === undefined) {
                    socket.removeListener('lookup', lookupListener);
                    timings.lookup = timings.connect;
                    timings.phases.dns = timings.lookup - timings.socket;
                }
                timings.phases.tcp = timings.connect - timings.lookup;
            // This callback is called before flushing any data,
            // so we don't need to set `timings.phases.request` here.
            },
            secureConnect: ()=>{
                timings.secureConnect = Date.now();
                timings.phases.tls = timings.secureConnect - timings.connect;
            }
        });
    };
    if (request.socket) {
        onSocket(request.socket);
    } else {
        request.prependOnceListener('socket', onSocket);
    }
    const onUpload = ()=>{
        var _a;
        timings.upload = Date.now();
        timings.phases.request = timings.upload - ((_a = timings.secureConnect) !== null && _a !== void 0 ? _a : timings.connect);
    };
    const writableFinished = ()=>{
        if (typeof request.writableFinished === 'boolean') {
            return request.writableFinished;
        }
        // Node.js doesn't have `request.writableFinished` property
        return request.finished && request.outputSize === 0 && (!request.socket || request.socket.writableLength === 0);
    };
    if (writableFinished()) {
        onUpload();
    } else {
        request.prependOnceListener('finish', onUpload);
    }
    request.prependOnceListener('response', (response)=>{
        timings.response = Date.now();
        timings.phases.firstByte = timings.response - timings.upload;
        response.timings = timings;
        handleError(response);
        response.prependOnceListener('end', ()=>{
            timings.end = Date.now();
            timings.phases.download = timings.end - timings.response;
            timings.phases.total = timings.end - timings.start;
        });
        response.prependOnceListener('aborted', onAbort);
    });
    return timings;
};
exports.default = timer;
// For CommonJS default export support
module.exports = timer;
module.exports.default = timer;
}),
"[project]/node_modules/buffer-equal-constant-time/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*jshint node:true */ var Buffer = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)").Buffer; // browserify
var SlowBuffer = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)").SlowBuffer;
module.exports = bufferEq;
function bufferEq(a, b) {
    // shortcutting on type is necessary for correctness
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
        return false;
    }
    // buffer sizes should be well-known information, so despite this
    // shortcutting, it doesn't leak any information about the *contents* of the
    // buffers.
    if (a.length !== b.length) {
        return false;
    }
    var c = 0;
    for(var i = 0; i < a.length; i++){
        /*jshint bitwise:false */ c |= a[i] ^ b[i]; // XOR
    }
    return c === 0;
}
bufferEq.install = function() {
    Buffer.prototype.equal = SlowBuffer.prototype.equal = function equal(that) {
        return bufferEq(this, that);
    };
};
var origBufEqual = Buffer.prototype.equal;
var origSlowBufEqual = SlowBuffer.prototype.equal;
bufferEq.restore = function() {
    Buffer.prototype.equal = origBufEqual;
    SlowBuffer.prototype.equal = origSlowBufEqual;
};
}),
"[project]/node_modules/cacheable-lookup/source/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { V4MAPPED, ADDRCONFIG, ALL, promises: { Resolver: AsyncResolver }, lookup: dnsLookup } = __turbopack_context__.r("[externals]/dns [external] (dns, cjs)");
const { promisify } = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
const os = __turbopack_context__.r("[externals]/os [external] (os, cjs)");
const kCacheableLookupCreateConnection = Symbol('cacheableLookupCreateConnection');
const kCacheableLookupInstance = Symbol('cacheableLookupInstance');
const kExpires = Symbol('expires');
const supportsALL = typeof ALL === 'number';
const verifyAgent = (agent)=>{
    if (!(agent && typeof agent.createConnection === 'function')) {
        throw new Error('Expected an Agent instance as the first argument');
    }
};
const map4to6 = (entries)=>{
    for (const entry of entries){
        if (entry.family === 6) {
            continue;
        }
        entry.address = `::ffff:${entry.address}`;
        entry.family = 6;
    }
};
const getIfaceInfo = ()=>{
    let has4 = false;
    let has6 = false;
    for (const device of Object.values(os.networkInterfaces())){
        for (const iface of device){
            if (iface.internal) {
                continue;
            }
            if (iface.family === 'IPv6') {
                has6 = true;
            } else {
                has4 = true;
            }
            if (has4 && has6) {
                return {
                    has4,
                    has6
                };
            }
        }
    }
    return {
        has4,
        has6
    };
};
const isIterable = (map)=>{
    return Symbol.iterator in map;
};
const ttl = {
    ttl: true
};
const all = {
    all: true
};
class CacheableLookup {
    constructor({ cache = new Map(), maxTtl = Infinity, fallbackDuration = 3600, errorTtl = 0.15, resolver = new AsyncResolver(), lookup = dnsLookup } = {}){
        this.maxTtl = maxTtl;
        this.errorTtl = errorTtl;
        this._cache = cache;
        this._resolver = resolver;
        this._dnsLookup = promisify(lookup);
        if (this._resolver instanceof AsyncResolver) {
            this._resolve4 = this._resolver.resolve4.bind(this._resolver);
            this._resolve6 = this._resolver.resolve6.bind(this._resolver);
        } else {
            this._resolve4 = promisify(this._resolver.resolve4.bind(this._resolver));
            this._resolve6 = promisify(this._resolver.resolve6.bind(this._resolver));
        }
        this._iface = getIfaceInfo();
        this._pending = {};
        this._nextRemovalTime = false;
        this._hostnamesToFallback = new Set();
        if (fallbackDuration < 1) {
            this._fallback = false;
        } else {
            this._fallback = true;
            const interval = setInterval(()=>{
                this._hostnamesToFallback.clear();
            }, fallbackDuration * 1000);
            /* istanbul ignore next: There is no `interval.unref()` when running inside an Electron renderer */ if (interval.unref) {
                interval.unref();
            }
        }
        this.lookup = this.lookup.bind(this);
        this.lookupAsync = this.lookupAsync.bind(this);
    }
    set servers(servers) {
        this.clear();
        this._resolver.setServers(servers);
    }
    get servers() {
        return this._resolver.getServers();
    }
    lookup(hostname, options, callback) {
        if (typeof options === 'function') {
            callback = options;
            options = {};
        } else if (typeof options === 'number') {
            options = {
                family: options
            };
        }
        if (!callback) {
            throw new Error('Callback must be a function.');
        }
        // eslint-disable-next-line promise/prefer-await-to-then
        this.lookupAsync(hostname, options).then((result)=>{
            if (options.all) {
                callback(null, result);
            } else {
                callback(null, result.address, result.family, result.expires, result.ttl);
            }
        }, callback);
    }
    async lookupAsync(hostname, options = {}) {
        if (typeof options === 'number') {
            options = {
                family: options
            };
        }
        let cached = await this.query(hostname);
        if (options.family === 6) {
            const filtered = cached.filter((entry)=>entry.family === 6);
            if (options.hints & V4MAPPED) {
                if (supportsALL && options.hints & ALL || filtered.length === 0) {
                    map4to6(cached);
                } else {
                    cached = filtered;
                }
            } else {
                cached = filtered;
            }
        } else if (options.family === 4) {
            cached = cached.filter((entry)=>entry.family === 4);
        }
        if (options.hints & ADDRCONFIG) {
            const { _iface } = this;
            cached = cached.filter((entry)=>entry.family === 6 ? _iface.has6 : _iface.has4);
        }
        if (cached.length === 0) {
            const error = new Error(`cacheableLookup ENOTFOUND ${hostname}`);
            error.code = 'ENOTFOUND';
            error.hostname = hostname;
            throw error;
        }
        if (options.all) {
            return cached;
        }
        return cached[0];
    }
    async query(hostname) {
        let cached = await this._cache.get(hostname);
        if (!cached) {
            const pending = this._pending[hostname];
            if (pending) {
                cached = await pending;
            } else {
                const newPromise = this.queryAndCache(hostname);
                this._pending[hostname] = newPromise;
                try {
                    cached = await newPromise;
                } finally{
                    delete this._pending[hostname];
                }
            }
        }
        cached = cached.map((entry)=>{
            return {
                ...entry
            };
        });
        return cached;
    }
    async _resolve(hostname) {
        const wrap = async (promise)=>{
            try {
                return await promise;
            } catch (error) {
                if (error.code === 'ENODATA' || error.code === 'ENOTFOUND') {
                    return [];
                }
                throw error;
            }
        };
        // ANY is unsafe as it doesn't trigger new queries in the underlying server.
        const [A, AAAA] = await Promise.all([
            this._resolve4(hostname, ttl),
            this._resolve6(hostname, ttl)
        ].map((promise)=>wrap(promise)));
        let aTtl = 0;
        let aaaaTtl = 0;
        let cacheTtl = 0;
        const now = Date.now();
        for (const entry of A){
            entry.family = 4;
            entry.expires = now + entry.ttl * 1000;
            aTtl = Math.max(aTtl, entry.ttl);
        }
        for (const entry of AAAA){
            entry.family = 6;
            entry.expires = now + entry.ttl * 1000;
            aaaaTtl = Math.max(aaaaTtl, entry.ttl);
        }
        if (A.length > 0) {
            if (AAAA.length > 0) {
                cacheTtl = Math.min(aTtl, aaaaTtl);
            } else {
                cacheTtl = aTtl;
            }
        } else {
            cacheTtl = aaaaTtl;
        }
        return {
            entries: [
                ...A,
                ...AAAA
            ],
            cacheTtl
        };
    }
    async _lookup(hostname) {
        try {
            const entries = await this._dnsLookup(hostname, {
                all: true
            });
            return {
                entries,
                cacheTtl: 0
            };
        } catch (_) {
            return {
                entries: [],
                cacheTtl: 0
            };
        }
    }
    async _set(hostname, data, cacheTtl) {
        if (this.maxTtl > 0 && cacheTtl > 0) {
            cacheTtl = Math.min(cacheTtl, this.maxTtl) * 1000;
            data[kExpires] = Date.now() + cacheTtl;
            try {
                await this._cache.set(hostname, data, cacheTtl);
            } catch (error) {
                this.lookupAsync = async ()=>{
                    const cacheError = new Error('Cache Error. Please recreate the CacheableLookup instance.');
                    cacheError.cause = error;
                    throw cacheError;
                };
            }
            if (isIterable(this._cache)) {
                this._tick(cacheTtl);
            }
        }
    }
    async queryAndCache(hostname) {
        if (this._hostnamesToFallback.has(hostname)) {
            return this._dnsLookup(hostname, all);
        }
        let query = await this._resolve(hostname);
        if (query.entries.length === 0 && this._fallback) {
            query = await this._lookup(hostname);
            if (query.entries.length !== 0) {
                // Use `dns.lookup(...)` for that particular hostname
                this._hostnamesToFallback.add(hostname);
            }
        }
        const cacheTtl = query.entries.length === 0 ? this.errorTtl : query.cacheTtl;
        await this._set(hostname, query.entries, cacheTtl);
        return query.entries;
    }
    _tick(ms) {
        const nextRemovalTime = this._nextRemovalTime;
        if (!nextRemovalTime || ms < nextRemovalTime) {
            clearTimeout(this._removalTimeout);
            this._nextRemovalTime = ms;
            this._removalTimeout = setTimeout(()=>{
                this._nextRemovalTime = false;
                let nextExpiry = Infinity;
                const now = Date.now();
                for (const [hostname, entries] of this._cache){
                    const expires = entries[kExpires];
                    if (now >= expires) {
                        this._cache.delete(hostname);
                    } else if (expires < nextExpiry) {
                        nextExpiry = expires;
                    }
                }
                if (nextExpiry !== Infinity) {
                    this._tick(nextExpiry - now);
                }
            }, ms);
            /* istanbul ignore next: There is no `timeout.unref()` when running inside an Electron renderer */ if (this._removalTimeout.unref) {
                this._removalTimeout.unref();
            }
        }
    }
    install(agent) {
        verifyAgent(agent);
        if (kCacheableLookupCreateConnection in agent) {
            throw new Error('CacheableLookup has been already installed');
        }
        agent[kCacheableLookupCreateConnection] = agent.createConnection;
        agent[kCacheableLookupInstance] = this;
        agent.createConnection = (options, callback)=>{
            if (!('lookup' in options)) {
                options.lookup = this.lookup;
            }
            return agent[kCacheableLookupCreateConnection](options, callback);
        };
    }
    uninstall(agent) {
        verifyAgent(agent);
        if (agent[kCacheableLookupCreateConnection]) {
            if (agent[kCacheableLookupInstance] !== this) {
                throw new Error('The agent is not owned by this CacheableLookup instance');
            }
            agent.createConnection = agent[kCacheableLookupCreateConnection];
            delete agent[kCacheableLookupCreateConnection];
            delete agent[kCacheableLookupInstance];
        }
    }
    updateInterfaceInfo() {
        const { _iface } = this;
        this._iface = getIfaceInfo();
        if (_iface.has4 && !this._iface.has4 || _iface.has6 && !this._iface.has6) {
            this._cache.clear();
        }
    }
    clear(hostname) {
        if (hostname) {
            this._cache.delete(hostname);
            return;
        }
        this._cache.clear();
    }
}
module.exports = CacheableLookup;
module.exports.default = CacheableLookup;
}),
"[project]/node_modules/cacheable-request/src/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const EventEmitter = __turbopack_context__.r("[externals]/events [external] (events, cjs)");
const urlLib = __turbopack_context__.r("[externals]/url [external] (url, cjs)");
const normalizeUrl = __turbopack_context__.r("[project]/node_modules/normalize-url/index.js [app-route] (ecmascript)");
const getStream = __turbopack_context__.r("[project]/node_modules/get-stream/index.js [app-route] (ecmascript)");
const CachePolicy = __turbopack_context__.r("[project]/node_modules/http-cache-semantics/index.js [app-route] (ecmascript)");
const Response = __turbopack_context__.r("[project]/node_modules/responselike/src/index.js [app-route] (ecmascript)");
const lowercaseKeys = __turbopack_context__.r("[project]/node_modules/lowercase-keys/index.js [app-route] (ecmascript)");
const cloneResponse = __turbopack_context__.r("[project]/node_modules/clone-response/src/index.js [app-route] (ecmascript)");
const Keyv = __turbopack_context__.r("[externals]/keyv [external] (keyv, cjs, [project]/node_modules/keyv)");
class CacheableRequest {
    constructor(request, cacheAdapter){
        if (typeof request !== 'function') {
            throw new TypeError('Parameter `request` must be a function');
        }
        this.cache = new Keyv({
            uri: typeof cacheAdapter === 'string' && cacheAdapter,
            store: typeof cacheAdapter !== 'string' && cacheAdapter,
            namespace: 'cacheable-request'
        });
        return this.createCacheableRequest(request);
    }
    createCacheableRequest(request) {
        return (opts, cb)=>{
            let url;
            if (typeof opts === 'string') {
                url = normalizeUrlObject(urlLib.parse(opts));
                opts = {};
            } else if (opts instanceof urlLib.URL) {
                url = normalizeUrlObject(urlLib.parse(opts.toString()));
                opts = {};
            } else {
                const [pathname, ...searchParts] = (opts.path || '').split('?');
                const search = searchParts.length > 0 ? `?${searchParts.join('?')}` : '';
                url = normalizeUrlObject({
                    ...opts,
                    pathname,
                    search
                });
            }
            opts = {
                headers: {},
                method: 'GET',
                cache: true,
                strictTtl: false,
                automaticFailover: false,
                ...opts,
                ...urlObjectToRequestOptions(url)
            };
            opts.headers = lowercaseKeys(opts.headers);
            const ee = new EventEmitter();
            const normalizedUrlString = normalizeUrl(urlLib.format(url), {
                stripWWW: false,
                removeTrailingSlash: false,
                stripAuthentication: false
            });
            const key = `${opts.method}:${normalizedUrlString}`;
            let revalidate = false;
            let madeRequest = false;
            const makeRequest = (opts)=>{
                madeRequest = true;
                let requestErrored = false;
                let requestErrorCallback;
                const requestErrorPromise = new Promise((resolve)=>{
                    requestErrorCallback = ()=>{
                        if (!requestErrored) {
                            requestErrored = true;
                            resolve();
                        }
                    };
                });
                const handler = (response)=>{
                    if (revalidate && !opts.forceRefresh) {
                        response.status = response.statusCode;
                        const revalidatedPolicy = CachePolicy.fromObject(revalidate.cachePolicy).revalidatedPolicy(opts, response);
                        if (!revalidatedPolicy.modified) {
                            const headers = revalidatedPolicy.policy.responseHeaders();
                            response = new Response(revalidate.statusCode, headers, revalidate.body, revalidate.url);
                            response.cachePolicy = revalidatedPolicy.policy;
                            response.fromCache = true;
                        }
                    }
                    if (!response.fromCache) {
                        response.cachePolicy = new CachePolicy(opts, response, opts);
                        response.fromCache = false;
                    }
                    let clonedResponse;
                    if (opts.cache && response.cachePolicy.storable()) {
                        clonedResponse = cloneResponse(response);
                        (async ()=>{
                            try {
                                const bodyPromise = getStream.buffer(response);
                                await Promise.race([
                                    requestErrorPromise,
                                    new Promise((resolve)=>response.once('end', resolve))
                                ]);
                                if (requestErrored) {
                                    return;
                                }
                                const body = await bodyPromise;
                                const value = {
                                    cachePolicy: response.cachePolicy.toObject(),
                                    url: response.url,
                                    statusCode: response.fromCache ? revalidate.statusCode : response.statusCode,
                                    body
                                };
                                let ttl = opts.strictTtl ? response.cachePolicy.timeToLive() : undefined;
                                if (opts.maxTtl) {
                                    ttl = ttl ? Math.min(ttl, opts.maxTtl) : opts.maxTtl;
                                }
                                await this.cache.set(key, value, ttl);
                            } catch (error) {
                                ee.emit('error', new CacheableRequest.CacheError(error));
                            }
                        })();
                    } else if (opts.cache && revalidate) {
                        (async ()=>{
                            try {
                                await this.cache.delete(key);
                            } catch (error) {
                                ee.emit('error', new CacheableRequest.CacheError(error));
                            }
                        })();
                    }
                    ee.emit('response', clonedResponse || response);
                    if (typeof cb === 'function') {
                        cb(clonedResponse || response);
                    }
                };
                try {
                    const req = request(opts, handler);
                    req.once('error', requestErrorCallback);
                    req.once('abort', requestErrorCallback);
                    ee.emit('request', req);
                } catch (error) {
                    ee.emit('error', new CacheableRequest.RequestError(error));
                }
            };
            (async ()=>{
                const get = async (opts)=>{
                    await Promise.resolve();
                    const cacheEntry = opts.cache ? await this.cache.get(key) : undefined;
                    if (typeof cacheEntry === 'undefined') {
                        return makeRequest(opts);
                    }
                    const policy = CachePolicy.fromObject(cacheEntry.cachePolicy);
                    if (policy.satisfiesWithoutRevalidation(opts) && !opts.forceRefresh) {
                        const headers = policy.responseHeaders();
                        const response = new Response(cacheEntry.statusCode, headers, cacheEntry.body, cacheEntry.url);
                        response.cachePolicy = policy;
                        response.fromCache = true;
                        ee.emit('response', response);
                        if (typeof cb === 'function') {
                            cb(response);
                        }
                    } else {
                        revalidate = cacheEntry;
                        opts.headers = policy.revalidationHeaders(opts);
                        makeRequest(opts);
                    }
                };
                const errorHandler = (error)=>ee.emit('error', new CacheableRequest.CacheError(error));
                this.cache.once('error', errorHandler);
                ee.on('response', ()=>this.cache.removeListener('error', errorHandler));
                try {
                    await get(opts);
                } catch (error) {
                    if (opts.automaticFailover && !madeRequest) {
                        makeRequest(opts);
                    }
                    ee.emit('error', new CacheableRequest.CacheError(error));
                }
            })();
            return ee;
        };
    }
}
function urlObjectToRequestOptions(url) {
    const options = {
        ...url
    };
    options.path = `${url.pathname || '/'}${url.search || ''}`;
    delete options.pathname;
    delete options.search;
    return options;
}
function normalizeUrlObject(url) {
    // If url was parsed by url.parse or new URL:
    // - hostname will be set
    // - host will be hostname[:port]
    // - port will be set if it was explicit in the parsed string
    // Otherwise, url was from request options:
    // - hostname or host may be set
    // - host shall not have port encoded
    return {
        protocol: url.protocol,
        auth: url.auth,
        hostname: url.hostname || url.host || 'localhost',
        port: url.port,
        pathname: url.pathname,
        search: url.search
    };
}
CacheableRequest.RequestError = class extends Error {
    constructor(error){
        super(error.message);
        this.name = 'RequestError';
        Object.assign(this, error);
    }
};
CacheableRequest.CacheError = class extends Error {
    constructor(error){
        super(error.message);
        this.name = 'CacheError';
        Object.assign(this, error);
    }
};
module.exports = CacheableRequest;
}),
"[project]/node_modules/clone-response/src/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const PassThrough = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").PassThrough;
const mimicResponse = __turbopack_context__.r("[project]/node_modules/mimic-response/index.js [app-route] (ecmascript)");
const cloneResponse = (response)=>{
    if (!(response && response.pipe)) {
        throw new TypeError('Parameter `response` must be a response stream.');
    }
    const clone = new PassThrough();
    mimicResponse(response, clone);
    return response.pipe(clone);
};
module.exports = cloneResponse;
}),
"[project]/node_modules/decompress-response/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { Transform, PassThrough } = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
const zlib = __turbopack_context__.r("[externals]/zlib [external] (zlib, cjs)");
const mimicResponse = __turbopack_context__.r("[project]/node_modules/decompress-response/node_modules/mimic-response/index.js [app-route] (ecmascript)");
module.exports = (response)=>{
    const contentEncoding = (response.headers['content-encoding'] || '').toLowerCase();
    if (![
        'gzip',
        'deflate',
        'br'
    ].includes(contentEncoding)) {
        return response;
    }
    // TODO: Remove this when targeting Node.js 12.
    const isBrotli = contentEncoding === 'br';
    if (isBrotli && typeof zlib.createBrotliDecompress !== 'function') {
        response.destroy(new Error('Brotli is not supported on Node.js < 12'));
        return response;
    }
    let isEmpty = true;
    const checker = new Transform({
        transform (data, _encoding, callback) {
            isEmpty = false;
            callback(null, data);
        },
        flush (callback) {
            callback();
        }
    });
    const finalStream = new PassThrough({
        autoDestroy: false,
        destroy (error, callback) {
            response.destroy();
            callback(error);
        }
    });
    const decompressStream = isBrotli ? zlib.createBrotliDecompress() : zlib.createUnzip();
    decompressStream.once('error', (error)=>{
        if (isEmpty && !response.readable) {
            finalStream.end();
            return;
        }
        finalStream.destroy(error);
    });
    mimicResponse(response, finalStream);
    response.pipe(checker).pipe(decompressStream).pipe(finalStream);
    return finalStream;
};
}),
"[project]/node_modules/decompress-response/node_modules/mimic-response/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// We define these manually to ensure they're always copied
// even if they would move up the prototype chain
// https://nodejs.org/api/http.html#http_class_http_incomingmessage
const knownProperties = [
    'aborted',
    'complete',
    'headers',
    'httpVersion',
    'httpVersionMinor',
    'httpVersionMajor',
    'method',
    'rawHeaders',
    'rawTrailers',
    'setTimeout',
    'socket',
    'statusCode',
    'statusMessage',
    'trailers',
    'url'
];
module.exports = (fromStream, toStream)=>{
    if (toStream._readableState.autoDestroy) {
        throw new Error('The second stream must have the `autoDestroy` option set to `false`');
    }
    const fromProperties = new Set(Object.keys(fromStream).concat(knownProperties));
    const properties = {};
    for (const property of fromProperties){
        // Don't overwrite existing properties.
        if (property in toStream) {
            continue;
        }
        properties[property] = {
            get () {
                const value = fromStream[property];
                const isFunction = typeof value === 'function';
                return isFunction ? value.bind(fromStream) : value;
            },
            set (value) {
                fromStream[property] = value;
            },
            enumerable: true,
            configurable: false
        };
    }
    Object.defineProperties(toStream, properties);
    fromStream.once('aborted', ()=>{
        toStream.destroy();
        toStream.emit('aborted');
    });
    fromStream.once('close', ()=>{
        if (fromStream.complete) {
            if (toStream.readable) {
                toStream.once('end', ()=>{
                    toStream.emit('close');
                });
            } else {
                toStream.emit('close');
            }
        } else {
            toStream.emit('close');
        }
    });
    return toStream;
};
}),
"[project]/node_modules/defer-to-connect/dist/source/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function isTLSSocket(socket) {
    return socket.encrypted;
}
const deferToConnect = (socket, fn)=>{
    let listeners;
    if (typeof fn === 'function') {
        const connect = fn;
        listeners = {
            connect
        };
    } else {
        listeners = fn;
    }
    const hasConnectListener = typeof listeners.connect === 'function';
    const hasSecureConnectListener = typeof listeners.secureConnect === 'function';
    const hasCloseListener = typeof listeners.close === 'function';
    const onConnect = ()=>{
        if (hasConnectListener) {
            listeners.connect();
        }
        if (isTLSSocket(socket) && hasSecureConnectListener) {
            if (socket.authorized) {
                listeners.secureConnect();
            } else if (!socket.authorizationError) {
                socket.once('secureConnect', listeners.secureConnect);
            }
        }
        if (hasCloseListener) {
            socket.once('close', listeners.close);
        }
    };
    if (socket.writable && !socket.connecting) {
        onConnect();
    } else if (socket.connecting) {
        socket.once('connect', onConnect);
    } else if (socket.destroyed && hasCloseListener) {
        listeners.close(socket._hadError);
    }
};
exports.default = deferToConnect;
// For CommonJS default export support
module.exports = deferToConnect;
module.exports.default = deferToConnect;
}),
"[project]/node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var Buffer = __turbopack_context__.r("[project]/node_modules/safe-buffer/index.js [app-route] (ecmascript)").Buffer;
var getParamBytesForAlg = __turbopack_context__.r("[project]/node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js [app-route] (ecmascript)");
var MAX_OCTET = 0x80, CLASS_UNIVERSAL = 0, PRIMITIVE_BIT = 0x20, TAG_SEQ = 0x10, TAG_INT = 0x02, ENCODED_TAG_SEQ = TAG_SEQ | PRIMITIVE_BIT | CLASS_UNIVERSAL << 6, ENCODED_TAG_INT = TAG_INT | CLASS_UNIVERSAL << 6;
function base64Url(base64) {
    return base64.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}
function signatureAsBuffer(signature) {
    if (Buffer.isBuffer(signature)) {
        return signature;
    } else if ('string' === typeof signature) {
        return Buffer.from(signature, 'base64');
    }
    throw new TypeError('ECDSA signature must be a Base64 string or a Buffer');
}
function derToJose(signature, alg) {
    signature = signatureAsBuffer(signature);
    var paramBytes = getParamBytesForAlg(alg);
    // the DER encoded param should at most be the param size, plus a padding
    // zero, since due to being a signed integer
    var maxEncodedParamLength = paramBytes + 1;
    var inputLength = signature.length;
    var offset = 0;
    if (signature[offset++] !== ENCODED_TAG_SEQ) {
        throw new Error('Could not find expected "seq"');
    }
    var seqLength = signature[offset++];
    if (seqLength === (MAX_OCTET | 1)) {
        seqLength = signature[offset++];
    }
    if (inputLength - offset < seqLength) {
        throw new Error('"seq" specified length of "' + seqLength + '", only "' + (inputLength - offset) + '" remaining');
    }
    if (signature[offset++] !== ENCODED_TAG_INT) {
        throw new Error('Could not find expected "int" for "r"');
    }
    var rLength = signature[offset++];
    if (inputLength - offset - 2 < rLength) {
        throw new Error('"r" specified length of "' + rLength + '", only "' + (inputLength - offset - 2) + '" available');
    }
    if (maxEncodedParamLength < rLength) {
        throw new Error('"r" specified length of "' + rLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
    }
    var rOffset = offset;
    offset += rLength;
    if (signature[offset++] !== ENCODED_TAG_INT) {
        throw new Error('Could not find expected "int" for "s"');
    }
    var sLength = signature[offset++];
    if (inputLength - offset !== sLength) {
        throw new Error('"s" specified length of "' + sLength + '", expected "' + (inputLength - offset) + '"');
    }
    if (maxEncodedParamLength < sLength) {
        throw new Error('"s" specified length of "' + sLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
    }
    var sOffset = offset;
    offset += sLength;
    if (offset !== inputLength) {
        throw new Error('Expected to consume entire buffer, but "' + (inputLength - offset) + '" bytes remain');
    }
    var rPadding = paramBytes - rLength, sPadding = paramBytes - sLength;
    var dst = Buffer.allocUnsafe(rPadding + rLength + sPadding + sLength);
    for(offset = 0; offset < rPadding; ++offset){
        dst[offset] = 0;
    }
    signature.copy(dst, offset, rOffset + Math.max(-rPadding, 0), rOffset + rLength);
    offset = paramBytes;
    for(var o = offset; offset < o + sPadding; ++offset){
        dst[offset] = 0;
    }
    signature.copy(dst, offset, sOffset + Math.max(-sPadding, 0), sOffset + sLength);
    dst = dst.toString('base64');
    dst = base64Url(dst);
    return dst;
}
function countPadding(buf, start, stop) {
    var padding = 0;
    while(start + padding < stop && buf[start + padding] === 0){
        ++padding;
    }
    var needsSign = buf[start + padding] >= MAX_OCTET;
    if (needsSign) {
        --padding;
    }
    return padding;
}
function joseToDer(signature, alg) {
    signature = signatureAsBuffer(signature);
    var paramBytes = getParamBytesForAlg(alg);
    var signatureBytes = signature.length;
    if (signatureBytes !== paramBytes * 2) {
        throw new TypeError('"' + alg + '" signatures must be "' + paramBytes * 2 + '" bytes, saw "' + signatureBytes + '"');
    }
    var rPadding = countPadding(signature, 0, paramBytes);
    var sPadding = countPadding(signature, paramBytes, signature.length);
    var rLength = paramBytes - rPadding;
    var sLength = paramBytes - sPadding;
    var rsBytes = 1 + 1 + rLength + 1 + 1 + sLength;
    var shortLength = rsBytes < MAX_OCTET;
    var dst = Buffer.allocUnsafe((shortLength ? 2 : 3) + rsBytes);
    var offset = 0;
    dst[offset++] = ENCODED_TAG_SEQ;
    if (shortLength) {
        // Bit 8 has value "0"
        // bits 7-1 give the length.
        dst[offset++] = rsBytes;
    } else {
        // Bit 8 of first octet has value "1"
        // bits 7-1 give the number of additional length octets.
        dst[offset++] = MAX_OCTET | 1;
        // length, base 256
        dst[offset++] = rsBytes & 0xff;
    }
    dst[offset++] = ENCODED_TAG_INT;
    dst[offset++] = rLength;
    if (rPadding < 0) {
        dst[offset++] = 0;
        offset += signature.copy(dst, offset, 0, paramBytes);
    } else {
        offset += signature.copy(dst, offset, rPadding, paramBytes);
    }
    dst[offset++] = ENCODED_TAG_INT;
    dst[offset++] = sLength;
    if (sPadding < 0) {
        dst[offset++] = 0;
        signature.copy(dst, offset, paramBytes);
    } else {
        signature.copy(dst, offset, paramBytes + sPadding);
    }
    return dst;
}
module.exports = {
    derToJose: derToJose,
    joseToDer: joseToDer
};
}),
"[project]/node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function getParamSize(keySize) {
    var result = (keySize / 8 | 0) + (keySize % 8 === 0 ? 0 : 1);
    return result;
}
var paramBytesForAlg = {
    ES256: getParamSize(256),
    ES384: getParamSize(384),
    ES512: getParamSize(521)
};
function getParamBytesForAlg(alg) {
    var paramBytes = paramBytesForAlg[alg];
    if (paramBytes) {
        return paramBytes;
    }
    throw new Error('Unknown algorithm "' + alg + '"');
}
module.exports = getParamBytesForAlg;
}),
"[project]/node_modules/end-of-stream/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var once = __turbopack_context__.r("[project]/node_modules/once/once.js [app-route] (ecmascript)");
var noop = function() {};
var qnt = /*TURBOPACK member replacement*/ __turbopack_context__.g.Bare ? queueMicrotask : process.nextTick.bind(process);
var isRequest = function(stream) {
    return stream.setHeader && typeof stream.abort === 'function';
};
var isChildProcess = function(stream) {
    return stream.stdio && Array.isArray(stream.stdio) && stream.stdio.length === 3;
};
var eos = function(stream, opts, callback) {
    if (typeof opts === 'function') return eos(stream, null, opts);
    if (!opts) opts = {};
    callback = once(callback || noop);
    var ws = stream._writableState;
    var rs = stream._readableState;
    var readable = opts.readable || opts.readable !== false && stream.readable;
    var writable = opts.writable || opts.writable !== false && stream.writable;
    var cancelled = false;
    var onlegacyfinish = function() {
        if (!stream.writable) onfinish();
    };
    var onfinish = function() {
        writable = false;
        if (!readable) callback.call(stream);
    };
    var onend = function() {
        readable = false;
        if (!writable) callback.call(stream);
    };
    var onexit = function(exitCode) {
        callback.call(stream, exitCode ? new Error('exited with error code: ' + exitCode) : null);
    };
    var onerror = function(err) {
        callback.call(stream, err);
    };
    var onclose = function() {
        qnt(onclosenexttick);
    };
    var onclosenexttick = function() {
        if (cancelled) return;
        if (readable && !(rs && rs.ended && !rs.destroyed)) return callback.call(stream, new Error('premature close'));
        if (writable && !(ws && ws.ended && !ws.destroyed)) return callback.call(stream, new Error('premature close'));
    };
    var onrequest = function() {
        stream.req.on('finish', onfinish);
    };
    if (isRequest(stream)) {
        stream.on('complete', onfinish);
        stream.on('abort', onclose);
        if (stream.req) onrequest();
        else stream.on('request', onrequest);
    } else if (writable && !ws) {
        stream.on('end', onlegacyfinish);
        stream.on('close', onlegacyfinish);
    }
    if (isChildProcess(stream)) stream.on('exit', onexit);
    stream.on('end', onend);
    stream.on('finish', onfinish);
    if (opts.error !== false) stream.on('error', onerror);
    stream.on('close', onclose);
    return function() {
        cancelled = true;
        stream.removeListener('complete', onfinish);
        stream.removeListener('abort', onclose);
        stream.removeListener('request', onrequest);
        if (stream.req) stream.req.removeListener('finish', onfinish);
        stream.removeListener('end', onlegacyfinish);
        stream.removeListener('close', onlegacyfinish);
        stream.removeListener('finish', onfinish);
        stream.removeListener('exit', onexit);
        stream.removeListener('end', onend);
        stream.removeListener('error', onerror);
        stream.removeListener('close', onclose);
    };
};
module.exports = eos;
}),
"[project]/node_modules/get-stream/buffer-stream.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { PassThrough: PassThroughStream } = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
module.exports = (options)=>{
    options = {
        ...options
    };
    const { array } = options;
    let { encoding } = options;
    const isBuffer = encoding === 'buffer';
    let objectMode = false;
    if (array) {
        objectMode = !(encoding || isBuffer);
    } else {
        encoding = encoding || 'utf8';
    }
    if (isBuffer) {
        encoding = null;
    }
    const stream = new PassThroughStream({
        objectMode
    });
    if (encoding) {
        stream.setEncoding(encoding);
    }
    let length = 0;
    const chunks = [];
    stream.on('data', (chunk)=>{
        chunks.push(chunk);
        if (objectMode) {
            length = chunks.length;
        } else {
            length += chunk.length;
        }
    });
    stream.getBufferedValue = ()=>{
        if (array) {
            return chunks;
        }
        return isBuffer ? Buffer.concat(chunks, length) : chunks.join('');
    };
    stream.getBufferedLength = ()=>length;
    return stream;
};
}),
"[project]/node_modules/get-stream/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { constants: BufferConstants } = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)");
const pump = __turbopack_context__.r("[project]/node_modules/pump/index.js [app-route] (ecmascript)");
const bufferStream = __turbopack_context__.r("[project]/node_modules/get-stream/buffer-stream.js [app-route] (ecmascript)");
class MaxBufferError extends Error {
    constructor(){
        super('maxBuffer exceeded');
        this.name = 'MaxBufferError';
    }
}
async function getStream(inputStream, options) {
    if (!inputStream) {
        return Promise.reject(new Error('Expected a stream'));
    }
    options = {
        maxBuffer: Infinity,
        ...options
    };
    const { maxBuffer } = options;
    let stream;
    await new Promise((resolve, reject)=>{
        const rejectPromise = (error)=>{
            // Don't retrieve an oversized buffer.
            if (error && stream.getBufferedLength() <= BufferConstants.MAX_LENGTH) {
                error.bufferedData = stream.getBufferedValue();
            }
            reject(error);
        };
        stream = pump(inputStream, bufferStream(options), (error)=>{
            if (error) {
                rejectPromise(error);
                return;
            }
            resolve();
        });
        stream.on('data', ()=>{
            if (stream.getBufferedLength() > maxBuffer) {
                rejectPromise(new MaxBufferError());
            }
        });
    });
    return stream.getBufferedValue();
}
module.exports = getStream;
// TODO: Remove this for the next major release
module.exports.default = getStream;
module.exports.buffer = (stream, options)=>getStream(stream, {
        ...options,
        encoding: 'buffer'
    });
module.exports.array = (stream, options)=>getStream(stream, {
        ...options,
        array: true
    });
module.exports.MaxBufferError = MaxBufferError;
}),
"[project]/node_modules/http-cache-semantics/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @typedef {Object} HttpRequest
 * @property {Record<string, string>} headers - Request headers
 * @property {string} [method] - HTTP method
 * @property {string} [url] - Request URL
 */ /**
 * @typedef {Object} HttpResponse
 * @property {Record<string, string>} headers - Response headers
 * @property {number} [status] - HTTP status code
 */ /**
 * Set of default cacheable status codes per RFC 7231 section 6.1.
 * @type {Set<number>}
 */ const statusCodeCacheableByDefault = new Set([
    200,
    203,
    204,
    206,
    300,
    301,
    308,
    404,
    405,
    410,
    414,
    501
]);
/**
 * Set of HTTP status codes that the cache implementation understands.
 * Note: This implementation does not understand partial responses (206).
 * @type {Set<number>}
 */ const understoodStatuses = new Set([
    200,
    203,
    204,
    300,
    301,
    302,
    303,
    307,
    308,
    404,
    405,
    410,
    414,
    501
]);
/**
 * Set of HTTP error status codes.
 * @type {Set<number>}
 */ const errorStatusCodes = new Set([
    500,
    502,
    503,
    504
]);
/**
 * Object representing hop-by-hop headers that should be removed.
 * @type {Record<string, boolean>}
 */ const hopByHopHeaders = {
    date: true,
    connection: true,
    'keep-alive': true,
    'proxy-authenticate': true,
    'proxy-authorization': true,
    te: true,
    trailer: true,
    'transfer-encoding': true,
    upgrade: true
};
/**
 * Headers that are excluded from revalidation update.
 * @type {Record<string, boolean>}
 */ const excludedFromRevalidationUpdate = {
    // Since the old body is reused, it doesn't make sense to change properties of the body
    'content-length': true,
    'content-encoding': true,
    'transfer-encoding': true,
    'content-range': true
};
/**
 * Converts a string to a number or returns zero if the conversion fails.
 * @param {string} s - The string to convert.
 * @returns {number} The parsed number or 0.
 */ function toNumberOrZero(s) {
    const n = parseInt(s, 10);
    return isFinite(n) ? n : 0;
}
/**
 * Determines if the given response is an error response.
 * Implements RFC 5861 behavior.
 * @param {HttpResponse|undefined} response - The HTTP response object.
 * @returns {boolean} true if the response is an error or undefined, false otherwise.
 */ function isErrorResponse(response) {
    // consider undefined response as faulty
    if (!response) {
        return true;
    }
    return errorStatusCodes.has(response.status);
}
/**
 * Parses a Cache-Control header string into an object.
 * @param {string} [header] - The Cache-Control header value.
 * @returns {Record<string, string|boolean>} An object representing Cache-Control directives.
 */ function parseCacheControl(header) {
    /** @type {Record<string, string|boolean>} */ const cc = {};
    if (!header) return cc;
    // TODO: When there is more than one value present for a given directive (e.g., two Expires header fields, multiple Cache-Control: max-age directives),
    // the directive's value is considered invalid. Caches are encouraged to consider responses that have invalid freshness information to be stale
    const parts = header.trim().split(/,/);
    for (const part of parts){
        const [k, v] = part.split(/=/, 2);
        cc[k.trim()] = v === undefined ? true : v.trim().replace(/^"|"$/g, '');
    }
    return cc;
}
/**
 * Formats a Cache-Control directives object into a header string.
 * @param {Record<string, string|boolean>} cc - The Cache-Control directives.
 * @returns {string|undefined} A formatted Cache-Control header string or undefined if empty.
 */ function formatCacheControl(cc) {
    let parts = [];
    for(const k in cc){
        const v = cc[k];
        parts.push(v === true ? k : k + '=' + v);
    }
    if (!parts.length) {
        return undefined;
    }
    return parts.join(', ');
}
module.exports = class CachePolicy {
    /**
     * Creates a new CachePolicy instance.
     * @param {HttpRequest} req - Incoming client request.
     * @param {HttpResponse} res - Received server response.
     * @param {Object} [options={}] - Configuration options.
     * @param {boolean} [options.shared=true] - Is the cache shared (a public proxy)? `false` for personal browser caches.
     * @param {number} [options.cacheHeuristic=0.1] - Fallback heuristic (age fraction) for cache duration.
     * @param {number} [options.immutableMinTimeToLive=86400000] - Minimum TTL for immutable responses in milliseconds.
     * @param {boolean} [options.ignoreCargoCult=false] - Detect nonsense cache headers, and override them.
     * @param {any} [options._fromObject] - Internal parameter for deserialization. Do not use.
     */ constructor(req, res, { shared, cacheHeuristic, immutableMinTimeToLive, ignoreCargoCult, _fromObject } = {}){
        if (_fromObject) {
            this._fromObject(_fromObject);
            return;
        }
        if (!res || !res.headers) {
            throw Error('Response headers missing');
        }
        this._assertRequestHasHeaders(req);
        /** @type {number} Timestamp when the response was received */ this._responseTime = this.now();
        /** @type {boolean} Indicates if the cache is shared */ this._isShared = shared !== false;
        /** @type {boolean} Indicates if legacy cargo cult directives should be ignored */ this._ignoreCargoCult = !!ignoreCargoCult;
        /** @type {number} Heuristic cache fraction */ this._cacheHeuristic = undefined !== cacheHeuristic ? cacheHeuristic : 0.1; // 10% matches IE
        /** @type {number} Minimum TTL for immutable responses in ms */ this._immutableMinTtl = undefined !== immutableMinTimeToLive ? immutableMinTimeToLive : 24 * 3600 * 1000;
        /** @type {number} HTTP status code */ this._status = 'status' in res ? res.status : 200;
        /** @type {Record<string, string>} Response headers */ this._resHeaders = res.headers;
        /** @type {Record<string, string|boolean>} Parsed Cache-Control directives from response */ this._rescc = parseCacheControl(res.headers['cache-control']);
        /** @type {string} HTTP method (e.g., GET, POST) */ this._method = 'method' in req ? req.method : 'GET';
        /** @type {string} Request URL */ this._url = req.url;
        /** @type {string} Host header from the request */ this._host = req.headers.host;
        /** @type {boolean} Whether the request does not include an Authorization header */ this._noAuthorization = !req.headers.authorization;
        /** @type {Record<string, string>|null} Request headers used for Vary matching */ this._reqHeaders = res.headers.vary ? req.headers : null; // Don't keep all request headers if they won't be used
        /** @type {Record<string, string|boolean>} Parsed Cache-Control directives from request */ this._reqcc = parseCacheControl(req.headers['cache-control']);
        // Assume that if someone uses legacy, non-standard uncecessary options they don't understand caching,
        // so there's no point stricly adhering to the blindly copy&pasted directives.
        if (this._ignoreCargoCult && 'pre-check' in this._rescc && 'post-check' in this._rescc) {
            delete this._rescc['pre-check'];
            delete this._rescc['post-check'];
            delete this._rescc['no-cache'];
            delete this._rescc['no-store'];
            delete this._rescc['must-revalidate'];
            this._resHeaders = Object.assign({}, this._resHeaders, {
                'cache-control': formatCacheControl(this._rescc)
            });
            delete this._resHeaders.expires;
            delete this._resHeaders.pragma;
        }
        // When the Cache-Control header field is not present in a request, caches MUST consider the no-cache request pragma-directive
        // as having the same effect as if "Cache-Control: no-cache" were present (see Section 5.2.1).
        if (res.headers['cache-control'] == null && /no-cache/.test(res.headers.pragma)) {
            this._rescc['no-cache'] = true;
        }
    }
    /**
     * You can monkey-patch it for testing.
     * @returns {number} Current time in milliseconds.
     */ now() {
        return Date.now();
    }
    /**
     * Determines if the response is storable in a cache.
     * @returns {boolean} `false` if can never be cached.
     */ storable() {
        // The "no-store" request directive indicates that a cache MUST NOT store any part of either this request or any response to it.
        return !!(!this._reqcc['no-store'] && // A cache MUST NOT store a response to any request, unless:
        // The request method is understood by the cache and defined as being cacheable, and
        ('GET' === this._method || 'HEAD' === this._method || 'POST' === this._method && this._hasExplicitExpiration()) && // the response status code is understood by the cache, and
        understoodStatuses.has(this._status) && // the "no-store" cache directive does not appear in request or response header fields, and
        !this._rescc['no-store'] && // the "private" response directive does not appear in the response, if the cache is shared, and
        (!this._isShared || !this._rescc.private) && // the Authorization header field does not appear in the request, if the cache is shared,
        (!this._isShared || this._noAuthorization || this._allowsStoringAuthenticated()) && // the response either:
        // contains an Expires header field, or
        (this._resHeaders.expires || // contains a max-age response directive, or
        // contains a s-maxage response directive and the cache is shared, or
        // contains a public response directive.
        this._rescc['max-age'] || this._isShared && this._rescc['s-maxage'] || this._rescc.public || // has a status code that is defined as cacheable by default
        statusCodeCacheableByDefault.has(this._status)));
    }
    /**
     * @returns {boolean} true if expiration is explicitly defined.
     */ _hasExplicitExpiration() {
        // 4.2.1 Calculating Freshness Lifetime
        return !!(this._isShared && this._rescc['s-maxage'] || this._rescc['max-age'] || this._resHeaders.expires);
    }
    /**
     * @param {HttpRequest} req - a request
     * @throws {Error} if the headers are missing.
     */ _assertRequestHasHeaders(req) {
        if (!req || !req.headers) {
            throw Error('Request headers missing');
        }
    }
    /**
     * Checks if the request matches the cache and can be satisfied from the cache immediately,
     * without having to make a request to the server.
     *
     * This doesn't support `stale-while-revalidate`. See `evaluateRequest()` for a more complete solution.
     *
     * @param {HttpRequest} req - The new incoming HTTP request.
     * @returns {boolean} `true`` if the cached response used to construct this cache policy satisfies the request without revalidation.
     */ satisfiesWithoutRevalidation(req) {
        const result = this.evaluateRequest(req);
        return !result.revalidation;
    }
    /**
     * @param {{headers: Record<string, string>, synchronous: boolean}|undefined} revalidation - Revalidation information, if any.
     * @returns {{response: HttpResponse, revalidation: {headers: Record<string, string>, synchronous: boolean}|undefined}} An object with a cached response headers and revalidation info.
     */ _evaluateRequestHitResult(revalidation) {
        return {
            response: {
                headers: this.responseHeaders(),
                status: this._status
            },
            revalidation
        };
    }
    /**
     * @param {HttpRequest} request - new incoming
     * @param {boolean} synchronous - whether revalidation must be synchronous (not s-w-r).
     * @returns {{headers: Record<string, string>, synchronous: boolean}} An object with revalidation headers and a synchronous flag.
     */ _evaluateRequestRevalidation(request, synchronous) {
        return {
            synchronous,
            headers: this.revalidationHeaders(request)
        };
    }
    /**
     * @param {HttpRequest} request - new incoming
     * @returns {{response: undefined, revalidation: {headers: Record<string, string>, synchronous: boolean}}} An object indicating no cached response and revalidation details.
     */ _evaluateRequestMissResult(request) {
        return {
            response: undefined,
            revalidation: this._evaluateRequestRevalidation(request, true)
        };
    }
    /**
     * Checks if the given request matches this cache entry, and how the cache can be used to satisfy it. Returns an object with:
     *
     * ```
     * {
     *     // If defined, you must send a request to the server.
     *     revalidation: {
     *         headers: {}, // HTTP headers to use when sending the revalidation response
     *         // If true, you MUST wait for a response from the server before using the cache
     *         // If false, this is stale-while-revalidate. The cache is stale, but you can use it while you update it asynchronously.
     *         synchronous: bool,
     *     },
     *     // If defined, you can use this cached response.
     *     response: {
     *         headers: {}, // Updated cached HTTP headers you must use when responding to the client
     *     },
     * }
     * ```
     * @param {HttpRequest} req - new incoming HTTP request
     * @returns {{response: HttpResponse|undefined, revalidation: {headers: Record<string, string>, synchronous: boolean}|undefined}} An object containing keys:
     *   - revalidation: { headers: Record<string, string>, synchronous: boolean } Set if you should send this to the origin server
     *   - response: HttpResponse Set if you can respond to the client with these cached headers
     */ evaluateRequest(req) {
        this._assertRequestHasHeaders(req);
        // In all circumstances, a cache MUST NOT ignore the must-revalidate directive
        if (this._rescc['must-revalidate']) {
            return this._evaluateRequestMissResult(req);
        }
        if (!this._requestMatches(req, false)) {
            return this._evaluateRequestMissResult(req);
        }
        // When presented with a request, a cache MUST NOT reuse a stored response, unless:
        // the presented request does not contain the no-cache pragma (Section 5.4), nor the no-cache cache directive,
        // unless the stored response is successfully validated (Section 4.3), and
        const requestCC = parseCacheControl(req.headers['cache-control']);
        if (requestCC['no-cache'] || /no-cache/.test(req.headers.pragma)) {
            return this._evaluateRequestMissResult(req);
        }
        if (requestCC['max-age'] && this.age() > toNumberOrZero(requestCC['max-age'])) {
            return this._evaluateRequestMissResult(req);
        }
        if (requestCC['min-fresh'] && this.maxAge() - this.age() < toNumberOrZero(requestCC['min-fresh'])) {
            return this._evaluateRequestMissResult(req);
        }
        // the stored response is either:
        // fresh, or allowed to be served stale
        if (this.stale()) {
            // If a value is present, then the client is willing to accept a response that has
            // exceeded its freshness lifetime by no more than the specified number of seconds
            const allowsStaleWithoutRevalidation = 'max-stale' in requestCC && (true === requestCC['max-stale'] || requestCC['max-stale'] > this.age() - this.maxAge());
            if (allowsStaleWithoutRevalidation) {
                return this._evaluateRequestHitResult(undefined);
            }
            if (this.useStaleWhileRevalidate()) {
                return this._evaluateRequestHitResult(this._evaluateRequestRevalidation(req, false));
            }
            return this._evaluateRequestMissResult(req);
        }
        return this._evaluateRequestHitResult(undefined);
    }
    /**
     * @param {HttpRequest} req - check if this is for the same cache entry
     * @param {boolean} allowHeadMethod - allow a HEAD method to match.
     * @returns {boolean} `true` if the request matches.
     */ _requestMatches(req, allowHeadMethod) {
        // The presented effective request URI and that of the stored response match, and
        return !!((!this._url || this._url === req.url) && this._host === req.headers.host && // the request method associated with the stored response allows it to be used for the presented request, and
        (!req.method || this._method === req.method || allowHeadMethod && 'HEAD' === req.method) && // selecting header fields nominated by the stored response (if any) match those presented, and
        this._varyMatches(req));
    }
    /**
     * Determines whether storing authenticated responses is allowed.
     * @returns {boolean} `true` if allowed.
     */ _allowsStoringAuthenticated() {
        // following Cache-Control response directives (Section 5.2.2) have such an effect: must-revalidate, public, and s-maxage.
        return !!(this._rescc['must-revalidate'] || this._rescc.public || this._rescc['s-maxage']);
    }
    /**
     * Checks whether the Vary header in the response matches the new request.
     * @param {HttpRequest} req - incoming HTTP request
     * @returns {boolean} `true` if the vary headers match.
     */ _varyMatches(req) {
        if (!this._resHeaders.vary) {
            return true;
        }
        const fields = this._resHeaders.vary.trim().toLowerCase().split(/\s*,\s*/);
        for (const name of fields){
            // A Vary header field-value of "*" always fails to match
            if (name === '*') {
                return false;
            }
            const newReq = Object.prototype.hasOwnProperty.call(req.headers, name) && req.headers[name];
            const cachedReq = Object.prototype.hasOwnProperty.call(this._reqHeaders, name) && this._reqHeaders[name];
            if (newReq !== cachedReq) {
                return false;
            }
        }
        return true;
    }
    /**
     * Creates a copy of the given headers without any hop-by-hop headers.
     * @param {Record<string, string>} inHeaders - old headers from the cached response
     * @returns {Record<string, string>} A new headers object without hop-by-hop headers.
     */ _copyWithoutHopByHopHeaders(inHeaders) {
        /** @type {Record<string, string>} */ const headers = {};
        for(const name in inHeaders){
            if (hopByHopHeaders[name]) continue;
            headers[name] = inHeaders[name];
        }
        // 9.1.  Connection
        if (inHeaders.connection) {
            const tokens = inHeaders.connection.trim().split(/\s*,\s*/);
            for (const name of tokens){
                delete headers[name];
            }
        }
        if (headers.warning) {
            const warnings = headers.warning.split(/,/).filter((warning)=>{
                return !/^\s*1[0-9][0-9]/.test(warning);
            });
            if (!warnings.length) {
                delete headers.warning;
            } else {
                headers.warning = warnings.join(',').trim();
            }
        }
        return headers;
    }
    /**
     * Returns the response headers adjusted for serving the cached response.
     * Removes hop-by-hop headers and updates the Age and Date headers.
     * @returns {Record<string, string>} The adjusted response headers.
     */ responseHeaders() {
        const headers = this._copyWithoutHopByHopHeaders(this._resHeaders);
        const age = this.age();
        // A cache SHOULD generate 113 warning if it heuristically chose a freshness
        // lifetime greater than 24 hours and the response's age is greater than 24 hours.
        if (age > 3600 * 24 && !this._hasExplicitExpiration() && this.maxAge() > 3600 * 24) {
            headers.warning = (headers.warning ? `${headers.warning}, ` : '') + '113 - "rfc7234 5.5.4"';
        }
        headers.age = `${Math.round(age)}`;
        headers.date = new Date(this.now()).toUTCString();
        return headers;
    }
    /**
     * Returns the status code of the cached response.
     * @returns {number} The response status code.
     */ status() {
        return this._status;
    }
    /**
     * Returns the Date header value from the response or the current time if invalid.
     * @returns {number} Timestamp (in milliseconds) representing the Date header or response time.
     */ date() {
        const serverDate = Date.parse(this._resHeaders.date);
        if (isFinite(serverDate)) {
            return serverDate;
        }
        return this._responseTime;
    }
    /**
     * Value of the Age header, in seconds, updated for the current time.
     * May be fractional.
     * @returns {number} The age in seconds.
     */ age() {
        let age = this._ageValue();
        const residentTime = (this.now() - this._responseTime) / 1000;
        return age + residentTime;
    }
    /**
     * @returns {number} The Age header value as a number.
     */ _ageValue() {
        return toNumberOrZero(this._resHeaders.age);
    }
    /**
     * Possibly outdated value of applicable max-age (or heuristic equivalent) in seconds.
     * This counts since response's `Date`.
     *
     * For an up-to-date value, see `timeToLive()`.
     *
     * Returns the maximum age (freshness lifetime) of the response in seconds.
     * @returns {number} The max-age value in seconds.
     */ maxAge() {
        if (!this.storable() || this._rescc['no-cache']) {
            return 0;
        }
        // Shared responses with cookies are cacheable according to the RFC, but IMHO it'd be unwise to do so by default
        // so this implementation requires explicit opt-in via public header
        if (this._isShared && this._resHeaders['set-cookie'] && !this._rescc.public && !this._rescc.immutable) {
            return 0;
        }
        if (this._resHeaders.vary === '*') {
            return 0;
        }
        if (this._isShared) {
            if (this._rescc['proxy-revalidate']) {
                return 0;
            }
            // if a response includes the s-maxage directive, a shared cache recipient MUST ignore the Expires field.
            if (this._rescc['s-maxage']) {
                return toNumberOrZero(this._rescc['s-maxage']);
            }
        }
        // If a response includes a Cache-Control field with the max-age directive, a recipient MUST ignore the Expires field.
        if (this._rescc['max-age']) {
            return toNumberOrZero(this._rescc['max-age']);
        }
        const defaultMinTtl = this._rescc.immutable ? this._immutableMinTtl : 0;
        const serverDate = this.date();
        if (this._resHeaders.expires) {
            const expires = Date.parse(this._resHeaders.expires);
            // A cache recipient MUST interpret invalid date formats, especially the value "0", as representing a time in the past (i.e., "already expired").
            if (Number.isNaN(expires) || expires < serverDate) {
                return 0;
            }
            return Math.max(defaultMinTtl, (expires - serverDate) / 1000);
        }
        if (this._resHeaders['last-modified']) {
            const lastModified = Date.parse(this._resHeaders['last-modified']);
            if (isFinite(lastModified) && serverDate > lastModified) {
                return Math.max(defaultMinTtl, (serverDate - lastModified) / 1000 * this._cacheHeuristic);
            }
        }
        return defaultMinTtl;
    }
    /**
     * Remaining time this cache entry may be useful for, in *milliseconds*.
     * You can use this as an expiration time for your cache storage.
     *
     * Prefer this method over `maxAge()`, because it includes other factors like `age` and `stale-while-revalidate`.
     * @returns {number} Time-to-live in milliseconds.
     */ timeToLive() {
        const age = this.maxAge() - this.age();
        const staleIfErrorAge = age + toNumberOrZero(this._rescc['stale-if-error']);
        const staleWhileRevalidateAge = age + toNumberOrZero(this._rescc['stale-while-revalidate']);
        return Math.round(Math.max(0, age, staleIfErrorAge, staleWhileRevalidateAge) * 1000);
    }
    /**
     * If true, this cache entry is past its expiration date.
     * Note that stale cache may be useful sometimes, see `evaluateRequest()`.
     * @returns {boolean} `false` doesn't mean it's fresh nor usable
     */ stale() {
        return this.maxAge() <= this.age();
    }
    /**
     * @returns {boolean} `true` if `stale-if-error` condition allows use of a stale response.
     */ _useStaleIfError() {
        return this.maxAge() + toNumberOrZero(this._rescc['stale-if-error']) > this.age();
    }
    /** See `evaluateRequest()` for a more complete solution
     * @returns {boolean} `true` if `stale-while-revalidate` is currently allowed.
     */ useStaleWhileRevalidate() {
        const swr = toNumberOrZero(this._rescc['stale-while-revalidate']);
        return swr > 0 && this.maxAge() + swr > this.age();
    }
    /**
     * Creates a `CachePolicy` instance from a serialized object.
     * @param {Object} obj - The serialized object.
     * @returns {CachePolicy} A new CachePolicy instance.
     */ static fromObject(obj) {
        return new this(undefined, undefined, {
            _fromObject: obj
        });
    }
    /**
     * @param {any} obj - The serialized object.
     * @throws {Error} If already initialized or if the object is invalid.
     */ _fromObject(obj) {
        if (this._responseTime) throw Error('Reinitialized');
        if (!obj || obj.v !== 1) throw Error('Invalid serialization');
        this._responseTime = obj.t;
        this._isShared = obj.sh;
        this._cacheHeuristic = obj.ch;
        this._immutableMinTtl = obj.imm !== undefined ? obj.imm : 24 * 3600 * 1000;
        this._ignoreCargoCult = !!obj.icc;
        this._status = obj.st;
        this._resHeaders = obj.resh;
        this._rescc = obj.rescc;
        this._method = obj.m;
        this._url = obj.u;
        this._host = obj.h;
        this._noAuthorization = obj.a;
        this._reqHeaders = obj.reqh;
        this._reqcc = obj.reqcc;
    }
    /**
     * Serializes the `CachePolicy` instance into a JSON-serializable object.
     * @returns {Object} The serialized object.
     */ toObject() {
        return {
            v: 1,
            t: this._responseTime,
            sh: this._isShared,
            ch: this._cacheHeuristic,
            imm: this._immutableMinTtl,
            icc: this._ignoreCargoCult,
            st: this._status,
            resh: this._resHeaders,
            rescc: this._rescc,
            m: this._method,
            u: this._url,
            h: this._host,
            a: this._noAuthorization,
            reqh: this._reqHeaders,
            reqcc: this._reqcc
        };
    }
    /**
     * Headers for sending to the origin server to revalidate stale response.
     * Allows server to return 304 to allow reuse of the previous response.
     *
     * Hop by hop headers are always stripped.
     * Revalidation headers may be added or removed, depending on request.
     * @param {HttpRequest} incomingReq - The incoming HTTP request.
     * @returns {Record<string, string>} The headers for the revalidation request.
     */ revalidationHeaders(incomingReq) {
        this._assertRequestHasHeaders(incomingReq);
        const headers = this._copyWithoutHopByHopHeaders(incomingReq.headers);
        // This implementation does not understand range requests
        delete headers['if-range'];
        if (!this._requestMatches(incomingReq, true) || !this.storable()) {
            // revalidation allowed via HEAD
            // not for the same resource, or wasn't allowed to be cached anyway
            delete headers['if-none-match'];
            delete headers['if-modified-since'];
            return headers;
        }
        /* MUST send that entity-tag in any cache validation request (using If-Match or If-None-Match) if an entity-tag has been provided by the origin server. */ if (this._resHeaders.etag) {
            headers['if-none-match'] = headers['if-none-match'] ? `${headers['if-none-match']}, ${this._resHeaders.etag}` : this._resHeaders.etag;
        }
        // Clients MAY issue simple (non-subrange) GET requests with either weak validators or strong validators. Clients MUST NOT use weak validators in other forms of request.
        const forbidsWeakValidators = headers['accept-ranges'] || headers['if-match'] || headers['if-unmodified-since'] || this._method && this._method != 'GET';
        /* SHOULD send the Last-Modified value in non-subrange cache validation requests (using If-Modified-Since) if only a Last-Modified value has been provided by the origin server.
        Note: This implementation does not understand partial responses (206) */ if (forbidsWeakValidators) {
            delete headers['if-modified-since'];
            if (headers['if-none-match']) {
                const etags = headers['if-none-match'].split(/,/).filter((etag)=>{
                    return !/^\s*W\//.test(etag);
                });
                if (!etags.length) {
                    delete headers['if-none-match'];
                } else {
                    headers['if-none-match'] = etags.join(',').trim();
                }
            }
        } else if (this._resHeaders['last-modified'] && !headers['if-modified-since']) {
            headers['if-modified-since'] = this._resHeaders['last-modified'];
        }
        return headers;
    }
    /**
     * Creates new CachePolicy with information combined from the previews response,
     * and the new revalidation response.
     *
     * Returns {policy, modified} where modified is a boolean indicating
     * whether the response body has been modified, and old cached body can't be used.
     *
     * @param {HttpRequest} request - The latest HTTP request asking for the cached entry.
     * @param {HttpResponse} response - The latest revalidation HTTP response from the origin server.
     * @returns {{policy: CachePolicy, modified: boolean, matches: boolean}} The updated policy and modification status.
     * @throws {Error} If the response headers are missing.
     */ revalidatedPolicy(request, response) {
        this._assertRequestHasHeaders(request);
        if (this._useStaleIfError() && isErrorResponse(response)) {
            return {
                policy: this,
                modified: false,
                matches: true
            };
        }
        if (!response || !response.headers) {
            throw Error('Response headers missing');
        }
        // These aren't going to be supported exactly, since one CachePolicy object
        // doesn't know about all the other cached objects.
        let matches = false;
        if (response.status !== undefined && response.status != 304) {
            matches = false;
        } else if (response.headers.etag && !/^\s*W\//.test(response.headers.etag)) {
            // "All of the stored responses with the same strong validator are selected.
            // If none of the stored responses contain the same strong validator,
            // then the cache MUST NOT use the new response to update any stored responses."
            matches = this._resHeaders.etag && this._resHeaders.etag.replace(/^\s*W\//, '') === response.headers.etag;
        } else if (this._resHeaders.etag && response.headers.etag) {
            // "If the new response contains a weak validator and that validator corresponds
            // to one of the cache's stored responses,
            // then the most recent of those matching stored responses is selected for update."
            matches = this._resHeaders.etag.replace(/^\s*W\//, '') === response.headers.etag.replace(/^\s*W\//, '');
        } else if (this._resHeaders['last-modified']) {
            matches = this._resHeaders['last-modified'] === response.headers['last-modified'];
        } else {
            // If the new response does not include any form of validator (such as in the case where
            // a client generates an If-Modified-Since request from a source other than the Last-Modified
            // response header field), and there is only one stored response, and that stored response also
            // lacks a validator, then that stored response is selected for update.
            if (!this._resHeaders.etag && !this._resHeaders['last-modified'] && !response.headers.etag && !response.headers['last-modified']) {
                matches = true;
            }
        }
        const optionsCopy = {
            shared: this._isShared,
            cacheHeuristic: this._cacheHeuristic,
            immutableMinTimeToLive: this._immutableMinTtl,
            ignoreCargoCult: this._ignoreCargoCult
        };
        if (!matches) {
            return {
                policy: new this.constructor(request, response, optionsCopy),
                // Client receiving 304 without body, even if it's invalid/mismatched has no option
                // but to reuse a cached body. We don't have a good way to tell clients to do
                // error recovery in such case.
                modified: response.status != 304,
                matches: false
            };
        }
        // use other header fields provided in the 304 (Not Modified) response to replace all instances
        // of the corresponding header fields in the stored response.
        const headers = {};
        for(const k in this._resHeaders){
            headers[k] = k in response.headers && !excludedFromRevalidationUpdate[k] ? response.headers[k] : this._resHeaders[k];
        }
        const newResponse = Object.assign({}, response, {
            status: this._status,
            method: this._method,
            headers
        });
        return {
            policy: new this.constructor(request, newResponse, optionsCopy),
            modified: false,
            matches: true
        };
    }
};
}),
"[project]/node_modules/http2-wrapper/source/agent.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const EventEmitter = __turbopack_context__.r("[externals]/events [external] (events, cjs)");
const tls = __turbopack_context__.r("[externals]/tls [external] (tls, cjs)");
const http2 = __turbopack_context__.r("[externals]/http2 [external] (http2, cjs)");
const QuickLRU = __turbopack_context__.r("[project]/node_modules/quick-lru/index.js [app-route] (ecmascript)");
const kCurrentStreamsCount = Symbol('currentStreamsCount');
const kRequest = Symbol('request');
const kOriginSet = Symbol('cachedOriginSet');
const kGracefullyClosing = Symbol('gracefullyClosing');
const nameKeys = [
    // `http2.connect()` options
    'maxDeflateDynamicTableSize',
    'maxSessionMemory',
    'maxHeaderListPairs',
    'maxOutstandingPings',
    'maxReservedRemoteStreams',
    'maxSendHeaderBlockLength',
    'paddingStrategy',
    // `tls.connect()` options
    'localAddress',
    'path',
    'rejectUnauthorized',
    'minDHSize',
    // `tls.createSecureContext()` options
    'ca',
    'cert',
    'clientCertEngine',
    'ciphers',
    'key',
    'pfx',
    'servername',
    'minVersion',
    'maxVersion',
    'secureProtocol',
    'crl',
    'honorCipherOrder',
    'ecdhCurve',
    'dhparam',
    'secureOptions',
    'sessionIdContext'
];
const getSortedIndex = (array, value, compare)=>{
    let low = 0;
    let high = array.length;
    while(low < high){
        const mid = low + high >>> 1;
        /* istanbul ignore next */ if (compare(array[mid], value)) {
            // This never gets called because we use descending sort. Better to have this anyway.
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low;
};
const compareSessions = (a, b)=>{
    return a.remoteSettings.maxConcurrentStreams > b.remoteSettings.maxConcurrentStreams;
};
// See https://tools.ietf.org/html/rfc8336
const closeCoveredSessions = (where, session)=>{
    // Clients SHOULD NOT emit new requests on any connection whose Origin
    // Set is a proper subset of another connection's Origin Set, and they
    // SHOULD close it once all outstanding requests are satisfied.
    for (const coveredSession of where){
        if (// The set is a proper subset when its length is less than the other set.
        coveredSession[kOriginSet].length < session[kOriginSet].length && // And the other set includes all elements of the subset.
        coveredSession[kOriginSet].every((origin)=>session[kOriginSet].includes(origin)) && // Makes sure that the session can handle all requests from the covered session.
        coveredSession[kCurrentStreamsCount] + session[kCurrentStreamsCount] <= session.remoteSettings.maxConcurrentStreams) {
            // This allows pending requests to finish and prevents making new requests.
            gracefullyClose(coveredSession);
        }
    }
};
// This is basically inverted `closeCoveredSessions(...)`.
const closeSessionIfCovered = (where, coveredSession)=>{
    for (const session of where){
        if (coveredSession[kOriginSet].length < session[kOriginSet].length && coveredSession[kOriginSet].every((origin)=>session[kOriginSet].includes(origin)) && coveredSession[kCurrentStreamsCount] + session[kCurrentStreamsCount] <= session.remoteSettings.maxConcurrentStreams) {
            gracefullyClose(coveredSession);
        }
    }
};
const getSessions = ({ agent, isFree })=>{
    const result = {};
    // eslint-disable-next-line guard-for-in
    for(const normalizedOptions in agent.sessions){
        const sessions = agent.sessions[normalizedOptions];
        const filtered = sessions.filter((session)=>{
            const result = session[Agent.kCurrentStreamsCount] < session.remoteSettings.maxConcurrentStreams;
            return isFree ? result : !result;
        });
        if (filtered.length !== 0) {
            result[normalizedOptions] = filtered;
        }
    }
    return result;
};
const gracefullyClose = (session)=>{
    session[kGracefullyClosing] = true;
    if (session[kCurrentStreamsCount] === 0) {
        session.close();
    }
};
class Agent extends EventEmitter {
    constructor({ timeout = 60000, maxSessions = Infinity, maxFreeSessions = 10, maxCachedTlsSessions = 100 } = {}){
        super();
        // A session is considered busy when its current streams count
        // is equal to or greater than the `maxConcurrentStreams` value.
        // A session is considered free when its current streams count
        // is less than the `maxConcurrentStreams` value.
        // SESSIONS[NORMALIZED_OPTIONS] = [];
        this.sessions = {};
        // The queue for creating new sessions. It looks like this:
        // QUEUE[NORMALIZED_OPTIONS][NORMALIZED_ORIGIN] = ENTRY_FUNCTION
        //
        // The entry function has `listeners`, `completed` and `destroyed` properties.
        // `listeners` is an array of objects containing `resolve` and `reject` functions.
        // `completed` is a boolean. It's set to true after ENTRY_FUNCTION is executed.
        // `destroyed` is a boolean. If it's set to true, the session will be destroyed if hasn't connected yet.
        this.queue = {};
        // Each session will use this timeout value.
        this.timeout = timeout;
        // Max sessions in total
        this.maxSessions = maxSessions;
        // Max free sessions in total
        // TODO: decreasing `maxFreeSessions` should close some sessions
        this.maxFreeSessions = maxFreeSessions;
        this._freeSessionsCount = 0;
        this._sessionsCount = 0;
        // We don't support push streams by default.
        this.settings = {
            enablePush: false
        };
        // Reusing TLS sessions increases performance.
        this.tlsSessionCache = new QuickLRU({
            maxSize: maxCachedTlsSessions
        });
    }
    static normalizeOrigin(url, servername) {
        if (typeof url === 'string') {
            url = new URL(url);
        }
        if (servername && url.hostname !== servername) {
            url.hostname = servername;
        }
        return url.origin;
    }
    normalizeOptions(options) {
        let normalized = '';
        if (options) {
            for (const key of nameKeys){
                if (options[key]) {
                    normalized += `:${options[key]}`;
                }
            }
        }
        return normalized;
    }
    _tryToCreateNewSession(normalizedOptions, normalizedOrigin) {
        if (!(normalizedOptions in this.queue) || !(normalizedOrigin in this.queue[normalizedOptions])) {
            return;
        }
        const item = this.queue[normalizedOptions][normalizedOrigin];
        // The entry function can be run only once.
        // BUG: The session may be never created when:
        // - the first condition is false AND
        // - this function is never called with the same arguments in the future.
        if (this._sessionsCount < this.maxSessions && !item.completed) {
            item.completed = true;
            item();
        }
    }
    getSession(origin, options, listeners) {
        return new Promise((resolve, reject)=>{
            if (Array.isArray(listeners)) {
                listeners = [
                    ...listeners
                ];
                // Resolve the current promise ASAP, we're just moving the listeners.
                // They will be executed at a different time.
                resolve();
            } else {
                listeners = [
                    {
                        resolve,
                        reject
                    }
                ];
            }
            const normalizedOptions = this.normalizeOptions(options);
            const normalizedOrigin = Agent.normalizeOrigin(origin, options && options.servername);
            if (normalizedOrigin === undefined) {
                for (const { reject } of listeners){
                    reject(new TypeError('The `origin` argument needs to be a string or an URL object'));
                }
                return;
            }
            if (normalizedOptions in this.sessions) {
                const sessions = this.sessions[normalizedOptions];
                let maxConcurrentStreams = -1;
                let currentStreamsCount = -1;
                let optimalSession;
                // We could just do this.sessions[normalizedOptions].find(...) but that isn't optimal.
                // Additionally, we are looking for session which has biggest current pending streams count.
                for (const session of sessions){
                    const sessionMaxConcurrentStreams = session.remoteSettings.maxConcurrentStreams;
                    if (sessionMaxConcurrentStreams < maxConcurrentStreams) {
                        break;
                    }
                    if (session[kOriginSet].includes(normalizedOrigin)) {
                        const sessionCurrentStreamsCount = session[kCurrentStreamsCount];
                        if (sessionCurrentStreamsCount >= sessionMaxConcurrentStreams || session[kGracefullyClosing] || // Unfortunately the `close` event isn't called immediately,
                        // so `session.destroyed` is `true`, but `session.closed` is `false`.
                        session.destroyed) {
                            continue;
                        }
                        // We only need set this once.
                        if (!optimalSession) {
                            maxConcurrentStreams = sessionMaxConcurrentStreams;
                        }
                        // We're looking for the session which has biggest current pending stream count,
                        // in order to minimalize the amount of active sessions.
                        if (sessionCurrentStreamsCount > currentStreamsCount) {
                            optimalSession = session;
                            currentStreamsCount = sessionCurrentStreamsCount;
                        }
                    }
                }
                if (optimalSession) {
                    /* istanbul ignore next: safety check */ if (listeners.length !== 1) {
                        for (const { reject } of listeners){
                            const error = new Error(`Expected the length of listeners to be 1, got ${listeners.length}.\n` + 'Please report this to https://github.com/szmarczak/http2-wrapper/');
                            reject(error);
                        }
                        return;
                    }
                    listeners[0].resolve(optimalSession);
                    return;
                }
            }
            if (normalizedOptions in this.queue) {
                if (normalizedOrigin in this.queue[normalizedOptions]) {
                    // There's already an item in the queue, just attach ourselves to it.
                    this.queue[normalizedOptions][normalizedOrigin].listeners.push(...listeners);
                    // This shouldn't be executed here.
                    // See the comment inside _tryToCreateNewSession.
                    this._tryToCreateNewSession(normalizedOptions, normalizedOrigin);
                    return;
                }
            } else {
                this.queue[normalizedOptions] = {};
            }
            // The entry must be removed from the queue IMMEDIATELY when:
            // 1. the session connects successfully,
            // 2. an error occurs.
            const removeFromQueue = ()=>{
                // Our entry can be replaced. We cannot remove the new one.
                if (normalizedOptions in this.queue && this.queue[normalizedOptions][normalizedOrigin] === entry) {
                    delete this.queue[normalizedOptions][normalizedOrigin];
                    if (Object.keys(this.queue[normalizedOptions]).length === 0) {
                        delete this.queue[normalizedOptions];
                    }
                }
            };
            // The main logic is here
            const entry = ()=>{
                const name = `${normalizedOrigin}:${normalizedOptions}`;
                let receivedSettings = false;
                try {
                    const session = http2.connect(origin, {
                        createConnection: this.createConnection,
                        settings: this.settings,
                        session: this.tlsSessionCache.get(name),
                        ...options
                    });
                    session[kCurrentStreamsCount] = 0;
                    session[kGracefullyClosing] = false;
                    const isFree = ()=>session[kCurrentStreamsCount] < session.remoteSettings.maxConcurrentStreams;
                    let wasFree = true;
                    session.socket.once('session', (tlsSession)=>{
                        this.tlsSessionCache.set(name, tlsSession);
                    });
                    session.once('error', (error)=>{
                        // Listeners are empty when the session successfully connected.
                        for (const { reject } of listeners){
                            reject(error);
                        }
                        // The connection got broken, purge the cache.
                        this.tlsSessionCache.delete(name);
                    });
                    session.setTimeout(this.timeout, ()=>{
                        // Terminates all streams owned by this session.
                        // TODO: Maybe the streams should have a "Session timed out" error?
                        session.destroy();
                    });
                    session.once('close', ()=>{
                        if (receivedSettings) {
                            // 1. If it wasn't free then no need to decrease because
                            //    it has been decreased already in session.request().
                            // 2. `stream.once('close')` won't increment the count
                            //    because the session is already closed.
                            if (wasFree) {
                                this._freeSessionsCount--;
                            }
                            this._sessionsCount--;
                            // This cannot be moved to the stream logic,
                            // because there may be a session that hadn't made a single request.
                            const where = this.sessions[normalizedOptions];
                            where.splice(where.indexOf(session), 1);
                            if (where.length === 0) {
                                delete this.sessions[normalizedOptions];
                            }
                        } else {
                            // Broken connection
                            const error = new Error('Session closed without receiving a SETTINGS frame');
                            error.code = 'HTTP2WRAPPER_NOSETTINGS';
                            for (const { reject } of listeners){
                                reject(error);
                            }
                            removeFromQueue();
                        }
                        // There may be another session awaiting.
                        this._tryToCreateNewSession(normalizedOptions, normalizedOrigin);
                    });
                    // Iterates over the queue and processes listeners.
                    const processListeners = ()=>{
                        if (!(normalizedOptions in this.queue) || !isFree()) {
                            return;
                        }
                        for (const origin of session[kOriginSet]){
                            if (origin in this.queue[normalizedOptions]) {
                                const { listeners } = this.queue[normalizedOptions][origin];
                                // Prevents session overloading.
                                while(listeners.length !== 0 && isFree()){
                                    // We assume `resolve(...)` calls `request(...)` *directly*,
                                    // otherwise the session will get overloaded.
                                    listeners.shift().resolve(session);
                                }
                                const where = this.queue[normalizedOptions];
                                if (where[origin].listeners.length === 0) {
                                    delete where[origin];
                                    if (Object.keys(where).length === 0) {
                                        delete this.queue[normalizedOptions];
                                        break;
                                    }
                                }
                                // We're no longer free, no point in continuing.
                                if (!isFree()) {
                                    break;
                                }
                            }
                        }
                    };
                    // The Origin Set cannot shrink. No need to check if it suddenly became covered by another one.
                    session.on('origin', ()=>{
                        session[kOriginSet] = session.originSet;
                        if (!isFree()) {
                            // The session is full.
                            return;
                        }
                        processListeners();
                        // Close covered sessions (if possible).
                        closeCoveredSessions(this.sessions[normalizedOptions], session);
                    });
                    session.once('remoteSettings', ()=>{
                        // Fix Node.js bug preventing the process from exiting
                        session.ref();
                        session.unref();
                        this._sessionsCount++;
                        // The Agent could have been destroyed already.
                        if (entry.destroyed) {
                            const error = new Error('Agent has been destroyed');
                            for (const listener of listeners){
                                listener.reject(error);
                            }
                            session.destroy();
                            return;
                        }
                        session[kOriginSet] = session.originSet;
                        {
                            const where = this.sessions;
                            if (normalizedOptions in where) {
                                const sessions = where[normalizedOptions];
                                sessions.splice(getSortedIndex(sessions, session, compareSessions), 0, session);
                            } else {
                                where[normalizedOptions] = [
                                    session
                                ];
                            }
                        }
                        this._freeSessionsCount += 1;
                        receivedSettings = true;
                        this.emit('session', session);
                        processListeners();
                        removeFromQueue();
                        // TODO: Close last recently used (or least used?) session
                        if (session[kCurrentStreamsCount] === 0 && this._freeSessionsCount > this.maxFreeSessions) {
                            session.close();
                        }
                        // Check if we haven't managed to execute all listeners.
                        if (listeners.length !== 0) {
                            // Request for a new session with predefined listeners.
                            this.getSession(normalizedOrigin, options, listeners);
                            listeners.length = 0;
                        }
                        // `session.remoteSettings.maxConcurrentStreams` might get increased
                        session.on('remoteSettings', ()=>{
                            processListeners();
                            // In case the Origin Set changes
                            closeCoveredSessions(this.sessions[normalizedOptions], session);
                        });
                    });
                    // Shim `session.request()` in order to catch all streams
                    session[kRequest] = session.request;
                    session.request = (headers, streamOptions)=>{
                        if (session[kGracefullyClosing]) {
                            throw new Error('The session is gracefully closing. No new streams are allowed.');
                        }
                        const stream = session[kRequest](headers, streamOptions);
                        // The process won't exit until the session is closed or all requests are gone.
                        session.ref();
                        ++session[kCurrentStreamsCount];
                        if (session[kCurrentStreamsCount] === session.remoteSettings.maxConcurrentStreams) {
                            this._freeSessionsCount--;
                        }
                        stream.once('close', ()=>{
                            wasFree = isFree();
                            --session[kCurrentStreamsCount];
                            if (!session.destroyed && !session.closed) {
                                closeSessionIfCovered(this.sessions[normalizedOptions], session);
                                if (isFree() && !session.closed) {
                                    if (!wasFree) {
                                        this._freeSessionsCount++;
                                        wasFree = true;
                                    }
                                    const isEmpty = session[kCurrentStreamsCount] === 0;
                                    if (isEmpty) {
                                        session.unref();
                                    }
                                    if (isEmpty && (this._freeSessionsCount > this.maxFreeSessions || session[kGracefullyClosing])) {
                                        session.close();
                                    } else {
                                        closeCoveredSessions(this.sessions[normalizedOptions], session);
                                        processListeners();
                                    }
                                }
                            }
                        });
                        return stream;
                    };
                } catch (error) {
                    for (const listener of listeners){
                        listener.reject(error);
                    }
                    removeFromQueue();
                }
            };
            entry.listeners = listeners;
            entry.completed = false;
            entry.destroyed = false;
            this.queue[normalizedOptions][normalizedOrigin] = entry;
            this._tryToCreateNewSession(normalizedOptions, normalizedOrigin);
        });
    }
    request(origin, options, headers, streamOptions) {
        return new Promise((resolve, reject)=>{
            this.getSession(origin, options, [
                {
                    reject,
                    resolve: (session)=>{
                        try {
                            resolve(session.request(headers, streamOptions));
                        } catch (error) {
                            reject(error);
                        }
                    }
                }
            ]);
        });
    }
    createConnection(origin, options) {
        return Agent.connect(origin, options);
    }
    static connect(origin, options) {
        options.ALPNProtocols = [
            'h2'
        ];
        const port = origin.port || 443;
        const host = origin.hostname || origin.host;
        if (typeof options.servername === 'undefined') {
            options.servername = host;
        }
        return tls.connect(port, host, options);
    }
    closeFreeSessions() {
        for (const sessions of Object.values(this.sessions)){
            for (const session of sessions){
                if (session[kCurrentStreamsCount] === 0) {
                    session.close();
                }
            }
        }
    }
    destroy(reason) {
        for (const sessions of Object.values(this.sessions)){
            for (const session of sessions){
                session.destroy(reason);
            }
        }
        for (const entriesOfAuthority of Object.values(this.queue)){
            for (const entry of Object.values(entriesOfAuthority)){
                entry.destroyed = true;
            }
        }
        // New requests should NOT attach to destroyed sessions
        this.queue = {};
    }
    get freeSessions() {
        return getSessions({
            agent: this,
            isFree: true
        });
    }
    get busySessions() {
        return getSessions({
            agent: this,
            isFree: false
        });
    }
}
Agent.kCurrentStreamsCount = kCurrentStreamsCount;
Agent.kGracefullyClosing = kGracefullyClosing;
module.exports = {
    Agent,
    globalAgent: new Agent()
};
}),
"[project]/node_modules/http2-wrapper/source/auto.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const http = __turbopack_context__.r("[externals]/http [external] (http, cjs)");
const https = __turbopack_context__.r("[externals]/https [external] (https, cjs)");
const resolveALPN = __turbopack_context__.r("[project]/node_modules/resolve-alpn/index.js [app-route] (ecmascript)");
const QuickLRU = __turbopack_context__.r("[project]/node_modules/quick-lru/index.js [app-route] (ecmascript)");
const Http2ClientRequest = __turbopack_context__.r("[project]/node_modules/http2-wrapper/source/client-request.js [app-route] (ecmascript)");
const calculateServerName = __turbopack_context__.r("[project]/node_modules/http2-wrapper/source/utils/calculate-server-name.js [app-route] (ecmascript)");
const urlToOptions = __turbopack_context__.r("[project]/node_modules/http2-wrapper/source/utils/url-to-options.js [app-route] (ecmascript)");
const cache = new QuickLRU({
    maxSize: 100
});
const queue = new Map();
const installSocket = (agent, socket, options)=>{
    socket._httpMessage = {
        shouldKeepAlive: true
    };
    const onFree = ()=>{
        agent.emit('free', socket, options);
    };
    socket.on('free', onFree);
    const onClose = ()=>{
        agent.removeSocket(socket, options);
    };
    socket.on('close', onClose);
    const onRemove = ()=>{
        agent.removeSocket(socket, options);
        socket.off('close', onClose);
        socket.off('free', onFree);
        socket.off('agentRemove', onRemove);
    };
    socket.on('agentRemove', onRemove);
    agent.emit('free', socket, options);
};
const resolveProtocol = async (options)=>{
    const name = `${options.host}:${options.port}:${options.ALPNProtocols.sort()}`;
    if (!cache.has(name)) {
        if (queue.has(name)) {
            const result = await queue.get(name);
            return result.alpnProtocol;
        }
        const { path, agent } = options;
        options.path = options.socketPath;
        const resultPromise = resolveALPN(options);
        queue.set(name, resultPromise);
        try {
            const { socket, alpnProtocol } = await resultPromise;
            cache.set(name, alpnProtocol);
            options.path = path;
            if (alpnProtocol === 'h2') {
                // https://github.com/nodejs/node/issues/33343
                socket.destroy();
            } else {
                const { globalAgent } = https;
                const defaultCreateConnection = https.Agent.prototype.createConnection;
                if (agent) {
                    if (agent.createConnection === defaultCreateConnection) {
                        installSocket(agent, socket, options);
                    } else {
                        socket.destroy();
                    }
                } else if (globalAgent.createConnection === defaultCreateConnection) {
                    installSocket(globalAgent, socket, options);
                } else {
                    socket.destroy();
                }
            }
            queue.delete(name);
            return alpnProtocol;
        } catch (error) {
            queue.delete(name);
            throw error;
        }
    }
    return cache.get(name);
};
module.exports = async (input, options, callback)=>{
    if (typeof input === 'string' || input instanceof URL) {
        input = urlToOptions(new URL(input));
    }
    if (typeof options === 'function') {
        callback = options;
        options = undefined;
    }
    options = {
        ALPNProtocols: [
            'h2',
            'http/1.1'
        ],
        ...input,
        ...options,
        resolveSocket: true
    };
    if (!Array.isArray(options.ALPNProtocols) || options.ALPNProtocols.length === 0) {
        throw new Error('The `ALPNProtocols` option must be an Array with at least one entry');
    }
    options.protocol = options.protocol || 'https:';
    const isHttps = options.protocol === 'https:';
    options.host = options.hostname || options.host || 'localhost';
    options.session = options.tlsSession;
    options.servername = options.servername || calculateServerName(options);
    options.port = options.port || (isHttps ? 443 : 80);
    options._defaultAgent = isHttps ? https.globalAgent : http.globalAgent;
    const agents = options.agent;
    if (agents) {
        if (agents.addRequest) {
            throw new Error('The `options.agent` object can contain only `http`, `https` or `http2` properties');
        }
        options.agent = agents[isHttps ? 'https' : 'http'];
    }
    if (isHttps) {
        const protocol = await resolveProtocol(options);
        if (protocol === 'h2') {
            if (agents) {
                options.agent = agents.http2;
            }
            return new Http2ClientRequest(options, callback);
        }
    }
    return http.request(options, callback);
};
module.exports.protocolCache = cache;
}),
"[project]/node_modules/http2-wrapper/source/client-request.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const http2 = __turbopack_context__.r("[externals]/http2 [external] (http2, cjs)");
const { Writable } = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
const { Agent, globalAgent } = __turbopack_context__.r("[project]/node_modules/http2-wrapper/source/agent.js [app-route] (ecmascript)");
const IncomingMessage = __turbopack_context__.r("[project]/node_modules/http2-wrapper/source/incoming-message.js [app-route] (ecmascript)");
const urlToOptions = __turbopack_context__.r("[project]/node_modules/http2-wrapper/source/utils/url-to-options.js [app-route] (ecmascript)");
const proxyEvents = __turbopack_context__.r("[project]/node_modules/http2-wrapper/source/utils/proxy-events.js [app-route] (ecmascript)");
const isRequestPseudoHeader = __turbopack_context__.r("[project]/node_modules/http2-wrapper/source/utils/is-request-pseudo-header.js [app-route] (ecmascript)");
const { ERR_INVALID_ARG_TYPE, ERR_INVALID_PROTOCOL, ERR_HTTP_HEADERS_SENT, ERR_INVALID_HTTP_TOKEN, ERR_HTTP_INVALID_HEADER_VALUE, ERR_INVALID_CHAR } = __turbopack_context__.r("[project]/node_modules/http2-wrapper/source/utils/errors.js [app-route] (ecmascript)");
const { HTTP2_HEADER_STATUS, HTTP2_HEADER_METHOD, HTTP2_HEADER_PATH, HTTP2_METHOD_CONNECT } = http2.constants;
const kHeaders = Symbol('headers');
const kOrigin = Symbol('origin');
const kSession = Symbol('session');
const kOptions = Symbol('options');
const kFlushedHeaders = Symbol('flushedHeaders');
const kJobs = Symbol('jobs');
const isValidHttpToken = /^[\^`\-\w!#$%&*+.|~]+$/;
const isInvalidHeaderValue = /[^\t\u0020-\u007E\u0080-\u00FF]/;
class ClientRequest extends Writable {
    constructor(input, options, callback){
        super({
            autoDestroy: false
        });
        const hasInput = typeof input === 'string' || input instanceof URL;
        if (hasInput) {
            input = urlToOptions(input instanceof URL ? input : new URL(input));
        }
        if (typeof options === 'function' || options === undefined) {
            // (options, callback)
            callback = options;
            options = hasInput ? input : {
                ...input
            };
        } else {
            // (input, options, callback)
            options = {
                ...input,
                ...options
            };
        }
        if (options.h2session) {
            this[kSession] = options.h2session;
        } else if (options.agent === false) {
            this.agent = new Agent({
                maxFreeSessions: 0
            });
        } else if (typeof options.agent === 'undefined' || options.agent === null) {
            if (typeof options.createConnection === 'function') {
                // This is a workaround - we don't have to create the session on our own.
                this.agent = new Agent({
                    maxFreeSessions: 0
                });
                this.agent.createConnection = options.createConnection;
            } else {
                this.agent = globalAgent;
            }
        } else if (typeof options.agent.request === 'function') {
            this.agent = options.agent;
        } else {
            throw new ERR_INVALID_ARG_TYPE('options.agent', [
                'Agent-like Object',
                'undefined',
                'false'
            ], options.agent);
        }
        if (options.protocol && options.protocol !== 'https:') {
            throw new ERR_INVALID_PROTOCOL(options.protocol, 'https:');
        }
        const port = options.port || options.defaultPort || this.agent && this.agent.defaultPort || 443;
        const host = options.hostname || options.host || 'localhost';
        // Don't enforce the origin via options. It may be changed in an Agent.
        delete options.hostname;
        delete options.host;
        delete options.port;
        const { timeout } = options;
        options.timeout = undefined;
        this[kHeaders] = Object.create(null);
        this[kJobs] = [];
        this.socket = null;
        this.connection = null;
        this.method = options.method || 'GET';
        this.path = options.path;
        this.res = null;
        this.aborted = false;
        this.reusedSocket = false;
        if (options.headers) {
            for (const [header, value] of Object.entries(options.headers)){
                this.setHeader(header, value);
            }
        }
        if (options.auth && !('authorization' in this[kHeaders])) {
            this[kHeaders].authorization = 'Basic ' + Buffer.from(options.auth).toString('base64');
        }
        options.session = options.tlsSession;
        options.path = options.socketPath;
        this[kOptions] = options;
        // Clients that generate HTTP/2 requests directly SHOULD use the :authority pseudo-header field instead of the Host header field.
        if (port === 443) {
            this[kOrigin] = `https://${host}`;
            if (!(':authority' in this[kHeaders])) {
                this[kHeaders][':authority'] = host;
            }
        } else {
            this[kOrigin] = `https://${host}:${port}`;
            if (!(':authority' in this[kHeaders])) {
                this[kHeaders][':authority'] = `${host}:${port}`;
            }
        }
        if (timeout) {
            this.setTimeout(timeout);
        }
        if (callback) {
            this.once('response', callback);
        }
        this[kFlushedHeaders] = false;
    }
    get method() {
        return this[kHeaders][HTTP2_HEADER_METHOD];
    }
    set method(value) {
        if (value) {
            this[kHeaders][HTTP2_HEADER_METHOD] = value.toUpperCase();
        }
    }
    get path() {
        return this[kHeaders][HTTP2_HEADER_PATH];
    }
    set path(value) {
        if (value) {
            this[kHeaders][HTTP2_HEADER_PATH] = value;
        }
    }
    get _mustNotHaveABody() {
        return this.method === 'GET' || this.method === 'HEAD' || this.method === 'DELETE';
    }
    _write(chunk, encoding, callback) {
        // https://github.com/nodejs/node/blob/654df09ae0c5e17d1b52a900a545f0664d8c7627/lib/internal/http2/util.js#L148-L156
        if (this._mustNotHaveABody) {
            callback(new Error('The GET, HEAD and DELETE methods must NOT have a body'));
            /* istanbul ignore next: Node.js 12 throws directly */ return;
        }
        this.flushHeaders();
        const callWrite = ()=>this._request.write(chunk, encoding, callback);
        if (this._request) {
            callWrite();
        } else {
            this[kJobs].push(callWrite);
        }
    }
    _final(callback) {
        if (this.destroyed) {
            return;
        }
        this.flushHeaders();
        const callEnd = ()=>{
            // For GET, HEAD and DELETE
            if (this._mustNotHaveABody) {
                callback();
                return;
            }
            this._request.end(callback);
        };
        if (this._request) {
            callEnd();
        } else {
            this[kJobs].push(callEnd);
        }
    }
    abort() {
        if (this.res && this.res.complete) {
            return;
        }
        if (!this.aborted) {
            process.nextTick(()=>this.emit('abort'));
        }
        this.aborted = true;
        this.destroy();
    }
    _destroy(error, callback) {
        if (this.res) {
            this.res._dump();
        }
        if (this._request) {
            this._request.destroy();
        }
        callback(error);
    }
    async flushHeaders() {
        if (this[kFlushedHeaders] || this.destroyed) {
            return;
        }
        this[kFlushedHeaders] = true;
        const isConnectMethod = this.method === HTTP2_METHOD_CONNECT;
        // The real magic is here
        const onStream = (stream)=>{
            this._request = stream;
            if (this.destroyed) {
                stream.destroy();
                return;
            }
            // Forwards `timeout`, `continue`, `close` and `error` events to this instance.
            if (!isConnectMethod) {
                proxyEvents(stream, this, [
                    'timeout',
                    'continue',
                    'close',
                    'error'
                ]);
            }
            // Wait for the `finish` event. We don't want to emit the `response` event
            // before `request.end()` is called.
            const waitForEnd = (fn)=>{
                return (...args)=>{
                    if (!this.writable && !this.destroyed) {
                        fn(...args);
                    } else {
                        this.once('finish', ()=>{
                            fn(...args);
                        });
                    }
                };
            };
            // This event tells we are ready to listen for the data.
            stream.once('response', waitForEnd((headers, flags, rawHeaders)=>{
                // If we were to emit raw request stream, it would be as fast as the native approach.
                // Note that wrapping the raw stream in a Proxy instance won't improve the performance (already tested it).
                const response = new IncomingMessage(this.socket, stream.readableHighWaterMark);
                this.res = response;
                response.req = this;
                response.statusCode = headers[HTTP2_HEADER_STATUS];
                response.headers = headers;
                response.rawHeaders = rawHeaders;
                response.once('end', ()=>{
                    if (this.aborted) {
                        response.aborted = true;
                        response.emit('aborted');
                    } else {
                        response.complete = true;
                        // Has no effect, just be consistent with the Node.js behavior
                        response.socket = null;
                        response.connection = null;
                    }
                });
                if (isConnectMethod) {
                    response.upgrade = true;
                    // The HTTP1 API says the socket is detached here,
                    // but we can't do that so we pass the original HTTP2 request.
                    if (this.emit('connect', response, stream, Buffer.alloc(0))) {
                        this.emit('close');
                    } else {
                        // No listeners attached, destroy the original request.
                        stream.destroy();
                    }
                } else {
                    // Forwards data
                    stream.on('data', (chunk)=>{
                        if (!response._dumped && !response.push(chunk)) {
                            stream.pause();
                        }
                    });
                    stream.once('end', ()=>{
                        response.push(null);
                    });
                    if (!this.emit('response', response)) {
                        // No listeners attached, dump the response.
                        response._dump();
                    }
                }
            }));
            // Emits `information` event
            stream.once('headers', waitForEnd((headers)=>this.emit('information', {
                    statusCode: headers[HTTP2_HEADER_STATUS]
                })));
            stream.once('trailers', waitForEnd((trailers, flags, rawTrailers)=>{
                const { res } = this;
                // Assigns trailers to the response object.
                res.trailers = trailers;
                res.rawTrailers = rawTrailers;
            }));
            const { socket } = stream.session;
            this.socket = socket;
            this.connection = socket;
            for (const job of this[kJobs]){
                job();
            }
            this.emit('socket', this.socket);
        };
        // Makes a HTTP2 request
        if (this[kSession]) {
            try {
                onStream(this[kSession].request(this[kHeaders]));
            } catch (error) {
                this.emit('error', error);
            }
        } else {
            this.reusedSocket = true;
            try {
                onStream(await this.agent.request(this[kOrigin], this[kOptions], this[kHeaders]));
            } catch (error) {
                this.emit('error', error);
            }
        }
    }
    getHeader(name) {
        if (typeof name !== 'string') {
            throw new ERR_INVALID_ARG_TYPE('name', 'string', name);
        }
        return this[kHeaders][name.toLowerCase()];
    }
    get headersSent() {
        return this[kFlushedHeaders];
    }
    removeHeader(name) {
        if (typeof name !== 'string') {
            throw new ERR_INVALID_ARG_TYPE('name', 'string', name);
        }
        if (this.headersSent) {
            throw new ERR_HTTP_HEADERS_SENT('remove');
        }
        delete this[kHeaders][name.toLowerCase()];
    }
    setHeader(name, value) {
        if (this.headersSent) {
            throw new ERR_HTTP_HEADERS_SENT('set');
        }
        if (typeof name !== 'string' || !isValidHttpToken.test(name) && !isRequestPseudoHeader(name)) {
            throw new ERR_INVALID_HTTP_TOKEN('Header name', name);
        }
        if (typeof value === 'undefined') {
            throw new ERR_HTTP_INVALID_HEADER_VALUE(value, name);
        }
        if (isInvalidHeaderValue.test(value)) {
            throw new ERR_INVALID_CHAR('header content', name);
        }
        this[kHeaders][name.toLowerCase()] = value;
    }
    setNoDelay() {
    // HTTP2 sockets cannot be malformed, do nothing.
    }
    setSocketKeepAlive() {
    // HTTP2 sockets cannot be malformed, do nothing.
    }
    setTimeout(ms, callback) {
        const applyTimeout = ()=>this._request.setTimeout(ms, callback);
        if (this._request) {
            applyTimeout();
        } else {
            this[kJobs].push(applyTimeout);
        }
        return this;
    }
    get maxHeadersCount() {
        if (!this.destroyed && this._request) {
            return this._request.session.localSettings.maxHeaderListSize;
        }
        return undefined;
    }
    set maxHeadersCount(_value) {
    // Updating HTTP2 settings would affect all requests, do nothing.
    }
}
module.exports = ClientRequest;
}),
"[project]/node_modules/http2-wrapper/source/incoming-message.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { Readable } = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
class IncomingMessage extends Readable {
    constructor(socket, highWaterMark){
        super({
            highWaterMark,
            autoDestroy: false
        });
        this.statusCode = null;
        this.statusMessage = '';
        this.httpVersion = '2.0';
        this.httpVersionMajor = 2;
        this.httpVersionMinor = 0;
        this.headers = {};
        this.trailers = {};
        this.req = null;
        this.aborted = false;
        this.complete = false;
        this.upgrade = null;
        this.rawHeaders = [];
        this.rawTrailers = [];
        this.socket = socket;
        this.connection = socket;
        this._dumped = false;
    }
    _destroy(error) {
        this.req._request.destroy(error);
    }
    setTimeout(ms, callback) {
        this.req.setTimeout(ms, callback);
        return this;
    }
    _dump() {
        if (!this._dumped) {
            this._dumped = true;
            this.removeAllListeners('data');
            this.resume();
        }
    }
    _read() {
        if (this.req) {
            this.req._request.resume();
        }
    }
}
module.exports = IncomingMessage;
}),
"[project]/node_modules/http2-wrapper/source/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const http2 = __turbopack_context__.r("[externals]/http2 [external] (http2, cjs)");
const agent = __turbopack_context__.r("[project]/node_modules/http2-wrapper/source/agent.js [app-route] (ecmascript)");
const ClientRequest = __turbopack_context__.r("[project]/node_modules/http2-wrapper/source/client-request.js [app-route] (ecmascript)");
const IncomingMessage = __turbopack_context__.r("[project]/node_modules/http2-wrapper/source/incoming-message.js [app-route] (ecmascript)");
const auto = __turbopack_context__.r("[project]/node_modules/http2-wrapper/source/auto.js [app-route] (ecmascript)");
const request = (url, options, callback)=>{
    return new ClientRequest(url, options, callback);
};
const get = (url, options, callback)=>{
    // eslint-disable-next-line unicorn/prevent-abbreviations
    const req = new ClientRequest(url, options, callback);
    req.end();
    return req;
};
module.exports = {
    ...http2,
    ClientRequest,
    IncomingMessage,
    ...agent,
    request,
    get,
    auto
};
}),
"[project]/node_modules/http2-wrapper/source/utils/calculate-server-name.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const net = __turbopack_context__.r("[externals]/net [external] (net, cjs)");
/* istanbul ignore file: https://github.com/nodejs/node/blob/v13.0.1/lib/_http_agent.js */ module.exports = (options)=>{
    let servername = options.host;
    const hostHeader = options.headers && options.headers.host;
    if (hostHeader) {
        if (hostHeader.startsWith('[')) {
            const index = hostHeader.indexOf(']');
            if (index === -1) {
                servername = hostHeader;
            } else {
                servername = hostHeader.slice(1, -1);
            }
        } else {
            servername = hostHeader.split(':', 1)[0];
        }
    }
    if (net.isIP(servername)) {
        return '';
    }
    return servername;
};
}),
"[project]/node_modules/http2-wrapper/source/utils/errors.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* istanbul ignore file: https://github.com/nodejs/node/blob/master/lib/internal/errors.js */ const makeError = (Base, key, getMessage)=>{
    module.exports[key] = class NodeError extends Base {
        constructor(...args){
            super(typeof getMessage === 'string' ? getMessage : getMessage(args));
            this.name = `${super.name} [${key}]`;
            this.code = key;
        }
    };
};
makeError(TypeError, 'ERR_INVALID_ARG_TYPE', (args)=>{
    const type = args[0].includes('.') ? 'property' : 'argument';
    let valid = args[1];
    const isManyTypes = Array.isArray(valid);
    if (isManyTypes) {
        valid = `${valid.slice(0, -1).join(', ')} or ${valid.slice(-1)}`;
    }
    return `The "${args[0]}" ${type} must be ${isManyTypes ? 'one of' : 'of'} type ${valid}. Received ${typeof args[2]}`;
});
makeError(TypeError, 'ERR_INVALID_PROTOCOL', (args)=>{
    return `Protocol "${args[0]}" not supported. Expected "${args[1]}"`;
});
makeError(Error, 'ERR_HTTP_HEADERS_SENT', (args)=>{
    return `Cannot ${args[0]} headers after they are sent to the client`;
});
makeError(TypeError, 'ERR_INVALID_HTTP_TOKEN', (args)=>{
    return `${args[0]} must be a valid HTTP token [${args[1]}]`;
});
makeError(TypeError, 'ERR_HTTP_INVALID_HEADER_VALUE', (args)=>{
    return `Invalid value "${args[0]} for header "${args[1]}"`;
});
makeError(TypeError, 'ERR_INVALID_CHAR', (args)=>{
    return `Invalid character in ${args[0]} [${args[1]}]`;
});
}),
"[project]/node_modules/http2-wrapper/source/utils/is-request-pseudo-header.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = (header)=>{
    switch(header){
        case ':method':
        case ':scheme':
        case ':authority':
        case ':path':
            return true;
        default:
            return false;
    }
};
}),
"[project]/node_modules/http2-wrapper/source/utils/proxy-events.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = (from, to, events)=>{
    for (const event of events){
        from.on(event, (...args)=>to.emit(event, ...args));
    }
};
}),
"[project]/node_modules/http2-wrapper/source/utils/url-to-options.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* istanbul ignore file: https://github.com/nodejs/node/blob/a91293d4d9ab403046ab5eb022332e4e3d249bd3/lib/internal/url.js#L1257 */ module.exports = (url)=>{
    const options = {
        protocol: url.protocol,
        hostname: typeof url.hostname === 'string' && url.hostname.startsWith('[') ? url.hostname.slice(1, -1) : url.hostname,
        host: url.host,
        hash: url.hash,
        search: url.search,
        pathname: url.pathname,
        href: url.href,
        path: `${url.pathname || ''}${url.search || ''}`
    };
    if (typeof url.port === 'string' && url.port.length !== 0) {
        options.port = Number(url.port);
    }
    if (url.username || url.password) {
        options.auth = `${url.username || ''}:${url.password || ''}`;
    }
    return options;
};
}),
"[project]/node_modules/jsonwebtoken/decode.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var jws = __turbopack_context__.r("[project]/node_modules/jws/index.js [app-route] (ecmascript)");
module.exports = function(jwt, options) {
    options = options || {};
    var decoded = jws.decode(jwt, options);
    if (!decoded) {
        return null;
    }
    var payload = decoded.payload;
    //try parse the payload
    if (typeof payload === 'string') {
        try {
            var obj = JSON.parse(payload);
            if (obj !== null && typeof obj === 'object') {
                payload = obj;
            }
        } catch (e) {}
    }
    //return header if `complete` option is enabled.  header includes claims
    //such as `kid` and `alg` used to select the key within a JWKS needed to
    //verify the signature
    if (options.complete === true) {
        return {
            header: decoded.header,
            payload: payload,
            signature: decoded.signature
        };
    }
    return payload;
};
}),
"[project]/node_modules/jsonwebtoken/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    decode: __turbopack_context__.r("[project]/node_modules/jsonwebtoken/decode.js [app-route] (ecmascript)"),
    verify: __turbopack_context__.r("[project]/node_modules/jsonwebtoken/verify.js [app-route] (ecmascript)"),
    sign: __turbopack_context__.r("[project]/node_modules/jsonwebtoken/sign.js [app-route] (ecmascript)"),
    JsonWebTokenError: __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/JsonWebTokenError.js [app-route] (ecmascript)"),
    NotBeforeError: __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/NotBeforeError.js [app-route] (ecmascript)"),
    TokenExpiredError: __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/TokenExpiredError.js [app-route] (ecmascript)")
};
}),
"[project]/node_modules/jsonwebtoken/lib/JsonWebTokenError.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var JsonWebTokenError = function(message, error) {
    Error.call(this, message);
    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
    }
    this.name = 'JsonWebTokenError';
    this.message = message;
    if (error) this.inner = error;
};
JsonWebTokenError.prototype = Object.create(Error.prototype);
JsonWebTokenError.prototype.constructor = JsonWebTokenError;
module.exports = JsonWebTokenError;
}),
"[project]/node_modules/jsonwebtoken/lib/NotBeforeError.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var JsonWebTokenError = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/JsonWebTokenError.js [app-route] (ecmascript)");
var NotBeforeError = function(message, date) {
    JsonWebTokenError.call(this, message);
    this.name = 'NotBeforeError';
    this.date = date;
};
NotBeforeError.prototype = Object.create(JsonWebTokenError.prototype);
NotBeforeError.prototype.constructor = NotBeforeError;
module.exports = NotBeforeError;
}),
"[project]/node_modules/jsonwebtoken/lib/TokenExpiredError.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var JsonWebTokenError = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/JsonWebTokenError.js [app-route] (ecmascript)");
var TokenExpiredError = function(message, expiredAt) {
    JsonWebTokenError.call(this, message);
    this.name = 'TokenExpiredError';
    this.expiredAt = expiredAt;
};
TokenExpiredError.prototype = Object.create(JsonWebTokenError.prototype);
TokenExpiredError.prototype.constructor = TokenExpiredError;
module.exports = TokenExpiredError;
}),
"[project]/node_modules/jsonwebtoken/lib/asymmetricKeyDetailsSupported.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const semver = __turbopack_context__.r("[project]/node_modules/semver/index.js [app-route] (ecmascript)");
module.exports = semver.satisfies(process.version, '>=15.7.0');
}),
"[project]/node_modules/jsonwebtoken/lib/psSupported.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var semver = __turbopack_context__.r("[project]/node_modules/semver/index.js [app-route] (ecmascript)");
module.exports = semver.satisfies(process.version, '^6.12.0 || >=8.0.0');
}),
"[project]/node_modules/jsonwebtoken/lib/rsaPssKeyDetailsSupported.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const semver = __turbopack_context__.r("[project]/node_modules/semver/index.js [app-route] (ecmascript)");
module.exports = semver.satisfies(process.version, '>=16.9.0');
}),
"[project]/node_modules/jsonwebtoken/lib/timespan.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var ms = __turbopack_context__.r("[project]/node_modules/ms/index.js [app-route] (ecmascript)");
module.exports = function(time, iat) {
    var timestamp = iat || Math.floor(Date.now() / 1000);
    if (typeof time === 'string') {
        var milliseconds = ms(time);
        if (typeof milliseconds === 'undefined') {
            return;
        }
        return Math.floor(timestamp + milliseconds / 1000);
    } else if (typeof time === 'number') {
        return timestamp + time;
    } else {
        return;
    }
};
}),
"[project]/node_modules/jsonwebtoken/lib/validateAsymmetricKey.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const ASYMMETRIC_KEY_DETAILS_SUPPORTED = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/asymmetricKeyDetailsSupported.js [app-route] (ecmascript)");
const RSA_PSS_KEY_DETAILS_SUPPORTED = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/rsaPssKeyDetailsSupported.js [app-route] (ecmascript)");
const allowedAlgorithmsForKeys = {
    'ec': [
        'ES256',
        'ES384',
        'ES512'
    ],
    'rsa': [
        'RS256',
        'PS256',
        'RS384',
        'PS384',
        'RS512',
        'PS512'
    ],
    'rsa-pss': [
        'PS256',
        'PS384',
        'PS512'
    ]
};
const allowedCurves = {
    ES256: 'prime256v1',
    ES384: 'secp384r1',
    ES512: 'secp521r1'
};
module.exports = function(algorithm, key) {
    if (!algorithm || !key) return;
    const keyType = key.asymmetricKeyType;
    if (!keyType) return;
    const allowedAlgorithms = allowedAlgorithmsForKeys[keyType];
    if (!allowedAlgorithms) {
        throw new Error(`Unknown key type "${keyType}".`);
    }
    if (!allowedAlgorithms.includes(algorithm)) {
        throw new Error(`"alg" parameter for "${keyType}" key type must be one of: ${allowedAlgorithms.join(', ')}.`);
    }
    /*
   * Ignore the next block from test coverage because it gets executed
   * conditionally depending on the Node version. Not ignoring it would
   * prevent us from reaching the target % of coverage for versions of
   * Node under 15.7.0.
   */ /* istanbul ignore next */ if (ASYMMETRIC_KEY_DETAILS_SUPPORTED) {
        switch(keyType){
            case 'ec':
                const keyCurve = key.asymmetricKeyDetails.namedCurve;
                const allowedCurve = allowedCurves[algorithm];
                if (keyCurve !== allowedCurve) {
                    throw new Error(`"alg" parameter "${algorithm}" requires curve "${allowedCurve}".`);
                }
                break;
            case 'rsa-pss':
                if (RSA_PSS_KEY_DETAILS_SUPPORTED) {
                    const length = parseInt(algorithm.slice(-3), 10);
                    const { hashAlgorithm, mgf1HashAlgorithm, saltLength } = key.asymmetricKeyDetails;
                    if (hashAlgorithm !== `sha${length}` || mgf1HashAlgorithm !== hashAlgorithm) {
                        throw new Error(`Invalid key for this operation, its RSA-PSS parameters do not meet the requirements of "alg" ${algorithm}.`);
                    }
                    if (saltLength !== undefined && saltLength > length >> 3) {
                        throw new Error(`Invalid key for this operation, its RSA-PSS parameter saltLength does not meet the requirements of "alg" ${algorithm}.`);
                    }
                }
                break;
        }
    }
};
}),
"[project]/node_modules/jsonwebtoken/sign.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const timespan = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/timespan.js [app-route] (ecmascript)");
const PS_SUPPORTED = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/psSupported.js [app-route] (ecmascript)");
const validateAsymmetricKey = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/validateAsymmetricKey.js [app-route] (ecmascript)");
const jws = __turbopack_context__.r("[project]/node_modules/jws/index.js [app-route] (ecmascript)");
const includes = __turbopack_context__.r("[project]/node_modules/lodash.includes/index.js [app-route] (ecmascript)");
const isBoolean = __turbopack_context__.r("[project]/node_modules/lodash.isboolean/index.js [app-route] (ecmascript)");
const isInteger = __turbopack_context__.r("[project]/node_modules/lodash.isinteger/index.js [app-route] (ecmascript)");
const isNumber = __turbopack_context__.r("[project]/node_modules/lodash.isnumber/index.js [app-route] (ecmascript)");
const isPlainObject = __turbopack_context__.r("[project]/node_modules/lodash.isplainobject/index.js [app-route] (ecmascript)");
const isString = __turbopack_context__.r("[project]/node_modules/lodash.isstring/index.js [app-route] (ecmascript)");
const once = __turbopack_context__.r("[project]/node_modules/lodash.once/index.js [app-route] (ecmascript)");
const { KeyObject, createSecretKey, createPrivateKey } = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
const SUPPORTED_ALGS = [
    'RS256',
    'RS384',
    'RS512',
    'ES256',
    'ES384',
    'ES512',
    'HS256',
    'HS384',
    'HS512',
    'none'
];
if (PS_SUPPORTED) {
    SUPPORTED_ALGS.splice(3, 0, 'PS256', 'PS384', 'PS512');
}
const sign_options_schema = {
    expiresIn: {
        isValid: function(value) {
            return isInteger(value) || isString(value) && value;
        },
        message: '"expiresIn" should be a number of seconds or string representing a timespan'
    },
    notBefore: {
        isValid: function(value) {
            return isInteger(value) || isString(value) && value;
        },
        message: '"notBefore" should be a number of seconds or string representing a timespan'
    },
    audience: {
        isValid: function(value) {
            return isString(value) || Array.isArray(value);
        },
        message: '"audience" must be a string or array'
    },
    algorithm: {
        isValid: includes.bind(null, SUPPORTED_ALGS),
        message: '"algorithm" must be a valid string enum value'
    },
    header: {
        isValid: isPlainObject,
        message: '"header" must be an object'
    },
    encoding: {
        isValid: isString,
        message: '"encoding" must be a string'
    },
    issuer: {
        isValid: isString,
        message: '"issuer" must be a string'
    },
    subject: {
        isValid: isString,
        message: '"subject" must be a string'
    },
    jwtid: {
        isValid: isString,
        message: '"jwtid" must be a string'
    },
    noTimestamp: {
        isValid: isBoolean,
        message: '"noTimestamp" must be a boolean'
    },
    keyid: {
        isValid: isString,
        message: '"keyid" must be a string'
    },
    mutatePayload: {
        isValid: isBoolean,
        message: '"mutatePayload" must be a boolean'
    },
    allowInsecureKeySizes: {
        isValid: isBoolean,
        message: '"allowInsecureKeySizes" must be a boolean'
    },
    allowInvalidAsymmetricKeyTypes: {
        isValid: isBoolean,
        message: '"allowInvalidAsymmetricKeyTypes" must be a boolean'
    }
};
const registered_claims_schema = {
    iat: {
        isValid: isNumber,
        message: '"iat" should be a number of seconds'
    },
    exp: {
        isValid: isNumber,
        message: '"exp" should be a number of seconds'
    },
    nbf: {
        isValid: isNumber,
        message: '"nbf" should be a number of seconds'
    }
};
function validate(schema, allowUnknown, object, parameterName) {
    if (!isPlainObject(object)) {
        throw new Error('Expected "' + parameterName + '" to be a plain object.');
    }
    Object.keys(object).forEach(function(key) {
        const validator = schema[key];
        if (!validator) {
            if (!allowUnknown) {
                throw new Error('"' + key + '" is not allowed in "' + parameterName + '"');
            }
            return;
        }
        if (!validator.isValid(object[key])) {
            throw new Error(validator.message);
        }
    });
}
function validateOptions(options) {
    return validate(sign_options_schema, false, options, 'options');
}
function validatePayload(payload) {
    return validate(registered_claims_schema, true, payload, 'payload');
}
const options_to_payload = {
    'audience': 'aud',
    'issuer': 'iss',
    'subject': 'sub',
    'jwtid': 'jti'
};
const options_for_objects = [
    'expiresIn',
    'notBefore',
    'noTimestamp',
    'audience',
    'issuer',
    'subject',
    'jwtid'
];
module.exports = function(payload, secretOrPrivateKey, options, callback) {
    if (typeof options === 'function') {
        callback = options;
        options = {};
    } else {
        options = options || {};
    }
    const isObjectPayload = typeof payload === 'object' && !Buffer.isBuffer(payload);
    const header = Object.assign({
        alg: options.algorithm || 'HS256',
        typ: isObjectPayload ? 'JWT' : undefined,
        kid: options.keyid
    }, options.header);
    function failure(err) {
        if (callback) {
            return callback(err);
        }
        throw err;
    }
    if (!secretOrPrivateKey && options.algorithm !== 'none') {
        return failure(new Error('secretOrPrivateKey must have a value'));
    }
    if (secretOrPrivateKey != null && !(secretOrPrivateKey instanceof KeyObject)) {
        try {
            secretOrPrivateKey = createPrivateKey(secretOrPrivateKey);
        } catch (_) {
            try {
                secretOrPrivateKey = createSecretKey(typeof secretOrPrivateKey === 'string' ? Buffer.from(secretOrPrivateKey) : secretOrPrivateKey);
            } catch (_) {
                return failure(new Error('secretOrPrivateKey is not valid key material'));
            }
        }
    }
    if (header.alg.startsWith('HS') && secretOrPrivateKey.type !== 'secret') {
        return failure(new Error(`secretOrPrivateKey must be a symmetric key when using ${header.alg}`));
    } else if (/^(?:RS|PS|ES)/.test(header.alg)) {
        if (secretOrPrivateKey.type !== 'private') {
            return failure(new Error(`secretOrPrivateKey must be an asymmetric key when using ${header.alg}`));
        }
        if (!options.allowInsecureKeySizes && !header.alg.startsWith('ES') && secretOrPrivateKey.asymmetricKeyDetails !== undefined && //KeyObject.asymmetricKeyDetails is supported in Node 15+
        secretOrPrivateKey.asymmetricKeyDetails.modulusLength < 2048) {
            return failure(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header.alg}`));
        }
    }
    if (typeof payload === 'undefined') {
        return failure(new Error('payload is required'));
    } else if (isObjectPayload) {
        try {
            validatePayload(payload);
        } catch (error) {
            return failure(error);
        }
        if (!options.mutatePayload) {
            payload = Object.assign({}, payload);
        }
    } else {
        const invalid_options = options_for_objects.filter(function(opt) {
            return typeof options[opt] !== 'undefined';
        });
        if (invalid_options.length > 0) {
            return failure(new Error('invalid ' + invalid_options.join(',') + ' option for ' + typeof payload + ' payload'));
        }
    }
    if (typeof payload.exp !== 'undefined' && typeof options.expiresIn !== 'undefined') {
        return failure(new Error('Bad "options.expiresIn" option the payload already has an "exp" property.'));
    }
    if (typeof payload.nbf !== 'undefined' && typeof options.notBefore !== 'undefined') {
        return failure(new Error('Bad "options.notBefore" option the payload already has an "nbf" property.'));
    }
    try {
        validateOptions(options);
    } catch (error) {
        return failure(error);
    }
    if (!options.allowInvalidAsymmetricKeyTypes) {
        try {
            validateAsymmetricKey(header.alg, secretOrPrivateKey);
        } catch (error) {
            return failure(error);
        }
    }
    const timestamp = payload.iat || Math.floor(Date.now() / 1000);
    if (options.noTimestamp) {
        delete payload.iat;
    } else if (isObjectPayload) {
        payload.iat = timestamp;
    }
    if (typeof options.notBefore !== 'undefined') {
        try {
            payload.nbf = timespan(options.notBefore, timestamp);
        } catch (err) {
            return failure(err);
        }
        if (typeof payload.nbf === 'undefined') {
            return failure(new Error('"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
        }
    }
    if (typeof options.expiresIn !== 'undefined' && typeof payload === 'object') {
        try {
            payload.exp = timespan(options.expiresIn, timestamp);
        } catch (err) {
            return failure(err);
        }
        if (typeof payload.exp === 'undefined') {
            return failure(new Error('"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
        }
    }
    Object.keys(options_to_payload).forEach(function(key) {
        const claim = options_to_payload[key];
        if (typeof options[key] !== 'undefined') {
            if (typeof payload[claim] !== 'undefined') {
                return failure(new Error('Bad "options.' + key + '" option. The payload already has an "' + claim + '" property.'));
            }
            payload[claim] = options[key];
        }
    });
    const encoding = options.encoding || 'utf8';
    if (typeof callback === 'function') {
        callback = callback && once(callback);
        jws.createSign({
            header: header,
            privateKey: secretOrPrivateKey,
            payload: payload,
            encoding: encoding
        }).once('error', callback).once('done', function(signature) {
            // TODO: Remove in favor of the modulus length check before signing once node 15+ is the minimum supported version
            if (!options.allowInsecureKeySizes && /^(?:RS|PS)/.test(header.alg) && signature.length < 256) {
                return callback(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header.alg}`));
            }
            callback(null, signature);
        });
    } else {
        let signature = jws.sign({
            header: header,
            payload: payload,
            secret: secretOrPrivateKey,
            encoding: encoding
        });
        // TODO: Remove in favor of the modulus length check before signing once node 15+ is the minimum supported version
        if (!options.allowInsecureKeySizes && /^(?:RS|PS)/.test(header.alg) && signature.length < 256) {
            throw new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header.alg}`);
        }
        return signature;
    }
};
}),
"[project]/node_modules/jsonwebtoken/verify.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const JsonWebTokenError = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/JsonWebTokenError.js [app-route] (ecmascript)");
const NotBeforeError = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/NotBeforeError.js [app-route] (ecmascript)");
const TokenExpiredError = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/TokenExpiredError.js [app-route] (ecmascript)");
const decode = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/decode.js [app-route] (ecmascript)");
const timespan = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/timespan.js [app-route] (ecmascript)");
const validateAsymmetricKey = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/validateAsymmetricKey.js [app-route] (ecmascript)");
const PS_SUPPORTED = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/psSupported.js [app-route] (ecmascript)");
const jws = __turbopack_context__.r("[project]/node_modules/jws/index.js [app-route] (ecmascript)");
const { KeyObject, createSecretKey, createPublicKey } = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
const PUB_KEY_ALGS = [
    'RS256',
    'RS384',
    'RS512'
];
const EC_KEY_ALGS = [
    'ES256',
    'ES384',
    'ES512'
];
const RSA_KEY_ALGS = [
    'RS256',
    'RS384',
    'RS512'
];
const HS_ALGS = [
    'HS256',
    'HS384',
    'HS512'
];
if (PS_SUPPORTED) {
    PUB_KEY_ALGS.splice(PUB_KEY_ALGS.length, 0, 'PS256', 'PS384', 'PS512');
    RSA_KEY_ALGS.splice(RSA_KEY_ALGS.length, 0, 'PS256', 'PS384', 'PS512');
}
module.exports = function(jwtString, secretOrPublicKey, options, callback) {
    if (typeof options === 'function' && !callback) {
        callback = options;
        options = {};
    }
    if (!options) {
        options = {};
    }
    //clone this object since we are going to mutate it.
    options = Object.assign({}, options);
    let done;
    if (callback) {
        done = callback;
    } else {
        done = function(err, data) {
            if (err) throw err;
            return data;
        };
    }
    if (options.clockTimestamp && typeof options.clockTimestamp !== 'number') {
        return done(new JsonWebTokenError('clockTimestamp must be a number'));
    }
    if (options.nonce !== undefined && (typeof options.nonce !== 'string' || options.nonce.trim() === '')) {
        return done(new JsonWebTokenError('nonce must be a non-empty string'));
    }
    if (options.allowInvalidAsymmetricKeyTypes !== undefined && typeof options.allowInvalidAsymmetricKeyTypes !== 'boolean') {
        return done(new JsonWebTokenError('allowInvalidAsymmetricKeyTypes must be a boolean'));
    }
    const clockTimestamp = options.clockTimestamp || Math.floor(Date.now() / 1000);
    if (!jwtString) {
        return done(new JsonWebTokenError('jwt must be provided'));
    }
    if (typeof jwtString !== 'string') {
        return done(new JsonWebTokenError('jwt must be a string'));
    }
    const parts = jwtString.split('.');
    if (parts.length !== 3) {
        return done(new JsonWebTokenError('jwt malformed'));
    }
    let decodedToken;
    try {
        decodedToken = decode(jwtString, {
            complete: true
        });
    } catch (err) {
        return done(err);
    }
    if (!decodedToken) {
        return done(new JsonWebTokenError('invalid token'));
    }
    const header = decodedToken.header;
    let getSecret;
    if (typeof secretOrPublicKey === 'function') {
        if (!callback) {
            return done(new JsonWebTokenError('verify must be called asynchronous if secret or public key is provided as a callback'));
        }
        getSecret = secretOrPublicKey;
    } else {
        getSecret = function(header, secretCallback) {
            return secretCallback(null, secretOrPublicKey);
        };
    }
    return getSecret(header, function(err, secretOrPublicKey) {
        if (err) {
            return done(new JsonWebTokenError('error in secret or public key callback: ' + err.message));
        }
        const hasSignature = parts[2].trim() !== '';
        if (!hasSignature && secretOrPublicKey) {
            return done(new JsonWebTokenError('jwt signature is required'));
        }
        if (hasSignature && !secretOrPublicKey) {
            return done(new JsonWebTokenError('secret or public key must be provided'));
        }
        if (!hasSignature && !options.algorithms) {
            return done(new JsonWebTokenError('please specify "none" in "algorithms" to verify unsigned tokens'));
        }
        if (secretOrPublicKey != null && !(secretOrPublicKey instanceof KeyObject)) {
            try {
                secretOrPublicKey = createPublicKey(secretOrPublicKey);
            } catch (_) {
                try {
                    secretOrPublicKey = createSecretKey(typeof secretOrPublicKey === 'string' ? Buffer.from(secretOrPublicKey) : secretOrPublicKey);
                } catch (_) {
                    return done(new JsonWebTokenError('secretOrPublicKey is not valid key material'));
                }
            }
        }
        if (!options.algorithms) {
            if (secretOrPublicKey.type === 'secret') {
                options.algorithms = HS_ALGS;
            } else if ([
                'rsa',
                'rsa-pss'
            ].includes(secretOrPublicKey.asymmetricKeyType)) {
                options.algorithms = RSA_KEY_ALGS;
            } else if (secretOrPublicKey.asymmetricKeyType === 'ec') {
                options.algorithms = EC_KEY_ALGS;
            } else {
                options.algorithms = PUB_KEY_ALGS;
            }
        }
        if (options.algorithms.indexOf(decodedToken.header.alg) === -1) {
            return done(new JsonWebTokenError('invalid algorithm'));
        }
        if (header.alg.startsWith('HS') && secretOrPublicKey.type !== 'secret') {
            return done(new JsonWebTokenError(`secretOrPublicKey must be a symmetric key when using ${header.alg}`));
        } else if (/^(?:RS|PS|ES)/.test(header.alg) && secretOrPublicKey.type !== 'public') {
            return done(new JsonWebTokenError(`secretOrPublicKey must be an asymmetric key when using ${header.alg}`));
        }
        if (!options.allowInvalidAsymmetricKeyTypes) {
            try {
                validateAsymmetricKey(header.alg, secretOrPublicKey);
            } catch (e) {
                return done(e);
            }
        }
        let valid;
        try {
            valid = jws.verify(jwtString, decodedToken.header.alg, secretOrPublicKey);
        } catch (e) {
            return done(e);
        }
        if (!valid) {
            return done(new JsonWebTokenError('invalid signature'));
        }
        const payload = decodedToken.payload;
        if (typeof payload.nbf !== 'undefined' && !options.ignoreNotBefore) {
            if (typeof payload.nbf !== 'number') {
                return done(new JsonWebTokenError('invalid nbf value'));
            }
            if (payload.nbf > clockTimestamp + (options.clockTolerance || 0)) {
                return done(new NotBeforeError('jwt not active', new Date(payload.nbf * 1000)));
            }
        }
        if (typeof payload.exp !== 'undefined' && !options.ignoreExpiration) {
            if (typeof payload.exp !== 'number') {
                return done(new JsonWebTokenError('invalid exp value'));
            }
            if (clockTimestamp >= payload.exp + (options.clockTolerance || 0)) {
                return done(new TokenExpiredError('jwt expired', new Date(payload.exp * 1000)));
            }
        }
        if (options.audience) {
            const audiences = Array.isArray(options.audience) ? options.audience : [
                options.audience
            ];
            const target = Array.isArray(payload.aud) ? payload.aud : [
                payload.aud
            ];
            const match = target.some(function(targetAudience) {
                return audiences.some(function(audience) {
                    return audience instanceof RegExp ? audience.test(targetAudience) : audience === targetAudience;
                });
            });
            if (!match) {
                return done(new JsonWebTokenError('jwt audience invalid. expected: ' + audiences.join(' or ')));
            }
        }
        if (options.issuer) {
            const invalid_issuer = typeof options.issuer === 'string' && payload.iss !== options.issuer || Array.isArray(options.issuer) && options.issuer.indexOf(payload.iss) === -1;
            if (invalid_issuer) {
                return done(new JsonWebTokenError('jwt issuer invalid. expected: ' + options.issuer));
            }
        }
        if (options.subject) {
            if (payload.sub !== options.subject) {
                return done(new JsonWebTokenError('jwt subject invalid. expected: ' + options.subject));
            }
        }
        if (options.jwtid) {
            if (payload.jti !== options.jwtid) {
                return done(new JsonWebTokenError('jwt jwtid invalid. expected: ' + options.jwtid));
            }
        }
        if (options.nonce) {
            if (payload.nonce !== options.nonce) {
                return done(new JsonWebTokenError('jwt nonce invalid. expected: ' + options.nonce));
            }
        }
        if (options.maxAge) {
            if (typeof payload.iat !== 'number') {
                return done(new JsonWebTokenError('iat required when maxAge is specified'));
            }
            const maxAgeTimestamp = timespan(options.maxAge, payload.iat);
            if (typeof maxAgeTimestamp === 'undefined') {
                return done(new JsonWebTokenError('"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
            }
            if (clockTimestamp >= maxAgeTimestamp + (options.clockTolerance || 0)) {
                return done(new TokenExpiredError('maxAge exceeded', new Date(maxAgeTimestamp * 1000)));
            }
        }
        if (options.complete === true) {
            const signature = decodedToken.signature;
            return done(null, {
                header: header,
                payload: payload,
                signature: signature
            });
        }
        return done(null, payload);
    });
};
}),
"[project]/node_modules/jwa/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var Buffer = __turbopack_context__.r("[project]/node_modules/safe-buffer/index.js [app-route] (ecmascript)").Buffer;
var crypto = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
var formatEcdsa = __turbopack_context__.r("[project]/node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js [app-route] (ecmascript)");
var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
var MSG_INVALID_ALGORITHM = '"%s" is not a valid algorithm.\n  Supported algorithms are:\n  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".';
var MSG_INVALID_SECRET = 'secret must be a string or buffer';
var MSG_INVALID_VERIFIER_KEY = 'key must be a string or a buffer';
var MSG_INVALID_SIGNER_KEY = 'key must be a string, a buffer or an object';
var supportsKeyObjects = typeof crypto.createPublicKey === 'function';
if (supportsKeyObjects) {
    MSG_INVALID_VERIFIER_KEY += ' or a KeyObject';
    MSG_INVALID_SECRET += 'or a KeyObject';
}
function checkIsPublicKey(key) {
    if (Buffer.isBuffer(key)) {
        return;
    }
    if (typeof key === 'string') {
        return;
    }
    if (!supportsKeyObjects) {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
    }
    if (typeof key !== 'object') {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
    }
    if (typeof key.type !== 'string') {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
    }
    if (typeof key.asymmetricKeyType !== 'string') {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
    }
    if (typeof key.export !== 'function') {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
    }
}
;
function checkIsPrivateKey(key) {
    if (Buffer.isBuffer(key)) {
        return;
    }
    if (typeof key === 'string') {
        return;
    }
    if (typeof key === 'object') {
        return;
    }
    throw typeError(MSG_INVALID_SIGNER_KEY);
}
;
function checkIsSecretKey(key) {
    if (Buffer.isBuffer(key)) {
        return;
    }
    if (typeof key === 'string') {
        return key;
    }
    if (!supportsKeyObjects) {
        throw typeError(MSG_INVALID_SECRET);
    }
    if (typeof key !== 'object') {
        throw typeError(MSG_INVALID_SECRET);
    }
    if (key.type !== 'secret') {
        throw typeError(MSG_INVALID_SECRET);
    }
    if (typeof key.export !== 'function') {
        throw typeError(MSG_INVALID_SECRET);
    }
}
function fromBase64(base64) {
    return base64.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}
function toBase64(base64url) {
    base64url = base64url.toString();
    var padding = 4 - base64url.length % 4;
    if (padding !== 4) {
        for(var i = 0; i < padding; ++i){
            base64url += '=';
        }
    }
    return base64url.replace(/\-/g, '+').replace(/_/g, '/');
}
function typeError(template) {
    var args = [].slice.call(arguments, 1);
    var errMsg = util.format.bind(util, template).apply(null, args);
    return new TypeError(errMsg);
}
function bufferOrString(obj) {
    return Buffer.isBuffer(obj) || typeof obj === 'string';
}
function normalizeInput(thing) {
    if (!bufferOrString(thing)) thing = JSON.stringify(thing);
    return thing;
}
function createHmacSigner(bits) {
    return function sign(thing, secret) {
        checkIsSecretKey(secret);
        thing = normalizeInput(thing);
        var hmac = crypto.createHmac('sha' + bits, secret);
        var sig = (hmac.update(thing), hmac.digest('base64'));
        return fromBase64(sig);
    };
}
var bufferEqual;
var timingSafeEqual = 'timingSafeEqual' in crypto ? function timingSafeEqual(a, b) {
    if (a.byteLength !== b.byteLength) {
        return false;
    }
    return crypto.timingSafeEqual(a, b);
} : function timingSafeEqual(a, b) {
    if (!bufferEqual) {
        bufferEqual = __turbopack_context__.r("[project]/node_modules/buffer-equal-constant-time/index.js [app-route] (ecmascript)");
    }
    return bufferEqual(a, b);
};
function createHmacVerifier(bits) {
    return function verify(thing, signature, secret) {
        var computedSig = createHmacSigner(bits)(thing, secret);
        return timingSafeEqual(Buffer.from(signature), Buffer.from(computedSig));
    };
}
function createKeySigner(bits) {
    return function sign(thing, privateKey) {
        checkIsPrivateKey(privateKey);
        thing = normalizeInput(thing);
        // Even though we are specifying "RSA" here, this works with ECDSA
        // keys as well.
        var signer = crypto.createSign('RSA-SHA' + bits);
        var sig = (signer.update(thing), signer.sign(privateKey, 'base64'));
        return fromBase64(sig);
    };
}
function createKeyVerifier(bits) {
    return function verify(thing, signature, publicKey) {
        checkIsPublicKey(publicKey);
        thing = normalizeInput(thing);
        signature = toBase64(signature);
        var verifier = crypto.createVerify('RSA-SHA' + bits);
        verifier.update(thing);
        return verifier.verify(publicKey, signature, 'base64');
    };
}
function createPSSKeySigner(bits) {
    return function sign(thing, privateKey) {
        checkIsPrivateKey(privateKey);
        thing = normalizeInput(thing);
        var signer = crypto.createSign('RSA-SHA' + bits);
        var sig = (signer.update(thing), signer.sign({
            key: privateKey,
            padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
            saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
        }, 'base64'));
        return fromBase64(sig);
    };
}
function createPSSKeyVerifier(bits) {
    return function verify(thing, signature, publicKey) {
        checkIsPublicKey(publicKey);
        thing = normalizeInput(thing);
        signature = toBase64(signature);
        var verifier = crypto.createVerify('RSA-SHA' + bits);
        verifier.update(thing);
        return verifier.verify({
            key: publicKey,
            padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
            saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
        }, signature, 'base64');
    };
}
function createECDSASigner(bits) {
    var inner = createKeySigner(bits);
    return function sign() {
        var signature = inner.apply(null, arguments);
        signature = formatEcdsa.derToJose(signature, 'ES' + bits);
        return signature;
    };
}
function createECDSAVerifer(bits) {
    var inner = createKeyVerifier(bits);
    return function verify(thing, signature, publicKey) {
        signature = formatEcdsa.joseToDer(signature, 'ES' + bits).toString('base64');
        var result = inner(thing, signature, publicKey);
        return result;
    };
}
function createNoneSigner() {
    return function sign() {
        return '';
    };
}
function createNoneVerifier() {
    return function verify(thing, signature) {
        return signature === '';
    };
}
module.exports = function jwa(algorithm) {
    var signerFactories = {
        hs: createHmacSigner,
        rs: createKeySigner,
        ps: createPSSKeySigner,
        es: createECDSASigner,
        none: createNoneSigner
    };
    var verifierFactories = {
        hs: createHmacVerifier,
        rs: createKeyVerifier,
        ps: createPSSKeyVerifier,
        es: createECDSAVerifer,
        none: createNoneVerifier
    };
    var match = algorithm.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/);
    if (!match) throw typeError(MSG_INVALID_ALGORITHM, algorithm);
    var algo = (match[1] || match[3]).toLowerCase();
    var bits = match[2];
    return {
        sign: signerFactories[algo](bits),
        verify: verifierFactories[algo](bits)
    };
};
}),
"[project]/node_modules/jws/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*global exports*/ var SignStream = __turbopack_context__.r("[project]/node_modules/jws/lib/sign-stream.js [app-route] (ecmascript)");
var VerifyStream = __turbopack_context__.r("[project]/node_modules/jws/lib/verify-stream.js [app-route] (ecmascript)");
var ALGORITHMS = [
    'HS256',
    'HS384',
    'HS512',
    'RS256',
    'RS384',
    'RS512',
    'PS256',
    'PS384',
    'PS512',
    'ES256',
    'ES384',
    'ES512'
];
exports.ALGORITHMS = ALGORITHMS;
exports.sign = SignStream.sign;
exports.verify = VerifyStream.verify;
exports.decode = VerifyStream.decode;
exports.isValid = VerifyStream.isValid;
exports.createSign = function createSign(opts) {
    return new SignStream(opts);
};
exports.createVerify = function createVerify(opts) {
    return new VerifyStream(opts);
};
}),
"[project]/node_modules/jws/lib/data-stream.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*global module, process*/ var Buffer = __turbopack_context__.r("[project]/node_modules/safe-buffer/index.js [app-route] (ecmascript)").Buffer;
var Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
function DataStream(data) {
    this.buffer = null;
    this.writable = true;
    this.readable = true;
    // No input
    if (!data) {
        this.buffer = Buffer.alloc(0);
        return this;
    }
    // Stream
    if (typeof data.pipe === 'function') {
        this.buffer = Buffer.alloc(0);
        data.pipe(this);
        return this;
    }
    // Buffer or String
    // or Object (assumedly a passworded key)
    if (data.length || typeof data === 'object') {
        this.buffer = data;
        this.writable = false;
        process.nextTick((function() {
            this.emit('end', data);
            this.readable = false;
            this.emit('close');
        }).bind(this));
        return this;
    }
    throw new TypeError('Unexpected data type (' + typeof data + ')');
}
util.inherits(DataStream, Stream);
DataStream.prototype.write = function write(data) {
    this.buffer = Buffer.concat([
        this.buffer,
        Buffer.from(data)
    ]);
    this.emit('data', data);
};
DataStream.prototype.end = function end(data) {
    if (data) this.write(data);
    this.emit('end', data);
    this.emit('close');
    this.writable = false;
    this.readable = false;
};
module.exports = DataStream;
}),
"[project]/node_modules/jws/lib/sign-stream.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*global module*/ var Buffer = __turbopack_context__.r("[project]/node_modules/safe-buffer/index.js [app-route] (ecmascript)").Buffer;
var DataStream = __turbopack_context__.r("[project]/node_modules/jws/lib/data-stream.js [app-route] (ecmascript)");
var jwa = __turbopack_context__.r("[project]/node_modules/jwa/index.js [app-route] (ecmascript)");
var Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
var toString = __turbopack_context__.r("[project]/node_modules/jws/lib/tostring.js [app-route] (ecmascript)");
var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
function base64url(string, encoding) {
    return Buffer.from(string, encoding).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}
function jwsSecuredInput(header, payload, encoding) {
    encoding = encoding || 'utf8';
    var encodedHeader = base64url(toString(header), 'binary');
    var encodedPayload = base64url(toString(payload), encoding);
    return util.format('%s.%s', encodedHeader, encodedPayload);
}
function jwsSign(opts) {
    var header = opts.header;
    var payload = opts.payload;
    var secretOrKey = opts.secret || opts.privateKey;
    var encoding = opts.encoding;
    var algo = jwa(header.alg);
    var securedInput = jwsSecuredInput(header, payload, encoding);
    var signature = algo.sign(securedInput, secretOrKey);
    return util.format('%s.%s', securedInput, signature);
}
function SignStream(opts) {
    var secret = opts.secret;
    secret = secret == null ? opts.privateKey : secret;
    secret = secret == null ? opts.key : secret;
    if (/^hs/i.test(opts.header.alg) === true && secret == null) {
        throw new TypeError('secret must be a string or buffer or a KeyObject');
    }
    var secretStream = new DataStream(secret);
    this.readable = true;
    this.header = opts.header;
    this.encoding = opts.encoding;
    this.secret = this.privateKey = this.key = secretStream;
    this.payload = new DataStream(opts.payload);
    this.secret.once('close', (function() {
        if (!this.payload.writable && this.readable) this.sign();
    }).bind(this));
    this.payload.once('close', (function() {
        if (!this.secret.writable && this.readable) this.sign();
    }).bind(this));
}
util.inherits(SignStream, Stream);
SignStream.prototype.sign = function sign() {
    try {
        var signature = jwsSign({
            header: this.header,
            payload: this.payload.buffer,
            secret: this.secret.buffer,
            encoding: this.encoding
        });
        this.emit('done', signature);
        this.emit('data', signature);
        this.emit('end');
        this.readable = false;
        return signature;
    } catch (e) {
        this.readable = false;
        this.emit('error', e);
        this.emit('close');
    }
};
SignStream.sign = jwsSign;
module.exports = SignStream;
}),
"[project]/node_modules/jws/lib/tostring.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*global module*/ var Buffer = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)").Buffer;
module.exports = function toString(obj) {
    if (typeof obj === 'string') return obj;
    if (typeof obj === 'number' || Buffer.isBuffer(obj)) return obj.toString();
    return JSON.stringify(obj);
};
}),
"[project]/node_modules/jws/lib/verify-stream.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*global module*/ var Buffer = __turbopack_context__.r("[project]/node_modules/safe-buffer/index.js [app-route] (ecmascript)").Buffer;
var DataStream = __turbopack_context__.r("[project]/node_modules/jws/lib/data-stream.js [app-route] (ecmascript)");
var jwa = __turbopack_context__.r("[project]/node_modules/jwa/index.js [app-route] (ecmascript)");
var Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
var toString = __turbopack_context__.r("[project]/node_modules/jws/lib/tostring.js [app-route] (ecmascript)");
var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
var JWS_REGEX = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;
function isObject(thing) {
    return Object.prototype.toString.call(thing) === '[object Object]';
}
function safeJsonParse(thing) {
    if (isObject(thing)) return thing;
    try {
        return JSON.parse(thing);
    } catch (e) {
        return undefined;
    }
}
function headerFromJWS(jwsSig) {
    var encodedHeader = jwsSig.split('.', 1)[0];
    return safeJsonParse(Buffer.from(encodedHeader, 'base64').toString('binary'));
}
function securedInputFromJWS(jwsSig) {
    return jwsSig.split('.', 2).join('.');
}
function signatureFromJWS(jwsSig) {
    return jwsSig.split('.')[2];
}
function payloadFromJWS(jwsSig, encoding) {
    encoding = encoding || 'utf8';
    var payload = jwsSig.split('.')[1];
    return Buffer.from(payload, 'base64').toString(encoding);
}
function isValidJws(string) {
    return JWS_REGEX.test(string) && !!headerFromJWS(string);
}
function jwsVerify(jwsSig, algorithm, secretOrKey) {
    if (!algorithm) {
        var err = new Error("Missing algorithm parameter for jws.verify");
        err.code = "MISSING_ALGORITHM";
        throw err;
    }
    jwsSig = toString(jwsSig);
    var signature = signatureFromJWS(jwsSig);
    var securedInput = securedInputFromJWS(jwsSig);
    var algo = jwa(algorithm);
    return algo.verify(securedInput, signature, secretOrKey);
}
function jwsDecode(jwsSig, opts) {
    opts = opts || {};
    jwsSig = toString(jwsSig);
    if (!isValidJws(jwsSig)) return null;
    var header = headerFromJWS(jwsSig);
    if (!header) return null;
    var payload = payloadFromJWS(jwsSig);
    if (header.typ === 'JWT' || opts.json) payload = JSON.parse(payload, opts.encoding);
    return {
        header: header,
        payload: payload,
        signature: signatureFromJWS(jwsSig)
    };
}
function VerifyStream(opts) {
    opts = opts || {};
    var secretOrKey = opts.secret;
    secretOrKey = secretOrKey == null ? opts.publicKey : secretOrKey;
    secretOrKey = secretOrKey == null ? opts.key : secretOrKey;
    if (/^hs/i.test(opts.algorithm) === true && secretOrKey == null) {
        throw new TypeError('secret must be a string or buffer or a KeyObject');
    }
    var secretStream = new DataStream(secretOrKey);
    this.readable = true;
    this.algorithm = opts.algorithm;
    this.encoding = opts.encoding;
    this.secret = this.publicKey = this.key = secretStream;
    this.signature = new DataStream(opts.signature);
    this.secret.once('close', (function() {
        if (!this.signature.writable && this.readable) this.verify();
    }).bind(this));
    this.signature.once('close', (function() {
        if (!this.secret.writable && this.readable) this.verify();
    }).bind(this));
}
util.inherits(VerifyStream, Stream);
VerifyStream.prototype.verify = function verify() {
    try {
        var valid = jwsVerify(this.signature.buffer, this.algorithm, this.key.buffer);
        var obj = jwsDecode(this.signature.buffer, this.encoding);
        this.emit('done', valid, obj);
        this.emit('data', valid);
        this.emit('end');
        this.readable = false;
        return valid;
    } catch (e) {
        this.readable = false;
        this.emit('error', e);
        this.emit('close');
    }
};
VerifyStream.decode = jwsDecode;
VerifyStream.isValid = isValidJws;
VerifyStream.verify = jwsVerify;
module.exports = VerifyStream;
}),
"[project]/node_modules/lodash.includes/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as references for various `Number` constants. */ var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 1.7976931348623157e+308, NAN = 0 / 0;
/** `Object#toString` result references. */ var argsTag = '[object Arguments]', funcTag = '[object Function]', genTag = '[object GeneratorFunction]', stringTag = '[object String]', symbolTag = '[object Symbol]';
/** Used to match leading and trailing whitespace. */ var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
/** Used to detect unsigned integer values. */ var reIsUint = /^(?:0|[1-9]\d*)$/;
/** Built-in method references without a dependency on `root`. */ var freeParseInt = parseInt;
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */ function arrayMap(array, iteratee) {
    var index = -1, length = array ? array.length : 0, result = Array(length);
    while(++index < length){
        result[index] = iteratee(array[index], index, array);
    }
    return result;
}
/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
    while(fromRight ? index-- : ++index < length){
        if (predicate(array[index], index, array)) {
            return index;
        }
    }
    return -1;
}
/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function baseIndexOf(array, value, fromIndex) {
    if (value !== value) {
        return baseFindIndex(array, baseIsNaN, fromIndex);
    }
    var index = fromIndex - 1, length = array.length;
    while(++index < length){
        if (array[index] === value) {
            return index;
        }
    }
    return -1;
}
/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */ function baseIsNaN(value) {
    return value !== value;
}
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */ function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while(++index < n){
        result[index] = iteratee(index);
    }
    return result;
}
/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */ function baseValues(object, props) {
    return arrayMap(props, function(key) {
        return object[key];
    });
}
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/** Built-in value references. */ var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeKeys = overArg(Object.keys, Object), nativeMax = Math.max;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */ function arrayLikeKeys(value, inherited) {
    // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
    // Safari 9 makes `arguments.length` enumerable in strict mode.
    var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];
    var length = result.length, skipIndexes = !!length;
    for(var key in value){
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
            result.push(key);
        }
    }
    return result;
}
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function baseKeys(object) {
    if (!isPrototype(object)) {
        return nativeKeys(object);
    }
    var result = [];
    for(var key in Object(object)){
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
            result.push(key);
        }
    }
    return result;
}
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */ function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */ function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
    return value === proto;
}
/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */ function includes(collection, value, fromIndex, guard) {
    collection = isArrayLike(collection) ? collection : values(collection);
    fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
    var length = collection.length;
    if (fromIndex < 0) {
        fromIndex = nativeMax(length + fromIndex, 0);
    }
    return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
}
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */ function isArguments(value) {
    // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
    return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var isArray = Array.isArray;
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */ function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
}
/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */ function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
}
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */ function isFunction(value) {
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 8-9 which returns 'object' for typed array and other constructors.
    var tag = isObject(value) ? objectToString.call(value) : '';
    return tag == funcTag || tag == genTag;
}
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */ function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */ function isString(value) {
    return typeof value == 'string' || !isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag;
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */ function toFinite(value) {
    if (!value) {
        return value === 0 ? value : 0;
    }
    value = toNumber(value);
    if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
}
/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */ function toInteger(value) {
    var result = toFinite(value), remainder = result % 1;
    return result === result ? remainder ? result - remainder : result : 0;
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */ function toNumber(value) {
    if (typeof value == 'number') {
        return value;
    }
    if (isSymbol(value)) {
        return NAN;
    }
    if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? other + '' : other;
    }
    if (typeof value != 'string') {
        return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */ function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */ function values(object) {
    return object ? baseValues(object, keys(object)) : [];
}
module.exports = includes;
}),
"[project]/node_modules/lodash.isboolean/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */ /** `Object#toString` result references. */ var boolTag = '[object Boolean]';
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isBoolean(false);
 * // => true
 *
 * _.isBoolean(null);
 * // => false
 */ function isBoolean(value) {
    return value === true || value === false || isObjectLike(value) && objectToString.call(value) == boolTag;
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == 'object';
}
module.exports = isBoolean;
}),
"[project]/node_modules/lodash.isinteger/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as references for various `Number` constants. */ var INFINITY = 1 / 0, MAX_INTEGER = 1.7976931348623157e+308, NAN = 0 / 0;
/** `Object#toString` result references. */ var symbolTag = '[object Symbol]';
/** Used to match leading and trailing whitespace. */ var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */ var freeParseInt = parseInt;
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/**
 * Checks if `value` is an integer.
 *
 * **Note:** This method is based on
 * [`Number.isInteger`](https://mdn.io/Number/isInteger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
 * @example
 *
 * _.isInteger(3);
 * // => true
 *
 * _.isInteger(Number.MIN_VALUE);
 * // => false
 *
 * _.isInteger(Infinity);
 * // => false
 *
 * _.isInteger('3');
 * // => false
 */ function isInteger(value) {
    return typeof value == 'number' && value == toInteger(value);
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */ function toFinite(value) {
    if (!value) {
        return value === 0 ? value : 0;
    }
    value = toNumber(value);
    if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
}
/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */ function toInteger(value) {
    var result = toFinite(value), remainder = result % 1;
    return result === result ? remainder ? result - remainder : result : 0;
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */ function toNumber(value) {
    if (typeof value == 'number') {
        return value;
    }
    if (isSymbol(value)) {
        return NAN;
    }
    if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? other + '' : other;
    }
    if (typeof value != 'string') {
        return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
module.exports = isInteger;
}),
"[project]/node_modules/lodash.isnumber/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */ /** `Object#toString` result references. */ var numberTag = '[object Number]';
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified
 * as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */ function isNumber(value) {
    return typeof value == 'number' || isObjectLike(value) && objectToString.call(value) == numberTag;
}
module.exports = isNumber;
}),
"[project]/node_modules/lodash.isplainobject/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** `Object#toString` result references. */ var objectTag = '[object Object]';
/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */ function isHostObject(value) {
    // Many host objects are `Object` objects that can coerce to strings
    // despite having improperly defined `toString` methods.
    var result = false;
    if (value != null && typeof value.toString != 'function') {
        try {
            result = !!(value + '');
        } catch (e) {}
    }
    return result;
}
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
/** Used for built-in method references. */ var funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */ var objectCtorString = funcToString.call(Object);
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/** Built-in value references. */ var getPrototype = overArg(Object.getPrototypeOf, Object);
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */ function isPlainObject(value) {
    if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
        return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
        return true;
    }
    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
module.exports = isPlainObject;
}),
"[project]/node_modules/lodash.isstring/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * lodash 4.0.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */ /** `Object#toString` result references. */ var stringTag = '[object String]';
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @type Function
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var isArray = Array.isArray;
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */ function isString(value) {
    return typeof value == 'string' || !isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag;
}
module.exports = isString;
}),
"[project]/node_modules/lodash.once/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as the `TypeError` message for "Functions" methods. */ var FUNC_ERROR_TEXT = 'Expected a function';
/** Used as references for various `Number` constants. */ var INFINITY = 1 / 0, MAX_INTEGER = 1.7976931348623157e+308, NAN = 0 / 0;
/** `Object#toString` result references. */ var symbolTag = '[object Symbol]';
/** Used to match leading and trailing whitespace. */ var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */ var freeParseInt = parseInt;
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/**
 * Creates a function that invokes `func`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `func` invocation.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {number} n The number of calls at which `func` is no longer invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * jQuery(element).on('click', _.before(5, addContactToList));
 * // => Allows adding up to 4 contacts to the list.
 */ function before(n, func) {
    var result;
    if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
    }
    n = toInteger(n);
    return function() {
        if (--n > 0) {
            result = func.apply(this, arguments);
        }
        if (n <= 1) {
            func = undefined;
        }
        return result;
    };
}
/**
 * Creates a function that is restricted to invoking `func` once. Repeat calls
 * to the function return the value of the first invocation. The `func` is
 * invoked with the `this` binding and arguments of the created function.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * var initialize = _.once(createApplication);
 * initialize();
 * initialize();
 * // => `createApplication` is invoked once
 */ function once(func) {
    return before(2, func);
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */ function toFinite(value) {
    if (!value) {
        return value === 0 ? value : 0;
    }
    value = toNumber(value);
    if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
}
/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */ function toInteger(value) {
    var result = toFinite(value), remainder = result % 1;
    return result === result ? remainder ? result - remainder : result : 0;
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */ function toNumber(value) {
    if (typeof value == 'number') {
        return value;
    }
    if (isSymbol(value)) {
        return NAN;
    }
    if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? other + '' : other;
    }
    if (typeof value != 'string') {
        return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
module.exports = once;
}),
"[project]/node_modules/lowercase-keys/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = (object)=>{
    const result = {};
    for (const [key, value] of Object.entries(object)){
        result[key.toLowerCase()] = value;
    }
    return result;
};
}),
"[project]/node_modules/mimic-response/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// We define these manually to ensure they're always copied
// even if they would move up the prototype chain
// https://nodejs.org/api/http.html#http_class_http_incomingmessage
const knownProps = [
    'destroy',
    'setTimeout',
    'socket',
    'headers',
    'trailers',
    'rawHeaders',
    'statusCode',
    'httpVersion',
    'httpVersionMinor',
    'httpVersionMajor',
    'rawTrailers',
    'statusMessage'
];
module.exports = (fromStream, toStream)=>{
    const fromProps = new Set(Object.keys(fromStream).concat(knownProps));
    for (const prop of fromProps){
        // Don't overwrite existing properties
        if (prop in toStream) {
            continue;
        }
        toStream[prop] = typeof fromStream[prop] === 'function' ? fromStream[prop].bind(fromStream) : fromStream[prop];
    }
};
}),
"[project]/node_modules/ms/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Helpers.
 */ var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === 'string' && val.length > 0) {
        return parse(val);
    } else if (type === 'number' && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) {
        return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
        return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch(type){
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
            return n * y;
        case 'weeks':
        case 'week':
        case 'w':
            return n * w;
        case 'days':
        case 'day':
        case 'd':
            return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
            return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
            return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
            return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return Math.round(ms / d) + 'd';
    }
    if (msAbs >= h) {
        return Math.round(ms / h) + 'h';
    }
    if (msAbs >= m) {
        return Math.round(ms / m) + 'm';
    }
    if (msAbs >= s) {
        return Math.round(ms / s) + 's';
    }
    return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return plural(ms, msAbs, d, 'day');
    }
    if (msAbs >= h) {
        return plural(ms, msAbs, h, 'hour');
    }
    if (msAbs >= m) {
        return plural(ms, msAbs, m, 'minute');
    }
    if (msAbs >= s) {
        return plural(ms, msAbs, s, 'second');
    }
    return ms + ' ms';
}
/**
 * Pluralization helper.
 */ function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}
}),
"[project]/node_modules/normalize-url/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
const DATA_URL_DEFAULT_MIME_TYPE = 'text/plain';
const DATA_URL_DEFAULT_CHARSET = 'us-ascii';
const testParameter = (name, filters)=>{
    return filters.some((filter)=>filter instanceof RegExp ? filter.test(name) : filter === name);
};
const normalizeDataURL = (urlString, { stripHash })=>{
    const match = /^data:(?<type>[^,]*?),(?<data>[^#]*?)(?:#(?<hash>.*))?$/.exec(urlString);
    if (!match) {
        throw new Error(`Invalid URL: ${urlString}`);
    }
    let { type, data, hash } = match.groups;
    const mediaType = type.split(';');
    hash = stripHash ? '' : hash;
    let isBase64 = false;
    if (mediaType[mediaType.length - 1] === 'base64') {
        mediaType.pop();
        isBase64 = true;
    }
    // Lowercase MIME type
    const mimeType = (mediaType.shift() || '').toLowerCase();
    const attributes = mediaType.map((attribute)=>{
        let [key, value = ''] = attribute.split('=').map((string)=>string.trim());
        // Lowercase `charset`
        if (key === 'charset') {
            value = value.toLowerCase();
            if (value === DATA_URL_DEFAULT_CHARSET) {
                return '';
            }
        }
        return `${key}${value ? `=${value}` : ''}`;
    }).filter(Boolean);
    const normalizedMediaType = [
        ...attributes
    ];
    if (isBase64) {
        normalizedMediaType.push('base64');
    }
    if (normalizedMediaType.length !== 0 || mimeType && mimeType !== DATA_URL_DEFAULT_MIME_TYPE) {
        normalizedMediaType.unshift(mimeType);
    }
    return `data:${normalizedMediaType.join(';')},${isBase64 ? data.trim() : data}${hash ? `#${hash}` : ''}`;
};
const normalizeUrl = (urlString, options)=>{
    options = {
        defaultProtocol: 'http:',
        normalizeProtocol: true,
        forceHttp: false,
        forceHttps: false,
        stripAuthentication: true,
        stripHash: false,
        stripTextFragment: true,
        stripWWW: true,
        removeQueryParameters: [
            /^utm_\w+/i
        ],
        removeTrailingSlash: true,
        removeSingleSlash: true,
        removeDirectoryIndex: false,
        sortQueryParameters: true,
        ...options
    };
    urlString = urlString.trim();
    // Data URL
    if (/^data:/i.test(urlString)) {
        return normalizeDataURL(urlString, options);
    }
    if (/^view-source:/i.test(urlString)) {
        throw new Error('`view-source:` is not supported as it is a non-standard protocol');
    }
    const hasRelativeProtocol = urlString.startsWith('//');
    const isRelativeUrl = !hasRelativeProtocol && /^\.*\//.test(urlString);
    // Prepend protocol
    if (!isRelativeUrl) {
        urlString = urlString.replace(/^(?!(?:\w+:)?\/\/)|^\/\//, options.defaultProtocol);
    }
    const urlObj = new URL(urlString);
    if (options.forceHttp && options.forceHttps) {
        throw new Error('The `forceHttp` and `forceHttps` options cannot be used together');
    }
    if (options.forceHttp && urlObj.protocol === 'https:') {
        urlObj.protocol = 'http:';
    }
    if (options.forceHttps && urlObj.protocol === 'http:') {
        urlObj.protocol = 'https:';
    }
    // Remove auth
    if (options.stripAuthentication) {
        urlObj.username = '';
        urlObj.password = '';
    }
    // Remove hash
    if (options.stripHash) {
        urlObj.hash = '';
    } else if (options.stripTextFragment) {
        urlObj.hash = urlObj.hash.replace(/#?:~:text.*?$/i, '');
    }
    // Remove duplicate slashes if not preceded by a protocol
    if (urlObj.pathname) {
        urlObj.pathname = urlObj.pathname.replace(/(?<!\b(?:[a-z][a-z\d+\-.]{1,50}:))\/{2,}/g, '/');
    }
    // Decode URI octets
    if (urlObj.pathname) {
        try {
            urlObj.pathname = decodeURI(urlObj.pathname);
        } catch (_) {}
    }
    // Remove directory index
    if (options.removeDirectoryIndex === true) {
        options.removeDirectoryIndex = [
            /^index\.[a-z]+$/
        ];
    }
    if (Array.isArray(options.removeDirectoryIndex) && options.removeDirectoryIndex.length > 0) {
        let pathComponents = urlObj.pathname.split('/');
        const lastComponent = pathComponents[pathComponents.length - 1];
        if (testParameter(lastComponent, options.removeDirectoryIndex)) {
            pathComponents = pathComponents.slice(0, pathComponents.length - 1);
            urlObj.pathname = pathComponents.slice(1).join('/') + '/';
        }
    }
    if (urlObj.hostname) {
        // Remove trailing dot
        urlObj.hostname = urlObj.hostname.replace(/\.$/, '');
        // Remove `www.`
        if (options.stripWWW && /^www\.(?!www\.)(?:[a-z\-\d]{1,63})\.(?:[a-z.\-\d]{2,63})$/.test(urlObj.hostname)) {
            // Each label should be max 63 at length (min: 1).
            // Source: https://en.wikipedia.org/wiki/Hostname#Restrictions_on_valid_host_names
            // Each TLD should be up to 63 characters long (min: 2).
            // It is technically possible to have a single character TLD, but none currently exist.
            urlObj.hostname = urlObj.hostname.replace(/^www\./, '');
        }
    }
    // Remove query unwanted parameters
    if (Array.isArray(options.removeQueryParameters)) {
        for (const key of [
            ...urlObj.searchParams.keys()
        ]){
            if (testParameter(key, options.removeQueryParameters)) {
                urlObj.searchParams.delete(key);
            }
        }
    }
    if (options.removeQueryParameters === true) {
        urlObj.search = '';
    }
    // Sort query parameters
    if (options.sortQueryParameters) {
        urlObj.searchParams.sort();
    }
    if (options.removeTrailingSlash) {
        urlObj.pathname = urlObj.pathname.replace(/\/$/, '');
    }
    const oldUrlString = urlString;
    // Take advantage of many of the Node `url` normalizations
    urlString = urlObj.toString();
    if (!options.removeSingleSlash && urlObj.pathname === '/' && !oldUrlString.endsWith('/') && urlObj.hash === '') {
        urlString = urlString.replace(/\/$/, '');
    }
    // Remove ending `/` unless removeSingleSlash is false
    if ((options.removeTrailingSlash || urlObj.pathname === '/') && urlObj.hash === '' && options.removeSingleSlash) {
        urlString = urlString.replace(/\/$/, '');
    }
    // Restore relative protocol, if applicable
    if (hasRelativeProtocol && !options.normalizeProtocol) {
        urlString = urlString.replace(/^http:\/\//, '//');
    }
    // Remove http/https
    if (options.stripProtocol) {
        urlString = urlString.replace(/^(?:https?:)?\/\//, '');
    }
    return urlString;
};
module.exports = normalizeUrl;
}),
"[project]/node_modules/once/once.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var wrappy = __turbopack_context__.r("[project]/node_modules/wrappy/wrappy.js [app-route] (ecmascript)");
module.exports = wrappy(once);
module.exports.strict = wrappy(onceStrict);
once.proto = once(function() {
    Object.defineProperty(Function.prototype, 'once', {
        value: function() {
            return once(this);
        },
        configurable: true
    });
    Object.defineProperty(Function.prototype, 'onceStrict', {
        value: function() {
            return onceStrict(this);
        },
        configurable: true
    });
});
function once(fn) {
    var f = function() {
        if (f.called) return f.value;
        f.called = true;
        return f.value = fn.apply(this, arguments);
    };
    f.called = false;
    return f;
}
function onceStrict(fn) {
    var f = function() {
        if (f.called) throw new Error(f.onceError);
        f.called = true;
        return f.value = fn.apply(this, arguments);
    };
    var name = fn.name || 'Function wrapped with `once`';
    f.onceError = name + " shouldn't be called more than once";
    f.called = false;
    return f;
}
}),
"[project]/node_modules/p-cancelable/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

class CancelError extends Error {
    constructor(reason){
        super(reason || 'Promise was canceled');
        this.name = 'CancelError';
    }
    get isCanceled() {
        return true;
    }
}
class PCancelable {
    static fn(userFn) {
        return (...arguments_)=>{
            return new PCancelable((resolve, reject, onCancel)=>{
                arguments_.push(onCancel);
                // eslint-disable-next-line promise/prefer-await-to-then
                userFn(...arguments_).then(resolve, reject);
            });
        };
    }
    constructor(executor){
        this._cancelHandlers = [];
        this._isPending = true;
        this._isCanceled = false;
        this._rejectOnCancel = true;
        this._promise = new Promise((resolve, reject)=>{
            this._reject = reject;
            const onResolve = (value)=>{
                if (!this._isCanceled || !onCancel.shouldReject) {
                    this._isPending = false;
                    resolve(value);
                }
            };
            const onReject = (error)=>{
                this._isPending = false;
                reject(error);
            };
            const onCancel = (handler)=>{
                if (!this._isPending) {
                    throw new Error('The `onCancel` handler was attached after the promise settled.');
                }
                this._cancelHandlers.push(handler);
            };
            Object.defineProperties(onCancel, {
                shouldReject: {
                    get: ()=>this._rejectOnCancel,
                    set: (boolean)=>{
                        this._rejectOnCancel = boolean;
                    }
                }
            });
            return executor(onResolve, onReject, onCancel);
        });
    }
    then(onFulfilled, onRejected) {
        // eslint-disable-next-line promise/prefer-await-to-then
        return this._promise.then(onFulfilled, onRejected);
    }
    catch(onRejected) {
        return this._promise.catch(onRejected);
    }
    finally(onFinally) {
        return this._promise.finally(onFinally);
    }
    cancel(reason) {
        if (!this._isPending || this._isCanceled) {
            return;
        }
        this._isCanceled = true;
        if (this._cancelHandlers.length > 0) {
            try {
                for (const handler of this._cancelHandlers){
                    handler();
                }
            } catch (error) {
                this._reject(error);
                return;
            }
        }
        if (this._rejectOnCancel) {
            this._reject(new CancelError(reason));
        }
    }
    get isCanceled() {
        return this._isCanceled;
    }
}
Object.setPrototypeOf(PCancelable.prototype, Promise.prototype);
module.exports = PCancelable;
module.exports.CancelError = CancelError;
}),
"[project]/node_modules/pluggy-sdk/dist/baseApi.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importStar || function() {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o) {
            var ar = [];
            for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
            for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BaseApi = void 0;
const got_1 = __importStar(__turbopack_context__.r("[project]/node_modules/got/dist/source/index.js [app-route] (ecmascript)"));
const jwt = __importStar(__turbopack_context__.r("[project]/node_modules/jsonwebtoken/index.js [app-route] (ecmascript)"));
const transforms_1 = __turbopack_context__.r("[project]/node_modules/pluggy-sdk/dist/transforms.js [app-route] (ecmascript)");
const { version: pluggyNodeVersion, dependencies: { got: gotVersion } } = __turbopack_context__.r("[project]/node_modules/pluggy-sdk/package.json.[json].cjs [app-route] (ecmascript)");
const _30_SECONDS = 30 * 1000;
class BaseApi {
    constructor(params){
        const { clientId, clientSecret } = params;
        const { PLUGGY_API_URL } = process.env;
        this.baseUrl = PLUGGY_API_URL || 'https://api.pluggy.ai';
        if (clientSecret && clientId) {
            this.clientId = clientId;
            this.clientSecret = clientSecret;
        } else {
            throw new Error('Missing authorization for API communication');
        }
        this.defaultHeaders = {
            'User-Agent': `PluggyNode/${pluggyNodeVersion} node.js/${process.version.replace('v', '')} Got/${gotVersion}`,
            'Content-Type': 'application/json'
        };
    }
    getServiceInstance() {
        if (!this.serviceInstance) {
            this.serviceInstance = got_1.default.extend({
                headers: this.defaultHeaders,
                responseType: 'json',
                parseJson: transforms_1.deserializeJSONWithDates,
                timeout: _30_SECONDS,
                retry: {
                    limit: 2,
                    methods: [
                        'GET',
                        'POST',
                        'PUT',
                        'PATCH',
                        'DELETE'
                    ],
                    statusCodes: [
                        429
                    ]
                }
            });
        }
        return this.serviceInstance;
    }
    async getApiKey() {
        if (this.apiKey && !this.isJwtExpired(this.apiKey)) {
            return this.apiKey;
        }
        const response = await this.getServiceInstance().post(`${this.baseUrl}/auth`, {
            json: {
                clientId: this.clientId,
                clientSecret: this.clientSecret,
                nonExpiring: false
            },
            responseType: 'json'
        });
        this.apiKey = response.body.apiKey;
        return this.apiKey;
    }
    async createGetRequest(endpoint, params) {
        const apiKey = await this.getApiKey();
        const url = `${this.baseUrl}/${endpoint}${this.mapToQueryString(params)}`;
        try {
            const { statusCode, body } = await this.getServiceInstance()(url, {
                headers: {
                    ...this.defaultHeaders,
                    'X-API-KEY': apiKey
                },
                responseType: 'json',
                parseJson: transforms_1.deserializeJSONWithDates
            });
            if (statusCode < 200 || statusCode >= 300) {
                return Promise.reject(body);
            }
            return body;
        } catch (error) {
            if (error instanceof got_1.HTTPError) {
                console.error(`[Pluggy SDK] HTTP request failed: ${error.message || ''}`, error.response.body);
                return Promise.reject(error.response.body);
            }
            return Promise.reject(error);
        }
    }
    createPostRequest(endpoint, params, body) {
        return this.createMutationRequest('post', endpoint, params, body);
    }
    createPutRequest(endpoint, params, body) {
        return this.createMutationRequest('put', endpoint, params, body);
    }
    createPatchRequest(endpoint, params, body) {
        return this.createMutationRequest('patch', endpoint, params, body);
    }
    createDeleteRequest(endpoint, params, body) {
        return this.createMutationRequest('delete', endpoint, params, body);
    }
    async createMutationRequest(method, endpoint, params, body) {
        const apiKey = await this.getApiKey();
        const url = `${this.baseUrl}/${endpoint}${this.mapToQueryString(params)}`;
        if (body) {
            Object.keys(body).forEach((key)=>body[key] === undefined ? delete body[key] : {});
        }
        try {
            const { statusCode, body: responseBody } = await this.getServiceInstance()(url, {
                method,
                headers: {
                    ...this.defaultHeaders,
                    'X-API-KEY': apiKey
                },
                json: body
            });
            if (statusCode < 200 || statusCode >= 300) {
                return Promise.reject(body);
            }
            return responseBody;
        } catch (error) {
            if (error instanceof got_1.HTTPError) {
                console.error(`[Pluggy SDK] HTTP request failed: ${error.message || ''}`, error.response.body);
                return Promise.reject(error.response.body);
            }
            return Promise.reject(error);
        }
    }
    mapToQueryString(params) {
        if (!params) {
            return '';
        }
        // Values must be URL-encoded: cursors are base64 and carry '+', '/' and '=', and an unencoded
        // '+' reaches the server as a space. Array items are encoded one by one and joined with a
        // literal comma, which is how the API expects list params such as `ids`.
        const encode = (value)=>encodeURIComponent(String(value));
        const query = Object.keys(params).filter((key)=>params[key] !== undefined && params[key] !== null).map((key)=>{
            const value = params[key];
            const encoded = Array.isArray(value) ? value.map(encode).join(',') : encode(value);
            return `${encodeURIComponent(key)}=${encoded}`;
        }).join('&');
        return `?${query}`;
    }
    isJwtExpired(token) {
        const decoded = jwt.decode(token, {
            complete: true
        });
        // Pluggy auth tokens always carry a JSON payload with `exp`. The
        // `string | JwtPayload` union surfaced by @types/jsonwebtoken@9 is
        // not reachable for tokens minted by the Pluggy API, so narrow it
        // explicitly to keep the previous (pre-v9-types) behaviour.
        const payload = decoded.payload;
        return payload.exp <= Math.floor(Date.now() / 1000);
    }
}
exports.BaseApi = BaseApi;
}),
"[project]/node_modules/pluggy-sdk/dist/client.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PluggyClient = void 0;
const baseApi_1 = __turbopack_context__.r("[project]/node_modules/pluggy-sdk/dist/baseApi.js [app-route] (ecmascript)");
const paymentsClient_1 = __turbopack_context__.r("[project]/node_modules/pluggy-sdk/dist/paymentsClient.js [app-route] (ecmascript)");
/**
 * Creates a new client instance for interacting with Pluggy API
 * @constructor
 * @param API_KEY for authenticating to the API
 * @returns {PluggyClient} a client for making requests
 */ class PluggyClient extends baseApi_1.BaseApi {
    constructor(params){
        super(params);
        this.payments = new paymentsClient_1.PluggyPaymentsClient(params);
    }
    /**
     * Fetch all available connectors
     * @returns {PageResponse<Connector>} paged response of connectors
     */ async fetchConnectors(options = {}) {
        return await this.createGetRequest('connectors', options);
    }
    /**
     * Fetch a single Connector
     * @param id The Connector ID
     * @returns {Connector} a connector object
     */ async fetchConnector(id) {
        return await this.createGetRequest(`connectors/${id}`);
    }
    /**
     * Fetch a single item
     * @param id The Item ID
     * @returns {Item} a item object
     */ async fetchItem(id) {
        return await this.createGetRequest(`items/${id}`);
    }
    /**
     * Fetch a single page of the team's items using cursor-based pagination (`GET /v2/items`),
     * newest first.
     *
     * ⚠️ Opt-in, paid plans only. Listing items is disabled by default and is only available to
     * paid-plan teams that have explicitly requested it from Pluggy support. Teams without it
     * enabled get `403 LIST_ITEMS_FEATURE_NOT_ENABLED`. For most integrations, store each `itemId`
     * when it is created (Pluggy Connect `onSuccess` or the `item/created` webhook) and use
     * {@link fetchItem} instead.
     *
     * @param {ItemCursorFilters} options Optional filters (clientUserId, connectorId, after cursor)
     * @returns {CursorPageResponse<Item>} object with results and the `next` page query string
     *   (e.g. `?connectorId=1&after=<cursor>`), or null on the last page
     */ async fetchItemsCursor(options = {}) {
        // Only whitelisted params are sent: the endpoint rejects unknown query parameters.
        const { clientUserId, connectorId, after } = options;
        return await this.createGetRequest('v2/items', {
            clientUserId,
            connectorId,
            after
        });
    }
    /**
     * Fetch all of the team's items, following the cursor across every page (`GET /v2/items`),
     * newest first.
     *
     * ⚠️ Opt-in, paid plans only. Listing items is disabled by default and is only available to
     * paid-plan teams that have explicitly requested it from Pluggy support. Teams without it
     * enabled get `403 LIST_ITEMS_FEATURE_NOT_ENABLED`. For most integrations, store each `itemId`
     * when it is created (Pluggy Connect `onSuccess` or the `item/created` webhook) and use
     * {@link fetchItem} instead.
     *
     * @param {ItemCursorFilters} options Optional filters (clientUserId, connectorId)
     * @returns {Item[]} an array of all matching items
     */ async fetchAllItems(options = {}) {
        const firstPage = await this.fetchItemsCursor(options);
        const items = [
            ...firstPage.results
        ];
        let next = firstPage.next;
        while(next !== null){
            const afterParam = new URL(next, this.baseUrl).searchParams.get('after');
            if (!afterParam) {
                break;
            }
            const page = await this.fetchItemsCursor({
                ...options,
                after: afterParam
            });
            items.push(...page.results);
            next = page.next;
        }
        return items;
    }
    /**
     * Check that connector parameters are valid
     * @param id The Connector ID
     * @param parameters A map of name and value for the credentials to be validated
     * @returns {ValidationResult} an object with the info of which parameters are wrong
     */ async validateParameters(id, parameters) {
        return await this.createPostRequest(`connectors/${id}/validate`, null, parameters);
    }
    /**
     * Creates an item
     * @param connectorId The Connector's id
     * @param parameters A map of name and value for the needed credentials
     * @param options Options available to set to the item
     * @returns {Item} a item object
     */ async createItem(connectorId, parameters, options) {
        return await this.createPostRequest(`items`, null, {
            connectorId,
            parameters,
            ...options || {}
        });
    }
    /**
     * Updates an item
     * @param id The Item ID
     * @param parameters A map of name and value for the credentials to be updated.
     *                   Optional; if none submitted, an Item update will be attempted with the latest used credentials.
     * @returns {Item} a item object
     */ async updateItem(id, parameters, options) {
        return await this.createPatchRequest(`items/${id}`, null, {
            id,
            parameters,
            ...options || {}
        });
    }
    /**
     * Send MFA for item execution
     * @param id The Item ID
     * @param parameters A map of name and value for the mfa requested
     * @returns {Item} a item object
     */ async updateItemMFA(id, parameters = undefined) {
        return await this.createPostRequest(`items/${id}/mfa`, null, parameters);
    }
    /**
     * Deletes an item
     */ async deleteItem(id) {
        await this.createDeleteRequest(`items/${id}`);
    }
    /**
     * Fetch the resources the financial institution declared for an Item's Open Finance consent.
     * Items on non Open Finance connectors return an empty page.
     * An empty list means the institution declared nothing only when the Item's
     * `resourcesCollectedAt` is set; when it is null, the list was never obtained.
     * @param itemId The Item id
     * @param {ItemResourceFilters} options - request search filters (page size defaults to 500)
     * @returns {PageResponse<ItemResource>} paged response of item resources
     */ async fetchItemResources(itemId, options = {}) {
        return await this.createGetRequest(`items/${itemId}/resources`, options);
    }
    /**
     * Fetch the SCR (Bacen's Sistema de Informações de Crédito) for the document behind an Item.
     *
     * Opt-in: requires the SCR feature to be enabled for your team (ask Pluggy support); otherwise
     * 403 SCR_FEATURE_NOT_ENABLED. Only available for Open Finance items with a known CPF/CNPJ
     * (otherwise 422 SCR_ITEM_NOT_SUPPORTED).
     *
     * The response is Bacen's own payload, forwarded unchanged. Base dates are months (YYYYMM) and
     * Bacen consolidates each one with a few months of delay: when `from` and `to` are omitted the
     * last 4 available base dates are consulted, ending 2 months before the current one.
     * @param itemId The Item id
     * @param {ScrFilters} options - optional `from` / `to` base dates, as YYYYMM
     * @returns {ScrResponse} the SCR data for the Item's document
     */ async fetchItemScr(itemId, options = {}) {
        return await this.createGetRequest(`items/${itemId}/scr`, {
            ...options
        });
    }
    /**
     * Fetch accounts from an Item
     * @param itemId The Item id
     * @returns {PageResponse<Account>} paged response of accounts
     */ async fetchAccounts(itemId, type) {
        return await this.createGetRequest('accounts', {
            itemId,
            type
        });
    }
    /**
     * Fetch a single account
     * @returns {Account} an account object
     */ async fetchAccount(id) {
        return await this.createGetRequest(`accounts/${id}`);
    }
    /**
     * Fetch the real-time balance of an account directly from the financial
     * institution connector, without requiring a full item sync.
     * @param id The Account ID
     * @returns {AccountBalance} an account balance object
     */ async fetchAccountBalance(id) {
        return await this.createGetRequest(`accounts/${id}/balance`);
    }
    /**
     * Fetch transactions from an account using page-based pagination.
     *
     * @deprecated Use {@link fetchTransactionsCursor} (single page) or
     * {@link fetchAllTransactions} (full sweep) instead. Both rely on the
     * `GET /v2/transactions` endpoint with cursor-based pagination, which
     * is more stable for long lists and supports the full filter set
     * (`dateTo`, `ids`, etc.). This page-based method is kept for
     * backward compatibility and will be removed in a future major
     * release.
     *
     * @param accountId The account id
     * @param {TransactionFilters} options Transaction options to filter
     * @returns {PageResponse<Transaction[]>} object which contains the transactions list and related paging data
     */ async fetchTransactions(accountId, options = {}) {
        return await this.createGetRequest('transactions', {
            ...options,
            accountId
        });
    }
    /**
     * Fetch transactions from an account using cursor-based pagination
     * @param accountId The account id
     * @param {TransactionCursorFilters} options Optional filters (dateFrom, createdAtFrom, after cursor)
     * @returns {CursorPageResponse<Transaction>} object with results and next cursor link
     */ async fetchTransactionsCursor(accountId, options = {}) {
        return await this.createGetRequest('v2/transactions', {
            ...options,
            accountId
        });
    }
    /**
     * Fetch all transactions from an account using cursor-based pagination
     * @param accountId The account id
     * @param {TransactionCursorFilters} options Optional filters (dateFrom, createdAtFrom)
     * @returns {Transaction[]} an array of all transactions
     */ async fetchAllTransactions(accountId, options = {}) {
        const firstPage = await this.fetchTransactionsCursor(accountId, options);
        const transactions = [
            ...firstPage.results
        ];
        let next = firstPage.next;
        while(next !== null){
            const afterParam = new URL(next, this.baseUrl).searchParams.get('after');
            if (!afterParam) {
                break;
            }
            const page = await this.fetchTransactionsCursor(accountId, {
                ...options,
                after: afterParam
            });
            transactions.push(...page.results);
            next = page.next;
        }
        return transactions;
    }
    /**
     * Fetch account statements from an account
     * @param accountId The account id
     * @returns {PageResponse<AccountStatement[]>} object which contains the Account statements list and related paging data
     */ async fetchAccountStatements(accountId) {
        return await this.createGetRequest(`accounts/${accountId}/statements`);
    }
    /**
     * Post transaction user category for transactin
     * @param id The Transaction id
     *
     * @returns {Transaction} updated transaction object
     */ async updateTransactionCategory(id, categoryId) {
        return await this.createPatchRequest(`transactions/${id}`, null, {
            categoryId
        });
    }
    /**
     * Fetch a single transaction
     *
     * @returns {Transaction} an transaction object
     */ async fetchTransaction(id) {
        return await this.createGetRequest(`transactions/${id}`);
    }
    /**
     * Fetch investments from an Item
     *
     * @param itemId The Item id
     * @returns {PageResponse<Investment>} paged response of investments
     */ async fetchInvestments(itemId, type, options = {}) {
        return await this.createGetRequest('investments', {
            ...options,
            itemId,
            type
        });
    }
    /**
     * Fetch a single investment
     *
     * @returns {Investment} an investment object
     */ async fetchInvestment(id) {
        return await this.createGetRequest(`investments/${id}`);
    }
    /**
     * Fetch transactions from an investment
     *
     * @param investmentId The investment id
     * @param {TransactionFilters} options Transaction options to filter
     * @returns {PageResponse<InvestmentTransaction[]>} object which contains the transactions list and related paging data
     */ async fetchInvestmentTransactions(investmentId, options = {}) {
        return await this.createGetRequest(`investments/${investmentId}/transactions`, {
            ...options,
            investmentId
        });
    }
    /**
     * Fetch all investment transactions from an investment
     * @param investmentId The investment id
     * @returns {InvestmentTransaction[]} an array of investment transactions
     */ async fetchAllInvestmentTransactions(investmentId) {
        const MAX_PAGE_SIZE = 500;
        const { totalPages, results: firstPageResults } = await this.fetchInvestmentTransactions(investmentId, {
            pageSize: MAX_PAGE_SIZE
        });
        if (totalPages === 1) {
            return firstPageResults;
        }
        const transactions = [
            ...firstPageResults
        ];
        let page = 1;
        while(page < totalPages){
            page++;
            const paginatedTransactions = await this.fetchInvestmentTransactions(investmentId, {
                page,
                pageSize: MAX_PAGE_SIZE
            });
            transactions.push(...paginatedTransactions.results);
        }
        return transactions;
    }
    /**
     * Fetch loans from an Item
     *
     * @param {string} itemId
     * @param {PageFilters} options - request search filters
     * @returns {Promise<PageResponse<Loan>>} - paged response of loans
     */ async fetchLoans(itemId, options = {}) {
        return await this.createGetRequest('loans', {
            ...options,
            itemId
        });
    }
    /**
     * Fetch loan by id
     *
     * @param {string} id - the loan id
     * @returns {Promise<Loan>} - loan object, if found
     */ async fetchLoan(id) {
        return await this.createGetRequest(`loans/${id}`);
    }
    /**
     * Fetch consents from an Item
     *
     * @param {string} itemId - the item id
     * @param {ConsentFilters} options - request search filters
     * @returns {Promise<PageResponse<Consent>>} - paged response of consents
     */ async fetchConsents(itemId, options = {}) {
        return await this.createGetRequest('consents', {
            ...options,
            itemId
        });
    }
    /**
     * Fetch consent by id
     *
     * @param {string} id - the consent id
     * @returns {Promise<Consent>} - consent object, if found
     */ async fetchConsent(id) {
        return await this.createGetRequest(`consents/${id}`);
    }
    /**
     * Fetch the identity resource
     * @returns {IdentityResponse} an identity object
     */ async fetchIdentity(id) {
        return await this.createGetRequest(`identity/${id}`);
    }
    /**
     * Fetch the identity resource by it's Item ID
     * @returns {IdentityResponse} an identity object
     */ async fetchIdentityByItemId(itemId) {
        return await this.createGetRequest(`identity?itemId=${itemId}`);
    }
    /**
     * Fetch credit card bills from an accountId
     * @returns {PageResponse<CreditCardBills>} an credit card bills object
     */ async fetchCreditCardBills(accountId, options = {}) {
        return await this.createGetRequest('bills', {
            ...options,
            accountId
        });
    }
    /**
     * Fetch a single credit card bill by its id
     * @param {string} id - the credit card bill id
     * @returns {Promise<CreditCardBills>} - credit card bill object, if found
     */ async fetchCreditCardBill(id) {
        return await this.createGetRequest(`bills/${id}`);
    }
    /**
     * Fetch all available categories
     * @returns {Categories[]} an paging response of categories
     */ async fetchCategories() {
        return await this.createGetRequest('categories');
    }
    /**
     * Fetch a single category
     * @returns {Category} a category object
     */ async fetchCategory(id) {
        return await this.createGetRequest(`categories/${id}`);
    }
    /**
     * Fetch the category rules of your client
     * @returns {PageResponse<ClientCategoryRule>} paged response of category rules
     */ async fetchCategoryRules() {
        return await this.createGetRequest('categories/rules');
    }
    /**
     * Create a category rule: transactions matching the description are assigned the given category
     * @param rule - the rule to create
     * @returns {ClientCategoryRule} the created category rule
     */ async createCategoryRule(rule) {
        return await this.createPostRequest('categories/rules', null, rule);
    }
    /**
     * Delete a category rule. Clients can only delete their own rules.
     * @param id - the category rule id
     */ async deleteCategoryRule(id) {
        await this.createDeleteRequest(`categories/rules/${id}`);
    }
    /**
     * Fetch merchant information for a list of CNPJs
     * @param cnpjs - list of CNPJs to look up (sent as a comma-separated list)
     * @returns {MerchantsResponse} found merchants, valid CNPJs that were not found, and invalid CNPJs
     */ async fetchMerchants(cnpjs) {
        return await this.createGetRequest('merchants', {
            cnpjs: cnpjs.join(',')
        });
    }
    /**
     * BETA: Boleto Management is in beta and may change.
     *
     * Create a boleto connection from the institution's credentials
     * @param payload - the connector id (with `supportsBoletoManagement`) and its credentials
     * @returns {BoletoConnection} the created boleto connection
     */ async createBoletoConnection(payload) {
        return await this.createPostRequest('boleto-connections', null, payload);
    }
    /**
     * BETA: Boleto Management is in beta and may change.
     *
     * Create a boleto connection from an existing Item
     * @param payload - the Item id
     * @returns {BoletoConnection} the created boleto connection
     */ async createBoletoConnectionFromItem(payload) {
        return await this.createPostRequest('boleto-connections/from-item', null, payload);
    }
    /**
     * BETA: Boleto Management is in beta and may change.
     *
     * Issue a boleto through a boleto connection
     * @param payload - the boleto connection id and the boleto data
     * @returns {IssuedBoleto} the issued boleto
     */ async createBoleto(payload) {
        return await this.createPostRequest('boletos', null, payload);
    }
    /**
     * BETA: Boleto Management is in beta and may change.
     *
     * Fetch a single issued boleto
     * @param id - the boleto id
     * @returns {IssuedBoleto} the issued boleto
     */ async fetchBoleto(id) {
        return await this.createGetRequest(`boletos/${id}`);
    }
    /**
     * BETA: Boleto Management is in beta and may change.
     *
     * Cancel an issued boleto
     * @param id - the boleto id
     * @returns {IssuedBoleto} the cancelled boleto
     */ async cancelBoleto(id) {
        return await this.createPostRequest(`boletos/${id}/cancel`);
    }
    /**
     * Fetch a single webhook
     * @returns {Webhook} a webhook object
     */ async fetchWebhook(id) {
        return await this.createGetRequest(`webhooks/${id}`);
    }
    /**
     * Fetch all available webhooks
     * @returns {Webhook[]} a paging response of webhooks
     */ async fetchWebhooks() {
        return await this.createGetRequest('webhooks');
    }
    /**
     * Creates a Webhook
     * @param webhookParams - The webhook params to create, this includes:
     * - url: The url where will receive notifications
     * - event: The event to listen for
     * - headers (optional): The headers to send with the webhook
     * @returns {Webhook} the created webhook object
     */ async createWebhook(event, url, headers) {
        return await this.createPostRequest(`webhooks`, null, {
            event,
            url,
            headers
        });
    }
    /**
     * Updates a Webhook
     * @param id - The Webhook ID
     * @param updatedWebhookParams - The webhook params to update
     * @returns {Webhook} The webhook updated
     */ async updateWebhook(id, updatedWebhookParams) {
        return await this.createPatchRequest(`webhooks/${id}`, null, updatedWebhookParams);
    }
    /**
     * Deletes a Webhook
     */ async deleteWebhook(id) {
        return await this.createDeleteRequest(`webhooks/${id}`);
    }
    /**
     * Creates a connect token that can be used as API KEY to connect items from the Frontend
     * @returns {string} Access token to connect items with restrict access
     */ async createConnectToken(itemId, options) {
        return await this.createPostRequest(`connect_token`, null, {
            itemId,
            options
        });
    }
}
exports.PluggyClient = PluggyClient;
}),
"[project]/node_modules/pluggy-sdk/dist/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/pluggy-sdk/dist/types/index.js [app-route] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/pluggy-sdk/dist/client.js [app-route] (ecmascript)"), exports);
}),
"[project]/node_modules/pluggy-sdk/dist/paymentsClient.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PluggyPaymentsClient = void 0;
const baseApi_1 = __turbopack_context__.r("[project]/node_modules/pluggy-sdk/dist/baseApi.js [app-route] (ecmascript)");
/**
 * Creates a new client instance for interacting with Pluggy API for the Payments API
 * @constructor
 * @param API_KEY for authenticating to the API
 * @returns {PluggyPaymentsClient} a client for making requests
 */ class PluggyPaymentsClient extends baseApi_1.BaseApi {
    /**
     * Creates a payment request
     * @returns {PaymentRequest} PaymentRequest object
     */ async createPaymentRequest(paymentRequest) {
        return await this.createPostRequest(`payments/requests`, null, paymentRequest);
    }
    /**
     * Creates a payment request from a PIX QR code
     * @param payload CreatePixQrPaymentRequest with the PIX QR code
     * @returns {PaymentRequest} PaymentRequest object
     */ async createPixQrPaymentRequest(payload) {
        return await this.createPostRequest('payments/requests/pix-qr', null, payload);
    }
    /**
     * Fetch a single payment request
     * @returns {PaymentRequest} PaymentRequest object
     */ async fetchPaymentRequest(id) {
        return await this.createGetRequest(`payments/requests/${id}`);
    }
    /**
     * Fetch all payment requests
     * @returns {PageResponse<PaymentRequest>} paged response of payment requests
     */ async fetchPaymentRequests(options = {}) {
        return await this.createGetRequest('payments/requests', {
            ...options
        });
    }
    /**
     * Delete a payment request
     */ async deletePaymentRequest(id) {
        await this.createDeleteRequest(`payments/requests/${id}`);
    }
    /**
     * Creates a payment intent
     * @returns {PaymentIntent} PaymentIntent object
     */ async createPaymentIntent(params) {
        return await this.createPostRequest(`payments/intents`, null, params);
    }
    /**
     * Fetch a single payment intent
     * @returns {PaymentIntent} PaymentIntent object
     */ async fetchPaymentIntent(id) {
        return await this.createGetRequest(`payments/intents/${id}`);
    }
    /**
     * Fetch all payment intents
     * @returns {PageResponse<PaymentIntent>} paged response of payment intents
     */ async fetchPaymentIntents(options = {}) {
        return await this.createGetRequest('payments/intents', {
            ...options
        });
    }
    /**
     * Creates a payment customer
     * @returns {PaymentCustomer} PaymentCustomer object
     */ async createPaymentCustomer(payload) {
        return await this.createPostRequest(`payments/customers`, null, payload);
    }
    /**
     * Fetch a single payment customer
     * @returns {PaymentCustomer} PaymentCustomer object
     */ async fetchPaymentCustomer(id) {
        return await this.createGetRequest(`payments/customers/${id}`);
    }
    /**
     * Fetch all payment customers
     * @returns {PageResponse<PaymentCustomer>} paged response of payment customers
     */ async fetchPaymentCustomers(options = {}) {
        return await this.createGetRequest('payments/customers', {
            ...options
        });
    }
    /**
     * Delete a payment customer
     */ async deletePaymentCustomer(id) {
        await this.createDeleteRequest(`payments/customers/${id}`);
    }
    async updatePaymentCustomer(id, payload) {
        return await this.createPatchRequest(`payments/customers/${id}`, null, payload);
    }
    /**
     * Creates a payment recipient (bank account)
     * @returns {PaymentRecipient} PaymentRecipient object
     */ async createPaymentRecipient(payload) {
        return await this.createPostRequest(`payments/recipients`, null, payload);
    }
    /**
     * Fetch a single payment recipient
     * @returns {PaymentRecipient} PaymentRecipient object
     */ async fetchPaymentRecipient(id) {
        return await this.createGetRequest(`payments/recipients/${id}`);
    }
    /**
     * Fetch all payment recipients
     * @returns {PageResponse<PaymentRecipient>} paged response of payment recipients
     */ async fetchPaymentRecipients(options = {}) {
        return await this.createGetRequest('payments/recipients', {
            ...options
        });
    }
    /**
     * Delete a payment recipient
     */ async deletePaymentRecipient(id) {
        await this.createDeleteRequest(`payments/recipients/${id}`);
    }
    /**
     * Update a payment recipient
     * @param id ID of the payment recipient
     * @param payload Fields to update
     * @returns {PaymentRecipient} PaymentRecipient object
     */ async updatePaymentRecipient(id, payload) {
        return await this.createPatchRequest(`payments/recipients/${id}`, null, payload);
    }
    /**
     * Fetch a single payment recipient institution
     * @returns {PaymentInstitution} PaymentInstitution object
     */ async fetchPaymentInstitution(id) {
        return await this.createGetRequest(`payments/recipients/institutions/${id}`);
    }
    /**
     * Fetch all payment recipient institutions
     * @returns {PageResponse<PaymentInstitution>} paged response of payment recipient institutions
     */ async fetchPaymentInstitutions(options) {
        return await this.createGetRequest('payments/recipients/institutions', {
            ...options
        });
    }
    /**
     * Create a bulk payment
     * @returns {BulkPayment} BulkPayment object
     */ async createBulkPayment(payload) {
        return await this.createPostRequest(`payments/bulk`, null, payload);
    }
    /**
     * Fetch a single bulk payment
     * @returns {BulkPayment} BulkPayment object
     */ async fetchBulkPayment(id) {
        return await this.createGetRequest(`payments/bulk/${id}`);
    }
    /**
     * Fetch all bulk payments
     * @returns {PageResponse<BulkPayment>} paged response of bulk payments
     */ async fetchBulkPayments(options = {}) {
        return await this.createGetRequest('payments/bulk', options);
    }
    /** Deletes the bulk payment */ async deleteBulkPayment(id) {
        await this.createDeleteRequest(`payments/bulk/${id}`);
    }
    /**
     * Creates a smart account
     * @returns {SmartAccount} SmartAccount object
     */ async createSmartAccount(payload) {
        return await this.createPostRequest(`payments/smart-accounts`, null, payload);
    }
    /**
     * Fetch a single smart account
     * @returns {SmartAccount} SmartAccount object
     */ async fetchSmartAccount(id) {
        return await this.createGetRequest(`payments/smart-accounts/${id}`);
    }
    /**
     * Fetch a smart account current balance
     * @returns {SmartAccountBalance} SmartAccountBalance object
     */ async fetchSmartAccountBalance(id) {
        return await this.createGetRequest(`payments/smart-accounts/${id}/balance`);
    }
    /**
     * Fetch all smart accounts
     * @returns {PageResponse<SmartAccount>} paged response of smart accounts
     */ async fetchSmartAccounts(options = {}) {
        return await this.createGetRequest('payments/smart-accounts', options);
    }
    /**
     * Creates a payment request automatic pix
     * @param pixAutomaticPayload CreatePaymentRequestAutomaticPix
     * @returns {PaymentRequestAutomaticPix} PaymentRequestAutomaticPix object
     */ async createPaymentRequestPixAutomatico(pixAutomaticPayload) {
        return await this.createPostRequest(`payments/requests/automatic-pix`, null, pixAutomaticPayload);
    }
    /**
     * Fetch all scheduled payments from a payment request
     * @param paymentRequest ID of the payment request
     */ async fetchScheduledPayments(paymentRequest) {
        return await this.createGetRequest(`payments/requests/${paymentRequest}/schedules`);
    }
    /**
     * Fetch a single scheduled payment from a payment request
     * @param paymentRequest ID of the payment request
     * @param scheduleId ID of the scheduled payment
     */ async fetchScheduledPayment(paymentRequest, scheduleId) {
        return await this.createGetRequest(`payments/requests/${paymentRequest}/schedules/${scheduleId}`);
    }
    /**
     * Cancel a scheduled payment from a payment request
     * @param paymentRequest ID of the payment request
     * @param scheduleId ID of the scheduled payment
     */ async cancelScheduledPayment(paymentRequest, scheduleId) {
        await this.createPostRequest(`payments/requests/${paymentRequest}/schedules/${scheduleId}/cancel`);
    }
    /**
     * Cancel the payment request authorization of a scheduled payment (cancel all pending payments)
     * @param paymentRequest ID of the payment request
     */ async cancelScheduledPayments(paymentRequest) {
        await this.createPostRequest(`payments/requests/${paymentRequest}/schedules/cancel`);
    }
    /**
     * Schedule a new payment for an existing Pix Automático authorization
     * @param authorizationId ID of the Pix Automático authorization
     * @param payload ScheduleAutomaticPixPaymentRequest
     * @returns {AutomaticPixPayment} AutomaticPixPayment object
     */ async scheduleAutomaticPixPayment(authorizationId, payload) {
        return await this.createPostRequest(`payments/requests/${authorizationId}/automatic-pix/schedule`, null, payload);
    }
    /**
     * Retry a failed scheduled Pix Automático payment
     * @param paymentRequestId ID of the payment request
     * @param automaticPixPaymentId ID of the Pix Automático authorization
     * @param payload RetryAutomaticPixPaymentRequest
     * @returns {AutomaticPixPayment} AutomaticPixPayment object
     */ async retryAutomaticPixPayment(paymentRequestId, automaticPixPaymentId, payload) {
        return await this.createPostRequest(`payments/requests/${paymentRequestId}/automatic-pix/schedules/${automaticPixPaymentId}/retry`, null, payload);
    }
    /**
     * List scheduled Pix Automático payments for an authorization
     * @param automaticPixPaymentId ID of the Pix Automático authorization
     * @param options PaymentPixAutomaticFilters
     * @returns {AutomaticPixPaymentListResponse} List of scheduled payments
     */ async fetchAutomaticPixPayments(automaticPixPaymentId, options) {
        return await this.createGetRequest(`payments/requests/${automaticPixPaymentId}/automatic-pix/schedules`, options);
    }
    /**
     * Fetch a single scheduled Pix Automático payment
     * @param paymentRequestId ID of the payment request
     * @param automaticPixPaymentId ID of the Pix Automático authorization
     * @returns {AutomaticPixPayment} AutomaticPixPayment object
     */ async fetchAutomaticPixPayment(paymentRequestId, automaticPixPaymentId) {
        return await this.createGetRequest(`payments/requests/${paymentRequestId}/automatic-pix/schedules/${automaticPixPaymentId}`);
    }
    /**
     * Cancel a scheduled Pix Automático payment
     * @param paymentRequestId ID of the payment request
     * @param automaticPixPaymentId ID of the Pix Automático authorization
     */ async cancelAutomaticPixPayment(paymentRequestId, automaticPixPaymentId) {
        await this.createPostRequest(`payments/requests/${paymentRequestId}/automatic-pix/schedules/${automaticPixPaymentId}/cancel`);
    }
    /**
     * Cancel all scheduled Pix Automático payments for a payment request authorization
     * @param paymentRequestId ID of the payment request
     */ async cancelAutomaticPixAuthorization(paymentRequestId) {
        await this.createPostRequest(`payments/requests/${paymentRequestId}/automatic-pix/cancel`);
    }
    /**
     * Fetch all smart transfer preauthorizations
     * @param options SmartTransferPreauthorizationsFilters with page and pageSize
     * @returns {PageResponse<SmartTransferPreauthorization>} paged response of smart transfer preauthorizations
     */ async fetchSmartTransferPreauthorizations(options = {}) {
        return await this.createGetRequest('smart-transfers/preauthorizations', {
            ...options
        });
    }
    /**
     * Creates a smart transfer preauthorization
     * @param payload CreateSmartTransferPreauthorization
     * @returns {SmartTransferPreauthorization} SmartTransferPreauthorization object
     */ async createSmartTransferPreauthorization(payload) {
        return await this.createPostRequest('smart-transfers/preauthorizations', null, payload);
    }
    /**
     * Fetch a single smart transfer preauthorization
     * @param id ID of the smart transfer preauthorization
     * @returns {SmartTransferPreauthorization} SmartTransferPreauthorization object
     */ async fetchSmartTransferPreauthorization(id) {
        return await this.createGetRequest(`smart-transfers/preauthorizations/${id}`);
    }
    /**
     * Fetch the source account balance of a smart transfer preauthorization created with linkedJourney.
     * Each call reads the balance from the institution and counts toward its monthly quota.
     * @param id ID of the smart transfer preauthorization
     * @returns {SmartTransferPreauthorizationBalance} the balance in BRL
     */ async fetchSmartTransferPreauthorizationBalance(id) {
        return await this.createGetRequest(`smart-transfers/preauthorizations/${id}/balance`);
    }
    /**
     * Cancel only the balance permission of a smart transfer preauthorization. The preauthorization stays active.
     * @param id ID of the smart transfer preauthorization
     * @returns {SmartTransferPreauthorization} the preauthorization with the cancelled permission
     */ async cancelSmartTransferPreauthorizationDataConsent(id) {
        return await this.createDeleteRequest(`smart-transfers/preauthorizations/${id}/data-consent`);
    }
    /**
     * Fetch the payments of a smart transfer preauthorization, ordered by date descending
     * @param id ID of the smart transfer preauthorization
     * @param options SmartTransferPreauthorizationPaymentsFilters with from, to, page and pageSize
     * @returns {PageResponse<SmartTransferPayment>} paged response of smart transfer payments
     */ async fetchSmartTransferPreauthorizationPayments(id, options = {}) {
        return await this.createGetRequest(`smart-transfers/preauthorizations/${id}/payments`, {
            ...options
        });
    }
    /**
     * Creates a smart transfer payment
     * @param payload CreateSmartTransferPayment
     * @returns {SmartTransferPayment} SmartTransferPayment object
     */ async createSmartTransferPayment(payload) {
        return await this.createPostRequest('smart-transfers/payments', null, payload);
    }
    /**
     * Fetch a single smart transfer payment
     * @param id ID of the smart transfer payment
     * @returns {SmartTransferPayment} SmartTransferPayment object
     */ async fetchSmartTransferPayment(id) {
        return await this.createGetRequest(`smart-transfers/payments/${id}`);
    }
}
exports.PluggyPaymentsClient = PluggyPaymentsClient;
}),
"[project]/node_modules/pluggy-sdk/dist/transforms.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deserializeJSONWithDates = deserializeJSONWithDates;
/**
 * Simple RegExp to detect a Date string value in the date time string format,
 * a simplified format based on ISO 8601, which is 24 characters long (YYYY-MM-DDTHH:mm:ss.sssZ).
 */ const ISO_DATE_REGEXP = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
/**
 * Deserialize JSON string, using a custom reviver to transform all ISO date strings to Date instances.
 *
 * @param {string} jsonString
 * @returns {unknown} - parsed/deserialized JSON object
 */ function deserializeJSONWithDates(jsonString) {
    return JSON.parse(jsonString, (_key, value)=>{
        if (typeof value === 'string' && ISO_DATE_REGEXP.test(value)) {
            return new Date(value);
        }
        return value;
    });
}
}),
"[project]/node_modules/pluggy-sdk/dist/types/account.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CREDIT_CARD_LIMIT_LINE_NAMES = exports.ACCOUNT_SUBTYPES = exports.ACCOUNT_TYPES = void 0;
exports.ACCOUNT_TYPES = [
    'BANK',
    'CREDIT'
];
exports.ACCOUNT_SUBTYPES = [
    'SAVINGS_ACCOUNT',
    'CHECKING_ACCOUNT',
    'CREDIT_CARD'
];
exports.CREDIT_CARD_LIMIT_LINE_NAMES = [
    'CREDITO_A_VISTA',
    'CREDITO_PARCELADO',
    'SAQUE_CREDITO_BRASIL',
    'SAQUE_CREDITO_EXTERIOR',
    'EMPRESTIMO_CARTAO_CONSIGNADO',
    'OUTROS'
];
}),
"[project]/node_modules/pluggy-sdk/dist/types/accountStatement.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
}),
"[project]/node_modules/pluggy-sdk/dist/types/auth.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
}),
"[project]/node_modules/pluggy-sdk/dist/types/boleto.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BOLETO_PAYMENT_ORIGINS = exports.BOLETO_STATUSES = exports.BOLETO_INTEREST_TYPES = exports.BOLETO_FINE_TYPES = void 0;
exports.BOLETO_FINE_TYPES = [
    'PERCENTAGE',
    'FIXED'
];
exports.BOLETO_INTEREST_TYPES = [
    'PERCENTAGE'
];
exports.BOLETO_STATUSES = [
    'OPEN',
    'PAID',
    'OVERDUE',
    'CANCELLED',
    'PROTESTED'
];
exports.BOLETO_PAYMENT_ORIGINS = [
    'PIX',
    'BOLETO'
];
}),
"[project]/node_modules/pluggy-sdk/dist/types/category.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
}),
"[project]/node_modules/pluggy-sdk/dist/types/common.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.COUNTRY_CODES = exports.CURRENCY_CODES = void 0;
exports.CURRENCY_CODES = [
    'AED',
    'AFN',
    'ALL',
    'AMD',
    'ANG',
    'AOA',
    'ARS',
    'AUD',
    'AWG',
    'AZN',
    'BAM',
    'BBD',
    'BDT',
    'BGN',
    'BHD',
    'BIF',
    'BMD',
    'BND',
    'BOB',
    'BOV',
    'BRL',
    'BSD',
    'BTN',
    'BWP',
    'BYN',
    'BZD',
    'CAD',
    'CDF',
    'CHE',
    'CHF',
    'CHW',
    'CLF',
    'CLP',
    'COP',
    'COU',
    'CRC',
    'CUP',
    'CVE',
    'CZK',
    'DJF',
    'DKK',
    'DOP',
    'DZD',
    'EGP',
    'ERN',
    'ETB',
    'EUR',
    'FJD',
    'FKP',
    'GBP',
    'GEL',
    'GHS',
    'GIP',
    'GMD',
    'GNF',
    'GTQ',
    'GYD',
    'HKD',
    'HNL',
    'HTG',
    'HUF',
    'IDR',
    'ILS',
    'INR',
    'IQD',
    'IRR',
    'ISK',
    'JMD',
    'JOD',
    'JPY',
    'KES',
    'KGS',
    'KHR',
    'KMF',
    'KPW',
    'KRW',
    'KWD',
    'KYD',
    'KZT',
    'LAK',
    'LBP',
    'LKR',
    'LRD',
    'LSL',
    'LYD',
    'MAD',
    'MDL',
    'MGA',
    'MKD',
    'MMK',
    'MNT',
    'MOP',
    'MRU',
    'MUR',
    'MVR',
    'MWK',
    'MXN',
    'MXV',
    'MYR',
    'MZN',
    'NAD',
    'NGN',
    'NIO',
    'NOK',
    'NPR',
    'NZD',
    'OMR',
    'PAB',
    'PEN',
    'PGK',
    'PHP',
    'PKR',
    'PLN',
    'PYG',
    'QAR',
    'RON',
    'RSD',
    'CNY',
    'RUB',
    'RWF',
    'SAR',
    'SBD',
    'SCR',
    'SDG',
    'SEK',
    'SGD',
    'SHP',
    'SLE',
    'SLL',
    'SOS',
    'SRD',
    'SSP',
    'STN',
    'SVC',
    'SYP',
    'SZL',
    'THB',
    'TJS',
    'TMT',
    'TND',
    'TOP',
    'TRY',
    'TTD',
    'TWD',
    'TZS',
    'UAH',
    'UGX',
    'USD',
    'USN',
    'UYI',
    'UYU',
    'UYW',
    'UZS',
    'VED',
    'VES',
    'VND',
    'VUV',
    'WST',
    'XAF',
    'XAG',
    'XAU',
    'XBA',
    'XBB',
    'XBC',
    'XBD',
    'XCD',
    'XDR',
    'XOF',
    'XPD',
    'XPF',
    'XPT',
    'XSU',
    'XTS',
    'XUA',
    'XXX',
    'YER',
    'ZAR',
    'ZMW',
    'ZWL'
];
exports.COUNTRY_CODES = [
    'AR',
    'BR',
    'CO',
    'MX'
];
}),
"[project]/node_modules/pluggy-sdk/dist/types/connector.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CONNECTOR_INCIDENT_STATES = exports.CONNECTOR_INCIDENT_SEVERITIES = exports.CONNECTOR_INCIDENT_KINDS = exports.CONNECTOR_INCIDENT_PRODUCTS = exports.CONNECTOR_INCIDENT_TYPES = exports.CREDENTIAL_TYPES = exports.PRODUCT_TYPES = exports.CONNECTOR_TYPES = void 0;
exports.CONNECTOR_TYPES = [
    'PERSONAL_BANK',
    'BUSINESS_BANK',
    'INVOICE',
    'INVESTMENT',
    'TELECOMMUNICATION',
    'DIGITAL_ECONOMY',
    'PAYMENT_ACCOUNT',
    'OTHER'
];
exports.PRODUCT_TYPES = [
    'ACCOUNTS',
    'CREDIT_CARDS',
    'TRANSACTIONS',
    'PAYMENT_DATA',
    'INVESTMENTS',
    'INVESTMENTS_TRANSACTIONS',
    'IDENTITY',
    'BROKERAGE_NOTE',
    'MOVE_SECURITY',
    'LOANS',
    'ACCOUNT_STATEMENTS'
];
exports.CREDENTIAL_TYPES = [
    'number',
    'password',
    'text',
    'image',
    'select',
    'ethaddress',
    'hcaptcha'
];
/**
 * What is broken, as opposed to how badly (severity) or how far along Pluggy is
 * (state). Use it to group the same problem across institutions, and to decide
 * which incidents are worth showing your own users: a SCHEDULED_MAINTENANCE and
 * a TRANSACTIONS_MISSING both read as "degraded" otherwise. OTHER means Pluggy
 * has not classified it, not that nothing is wrong.
 */ exports.CONNECTOR_INCIDENT_TYPES = [
    /** Whether you can connect at all. */ 'CONNECTOR_UNAVAILABLE',
    'CONNECTOR_DEGRADED',
    'INSTITUTION_OUTAGE',
    'SCHEDULED_MAINTENANCE',
    /** It answers, but the connection does not complete or does not refresh. */ 'CONSENT_ERROR',
    'CONNECTION_NOT_UPDATING',
    'PARTIAL_SUCCESS',
    /** It connects and syncs, but what comes back is wrong or incomplete. */ 'ACCOUNTS_MISSING',
    'BALANCE_INCORRECT',
    'TRANSACTIONS_MISSING',
    'TRANSACTIONS_INCORRECT',
    'TRANSACTIONS_INSTALLMENTS_ISSUE',
    'INVESTMENTS_MISSING',
    'INVESTMENTS_INCORRECT',
    'IDENTITY_MISSING',
    'HISTORICAL_DATA_MISSING',
    /** Pluggy's own platform, not the institution's. */ 'WEBHOOK_DELAY',
    'PAYMENT_FAILURE',
    'OTHER'
];
/** Product line an incident affects. */ exports.CONNECTOR_INCIDENT_PRODUCTS = [
    'dados',
    'pis',
    'pis-agendado',
    'pixauto',
    'smart',
    'infra'
];
exports.CONNECTOR_INCIDENT_KINDS = [
    'INCIDENT',
    'MAINTENANCE'
];
exports.CONNECTOR_INCIDENT_SEVERITIES = [
    'DEGRADED',
    'PARTIAL_OUTAGE',
    'MAJOR_OUTAGE',
    'MAINTENANCE'
];
exports.CONNECTOR_INCIDENT_STATES = [
    'INVESTIGATING',
    'IDENTIFIED',
    'MONITORING',
    'SCHEDULED'
];
}),
"[project]/node_modules/pluggy-sdk/dist/types/consent.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
}),
"[project]/node_modules/pluggy-sdk/dist/types/creditCardBills.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CREDIT_CARD_BILL_PAYMENT_MODES = exports.CREDIT_CARD_BILL_PAYMENT_VALUE_TYPES = exports.CREDIT_CARD_BILL_FINANCE_CHARGE_TYPES = void 0;
exports.CREDIT_CARD_BILL_FINANCE_CHARGE_TYPES = [
    'LATE_PAYMENT_REMUNERATIVE_INTEREST',
    'LATE_PAYMENT_FEE',
    'LATE_PAYMENT_INTEREST',
    'IOF',
    'OTHER'
];
exports.CREDIT_CARD_BILL_PAYMENT_VALUE_TYPES = [
    'INSTALLMENT_PAYMENT',
    'FULL_PAYMENT',
    'OTHER_PAYMENT'
];
exports.CREDIT_CARD_BILL_PAYMENT_MODES = [
    'DEBIT_ACCOUNT',
    'BANK_SLIP',
    'PAYROLL_DEDUCTION',
    'PIX'
];
}),
"[project]/node_modules/pluggy-sdk/dist/types/execution.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EXECUTION_FINISHED_STATUSES = void 0;
const CONNECTOR_EXECUTION_STATUSES = [
    'LOGIN_IN_PROGRESS',
    'WAITING_USER_INPUT',
    'WAITING_USER_ACTION',
    'LOGIN_MFA_IN_PROGRESS',
    'ACCOUNTS_IN_PROGRESS',
    'TRANSACTIONS_IN_PROGRESS',
    'PAYMENT_DATA_IN_PROGRESS',
    'CREDITCARDS_IN_PROGRESS',
    'INVESTMENTS_IN_PROGRESS',
    'INVESTMENTS_TRANSACTIONS_IN_PROGRESS',
    'IDENTITY_IN_PROGRESS',
    'LOANS_IN_PROGRESS',
    'ACCOUNT_STATEMENTS_IN_PROGRESS'
];
const EXECUTION_ERROR_CODES = [
    'INVALID_CREDENTIALS',
    'ALREADY_LOGGED_IN',
    'UNEXPECTED_ERROR',
    'INVALID_CREDENTIALS_MFA',
    'SITE_NOT_AVAILABLE',
    'ACCOUNT_LOCKED',
    'ACCOUNT_CREDENTIALS_RESET',
    'CONNECTION_ERROR',
    'ACCOUNT_NEEDS_ACTION',
    'USER_AUTHORIZATION_PENDING',
    'USER_AUTHORIZATION_NOT_GRANTED',
    'USER_NOT_SUPPORTED',
    'USER_INPUT_TIMEOUT'
];
exports.EXECUTION_FINISHED_STATUSES = [
    ...EXECUTION_ERROR_CODES,
    'MERGE_ERROR',
    'ERROR',
    'SUCCESS',
    'PARTIAL_SUCCESS'
];
const EXECUTION_STATUSES = [
    'CREATING',
    'CREATE_ERROR',
    'CREATED',
    ...CONNECTOR_EXECUTION_STATUSES,
    ...exports.EXECUTION_FINISHED_STATUSES
];
}),
"[project]/node_modules/pluggy-sdk/dist/types/identity.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
}),
"[project]/node_modules/pluggy-sdk/dist/types/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Type definitions for Pluggy
// Definitions by: Pluggy <https://github.com/pluggyai>
var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/pluggy-sdk/dist/types/account.js [app-route] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/pluggy-sdk/dist/types/auth.js [app-route] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/pluggy-sdk/dist/types/category.js [app-route] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/pluggy-sdk/dist/types/common.js [app-route] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/pluggy-sdk/dist/types/connector.js [app-route] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/pluggy-sdk/dist/types/consent.js [app-route] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/pluggy-sdk/dist/types/creditCardBills.js [app-route] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/pluggy-sdk/dist/types/execution.js [app-route] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/pluggy-sdk/dist/types/identity.js [app-route] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/pluggy-sdk/dist/types/investment.js [app-route] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/pluggy-sdk/dist/types/item.js [app-route] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/pluggy-sdk/dist/types/loan.js [app-route] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/pluggy-sdk/dist/types/payments/index.js [app-route] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/pluggy-sdk/dist/types/transaction.js [app-route] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/pluggy-sdk/dist/types/webhook.js [app-route] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/pluggy-sdk/dist/types/accountStatement.js [app-route] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/pluggy-sdk/dist/types/scr.js [app-route] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/pluggy-sdk/dist/types/merchant.js [app-route] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/pluggy-sdk/dist/types/boleto.js [app-route] (ecmascript)"), exports);
}),
"[project]/node_modules/pluggy-sdk/dist/types/investment.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MOVEMENT_TYPES = exports.INVESTMENT_RATE_TYPES = exports.INVESTMENT_TRANSACTION_TYPE = exports.INVESTMENT_SUBTYPES = exports.FIXED_INCOME_INVESTMENT_SUBTYPES = exports.EQUITY_INVESTMENT_SUBTYPES = exports.SECURITY_INVESTMENT_SUBTYPES = exports.MUTUAL_FUND_INVESTMENT_SUBTYPES = exports.COE_INVESTMENT_SUBTYPES = exports.INVESTMENT_STATUS = exports.INVESTMENT_TYPES = void 0;
exports.INVESTMENT_TYPES = [
    'MUTUAL_FUND',
    'SECURITY',
    'EQUITY',
    'COE',
    'FIXED_INCOME',
    'ETF',
    'OTHER'
];
exports.INVESTMENT_STATUS = [
    'ACTIVE',
    'PENDING',
    'TOTAL_WITHDRAWAL'
];
exports.COE_INVESTMENT_SUBTYPES = [
    /*! COE */ 'STRUCTURED_NOTE'
];
exports.MUTUAL_FUND_INVESTMENT_SUBTYPES = [
    /*! Default subtype */ 'INVESTMENT_FUND',
    /*! Multimercados */ 'MULTIMARKET_FUND',
    /*! Fundos de Renda Fixa */ 'FIXED_INCOME_FUND',
    /*! Fundos de Acoes */ 'STOCK_FUND',
    /*! Fundos de ETF */ 'ETF_FUND',
    /*! Fundos Offshores */ 'OFFSHORE_FUND',
    /*! Fundos de Multiestratégia */ 'FIP_FUND',
    /*! Fundos de Cambio/Cambial */ 'EXCHANGE_FUND',
    /*! Fundos de Infraestrutura */ 'FI_INFRA',
    /*! Fundos de Agronegócio */ 'FI_AGRO'
];
exports.SECURITY_INVESTMENT_SUBTYPES = [
    'RETIREMENT'
];
exports.EQUITY_INVESTMENT_SUBTYPES = [
    'STOCK',
    'ETF',
    'REAL_ESTATE_FUND',
    /*! BRAZILIAN_DEPOSITARY_RECEIPT */ 'BDR',
    'DERIVATIVES',
    'OPTION'
];
exports.FIXED_INCOME_INVESTMENT_SUBTYPES = [
    /*! FIXED_INCOME */ 'TREASURY',
    /*! Real State Credit Bill */ 'LCI',
    /*! AGRICULTURAL_CREDIT_BILL */ 'LCA',
    /*! CERTIFICATE_OF_DEPOSIT */ 'CDB',
    /*! REAL_ESTATE_RECEIVABLE_CERTIFICATE */ 'CRI',
    /*! AGRICULTURAL_RECEIVABLE_CERTIFICATE */ 'CRA',
    'CORPORATE_DEBT',
    /*! BILL_OF_EXCHANGE */ 'LC',
    'DEBENTURES'
];
exports.INVESTMENT_SUBTYPES = [
    ...exports.MUTUAL_FUND_INVESTMENT_SUBTYPES,
    ...exports.SECURITY_INVESTMENT_SUBTYPES,
    ...exports.EQUITY_INVESTMENT_SUBTYPES,
    ...exports.FIXED_INCOME_INVESTMENT_SUBTYPES,
    ...exports.COE_INVESTMENT_SUBTYPES,
    'OTHER'
];
exports.INVESTMENT_TRANSACTION_TYPE = [
    'BUY',
    'SELL',
    /*! Tax applied to the investment ie. "Come Contas" */ 'TAX',
    'TRANSFER'
];
/*!
  For extra details visit: https://docs.pluggy.ai/docs/investment-1
  RateTypes represent the index from where the rate is based.
*/ exports.INVESTMENT_RATE_TYPES = [
    'SELIC',
    'CDI',
    'EURO',
    'DOLAR',
    'IGPM',
    'IPCA'
];
/**
 * @typedef MovementType
 * The direction of the transaction.
 * If DEBIT, balance decreasing from the investment.
 * If CREDIT, balance increasing on the investment.
 */ exports.MOVEMENT_TYPES = [
    'DEBIT',
    'CREDIT'
];
}),
"[project]/node_modules/pluggy-sdk/dist/types/item.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ITEM_RESOURCE_TYPES = exports.ITEM_RESOURCE_STATUSES = exports.ITEM_PRODUCT_STEP_WARNING_CODES = void 0;
const ITEM_STATUSES = [
    'UPDATED',
    'UPDATING',
    'WAITING_USER_INPUT',
    'WAITING_USER_ACTION',
    'MERGING',
    'LOGIN_ERROR',
    'OUTDATED'
];
exports.ITEM_PRODUCT_STEP_WARNING_CODES = [
    '001'
];
exports.ITEM_RESOURCE_STATUSES = [
    'AVAILABLE',
    'UNAVAILABLE',
    'TEMPORARILY_UNAVAILABLE',
    'PENDING_AUTHORISATION'
];
exports.ITEM_RESOURCE_TYPES = [
    'ACCOUNT',
    'CREDIT_CARD_ACCOUNT',
    'LOAN',
    'FINANCING',
    'UNARRANGED_ACCOUNT_OVERDRAFT',
    'INVOICE_FINANCING',
    'BANK_FIXED_INCOME',
    'CREDIT_FIXED_INCOME',
    'VARIABLE_INCOME',
    'TREASURE_TITLE',
    'FUND'
];
}),
"[project]/node_modules/pluggy-sdk/dist/types/loan.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LOAN_KINDS = void 0;
exports.LOAN_KINDS = [
    'LOAN',
    'FINANCING',
    'INVOICE_FINANCING',
    'UNARRANGED_ACCOUNT_OVERDRAFT'
];
const LOAN_INSTALLMENT_PERIODICITIES = [
    'WITHOUT_REGULAR_PERIODICITY',
    'WEEKLY',
    'FORTNIGHTLY',
    'MONTHLY',
    'BIMONTHLY',
    'QUARTERLY',
    'SEMESTERLY',
    'YEARLY',
    'OTHERS'
];
const LOAN_AMORTIZATION_TYPES = [
    'SAC',
    'PRICE',
    'SAM',
    'WITHOUT_AMORTIZATION_SYSTEM',
    'OTHERS'
];
const LOAN_TAX_TYPES = [
    'NOMINAL',
    'EFFECTIVE'
];
const LOAN_INTEREST_RATE_TYPES = [
    'SIMPLE',
    'COMPOUND'
];
const LOAN_TAX_PERIODICITIES = [
    'MONTHLY',
    'YEARLY'
];
const LOAN_FEE_CHARGE_TYPES = [
    'UNIQUE',
    'BY_INSTALLMENT'
];
const LOAN_FEE_CHARGES = [
    'MINIMUM',
    'MAXIMUM',
    'FIXED',
    'PERCENTAGE'
];
const LOAN_NUMBER_OF_INSTALLMENTS_TYPES = [
    'DAY',
    'WEEK',
    'MONTH',
    'YEAR',
    'WITHOUT_TOTAL_PERIOD'
];
const LOAN_CONTRACT_REMAINING_TYPES = [
    'DAY',
    'WEEK',
    'MONTH',
    'YEAR',
    'WITHOUT_TOTAL_PERIOD',
    'WITHOUT REMAINING PERIOD'
];
}),
"[project]/node_modules/pluggy-sdk/dist/types/merchant.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
}),
"[project]/node_modules/pluggy-sdk/dist/types/payments/bulkPayment.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BULK_PAYMENT_STATUS = void 0;
exports.BULK_PAYMENT_STATUS = [
    'CREATED',
    'TOP_UP_STARTED',
    'WAITING_PAYER_AUTHORIZATION',
    'TOP_UP_IN_PROGRESS',
    'PAYMENT_IN_PROGRESS',
    'ERROR',
    'COMPLETED'
];
}),
"[project]/node_modules/pluggy-sdk/dist/types/payments/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/pluggy-sdk/dist/types/payments/paymentCustomer.js [app-route] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/pluggy-sdk/dist/types/payments/paymentFilters.js [app-route] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/pluggy-sdk/dist/types/payments/paymentRequest.js [app-route] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/pluggy-sdk/dist/types/payments/paymentIntent.js [app-route] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/pluggy-sdk/dist/types/payments/paymentRecipient.js [app-route] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/pluggy-sdk/dist/types/payments/paymentInstitution.js [app-route] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/pluggy-sdk/dist/types/payments/smartAccount.js [app-route] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/pluggy-sdk/dist/types/payments/bulkPayment.js [app-route] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/pluggy-sdk/dist/types/payments/paymentReceipt.js [app-route] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/pluggy-sdk/dist/types/payments/schedulePayment.js [app-route] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/pluggy-sdk/dist/types/payments/pixAutomatic.js [app-route] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/pluggy-sdk/dist/types/payments/smartTransfers.js [app-route] (ecmascript)"), exports);
}),
"[project]/node_modules/pluggy-sdk/dist/types/payments/paymentCustomer.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PAYMENT_CUSTOMER_TYPE = void 0;
exports.PAYMENT_CUSTOMER_TYPE = [
    'INDIVIDUAL',
    'BUSINESS'
];
}),
"[project]/node_modules/pluggy-sdk/dist/types/payments/paymentFilters.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
}),
"[project]/node_modules/pluggy-sdk/dist/types/payments/paymentInstitution.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
}),
"[project]/node_modules/pluggy-sdk/dist/types/payments/paymentIntent.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PAYMENT_INTENT_STATUSES = exports.PAYMENT_INTENT_ERROR_STATUSES = void 0;
exports.PAYMENT_INTENT_ERROR_STATUSES = [
    'PAYMENT_REJECTED',
    'ERROR',
    'CANCELED',
    'CONSENT_REJECTED',
    'EXPIRED'
];
exports.PAYMENT_INTENT_STATUSES = [
    ...exports.PAYMENT_INTENT_ERROR_STATUSES,
    'STARTED',
    'ENQUEUED',
    'CONSENT_AWAITING_AUTHORIZATION',
    'CONSENT_AUTHORIZED',
    'PAYMENT_PENDING',
    'PAYMENT_PARTIALLY_ACCEPTED',
    'PAYMENT_SETTLEMENT_PROCESSING',
    'PAYMENT_SETTLEMENT_DEBTOR_ACCOUNT',
    'PAYMENT_COMPLETED'
];
}),
"[project]/node_modules/pluggy-sdk/dist/types/payments/paymentReceipt.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
}),
"[project]/node_modules/pluggy-sdk/dist/types/payments/paymentRecipient.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PAYMENT_RECIPIENT_BANK_ACCOUNT_TYPES = void 0;
exports.PAYMENT_RECIPIENT_BANK_ACCOUNT_TYPES = [
    'SAVINGS_ACCOUNT',
    'CHECKING_ACCOUNT',
    'GUARANTEED_ACCOUNT'
];
}),
"[project]/node_modules/pluggy-sdk/dist/types/payments/paymentRequest.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AUTOMATIC_PIX_INTERVALS = exports.PAYMENT_REQUEST_STATUS = void 0;
exports.PAYMENT_REQUEST_STATUS = [
    'CREATED',
    'IN_PROGRESS',
    'COMPLETED',
    'SCHEDULED',
    'WAITING_PAYER_AUTHORIZATION',
    'ERROR',
    'REFUND_IN_PROGRESS',
    'REFUNDED',
    'REFUND_ERROR',
    'EXPIRED',
    'AUTHORIZED',
    'CANCELED'
];
exports.AUTOMATIC_PIX_INTERVALS = [
    'WEEKLY',
    'MONTHLY',
    'QUARTERLY',
    'SEMESTER',
    'YEARLY'
];
}),
"[project]/node_modules/pluggy-sdk/dist/types/payments/pixAutomatic.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AUTOMATIC_PIX_PAYMENT_STATUSES = void 0;
exports.AUTOMATIC_PIX_PAYMENT_STATUSES = [
    'SCHEDULED',
    'CREATED',
    'COMPLETED',
    'CANCELED',
    'ERROR'
];
}),
"[project]/node_modules/pluggy-sdk/dist/types/payments/schedulePayment.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SCHEDULED_PAYMENT_STATUSES = void 0;
exports.SCHEDULED_PAYMENT_STATUSES = [
    'SCHEDULED',
    'COMPLETED',
    'ERROR',
    'CANCELED'
];
}),
"[project]/node_modules/pluggy-sdk/dist/types/payments/smartAccount.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
}),
"[project]/node_modules/pluggy-sdk/dist/types/payments/smartTransfers.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SMART_TRANSFER_DATA_CONSENT_STATUS = exports.SMART_TRANSFER_PAYMENT_STATUS = exports.SMART_TRANSFER_PREAUTHORIZATION_STATUS = void 0;
exports.SMART_TRANSFER_PREAUTHORIZATION_STATUS = [
    'CREATED',
    'COMPLETED',
    'REVOKED',
    'REJECTED',
    'ERROR'
];
exports.SMART_TRANSFER_PAYMENT_STATUS = [
    'PAYMENT_REJECTED',
    'ERROR',
    'CANCELED',
    'CONSENT_REJECTED',
    'CONSENT_AUTHORIZED',
    'PAYMENT_PENDING',
    'PAYMENT_PARTIALLY_ACCEPTED',
    'PAYMENT_SETTLEMENT_PROCESSING',
    'PAYMENT_SETTLEMENT_DEBTOR_ACCOUNT',
    'PAYMENT_COMPLETED'
];
exports.SMART_TRANSFER_DATA_CONSENT_STATUS = [
    'AWAITING_AUTHORISATION',
    'AUTHORISED',
    'REJECTED'
];
}),
"[project]/node_modules/pluggy-sdk/dist/types/scr.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
}),
"[project]/node_modules/pluggy-sdk/dist/types/transaction.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CREDIT_CARD_ACCOUNT_PAYMENT_TYPES = exports.CREDIT_CARD_ACCOUNT_OTHER_CREDIT_TYPES = exports.CREDIT_CARD_ACCOUNT_FEE_TYPES = exports.TransactionStatus = exports.TRANSACTION_TYPES = void 0;
/**
 * @typedef TransactionType
 * The direction of the transaction.
 * If DEBIT money going out of the account.
 * If CREDIT money going into the account.
 */ exports.TRANSACTION_TYPES = [
    'DEBIT',
    'CREDIT'
];
var TransactionStatus;
(function(TransactionStatus) {
    TransactionStatus["PENDING"] = "PENDING";
    TransactionStatus["POSTED"] = "POSTED";
})(TransactionStatus || (exports.TransactionStatus = TransactionStatus = {}));
exports.CREDIT_CARD_ACCOUNT_FEE_TYPES = [
    'ANNUAL_FEE',
    'ATM_WITHDRAWAL_DOMESTIC',
    'ATM_WITHDRAWAL_INTERNATIONAL',
    'EMERGENCY_CREDIT_EVALUATION',
    'CARD_REISSUE',
    'BILL_PAYMENT_FEE',
    'SMS',
    'OTHER'
];
exports.CREDIT_CARD_ACCOUNT_OTHER_CREDIT_TYPES = [
    'REVOLVING_CREDIT',
    'BILL_INSTALLMENT',
    'LOAN',
    'OTHER'
];
exports.CREDIT_CARD_ACCOUNT_PAYMENT_TYPES = [
    'SINGLE',
    'INSTALLMENT'
];
}),
"[project]/node_modules/pluggy-sdk/dist/types/webhook.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WEBHOOK_EVENTS = void 0;
exports.WEBHOOK_EVENTS = [
    'item/created',
    'item/updated',
    'item/error',
    'item/deleted',
    'item/waiting_user_input',
    'item/waiting_user_action',
    'item/login_succeeded',
    'connector/status_updated',
    'transactions/created',
    'transactions/updated',
    'transactions/deleted',
    'payment_intent/created',
    'payment_intent/completed',
    'payment_intent/waiting_payer_authorization',
    'payment_intent/error',
    'scheduled_payment/created',
    'scheduled_payment/completed',
    'scheduled_payment/error',
    'scheduled_payment/canceled',
    'scheduled_payment/all_completed',
    'scheduled_payment/all_created',
    'boleto/updated',
    'all',
    'automatic_pix_payment/created',
    'automatic_pix_payment/completed',
    'automatic_pix_payment/error',
    'automatic_pix_payment/canceled',
    'payment_request/updated',
    "smart_transfer_preauthorization/completed",
    "smart_transfer_preauthorization/error",
    "smart_transfer_payment/completed",
    "smart_transfer_payment/error"
];
}),
"[project]/node_modules/pluggy-sdk/package.json.[json].cjs [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "name": "pluggy-sdk",
    "version": "0.93.0",
    "main": "dist/index.js",
    "typings": "dist/index.d.ts",
    "files": [
        "dist"
    ],
    "license": "MIT",
    "packageManager": "pnpm@11.1.3",
    "engines": {
        "node": ">=12.0.0"
    },
    "devEngines": {
        "runtime": {
            "name": "node",
            "version": ">=24.10.0",
            "onFail": "error"
        }
    },
    "scripts": {
        "test": "jest --testPathIgnorePatterns=tests/integration",
        "test:integration": "jest --testPathPatterns=tests/integration --runInBand",
        "build": "tsc -p tsconfig.build.json",
        "prepare": "pnpm build",
        "prettier-fix": "prettier --write \"src/**/*.ts\"",
        "lint": "pnpm prettier-fix && eslint .",
        "lint:fix": "pnpm lint -- --fix",
        "lint:lockfile": "pnpm install --frozen-lockfile",
        "audit:supply-chain": "pnpm audit && pnpm audit signatures",
        "semantic-release": "semantic-release"
    },
    "repository": "https://github.com/pluggyai/pluggy-node",
    "keywords": [
        "pluggy",
        "pluggy.ai",
        "pluggy-api",
        "aggregation",
        "pluggy-sdk",
        "open banking"
    ],
    "dependencies": {
        "got": "11.8.6",
        "jsonwebtoken": "9.0.3"
    },
    "devDependencies": {
        "@eslint/js": "10.0.1",
        "@semantic-release/commit-analyzer": "13.0.1",
        "@semantic-release/git": "10.0.1",
        "@semantic-release/github": "12.0.10",
        "@semantic-release/npm": "13.2.0",
        "@semantic-release/release-notes-generator": "14.1.1",
        "@types/jest": "30.0.0",
        "@types/jsonwebtoken": "9.0.10",
        "@types/node": "16.18.126",
        "@typescript-eslint/eslint-plugin": "8.70.1",
        "@typescript-eslint/parser": "8.70.1",
        "dotenv": "17.4.2",
        "eslint": "10.11.0",
        "eslint-plugin-n": "17.24.0",
        "globals": "17.6.0",
        "jest": "30.5.2",
        "nock": "14.0.15",
        "prettier": "1.19.1",
        "semantic-release": "25.0.9",
        "ts-jest": "29.4.9",
        "typescript": "6.0.3",
        "typescript-eslint": "8.70.1"
    },
    "release": {
        "branches": [
            "+([0-9])?(.{+([0-9]),x}).x",
            "master",
            {
                "name": "beta",
                "prerelease": true
            },
            {
                "name": "alpha",
                "prerelease": true
            }
        ],
        "plugins": [
            "@semantic-release/commit-analyzer",
            "@semantic-release/release-notes-generator",
            [
                "@semantic-release/npm",
                {
                    "provenance": true
                }
            ],
            "@semantic-release/github",
            [
                "@semantic-release/git",
                {
                    "assets": [
                        "package.json"
                    ],
                    "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
                }
            ]
        ]
    }
};
}),
"[project]/node_modules/postgres-array/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const BACKSLASH = '\\';
const DQUOT = '"';
const LBRACE = '{';
const RBRACE = '}';
const LBRACKET = '[';
const EQUALS = '=';
const COMMA = ',';
/** When the raw value is this, it means a literal `null` */ const NULL_STRING = 'NULL';
/**
 * Parses an array according to
 * https://www.postgresql.org/docs/17/arrays.html#ARRAYS-IO
 *
 * Trusts the data (mostly), so only hook up to trusted Postgres servers.
 */ function makeParseArrayWithTransform(transform) {
    const haveTransform = transform != null;
    return function parseArray(str) {
        const rbraceIndex = str.length - 1;
        if (rbraceIndex === 1) {
            return [];
        }
        if (str[rbraceIndex] !== RBRACE) {
            throw new Error('Invalid array text - must end with }');
        }
        // If starts with `[`, it is specifying the index boundas. Skip past first `=`.
        let position = 0;
        if (str[position] === LBRACKET) {
            position = str.indexOf(EQUALS) + 1;
        }
        if (str[position++] !== LBRACE) {
            throw new Error('Invalid array text - must start with {');
        }
        const output = [];
        let current = output;
        const stack = [];
        let currentStringStart = position;
        let currentString = '';
        let expectValue = true;
        for(; position < rbraceIndex; ++position){
            let char = str[position];
            // > The array output routine will put double quotes around element values if
            // > they are empty strings, contain curly braces, delimiter characters, double
            // > quotes, backslashes, or white space, or match the word NULL. Double quotes
            // > and backslashes embedded in element values will be backslash-escaped.
            if (char === DQUOT) {
                // It's escaped
                currentStringStart = ++position;
                let dquot = str.indexOf(DQUOT, currentStringStart);
                let backSlash = str.indexOf(BACKSLASH, currentStringStart);
                while(backSlash !== -1 && backSlash < dquot){
                    position = backSlash;
                    const part = str.slice(currentStringStart, position);
                    currentString += part;
                    currentStringStart = ++position;
                    if (dquot === position++) {
                        // This was an escaped doublequote; find the next one!
                        dquot = str.indexOf(DQUOT, position);
                    }
                    // Either way, find the next backslash
                    backSlash = str.indexOf(BACKSLASH, position);
                }
                position = dquot;
                const part = str.slice(currentStringStart, position);
                currentString += part;
                current.push(haveTransform ? transform(currentString) : currentString);
                currentString = '';
                expectValue = false;
            } else if (char === LBRACE) {
                const newArray = [];
                current.push(newArray);
                stack.push(current);
                current = newArray;
                currentStringStart = position + 1;
                expectValue = true;
            } else if (char === COMMA) {
                expectValue = true;
            } else if (char === RBRACE) {
                expectValue = false;
                const arr = stack.pop();
                if (arr === undefined) {
                    throw new Error("Invalid array text - too many '}'");
                }
                current = arr;
            } else if (expectValue) {
                currentStringStart = position;
                while((char = str[position]) !== COMMA && char !== RBRACE && position < rbraceIndex){
                    ++position;
                }
                const part = str.slice(currentStringStart, position--);
                current.push(part === NULL_STRING ? null : haveTransform ? transform(part) : part);
                expectValue = false;
            } else {
                throw new Error('Was expecting delimeter');
            }
        }
        return output;
    };
}
const parseArray = makeParseArrayWithTransform();
exports.parse = (source, transform)=>transform != null ? makeParseArrayWithTransform(transform)(source) : parseArray(source);
}),
"[project]/node_modules/pump/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var once = __turbopack_context__.r("[project]/node_modules/once/once.js [app-route] (ecmascript)");
var eos = __turbopack_context__.r("[project]/node_modules/end-of-stream/index.js [app-route] (ecmascript)");
var fs;
try {
    fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)"); // we only need fs to get the ReadStream and WriteStream prototypes
} catch (e) {}
var noop = function() {};
var ancient = typeof process === 'undefined' ? false : /^v?\.0/.test(process.version);
var isFn = function(fn) {
    return typeof fn === 'function';
};
var isFS = function(stream) {
    if (!ancient) return false // newer node version do not need to care about fs is a special way
    ;
    if (!fs) return false // browser
    ;
    return (stream instanceof (fs.ReadStream || noop) || stream instanceof (fs.WriteStream || noop)) && isFn(stream.close);
};
var isRequest = function(stream) {
    return stream.setHeader && isFn(stream.abort);
};
var destroyer = function(stream, reading, writing, callback) {
    callback = once(callback);
    var closed = false;
    stream.on('close', function() {
        closed = true;
    });
    eos(stream, {
        readable: reading,
        writable: writing
    }, function(err) {
        if (err) return callback(err);
        closed = true;
        callback();
    });
    var destroyed = false;
    return function(err) {
        if (closed) return;
        if (destroyed) return;
        destroyed = true;
        if (isFS(stream)) return stream.close(noop) // use close for fs streams to avoid fd leaks
        ;
        if (isRequest(stream)) return stream.abort() // request.destroy just do .end - .abort is what we want
        ;
        if (isFn(stream.destroy)) return stream.destroy();
        callback(err || new Error('stream was destroyed'));
    };
};
var call = function(fn) {
    fn();
};
var pipe = function(from, to) {
    return from.pipe(to);
};
var pump = function() {
    var streams = Array.prototype.slice.call(arguments);
    var callback = isFn(streams[streams.length - 1] || noop) && streams.pop() || noop;
    if (Array.isArray(streams[0])) streams = streams[0];
    if (streams.length < 2) throw new Error('pump requires two streams per minimum');
    var error;
    var destroys = streams.map(function(stream, i) {
        var reading = i < streams.length - 1;
        var writing = i > 0;
        return destroyer(stream, reading, writing, function(err) {
            if (!error) error = err;
            if (err) destroys.forEach(call);
            if (reading) return;
            destroys.forEach(call);
            callback(error);
        });
    });
    return streams.reduce(pipe);
};
module.exports = pump;
}),
"[project]/node_modules/quick-lru/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

class QuickLRU {
    constructor(options = {}){
        if (!(options.maxSize && options.maxSize > 0)) {
            throw new TypeError('`maxSize` must be a number greater than 0');
        }
        this.maxSize = options.maxSize;
        this.onEviction = options.onEviction;
        this.cache = new Map();
        this.oldCache = new Map();
        this._size = 0;
    }
    _set(key, value) {
        this.cache.set(key, value);
        this._size++;
        if (this._size >= this.maxSize) {
            this._size = 0;
            if (typeof this.onEviction === 'function') {
                for (const [key, value] of this.oldCache.entries()){
                    this.onEviction(key, value);
                }
            }
            this.oldCache = this.cache;
            this.cache = new Map();
        }
    }
    get(key) {
        if (this.cache.has(key)) {
            return this.cache.get(key);
        }
        if (this.oldCache.has(key)) {
            const value = this.oldCache.get(key);
            this.oldCache.delete(key);
            this._set(key, value);
            return value;
        }
    }
    set(key, value) {
        if (this.cache.has(key)) {
            this.cache.set(key, value);
        } else {
            this._set(key, value);
        }
        return this;
    }
    has(key) {
        return this.cache.has(key) || this.oldCache.has(key);
    }
    peek(key) {
        if (this.cache.has(key)) {
            return this.cache.get(key);
        }
        if (this.oldCache.has(key)) {
            return this.oldCache.get(key);
        }
    }
    delete(key) {
        const deleted = this.cache.delete(key);
        if (deleted) {
            this._size--;
        }
        return this.oldCache.delete(key) || deleted;
    }
    clear() {
        this.cache.clear();
        this.oldCache.clear();
        this._size = 0;
    }
    *keys() {
        for (const [key] of this){
            yield key;
        }
    }
    *values() {
        for (const [, value] of this){
            yield value;
        }
    }
    *[Symbol.iterator]() {
        for (const item of this.cache){
            yield item;
        }
        for (const item of this.oldCache){
            const [key] = item;
            if (!this.cache.has(key)) {
                yield item;
            }
        }
    }
    get size() {
        let oldCacheSize = 0;
        for (const key of this.oldCache.keys()){
            if (!this.cache.has(key)) {
                oldCacheSize++;
            }
        }
        return Math.min(this._size + oldCacheSize, this.maxSize);
    }
}
module.exports = QuickLRU;
}),
"[project]/node_modules/resolve-alpn/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const tls = __turbopack_context__.r("[externals]/tls [external] (tls, cjs)");
module.exports = (options = {}, connect = tls.connect)=>new Promise((resolve, reject)=>{
        let timeout = false;
        let socket;
        const callback = async ()=>{
            await socketPromise;
            socket.off('timeout', onTimeout);
            socket.off('error', reject);
            if (options.resolveSocket) {
                resolve({
                    alpnProtocol: socket.alpnProtocol,
                    socket,
                    timeout
                });
                if (timeout) {
                    await Promise.resolve();
                    socket.emit('timeout');
                }
            } else {
                socket.destroy();
                resolve({
                    alpnProtocol: socket.alpnProtocol,
                    timeout
                });
            }
        };
        const onTimeout = async ()=>{
            timeout = true;
            callback();
        };
        const socketPromise = (async ()=>{
            try {
                socket = await connect(options, callback);
                socket.on('error', reject);
                socket.once('timeout', onTimeout);
            } catch (error) {
                reject(error);
            }
        })();
    });
}),
"[project]/node_modules/responselike/src/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const Readable = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Readable;
const lowercaseKeys = __turbopack_context__.r("[project]/node_modules/lowercase-keys/index.js [app-route] (ecmascript)");
class Response extends Readable {
    constructor(statusCode, headers, body, url){
        if (typeof statusCode !== 'number') {
            throw new TypeError('Argument `statusCode` should be a number');
        }
        if (typeof headers !== 'object') {
            throw new TypeError('Argument `headers` should be an object');
        }
        if (!(body instanceof Buffer)) {
            throw new TypeError('Argument `body` should be a buffer');
        }
        if (typeof url !== 'string') {
            throw new TypeError('Argument `url` should be a string');
        }
        super();
        this.statusCode = statusCode;
        this.headers = lowercaseKeys(headers);
        this.body = body;
        this.url = url;
    }
    _read() {
        this.push(this.body);
        this.push(null);
    }
}
module.exports = Response;
}),
"[project]/node_modules/safe-buffer/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ /* eslint-disable node/no-deprecated-api */ var buffer = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)");
var Buffer = buffer.Buffer;
// alternative to using Object.keys for old browsers
function copyProps(src, dst) {
    for(var key in src){
        dst[key] = src[key];
    }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
    module.exports = buffer;
} else {
    // Copy properties from require('buffer')
    copyProps(buffer, exports);
    exports.Buffer = SafeBuffer;
}
function SafeBuffer(arg, encodingOrOffset, length) {
    return Buffer(arg, encodingOrOffset, length);
}
SafeBuffer.prototype = Object.create(Buffer.prototype);
// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer);
SafeBuffer.from = function(arg, encodingOrOffset, length) {
    if (typeof arg === 'number') {
        throw new TypeError('Argument must not be a number');
    }
    return Buffer(arg, encodingOrOffset, length);
};
SafeBuffer.alloc = function(size, fill, encoding) {
    if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number');
    }
    var buf = Buffer(size);
    if (fill !== undefined) {
        if (typeof encoding === 'string') {
            buf.fill(fill, encoding);
        } else {
            buf.fill(fill);
        }
    } else {
        buf.fill(0);
    }
    return buf;
};
SafeBuffer.allocUnsafe = function(size) {
    if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number');
    }
    return Buffer(size);
};
SafeBuffer.allocUnsafeSlow = function(size) {
    if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number');
    }
    return buffer.SlowBuffer(size);
};
}),
"[project]/node_modules/semver/classes/comparator.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const ANY = Symbol('SemVer ANY');
// hoisted class for cyclic dependency
class Comparator {
    static get ANY() {
        return ANY;
    }
    constructor(comp, options){
        options = parseOptions(options);
        if (comp instanceof Comparator) {
            if (comp.loose === !!options.loose) {
                return comp;
            } else {
                comp = comp.value;
            }
        }
        comp = comp.trim().split(/\s+/).join(' ');
        debug('comparator', comp, options);
        this.options = options;
        this.loose = !!options.loose;
        this.parse(comp);
        if (this.semver === ANY) {
            this.value = '';
        } else {
            this.value = this.operator + this.semver.version;
        }
        debug('comp', this);
    }
    parse(comp) {
        const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
        const m = comp.match(r);
        if (!m) {
            throw new TypeError(`Invalid comparator: ${comp}`);
        }
        this.operator = m[1] !== undefined ? m[1] : '';
        if (this.operator === '=') {
            this.operator = '';
        }
        // if it literally is just '>' or '' then allow anything.
        if (!m[2]) {
            this.semver = ANY;
        } else {
            this.semver = new SemVer(m[2], this.options.loose);
        }
    }
    toString() {
        return this.value;
    }
    test(version) {
        debug('Comparator.test', version, this.options.loose);
        if (this.semver === ANY || version === ANY) {
            return true;
        }
        if (typeof version === 'string') {
            try {
                version = new SemVer(version, this.options);
            } catch (er) {
                return false;
            }
        }
        return cmp(version, this.operator, this.semver, this.options);
    }
    intersects(comp, options) {
        if (!(comp instanceof Comparator)) {
            throw new TypeError('a Comparator is required');
        }
        if (this.operator === '') {
            if (this.value === '') {
                return true;
            }
            return new Range(comp.value, options).test(this.value);
        } else if (comp.operator === '') {
            if (comp.value === '') {
                return true;
            }
            return new Range(this.value, options).test(comp.semver);
        }
        options = parseOptions(options);
        // Special cases where nothing can possibly be lower
        if (options.includePrerelease && (this.value === '<0.0.0-0' || comp.value === '<0.0.0-0')) {
            return false;
        }
        if (!options.includePrerelease && (this.value.startsWith('<0.0.0') || comp.value.startsWith('<0.0.0'))) {
            return false;
        }
        // Same direction increasing (> or >=)
        if (this.operator.startsWith('>') && comp.operator.startsWith('>')) {
            return true;
        }
        // Same direction decreasing (< or <=)
        if (this.operator.startsWith('<') && comp.operator.startsWith('<')) {
            return true;
        }
        // same SemVer and both sides are inclusive (<= or >=)
        if (this.semver.version === comp.semver.version && this.operator.includes('=') && comp.operator.includes('=')) {
            return true;
        }
        // opposite directions less than
        if (cmp(this.semver, '<', comp.semver, options) && this.operator.startsWith('>') && comp.operator.startsWith('<')) {
            return true;
        }
        // opposite directions greater than
        if (cmp(this.semver, '>', comp.semver, options) && this.operator.startsWith('<') && comp.operator.startsWith('>')) {
            return true;
        }
        return false;
    }
}
module.exports = Comparator;
const parseOptions = __turbopack_context__.r("[project]/node_modules/semver/internal/parse-options.js [app-route] (ecmascript)");
const { safeRe: re, t } = __turbopack_context__.r("[project]/node_modules/semver/internal/re.js [app-route] (ecmascript)");
const cmp = __turbopack_context__.r("[project]/node_modules/semver/functions/cmp.js [app-route] (ecmascript)");
const debug = __turbopack_context__.r("[project]/node_modules/semver/internal/debug.js [app-route] (ecmascript)");
const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [app-route] (ecmascript)");
const Range = __turbopack_context__.r("[project]/node_modules/semver/classes/range.js [app-route] (ecmascript)");
}),
"[project]/node_modules/semver/classes/range.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SPACE_CHARACTERS = /\s+/g;
// hoisted class for cyclic dependency
class Range {
    constructor(range, options){
        options = parseOptions(options);
        if (range instanceof Range) {
            if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
                return range;
            } else {
                return new Range(range.raw, options);
            }
        }
        if (range instanceof Comparator) {
            // just put it in the set and return
            this.raw = range.value;
            this.set = [
                [
                    range
                ]
            ];
            this.formatted = undefined;
            return this;
        }
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        // First reduce all whitespace as much as possible so we do not have to rely
        // on potentially slow regexes like \s*. This is then stored and used for
        // future error messages as well.
        this.raw = range.trim().replace(SPACE_CHARACTERS, ' ');
        // First, split on ||
        this.set = this.raw.split('||')// map the range to a 2d array of comparators
        .map((r)=>this.parseRange(r.trim()))// throw out any comparator lists that are empty
        // this generally means that it was not a valid range, which is allowed
        // in loose mode, but will still throw if the WHOLE range is invalid.
        .filter((c)=>c.length);
        if (!this.set.length) {
            throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
        }
        // if we have any that are not the null set, throw out null sets.
        if (this.set.length > 1) {
            // keep the first one, in case they're all null sets
            const first = this.set[0];
            this.set = this.set.filter((c)=>!isNullSet(c[0]));
            if (this.set.length === 0) {
                this.set = [
                    first
                ];
            } else if (this.set.length > 1) {
                // if we have any that are *, then the range is just *
                for (const c of this.set){
                    if (c.length === 1 && isAny(c[0])) {
                        this.set = [
                            c
                        ];
                        break;
                    }
                }
            }
        }
        this.formatted = undefined;
    }
    get range() {
        if (this.formatted === undefined) {
            this.formatted = '';
            for(let i = 0; i < this.set.length; i++){
                if (i > 0) {
                    this.formatted += '||';
                }
                const comps = this.set[i];
                for(let k = 0; k < comps.length; k++){
                    if (k > 0) {
                        this.formatted += ' ';
                    }
                    this.formatted += comps[k].toString().trim();
                }
            }
        }
        return this.formatted;
    }
    format() {
        return this.range;
    }
    toString() {
        return this.range;
    }
    parseRange(range) {
        // strip build metadata so it can't bleed into the version
        range = range.replace(BUILDSTRIPRE, '');
        // memoize range parsing for performance.
        // this is a very hot path, and fully deterministic.
        const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
        const memoKey = memoOpts + ':' + range;
        const cached = cache.get(memoKey);
        if (cached) {
            return cached;
        }
        const loose = this.options.loose;
        // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
        const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
        range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
        debug('hyphen replace', range);
        // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
        range = trimComparatorWhitespace(range);
        debug('comparator trim', range);
        // `~ 1.2.3` => `~1.2.3`
        range = range.replace(re[t.TILDETRIM], tildeTrimReplace);
        debug('tilde trim', range);
        // `^ 1.2.3` => `^1.2.3`
        range = range.replace(re[t.CARETTRIM], caretTrimReplace);
        debug('caret trim', range);
        // At this point, the range is completely trimmed and
        // ready to be split into comparators.
        let rangeList = range.split(' ').map((comp)=>parseComparator(comp, this.options)).join(' ').split(/\s+/)// >=0.0.0 is equivalent to *
        .map((comp)=>replaceGTE0(comp, this.options));
        if (loose) {
            // in loose mode, throw out any that are not valid comparators
            rangeList = rangeList.filter((comp)=>{
                debug('loose invalid filter', comp, this.options);
                return !!comp.match(re[t.COMPARATORLOOSE]);
            });
        }
        debug('range list', rangeList);
        // if any comparators are the null set, then replace with JUST null set
        // if more than one comparator, remove any * comparators
        // also, don't include the same comparator more than once
        const rangeMap = new Map();
        const comparators = rangeList.map((comp)=>new Comparator(comp, this.options));
        for (const comp of comparators){
            if (isNullSet(comp)) {
                return [
                    comp
                ];
            }
            rangeMap.set(comp.value, comp);
        }
        if (rangeMap.size > 1 && rangeMap.has('')) {
            rangeMap.delete('');
        }
        const result = [
            ...rangeMap.values()
        ];
        cache.set(memoKey, result);
        return result;
    }
    intersects(range, options) {
        if (!(range instanceof Range)) {
            throw new TypeError('a Range is required');
        }
        return this.set.some((thisComparators)=>{
            return isSatisfiable(thisComparators, options) && range.set.some((rangeComparators)=>{
                return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator)=>{
                    return rangeComparators.every((rangeComparator)=>{
                        return thisComparator.intersects(rangeComparator, options);
                    });
                });
            });
        });
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(version) {
        if (!version) {
            return false;
        }
        if (typeof version === 'string') {
            try {
                version = new SemVer(version, this.options);
            } catch (er) {
                return false;
            }
        }
        for(let i = 0; i < this.set.length; i++){
            if (testSet(this.set[i], version, this.options)) {
                return true;
            }
        }
        return false;
    }
}
module.exports = Range;
const LRU = __turbopack_context__.r("[project]/node_modules/semver/internal/lrucache.js [app-route] (ecmascript)");
const cache = new LRU();
const parseOptions = __turbopack_context__.r("[project]/node_modules/semver/internal/parse-options.js [app-route] (ecmascript)");
const Comparator = __turbopack_context__.r("[project]/node_modules/semver/classes/comparator.js [app-route] (ecmascript)");
const debug = __turbopack_context__.r("[project]/node_modules/semver/internal/debug.js [app-route] (ecmascript)");
const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [app-route] (ecmascript)");
const trimComparatorWhitespace = __turbopack_context__.r("[project]/node_modules/semver/internal/trim-comparator-whitespace.js [app-route] (ecmascript)");
const { safeRe: re, src, t, tildeTrimReplace, caretTrimReplace } = __turbopack_context__.r("[project]/node_modules/semver/internal/re.js [app-route] (ecmascript)");
const { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = __turbopack_context__.r("[project]/node_modules/semver/internal/constants.js [app-route] (ecmascript)");
// unbounded global build-metadata stripper used by parseRange
const BUILDSTRIPRE = new RegExp(src[t.BUILD], 'g');
const isNullSet = (c)=>c.value === '<0.0.0-0';
const isAny = (c)=>c.value === '';
// take a set of comparators and determine whether there
// exists a version which can satisfy it
const isSatisfiable = (comparators, options)=>{
    let result = true;
    const remainingComparators = comparators.slice();
    let testComparator = remainingComparators.pop();
    while(result && remainingComparators.length){
        result = remainingComparators.every((otherComparator)=>{
            return testComparator.intersects(otherComparator, options);
        });
        testComparator = remainingComparators.pop();
    }
    return result;
};
// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
const parseComparator = (comp, options)=>{
    comp = comp.replace(re[t.BUILD], '');
    debug('comp', comp, options);
    comp = replaceCarets(comp, options);
    debug('caret', comp);
    comp = replaceTildes(comp, options);
    debug('tildes', comp);
    comp = replaceXRanges(comp, options);
    debug('xrange', comp);
    comp = replaceStars(comp, options);
    debug('stars', comp);
    return comp;
};
const isX = (id)=>!id || id.toLowerCase() === 'x' || id === '*';
const invalidXRangeOrder = (M, m, p)=>isX(M) && !isX(m) || isX(m) && p && !isX(p);
// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
// ~0.0.1 --> >=0.0.1 <0.1.0-0
const replaceTildes = (comp, options)=>{
    return comp.trim().split(/\s+/).map((c)=>replaceTilde(c, options)).join(' ');
};
const replaceTilde = (comp, options)=>{
    const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
    // if we're including prereleases in the match, then the lower bound is
    // -0, the lowest possible prerelease value, just like x-ranges and carets.
    // this keeps `~1.2` equivalent to the `1.2.x` x-range it's documented as.
    const z = options.includePrerelease ? '-0' : '';
    return comp.replace(r, (_, M, m, p, pr)=>{
        debug('tilde', comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
            ret = '';
        } else if (isX(m)) {
            ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
            // ~1.2 == >=1.2.0 <1.3.0-0
            ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
        } else if (pr) {
            debug('replaceTilde pr', pr);
            ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
        } else {
            // ~1.2.3 == >=1.2.3 <1.3.0-0
            ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
        }
        debug('tilde return', ret);
        return ret;
    });
};
// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
// ^1.2.3 --> >=1.2.3 <2.0.0-0
// ^1.2.0 --> >=1.2.0 <2.0.0-0
// ^0.0.1 --> >=0.0.1 <0.0.2-0
// ^0.1.0 --> >=0.1.0 <0.2.0-0
const replaceCarets = (comp, options)=>{
    return comp.trim().split(/\s+/).map((c)=>replaceCaret(c, options)).join(' ');
};
const replaceCaret = (comp, options)=>{
    debug('caret', comp, options);
    const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
    const z = options.includePrerelease ? '-0' : '';
    return comp.replace(r, (_, M, m, p, pr)=>{
        debug('caret', comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
            ret = '';
        } else if (isX(m)) {
            ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
            if (M === '0') {
                ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
            } else {
                ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
            }
        } else if (pr) {
            debug('replaceCaret pr', pr);
            if (M === '0') {
                if (m === '0') {
                    ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
                } else {
                    ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
                }
            } else {
                ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
            }
        } else {
            debug('no pr');
            if (M === '0') {
                if (m === '0') {
                    ret = `>=${M}.${m}.${p} <${M}.${m}.${+p + 1}-0`;
                } else {
                    ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
                }
            } else {
                ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
            }
        }
        debug('caret return', ret);
        return ret;
    });
};
const replaceXRanges = (comp, options)=>{
    debug('replaceXRanges', comp, options);
    return comp.split(/\s+/).map((c)=>replaceXRange(c, options)).join(' ');
};
const replaceXRange = (comp, options)=>{
    comp = comp.trim();
    const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
    return comp.replace(r, (ret, gtlt, M, m, p, pr)=>{
        debug('xRange', comp, ret, gtlt, M, m, p, pr);
        if (invalidXRangeOrder(M, m, p)) {
            return comp;
        }
        const xM = isX(M);
        const xm = xM || isX(m);
        const xp = xm || isX(p);
        const anyX = xp;
        if (gtlt === '=' && anyX) {
            gtlt = '';
        }
        // if we're including prereleases in the match, then we need
        // to fix this to -0, the lowest possible prerelease value
        pr = options.includePrerelease ? '-0' : '';
        if (xM) {
            if (gtlt === '>' || gtlt === '<') {
                // nothing is allowed
                ret = '<0.0.0-0';
            } else {
                // nothing is forbidden
                ret = '*';
            }
        } else if (gtlt && anyX) {
            // we know patch is an x, because we have any x at all.
            // replace X with 0
            if (xm) {
                m = 0;
            }
            p = 0;
            if (gtlt === '>') {
                // >1 => >=2.0.0
                // >1.2 => >=1.3.0
                gtlt = '>=';
                if (xm) {
                    M = +M + 1;
                    m = 0;
                    p = 0;
                } else {
                    m = +m + 1;
                    p = 0;
                }
            } else if (gtlt === '<=') {
                // <=0.7.x is actually <0.8.0, since any 0.7.x should
                // pass.  Similarly, <=7.x is actually <8.0.0, etc.
                gtlt = '<';
                if (xm) {
                    M = +M + 1;
                } else {
                    m = +m + 1;
                }
            }
            if (gtlt === '<') {
                pr = '-0';
            }
            ret = `${gtlt + M}.${m}.${p}${pr}`;
        } else if (xm) {
            ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
        } else if (xp) {
            ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
        }
        debug('xRange return', ret);
        return ret;
    });
};
// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
const replaceStars = (comp, options)=>{
    debug('replaceStars', comp, options);
    // Looseness is ignored here.  star is always as loose as it gets!
    return comp.trim().replace(re[t.STAR], '');
};
const replaceGTE0 = (comp, options)=>{
    debug('replaceGTE0', comp, options);
    return comp.trim().replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], '');
};
// This function is passed to string.replace(re[t.HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0-0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0-0
// TODO build?
const hyphenReplace = (incPr)=>($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr)=>{
        if (isX(fM)) {
            from = '';
        } else if (isX(fm)) {
            from = `>=${fM}.0.0${incPr ? '-0' : ''}`;
        } else if (isX(fp)) {
            from = `>=${fM}.${fm}.0${incPr ? '-0' : ''}`;
        } else if (fpr) {
            from = `>=${from}`;
        } else {
            from = `>=${from}${incPr ? '-0' : ''}`;
        }
        if (isX(tM)) {
            to = '';
        } else if (isX(tm)) {
            to = `<${+tM + 1}.0.0-0`;
        } else if (isX(tp)) {
            to = `<${tM}.${+tm + 1}.0-0`;
        } else if (tpr) {
            to = `<=${tM}.${tm}.${tp}-${tpr}`;
        } else if (incPr) {
            to = `<${tM}.${tm}.${+tp + 1}-0`;
        } else {
            to = `<=${to}`;
        }
        return `${from} ${to}`.trim();
    };
const testSet = (set, version, options)=>{
    for(let i = 0; i < set.length; i++){
        if (!set[i].test(version)) {
            return false;
        }
    }
    if (version.prerelease.length && !options.includePrerelease) {
        // Find the set of versions that are allowed to have prereleases
        // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
        // That should allow `1.2.3-pr.2` to pass.
        // However, `1.2.4-alpha.notready` should NOT be allowed,
        // even though it's within the range set by the comparators.
        for(let i = 0; i < set.length; i++){
            debug(set[i].semver);
            if (set[i].semver === Comparator.ANY) {
                continue;
            }
            if (set[i].semver.prerelease.length > 0) {
                const allowed = set[i].semver;
                if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
                    return true;
                }
            }
        }
        // Version has a -pre, but it's not one of the ones we like.
        return false;
    }
    return true;
};
}),
"[project]/node_modules/semver/classes/semver.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const debug = __turbopack_context__.r("[project]/node_modules/semver/internal/debug.js [app-route] (ecmascript)");
const { MAX_LENGTH, MAX_SAFE_INTEGER } = __turbopack_context__.r("[project]/node_modules/semver/internal/constants.js [app-route] (ecmascript)");
const { safeRe: re, t } = __turbopack_context__.r("[project]/node_modules/semver/internal/re.js [app-route] (ecmascript)");
const parseOptions = __turbopack_context__.r("[project]/node_modules/semver/internal/parse-options.js [app-route] (ecmascript)");
const { compareIdentifiers } = __turbopack_context__.r("[project]/node_modules/semver/internal/identifiers.js [app-route] (ecmascript)");
const isPrereleaseIdentifier = (prerelease, identifier)=>{
    const identifiers = identifier.split('.');
    if (identifiers.length > prerelease.length) {
        return false;
    }
    for(let i = 0; i < identifiers.length; i++){
        if (compareIdentifiers(prerelease[i], identifiers[i]) !== 0) {
            return false;
        }
    }
    return true;
};
class SemVer {
    constructor(version, options){
        options = parseOptions(options);
        if (version instanceof SemVer) {
            if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
                return version;
            } else {
                version = version.version;
            }
        } else if (typeof version !== 'string') {
            throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
        }
        if (version.length > MAX_LENGTH) {
            throw new TypeError(`version is longer than ${MAX_LENGTH} characters`);
        }
        debug('SemVer', version, options);
        this.options = options;
        this.loose = !!options.loose;
        // this isn't actually relevant for versions, but keep it so that we
        // don't run into trouble passing this.options around.
        this.includePrerelease = !!options.includePrerelease;
        const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
        if (!m) {
            throw new TypeError(`Invalid Version: ${version}`);
        }
        this.raw = version;
        // these are actually numbers
        this.major = +m[1];
        this.minor = +m[2];
        this.patch = +m[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
            throw new TypeError('Invalid major version');
        }
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
            throw new TypeError('Invalid minor version');
        }
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
            throw new TypeError('Invalid patch version');
        }
        // numberify any prerelease numeric ids
        if (!m[4]) {
            this.prerelease = [];
        } else {
            this.prerelease = m[4].split('.').map((id)=>{
                if (/^[0-9]+$/.test(id)) {
                    const num = +id;
                    if (num >= 0 && num < MAX_SAFE_INTEGER) {
                        return num;
                    }
                }
                return id;
            });
        }
        this.build = m[5] ? m[5].split('.') : [];
        this.format();
    }
    format() {
        this.version = `${this.major}.${this.minor}.${this.patch}`;
        if (this.prerelease.length) {
            this.version += `-${this.prerelease.join('.')}`;
        }
        return this.version;
    }
    toString() {
        return this.version;
    }
    compare(other) {
        debug('SemVer.compare', this.version, this.options, other);
        if (!(other instanceof SemVer)) {
            if (typeof other === 'string' && other === this.version) {
                return 0;
            }
            other = new SemVer(other, this.options);
        }
        if (other.version === this.version) {
            return 0;
        }
        return this.compareMain(other) || this.comparePre(other);
    }
    compareMain(other) {
        if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
        }
        if (this.major < other.major) {
            return -1;
        }
        if (this.major > other.major) {
            return 1;
        }
        if (this.minor < other.minor) {
            return -1;
        }
        if (this.minor > other.minor) {
            return 1;
        }
        if (this.patch < other.patch) {
            return -1;
        }
        if (this.patch > other.patch) {
            return 1;
        }
        return 0;
    }
    comparePre(other) {
        if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
        }
        // NOT having a prerelease is > having one
        if (this.prerelease.length && !other.prerelease.length) {
            return -1;
        } else if (!this.prerelease.length && other.prerelease.length) {
            return 1;
        } else if (!this.prerelease.length && !other.prerelease.length) {
            return 0;
        }
        let i = 0;
        do {
            const a = this.prerelease[i];
            const b = other.prerelease[i];
            debug('prerelease compare', i, a, b);
            if (a === undefined && b === undefined) {
                return 0;
            } else if (b === undefined) {
                return 1;
            } else if (a === undefined) {
                return -1;
            } else if (a === b) {
                continue;
            } else {
                return compareIdentifiers(a, b);
            }
        }while (++i)
    }
    compareBuild(other) {
        if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
        }
        let i = 0;
        do {
            const a = this.build[i];
            const b = other.build[i];
            debug('build compare', i, a, b);
            if (a === undefined && b === undefined) {
                return 0;
            } else if (b === undefined) {
                return 1;
            } else if (a === undefined) {
                return -1;
            } else if (a === b) {
                continue;
            } else {
                return compareIdentifiers(a, b);
            }
        }while (++i)
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(release, identifier, identifierBase) {
        if (release.startsWith('pre')) {
            if (!identifier && identifierBase === false) {
                throw new Error('invalid increment argument: identifier is empty');
            }
            // Avoid an invalid semver results
            if (identifier) {
                const match = `-${identifier}`.match(this.options.loose ? re[t.PRERELEASELOOSE] : re[t.PRERELEASE]);
                if (!match || match[1] !== identifier) {
                    throw new Error(`invalid identifier: ${identifier}`);
                }
            }
        }
        switch(release){
            case 'premajor':
                this.prerelease.length = 0;
                this.patch = 0;
                this.minor = 0;
                this.major++;
                this.inc('pre', identifier, identifierBase);
                break;
            case 'preminor':
                this.prerelease.length = 0;
                this.patch = 0;
                this.minor++;
                this.inc('pre', identifier, identifierBase);
                break;
            case 'prepatch':
                // If this is already a prerelease, it will bump to the next version
                // drop any prereleases that might already exist, since they are not
                // relevant at this point.
                this.prerelease.length = 0;
                this.inc('patch', identifier, identifierBase);
                this.inc('pre', identifier, identifierBase);
                break;
            // If the input is a non-prerelease version, this acts the same as
            // prepatch.
            case 'prerelease':
                if (this.prerelease.length === 0) {
                    this.inc('patch', identifier, identifierBase);
                }
                this.inc('pre', identifier, identifierBase);
                break;
            case 'release':
                if (this.prerelease.length === 0) {
                    throw new Error(`version ${this.raw} is not a prerelease`);
                }
                this.prerelease.length = 0;
                break;
            case 'major':
                // If this is a pre-major version, bump up to the same major version.
                // Otherwise increment major.
                // 1.0.0-5 bumps to 1.0.0
                // 1.1.0 bumps to 2.0.0
                if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
                    this.major++;
                }
                this.minor = 0;
                this.patch = 0;
                this.prerelease = [];
                break;
            case 'minor':
                // If this is a pre-minor version, bump up to the same minor version.
                // Otherwise increment minor.
                // 1.2.0-5 bumps to 1.2.0
                // 1.2.1 bumps to 1.3.0
                if (this.patch !== 0 || this.prerelease.length === 0) {
                    this.minor++;
                }
                this.patch = 0;
                this.prerelease = [];
                break;
            case 'patch':
                // If this is not a pre-release version, it will increment the patch.
                // If it is a pre-release it will bump up to the same patch version.
                // 1.2.0-5 patches to 1.2.0
                // 1.2.0 patches to 1.2.1
                if (this.prerelease.length === 0) {
                    this.patch++;
                }
                this.prerelease = [];
                break;
            // This probably shouldn't be used publicly.
            // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
            case 'pre':
                {
                    const base = Number(identifierBase) ? 1 : 0;
                    if (this.prerelease.length === 0) {
                        this.prerelease = [
                            base
                        ];
                    } else {
                        let i = this.prerelease.length;
                        while(--i >= 0){
                            if (typeof this.prerelease[i] === 'number') {
                                this.prerelease[i]++;
                                i = -2;
                            }
                        }
                        if (i === -1) {
                            // didn't increment anything
                            if (identifier === this.prerelease.join('.') && identifierBase === false) {
                                throw new Error('invalid increment argument: identifier already exists');
                            }
                            this.prerelease.push(base);
                        }
                    }
                    if (identifier) {
                        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
                        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
                        let prerelease = [
                            identifier,
                            base
                        ];
                        if (identifierBase === false) {
                            prerelease = [
                                identifier
                            ];
                        }
                        if (isPrereleaseIdentifier(this.prerelease, identifier)) {
                            const prereleaseBase = this.prerelease[identifier.split('.').length];
                            if (isNaN(prereleaseBase)) {
                                this.prerelease = prerelease;
                            }
                        } else {
                            this.prerelease = prerelease;
                        }
                    }
                    break;
                }
            default:
                throw new Error(`invalid increment argument: ${release}`);
        }
        this.raw = this.format();
        if (this.build.length) {
            this.raw += `+${this.build.join('.')}`;
        }
        return this;
    }
}
module.exports = SemVer;
}),
"[project]/node_modules/semver/functions/clean.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parse = __turbopack_context__.r("[project]/node_modules/semver/functions/parse.js [app-route] (ecmascript)");
const clean = (version, options)=>{
    const s = parse(version.trim().replace(/^[=v]+/, ''), options);
    return s ? s.version : null;
};
module.exports = clean;
}),
"[project]/node_modules/semver/functions/cmp.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const eq = __turbopack_context__.r("[project]/node_modules/semver/functions/eq.js [app-route] (ecmascript)");
const neq = __turbopack_context__.r("[project]/node_modules/semver/functions/neq.js [app-route] (ecmascript)");
const gt = __turbopack_context__.r("[project]/node_modules/semver/functions/gt.js [app-route] (ecmascript)");
const gte = __turbopack_context__.r("[project]/node_modules/semver/functions/gte.js [app-route] (ecmascript)");
const lt = __turbopack_context__.r("[project]/node_modules/semver/functions/lt.js [app-route] (ecmascript)");
const lte = __turbopack_context__.r("[project]/node_modules/semver/functions/lte.js [app-route] (ecmascript)");
const cmp = (a, op, b, loose)=>{
    switch(op){
        case '===':
            if (typeof a === 'object') {
                a = a.version;
            }
            if (typeof b === 'object') {
                b = b.version;
            }
            return a === b;
        case '!==':
            if (typeof a === 'object') {
                a = a.version;
            }
            if (typeof b === 'object') {
                b = b.version;
            }
            return a !== b;
        case '':
        case '=':
        case '==':
            return eq(a, b, loose);
        case '!=':
            return neq(a, b, loose);
        case '>':
            return gt(a, b, loose);
        case '>=':
            return gte(a, b, loose);
        case '<':
            return lt(a, b, loose);
        case '<=':
            return lte(a, b, loose);
        default:
            throw new TypeError(`Invalid operator: ${op}`);
    }
};
module.exports = cmp;
}),
"[project]/node_modules/semver/functions/coerce.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [app-route] (ecmascript)");
const parse = __turbopack_context__.r("[project]/node_modules/semver/functions/parse.js [app-route] (ecmascript)");
const { safeRe: re, t } = __turbopack_context__.r("[project]/node_modules/semver/internal/re.js [app-route] (ecmascript)");
const coerce = (version, options)=>{
    if (version instanceof SemVer) {
        return version;
    }
    if (typeof version === 'number') {
        version = String(version);
    }
    if (typeof version !== 'string') {
        return null;
    }
    options = options || {};
    let match = null;
    if (!options.rtl) {
        match = version.match(options.includePrerelease ? re[t.COERCEFULL] : re[t.COERCE]);
    } else {
        // Find the right-most coercible string that does not share
        // a terminus with a more left-ward coercible string.
        // Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
        // With includePrerelease option set, '1.2.3.4-rc' wants to coerce '2.3.4-rc', not '2.3.4'
        //
        // Walk through the string checking with a /g regexp
        // Manually set the index so as to pick up overlapping matches.
        // Stop when we get a match that ends at the string end, since no
        // coercible string can be more right-ward without the same terminus.
        const coerceRtlRegex = options.includePrerelease ? re[t.COERCERTLFULL] : re[t.COERCERTL];
        let next;
        while((next = coerceRtlRegex.exec(version)) && (!match || match.index + match[0].length !== version.length)){
            if (!match || next.index + next[0].length !== match.index + match[0].length) {
                match = next;
            }
            coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
        }
        // leave it in a clean state
        coerceRtlRegex.lastIndex = -1;
    }
    if (match === null) {
        return null;
    }
    const major = match[2];
    const minor = match[3] || '0';
    const patch = match[4] || '0';
    const prerelease = options.includePrerelease && match[5] ? `-${match[5]}` : '';
    const build = options.includePrerelease && match[6] ? `+${match[6]}` : '';
    return parse(`${major}.${minor}.${patch}${prerelease}${build}`, options);
};
module.exports = coerce;
}),
"[project]/node_modules/semver/functions/compare-build.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [app-route] (ecmascript)");
const compareBuild = (a, b, loose)=>{
    const versionA = new SemVer(a, loose);
    const versionB = new SemVer(b, loose);
    return versionA.compare(versionB) || versionA.compareBuild(versionB);
};
module.exports = compareBuild;
}),
"[project]/node_modules/semver/functions/compare-loose.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/node_modules/semver/functions/compare.js [app-route] (ecmascript)");
const compareLoose = (a, b)=>compare(a, b, true);
module.exports = compareLoose;
}),
"[project]/node_modules/semver/functions/compare.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [app-route] (ecmascript)");
const compare = (a, b, loose)=>new SemVer(a, loose).compare(new SemVer(b, loose));
module.exports = compare;
}),
"[project]/node_modules/semver/functions/diff.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parse = __turbopack_context__.r("[project]/node_modules/semver/functions/parse.js [app-route] (ecmascript)");
const diff = (version1, version2)=>{
    const v1 = parse(version1, null, true);
    const v2 = parse(version2, null, true);
    const comparison = v1.compare(v2);
    if (comparison === 0) {
        return null;
    }
    const v1Higher = comparison > 0;
    const highVersion = v1Higher ? v1 : v2;
    const lowVersion = v1Higher ? v2 : v1;
    const highHasPre = !!highVersion.prerelease.length;
    const lowHasPre = !!lowVersion.prerelease.length;
    if (lowHasPre && !highHasPre) {
        // Going from prerelease -> no prerelease requires some special casing
        // If the low version has only a major, then it will always be a major
        // Some examples:
        // 1.0.0-1 -> 1.0.0
        // 1.0.0-1 -> 1.1.1
        // 1.0.0-1 -> 2.0.0
        if (!lowVersion.patch && !lowVersion.minor) {
            return 'major';
        }
        // If the main part has no difference
        if (lowVersion.compareMain(highVersion) === 0) {
            if (lowVersion.minor && !lowVersion.patch) {
                return 'minor';
            }
            return 'patch';
        }
    }
    // add the `pre` prefix if we are going to a prerelease version
    const prefix = highHasPre ? 'pre' : '';
    if (v1.major !== v2.major) {
        return prefix + 'major';
    }
    if (v1.minor !== v2.minor) {
        return prefix + 'minor';
    }
    if (v1.patch !== v2.patch) {
        return prefix + 'patch';
    }
    // high and low are prereleases
    return 'prerelease';
};
module.exports = diff;
}),
"[project]/node_modules/semver/functions/eq.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/node_modules/semver/functions/compare.js [app-route] (ecmascript)");
const eq = (a, b, loose)=>compare(a, b, loose) === 0;
module.exports = eq;
}),
"[project]/node_modules/semver/functions/gt.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/node_modules/semver/functions/compare.js [app-route] (ecmascript)");
const gt = (a, b, loose)=>compare(a, b, loose) > 0;
module.exports = gt;
}),
"[project]/node_modules/semver/functions/gte.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/node_modules/semver/functions/compare.js [app-route] (ecmascript)");
const gte = (a, b, loose)=>compare(a, b, loose) >= 0;
module.exports = gte;
}),
"[project]/node_modules/semver/functions/inc.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [app-route] (ecmascript)");
const inc = (version, release, options, identifier, identifierBase)=>{
    if (typeof options === 'string') {
        identifierBase = identifier;
        identifier = options;
        options = undefined;
    }
    try {
        return new SemVer(version instanceof SemVer ? version.version : version, options).inc(release, identifier, identifierBase).version;
    } catch (er) {
        return null;
    }
};
module.exports = inc;
}),
"[project]/node_modules/semver/functions/lt.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/node_modules/semver/functions/compare.js [app-route] (ecmascript)");
const lt = (a, b, loose)=>compare(a, b, loose) < 0;
module.exports = lt;
}),
"[project]/node_modules/semver/functions/lte.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/node_modules/semver/functions/compare.js [app-route] (ecmascript)");
const lte = (a, b, loose)=>compare(a, b, loose) <= 0;
module.exports = lte;
}),
"[project]/node_modules/semver/functions/major.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [app-route] (ecmascript)");
const major = (a, loose)=>new SemVer(a, loose).major;
module.exports = major;
}),
"[project]/node_modules/semver/functions/minor.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [app-route] (ecmascript)");
const minor = (a, loose)=>new SemVer(a, loose).minor;
module.exports = minor;
}),
"[project]/node_modules/semver/functions/neq.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/node_modules/semver/functions/compare.js [app-route] (ecmascript)");
const neq = (a, b, loose)=>compare(a, b, loose) !== 0;
module.exports = neq;
}),
"[project]/node_modules/semver/functions/parse.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [app-route] (ecmascript)");
const parse = (version, options, throwErrors = false)=>{
    if (version instanceof SemVer) {
        return version;
    }
    try {
        return new SemVer(version, options);
    } catch (er) {
        if (!throwErrors) {
            return null;
        }
        throw er;
    }
};
module.exports = parse;
}),
"[project]/node_modules/semver/functions/patch.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [app-route] (ecmascript)");
const patch = (a, loose)=>new SemVer(a, loose).patch;
module.exports = patch;
}),
"[project]/node_modules/semver/functions/prerelease.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parse = __turbopack_context__.r("[project]/node_modules/semver/functions/parse.js [app-route] (ecmascript)");
const prerelease = (version, options)=>{
    const parsed = parse(version, options);
    return parsed && parsed.prerelease.length ? parsed.prerelease : null;
};
module.exports = prerelease;
}),
"[project]/node_modules/semver/functions/rcompare.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/node_modules/semver/functions/compare.js [app-route] (ecmascript)");
const rcompare = (a, b, loose)=>compare(b, a, loose);
module.exports = rcompare;
}),
"[project]/node_modules/semver/functions/rsort.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compareBuild = __turbopack_context__.r("[project]/node_modules/semver/functions/compare-build.js [app-route] (ecmascript)");
const rsort = (list, loose)=>list.sort((a, b)=>compareBuild(b, a, loose));
module.exports = rsort;
}),
"[project]/node_modules/semver/functions/satisfies.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const Range = __turbopack_context__.r("[project]/node_modules/semver/classes/range.js [app-route] (ecmascript)");
const satisfies = (version, range, options)=>{
    try {
        range = new Range(range, options);
    } catch (er) {
        return false;
    }
    return range.test(version);
};
module.exports = satisfies;
}),
"[project]/node_modules/semver/functions/sort.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compareBuild = __turbopack_context__.r("[project]/node_modules/semver/functions/compare-build.js [app-route] (ecmascript)");
const sort = (list, loose)=>list.sort((a, b)=>compareBuild(a, b, loose));
module.exports = sort;
}),
"[project]/node_modules/semver/functions/truncate.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parse = __turbopack_context__.r("[project]/node_modules/semver/functions/parse.js [app-route] (ecmascript)");
const constants = __turbopack_context__.r("[project]/node_modules/semver/internal/constants.js [app-route] (ecmascript)");
const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [app-route] (ecmascript)");
const truncate = (version, truncation, options)=>{
    if (!constants.RELEASE_TYPES.includes(truncation)) {
        return null;
    }
    const clonedVersion = cloneInputVersion(version, options);
    return clonedVersion && doTruncation(clonedVersion, truncation);
};
const cloneInputVersion = (version, options)=>{
    const versionStringToParse = version instanceof SemVer ? version.version : version;
    return parse(versionStringToParse, options);
};
const doTruncation = (version, truncation)=>{
    if (isPrerelease(truncation)) {
        return version.version;
    }
    version.prerelease = [];
    switch(truncation){
        case 'major':
            version.minor = 0;
            version.patch = 0;
            break;
        case 'minor':
            version.patch = 0;
            break;
    }
    return version.format();
};
const isPrerelease = (type)=>{
    return type.startsWith('pre');
};
module.exports = truncate;
}),
"[project]/node_modules/semver/functions/valid.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parse = __turbopack_context__.r("[project]/node_modules/semver/functions/parse.js [app-route] (ecmascript)");
const valid = (version, options)=>{
    const v = parse(version, options);
    return v ? v.version : null;
};
module.exports = valid;
}),
"[project]/node_modules/semver/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// just pre-load all the stuff that index.js lazily exports
const internalRe = __turbopack_context__.r("[project]/node_modules/semver/internal/re.js [app-route] (ecmascript)");
const constants = __turbopack_context__.r("[project]/node_modules/semver/internal/constants.js [app-route] (ecmascript)");
const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [app-route] (ecmascript)");
const identifiers = __turbopack_context__.r("[project]/node_modules/semver/internal/identifiers.js [app-route] (ecmascript)");
const parse = __turbopack_context__.r("[project]/node_modules/semver/functions/parse.js [app-route] (ecmascript)");
const valid = __turbopack_context__.r("[project]/node_modules/semver/functions/valid.js [app-route] (ecmascript)");
const clean = __turbopack_context__.r("[project]/node_modules/semver/functions/clean.js [app-route] (ecmascript)");
const inc = __turbopack_context__.r("[project]/node_modules/semver/functions/inc.js [app-route] (ecmascript)");
const diff = __turbopack_context__.r("[project]/node_modules/semver/functions/diff.js [app-route] (ecmascript)");
const major = __turbopack_context__.r("[project]/node_modules/semver/functions/major.js [app-route] (ecmascript)");
const minor = __turbopack_context__.r("[project]/node_modules/semver/functions/minor.js [app-route] (ecmascript)");
const patch = __turbopack_context__.r("[project]/node_modules/semver/functions/patch.js [app-route] (ecmascript)");
const prerelease = __turbopack_context__.r("[project]/node_modules/semver/functions/prerelease.js [app-route] (ecmascript)");
const compare = __turbopack_context__.r("[project]/node_modules/semver/functions/compare.js [app-route] (ecmascript)");
const rcompare = __turbopack_context__.r("[project]/node_modules/semver/functions/rcompare.js [app-route] (ecmascript)");
const compareLoose = __turbopack_context__.r("[project]/node_modules/semver/functions/compare-loose.js [app-route] (ecmascript)");
const compareBuild = __turbopack_context__.r("[project]/node_modules/semver/functions/compare-build.js [app-route] (ecmascript)");
const sort = __turbopack_context__.r("[project]/node_modules/semver/functions/sort.js [app-route] (ecmascript)");
const rsort = __turbopack_context__.r("[project]/node_modules/semver/functions/rsort.js [app-route] (ecmascript)");
const gt = __turbopack_context__.r("[project]/node_modules/semver/functions/gt.js [app-route] (ecmascript)");
const lt = __turbopack_context__.r("[project]/node_modules/semver/functions/lt.js [app-route] (ecmascript)");
const eq = __turbopack_context__.r("[project]/node_modules/semver/functions/eq.js [app-route] (ecmascript)");
const neq = __turbopack_context__.r("[project]/node_modules/semver/functions/neq.js [app-route] (ecmascript)");
const gte = __turbopack_context__.r("[project]/node_modules/semver/functions/gte.js [app-route] (ecmascript)");
const lte = __turbopack_context__.r("[project]/node_modules/semver/functions/lte.js [app-route] (ecmascript)");
const cmp = __turbopack_context__.r("[project]/node_modules/semver/functions/cmp.js [app-route] (ecmascript)");
const coerce = __turbopack_context__.r("[project]/node_modules/semver/functions/coerce.js [app-route] (ecmascript)");
const truncate = __turbopack_context__.r("[project]/node_modules/semver/functions/truncate.js [app-route] (ecmascript)");
const Comparator = __turbopack_context__.r("[project]/node_modules/semver/classes/comparator.js [app-route] (ecmascript)");
const Range = __turbopack_context__.r("[project]/node_modules/semver/classes/range.js [app-route] (ecmascript)");
const satisfies = __turbopack_context__.r("[project]/node_modules/semver/functions/satisfies.js [app-route] (ecmascript)");
const toComparators = __turbopack_context__.r("[project]/node_modules/semver/ranges/to-comparators.js [app-route] (ecmascript)");
const maxSatisfying = __turbopack_context__.r("[project]/node_modules/semver/ranges/max-satisfying.js [app-route] (ecmascript)");
const minSatisfying = __turbopack_context__.r("[project]/node_modules/semver/ranges/min-satisfying.js [app-route] (ecmascript)");
const minVersion = __turbopack_context__.r("[project]/node_modules/semver/ranges/min-version.js [app-route] (ecmascript)");
const validRange = __turbopack_context__.r("[project]/node_modules/semver/ranges/valid.js [app-route] (ecmascript)");
const outside = __turbopack_context__.r("[project]/node_modules/semver/ranges/outside.js [app-route] (ecmascript)");
const gtr = __turbopack_context__.r("[project]/node_modules/semver/ranges/gtr.js [app-route] (ecmascript)");
const ltr = __turbopack_context__.r("[project]/node_modules/semver/ranges/ltr.js [app-route] (ecmascript)");
const intersects = __turbopack_context__.r("[project]/node_modules/semver/ranges/intersects.js [app-route] (ecmascript)");
const simplifyRange = __turbopack_context__.r("[project]/node_modules/semver/ranges/simplify.js [app-route] (ecmascript)");
const subset = __turbopack_context__.r("[project]/node_modules/semver/ranges/subset.js [app-route] (ecmascript)");
module.exports = {
    parse,
    valid,
    clean,
    inc,
    diff,
    major,
    minor,
    patch,
    prerelease,
    compare,
    rcompare,
    compareLoose,
    compareBuild,
    sort,
    rsort,
    gt,
    lt,
    eq,
    neq,
    gte,
    lte,
    cmp,
    coerce,
    truncate,
    Comparator,
    Range,
    satisfies,
    toComparators,
    maxSatisfying,
    minSatisfying,
    minVersion,
    validRange,
    outside,
    gtr,
    ltr,
    intersects,
    simplifyRange,
    subset,
    SemVer,
    re: internalRe.re,
    src: internalRe.src,
    tokens: internalRe.t,
    SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
    RELEASE_TYPES: constants.RELEASE_TYPES,
    compareIdentifiers: identifiers.compareIdentifiers,
    rcompareIdentifiers: identifiers.rcompareIdentifiers
};
}),
"[project]/node_modules/semver/internal/constants.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
const SEMVER_SPEC_VERSION = '2.0.0';
const MAX_LENGTH = 256;
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */ 9007199254740991;
// Max safe segment length for coercion.
const MAX_SAFE_COMPONENT_LENGTH = 16;
// Max safe length for a build identifier. The max length minus 6 characters for
// the shortest version with a build 0.0.0+BUILD.
const MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
// ECMAScript whitespace and line terminators matched by \s.
const WHITESPACE_CHARACTERS = [
    '\t',
    '\n',
    '\v',
    '\f',
    '\r',
    ' ',
    '\u00a0',
    '\u1680',
    '\u2000',
    '\u2001',
    '\u2002',
    '\u2003',
    '\u2004',
    '\u2005',
    '\u2006',
    '\u2007',
    '\u2008',
    '\u2009',
    '\u200a',
    '\u2028',
    '\u2029',
    '\u202f',
    '\u205f',
    '\u3000',
    '\ufeff'
];
const RELEASE_TYPES = [
    'major',
    'premajor',
    'minor',
    'preminor',
    'patch',
    'prepatch',
    'prerelease'
];
module.exports = {
    MAX_LENGTH,
    MAX_SAFE_COMPONENT_LENGTH,
    MAX_SAFE_BUILD_LENGTH,
    MAX_SAFE_INTEGER,
    WHITESPACE_CHARACTERS,
    RELEASE_TYPES,
    SEMVER_SPEC_VERSION,
    FLAG_INCLUDE_PRERELEASE: 0b001,
    FLAG_LOOSE: 0b010
};
}),
"[project]/node_modules/semver/internal/debug.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const debug = typeof process === 'object' && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args)=>console.error('SEMVER', ...args) : ()=>{};
module.exports = debug;
}),
"[project]/node_modules/semver/internal/identifiers.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const numeric = /^[0-9]+$/;
const compareIdentifiers = (a, b)=>{
    if (typeof a === 'number' && typeof b === 'number') {
        return a === b ? 0 : a < b ? -1 : 1;
    }
    const anum = numeric.test(a);
    const bnum = numeric.test(b);
    if (anum && bnum) {
        a = +a;
        b = +b;
    }
    return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
};
const rcompareIdentifiers = (a, b)=>compareIdentifiers(b, a);
module.exports = {
    compareIdentifiers,
    rcompareIdentifiers
};
}),
"[project]/node_modules/semver/internal/lrucache.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

class LRUCache {
    constructor(){
        this.max = 1000;
        this.map = new Map();
    }
    get(key) {
        const value = this.map.get(key);
        if (value === undefined) {
            return undefined;
        } else {
            // Remove the key from the map and add it to the end
            this.map.delete(key);
            this.map.set(key, value);
            return value;
        }
    }
    delete(key) {
        return this.map.delete(key);
    }
    set(key, value) {
        const deleted = this.delete(key);
        if (!deleted && value !== undefined) {
            // If cache is full, delete the least recently used item
            if (this.map.size >= this.max) {
                const firstKey = this.map.keys().next().value;
                this.delete(firstKey);
            }
            this.map.set(key, value);
        }
        return this;
    }
}
module.exports = LRUCache;
}),
"[project]/node_modules/semver/internal/parse-options.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// parse out just the options we care about
const looseOption = Object.freeze({
    loose: true
});
const emptyOpts = Object.freeze({});
const parseOptions = (options)=>{
    if (!options) {
        return emptyOpts;
    }
    if (typeof options !== 'object') {
        return looseOption;
    }
    return options;
};
module.exports = parseOptions;
}),
"[project]/node_modules/semver/internal/re.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { MAX_SAFE_COMPONENT_LENGTH, MAX_SAFE_BUILD_LENGTH, MAX_LENGTH } = __turbopack_context__.r("[project]/node_modules/semver/internal/constants.js [app-route] (ecmascript)");
const debug = __turbopack_context__.r("[project]/node_modules/semver/internal/debug.js [app-route] (ecmascript)");
exports = module.exports = {};
// The actual regexps go on exports.re
const re = exports.re = [];
const safeRe = exports.safeRe = [];
const src = exports.src = [];
const safeSrc = exports.safeSrc = [];
const t = exports.t = {};
let R = 0;
const LETTERDASHNUMBER = '[a-zA-Z0-9-]';
// Replace some greedy regex tokens to prevent regex dos issues. These regex are
// used internally via the safeRe object since all inputs in this library get
// normalized first to trim and collapse all extra whitespace. The original
// regexes are exported for userland consumption and lower level usage. A
// future breaking change could export the safer regex only with a note that
// all input should have extra whitespace removed.
const safeRegexReplacements = [
    [
        '\\s',
        1
    ],
    [
        '\\d',
        MAX_LENGTH
    ],
    [
        LETTERDASHNUMBER,
        MAX_SAFE_BUILD_LENGTH
    ]
];
const makeSafeRegex = (value)=>{
    for (const [token, max] of safeRegexReplacements){
        value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
    }
    return value;
};
const createToken = (name, value, isGlobal)=>{
    const safe = makeSafeRegex(value);
    const index = R++;
    debug(name, index, value);
    t[name] = index;
    src[index] = value;
    safeSrc[index] = safe;
    re[index] = new RegExp(value, isGlobal ? 'g' : undefined);
    safeRe[index] = new RegExp(safe, isGlobal ? 'g' : undefined);
};
// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.
// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.
createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*');
createToken('NUMERICIDENTIFIERLOOSE', '\\d+');
// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.
createToken('NONNUMERICIDENTIFIER', `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
// ## Main Version
// Three dot-separated numeric identifiers.
createToken('MAINVERSION', `(${src[t.NUMERICIDENTIFIER]})\\.` + `(${src[t.NUMERICIDENTIFIER]})\\.` + `(${src[t.NUMERICIDENTIFIER]})`);
createToken('MAINVERSIONLOOSE', `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` + `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` + `(${src[t.NUMERICIDENTIFIERLOOSE]})`);
// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.
// Non-numeric identifiers include numeric identifiers but can be longer.
// Therefore non-numeric identifiers must go first.
createToken('PRERELEASEIDENTIFIER', `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIER]})`);
createToken('PRERELEASEIDENTIFIERLOOSE', `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIERLOOSE]})`);
// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.
createToken('PRERELEASE', `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
createToken('PRERELEASELOOSE', `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.
createToken('BUILDIDENTIFIER', `${LETTERDASHNUMBER}+`);
// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.
createToken('BUILD', `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.
// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.
createToken('FULLPLAIN', `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
createToken('FULL', `^${src[t.FULLPLAIN]}$`);
// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
createToken('LOOSEPLAIN', `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
createToken('LOOSE', `^${src[t.LOOSEPLAIN]}$`);
createToken('GTLT', '((?:<|>)?=?)');
// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifier, meaning "any version"
// Only the first item is strictly required.
createToken('XRANGEIDENTIFIERLOOSE', `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
createToken('XRANGEIDENTIFIER', `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
createToken('XRANGEPLAIN', `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})` + `(?:\\.(${src[t.XRANGEIDENTIFIER]})` + `(?:\\.(${src[t.XRANGEIDENTIFIER]})` + `(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?` + `)?)?`);
createToken('XRANGEPLAINLOOSE', `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})` + `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` + `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` + `(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?` + `)?)?`);
createToken('XRANGE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
createToken('XRANGELOOSE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
// Coercion.
// Extract anything that could conceivably be a part of a valid semver
createToken('COERCEPLAIN', `${'(^|[^\\d])' + '(\\d{1,'}${MAX_SAFE_COMPONENT_LENGTH}})` + `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` + `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
createToken('COERCE', `${src[t.COERCEPLAIN]}(?:$|[^\\d])`);
createToken('COERCEFULL', src[t.COERCEPLAIN] + `(?:${src[t.PRERELEASE]})?` + `(?:${src[t.BUILD]})?` + `(?:$|[^\\d])`);
createToken('COERCERTL', src[t.COERCE], true);
createToken('COERCERTLFULL', src[t.COERCEFULL], true);
// Tilde ranges.
// Meaning is "reasonably at or greater than"
createToken('LONETILDE', '(?:~>?)');
createToken('TILDETRIM', `(\\s*)${src[t.LONETILDE]}\\s+`, true);
exports.tildeTrimReplace = '$1~';
createToken('TILDE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
createToken('TILDELOOSE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
// Caret ranges.
// Meaning is "at least and backwards compatible with"
createToken('LONECARET', '(?:\\^)');
createToken('CARETTRIM', `(\\s*)${src[t.LONECARET]}\\s+`, true);
exports.caretTrimReplace = '$1^';
createToken('CARET', `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
createToken('CARETLOOSE', `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
// A simple gt/lt/eq thing, or just "" to indicate "any version"
createToken('COMPARATORLOOSE', `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
createToken('COMPARATOR', `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
createToken('COMPARATORTRIM', `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
exports.comparatorTrimReplace = '$1$2$3';
// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
createToken('HYPHENRANGE', `^\\s*(${src[t.XRANGEPLAIN]})` + `\\s+-\\s+` + `(${src[t.XRANGEPLAIN]})` + `\\s*$`);
createToken('HYPHENRANGELOOSE', `^\\s*(${src[t.XRANGEPLAINLOOSE]})` + `\\s+-\\s+` + `(${src[t.XRANGEPLAINLOOSE]})` + `\\s*$`);
// Star ranges basically just allow anything at all.
createToken('STAR', '(<|>)?=?\\s*\\*');
// >=0.0.0 is like a star
createToken('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$');
createToken('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$');
}),
"[project]/node_modules/semver/internal/trim-comparator-whitespace.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// @ts-check
// Reproduce safeRe[COMPARATORTRIM] replacement boundaries, not version
// validation. Each end-index finder returns an exclusive end, or its start
// on no match.
// Positions count from zero. An end of 3 means characters 0, 1, and 2 were read;
// range.slice(start, end) gives the matched text, not a converted number.
const { MAX_LENGTH, MAX_SAFE_BUILD_LENGTH, WHITESPACE_CHARACTERS } = __turbopack_context__.r("[project]/node_modules/semver/internal/constants.js [app-route] (ecmascript)");
/**
 * Remembers the last two rows of digits so their characters need not be reread.
 * Positions start at -1 until a row has been found.
 *
 * @typedef {object} DigitRunCache
 * @property {number} start The first character of the most recently found row.
 * @property {number} end The position after that row's last character.
 * @property {number} previousStart The first character of the previous row.
 * @property {number} previousEnd The position after the previous row.
 */ // One entry per UTF-16 code unit keeps membership checks constant-time.
const whitespace = new Uint8Array(0x10000);
for (const char of WHITESPACE_CHARACTERS){
    whitespace[char.charCodeAt(0)] = 1;
}
/**
 * Checks whether a character is whitespace, like a space, tab, or newline.
 * Looking past the end of the string returns false.
 *
 * @param {string|undefined} char One character, or undefined past the string's end.
 * @returns {boolean} Whether the character is whitespace.
 * @example isWhitespace(' ') // true
 * @example isWhitespace('1') // false
 */ const isWhitespace = (char)=>char !== undefined && whitespace[char.charCodeAt(0)] === 1;
/**
 * Checks for v, =, or whitespace before the version number.
 * These are historical version prefixes, not range operators:
 * < and > are handled separately, as are tilde and caret ranges.
 *
 * @param {string|undefined} char One character to check.
 * @returns {boolean} Whether the character can belong to a version prefix.
 * @example isVersionPrefix('=') // true
 * @example isVersionPrefix('>') // false
 */ const isVersionPrefix = (char)=>char === 'v' || char === '=' || isWhitespace(char);
/**
 * Checks whether a character is one of the digits 0 through 9.
 *
 * @param {string|undefined} char One character to check.
 * @returns {boolean} Whether the character is an ASCII digit.
 * @example isDigit('7') // true
 * @example isDigit('.') // false
 */ const isDigit = (char)=>char !== undefined && char >= '0' && char <= '9';
/**
 * Checks whether a character is an English letter, uppercase or lowercase.
 *
 * @param {string|undefined} char One character to check.
 * @returns {boolean} Whether the character is an ASCII letter.
 * @example isLetter('b') // true
 * @example isLetter('7') // false
 */ const isLetter = (char)=>char !== undefined && (char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z');
/**
 * Checks for a letter, digit, or hyphen: the characters allowed inside
 * prerelease and build names such as beta-1.
 *
 * @param {string|undefined} char One character to check.
 * @returns {boolean} Whether the character can be part of an identifier.
 * @example isIdentifierCharacter('-') // true
 * @example isIdentifierCharacter('.') // false; dots separate identifiers
 */ const isIdentifierCharacter = (char)=>isDigit(char) || isLetter(char) || char === '-';
/**
 * Checks whether a version component can begin here: with a digit or
 * a wildcard such as x, X, or *.
 *
 * @param {string|undefined} char One character to check.
 * @returns {boolean} Whether a number or wildcard can start with this character.
 * @example isVersionStart('x') // true
 * @example isVersionStart('v') // false; v belongs to the prefix
 */ const isVersionStart = (char)=>isDigit(char) || char === 'x' || char === 'X' || char === '*';
/**
 * Finds the end of a row of digits, but returns no more than limit digits.
 * Remembers the last two rows so looking at them again does not reread them.
 *
 * @param {string} range The text to read; it is not changed.
 * @param {number} start The position of the first character to check.
 * @param {number} limit The most digit characters the returned match can include.
 * @param {DigitRunCache} digitRuns Shared cache of digit-run positions, updated in place.
 * @returns {number} The position after the matched digits, or start if none match.
 * @example findDigitsEndIndex('123abc', 0, 10, digitRuns) // 3, pointing at a
 * @example findDigitsEndIndex('123abc', 0, 2, digitRuns) // 2, pointing at the unread 3
 */ const findDigitsEndIndex = (range, start, limit, digitRuns)=>{
    if (!isDigit(range[start])) {
        return start;
    }
    if (start >= digitRuns.start && start < digitRuns.end) {
        return Math.min(start + limit, digitRuns.end);
    }
    if (start >= digitRuns.previousStart && start < digitRuns.previousEnd) {
        return Math.min(start + limit, digitRuns.previousEnd);
    }
    let end = start + 1;
    while(isDigit(range[end])){
        end++;
    }
    // A failed full version can rewind from its second run to its first.
    digitRuns.previousStart = digitRuns.start;
    digitRuns.previousEnd = digitRuns.end;
    digitRuns.start = start;
    digitRuns.end = end;
    return Math.min(start + limit, end);
};
/**
 * Reads a number using the old regex's length and leading-zero rules.
 * Strict mode reads just the first zero in 012; loose mode can read all three.
 *
 * @param {string} range The text to read; it is not changed.
 * @param {number} start The position where the number should begin.
 * @param {boolean} loose Whether to allow leading zeros.
 * @param {DigitRunCache} digitRuns Shared digit-run cache, updated as needed.
 * @returns {number} The position after the matched digits, not their numeric value.
 * @example findVersionNumberEndIndex('012', 0, false, digitRuns) // 1
 * @example findVersionNumberEndIndex('012', 0, true, digitRuns) // 3
 */ const findVersionNumberEndIndex = (range, start, loose, digitRuns)=>{
    if (!loose && range[start] === '0') {
        return start + 1;
    }
    // Strict syntax allows an initial nonzero digit plus MAX_LENGTH digits.
    return findDigitsEndIndex(range, start, loose ? MAX_LENGTH : MAX_LENGTH + 1, digitRuns);
};
/**
 * Reads one piece of a prerelease name, such as beta or 1 in beta.1.
 * Tries the letter-or-hyphen form first, then the number-only form.
 *
 * @param {string} range The text to read; it is not changed.
 * @param {number} start The position where the identifier should begin.
 * @param {boolean} loose Whether numeric identifiers may have leading zeros.
 * @param {DigitRunCache} digitRuns Shared digit-run cache, updated as needed.
 * @returns {number} The position after the identifier, or start if none matches.
 * @example findPrereleaseIdentifierEndIndex('beta.1', 0, false, digitRuns) // 4, at the dot
 * @example findPrereleaseIdentifierEndIndex('001beta', 0, false, digitRuns) // 7
 */ const findPrereleaseIdentifierEndIndex = (range, start, loose, digitRuns)=>{
    const digitsEnd = findDigitsEndIndex(range, start, MAX_LENGTH, digitRuns);
    // The legacy regex tries a nonnumeric identifier before a numeric one.
    if (isLetter(range[digitsEnd]) || range[digitsEnd] === '-') {
        let end = digitsEnd + 1;
        const limit = end + MAX_SAFE_BUILD_LENGTH;
        while(end < limit && isIdentifierCharacter(range[end])){
            end++;
        }
        return end;
    }
    return findVersionNumberEndIndex(range, start, loose, digitRuns);
};
/**
 * Reads a prerelease suffix such as -beta.1, one dot-separated piece at a time.
 * Loose mode also allows the name without its opening hyphen.
 *
 * @param {string} range The text to read; it is not changed.
 * @param {number} start The position where the suffix should begin, including -.
 * @param {boolean} loose Whether the opening hyphen is optional and zeros allowed.
 * @param {DigitRunCache} digitRuns Shared digit-run cache, updated as needed.
 * @returns {number} The position after the matched suffix, or start if absent.
 * @example findPrereleaseEndIndex('-beta.1+sha', 0, false, digitRuns) // 7, at the plus
 * @example findPrereleaseEndIndex('beta', 0, false, digitRuns) // 0; no opening hyphen
 */ const findPrereleaseEndIndex = (range, start, loose, digitRuns)=>{
    const hyphen = range[start] === '-';
    if (!loose && !hyphen) {
        return start;
    }
    const identifierStart = start + (hyphen ? 1 : 0);
    let end = findPrereleaseIdentifierEndIndex(range, identifierStart, loose, digitRuns);
    if (end === identifierStart) {
        if (!loose || !hyphen) {
            return start;
        }
        // In loose syntax, a lone hyphen can itself be the identifier.
        end = findPrereleaseIdentifierEndIndex(range, start, loose, digitRuns);
    }
    while(range[end] === '.'){
        const next = findPrereleaseIdentifierEndIndex(range, end + 1, loose, digitRuns);
        if (next === end + 1) {
            break;
        }
        end = next;
    }
    return end;
};
/**
 * Reads one build-name piece, such as sha or 123 in +sha.123.
 * Stops at a disallowed character or the old regex's length limit.
 *
 * @param {string} range The text to read; it is not changed.
 * @param {number} start The position where the identifier should begin.
 * @returns {number} The position after the identifier, or start if none matches.
 * @example findBuildIdentifierEndIndex('sha.123', 0) // 3, at the dot
 * @example findBuildIdentifierEndIndex('001', 0) // 3; leading zeros are allowed
 */ const findBuildIdentifierEndIndex = (range, start)=>{
    let end = start;
    while(end - start < MAX_SAFE_BUILD_LENGTH && isIdentifierCharacter(range[end])){
        end++;
    }
    return end;
};
/**
 * Reads optional build metadata such as +sha.123.
 * Leaves the position unchanged if there is no plus sign followed by a name.
 *
 * @param {string} range The text to read; it is not changed.
 * @param {number} start The position where the opening + should be.
 * @returns {number} The position after the matched metadata, or start if absent.
 * @example findBuildEndIndex('+sha.123 <2', 0) // 8, at the space
 * @example findBuildEndIndex('+', 0) // 0; a plus sign alone is not a match
 */ const findBuildEndIndex = (range, start)=>{
    if (range[start] !== '+') {
        return start;
    }
    let end = findBuildIdentifierEndIndex(range, start + 1);
    if (end === start + 1) {
        return start;
    }
    while(range[end] === '.'){
        const next = findBuildIdentifierEndIndex(range, end + 1);
        if (next === end + 1) {
            break;
        }
        end = next;
    }
    return end;
};
/**
 * Reads three numbers separated by dots, then any prerelease and build suffixes.
 * Uses loose rules, so forms such as 01.02.03beta can match here.
 *
 * @param {string} range The text to read; it is not changed.
 * @param {number} start The position of the first number, after any prefix.
 * @param {DigitRunCache} digitRuns Shared digit-run cache, updated as needed.
 * @returns {number} The position after the version match, or start if none matches.
 * @example findLooseFullVersionEndIndex('1.2.3-beta+sha <2', 0, digitRuns) // 14
 * @example findLooseFullVersionEndIndex('1.2', 0, digitRuns) // 0; needs three numbers
 */ const findLooseFullVersionEndIndex = (range, start, digitRuns)=>{
    let end = start;
    for(let component = 0; component < 3; component++){
        const next = findVersionNumberEndIndex(range, end, true, digitRuns);
        if (next === end) {
            return start;
        }
        end = next;
        if (component < 2) {
            if (range[end] !== '.') {
                return start;
            }
            end++;
        }
    }
    const prereleaseEnd = findPrereleaseEndIndex(range, end, true, digitRuns);
    return findBuildEndIndex(range, prereleaseEnd);
};
/**
 * Reads one component of a partial or wildcard version, such as 2 or x in 2.x.
 * Numbers use strict leading-zero rules; wildcards take up one character.
 *
 * @param {string} range The text to read; it is not changed.
 * @param {number} start The position where the component should begin.
 * @param {DigitRunCache} digitRuns Shared digit-run cache, updated as needed.
 * @returns {number} The position after the component, or start if none matches.
 * @example findPartialVersionComponentEndIndex('2.x', 0, digitRuns) // 1, at the dot
 * @example findPartialVersionComponentEndIndex('2.x', 2, digitRuns) // 3, after x
 */ const findPartialVersionComponentEndIndex = (range, start, digitRuns)=>{
    if (isDigit(range[start])) {
        return findVersionNumberEndIndex(range, start, false, digitRuns);
    }
    return isVersionStart(range[start]) ? start + 1 : start;
};
/**
 * Reads up to three components, allowing forms such as 1, 1.2, or 1.x.
 * After the third component, also reads any strict prerelease and build suffixes.
 *
 * @param {string} range The text to read; it is not changed.
 * @param {number} start The position of a number or wildcard, after any prefix.
 * @param {DigitRunCache} digitRuns Shared digit-run cache, updated as needed.
 * @returns {number} The position after the matched version text.
 * @example findPartialVersionEndIndex('1.x <2', 0, digitRuns) // 3, at the space
 * @example findPartialVersionEndIndex('1.', 0, digitRuns) // 1; the trailing dot is unread
 */ const findPartialVersionEndIndex = (range, start, digitRuns)=>{
    let end = findPartialVersionComponentEndIndex(range, start, digitRuns);
    for(let component = 0; component < 2; component++){
        if (range[end] !== '.') {
            return end;
        }
        const next = findPartialVersionComponentEndIndex(range, end + 1, digitRuns);
        if (next === end + 1) {
            return end;
        }
        end = next;
    }
    const prereleaseEnd = findPrereleaseEndIndex(range, end, false, digitRuns);
    return findBuildEndIndex(range, prereleaseEnd);
};
/**
 * Finds where a version match ends, without deciding whether the range is valid.
 * Tries a loose full version first, then a partial or wildcard version, just
 * like the old regex's LOOSEPLAIN and XRANGEPLAIN alternatives.
 *
 * @param {string} range The text to read; it is not changed.
 * @param {number} start The position of a number or wildcard, after any prefix.
 * @param {DigitRunCache} digitRuns Shared digit-run cache, updated as needed.
 * @returns {number} The position where scanning the next candidate can resume.
 * @example findVersionEndIndex('1.2.3 <2', 0, digitRuns) // 5, at the space
 * @example findVersionEndIndex('1.x <2', 0, digitRuns) // 3, at the space
 */ const findVersionEndIndex = (range, start, digitRuns)=>{
    const fullVersionEnd = findLooseFullVersionEndIndex(range, start, digitRuns);
    return fullVersionEnd !== start ? fullVersionEnd : findPartialVersionEndIndex(range, start, digitRuns);
};
/**
 * Finds the one whitespace character the old replacement would remove.
 * Keeps leading whitespace, skips an optional operator, and checks immediately
 * after it. Returns -1 if there is nothing to remove.
 *
 * @param {string} range The text containing a candidate already found by the caller.
 * @param {number} matchStart The candidate's position, including leading whitespace.
 * @returns {number} The position of the removable whitespace, or -1 if absent.
 * @example findRemovableWhitespaceIndex(' > 1', 0) // 2; keep the space at position 0
 * @example findRemovableWhitespaceIndex('>1', 0) // -1
 */ const findRemovableWhitespaceIndex = (range, matchStart)=>{
    let position = matchStart;
    if (isWhitespace(range[position])) {
        position++;
    }
    if (range[position] === '<' || range[position] === '>') {
        position++;
    }
    if (range[position] === '=') {
        position++;
    }
    return isWhitespace(range[position]) ? position : -1;
};
/**
 * Joins an operator to its version, turning > 1.2.3 into >1.2.3.
 * Copies everything else according to the old regex's matching rules.
 * Moves forward through prefixes and whole versions to avoid repeatedly
 * searching the same characters on long inputs.
 *
 * @param {string} range The range text to process; the original string is unchanged.
 * @returns {string} The range with matched operator whitespace removed.
 * @example trimComparatorWhitespace('> 1.2.3 < 2') // '>1.2.3 <2'
 * @example trimComparatorWhitespace('> invalid') // '> invalid'
 */ const trimComparatorWhitespace = (range)=>{
    let result = '';
    let copyFrom = 0;
    let cursor = 0;
    const digitRuns = {
        start: -1,
        end: -1,
        previousStart: -1,
        previousEnd: -1
    };
    while(cursor < range.length){
        const matchStart = cursor;
        if (range[cursor] === '<' || range[cursor] === '>') {
            cursor++;
        } else if (!isVersionPrefix(range[cursor]) && !isVersionStart(range[cursor])) {
            cursor++;
            continue;
        }
        // Consume a v/=/whitespace run once, even when no version follows it.
        while(cursor < range.length && isVersionPrefix(range[cursor])){
            cursor++;
        }
        if (!isVersionStart(range[cursor])) {
            continue;
        }
        const whitespacePosition = findRemovableWhitespaceIndex(range, matchStart);
        if (whitespacePosition !== -1) {
            result += range.slice(copyFrom, whitespacePosition);
            copyFrom = whitespacePosition + 1;
        }
        // Skip the entire match, so a prerelease's trailing v cannot be
        // reconsidered as the prefix of another version.
        cursor = findVersionEndIndex(range, cursor, digitRuns);
    }
    return result + range.slice(copyFrom);
};
module.exports = trimComparatorWhitespace;
}),
"[project]/node_modules/semver/ranges/gtr.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Determine if version is greater than all the versions possible in the range.
const outside = __turbopack_context__.r("[project]/node_modules/semver/ranges/outside.js [app-route] (ecmascript)");
const gtr = (version, range, options)=>outside(version, range, '>', options);
module.exports = gtr;
}),
"[project]/node_modules/semver/ranges/intersects.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const Range = __turbopack_context__.r("[project]/node_modules/semver/classes/range.js [app-route] (ecmascript)");
const intersects = (r1, r2, options)=>{
    r1 = new Range(r1, options);
    r2 = new Range(r2, options);
    return r1.intersects(r2, options);
};
module.exports = intersects;
}),
"[project]/node_modules/semver/ranges/ltr.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const outside = __turbopack_context__.r("[project]/node_modules/semver/ranges/outside.js [app-route] (ecmascript)");
// Determine if version is less than all the versions possible in the range
const ltr = (version, range, options)=>outside(version, range, '<', options);
module.exports = ltr;
}),
"[project]/node_modules/semver/ranges/max-satisfying.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [app-route] (ecmascript)");
const Range = __turbopack_context__.r("[project]/node_modules/semver/classes/range.js [app-route] (ecmascript)");
const maxSatisfying = (versions, range, options)=>{
    let max = null;
    let maxSV = null;
    let rangeObj = null;
    try {
        rangeObj = new Range(range, options);
    } catch (er) {
        return null;
    }
    versions.forEach((v)=>{
        if (rangeObj.test(v)) {
            // satisfies(v, range, options)
            if (!max || maxSV.compare(v) === -1) {
                // compare(max, v, true)
                max = v;
                maxSV = new SemVer(max, options);
            }
        }
    });
    return max;
};
module.exports = maxSatisfying;
}),
"[project]/node_modules/semver/ranges/min-satisfying.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [app-route] (ecmascript)");
const Range = __turbopack_context__.r("[project]/node_modules/semver/classes/range.js [app-route] (ecmascript)");
const minSatisfying = (versions, range, options)=>{
    let min = null;
    let minSV = null;
    let rangeObj = null;
    try {
        rangeObj = new Range(range, options);
    } catch (er) {
        return null;
    }
    versions.forEach((v)=>{
        if (rangeObj.test(v)) {
            // satisfies(v, range, options)
            if (!min || minSV.compare(v) === 1) {
                // compare(min, v, true)
                min = v;
                minSV = new SemVer(min, options);
            }
        }
    });
    return min;
};
module.exports = minSatisfying;
}),
"[project]/node_modules/semver/ranges/min-version.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [app-route] (ecmascript)");
const Range = __turbopack_context__.r("[project]/node_modules/semver/classes/range.js [app-route] (ecmascript)");
const gt = __turbopack_context__.r("[project]/node_modules/semver/functions/gt.js [app-route] (ecmascript)");
const minVersion = (range, loose)=>{
    range = new Range(range, loose);
    let minver = new SemVer('0.0.0');
    if (range.test(minver)) {
        return minver;
    }
    minver = new SemVer('0.0.0-0');
    if (range.test(minver)) {
        return minver;
    }
    minver = null;
    for(let i = 0; i < range.set.length; ++i){
        const comparators = range.set[i];
        let setMin = null;
        comparators.forEach((comparator)=>{
            // Clone to avoid manipulating the comparator's semver object.
            const compver = new SemVer(comparator.semver.version);
            switch(comparator.operator){
                case '>':
                    if (compver.prerelease.length === 0) {
                        compver.patch++;
                    } else {
                        compver.prerelease.push(0);
                    }
                    compver.raw = compver.format();
                /* fallthrough */ case '':
                case '>=':
                    if (!setMin || gt(compver, setMin)) {
                        setMin = compver;
                    }
                    break;
                case '<':
                case '<=':
                    break;
                /* istanbul ignore next */ default:
                    throw new Error(`Unexpected operation: ${comparator.operator}`);
            }
        });
        if (setMin && (!minver || gt(minver, setMin))) {
            minver = setMin;
        }
    }
    if (minver && range.test(minver)) {
        return minver;
    }
    return null;
};
module.exports = minVersion;
}),
"[project]/node_modules/semver/ranges/outside.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [app-route] (ecmascript)");
const Comparator = __turbopack_context__.r("[project]/node_modules/semver/classes/comparator.js [app-route] (ecmascript)");
const { ANY } = Comparator;
const Range = __turbopack_context__.r("[project]/node_modules/semver/classes/range.js [app-route] (ecmascript)");
const satisfies = __turbopack_context__.r("[project]/node_modules/semver/functions/satisfies.js [app-route] (ecmascript)");
const gt = __turbopack_context__.r("[project]/node_modules/semver/functions/gt.js [app-route] (ecmascript)");
const lt = __turbopack_context__.r("[project]/node_modules/semver/functions/lt.js [app-route] (ecmascript)");
const lte = __turbopack_context__.r("[project]/node_modules/semver/functions/lte.js [app-route] (ecmascript)");
const gte = __turbopack_context__.r("[project]/node_modules/semver/functions/gte.js [app-route] (ecmascript)");
const outside = (version, range, hilo, options)=>{
    version = new SemVer(version, options);
    range = new Range(range, options);
    let gtfn, ltefn, ltfn, comp, ecomp;
    switch(hilo){
        case '>':
            gtfn = gt;
            ltefn = lte;
            ltfn = lt;
            comp = '>';
            ecomp = '>=';
            break;
        case '<':
            gtfn = lt;
            ltefn = gte;
            ltfn = gt;
            comp = '<';
            ecomp = '<=';
            break;
        default:
            throw new TypeError('Must provide a hilo val of "<" or ">"');
    }
    // If it satisfies the range it is not outside
    if (satisfies(version, range, options)) {
        return false;
    }
    // From now on, variable terms are as if we're in "gtr" mode.
    // but note that everything is flipped for the "ltr" function.
    for(let i = 0; i < range.set.length; ++i){
        const comparators = range.set[i];
        let high = null;
        let low = null;
        comparators.forEach((comparator)=>{
            if (comparator.semver === ANY) {
                comparator = new Comparator('>=0.0.0');
            }
            high = high || comparator;
            low = low || comparator;
            if (gtfn(comparator.semver, high.semver, options)) {
                high = comparator;
            } else if (ltfn(comparator.semver, low.semver, options)) {
                low = comparator;
            }
        });
        // If the edge version comparator has a operator then our version
        // isn't outside it
        if (high.operator === comp || high.operator === ecomp) {
            return false;
        }
        // If the lowest version comparator has an operator and our version
        // is less than it then it isn't higher than the range
        if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
            return false;
        } else if (low.operator === ecomp && ltfn(version, low.semver)) {
            return false;
        }
    }
    return true;
};
module.exports = outside;
}),
"[project]/node_modules/semver/ranges/simplify.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// given a set of versions and a range, create a "simplified" range
// that includes the same versions that the original range does
// If the original range is shorter than the simplified one, return that.
const satisfies = __turbopack_context__.r("[project]/node_modules/semver/functions/satisfies.js [app-route] (ecmascript)");
const compare = __turbopack_context__.r("[project]/node_modules/semver/functions/compare.js [app-route] (ecmascript)");
module.exports = (versions, range, options)=>{
    const set = [];
    let first = null;
    let prev = null;
    const v = versions.sort((a, b)=>compare(a, b, options));
    for (const version of v){
        const included = satisfies(version, range, options);
        if (included) {
            prev = version;
            if (!first) {
                first = version;
            }
        } else {
            if (prev) {
                set.push([
                    first,
                    prev
                ]);
            }
            prev = null;
            first = null;
        }
    }
    if (first) {
        set.push([
            first,
            null
        ]);
    }
    const ranges = [];
    for (const [min, max] of set){
        if (min === max) {
            ranges.push(min);
        } else if (!max && min === v[0]) {
            ranges.push('*');
        } else if (!max) {
            ranges.push(`>=${min}`);
        } else if (min === v[0]) {
            ranges.push(`<=${max}`);
        } else {
            ranges.push(`${min} - ${max}`);
        }
    }
    const simplified = ranges.join(' || ');
    const original = typeof range.raw === 'string' ? range.raw : String(range);
    return simplified.length < original.length ? simplified : range;
};
}),
"[project]/node_modules/semver/ranges/subset.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const Range = __turbopack_context__.r("[project]/node_modules/semver/classes/range.js [app-route] (ecmascript)");
const Comparator = __turbopack_context__.r("[project]/node_modules/semver/classes/comparator.js [app-route] (ecmascript)");
const { ANY } = Comparator;
const satisfies = __turbopack_context__.r("[project]/node_modules/semver/functions/satisfies.js [app-route] (ecmascript)");
const compare = __turbopack_context__.r("[project]/node_modules/semver/functions/compare.js [app-route] (ecmascript)");
// Complex range `r1 || r2 || ...` is a subset of `R1 || R2 || ...` iff:
// - Every simple range `r1, r2, ...` is a null set, OR
// - Every simple range `r1, r2, ...` which is not a null set is a subset of
//   some `R1, R2, ...`
//
// Simple range `c1 c2 ...` is a subset of simple range `C1 C2 ...` iff:
// - If c is only the ANY comparator
//   - If C is only the ANY comparator, return true
//   - Else if in prerelease mode, return false
//   - else replace c with `[>=0.0.0]`
// - If C is only the ANY comparator
//   - if in prerelease mode, return true
//   - else replace C with `[>=0.0.0]`
// - Let EQ be the set of = comparators in c
// - If EQ is more than one, return true (null set)
// - Let GT be the highest > or >= comparator in c
// - Let LT be the lowest < or <= comparator in c
// - If GT and LT, and GT.semver > LT.semver, return true (null set)
// - If any C is a = range, and GT or LT are set, return false
// - If EQ
//   - If GT, and EQ does not satisfy GT, return true (null set)
//   - If LT, and EQ does not satisfy LT, return true (null set)
//   - If EQ satisfies every C, return true
//   - Else return false
// - If GT
//   - If GT.semver is lower than any > or >= comp in C, return false
//   - If GT is >=, and GT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the GT.semver tuple, return false
// - If LT
//   - If LT.semver is greater than any < or <= comp in C, return false
//   - If LT is <=, and LT.semver does not satisfy every C, return false
//   - If LT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the LT.semver tuple, return false
// - Else return true
const subset = (sub, dom, options = {})=>{
    if (sub === dom) {
        return true;
    }
    sub = new Range(sub, options);
    dom = new Range(dom, options);
    let sawNonNull = false;
    OUTER: for (const simpleSub of sub.set){
        for (const simpleDom of dom.set){
            const isSub = simpleSubset(simpleSub, simpleDom, options);
            sawNonNull = sawNonNull || isSub !== null;
            if (isSub) {
                continue OUTER;
            }
        }
        // the null set is a subset of everything, but null simple ranges in
        // a complex range should be ignored.  so if we saw a non-null range,
        // then we know this isn't a subset, but if EVERY simple range was null,
        // then it is a subset.
        if (sawNonNull) {
            return false;
        }
    }
    return true;
};
const minimumVersionWithPreRelease = [
    new Comparator('>=0.0.0-0')
];
const minimumVersion = [
    new Comparator('>=0.0.0')
];
const simpleSubset = (sub, dom, options)=>{
    if (sub === dom) {
        return true;
    }
    if (sub.length === 1 && sub[0].semver === ANY) {
        if (dom.length === 1 && dom[0].semver === ANY) {
            return true;
        } else if (options.includePrerelease) {
            sub = minimumVersionWithPreRelease;
        } else {
            sub = minimumVersion;
        }
    }
    if (dom.length === 1 && dom[0].semver === ANY) {
        if (options.includePrerelease) {
            return true;
        } else {
            dom = minimumVersion;
        }
    }
    const eqSet = new Set();
    let gt, lt;
    for (const c of sub){
        if (c.operator === '>' || c.operator === '>=') {
            gt = higherGT(gt, c, options);
        } else if (c.operator === '<' || c.operator === '<=') {
            lt = lowerLT(lt, c, options);
        } else {
            eqSet.add(c.semver);
        }
    }
    if (eqSet.size > 1) {
        return null;
    }
    let gtltComp;
    if (gt && lt) {
        gtltComp = compare(gt.semver, lt.semver, options);
        if (gtltComp > 0) {
            return null;
        } else if (gtltComp === 0 && (gt.operator !== '>=' || lt.operator !== '<=')) {
            return null;
        }
    }
    // will iterate one or zero times
    for (const eq of eqSet){
        if (gt && !satisfies(eq, String(gt), options)) {
            return null;
        }
        if (lt && !satisfies(eq, String(lt), options)) {
            return null;
        }
        for (const c of dom){
            if (!satisfies(eq, String(c), options)) {
                return false;
            }
        }
        return true;
    }
    let higher, lower;
    let hasDomLT, hasDomGT;
    // if the subset has a prerelease, we need a comparator in the superset
    // with the same tuple and a prerelease, or it's not a subset
    let needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
    let needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
    // exception: <1.2.3-0 is the same as <1.2.3
    if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === '<' && needDomLTPre.prerelease[0] === 0) {
        needDomLTPre = false;
    }
    for (const c of dom){
        hasDomGT = hasDomGT || c.operator === '>' || c.operator === '>=';
        hasDomLT = hasDomLT || c.operator === '<' || c.operator === '<=';
        if (gt) {
            if (needDomGTPre) {
                if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch) {
                    needDomGTPre = false;
                }
            }
            if (c.operator === '>' || c.operator === '>=') {
                higher = higherGT(gt, c, options);
                if (higher === c && higher !== gt) {
                    return false;
                }
            } else if (gt.operator === '>=' && !c.test(gt.semver)) {
                return false;
            }
        }
        if (lt) {
            if (needDomLTPre) {
                if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch) {
                    needDomLTPre = false;
                }
            }
            if (c.operator === '<' || c.operator === '<=') {
                lower = lowerLT(lt, c, options);
                if (lower === c && lower !== lt) {
                    return false;
                }
            } else if (lt.operator === '<=' && !c.test(lt.semver)) {
                return false;
            }
        }
        if (!c.operator && (lt || gt) && gtltComp !== 0) {
            return false;
        }
    }
    // if there was a < or >, and nothing in the dom, then must be false
    // UNLESS it was limited by another range in the other direction.
    // Eg, >1.0.0 <1.0.1 is still a subset of <2.0.0
    if (gt && hasDomLT && !lt && gtltComp !== 0) {
        return false;
    }
    if (lt && hasDomGT && !gt && gtltComp !== 0) {
        return false;
    }
    // we needed a prerelease range in a specific tuple, but didn't get one
    // then this isn't a subset.  eg >=1.2.3-pre is not a subset of >=1.0.0,
    // because it includes prereleases in the 1.2.3 tuple
    if (needDomGTPre || needDomLTPre) {
        return false;
    }
    return true;
};
// >=1.2.3 is lower than >1.2.3
const higherGT = (a, b, options)=>{
    if (!a) {
        return b;
    }
    const comp = compare(a.semver, b.semver, options);
    return comp > 0 ? a : comp < 0 ? b : b.operator === '>' && a.operator === '>=' ? b : a;
};
// <=1.2.3 is higher than <1.2.3
const lowerLT = (a, b, options)=>{
    if (!a) {
        return b;
    }
    const comp = compare(a.semver, b.semver, options);
    return comp < 0 ? a : comp > 0 ? b : b.operator === '<' && a.operator === '<=' ? b : a;
};
module.exports = subset;
}),
"[project]/node_modules/semver/ranges/to-comparators.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const Range = __turbopack_context__.r("[project]/node_modules/semver/classes/range.js [app-route] (ecmascript)");
// Mostly just for testing and legacy API reasons
const toComparators = (range, options)=>new Range(range, options).set.map((comp)=>comp.map((c)=>c.value).join(' ').trim().split(' '));
module.exports = toComparators;
}),
"[project]/node_modules/semver/ranges/valid.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const Range = __turbopack_context__.r("[project]/node_modules/semver/classes/range.js [app-route] (ecmascript)");
const validRange = (range, options)=>{
    try {
        // Return '*' instead of '' so that truthiness works.
        // This will throw if it's invalid anyway
        return new Range(range, options).range || '*';
    } catch (er) {
        return null;
    }
};
module.exports = validRange;
}),
"[project]/node_modules/wrappy/wrappy.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Returns a wrapper function that returns a wrapped callback
// The wrapper function should do some stuff, and return a
// presumably different callback function.
// This makes sure that own properties are retained, so that
// decorations and such are not lost along the way.
module.exports = wrappy;
function wrappy(fn, cb) {
    if (fn && cb) return wrappy(fn)(cb);
    if (typeof fn !== 'function') throw new TypeError('need wrapper function');
    Object.keys(fn).forEach(function(k) {
        wrapper[k] = fn[k];
    });
    return wrapper;
    //TURBOPACK unreachable
    ;
    function wrapper() {
        var args = new Array(arguments.length);
        for(var i = 0; i < args.length; i++){
            args[i] = arguments[i];
        }
        var ret = fn.apply(this, args);
        var cb = args[args.length - 1];
        if (typeof ret === 'function' && ret !== cb) {
            Object.keys(cb).forEach(function(k) {
                ret[k] = cb[k];
            });
        }
        return ret;
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__16quknaw_su50._.js.map