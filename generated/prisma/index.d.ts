
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model RecurringRule
 * 
 */
export type RecurringRule = $Result.DefaultSelection<Prisma.$RecurringRulePayload>
/**
 * Model Commitment
 * 
 */
export type Commitment = $Result.DefaultSelection<Prisma.$CommitmentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recurringRule`: Exposes CRUD operations for the **RecurringRule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecurringRules
    * const recurringRules = await prisma.recurringRule.findMany()
    * ```
    */
  get recurringRule(): Prisma.RecurringRuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commitment`: Exposes CRUD operations for the **Commitment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Commitments
    * const commitments = await prisma.commitment.findMany()
    * ```
    */
  get commitment(): Prisma.CommitmentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Account: 'Account',
    Transaction: 'Transaction',
    RecurringRule: 'RecurringRule',
    Commitment: 'Commitment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "account" | "transaction" | "recurringRule" | "commitment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      RecurringRule: {
        payload: Prisma.$RecurringRulePayload<ExtArgs>
        fields: Prisma.RecurringRuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecurringRuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringRulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecurringRuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringRulePayload>
          }
          findFirst: {
            args: Prisma.RecurringRuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringRulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecurringRuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringRulePayload>
          }
          findMany: {
            args: Prisma.RecurringRuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringRulePayload>[]
          }
          create: {
            args: Prisma.RecurringRuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringRulePayload>
          }
          createMany: {
            args: Prisma.RecurringRuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecurringRuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringRulePayload>[]
          }
          delete: {
            args: Prisma.RecurringRuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringRulePayload>
          }
          update: {
            args: Prisma.RecurringRuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringRulePayload>
          }
          deleteMany: {
            args: Prisma.RecurringRuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecurringRuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecurringRuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringRulePayload>[]
          }
          upsert: {
            args: Prisma.RecurringRuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringRulePayload>
          }
          aggregate: {
            args: Prisma.RecurringRuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecurringRule>
          }
          groupBy: {
            args: Prisma.RecurringRuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecurringRuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecurringRuleCountArgs<ExtArgs>
            result: $Utils.Optional<RecurringRuleCountAggregateOutputType> | number
          }
        }
      }
      Commitment: {
        payload: Prisma.$CommitmentPayload<ExtArgs>
        fields: Prisma.CommitmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommitmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommitmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitmentPayload>
          }
          findFirst: {
            args: Prisma.CommitmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommitmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitmentPayload>
          }
          findMany: {
            args: Prisma.CommitmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitmentPayload>[]
          }
          create: {
            args: Prisma.CommitmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitmentPayload>
          }
          createMany: {
            args: Prisma.CommitmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommitmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitmentPayload>[]
          }
          delete: {
            args: Prisma.CommitmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitmentPayload>
          }
          update: {
            args: Prisma.CommitmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitmentPayload>
          }
          deleteMany: {
            args: Prisma.CommitmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommitmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommitmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitmentPayload>[]
          }
          upsert: {
            args: Prisma.CommitmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitmentPayload>
          }
          aggregate: {
            args: Prisma.CommitmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommitment>
          }
          groupBy: {
            args: Prisma.CommitmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommitmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommitmentCountArgs<ExtArgs>
            result: $Utils.Optional<CommitmentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    account?: AccountOmit
    transaction?: TransactionOmit
    recurringRule?: RecurringRuleOmit
    commitment?: CommitmentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    transactions: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | AccountCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type RecurringRuleCountOutputType
   */

  export type RecurringRuleCountOutputType = {
    commitments: number
  }

  export type RecurringRuleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commitments?: boolean | RecurringRuleCountOutputTypeCountCommitmentsArgs
  }

  // Custom InputTypes
  /**
   * RecurringRuleCountOutputType without action
   */
  export type RecurringRuleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringRuleCountOutputType
     */
    select?: RecurringRuleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecurringRuleCountOutputType without action
   */
  export type RecurringRuleCountOutputTypeCountCommitmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommitmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    balance: number | null
  }

  export type AccountSumAggregateOutputType = {
    balance: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    balance: number | null
    dueDate: Date | null
    pluggyItemId: string | null
    pluggyAccountId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    balance: number | null
    dueDate: Date | null
    pluggyItemId: string | null
    pluggyAccountId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    name: number
    type: number
    balance: number
    dueDate: number
    pluggyItemId: number
    pluggyAccountId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    balance?: true
  }

  export type AccountSumAggregateInputType = {
    balance?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    balance?: true
    dueDate?: true
    pluggyItemId?: true
    pluggyAccountId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    balance?: true
    dueDate?: true
    pluggyItemId?: true
    pluggyAccountId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    balance?: true
    dueDate?: true
    pluggyItemId?: true
    pluggyAccountId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    name: string
    type: string
    balance: number
    dueDate: Date | null
    pluggyItemId: string | null
    pluggyAccountId: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    balance?: boolean
    dueDate?: boolean
    pluggyItemId?: boolean
    pluggyAccountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transactions?: boolean | Account$transactionsArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    balance?: boolean
    dueDate?: boolean
    pluggyItemId?: boolean
    pluggyAccountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    balance?: boolean
    dueDate?: boolean
    pluggyItemId?: boolean
    pluggyAccountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    balance?: boolean
    dueDate?: boolean
    pluggyItemId?: boolean
    pluggyAccountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "balance" | "dueDate" | "pluggyItemId" | "pluggyAccountId" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | Account$transactionsArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: string
      balance: number
      dueDate: Date | null
      pluggyItemId: string | null
      pluggyAccountId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactions<T extends Account$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Account$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly name: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly balance: FieldRef<"Account", 'Int'>
    readonly dueDate: FieldRef<"Account", 'DateTime'>
    readonly pluggyItemId: FieldRef<"Account", 'String'>
    readonly pluggyAccountId: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account.transactions
   */
  export type Account$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    description: string | null
    amount: number | null
    type: string | null
    date: Date | null
    accountId: string | null
    status: string | null
    category: string | null
    categorySource: string | null
    pluggyTransactionId: string | null
    isBillPayment: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    description: string | null
    amount: number | null
    type: string | null
    date: Date | null
    accountId: string | null
    status: string | null
    category: string | null
    categorySource: string | null
    pluggyTransactionId: string | null
    isBillPayment: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    description: number
    amount: number
    type: number
    date: number
    accountId: number
    status: number
    category: number
    categorySource: number
    pluggyTransactionId: number
    isBillPayment: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    type?: true
    date?: true
    accountId?: true
    status?: true
    category?: true
    categorySource?: true
    pluggyTransactionId?: true
    isBillPayment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    type?: true
    date?: true
    accountId?: true
    status?: true
    category?: true
    categorySource?: true
    pluggyTransactionId?: true
    isBillPayment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    type?: true
    date?: true
    accountId?: true
    status?: true
    category?: true
    categorySource?: true
    pluggyTransactionId?: true
    isBillPayment?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    description: string
    amount: number
    type: string
    date: Date
    accountId: string | null
    status: string
    category: string | null
    categorySource: string
    pluggyTransactionId: string | null
    isBillPayment: boolean
    createdAt: Date
    updatedAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    type?: boolean
    date?: boolean
    accountId?: boolean
    status?: boolean
    category?: boolean
    categorySource?: boolean
    pluggyTransactionId?: boolean
    isBillPayment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | Transaction$accountArgs<ExtArgs>
    commitment?: boolean | Transaction$commitmentArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    type?: boolean
    date?: boolean
    accountId?: boolean
    status?: boolean
    category?: boolean
    categorySource?: boolean
    pluggyTransactionId?: boolean
    isBillPayment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | Transaction$accountArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    type?: boolean
    date?: boolean
    accountId?: boolean
    status?: boolean
    category?: boolean
    categorySource?: boolean
    pluggyTransactionId?: boolean
    isBillPayment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | Transaction$accountArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    description?: boolean
    amount?: boolean
    type?: boolean
    date?: boolean
    accountId?: boolean
    status?: boolean
    category?: boolean
    categorySource?: boolean
    pluggyTransactionId?: boolean
    isBillPayment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "amount" | "type" | "date" | "accountId" | "status" | "category" | "categorySource" | "pluggyTransactionId" | "isBillPayment" | "createdAt" | "updatedAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | Transaction$accountArgs<ExtArgs>
    commitment?: boolean | Transaction$commitmentArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | Transaction$accountArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | Transaction$accountArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs> | null
      commitment: Prisma.$CommitmentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string
      amount: number
      type: string
      date: Date
      accountId: string | null
      status: string
      category: string | null
      categorySource: string
      pluggyTransactionId: string | null
      isBillPayment: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends Transaction$accountArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$accountArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    commitment<T extends Transaction$commitmentArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$commitmentArgs<ExtArgs>>): Prisma__CommitmentClient<$Result.GetResult<Prisma.$CommitmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly description: FieldRef<"Transaction", 'String'>
    readonly amount: FieldRef<"Transaction", 'Int'>
    readonly type: FieldRef<"Transaction", 'String'>
    readonly date: FieldRef<"Transaction", 'DateTime'>
    readonly accountId: FieldRef<"Transaction", 'String'>
    readonly status: FieldRef<"Transaction", 'String'>
    readonly category: FieldRef<"Transaction", 'String'>
    readonly categorySource: FieldRef<"Transaction", 'String'>
    readonly pluggyTransactionId: FieldRef<"Transaction", 'String'>
    readonly isBillPayment: FieldRef<"Transaction", 'Boolean'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction.account
   */
  export type Transaction$accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
  }

  /**
   * Transaction.commitment
   */
  export type Transaction$commitmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commitment
     */
    select?: CommitmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commitment
     */
    omit?: CommitmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitmentInclude<ExtArgs> | null
    where?: CommitmentWhereInput
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model RecurringRule
   */

  export type AggregateRecurringRule = {
    _count: RecurringRuleCountAggregateOutputType | null
    _avg: RecurringRuleAvgAggregateOutputType | null
    _sum: RecurringRuleSumAggregateOutputType | null
    _min: RecurringRuleMinAggregateOutputType | null
    _max: RecurringRuleMaxAggregateOutputType | null
  }

  export type RecurringRuleAvgAggregateOutputType = {
    amount: number | null
    dueDay: number | null
    intervalMonths: number | null
  }

  export type RecurringRuleSumAggregateOutputType = {
    amount: number | null
    dueDay: number | null
    intervalMonths: number | null
  }

  export type RecurringRuleMinAggregateOutputType = {
    id: string | null
    matchKey: string | null
    description: string | null
    accountId: string | null
    amount: number | null
    category: string | null
    dueDay: number | null
    intervalMonths: number | null
    startMonth: string | null
    active: boolean | null
    createdAt: Date | null
  }

  export type RecurringRuleMaxAggregateOutputType = {
    id: string | null
    matchKey: string | null
    description: string | null
    accountId: string | null
    amount: number | null
    category: string | null
    dueDay: number | null
    intervalMonths: number | null
    startMonth: string | null
    active: boolean | null
    createdAt: Date | null
  }

  export type RecurringRuleCountAggregateOutputType = {
    id: number
    matchKey: number
    description: number
    accountId: number
    amount: number
    category: number
    dueDay: number
    intervalMonths: number
    startMonth: number
    active: number
    createdAt: number
    _all: number
  }


  export type RecurringRuleAvgAggregateInputType = {
    amount?: true
    dueDay?: true
    intervalMonths?: true
  }

  export type RecurringRuleSumAggregateInputType = {
    amount?: true
    dueDay?: true
    intervalMonths?: true
  }

  export type RecurringRuleMinAggregateInputType = {
    id?: true
    matchKey?: true
    description?: true
    accountId?: true
    amount?: true
    category?: true
    dueDay?: true
    intervalMonths?: true
    startMonth?: true
    active?: true
    createdAt?: true
  }

  export type RecurringRuleMaxAggregateInputType = {
    id?: true
    matchKey?: true
    description?: true
    accountId?: true
    amount?: true
    category?: true
    dueDay?: true
    intervalMonths?: true
    startMonth?: true
    active?: true
    createdAt?: true
  }

  export type RecurringRuleCountAggregateInputType = {
    id?: true
    matchKey?: true
    description?: true
    accountId?: true
    amount?: true
    category?: true
    dueDay?: true
    intervalMonths?: true
    startMonth?: true
    active?: true
    createdAt?: true
    _all?: true
  }

  export type RecurringRuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecurringRule to aggregate.
     */
    where?: RecurringRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringRules to fetch.
     */
    orderBy?: RecurringRuleOrderByWithRelationInput | RecurringRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecurringRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecurringRules
    **/
    _count?: true | RecurringRuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecurringRuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecurringRuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecurringRuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecurringRuleMaxAggregateInputType
  }

  export type GetRecurringRuleAggregateType<T extends RecurringRuleAggregateArgs> = {
        [P in keyof T & keyof AggregateRecurringRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecurringRule[P]>
      : GetScalarType<T[P], AggregateRecurringRule[P]>
  }




  export type RecurringRuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecurringRuleWhereInput
    orderBy?: RecurringRuleOrderByWithAggregationInput | RecurringRuleOrderByWithAggregationInput[]
    by: RecurringRuleScalarFieldEnum[] | RecurringRuleScalarFieldEnum
    having?: RecurringRuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecurringRuleCountAggregateInputType | true
    _avg?: RecurringRuleAvgAggregateInputType
    _sum?: RecurringRuleSumAggregateInputType
    _min?: RecurringRuleMinAggregateInputType
    _max?: RecurringRuleMaxAggregateInputType
  }

  export type RecurringRuleGroupByOutputType = {
    id: string
    matchKey: string
    description: string
    accountId: string | null
    amount: number
    category: string
    dueDay: number
    intervalMonths: number
    startMonth: string
    active: boolean
    createdAt: Date
    _count: RecurringRuleCountAggregateOutputType | null
    _avg: RecurringRuleAvgAggregateOutputType | null
    _sum: RecurringRuleSumAggregateOutputType | null
    _min: RecurringRuleMinAggregateOutputType | null
    _max: RecurringRuleMaxAggregateOutputType | null
  }

  type GetRecurringRuleGroupByPayload<T extends RecurringRuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecurringRuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecurringRuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecurringRuleGroupByOutputType[P]>
            : GetScalarType<T[P], RecurringRuleGroupByOutputType[P]>
        }
      >
    >


  export type RecurringRuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchKey?: boolean
    description?: boolean
    accountId?: boolean
    amount?: boolean
    category?: boolean
    dueDay?: boolean
    intervalMonths?: boolean
    startMonth?: boolean
    active?: boolean
    createdAt?: boolean
    commitments?: boolean | RecurringRule$commitmentsArgs<ExtArgs>
    _count?: boolean | RecurringRuleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurringRule"]>

  export type RecurringRuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchKey?: boolean
    description?: boolean
    accountId?: boolean
    amount?: boolean
    category?: boolean
    dueDay?: boolean
    intervalMonths?: boolean
    startMonth?: boolean
    active?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["recurringRule"]>

  export type RecurringRuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchKey?: boolean
    description?: boolean
    accountId?: boolean
    amount?: boolean
    category?: boolean
    dueDay?: boolean
    intervalMonths?: boolean
    startMonth?: boolean
    active?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["recurringRule"]>

  export type RecurringRuleSelectScalar = {
    id?: boolean
    matchKey?: boolean
    description?: boolean
    accountId?: boolean
    amount?: boolean
    category?: boolean
    dueDay?: boolean
    intervalMonths?: boolean
    startMonth?: boolean
    active?: boolean
    createdAt?: boolean
  }

  export type RecurringRuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "matchKey" | "description" | "accountId" | "amount" | "category" | "dueDay" | "intervalMonths" | "startMonth" | "active" | "createdAt", ExtArgs["result"]["recurringRule"]>
  export type RecurringRuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commitments?: boolean | RecurringRule$commitmentsArgs<ExtArgs>
    _count?: boolean | RecurringRuleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecurringRuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RecurringRuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RecurringRulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecurringRule"
    objects: {
      commitments: Prisma.$CommitmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      matchKey: string
      description: string
      accountId: string | null
      amount: number
      category: string
      dueDay: number
      intervalMonths: number
      startMonth: string
      active: boolean
      createdAt: Date
    }, ExtArgs["result"]["recurringRule"]>
    composites: {}
  }

  type RecurringRuleGetPayload<S extends boolean | null | undefined | RecurringRuleDefaultArgs> = $Result.GetResult<Prisma.$RecurringRulePayload, S>

  type RecurringRuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecurringRuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecurringRuleCountAggregateInputType | true
    }

  export interface RecurringRuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecurringRule'], meta: { name: 'RecurringRule' } }
    /**
     * Find zero or one RecurringRule that matches the filter.
     * @param {RecurringRuleFindUniqueArgs} args - Arguments to find a RecurringRule
     * @example
     * // Get one RecurringRule
     * const recurringRule = await prisma.recurringRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecurringRuleFindUniqueArgs>(args: SelectSubset<T, RecurringRuleFindUniqueArgs<ExtArgs>>): Prisma__RecurringRuleClient<$Result.GetResult<Prisma.$RecurringRulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecurringRule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecurringRuleFindUniqueOrThrowArgs} args - Arguments to find a RecurringRule
     * @example
     * // Get one RecurringRule
     * const recurringRule = await prisma.recurringRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecurringRuleFindUniqueOrThrowArgs>(args: SelectSubset<T, RecurringRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecurringRuleClient<$Result.GetResult<Prisma.$RecurringRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecurringRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringRuleFindFirstArgs} args - Arguments to find a RecurringRule
     * @example
     * // Get one RecurringRule
     * const recurringRule = await prisma.recurringRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecurringRuleFindFirstArgs>(args?: SelectSubset<T, RecurringRuleFindFirstArgs<ExtArgs>>): Prisma__RecurringRuleClient<$Result.GetResult<Prisma.$RecurringRulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecurringRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringRuleFindFirstOrThrowArgs} args - Arguments to find a RecurringRule
     * @example
     * // Get one RecurringRule
     * const recurringRule = await prisma.recurringRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecurringRuleFindFirstOrThrowArgs>(args?: SelectSubset<T, RecurringRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecurringRuleClient<$Result.GetResult<Prisma.$RecurringRulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecurringRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringRuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecurringRules
     * const recurringRules = await prisma.recurringRule.findMany()
     * 
     * // Get first 10 RecurringRules
     * const recurringRules = await prisma.recurringRule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recurringRuleWithIdOnly = await prisma.recurringRule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecurringRuleFindManyArgs>(args?: SelectSubset<T, RecurringRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecurringRule.
     * @param {RecurringRuleCreateArgs} args - Arguments to create a RecurringRule.
     * @example
     * // Create one RecurringRule
     * const RecurringRule = await prisma.recurringRule.create({
     *   data: {
     *     // ... data to create a RecurringRule
     *   }
     * })
     * 
     */
    create<T extends RecurringRuleCreateArgs>(args: SelectSubset<T, RecurringRuleCreateArgs<ExtArgs>>): Prisma__RecurringRuleClient<$Result.GetResult<Prisma.$RecurringRulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecurringRules.
     * @param {RecurringRuleCreateManyArgs} args - Arguments to create many RecurringRules.
     * @example
     * // Create many RecurringRules
     * const recurringRule = await prisma.recurringRule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecurringRuleCreateManyArgs>(args?: SelectSubset<T, RecurringRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecurringRules and returns the data saved in the database.
     * @param {RecurringRuleCreateManyAndReturnArgs} args - Arguments to create many RecurringRules.
     * @example
     * // Create many RecurringRules
     * const recurringRule = await prisma.recurringRule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecurringRules and only return the `id`
     * const recurringRuleWithIdOnly = await prisma.recurringRule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecurringRuleCreateManyAndReturnArgs>(args?: SelectSubset<T, RecurringRuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringRulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecurringRule.
     * @param {RecurringRuleDeleteArgs} args - Arguments to delete one RecurringRule.
     * @example
     * // Delete one RecurringRule
     * const RecurringRule = await prisma.recurringRule.delete({
     *   where: {
     *     // ... filter to delete one RecurringRule
     *   }
     * })
     * 
     */
    delete<T extends RecurringRuleDeleteArgs>(args: SelectSubset<T, RecurringRuleDeleteArgs<ExtArgs>>): Prisma__RecurringRuleClient<$Result.GetResult<Prisma.$RecurringRulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecurringRule.
     * @param {RecurringRuleUpdateArgs} args - Arguments to update one RecurringRule.
     * @example
     * // Update one RecurringRule
     * const recurringRule = await prisma.recurringRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecurringRuleUpdateArgs>(args: SelectSubset<T, RecurringRuleUpdateArgs<ExtArgs>>): Prisma__RecurringRuleClient<$Result.GetResult<Prisma.$RecurringRulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecurringRules.
     * @param {RecurringRuleDeleteManyArgs} args - Arguments to filter RecurringRules to delete.
     * @example
     * // Delete a few RecurringRules
     * const { count } = await prisma.recurringRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecurringRuleDeleteManyArgs>(args?: SelectSubset<T, RecurringRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecurringRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecurringRules
     * const recurringRule = await prisma.recurringRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecurringRuleUpdateManyArgs>(args: SelectSubset<T, RecurringRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecurringRules and returns the data updated in the database.
     * @param {RecurringRuleUpdateManyAndReturnArgs} args - Arguments to update many RecurringRules.
     * @example
     * // Update many RecurringRules
     * const recurringRule = await prisma.recurringRule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecurringRules and only return the `id`
     * const recurringRuleWithIdOnly = await prisma.recurringRule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecurringRuleUpdateManyAndReturnArgs>(args: SelectSubset<T, RecurringRuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringRulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecurringRule.
     * @param {RecurringRuleUpsertArgs} args - Arguments to update or create a RecurringRule.
     * @example
     * // Update or create a RecurringRule
     * const recurringRule = await prisma.recurringRule.upsert({
     *   create: {
     *     // ... data to create a RecurringRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecurringRule we want to update
     *   }
     * })
     */
    upsert<T extends RecurringRuleUpsertArgs>(args: SelectSubset<T, RecurringRuleUpsertArgs<ExtArgs>>): Prisma__RecurringRuleClient<$Result.GetResult<Prisma.$RecurringRulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecurringRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringRuleCountArgs} args - Arguments to filter RecurringRules to count.
     * @example
     * // Count the number of RecurringRules
     * const count = await prisma.recurringRule.count({
     *   where: {
     *     // ... the filter for the RecurringRules we want to count
     *   }
     * })
    **/
    count<T extends RecurringRuleCountArgs>(
      args?: Subset<T, RecurringRuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecurringRuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecurringRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecurringRuleAggregateArgs>(args: Subset<T, RecurringRuleAggregateArgs>): Prisma.PrismaPromise<GetRecurringRuleAggregateType<T>>

    /**
     * Group by RecurringRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringRuleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecurringRuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecurringRuleGroupByArgs['orderBy'] }
        : { orderBy?: RecurringRuleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecurringRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecurringRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecurringRule model
   */
  readonly fields: RecurringRuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecurringRule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecurringRuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    commitments<T extends RecurringRule$commitmentsArgs<ExtArgs> = {}>(args?: Subset<T, RecurringRule$commitmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommitmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RecurringRule model
   */
  interface RecurringRuleFieldRefs {
    readonly id: FieldRef<"RecurringRule", 'String'>
    readonly matchKey: FieldRef<"RecurringRule", 'String'>
    readonly description: FieldRef<"RecurringRule", 'String'>
    readonly accountId: FieldRef<"RecurringRule", 'String'>
    readonly amount: FieldRef<"RecurringRule", 'Int'>
    readonly category: FieldRef<"RecurringRule", 'String'>
    readonly dueDay: FieldRef<"RecurringRule", 'Int'>
    readonly intervalMonths: FieldRef<"RecurringRule", 'Int'>
    readonly startMonth: FieldRef<"RecurringRule", 'String'>
    readonly active: FieldRef<"RecurringRule", 'Boolean'>
    readonly createdAt: FieldRef<"RecurringRule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RecurringRule findUnique
   */
  export type RecurringRuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringRule
     */
    select?: RecurringRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringRule
     */
    omit?: RecurringRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringRuleInclude<ExtArgs> | null
    /**
     * Filter, which RecurringRule to fetch.
     */
    where: RecurringRuleWhereUniqueInput
  }

  /**
   * RecurringRule findUniqueOrThrow
   */
  export type RecurringRuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringRule
     */
    select?: RecurringRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringRule
     */
    omit?: RecurringRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringRuleInclude<ExtArgs> | null
    /**
     * Filter, which RecurringRule to fetch.
     */
    where: RecurringRuleWhereUniqueInput
  }

  /**
   * RecurringRule findFirst
   */
  export type RecurringRuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringRule
     */
    select?: RecurringRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringRule
     */
    omit?: RecurringRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringRuleInclude<ExtArgs> | null
    /**
     * Filter, which RecurringRule to fetch.
     */
    where?: RecurringRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringRules to fetch.
     */
    orderBy?: RecurringRuleOrderByWithRelationInput | RecurringRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecurringRules.
     */
    cursor?: RecurringRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecurringRules.
     */
    distinct?: RecurringRuleScalarFieldEnum | RecurringRuleScalarFieldEnum[]
  }

  /**
   * RecurringRule findFirstOrThrow
   */
  export type RecurringRuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringRule
     */
    select?: RecurringRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringRule
     */
    omit?: RecurringRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringRuleInclude<ExtArgs> | null
    /**
     * Filter, which RecurringRule to fetch.
     */
    where?: RecurringRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringRules to fetch.
     */
    orderBy?: RecurringRuleOrderByWithRelationInput | RecurringRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecurringRules.
     */
    cursor?: RecurringRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecurringRules.
     */
    distinct?: RecurringRuleScalarFieldEnum | RecurringRuleScalarFieldEnum[]
  }

  /**
   * RecurringRule findMany
   */
  export type RecurringRuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringRule
     */
    select?: RecurringRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringRule
     */
    omit?: RecurringRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringRuleInclude<ExtArgs> | null
    /**
     * Filter, which RecurringRules to fetch.
     */
    where?: RecurringRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringRules to fetch.
     */
    orderBy?: RecurringRuleOrderByWithRelationInput | RecurringRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecurringRules.
     */
    cursor?: RecurringRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecurringRules.
     */
    distinct?: RecurringRuleScalarFieldEnum | RecurringRuleScalarFieldEnum[]
  }

  /**
   * RecurringRule create
   */
  export type RecurringRuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringRule
     */
    select?: RecurringRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringRule
     */
    omit?: RecurringRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringRuleInclude<ExtArgs> | null
    /**
     * The data needed to create a RecurringRule.
     */
    data: XOR<RecurringRuleCreateInput, RecurringRuleUncheckedCreateInput>
  }

  /**
   * RecurringRule createMany
   */
  export type RecurringRuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecurringRules.
     */
    data: RecurringRuleCreateManyInput | RecurringRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecurringRule createManyAndReturn
   */
  export type RecurringRuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringRule
     */
    select?: RecurringRuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringRule
     */
    omit?: RecurringRuleOmit<ExtArgs> | null
    /**
     * The data used to create many RecurringRules.
     */
    data: RecurringRuleCreateManyInput | RecurringRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecurringRule update
   */
  export type RecurringRuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringRule
     */
    select?: RecurringRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringRule
     */
    omit?: RecurringRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringRuleInclude<ExtArgs> | null
    /**
     * The data needed to update a RecurringRule.
     */
    data: XOR<RecurringRuleUpdateInput, RecurringRuleUncheckedUpdateInput>
    /**
     * Choose, which RecurringRule to update.
     */
    where: RecurringRuleWhereUniqueInput
  }

  /**
   * RecurringRule updateMany
   */
  export type RecurringRuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecurringRules.
     */
    data: XOR<RecurringRuleUpdateManyMutationInput, RecurringRuleUncheckedUpdateManyInput>
    /**
     * Filter which RecurringRules to update
     */
    where?: RecurringRuleWhereInput
    /**
     * Limit how many RecurringRules to update.
     */
    limit?: number
  }

  /**
   * RecurringRule updateManyAndReturn
   */
  export type RecurringRuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringRule
     */
    select?: RecurringRuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringRule
     */
    omit?: RecurringRuleOmit<ExtArgs> | null
    /**
     * The data used to update RecurringRules.
     */
    data: XOR<RecurringRuleUpdateManyMutationInput, RecurringRuleUncheckedUpdateManyInput>
    /**
     * Filter which RecurringRules to update
     */
    where?: RecurringRuleWhereInput
    /**
     * Limit how many RecurringRules to update.
     */
    limit?: number
  }

  /**
   * RecurringRule upsert
   */
  export type RecurringRuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringRule
     */
    select?: RecurringRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringRule
     */
    omit?: RecurringRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringRuleInclude<ExtArgs> | null
    /**
     * The filter to search for the RecurringRule to update in case it exists.
     */
    where: RecurringRuleWhereUniqueInput
    /**
     * In case the RecurringRule found by the `where` argument doesn't exist, create a new RecurringRule with this data.
     */
    create: XOR<RecurringRuleCreateInput, RecurringRuleUncheckedCreateInput>
    /**
     * In case the RecurringRule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecurringRuleUpdateInput, RecurringRuleUncheckedUpdateInput>
  }

  /**
   * RecurringRule delete
   */
  export type RecurringRuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringRule
     */
    select?: RecurringRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringRule
     */
    omit?: RecurringRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringRuleInclude<ExtArgs> | null
    /**
     * Filter which RecurringRule to delete.
     */
    where: RecurringRuleWhereUniqueInput
  }

  /**
   * RecurringRule deleteMany
   */
  export type RecurringRuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecurringRules to delete
     */
    where?: RecurringRuleWhereInput
    /**
     * Limit how many RecurringRules to delete.
     */
    limit?: number
  }

  /**
   * RecurringRule.commitments
   */
  export type RecurringRule$commitmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commitment
     */
    select?: CommitmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commitment
     */
    omit?: CommitmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitmentInclude<ExtArgs> | null
    where?: CommitmentWhereInput
    orderBy?: CommitmentOrderByWithRelationInput | CommitmentOrderByWithRelationInput[]
    cursor?: CommitmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommitmentScalarFieldEnum | CommitmentScalarFieldEnum[]
  }

  /**
   * RecurringRule without action
   */
  export type RecurringRuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringRule
     */
    select?: RecurringRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringRule
     */
    omit?: RecurringRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringRuleInclude<ExtArgs> | null
  }


  /**
   * Model Commitment
   */

  export type AggregateCommitment = {
    _count: CommitmentCountAggregateOutputType | null
    _avg: CommitmentAvgAggregateOutputType | null
    _sum: CommitmentSumAggregateOutputType | null
    _min: CommitmentMinAggregateOutputType | null
    _max: CommitmentMaxAggregateOutputType | null
  }

  export type CommitmentAvgAggregateOutputType = {
    amount: number | null
  }

  export type CommitmentSumAggregateOutputType = {
    amount: number | null
  }

  export type CommitmentMinAggregateOutputType = {
    id: string | null
    key: string | null
    description: string | null
    amount: number | null
    dueDate: Date | null
    status: string | null
    category: string | null
    source: string | null
    coveredByCard: boolean | null
    transactionId: string | null
    ruleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommitmentMaxAggregateOutputType = {
    id: string | null
    key: string | null
    description: string | null
    amount: number | null
    dueDate: Date | null
    status: string | null
    category: string | null
    source: string | null
    coveredByCard: boolean | null
    transactionId: string | null
    ruleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommitmentCountAggregateOutputType = {
    id: number
    key: number
    description: number
    amount: number
    dueDate: number
    status: number
    category: number
    source: number
    coveredByCard: number
    transactionId: number
    ruleId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommitmentAvgAggregateInputType = {
    amount?: true
  }

  export type CommitmentSumAggregateInputType = {
    amount?: true
  }

  export type CommitmentMinAggregateInputType = {
    id?: true
    key?: true
    description?: true
    amount?: true
    dueDate?: true
    status?: true
    category?: true
    source?: true
    coveredByCard?: true
    transactionId?: true
    ruleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommitmentMaxAggregateInputType = {
    id?: true
    key?: true
    description?: true
    amount?: true
    dueDate?: true
    status?: true
    category?: true
    source?: true
    coveredByCard?: true
    transactionId?: true
    ruleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommitmentCountAggregateInputType = {
    id?: true
    key?: true
    description?: true
    amount?: true
    dueDate?: true
    status?: true
    category?: true
    source?: true
    coveredByCard?: true
    transactionId?: true
    ruleId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommitmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commitment to aggregate.
     */
    where?: CommitmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commitments to fetch.
     */
    orderBy?: CommitmentOrderByWithRelationInput | CommitmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommitmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commitments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commitments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Commitments
    **/
    _count?: true | CommitmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommitmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommitmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommitmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommitmentMaxAggregateInputType
  }

  export type GetCommitmentAggregateType<T extends CommitmentAggregateArgs> = {
        [P in keyof T & keyof AggregateCommitment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommitment[P]>
      : GetScalarType<T[P], AggregateCommitment[P]>
  }




  export type CommitmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommitmentWhereInput
    orderBy?: CommitmentOrderByWithAggregationInput | CommitmentOrderByWithAggregationInput[]
    by: CommitmentScalarFieldEnum[] | CommitmentScalarFieldEnum
    having?: CommitmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommitmentCountAggregateInputType | true
    _avg?: CommitmentAvgAggregateInputType
    _sum?: CommitmentSumAggregateInputType
    _min?: CommitmentMinAggregateInputType
    _max?: CommitmentMaxAggregateInputType
  }

  export type CommitmentGroupByOutputType = {
    id: string
    key: string
    description: string
    amount: number
    dueDate: Date
    status: string
    category: string
    source: string
    coveredByCard: boolean
    transactionId: string | null
    ruleId: string | null
    createdAt: Date
    updatedAt: Date
    _count: CommitmentCountAggregateOutputType | null
    _avg: CommitmentAvgAggregateOutputType | null
    _sum: CommitmentSumAggregateOutputType | null
    _min: CommitmentMinAggregateOutputType | null
    _max: CommitmentMaxAggregateOutputType | null
  }

  type GetCommitmentGroupByPayload<T extends CommitmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommitmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommitmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommitmentGroupByOutputType[P]>
            : GetScalarType<T[P], CommitmentGroupByOutputType[P]>
        }
      >
    >


  export type CommitmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    description?: boolean
    amount?: boolean
    dueDate?: boolean
    status?: boolean
    category?: boolean
    source?: boolean
    coveredByCard?: boolean
    transactionId?: boolean
    ruleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transaction?: boolean | Commitment$transactionArgs<ExtArgs>
    rule?: boolean | Commitment$ruleArgs<ExtArgs>
  }, ExtArgs["result"]["commitment"]>

  export type CommitmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    description?: boolean
    amount?: boolean
    dueDate?: boolean
    status?: boolean
    category?: boolean
    source?: boolean
    coveredByCard?: boolean
    transactionId?: boolean
    ruleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transaction?: boolean | Commitment$transactionArgs<ExtArgs>
    rule?: boolean | Commitment$ruleArgs<ExtArgs>
  }, ExtArgs["result"]["commitment"]>

  export type CommitmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    description?: boolean
    amount?: boolean
    dueDate?: boolean
    status?: boolean
    category?: boolean
    source?: boolean
    coveredByCard?: boolean
    transactionId?: boolean
    ruleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transaction?: boolean | Commitment$transactionArgs<ExtArgs>
    rule?: boolean | Commitment$ruleArgs<ExtArgs>
  }, ExtArgs["result"]["commitment"]>

  export type CommitmentSelectScalar = {
    id?: boolean
    key?: boolean
    description?: boolean
    amount?: boolean
    dueDate?: boolean
    status?: boolean
    category?: boolean
    source?: boolean
    coveredByCard?: boolean
    transactionId?: boolean
    ruleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommitmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "description" | "amount" | "dueDate" | "status" | "category" | "source" | "coveredByCard" | "transactionId" | "ruleId" | "createdAt" | "updatedAt", ExtArgs["result"]["commitment"]>
  export type CommitmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | Commitment$transactionArgs<ExtArgs>
    rule?: boolean | Commitment$ruleArgs<ExtArgs>
  }
  export type CommitmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | Commitment$transactionArgs<ExtArgs>
    rule?: boolean | Commitment$ruleArgs<ExtArgs>
  }
  export type CommitmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | Commitment$transactionArgs<ExtArgs>
    rule?: boolean | Commitment$ruleArgs<ExtArgs>
  }

  export type $CommitmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Commitment"
    objects: {
      transaction: Prisma.$TransactionPayload<ExtArgs> | null
      rule: Prisma.$RecurringRulePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      description: string
      amount: number
      dueDate: Date
      status: string
      category: string
      source: string
      coveredByCard: boolean
      transactionId: string | null
      ruleId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["commitment"]>
    composites: {}
  }

  type CommitmentGetPayload<S extends boolean | null | undefined | CommitmentDefaultArgs> = $Result.GetResult<Prisma.$CommitmentPayload, S>

  type CommitmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommitmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommitmentCountAggregateInputType | true
    }

  export interface CommitmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Commitment'], meta: { name: 'Commitment' } }
    /**
     * Find zero or one Commitment that matches the filter.
     * @param {CommitmentFindUniqueArgs} args - Arguments to find a Commitment
     * @example
     * // Get one Commitment
     * const commitment = await prisma.commitment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommitmentFindUniqueArgs>(args: SelectSubset<T, CommitmentFindUniqueArgs<ExtArgs>>): Prisma__CommitmentClient<$Result.GetResult<Prisma.$CommitmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Commitment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommitmentFindUniqueOrThrowArgs} args - Arguments to find a Commitment
     * @example
     * // Get one Commitment
     * const commitment = await prisma.commitment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommitmentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommitmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommitmentClient<$Result.GetResult<Prisma.$CommitmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commitment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitmentFindFirstArgs} args - Arguments to find a Commitment
     * @example
     * // Get one Commitment
     * const commitment = await prisma.commitment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommitmentFindFirstArgs>(args?: SelectSubset<T, CommitmentFindFirstArgs<ExtArgs>>): Prisma__CommitmentClient<$Result.GetResult<Prisma.$CommitmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commitment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitmentFindFirstOrThrowArgs} args - Arguments to find a Commitment
     * @example
     * // Get one Commitment
     * const commitment = await prisma.commitment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommitmentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommitmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommitmentClient<$Result.GetResult<Prisma.$CommitmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Commitments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Commitments
     * const commitments = await prisma.commitment.findMany()
     * 
     * // Get first 10 Commitments
     * const commitments = await prisma.commitment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commitmentWithIdOnly = await prisma.commitment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommitmentFindManyArgs>(args?: SelectSubset<T, CommitmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommitmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Commitment.
     * @param {CommitmentCreateArgs} args - Arguments to create a Commitment.
     * @example
     * // Create one Commitment
     * const Commitment = await prisma.commitment.create({
     *   data: {
     *     // ... data to create a Commitment
     *   }
     * })
     * 
     */
    create<T extends CommitmentCreateArgs>(args: SelectSubset<T, CommitmentCreateArgs<ExtArgs>>): Prisma__CommitmentClient<$Result.GetResult<Prisma.$CommitmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Commitments.
     * @param {CommitmentCreateManyArgs} args - Arguments to create many Commitments.
     * @example
     * // Create many Commitments
     * const commitment = await prisma.commitment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommitmentCreateManyArgs>(args?: SelectSubset<T, CommitmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Commitments and returns the data saved in the database.
     * @param {CommitmentCreateManyAndReturnArgs} args - Arguments to create many Commitments.
     * @example
     * // Create many Commitments
     * const commitment = await prisma.commitment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Commitments and only return the `id`
     * const commitmentWithIdOnly = await prisma.commitment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommitmentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommitmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommitmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Commitment.
     * @param {CommitmentDeleteArgs} args - Arguments to delete one Commitment.
     * @example
     * // Delete one Commitment
     * const Commitment = await prisma.commitment.delete({
     *   where: {
     *     // ... filter to delete one Commitment
     *   }
     * })
     * 
     */
    delete<T extends CommitmentDeleteArgs>(args: SelectSubset<T, CommitmentDeleteArgs<ExtArgs>>): Prisma__CommitmentClient<$Result.GetResult<Prisma.$CommitmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Commitment.
     * @param {CommitmentUpdateArgs} args - Arguments to update one Commitment.
     * @example
     * // Update one Commitment
     * const commitment = await prisma.commitment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommitmentUpdateArgs>(args: SelectSubset<T, CommitmentUpdateArgs<ExtArgs>>): Prisma__CommitmentClient<$Result.GetResult<Prisma.$CommitmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Commitments.
     * @param {CommitmentDeleteManyArgs} args - Arguments to filter Commitments to delete.
     * @example
     * // Delete a few Commitments
     * const { count } = await prisma.commitment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommitmentDeleteManyArgs>(args?: SelectSubset<T, CommitmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commitments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Commitments
     * const commitment = await prisma.commitment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommitmentUpdateManyArgs>(args: SelectSubset<T, CommitmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commitments and returns the data updated in the database.
     * @param {CommitmentUpdateManyAndReturnArgs} args - Arguments to update many Commitments.
     * @example
     * // Update many Commitments
     * const commitment = await prisma.commitment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Commitments and only return the `id`
     * const commitmentWithIdOnly = await prisma.commitment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommitmentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommitmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommitmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Commitment.
     * @param {CommitmentUpsertArgs} args - Arguments to update or create a Commitment.
     * @example
     * // Update or create a Commitment
     * const commitment = await prisma.commitment.upsert({
     *   create: {
     *     // ... data to create a Commitment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Commitment we want to update
     *   }
     * })
     */
    upsert<T extends CommitmentUpsertArgs>(args: SelectSubset<T, CommitmentUpsertArgs<ExtArgs>>): Prisma__CommitmentClient<$Result.GetResult<Prisma.$CommitmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Commitments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitmentCountArgs} args - Arguments to filter Commitments to count.
     * @example
     * // Count the number of Commitments
     * const count = await prisma.commitment.count({
     *   where: {
     *     // ... the filter for the Commitments we want to count
     *   }
     * })
    **/
    count<T extends CommitmentCountArgs>(
      args?: Subset<T, CommitmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommitmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Commitment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommitmentAggregateArgs>(args: Subset<T, CommitmentAggregateArgs>): Prisma.PrismaPromise<GetCommitmentAggregateType<T>>

    /**
     * Group by Commitment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommitmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommitmentGroupByArgs['orderBy'] }
        : { orderBy?: CommitmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommitmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommitmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Commitment model
   */
  readonly fields: CommitmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Commitment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommitmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaction<T extends Commitment$transactionArgs<ExtArgs> = {}>(args?: Subset<T, Commitment$transactionArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    rule<T extends Commitment$ruleArgs<ExtArgs> = {}>(args?: Subset<T, Commitment$ruleArgs<ExtArgs>>): Prisma__RecurringRuleClient<$Result.GetResult<Prisma.$RecurringRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Commitment model
   */
  interface CommitmentFieldRefs {
    readonly id: FieldRef<"Commitment", 'String'>
    readonly key: FieldRef<"Commitment", 'String'>
    readonly description: FieldRef<"Commitment", 'String'>
    readonly amount: FieldRef<"Commitment", 'Int'>
    readonly dueDate: FieldRef<"Commitment", 'DateTime'>
    readonly status: FieldRef<"Commitment", 'String'>
    readonly category: FieldRef<"Commitment", 'String'>
    readonly source: FieldRef<"Commitment", 'String'>
    readonly coveredByCard: FieldRef<"Commitment", 'Boolean'>
    readonly transactionId: FieldRef<"Commitment", 'String'>
    readonly ruleId: FieldRef<"Commitment", 'String'>
    readonly createdAt: FieldRef<"Commitment", 'DateTime'>
    readonly updatedAt: FieldRef<"Commitment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Commitment findUnique
   */
  export type CommitmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commitment
     */
    select?: CommitmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commitment
     */
    omit?: CommitmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitmentInclude<ExtArgs> | null
    /**
     * Filter, which Commitment to fetch.
     */
    where: CommitmentWhereUniqueInput
  }

  /**
   * Commitment findUniqueOrThrow
   */
  export type CommitmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commitment
     */
    select?: CommitmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commitment
     */
    omit?: CommitmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitmentInclude<ExtArgs> | null
    /**
     * Filter, which Commitment to fetch.
     */
    where: CommitmentWhereUniqueInput
  }

  /**
   * Commitment findFirst
   */
  export type CommitmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commitment
     */
    select?: CommitmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commitment
     */
    omit?: CommitmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitmentInclude<ExtArgs> | null
    /**
     * Filter, which Commitment to fetch.
     */
    where?: CommitmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commitments to fetch.
     */
    orderBy?: CommitmentOrderByWithRelationInput | CommitmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commitments.
     */
    cursor?: CommitmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commitments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commitments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commitments.
     */
    distinct?: CommitmentScalarFieldEnum | CommitmentScalarFieldEnum[]
  }

  /**
   * Commitment findFirstOrThrow
   */
  export type CommitmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commitment
     */
    select?: CommitmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commitment
     */
    omit?: CommitmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitmentInclude<ExtArgs> | null
    /**
     * Filter, which Commitment to fetch.
     */
    where?: CommitmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commitments to fetch.
     */
    orderBy?: CommitmentOrderByWithRelationInput | CommitmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commitments.
     */
    cursor?: CommitmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commitments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commitments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commitments.
     */
    distinct?: CommitmentScalarFieldEnum | CommitmentScalarFieldEnum[]
  }

  /**
   * Commitment findMany
   */
  export type CommitmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commitment
     */
    select?: CommitmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commitment
     */
    omit?: CommitmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitmentInclude<ExtArgs> | null
    /**
     * Filter, which Commitments to fetch.
     */
    where?: CommitmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commitments to fetch.
     */
    orderBy?: CommitmentOrderByWithRelationInput | CommitmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Commitments.
     */
    cursor?: CommitmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commitments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commitments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commitments.
     */
    distinct?: CommitmentScalarFieldEnum | CommitmentScalarFieldEnum[]
  }

  /**
   * Commitment create
   */
  export type CommitmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commitment
     */
    select?: CommitmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commitment
     */
    omit?: CommitmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Commitment.
     */
    data: XOR<CommitmentCreateInput, CommitmentUncheckedCreateInput>
  }

  /**
   * Commitment createMany
   */
  export type CommitmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Commitments.
     */
    data: CommitmentCreateManyInput | CommitmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Commitment createManyAndReturn
   */
  export type CommitmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commitment
     */
    select?: CommitmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Commitment
     */
    omit?: CommitmentOmit<ExtArgs> | null
    /**
     * The data used to create many Commitments.
     */
    data: CommitmentCreateManyInput | CommitmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Commitment update
   */
  export type CommitmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commitment
     */
    select?: CommitmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commitment
     */
    omit?: CommitmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Commitment.
     */
    data: XOR<CommitmentUpdateInput, CommitmentUncheckedUpdateInput>
    /**
     * Choose, which Commitment to update.
     */
    where: CommitmentWhereUniqueInput
  }

  /**
   * Commitment updateMany
   */
  export type CommitmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Commitments.
     */
    data: XOR<CommitmentUpdateManyMutationInput, CommitmentUncheckedUpdateManyInput>
    /**
     * Filter which Commitments to update
     */
    where?: CommitmentWhereInput
    /**
     * Limit how many Commitments to update.
     */
    limit?: number
  }

  /**
   * Commitment updateManyAndReturn
   */
  export type CommitmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commitment
     */
    select?: CommitmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Commitment
     */
    omit?: CommitmentOmit<ExtArgs> | null
    /**
     * The data used to update Commitments.
     */
    data: XOR<CommitmentUpdateManyMutationInput, CommitmentUncheckedUpdateManyInput>
    /**
     * Filter which Commitments to update
     */
    where?: CommitmentWhereInput
    /**
     * Limit how many Commitments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Commitment upsert
   */
  export type CommitmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commitment
     */
    select?: CommitmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commitment
     */
    omit?: CommitmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Commitment to update in case it exists.
     */
    where: CommitmentWhereUniqueInput
    /**
     * In case the Commitment found by the `where` argument doesn't exist, create a new Commitment with this data.
     */
    create: XOR<CommitmentCreateInput, CommitmentUncheckedCreateInput>
    /**
     * In case the Commitment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommitmentUpdateInput, CommitmentUncheckedUpdateInput>
  }

  /**
   * Commitment delete
   */
  export type CommitmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commitment
     */
    select?: CommitmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commitment
     */
    omit?: CommitmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitmentInclude<ExtArgs> | null
    /**
     * Filter which Commitment to delete.
     */
    where: CommitmentWhereUniqueInput
  }

  /**
   * Commitment deleteMany
   */
  export type CommitmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commitments to delete
     */
    where?: CommitmentWhereInput
    /**
     * Limit how many Commitments to delete.
     */
    limit?: number
  }

  /**
   * Commitment.transaction
   */
  export type Commitment$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
  }

  /**
   * Commitment.rule
   */
  export type Commitment$ruleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringRule
     */
    select?: RecurringRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringRule
     */
    omit?: RecurringRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringRuleInclude<ExtArgs> | null
    where?: RecurringRuleWhereInput
  }

  /**
   * Commitment without action
   */
  export type CommitmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commitment
     */
    select?: CommitmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commitment
     */
    omit?: CommitmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitmentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    balance: 'balance',
    dueDate: 'dueDate',
    pluggyItemId: 'pluggyItemId',
    pluggyAccountId: 'pluggyAccountId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    description: 'description',
    amount: 'amount',
    type: 'type',
    date: 'date',
    accountId: 'accountId',
    status: 'status',
    category: 'category',
    categorySource: 'categorySource',
    pluggyTransactionId: 'pluggyTransactionId',
    isBillPayment: 'isBillPayment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const RecurringRuleScalarFieldEnum: {
    id: 'id',
    matchKey: 'matchKey',
    description: 'description',
    accountId: 'accountId',
    amount: 'amount',
    category: 'category',
    dueDay: 'dueDay',
    intervalMonths: 'intervalMonths',
    startMonth: 'startMonth',
    active: 'active',
    createdAt: 'createdAt'
  };

  export type RecurringRuleScalarFieldEnum = (typeof RecurringRuleScalarFieldEnum)[keyof typeof RecurringRuleScalarFieldEnum]


  export const CommitmentScalarFieldEnum: {
    id: 'id',
    key: 'key',
    description: 'description',
    amount: 'amount',
    dueDate: 'dueDate',
    status: 'status',
    category: 'category',
    source: 'source',
    coveredByCard: 'coveredByCard',
    transactionId: 'transactionId',
    ruleId: 'ruleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommitmentScalarFieldEnum = (typeof CommitmentScalarFieldEnum)[keyof typeof CommitmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    name?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    balance?: IntFilter<"Account"> | number
    dueDate?: DateTimeNullableFilter<"Account"> | Date | string | null
    pluggyItemId?: StringNullableFilter<"Account"> | string | null
    pluggyAccountId?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    transactions?: TransactionListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    balance?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    pluggyItemId?: SortOrderInput | SortOrder
    pluggyAccountId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    name?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    balance?: IntFilter<"Account"> | number
    dueDate?: DateTimeNullableFilter<"Account"> | Date | string | null
    pluggyItemId?: StringNullableFilter<"Account"> | string | null
    pluggyAccountId?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    transactions?: TransactionListRelationFilter
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    balance?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    pluggyItemId?: SortOrderInput | SortOrder
    pluggyAccountId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    name?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    balance?: IntWithAggregatesFilter<"Account"> | number
    dueDate?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    pluggyItemId?: StringNullableWithAggregatesFilter<"Account"> | string | null
    pluggyAccountId?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    description?: StringFilter<"Transaction"> | string
    amount?: IntFilter<"Transaction"> | number
    type?: StringFilter<"Transaction"> | string
    date?: DateTimeFilter<"Transaction"> | Date | string
    accountId?: StringNullableFilter<"Transaction"> | string | null
    status?: StringFilter<"Transaction"> | string
    category?: StringNullableFilter<"Transaction"> | string | null
    categorySource?: StringFilter<"Transaction"> | string
    pluggyTransactionId?: StringNullableFilter<"Transaction"> | string | null
    isBillPayment?: BoolFilter<"Transaction"> | boolean
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    account?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
    commitment?: XOR<CommitmentNullableScalarRelationFilter, CommitmentWhereInput> | null
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    date?: SortOrder
    accountId?: SortOrderInput | SortOrder
    status?: SortOrder
    category?: SortOrderInput | SortOrder
    categorySource?: SortOrder
    pluggyTransactionId?: SortOrderInput | SortOrder
    isBillPayment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    account?: AccountOrderByWithRelationInput
    commitment?: CommitmentOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    pluggyTransactionId?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    description?: StringFilter<"Transaction"> | string
    amount?: IntFilter<"Transaction"> | number
    type?: StringFilter<"Transaction"> | string
    date?: DateTimeFilter<"Transaction"> | Date | string
    accountId?: StringNullableFilter<"Transaction"> | string | null
    status?: StringFilter<"Transaction"> | string
    category?: StringNullableFilter<"Transaction"> | string | null
    categorySource?: StringFilter<"Transaction"> | string
    isBillPayment?: BoolFilter<"Transaction"> | boolean
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    account?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
    commitment?: XOR<CommitmentNullableScalarRelationFilter, CommitmentWhereInput> | null
  }, "id" | "pluggyTransactionId">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    date?: SortOrder
    accountId?: SortOrderInput | SortOrder
    status?: SortOrder
    category?: SortOrderInput | SortOrder
    categorySource?: SortOrder
    pluggyTransactionId?: SortOrderInput | SortOrder
    isBillPayment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    description?: StringWithAggregatesFilter<"Transaction"> | string
    amount?: IntWithAggregatesFilter<"Transaction"> | number
    type?: StringWithAggregatesFilter<"Transaction"> | string
    date?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    accountId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    status?: StringWithAggregatesFilter<"Transaction"> | string
    category?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    categorySource?: StringWithAggregatesFilter<"Transaction"> | string
    pluggyTransactionId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    isBillPayment?: BoolWithAggregatesFilter<"Transaction"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type RecurringRuleWhereInput = {
    AND?: RecurringRuleWhereInput | RecurringRuleWhereInput[]
    OR?: RecurringRuleWhereInput[]
    NOT?: RecurringRuleWhereInput | RecurringRuleWhereInput[]
    id?: StringFilter<"RecurringRule"> | string
    matchKey?: StringFilter<"RecurringRule"> | string
    description?: StringFilter<"RecurringRule"> | string
    accountId?: StringNullableFilter<"RecurringRule"> | string | null
    amount?: IntFilter<"RecurringRule"> | number
    category?: StringFilter<"RecurringRule"> | string
    dueDay?: IntFilter<"RecurringRule"> | number
    intervalMonths?: IntFilter<"RecurringRule"> | number
    startMonth?: StringFilter<"RecurringRule"> | string
    active?: BoolFilter<"RecurringRule"> | boolean
    createdAt?: DateTimeFilter<"RecurringRule"> | Date | string
    commitments?: CommitmentListRelationFilter
  }

  export type RecurringRuleOrderByWithRelationInput = {
    id?: SortOrder
    matchKey?: SortOrder
    description?: SortOrder
    accountId?: SortOrderInput | SortOrder
    amount?: SortOrder
    category?: SortOrder
    dueDay?: SortOrder
    intervalMonths?: SortOrder
    startMonth?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    commitments?: CommitmentOrderByRelationAggregateInput
  }

  export type RecurringRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    matchKey?: string
    AND?: RecurringRuleWhereInput | RecurringRuleWhereInput[]
    OR?: RecurringRuleWhereInput[]
    NOT?: RecurringRuleWhereInput | RecurringRuleWhereInput[]
    description?: StringFilter<"RecurringRule"> | string
    accountId?: StringNullableFilter<"RecurringRule"> | string | null
    amount?: IntFilter<"RecurringRule"> | number
    category?: StringFilter<"RecurringRule"> | string
    dueDay?: IntFilter<"RecurringRule"> | number
    intervalMonths?: IntFilter<"RecurringRule"> | number
    startMonth?: StringFilter<"RecurringRule"> | string
    active?: BoolFilter<"RecurringRule"> | boolean
    createdAt?: DateTimeFilter<"RecurringRule"> | Date | string
    commitments?: CommitmentListRelationFilter
  }, "id" | "matchKey">

  export type RecurringRuleOrderByWithAggregationInput = {
    id?: SortOrder
    matchKey?: SortOrder
    description?: SortOrder
    accountId?: SortOrderInput | SortOrder
    amount?: SortOrder
    category?: SortOrder
    dueDay?: SortOrder
    intervalMonths?: SortOrder
    startMonth?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    _count?: RecurringRuleCountOrderByAggregateInput
    _avg?: RecurringRuleAvgOrderByAggregateInput
    _max?: RecurringRuleMaxOrderByAggregateInput
    _min?: RecurringRuleMinOrderByAggregateInput
    _sum?: RecurringRuleSumOrderByAggregateInput
  }

  export type RecurringRuleScalarWhereWithAggregatesInput = {
    AND?: RecurringRuleScalarWhereWithAggregatesInput | RecurringRuleScalarWhereWithAggregatesInput[]
    OR?: RecurringRuleScalarWhereWithAggregatesInput[]
    NOT?: RecurringRuleScalarWhereWithAggregatesInput | RecurringRuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RecurringRule"> | string
    matchKey?: StringWithAggregatesFilter<"RecurringRule"> | string
    description?: StringWithAggregatesFilter<"RecurringRule"> | string
    accountId?: StringNullableWithAggregatesFilter<"RecurringRule"> | string | null
    amount?: IntWithAggregatesFilter<"RecurringRule"> | number
    category?: StringWithAggregatesFilter<"RecurringRule"> | string
    dueDay?: IntWithAggregatesFilter<"RecurringRule"> | number
    intervalMonths?: IntWithAggregatesFilter<"RecurringRule"> | number
    startMonth?: StringWithAggregatesFilter<"RecurringRule"> | string
    active?: BoolWithAggregatesFilter<"RecurringRule"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"RecurringRule"> | Date | string
  }

  export type CommitmentWhereInput = {
    AND?: CommitmentWhereInput | CommitmentWhereInput[]
    OR?: CommitmentWhereInput[]
    NOT?: CommitmentWhereInput | CommitmentWhereInput[]
    id?: StringFilter<"Commitment"> | string
    key?: StringFilter<"Commitment"> | string
    description?: StringFilter<"Commitment"> | string
    amount?: IntFilter<"Commitment"> | number
    dueDate?: DateTimeFilter<"Commitment"> | Date | string
    status?: StringFilter<"Commitment"> | string
    category?: StringFilter<"Commitment"> | string
    source?: StringFilter<"Commitment"> | string
    coveredByCard?: BoolFilter<"Commitment"> | boolean
    transactionId?: StringNullableFilter<"Commitment"> | string | null
    ruleId?: StringNullableFilter<"Commitment"> | string | null
    createdAt?: DateTimeFilter<"Commitment"> | Date | string
    updatedAt?: DateTimeFilter<"Commitment"> | Date | string
    transaction?: XOR<TransactionNullableScalarRelationFilter, TransactionWhereInput> | null
    rule?: XOR<RecurringRuleNullableScalarRelationFilter, RecurringRuleWhereInput> | null
  }

  export type CommitmentOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    category?: SortOrder
    source?: SortOrder
    coveredByCard?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    ruleId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transaction?: TransactionOrderByWithRelationInput
    rule?: RecurringRuleOrderByWithRelationInput
  }

  export type CommitmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    transactionId?: string
    AND?: CommitmentWhereInput | CommitmentWhereInput[]
    OR?: CommitmentWhereInput[]
    NOT?: CommitmentWhereInput | CommitmentWhereInput[]
    description?: StringFilter<"Commitment"> | string
    amount?: IntFilter<"Commitment"> | number
    dueDate?: DateTimeFilter<"Commitment"> | Date | string
    status?: StringFilter<"Commitment"> | string
    category?: StringFilter<"Commitment"> | string
    source?: StringFilter<"Commitment"> | string
    coveredByCard?: BoolFilter<"Commitment"> | boolean
    ruleId?: StringNullableFilter<"Commitment"> | string | null
    createdAt?: DateTimeFilter<"Commitment"> | Date | string
    updatedAt?: DateTimeFilter<"Commitment"> | Date | string
    transaction?: XOR<TransactionNullableScalarRelationFilter, TransactionWhereInput> | null
    rule?: XOR<RecurringRuleNullableScalarRelationFilter, RecurringRuleWhereInput> | null
  }, "id" | "key" | "transactionId">

  export type CommitmentOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    category?: SortOrder
    source?: SortOrder
    coveredByCard?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    ruleId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommitmentCountOrderByAggregateInput
    _avg?: CommitmentAvgOrderByAggregateInput
    _max?: CommitmentMaxOrderByAggregateInput
    _min?: CommitmentMinOrderByAggregateInput
    _sum?: CommitmentSumOrderByAggregateInput
  }

  export type CommitmentScalarWhereWithAggregatesInput = {
    AND?: CommitmentScalarWhereWithAggregatesInput | CommitmentScalarWhereWithAggregatesInput[]
    OR?: CommitmentScalarWhereWithAggregatesInput[]
    NOT?: CommitmentScalarWhereWithAggregatesInput | CommitmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Commitment"> | string
    key?: StringWithAggregatesFilter<"Commitment"> | string
    description?: StringWithAggregatesFilter<"Commitment"> | string
    amount?: IntWithAggregatesFilter<"Commitment"> | number
    dueDate?: DateTimeWithAggregatesFilter<"Commitment"> | Date | string
    status?: StringWithAggregatesFilter<"Commitment"> | string
    category?: StringWithAggregatesFilter<"Commitment"> | string
    source?: StringWithAggregatesFilter<"Commitment"> | string
    coveredByCard?: BoolWithAggregatesFilter<"Commitment"> | boolean
    transactionId?: StringNullableWithAggregatesFilter<"Commitment"> | string | null
    ruleId?: StringNullableWithAggregatesFilter<"Commitment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Commitment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Commitment"> | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    name: string
    type: string
    balance?: number
    dueDate?: Date | string | null
    pluggyItemId?: string | null
    pluggyAccountId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    name: string
    type: string
    balance?: number
    dueDate?: Date | string | null
    pluggyItemId?: string | null
    pluggyAccountId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pluggyItemId?: NullableStringFieldUpdateOperationsInput | string | null
    pluggyAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pluggyItemId?: NullableStringFieldUpdateOperationsInput | string | null
    pluggyAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateManyInput = {
    id?: string
    name: string
    type: string
    balance?: number
    dueDate?: Date | string | null
    pluggyItemId?: string | null
    pluggyAccountId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pluggyItemId?: NullableStringFieldUpdateOperationsInput | string | null
    pluggyAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pluggyItemId?: NullableStringFieldUpdateOperationsInput | string | null
    pluggyAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    id?: string
    description: string
    amount: number
    type: string
    date: Date | string
    status?: string
    category?: string | null
    categorySource?: string
    pluggyTransactionId?: string | null
    isBillPayment?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: AccountCreateNestedOneWithoutTransactionsInput
    commitment?: CommitmentCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    description: string
    amount: number
    type: string
    date: Date | string
    accountId?: string | null
    status?: string
    category?: string | null
    categorySource?: string
    pluggyTransactionId?: string | null
    isBillPayment?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    commitment?: CommitmentUncheckedCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    categorySource?: StringFieldUpdateOperationsInput | string
    pluggyTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    isBillPayment?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneWithoutTransactionsNestedInput
    commitment?: CommitmentUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    categorySource?: StringFieldUpdateOperationsInput | string
    pluggyTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    isBillPayment?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commitment?: CommitmentUncheckedUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionCreateManyInput = {
    id?: string
    description: string
    amount: number
    type: string
    date: Date | string
    accountId?: string | null
    status?: string
    category?: string | null
    categorySource?: string
    pluggyTransactionId?: string | null
    isBillPayment?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    categorySource?: StringFieldUpdateOperationsInput | string
    pluggyTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    isBillPayment?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    categorySource?: StringFieldUpdateOperationsInput | string
    pluggyTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    isBillPayment?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurringRuleCreateInput = {
    id?: string
    matchKey: string
    description: string
    accountId?: string | null
    amount: number
    category: string
    dueDay: number
    intervalMonths?: number
    startMonth: string
    active?: boolean
    createdAt?: Date | string
    commitments?: CommitmentCreateNestedManyWithoutRuleInput
  }

  export type RecurringRuleUncheckedCreateInput = {
    id?: string
    matchKey: string
    description: string
    accountId?: string | null
    amount: number
    category: string
    dueDay: number
    intervalMonths?: number
    startMonth: string
    active?: boolean
    createdAt?: Date | string
    commitments?: CommitmentUncheckedCreateNestedManyWithoutRuleInput
  }

  export type RecurringRuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchKey?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    dueDay?: IntFieldUpdateOperationsInput | number
    intervalMonths?: IntFieldUpdateOperationsInput | number
    startMonth?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commitments?: CommitmentUpdateManyWithoutRuleNestedInput
  }

  export type RecurringRuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchKey?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    dueDay?: IntFieldUpdateOperationsInput | number
    intervalMonths?: IntFieldUpdateOperationsInput | number
    startMonth?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commitments?: CommitmentUncheckedUpdateManyWithoutRuleNestedInput
  }

  export type RecurringRuleCreateManyInput = {
    id?: string
    matchKey: string
    description: string
    accountId?: string | null
    amount: number
    category: string
    dueDay: number
    intervalMonths?: number
    startMonth: string
    active?: boolean
    createdAt?: Date | string
  }

  export type RecurringRuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchKey?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    dueDay?: IntFieldUpdateOperationsInput | number
    intervalMonths?: IntFieldUpdateOperationsInput | number
    startMonth?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurringRuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchKey?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    dueDay?: IntFieldUpdateOperationsInput | number
    intervalMonths?: IntFieldUpdateOperationsInput | number
    startMonth?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommitmentCreateInput = {
    id?: string
    key: string
    description: string
    amount: number
    dueDate: Date | string
    status?: string
    category?: string
    source?: string
    coveredByCard?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transaction?: TransactionCreateNestedOneWithoutCommitmentInput
    rule?: RecurringRuleCreateNestedOneWithoutCommitmentsInput
  }

  export type CommitmentUncheckedCreateInput = {
    id?: string
    key: string
    description: string
    amount: number
    dueDate: Date | string
    status?: string
    category?: string
    source?: string
    coveredByCard?: boolean
    transactionId?: string | null
    ruleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommitmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    coveredByCard?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: TransactionUpdateOneWithoutCommitmentNestedInput
    rule?: RecurringRuleUpdateOneWithoutCommitmentsNestedInput
  }

  export type CommitmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    coveredByCard?: BoolFieldUpdateOperationsInput | boolean
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    ruleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommitmentCreateManyInput = {
    id?: string
    key: string
    description: string
    amount: number
    dueDate: Date | string
    status?: string
    category?: string
    source?: string
    coveredByCard?: boolean
    transactionId?: string | null
    ruleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommitmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    coveredByCard?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommitmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    coveredByCard?: BoolFieldUpdateOperationsInput | boolean
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    ruleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    balance?: SortOrder
    dueDate?: SortOrder
    pluggyItemId?: SortOrder
    pluggyAccountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    balance?: SortOrder
    dueDate?: SortOrder
    pluggyItemId?: SortOrder
    pluggyAccountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    balance?: SortOrder
    dueDate?: SortOrder
    pluggyItemId?: SortOrder
    pluggyAccountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AccountNullableScalarRelationFilter = {
    is?: AccountWhereInput | null
    isNot?: AccountWhereInput | null
  }

  export type CommitmentNullableScalarRelationFilter = {
    is?: CommitmentWhereInput | null
    isNot?: CommitmentWhereInput | null
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    date?: SortOrder
    accountId?: SortOrder
    status?: SortOrder
    category?: SortOrder
    categorySource?: SortOrder
    pluggyTransactionId?: SortOrder
    isBillPayment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    date?: SortOrder
    accountId?: SortOrder
    status?: SortOrder
    category?: SortOrder
    categorySource?: SortOrder
    pluggyTransactionId?: SortOrder
    isBillPayment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    date?: SortOrder
    accountId?: SortOrder
    status?: SortOrder
    category?: SortOrder
    categorySource?: SortOrder
    pluggyTransactionId?: SortOrder
    isBillPayment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CommitmentListRelationFilter = {
    every?: CommitmentWhereInput
    some?: CommitmentWhereInput
    none?: CommitmentWhereInput
  }

  export type CommitmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecurringRuleCountOrderByAggregateInput = {
    id?: SortOrder
    matchKey?: SortOrder
    description?: SortOrder
    accountId?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    dueDay?: SortOrder
    intervalMonths?: SortOrder
    startMonth?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type RecurringRuleAvgOrderByAggregateInput = {
    amount?: SortOrder
    dueDay?: SortOrder
    intervalMonths?: SortOrder
  }

  export type RecurringRuleMaxOrderByAggregateInput = {
    id?: SortOrder
    matchKey?: SortOrder
    description?: SortOrder
    accountId?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    dueDay?: SortOrder
    intervalMonths?: SortOrder
    startMonth?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type RecurringRuleMinOrderByAggregateInput = {
    id?: SortOrder
    matchKey?: SortOrder
    description?: SortOrder
    accountId?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    dueDay?: SortOrder
    intervalMonths?: SortOrder
    startMonth?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type RecurringRuleSumOrderByAggregateInput = {
    amount?: SortOrder
    dueDay?: SortOrder
    intervalMonths?: SortOrder
  }

  export type TransactionNullableScalarRelationFilter = {
    is?: TransactionWhereInput | null
    isNot?: TransactionWhereInput | null
  }

  export type RecurringRuleNullableScalarRelationFilter = {
    is?: RecurringRuleWhereInput | null
    isNot?: RecurringRuleWhereInput | null
  }

  export type CommitmentCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    category?: SortOrder
    source?: SortOrder
    coveredByCard?: SortOrder
    transactionId?: SortOrder
    ruleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommitmentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type CommitmentMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    category?: SortOrder
    source?: SortOrder
    coveredByCard?: SortOrder
    transactionId?: SortOrder
    ruleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommitmentMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    category?: SortOrder
    source?: SortOrder
    coveredByCard?: SortOrder
    transactionId?: SortOrder
    ruleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommitmentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TransactionCreateNestedManyWithoutAccountInput = {
    create?: XOR<TransactionCreateWithoutAccountInput, TransactionUncheckedCreateWithoutAccountInput> | TransactionCreateWithoutAccountInput[] | TransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAccountInput | TransactionCreateOrConnectWithoutAccountInput[]
    createMany?: TransactionCreateManyAccountInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<TransactionCreateWithoutAccountInput, TransactionUncheckedCreateWithoutAccountInput> | TransactionCreateWithoutAccountInput[] | TransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAccountInput | TransactionCreateOrConnectWithoutAccountInput[]
    createMany?: TransactionCreateManyAccountInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TransactionUpdateManyWithoutAccountNestedInput = {
    create?: XOR<TransactionCreateWithoutAccountInput, TransactionUncheckedCreateWithoutAccountInput> | TransactionCreateWithoutAccountInput[] | TransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAccountInput | TransactionCreateOrConnectWithoutAccountInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutAccountInput | TransactionUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: TransactionCreateManyAccountInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutAccountInput | TransactionUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutAccountInput | TransactionUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<TransactionCreateWithoutAccountInput, TransactionUncheckedCreateWithoutAccountInput> | TransactionCreateWithoutAccountInput[] | TransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAccountInput | TransactionCreateOrConnectWithoutAccountInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutAccountInput | TransactionUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: TransactionCreateManyAccountInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutAccountInput | TransactionUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutAccountInput | TransactionUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type AccountCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<AccountCreateWithoutTransactionsInput, AccountUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutTransactionsInput
    connect?: AccountWhereUniqueInput
  }

  export type CommitmentCreateNestedOneWithoutTransactionInput = {
    create?: XOR<CommitmentCreateWithoutTransactionInput, CommitmentUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: CommitmentCreateOrConnectWithoutTransactionInput
    connect?: CommitmentWhereUniqueInput
  }

  export type CommitmentUncheckedCreateNestedOneWithoutTransactionInput = {
    create?: XOR<CommitmentCreateWithoutTransactionInput, CommitmentUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: CommitmentCreateOrConnectWithoutTransactionInput
    connect?: CommitmentWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AccountUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<AccountCreateWithoutTransactionsInput, AccountUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutTransactionsInput
    upsert?: AccountUpsertWithoutTransactionsInput
    disconnect?: AccountWhereInput | boolean
    delete?: AccountWhereInput | boolean
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutTransactionsInput, AccountUpdateWithoutTransactionsInput>, AccountUncheckedUpdateWithoutTransactionsInput>
  }

  export type CommitmentUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<CommitmentCreateWithoutTransactionInput, CommitmentUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: CommitmentCreateOrConnectWithoutTransactionInput
    upsert?: CommitmentUpsertWithoutTransactionInput
    disconnect?: CommitmentWhereInput | boolean
    delete?: CommitmentWhereInput | boolean
    connect?: CommitmentWhereUniqueInput
    update?: XOR<XOR<CommitmentUpdateToOneWithWhereWithoutTransactionInput, CommitmentUpdateWithoutTransactionInput>, CommitmentUncheckedUpdateWithoutTransactionInput>
  }

  export type CommitmentUncheckedUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<CommitmentCreateWithoutTransactionInput, CommitmentUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: CommitmentCreateOrConnectWithoutTransactionInput
    upsert?: CommitmentUpsertWithoutTransactionInput
    disconnect?: CommitmentWhereInput | boolean
    delete?: CommitmentWhereInput | boolean
    connect?: CommitmentWhereUniqueInput
    update?: XOR<XOR<CommitmentUpdateToOneWithWhereWithoutTransactionInput, CommitmentUpdateWithoutTransactionInput>, CommitmentUncheckedUpdateWithoutTransactionInput>
  }

  export type CommitmentCreateNestedManyWithoutRuleInput = {
    create?: XOR<CommitmentCreateWithoutRuleInput, CommitmentUncheckedCreateWithoutRuleInput> | CommitmentCreateWithoutRuleInput[] | CommitmentUncheckedCreateWithoutRuleInput[]
    connectOrCreate?: CommitmentCreateOrConnectWithoutRuleInput | CommitmentCreateOrConnectWithoutRuleInput[]
    createMany?: CommitmentCreateManyRuleInputEnvelope
    connect?: CommitmentWhereUniqueInput | CommitmentWhereUniqueInput[]
  }

  export type CommitmentUncheckedCreateNestedManyWithoutRuleInput = {
    create?: XOR<CommitmentCreateWithoutRuleInput, CommitmentUncheckedCreateWithoutRuleInput> | CommitmentCreateWithoutRuleInput[] | CommitmentUncheckedCreateWithoutRuleInput[]
    connectOrCreate?: CommitmentCreateOrConnectWithoutRuleInput | CommitmentCreateOrConnectWithoutRuleInput[]
    createMany?: CommitmentCreateManyRuleInputEnvelope
    connect?: CommitmentWhereUniqueInput | CommitmentWhereUniqueInput[]
  }

  export type CommitmentUpdateManyWithoutRuleNestedInput = {
    create?: XOR<CommitmentCreateWithoutRuleInput, CommitmentUncheckedCreateWithoutRuleInput> | CommitmentCreateWithoutRuleInput[] | CommitmentUncheckedCreateWithoutRuleInput[]
    connectOrCreate?: CommitmentCreateOrConnectWithoutRuleInput | CommitmentCreateOrConnectWithoutRuleInput[]
    upsert?: CommitmentUpsertWithWhereUniqueWithoutRuleInput | CommitmentUpsertWithWhereUniqueWithoutRuleInput[]
    createMany?: CommitmentCreateManyRuleInputEnvelope
    set?: CommitmentWhereUniqueInput | CommitmentWhereUniqueInput[]
    disconnect?: CommitmentWhereUniqueInput | CommitmentWhereUniqueInput[]
    delete?: CommitmentWhereUniqueInput | CommitmentWhereUniqueInput[]
    connect?: CommitmentWhereUniqueInput | CommitmentWhereUniqueInput[]
    update?: CommitmentUpdateWithWhereUniqueWithoutRuleInput | CommitmentUpdateWithWhereUniqueWithoutRuleInput[]
    updateMany?: CommitmentUpdateManyWithWhereWithoutRuleInput | CommitmentUpdateManyWithWhereWithoutRuleInput[]
    deleteMany?: CommitmentScalarWhereInput | CommitmentScalarWhereInput[]
  }

  export type CommitmentUncheckedUpdateManyWithoutRuleNestedInput = {
    create?: XOR<CommitmentCreateWithoutRuleInput, CommitmentUncheckedCreateWithoutRuleInput> | CommitmentCreateWithoutRuleInput[] | CommitmentUncheckedCreateWithoutRuleInput[]
    connectOrCreate?: CommitmentCreateOrConnectWithoutRuleInput | CommitmentCreateOrConnectWithoutRuleInput[]
    upsert?: CommitmentUpsertWithWhereUniqueWithoutRuleInput | CommitmentUpsertWithWhereUniqueWithoutRuleInput[]
    createMany?: CommitmentCreateManyRuleInputEnvelope
    set?: CommitmentWhereUniqueInput | CommitmentWhereUniqueInput[]
    disconnect?: CommitmentWhereUniqueInput | CommitmentWhereUniqueInput[]
    delete?: CommitmentWhereUniqueInput | CommitmentWhereUniqueInput[]
    connect?: CommitmentWhereUniqueInput | CommitmentWhereUniqueInput[]
    update?: CommitmentUpdateWithWhereUniqueWithoutRuleInput | CommitmentUpdateWithWhereUniqueWithoutRuleInput[]
    updateMany?: CommitmentUpdateManyWithWhereWithoutRuleInput | CommitmentUpdateManyWithWhereWithoutRuleInput[]
    deleteMany?: CommitmentScalarWhereInput | CommitmentScalarWhereInput[]
  }

  export type TransactionCreateNestedOneWithoutCommitmentInput = {
    create?: XOR<TransactionCreateWithoutCommitmentInput, TransactionUncheckedCreateWithoutCommitmentInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutCommitmentInput
    connect?: TransactionWhereUniqueInput
  }

  export type RecurringRuleCreateNestedOneWithoutCommitmentsInput = {
    create?: XOR<RecurringRuleCreateWithoutCommitmentsInput, RecurringRuleUncheckedCreateWithoutCommitmentsInput>
    connectOrCreate?: RecurringRuleCreateOrConnectWithoutCommitmentsInput
    connect?: RecurringRuleWhereUniqueInput
  }

  export type TransactionUpdateOneWithoutCommitmentNestedInput = {
    create?: XOR<TransactionCreateWithoutCommitmentInput, TransactionUncheckedCreateWithoutCommitmentInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutCommitmentInput
    upsert?: TransactionUpsertWithoutCommitmentInput
    disconnect?: TransactionWhereInput | boolean
    delete?: TransactionWhereInput | boolean
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutCommitmentInput, TransactionUpdateWithoutCommitmentInput>, TransactionUncheckedUpdateWithoutCommitmentInput>
  }

  export type RecurringRuleUpdateOneWithoutCommitmentsNestedInput = {
    create?: XOR<RecurringRuleCreateWithoutCommitmentsInput, RecurringRuleUncheckedCreateWithoutCommitmentsInput>
    connectOrCreate?: RecurringRuleCreateOrConnectWithoutCommitmentsInput
    upsert?: RecurringRuleUpsertWithoutCommitmentsInput
    disconnect?: RecurringRuleWhereInput | boolean
    delete?: RecurringRuleWhereInput | boolean
    connect?: RecurringRuleWhereUniqueInput
    update?: XOR<XOR<RecurringRuleUpdateToOneWithWhereWithoutCommitmentsInput, RecurringRuleUpdateWithoutCommitmentsInput>, RecurringRuleUncheckedUpdateWithoutCommitmentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TransactionCreateWithoutAccountInput = {
    id?: string
    description: string
    amount: number
    type: string
    date: Date | string
    status?: string
    category?: string | null
    categorySource?: string
    pluggyTransactionId?: string | null
    isBillPayment?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    commitment?: CommitmentCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutAccountInput = {
    id?: string
    description: string
    amount: number
    type: string
    date: Date | string
    status?: string
    category?: string | null
    categorySource?: string
    pluggyTransactionId?: string | null
    isBillPayment?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    commitment?: CommitmentUncheckedCreateNestedOneWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutAccountInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutAccountInput, TransactionUncheckedCreateWithoutAccountInput>
  }

  export type TransactionCreateManyAccountInputEnvelope = {
    data: TransactionCreateManyAccountInput | TransactionCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type TransactionUpsertWithWhereUniqueWithoutAccountInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutAccountInput, TransactionUncheckedUpdateWithoutAccountInput>
    create: XOR<TransactionCreateWithoutAccountInput, TransactionUncheckedCreateWithoutAccountInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutAccountInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutAccountInput, TransactionUncheckedUpdateWithoutAccountInput>
  }

  export type TransactionUpdateManyWithWhereWithoutAccountInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutAccountInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    description?: StringFilter<"Transaction"> | string
    amount?: IntFilter<"Transaction"> | number
    type?: StringFilter<"Transaction"> | string
    date?: DateTimeFilter<"Transaction"> | Date | string
    accountId?: StringNullableFilter<"Transaction"> | string | null
    status?: StringFilter<"Transaction"> | string
    category?: StringNullableFilter<"Transaction"> | string | null
    categorySource?: StringFilter<"Transaction"> | string
    pluggyTransactionId?: StringNullableFilter<"Transaction"> | string | null
    isBillPayment?: BoolFilter<"Transaction"> | boolean
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type AccountCreateWithoutTransactionsInput = {
    id?: string
    name: string
    type: string
    balance?: number
    dueDate?: Date | string | null
    pluggyItemId?: string | null
    pluggyAccountId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutTransactionsInput = {
    id?: string
    name: string
    type: string
    balance?: number
    dueDate?: Date | string | null
    pluggyItemId?: string | null
    pluggyAccountId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutTransactionsInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutTransactionsInput, AccountUncheckedCreateWithoutTransactionsInput>
  }

  export type CommitmentCreateWithoutTransactionInput = {
    id?: string
    key: string
    description: string
    amount: number
    dueDate: Date | string
    status?: string
    category?: string
    source?: string
    coveredByCard?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rule?: RecurringRuleCreateNestedOneWithoutCommitmentsInput
  }

  export type CommitmentUncheckedCreateWithoutTransactionInput = {
    id?: string
    key: string
    description: string
    amount: number
    dueDate: Date | string
    status?: string
    category?: string
    source?: string
    coveredByCard?: boolean
    ruleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommitmentCreateOrConnectWithoutTransactionInput = {
    where: CommitmentWhereUniqueInput
    create: XOR<CommitmentCreateWithoutTransactionInput, CommitmentUncheckedCreateWithoutTransactionInput>
  }

  export type AccountUpsertWithoutTransactionsInput = {
    update: XOR<AccountUpdateWithoutTransactionsInput, AccountUncheckedUpdateWithoutTransactionsInput>
    create: XOR<AccountCreateWithoutTransactionsInput, AccountUncheckedCreateWithoutTransactionsInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutTransactionsInput, AccountUncheckedUpdateWithoutTransactionsInput>
  }

  export type AccountUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pluggyItemId?: NullableStringFieldUpdateOperationsInput | string | null
    pluggyAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pluggyItemId?: NullableStringFieldUpdateOperationsInput | string | null
    pluggyAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommitmentUpsertWithoutTransactionInput = {
    update: XOR<CommitmentUpdateWithoutTransactionInput, CommitmentUncheckedUpdateWithoutTransactionInput>
    create: XOR<CommitmentCreateWithoutTransactionInput, CommitmentUncheckedCreateWithoutTransactionInput>
    where?: CommitmentWhereInput
  }

  export type CommitmentUpdateToOneWithWhereWithoutTransactionInput = {
    where?: CommitmentWhereInput
    data: XOR<CommitmentUpdateWithoutTransactionInput, CommitmentUncheckedUpdateWithoutTransactionInput>
  }

  export type CommitmentUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    coveredByCard?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rule?: RecurringRuleUpdateOneWithoutCommitmentsNestedInput
  }

  export type CommitmentUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    coveredByCard?: BoolFieldUpdateOperationsInput | boolean
    ruleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommitmentCreateWithoutRuleInput = {
    id?: string
    key: string
    description: string
    amount: number
    dueDate: Date | string
    status?: string
    category?: string
    source?: string
    coveredByCard?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transaction?: TransactionCreateNestedOneWithoutCommitmentInput
  }

  export type CommitmentUncheckedCreateWithoutRuleInput = {
    id?: string
    key: string
    description: string
    amount: number
    dueDate: Date | string
    status?: string
    category?: string
    source?: string
    coveredByCard?: boolean
    transactionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommitmentCreateOrConnectWithoutRuleInput = {
    where: CommitmentWhereUniqueInput
    create: XOR<CommitmentCreateWithoutRuleInput, CommitmentUncheckedCreateWithoutRuleInput>
  }

  export type CommitmentCreateManyRuleInputEnvelope = {
    data: CommitmentCreateManyRuleInput | CommitmentCreateManyRuleInput[]
    skipDuplicates?: boolean
  }

  export type CommitmentUpsertWithWhereUniqueWithoutRuleInput = {
    where: CommitmentWhereUniqueInput
    update: XOR<CommitmentUpdateWithoutRuleInput, CommitmentUncheckedUpdateWithoutRuleInput>
    create: XOR<CommitmentCreateWithoutRuleInput, CommitmentUncheckedCreateWithoutRuleInput>
  }

  export type CommitmentUpdateWithWhereUniqueWithoutRuleInput = {
    where: CommitmentWhereUniqueInput
    data: XOR<CommitmentUpdateWithoutRuleInput, CommitmentUncheckedUpdateWithoutRuleInput>
  }

  export type CommitmentUpdateManyWithWhereWithoutRuleInput = {
    where: CommitmentScalarWhereInput
    data: XOR<CommitmentUpdateManyMutationInput, CommitmentUncheckedUpdateManyWithoutRuleInput>
  }

  export type CommitmentScalarWhereInput = {
    AND?: CommitmentScalarWhereInput | CommitmentScalarWhereInput[]
    OR?: CommitmentScalarWhereInput[]
    NOT?: CommitmentScalarWhereInput | CommitmentScalarWhereInput[]
    id?: StringFilter<"Commitment"> | string
    key?: StringFilter<"Commitment"> | string
    description?: StringFilter<"Commitment"> | string
    amount?: IntFilter<"Commitment"> | number
    dueDate?: DateTimeFilter<"Commitment"> | Date | string
    status?: StringFilter<"Commitment"> | string
    category?: StringFilter<"Commitment"> | string
    source?: StringFilter<"Commitment"> | string
    coveredByCard?: BoolFilter<"Commitment"> | boolean
    transactionId?: StringNullableFilter<"Commitment"> | string | null
    ruleId?: StringNullableFilter<"Commitment"> | string | null
    createdAt?: DateTimeFilter<"Commitment"> | Date | string
    updatedAt?: DateTimeFilter<"Commitment"> | Date | string
  }

  export type TransactionCreateWithoutCommitmentInput = {
    id?: string
    description: string
    amount: number
    type: string
    date: Date | string
    status?: string
    category?: string | null
    categorySource?: string
    pluggyTransactionId?: string | null
    isBillPayment?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: AccountCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutCommitmentInput = {
    id?: string
    description: string
    amount: number
    type: string
    date: Date | string
    accountId?: string | null
    status?: string
    category?: string | null
    categorySource?: string
    pluggyTransactionId?: string | null
    isBillPayment?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutCommitmentInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutCommitmentInput, TransactionUncheckedCreateWithoutCommitmentInput>
  }

  export type RecurringRuleCreateWithoutCommitmentsInput = {
    id?: string
    matchKey: string
    description: string
    accountId?: string | null
    amount: number
    category: string
    dueDay: number
    intervalMonths?: number
    startMonth: string
    active?: boolean
    createdAt?: Date | string
  }

  export type RecurringRuleUncheckedCreateWithoutCommitmentsInput = {
    id?: string
    matchKey: string
    description: string
    accountId?: string | null
    amount: number
    category: string
    dueDay: number
    intervalMonths?: number
    startMonth: string
    active?: boolean
    createdAt?: Date | string
  }

  export type RecurringRuleCreateOrConnectWithoutCommitmentsInput = {
    where: RecurringRuleWhereUniqueInput
    create: XOR<RecurringRuleCreateWithoutCommitmentsInput, RecurringRuleUncheckedCreateWithoutCommitmentsInput>
  }

  export type TransactionUpsertWithoutCommitmentInput = {
    update: XOR<TransactionUpdateWithoutCommitmentInput, TransactionUncheckedUpdateWithoutCommitmentInput>
    create: XOR<TransactionCreateWithoutCommitmentInput, TransactionUncheckedCreateWithoutCommitmentInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutCommitmentInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutCommitmentInput, TransactionUncheckedUpdateWithoutCommitmentInput>
  }

  export type TransactionUpdateWithoutCommitmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    categorySource?: StringFieldUpdateOperationsInput | string
    pluggyTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    isBillPayment?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutCommitmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    categorySource?: StringFieldUpdateOperationsInput | string
    pluggyTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    isBillPayment?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurringRuleUpsertWithoutCommitmentsInput = {
    update: XOR<RecurringRuleUpdateWithoutCommitmentsInput, RecurringRuleUncheckedUpdateWithoutCommitmentsInput>
    create: XOR<RecurringRuleCreateWithoutCommitmentsInput, RecurringRuleUncheckedCreateWithoutCommitmentsInput>
    where?: RecurringRuleWhereInput
  }

  export type RecurringRuleUpdateToOneWithWhereWithoutCommitmentsInput = {
    where?: RecurringRuleWhereInput
    data: XOR<RecurringRuleUpdateWithoutCommitmentsInput, RecurringRuleUncheckedUpdateWithoutCommitmentsInput>
  }

  export type RecurringRuleUpdateWithoutCommitmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchKey?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    dueDay?: IntFieldUpdateOperationsInput | number
    intervalMonths?: IntFieldUpdateOperationsInput | number
    startMonth?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurringRuleUncheckedUpdateWithoutCommitmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchKey?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    dueDay?: IntFieldUpdateOperationsInput | number
    intervalMonths?: IntFieldUpdateOperationsInput | number
    startMonth?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyAccountInput = {
    id?: string
    description: string
    amount: number
    type: string
    date: Date | string
    status?: string
    category?: string | null
    categorySource?: string
    pluggyTransactionId?: string | null
    isBillPayment?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    categorySource?: StringFieldUpdateOperationsInput | string
    pluggyTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    isBillPayment?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commitment?: CommitmentUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    categorySource?: StringFieldUpdateOperationsInput | string
    pluggyTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    isBillPayment?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commitment?: CommitmentUncheckedUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    categorySource?: StringFieldUpdateOperationsInput | string
    pluggyTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    isBillPayment?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommitmentCreateManyRuleInput = {
    id?: string
    key: string
    description: string
    amount: number
    dueDate: Date | string
    status?: string
    category?: string
    source?: string
    coveredByCard?: boolean
    transactionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommitmentUpdateWithoutRuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    coveredByCard?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: TransactionUpdateOneWithoutCommitmentNestedInput
  }

  export type CommitmentUncheckedUpdateWithoutRuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    coveredByCard?: BoolFieldUpdateOperationsInput | boolean
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommitmentUncheckedUpdateManyWithoutRuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    coveredByCard?: BoolFieldUpdateOperationsInput | boolean
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}