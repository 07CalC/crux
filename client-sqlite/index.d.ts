
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model College
 * 
 */
export type College = $Result.DefaultSelection<Prisma.$CollegePayload>
/**
 * Model Orcr
 * 
 */
export type Orcr = $Result.DefaultSelection<Prisma.$OrcrPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model placement
 * 
 */
export type placement = $Result.DefaultSelection<Prisma.$placementPayload>
/**
 * Model CollegeImage
 * 
 */
export type CollegeImage = $Result.DefaultSelection<Prisma.$CollegeImagePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Colleges
 * const colleges = await prisma.college.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Colleges
   * const colleges = await prisma.college.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.college`: Exposes CRUD operations for the **College** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Colleges
    * const colleges = await prisma.college.findMany()
    * ```
    */
  get college(): Prisma.CollegeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orcr`: Exposes CRUD operations for the **Orcr** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orcrs
    * const orcrs = await prisma.orcr.findMany()
    * ```
    */
  get orcr(): Prisma.OrcrDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.placement`: Exposes CRUD operations for the **placement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Placements
    * const placements = await prisma.placement.findMany()
    * ```
    */
  get placement(): Prisma.placementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collegeImage`: Exposes CRUD operations for the **CollegeImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CollegeImages
    * const collegeImages = await prisma.collegeImage.findMany()
    * ```
    */
  get collegeImage(): Prisma.CollegeImageDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
      (Without<T, U> & U) | (Without<U, T> & T)
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
    College: 'College',
    Orcr: 'Orcr',
    Review: 'Review',
    placement: 'placement',
    CollegeImage: 'CollegeImage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "college" | "orcr" | "review" | "placement" | "collegeImage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      College: {
        payload: Prisma.$CollegePayload<ExtArgs>
        fields: Prisma.CollegeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollegeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollegeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          findFirst: {
            args: Prisma.CollegeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollegeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          findMany: {
            args: Prisma.CollegeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>[]
          }
          create: {
            args: Prisma.CollegeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          createMany: {
            args: Prisma.CollegeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollegeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>[]
          }
          delete: {
            args: Prisma.CollegeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          update: {
            args: Prisma.CollegeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          deleteMany: {
            args: Prisma.CollegeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollegeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CollegeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>[]
          }
          upsert: {
            args: Prisma.CollegeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          aggregate: {
            args: Prisma.CollegeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollege>
          }
          groupBy: {
            args: Prisma.CollegeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollegeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollegeCountArgs<ExtArgs>
            result: $Utils.Optional<CollegeCountAggregateOutputType> | number
          }
        }
      }
      Orcr: {
        payload: Prisma.$OrcrPayload<ExtArgs>
        fields: Prisma.OrcrFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrcrFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcrPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrcrFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcrPayload>
          }
          findFirst: {
            args: Prisma.OrcrFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcrPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrcrFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcrPayload>
          }
          findMany: {
            args: Prisma.OrcrFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcrPayload>[]
          }
          create: {
            args: Prisma.OrcrCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcrPayload>
          }
          createMany: {
            args: Prisma.OrcrCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrcrCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcrPayload>[]
          }
          delete: {
            args: Prisma.OrcrDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcrPayload>
          }
          update: {
            args: Prisma.OrcrUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcrPayload>
          }
          deleteMany: {
            args: Prisma.OrcrDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrcrUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrcrUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcrPayload>[]
          }
          upsert: {
            args: Prisma.OrcrUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcrPayload>
          }
          aggregate: {
            args: Prisma.OrcrAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrcr>
          }
          groupBy: {
            args: Prisma.OrcrGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrcrGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrcrCountArgs<ExtArgs>
            result: $Utils.Optional<OrcrCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      placement: {
        payload: Prisma.$placementPayload<ExtArgs>
        fields: Prisma.placementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.placementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$placementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.placementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$placementPayload>
          }
          findFirst: {
            args: Prisma.placementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$placementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.placementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$placementPayload>
          }
          findMany: {
            args: Prisma.placementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$placementPayload>[]
          }
          create: {
            args: Prisma.placementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$placementPayload>
          }
          createMany: {
            args: Prisma.placementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.placementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$placementPayload>[]
          }
          delete: {
            args: Prisma.placementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$placementPayload>
          }
          update: {
            args: Prisma.placementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$placementPayload>
          }
          deleteMany: {
            args: Prisma.placementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.placementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.placementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$placementPayload>[]
          }
          upsert: {
            args: Prisma.placementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$placementPayload>
          }
          aggregate: {
            args: Prisma.PlacementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlacement>
          }
          groupBy: {
            args: Prisma.placementGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlacementGroupByOutputType>[]
          }
          count: {
            args: Prisma.placementCountArgs<ExtArgs>
            result: $Utils.Optional<PlacementCountAggregateOutputType> | number
          }
        }
      }
      CollegeImage: {
        payload: Prisma.$CollegeImagePayload<ExtArgs>
        fields: Prisma.CollegeImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollegeImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollegeImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeImagePayload>
          }
          findFirst: {
            args: Prisma.CollegeImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollegeImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeImagePayload>
          }
          findMany: {
            args: Prisma.CollegeImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeImagePayload>[]
          }
          create: {
            args: Prisma.CollegeImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeImagePayload>
          }
          createMany: {
            args: Prisma.CollegeImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollegeImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeImagePayload>[]
          }
          delete: {
            args: Prisma.CollegeImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeImagePayload>
          }
          update: {
            args: Prisma.CollegeImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeImagePayload>
          }
          deleteMany: {
            args: Prisma.CollegeImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollegeImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CollegeImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeImagePayload>[]
          }
          upsert: {
            args: Prisma.CollegeImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeImagePayload>
          }
          aggregate: {
            args: Prisma.CollegeImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollegeImage>
          }
          groupBy: {
            args: Prisma.CollegeImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollegeImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollegeImageCountArgs<ExtArgs>
            result: $Utils.Optional<CollegeImageCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    college?: CollegeOmit
    orcr?: OrcrOmit
    review?: ReviewOmit
    placement?: placementOmit
    collegeImage?: CollegeImageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type CollegeCountOutputType
   */

  export type CollegeCountOutputType = {
    images: number
    orcrs: number
    reviews: number
    placements: number
  }

  export type CollegeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | CollegeCountOutputTypeCountImagesArgs
    orcrs?: boolean | CollegeCountOutputTypeCountOrcrsArgs
    reviews?: boolean | CollegeCountOutputTypeCountReviewsArgs
    placements?: boolean | CollegeCountOutputTypeCountPlacementsArgs
  }

  // Custom InputTypes
  /**
   * CollegeCountOutputType without action
   */
  export type CollegeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeCountOutputType
     */
    select?: CollegeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CollegeCountOutputType without action
   */
  export type CollegeCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollegeImageWhereInput
  }

  /**
   * CollegeCountOutputType without action
   */
  export type CollegeCountOutputTypeCountOrcrsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrcrWhereInput
  }

  /**
   * CollegeCountOutputType without action
   */
  export type CollegeCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * CollegeCountOutputType without action
   */
  export type CollegeCountOutputTypeCountPlacementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: placementWhereInput
  }


  /**
   * Models
   */

  /**
   * Model College
   */

  export type AggregateCollege = {
    _count: CollegeCountAggregateOutputType | null
    _avg: CollegeAvgAggregateOutputType | null
    _sum: CollegeSumAggregateOutputType | null
    _min: CollegeMinAggregateOutputType | null
    _max: CollegeMaxAggregateOutputType | null
  }

  export type CollegeAvgAggregateOutputType = {
    bongs: number | null
    totalStudents: number | null
    maleStudents: number | null
    femaleStudents: number | null
    nirf: number | null
  }

  export type CollegeSumAggregateOutputType = {
    bongs: number | null
    totalStudents: number | null
    maleStudents: number | null
    femaleStudents: number | null
    nirf: number | null
  }

  export type CollegeMinAggregateOutputType = {
    id: string | null
    name: string | null
    bongs: number | null
    coverImage: string | null
    location: string | null
    officialWebsite: string | null
    totalStudents: number | null
    maleStudents: number | null
    femaleStudents: number | null
    createdAt: Date | null
    updatedAt: Date | null
    nirf: number | null
    moderated: boolean | null
    collegeType: string | null
  }

  export type CollegeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    bongs: number | null
    coverImage: string | null
    location: string | null
    officialWebsite: string | null
    totalStudents: number | null
    maleStudents: number | null
    femaleStudents: number | null
    createdAt: Date | null
    updatedAt: Date | null
    nirf: number | null
    moderated: boolean | null
    collegeType: string | null
  }

  export type CollegeCountAggregateOutputType = {
    id: number
    name: number
    bongs: number
    coverImage: number
    location: number
    officialWebsite: number
    totalStudents: number
    maleStudents: number
    femaleStudents: number
    createdAt: number
    updatedAt: number
    nirf: number
    moderated: number
    collegeType: number
    _all: number
  }


  export type CollegeAvgAggregateInputType = {
    bongs?: true
    totalStudents?: true
    maleStudents?: true
    femaleStudents?: true
    nirf?: true
  }

  export type CollegeSumAggregateInputType = {
    bongs?: true
    totalStudents?: true
    maleStudents?: true
    femaleStudents?: true
    nirf?: true
  }

  export type CollegeMinAggregateInputType = {
    id?: true
    name?: true
    bongs?: true
    coverImage?: true
    location?: true
    officialWebsite?: true
    totalStudents?: true
    maleStudents?: true
    femaleStudents?: true
    createdAt?: true
    updatedAt?: true
    nirf?: true
    moderated?: true
    collegeType?: true
  }

  export type CollegeMaxAggregateInputType = {
    id?: true
    name?: true
    bongs?: true
    coverImage?: true
    location?: true
    officialWebsite?: true
    totalStudents?: true
    maleStudents?: true
    femaleStudents?: true
    createdAt?: true
    updatedAt?: true
    nirf?: true
    moderated?: true
    collegeType?: true
  }

  export type CollegeCountAggregateInputType = {
    id?: true
    name?: true
    bongs?: true
    coverImage?: true
    location?: true
    officialWebsite?: true
    totalStudents?: true
    maleStudents?: true
    femaleStudents?: true
    createdAt?: true
    updatedAt?: true
    nirf?: true
    moderated?: true
    collegeType?: true
    _all?: true
  }

  export type CollegeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which College to aggregate.
     */
    where?: CollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colleges to fetch.
     */
    orderBy?: CollegeOrderByWithRelationInput | CollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Colleges
    **/
    _count?: true | CollegeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CollegeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CollegeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollegeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollegeMaxAggregateInputType
  }

  export type GetCollegeAggregateType<T extends CollegeAggregateArgs> = {
        [P in keyof T & keyof AggregateCollege]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollege[P]>
      : GetScalarType<T[P], AggregateCollege[P]>
  }




  export type CollegeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollegeWhereInput
    orderBy?: CollegeOrderByWithAggregationInput | CollegeOrderByWithAggregationInput[]
    by: CollegeScalarFieldEnum[] | CollegeScalarFieldEnum
    having?: CollegeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollegeCountAggregateInputType | true
    _avg?: CollegeAvgAggregateInputType
    _sum?: CollegeSumAggregateInputType
    _min?: CollegeMinAggregateInputType
    _max?: CollegeMaxAggregateInputType
  }

  export type CollegeGroupByOutputType = {
    id: string
    name: string
    bongs: number
    coverImage: string | null
    location: string | null
    officialWebsite: string | null
    totalStudents: number | null
    maleStudents: number | null
    femaleStudents: number | null
    createdAt: Date
    updatedAt: Date
    nirf: number | null
    moderated: boolean
    collegeType: string | null
    _count: CollegeCountAggregateOutputType | null
    _avg: CollegeAvgAggregateOutputType | null
    _sum: CollegeSumAggregateOutputType | null
    _min: CollegeMinAggregateOutputType | null
    _max: CollegeMaxAggregateOutputType | null
  }

  type GetCollegeGroupByPayload<T extends CollegeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollegeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollegeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollegeGroupByOutputType[P]>
            : GetScalarType<T[P], CollegeGroupByOutputType[P]>
        }
      >
    >


  export type CollegeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bongs?: boolean
    coverImage?: boolean
    location?: boolean
    officialWebsite?: boolean
    totalStudents?: boolean
    maleStudents?: boolean
    femaleStudents?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nirf?: boolean
    moderated?: boolean
    collegeType?: boolean
    images?: boolean | College$imagesArgs<ExtArgs>
    orcrs?: boolean | College$orcrsArgs<ExtArgs>
    reviews?: boolean | College$reviewsArgs<ExtArgs>
    placements?: boolean | College$placementsArgs<ExtArgs>
    _count?: boolean | CollegeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["college"]>

  export type CollegeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bongs?: boolean
    coverImage?: boolean
    location?: boolean
    officialWebsite?: boolean
    totalStudents?: boolean
    maleStudents?: boolean
    femaleStudents?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nirf?: boolean
    moderated?: boolean
    collegeType?: boolean
  }, ExtArgs["result"]["college"]>

  export type CollegeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bongs?: boolean
    coverImage?: boolean
    location?: boolean
    officialWebsite?: boolean
    totalStudents?: boolean
    maleStudents?: boolean
    femaleStudents?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nirf?: boolean
    moderated?: boolean
    collegeType?: boolean
  }, ExtArgs["result"]["college"]>

  export type CollegeSelectScalar = {
    id?: boolean
    name?: boolean
    bongs?: boolean
    coverImage?: boolean
    location?: boolean
    officialWebsite?: boolean
    totalStudents?: boolean
    maleStudents?: boolean
    femaleStudents?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nirf?: boolean
    moderated?: boolean
    collegeType?: boolean
  }

  export type CollegeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "bongs" | "coverImage" | "location" | "officialWebsite" | "totalStudents" | "maleStudents" | "femaleStudents" | "createdAt" | "updatedAt" | "nirf" | "moderated" | "collegeType", ExtArgs["result"]["college"]>
  export type CollegeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | College$imagesArgs<ExtArgs>
    orcrs?: boolean | College$orcrsArgs<ExtArgs>
    reviews?: boolean | College$reviewsArgs<ExtArgs>
    placements?: boolean | College$placementsArgs<ExtArgs>
    _count?: boolean | CollegeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CollegeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CollegeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CollegePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "College"
    objects: {
      images: Prisma.$CollegeImagePayload<ExtArgs>[]
      orcrs: Prisma.$OrcrPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      placements: Prisma.$placementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      bongs: number
      coverImage: string | null
      location: string | null
      officialWebsite: string | null
      totalStudents: number | null
      maleStudents: number | null
      femaleStudents: number | null
      createdAt: Date
      updatedAt: Date
      nirf: number | null
      moderated: boolean
      collegeType: string | null
    }, ExtArgs["result"]["college"]>
    composites: {}
  }

  type CollegeGetPayload<S extends boolean | null | undefined | CollegeDefaultArgs> = $Result.GetResult<Prisma.$CollegePayload, S>

  type CollegeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollegeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollegeCountAggregateInputType | true
    }

  export interface CollegeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['College'], meta: { name: 'College' } }
    /**
     * Find zero or one College that matches the filter.
     * @param {CollegeFindUniqueArgs} args - Arguments to find a College
     * @example
     * // Get one College
     * const college = await prisma.college.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollegeFindUniqueArgs>(args: SelectSubset<T, CollegeFindUniqueArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one College that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollegeFindUniqueOrThrowArgs} args - Arguments to find a College
     * @example
     * // Get one College
     * const college = await prisma.college.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollegeFindUniqueOrThrowArgs>(args: SelectSubset<T, CollegeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first College that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeFindFirstArgs} args - Arguments to find a College
     * @example
     * // Get one College
     * const college = await prisma.college.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollegeFindFirstArgs>(args?: SelectSubset<T, CollegeFindFirstArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first College that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeFindFirstOrThrowArgs} args - Arguments to find a College
     * @example
     * // Get one College
     * const college = await prisma.college.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollegeFindFirstOrThrowArgs>(args?: SelectSubset<T, CollegeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Colleges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Colleges
     * const colleges = await prisma.college.findMany()
     * 
     * // Get first 10 Colleges
     * const colleges = await prisma.college.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collegeWithIdOnly = await prisma.college.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollegeFindManyArgs>(args?: SelectSubset<T, CollegeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a College.
     * @param {CollegeCreateArgs} args - Arguments to create a College.
     * @example
     * // Create one College
     * const College = await prisma.college.create({
     *   data: {
     *     // ... data to create a College
     *   }
     * })
     * 
     */
    create<T extends CollegeCreateArgs>(args: SelectSubset<T, CollegeCreateArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Colleges.
     * @param {CollegeCreateManyArgs} args - Arguments to create many Colleges.
     * @example
     * // Create many Colleges
     * const college = await prisma.college.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollegeCreateManyArgs>(args?: SelectSubset<T, CollegeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Colleges and returns the data saved in the database.
     * @param {CollegeCreateManyAndReturnArgs} args - Arguments to create many Colleges.
     * @example
     * // Create many Colleges
     * const college = await prisma.college.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Colleges and only return the `id`
     * const collegeWithIdOnly = await prisma.college.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollegeCreateManyAndReturnArgs>(args?: SelectSubset<T, CollegeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a College.
     * @param {CollegeDeleteArgs} args - Arguments to delete one College.
     * @example
     * // Delete one College
     * const College = await prisma.college.delete({
     *   where: {
     *     // ... filter to delete one College
     *   }
     * })
     * 
     */
    delete<T extends CollegeDeleteArgs>(args: SelectSubset<T, CollegeDeleteArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one College.
     * @param {CollegeUpdateArgs} args - Arguments to update one College.
     * @example
     * // Update one College
     * const college = await prisma.college.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollegeUpdateArgs>(args: SelectSubset<T, CollegeUpdateArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Colleges.
     * @param {CollegeDeleteManyArgs} args - Arguments to filter Colleges to delete.
     * @example
     * // Delete a few Colleges
     * const { count } = await prisma.college.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollegeDeleteManyArgs>(args?: SelectSubset<T, CollegeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colleges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Colleges
     * const college = await prisma.college.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollegeUpdateManyArgs>(args: SelectSubset<T, CollegeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colleges and returns the data updated in the database.
     * @param {CollegeUpdateManyAndReturnArgs} args - Arguments to update many Colleges.
     * @example
     * // Update many Colleges
     * const college = await prisma.college.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Colleges and only return the `id`
     * const collegeWithIdOnly = await prisma.college.updateManyAndReturn({
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
    updateManyAndReturn<T extends CollegeUpdateManyAndReturnArgs>(args: SelectSubset<T, CollegeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one College.
     * @param {CollegeUpsertArgs} args - Arguments to update or create a College.
     * @example
     * // Update or create a College
     * const college = await prisma.college.upsert({
     *   create: {
     *     // ... data to create a College
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the College we want to update
     *   }
     * })
     */
    upsert<T extends CollegeUpsertArgs>(args: SelectSubset<T, CollegeUpsertArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Colleges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeCountArgs} args - Arguments to filter Colleges to count.
     * @example
     * // Count the number of Colleges
     * const count = await prisma.college.count({
     *   where: {
     *     // ... the filter for the Colleges we want to count
     *   }
     * })
    **/
    count<T extends CollegeCountArgs>(
      args?: Subset<T, CollegeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollegeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a College.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CollegeAggregateArgs>(args: Subset<T, CollegeAggregateArgs>): Prisma.PrismaPromise<GetCollegeAggregateType<T>>

    /**
     * Group by College.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeGroupByArgs} args - Group by arguments.
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
      T extends CollegeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollegeGroupByArgs['orderBy'] }
        : { orderBy?: CollegeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CollegeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollegeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the College model
   */
  readonly fields: CollegeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for College.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollegeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends College$imagesArgs<ExtArgs> = {}>(args?: Subset<T, College$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegeImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orcrs<T extends College$orcrsArgs<ExtArgs> = {}>(args?: Subset<T, College$orcrsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrcrPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends College$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, College$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    placements<T extends College$placementsArgs<ExtArgs> = {}>(args?: Subset<T, College$placementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$placementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the College model
   */
  interface CollegeFieldRefs {
    readonly id: FieldRef<"College", 'String'>
    readonly name: FieldRef<"College", 'String'>
    readonly bongs: FieldRef<"College", 'Int'>
    readonly coverImage: FieldRef<"College", 'String'>
    readonly location: FieldRef<"College", 'String'>
    readonly officialWebsite: FieldRef<"College", 'String'>
    readonly totalStudents: FieldRef<"College", 'Int'>
    readonly maleStudents: FieldRef<"College", 'Int'>
    readonly femaleStudents: FieldRef<"College", 'Int'>
    readonly createdAt: FieldRef<"College", 'DateTime'>
    readonly updatedAt: FieldRef<"College", 'DateTime'>
    readonly nirf: FieldRef<"College", 'Int'>
    readonly moderated: FieldRef<"College", 'Boolean'>
    readonly collegeType: FieldRef<"College", 'String'>
  }
    

  // Custom InputTypes
  /**
   * College findUnique
   */
  export type CollegeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which College to fetch.
     */
    where: CollegeWhereUniqueInput
  }

  /**
   * College findUniqueOrThrow
   */
  export type CollegeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which College to fetch.
     */
    where: CollegeWhereUniqueInput
  }

  /**
   * College findFirst
   */
  export type CollegeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which College to fetch.
     */
    where?: CollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colleges to fetch.
     */
    orderBy?: CollegeOrderByWithRelationInput | CollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colleges.
     */
    cursor?: CollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colleges.
     */
    distinct?: CollegeScalarFieldEnum | CollegeScalarFieldEnum[]
  }

  /**
   * College findFirstOrThrow
   */
  export type CollegeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which College to fetch.
     */
    where?: CollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colleges to fetch.
     */
    orderBy?: CollegeOrderByWithRelationInput | CollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colleges.
     */
    cursor?: CollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colleges.
     */
    distinct?: CollegeScalarFieldEnum | CollegeScalarFieldEnum[]
  }

  /**
   * College findMany
   */
  export type CollegeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which Colleges to fetch.
     */
    where?: CollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colleges to fetch.
     */
    orderBy?: CollegeOrderByWithRelationInput | CollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Colleges.
     */
    cursor?: CollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colleges.
     */
    skip?: number
    distinct?: CollegeScalarFieldEnum | CollegeScalarFieldEnum[]
  }

  /**
   * College create
   */
  export type CollegeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * The data needed to create a College.
     */
    data: XOR<CollegeCreateInput, CollegeUncheckedCreateInput>
  }

  /**
   * College createMany
   */
  export type CollegeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Colleges.
     */
    data: CollegeCreateManyInput | CollegeCreateManyInput[]
  }

  /**
   * College createManyAndReturn
   */
  export type CollegeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * The data used to create many Colleges.
     */
    data: CollegeCreateManyInput | CollegeCreateManyInput[]
  }

  /**
   * College update
   */
  export type CollegeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * The data needed to update a College.
     */
    data: XOR<CollegeUpdateInput, CollegeUncheckedUpdateInput>
    /**
     * Choose, which College to update.
     */
    where: CollegeWhereUniqueInput
  }

  /**
   * College updateMany
   */
  export type CollegeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Colleges.
     */
    data: XOR<CollegeUpdateManyMutationInput, CollegeUncheckedUpdateManyInput>
    /**
     * Filter which Colleges to update
     */
    where?: CollegeWhereInput
    /**
     * Limit how many Colleges to update.
     */
    limit?: number
  }

  /**
   * College updateManyAndReturn
   */
  export type CollegeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * The data used to update Colleges.
     */
    data: XOR<CollegeUpdateManyMutationInput, CollegeUncheckedUpdateManyInput>
    /**
     * Filter which Colleges to update
     */
    where?: CollegeWhereInput
    /**
     * Limit how many Colleges to update.
     */
    limit?: number
  }

  /**
   * College upsert
   */
  export type CollegeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * The filter to search for the College to update in case it exists.
     */
    where: CollegeWhereUniqueInput
    /**
     * In case the College found by the `where` argument doesn't exist, create a new College with this data.
     */
    create: XOR<CollegeCreateInput, CollegeUncheckedCreateInput>
    /**
     * In case the College was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollegeUpdateInput, CollegeUncheckedUpdateInput>
  }

  /**
   * College delete
   */
  export type CollegeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter which College to delete.
     */
    where: CollegeWhereUniqueInput
  }

  /**
   * College deleteMany
   */
  export type CollegeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Colleges to delete
     */
    where?: CollegeWhereInput
    /**
     * Limit how many Colleges to delete.
     */
    limit?: number
  }

  /**
   * College.images
   */
  export type College$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeImage
     */
    select?: CollegeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeImage
     */
    omit?: CollegeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeImageInclude<ExtArgs> | null
    where?: CollegeImageWhereInput
    orderBy?: CollegeImageOrderByWithRelationInput | CollegeImageOrderByWithRelationInput[]
    cursor?: CollegeImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollegeImageScalarFieldEnum | CollegeImageScalarFieldEnum[]
  }

  /**
   * College.orcrs
   */
  export type College$orcrsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcr
     */
    select?: OrcrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcr
     */
    omit?: OrcrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcrInclude<ExtArgs> | null
    where?: OrcrWhereInput
    orderBy?: OrcrOrderByWithRelationInput | OrcrOrderByWithRelationInput[]
    cursor?: OrcrWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrcrScalarFieldEnum | OrcrScalarFieldEnum[]
  }

  /**
   * College.reviews
   */
  export type College$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * College.placements
   */
  export type College$placementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the placement
     */
    select?: placementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the placement
     */
    omit?: placementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: placementInclude<ExtArgs> | null
    where?: placementWhereInput
    orderBy?: placementOrderByWithRelationInput | placementOrderByWithRelationInput[]
    cursor?: placementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlacementScalarFieldEnum | PlacementScalarFieldEnum[]
  }

  /**
   * College without action
   */
  export type CollegeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
  }


  /**
   * Model Orcr
   */

  export type AggregateOrcr = {
    _count: OrcrCountAggregateOutputType | null
    _avg: OrcrAvgAggregateOutputType | null
    _sum: OrcrSumAggregateOutputType | null
    _min: OrcrMinAggregateOutputType | null
    _max: OrcrMaxAggregateOutputType | null
  }

  export type OrcrAvgAggregateOutputType = {
    year: number | null
    round: number | null
    openRank: number | null
    closeRank: number | null
  }

  export type OrcrSumAggregateOutputType = {
    year: number | null
    round: number | null
    openRank: number | null
    closeRank: number | null
  }

  export type OrcrMinAggregateOutputType = {
    id: string | null
    year: number | null
    round: number | null
    type: string | null
    exam: string | null
    collegeId: string | null
    institute: string | null
    academicProgramName: string | null
    quota: string | null
    seatType: string | null
    gender: string | null
    openRank: number | null
    closeRank: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrcrMaxAggregateOutputType = {
    id: string | null
    year: number | null
    round: number | null
    type: string | null
    exam: string | null
    collegeId: string | null
    institute: string | null
    academicProgramName: string | null
    quota: string | null
    seatType: string | null
    gender: string | null
    openRank: number | null
    closeRank: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrcrCountAggregateOutputType = {
    id: number
    year: number
    round: number
    type: number
    exam: number
    collegeId: number
    institute: number
    academicProgramName: number
    quota: number
    seatType: number
    gender: number
    openRank: number
    closeRank: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrcrAvgAggregateInputType = {
    year?: true
    round?: true
    openRank?: true
    closeRank?: true
  }

  export type OrcrSumAggregateInputType = {
    year?: true
    round?: true
    openRank?: true
    closeRank?: true
  }

  export type OrcrMinAggregateInputType = {
    id?: true
    year?: true
    round?: true
    type?: true
    exam?: true
    collegeId?: true
    institute?: true
    academicProgramName?: true
    quota?: true
    seatType?: true
    gender?: true
    openRank?: true
    closeRank?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrcrMaxAggregateInputType = {
    id?: true
    year?: true
    round?: true
    type?: true
    exam?: true
    collegeId?: true
    institute?: true
    academicProgramName?: true
    quota?: true
    seatType?: true
    gender?: true
    openRank?: true
    closeRank?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrcrCountAggregateInputType = {
    id?: true
    year?: true
    round?: true
    type?: true
    exam?: true
    collegeId?: true
    institute?: true
    academicProgramName?: true
    quota?: true
    seatType?: true
    gender?: true
    openRank?: true
    closeRank?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrcrAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orcr to aggregate.
     */
    where?: OrcrWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orcrs to fetch.
     */
    orderBy?: OrcrOrderByWithRelationInput | OrcrOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrcrWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orcrs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orcrs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orcrs
    **/
    _count?: true | OrcrCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrcrAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrcrSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrcrMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrcrMaxAggregateInputType
  }

  export type GetOrcrAggregateType<T extends OrcrAggregateArgs> = {
        [P in keyof T & keyof AggregateOrcr]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrcr[P]>
      : GetScalarType<T[P], AggregateOrcr[P]>
  }




  export type OrcrGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrcrWhereInput
    orderBy?: OrcrOrderByWithAggregationInput | OrcrOrderByWithAggregationInput[]
    by: OrcrScalarFieldEnum[] | OrcrScalarFieldEnum
    having?: OrcrScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrcrCountAggregateInputType | true
    _avg?: OrcrAvgAggregateInputType
    _sum?: OrcrSumAggregateInputType
    _min?: OrcrMinAggregateInputType
    _max?: OrcrMaxAggregateInputType
  }

  export type OrcrGroupByOutputType = {
    id: string
    year: number
    round: number
    type: string
    exam: string
    collegeId: string
    institute: string
    academicProgramName: string
    quota: string
    seatType: string
    gender: string
    openRank: number
    closeRank: number
    createdAt: Date
    updatedAt: Date
    _count: OrcrCountAggregateOutputType | null
    _avg: OrcrAvgAggregateOutputType | null
    _sum: OrcrSumAggregateOutputType | null
    _min: OrcrMinAggregateOutputType | null
    _max: OrcrMaxAggregateOutputType | null
  }

  type GetOrcrGroupByPayload<T extends OrcrGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrcrGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrcrGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrcrGroupByOutputType[P]>
            : GetScalarType<T[P], OrcrGroupByOutputType[P]>
        }
      >
    >


  export type OrcrSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    round?: boolean
    type?: boolean
    exam?: boolean
    collegeId?: boolean
    institute?: boolean
    academicProgramName?: boolean
    quota?: boolean
    seatType?: boolean
    gender?: boolean
    openRank?: boolean
    closeRank?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orcr"]>

  export type OrcrSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    round?: boolean
    type?: boolean
    exam?: boolean
    collegeId?: boolean
    institute?: boolean
    academicProgramName?: boolean
    quota?: boolean
    seatType?: boolean
    gender?: boolean
    openRank?: boolean
    closeRank?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orcr"]>

  export type OrcrSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    round?: boolean
    type?: boolean
    exam?: boolean
    collegeId?: boolean
    institute?: boolean
    academicProgramName?: boolean
    quota?: boolean
    seatType?: boolean
    gender?: boolean
    openRank?: boolean
    closeRank?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orcr"]>

  export type OrcrSelectScalar = {
    id?: boolean
    year?: boolean
    round?: boolean
    type?: boolean
    exam?: boolean
    collegeId?: boolean
    institute?: boolean
    academicProgramName?: boolean
    quota?: boolean
    seatType?: boolean
    gender?: boolean
    openRank?: boolean
    closeRank?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrcrOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "year" | "round" | "type" | "exam" | "collegeId" | "institute" | "academicProgramName" | "quota" | "seatType" | "gender" | "openRank" | "closeRank" | "createdAt" | "updatedAt", ExtArgs["result"]["orcr"]>
  export type OrcrInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }
  export type OrcrIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }
  export type OrcrIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }

  export type $OrcrPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orcr"
    objects: {
      college: Prisma.$CollegePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      year: number
      round: number
      type: string
      exam: string
      collegeId: string
      institute: string
      academicProgramName: string
      quota: string
      seatType: string
      gender: string
      openRank: number
      closeRank: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["orcr"]>
    composites: {}
  }

  type OrcrGetPayload<S extends boolean | null | undefined | OrcrDefaultArgs> = $Result.GetResult<Prisma.$OrcrPayload, S>

  type OrcrCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrcrFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrcrCountAggregateInputType | true
    }

  export interface OrcrDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orcr'], meta: { name: 'Orcr' } }
    /**
     * Find zero or one Orcr that matches the filter.
     * @param {OrcrFindUniqueArgs} args - Arguments to find a Orcr
     * @example
     * // Get one Orcr
     * const orcr = await prisma.orcr.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrcrFindUniqueArgs>(args: SelectSubset<T, OrcrFindUniqueArgs<ExtArgs>>): Prisma__OrcrClient<$Result.GetResult<Prisma.$OrcrPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orcr that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrcrFindUniqueOrThrowArgs} args - Arguments to find a Orcr
     * @example
     * // Get one Orcr
     * const orcr = await prisma.orcr.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrcrFindUniqueOrThrowArgs>(args: SelectSubset<T, OrcrFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrcrClient<$Result.GetResult<Prisma.$OrcrPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orcr that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrcrFindFirstArgs} args - Arguments to find a Orcr
     * @example
     * // Get one Orcr
     * const orcr = await prisma.orcr.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrcrFindFirstArgs>(args?: SelectSubset<T, OrcrFindFirstArgs<ExtArgs>>): Prisma__OrcrClient<$Result.GetResult<Prisma.$OrcrPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orcr that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrcrFindFirstOrThrowArgs} args - Arguments to find a Orcr
     * @example
     * // Get one Orcr
     * const orcr = await prisma.orcr.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrcrFindFirstOrThrowArgs>(args?: SelectSubset<T, OrcrFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrcrClient<$Result.GetResult<Prisma.$OrcrPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orcrs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrcrFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orcrs
     * const orcrs = await prisma.orcr.findMany()
     * 
     * // Get first 10 Orcrs
     * const orcrs = await prisma.orcr.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orcrWithIdOnly = await prisma.orcr.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrcrFindManyArgs>(args?: SelectSubset<T, OrcrFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrcrPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orcr.
     * @param {OrcrCreateArgs} args - Arguments to create a Orcr.
     * @example
     * // Create one Orcr
     * const Orcr = await prisma.orcr.create({
     *   data: {
     *     // ... data to create a Orcr
     *   }
     * })
     * 
     */
    create<T extends OrcrCreateArgs>(args: SelectSubset<T, OrcrCreateArgs<ExtArgs>>): Prisma__OrcrClient<$Result.GetResult<Prisma.$OrcrPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orcrs.
     * @param {OrcrCreateManyArgs} args - Arguments to create many Orcrs.
     * @example
     * // Create many Orcrs
     * const orcr = await prisma.orcr.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrcrCreateManyArgs>(args?: SelectSubset<T, OrcrCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orcrs and returns the data saved in the database.
     * @param {OrcrCreateManyAndReturnArgs} args - Arguments to create many Orcrs.
     * @example
     * // Create many Orcrs
     * const orcr = await prisma.orcr.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orcrs and only return the `id`
     * const orcrWithIdOnly = await prisma.orcr.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrcrCreateManyAndReturnArgs>(args?: SelectSubset<T, OrcrCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrcrPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orcr.
     * @param {OrcrDeleteArgs} args - Arguments to delete one Orcr.
     * @example
     * // Delete one Orcr
     * const Orcr = await prisma.orcr.delete({
     *   where: {
     *     // ... filter to delete one Orcr
     *   }
     * })
     * 
     */
    delete<T extends OrcrDeleteArgs>(args: SelectSubset<T, OrcrDeleteArgs<ExtArgs>>): Prisma__OrcrClient<$Result.GetResult<Prisma.$OrcrPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orcr.
     * @param {OrcrUpdateArgs} args - Arguments to update one Orcr.
     * @example
     * // Update one Orcr
     * const orcr = await prisma.orcr.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrcrUpdateArgs>(args: SelectSubset<T, OrcrUpdateArgs<ExtArgs>>): Prisma__OrcrClient<$Result.GetResult<Prisma.$OrcrPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orcrs.
     * @param {OrcrDeleteManyArgs} args - Arguments to filter Orcrs to delete.
     * @example
     * // Delete a few Orcrs
     * const { count } = await prisma.orcr.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrcrDeleteManyArgs>(args?: SelectSubset<T, OrcrDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orcrs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrcrUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orcrs
     * const orcr = await prisma.orcr.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrcrUpdateManyArgs>(args: SelectSubset<T, OrcrUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orcrs and returns the data updated in the database.
     * @param {OrcrUpdateManyAndReturnArgs} args - Arguments to update many Orcrs.
     * @example
     * // Update many Orcrs
     * const orcr = await prisma.orcr.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orcrs and only return the `id`
     * const orcrWithIdOnly = await prisma.orcr.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrcrUpdateManyAndReturnArgs>(args: SelectSubset<T, OrcrUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrcrPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orcr.
     * @param {OrcrUpsertArgs} args - Arguments to update or create a Orcr.
     * @example
     * // Update or create a Orcr
     * const orcr = await prisma.orcr.upsert({
     *   create: {
     *     // ... data to create a Orcr
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orcr we want to update
     *   }
     * })
     */
    upsert<T extends OrcrUpsertArgs>(args: SelectSubset<T, OrcrUpsertArgs<ExtArgs>>): Prisma__OrcrClient<$Result.GetResult<Prisma.$OrcrPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orcrs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrcrCountArgs} args - Arguments to filter Orcrs to count.
     * @example
     * // Count the number of Orcrs
     * const count = await prisma.orcr.count({
     *   where: {
     *     // ... the filter for the Orcrs we want to count
     *   }
     * })
    **/
    count<T extends OrcrCountArgs>(
      args?: Subset<T, OrcrCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrcrCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orcr.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrcrAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrcrAggregateArgs>(args: Subset<T, OrcrAggregateArgs>): Prisma.PrismaPromise<GetOrcrAggregateType<T>>

    /**
     * Group by Orcr.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrcrGroupByArgs} args - Group by arguments.
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
      T extends OrcrGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrcrGroupByArgs['orderBy'] }
        : { orderBy?: OrcrGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrcrGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrcrGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orcr model
   */
  readonly fields: OrcrFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orcr.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrcrClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    college<T extends CollegeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollegeDefaultArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Orcr model
   */
  interface OrcrFieldRefs {
    readonly id: FieldRef<"Orcr", 'String'>
    readonly year: FieldRef<"Orcr", 'Int'>
    readonly round: FieldRef<"Orcr", 'Int'>
    readonly type: FieldRef<"Orcr", 'String'>
    readonly exam: FieldRef<"Orcr", 'String'>
    readonly collegeId: FieldRef<"Orcr", 'String'>
    readonly institute: FieldRef<"Orcr", 'String'>
    readonly academicProgramName: FieldRef<"Orcr", 'String'>
    readonly quota: FieldRef<"Orcr", 'String'>
    readonly seatType: FieldRef<"Orcr", 'String'>
    readonly gender: FieldRef<"Orcr", 'String'>
    readonly openRank: FieldRef<"Orcr", 'Int'>
    readonly closeRank: FieldRef<"Orcr", 'Int'>
    readonly createdAt: FieldRef<"Orcr", 'DateTime'>
    readonly updatedAt: FieldRef<"Orcr", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Orcr findUnique
   */
  export type OrcrFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcr
     */
    select?: OrcrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcr
     */
    omit?: OrcrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcrInclude<ExtArgs> | null
    /**
     * Filter, which Orcr to fetch.
     */
    where: OrcrWhereUniqueInput
  }

  /**
   * Orcr findUniqueOrThrow
   */
  export type OrcrFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcr
     */
    select?: OrcrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcr
     */
    omit?: OrcrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcrInclude<ExtArgs> | null
    /**
     * Filter, which Orcr to fetch.
     */
    where: OrcrWhereUniqueInput
  }

  /**
   * Orcr findFirst
   */
  export type OrcrFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcr
     */
    select?: OrcrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcr
     */
    omit?: OrcrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcrInclude<ExtArgs> | null
    /**
     * Filter, which Orcr to fetch.
     */
    where?: OrcrWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orcrs to fetch.
     */
    orderBy?: OrcrOrderByWithRelationInput | OrcrOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orcrs.
     */
    cursor?: OrcrWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orcrs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orcrs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orcrs.
     */
    distinct?: OrcrScalarFieldEnum | OrcrScalarFieldEnum[]
  }

  /**
   * Orcr findFirstOrThrow
   */
  export type OrcrFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcr
     */
    select?: OrcrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcr
     */
    omit?: OrcrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcrInclude<ExtArgs> | null
    /**
     * Filter, which Orcr to fetch.
     */
    where?: OrcrWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orcrs to fetch.
     */
    orderBy?: OrcrOrderByWithRelationInput | OrcrOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orcrs.
     */
    cursor?: OrcrWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orcrs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orcrs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orcrs.
     */
    distinct?: OrcrScalarFieldEnum | OrcrScalarFieldEnum[]
  }

  /**
   * Orcr findMany
   */
  export type OrcrFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcr
     */
    select?: OrcrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcr
     */
    omit?: OrcrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcrInclude<ExtArgs> | null
    /**
     * Filter, which Orcrs to fetch.
     */
    where?: OrcrWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orcrs to fetch.
     */
    orderBy?: OrcrOrderByWithRelationInput | OrcrOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orcrs.
     */
    cursor?: OrcrWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orcrs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orcrs.
     */
    skip?: number
    distinct?: OrcrScalarFieldEnum | OrcrScalarFieldEnum[]
  }

  /**
   * Orcr create
   */
  export type OrcrCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcr
     */
    select?: OrcrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcr
     */
    omit?: OrcrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcrInclude<ExtArgs> | null
    /**
     * The data needed to create a Orcr.
     */
    data: XOR<OrcrCreateInput, OrcrUncheckedCreateInput>
  }

  /**
   * Orcr createMany
   */
  export type OrcrCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orcrs.
     */
    data: OrcrCreateManyInput | OrcrCreateManyInput[]
  }

  /**
   * Orcr createManyAndReturn
   */
  export type OrcrCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcr
     */
    select?: OrcrSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orcr
     */
    omit?: OrcrOmit<ExtArgs> | null
    /**
     * The data used to create many Orcrs.
     */
    data: OrcrCreateManyInput | OrcrCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcrIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orcr update
   */
  export type OrcrUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcr
     */
    select?: OrcrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcr
     */
    omit?: OrcrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcrInclude<ExtArgs> | null
    /**
     * The data needed to update a Orcr.
     */
    data: XOR<OrcrUpdateInput, OrcrUncheckedUpdateInput>
    /**
     * Choose, which Orcr to update.
     */
    where: OrcrWhereUniqueInput
  }

  /**
   * Orcr updateMany
   */
  export type OrcrUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orcrs.
     */
    data: XOR<OrcrUpdateManyMutationInput, OrcrUncheckedUpdateManyInput>
    /**
     * Filter which Orcrs to update
     */
    where?: OrcrWhereInput
    /**
     * Limit how many Orcrs to update.
     */
    limit?: number
  }

  /**
   * Orcr updateManyAndReturn
   */
  export type OrcrUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcr
     */
    select?: OrcrSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orcr
     */
    omit?: OrcrOmit<ExtArgs> | null
    /**
     * The data used to update Orcrs.
     */
    data: XOR<OrcrUpdateManyMutationInput, OrcrUncheckedUpdateManyInput>
    /**
     * Filter which Orcrs to update
     */
    where?: OrcrWhereInput
    /**
     * Limit how many Orcrs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcrIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orcr upsert
   */
  export type OrcrUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcr
     */
    select?: OrcrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcr
     */
    omit?: OrcrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcrInclude<ExtArgs> | null
    /**
     * The filter to search for the Orcr to update in case it exists.
     */
    where: OrcrWhereUniqueInput
    /**
     * In case the Orcr found by the `where` argument doesn't exist, create a new Orcr with this data.
     */
    create: XOR<OrcrCreateInput, OrcrUncheckedCreateInput>
    /**
     * In case the Orcr was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrcrUpdateInput, OrcrUncheckedUpdateInput>
  }

  /**
   * Orcr delete
   */
  export type OrcrDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcr
     */
    select?: OrcrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcr
     */
    omit?: OrcrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcrInclude<ExtArgs> | null
    /**
     * Filter which Orcr to delete.
     */
    where: OrcrWhereUniqueInput
  }

  /**
   * Orcr deleteMany
   */
  export type OrcrDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orcrs to delete
     */
    where?: OrcrWhereInput
    /**
     * Limit how many Orcrs to delete.
     */
    limit?: number
  }

  /**
   * Orcr without action
   */
  export type OrcrDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcr
     */
    select?: OrcrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcr
     */
    omit?: OrcrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcrInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    collegeId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    collegeId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    collegeId: number
    rating: number
    comment: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    collegeId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    collegeId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    collegeId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    collegeId: string
    rating: number
    comment: string
    createdAt: Date
    updatedAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    collegeId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    collegeId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    collegeId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    collegeId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "collegeId" | "rating" | "comment" | "createdAt" | "updatedAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      college: Prisma.$CollegePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      collegeId: string
      rating: number
      comment: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    college<T extends CollegeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollegeDefaultArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly collegeId: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model placement
   */

  export type AggregatePlacement = {
    _count: PlacementCountAggregateOutputType | null
    _avg: PlacementAvgAggregateOutputType | null
    _sum: PlacementSumAggregateOutputType | null
    _min: PlacementMinAggregateOutputType | null
    _max: PlacementMaxAggregateOutputType | null
  }

  export type PlacementAvgAggregateOutputType = {
    year: number | null
    totalGrads: number | null
    placed: number | null
    median: number | null
    higherEducation: number | null
  }

  export type PlacementSumAggregateOutputType = {
    year: number | null
    totalGrads: number | null
    placed: number | null
    median: number | null
    higherEducation: number | null
  }

  export type PlacementMinAggregateOutputType = {
    id: string | null
    year: number | null
    collegeId: string | null
    totalGrads: number | null
    placed: number | null
    median: number | null
    higherEducation: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlacementMaxAggregateOutputType = {
    id: string | null
    year: number | null
    collegeId: string | null
    totalGrads: number | null
    placed: number | null
    median: number | null
    higherEducation: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlacementCountAggregateOutputType = {
    id: number
    year: number
    collegeId: number
    totalGrads: number
    placed: number
    median: number
    higherEducation: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlacementAvgAggregateInputType = {
    year?: true
    totalGrads?: true
    placed?: true
    median?: true
    higherEducation?: true
  }

  export type PlacementSumAggregateInputType = {
    year?: true
    totalGrads?: true
    placed?: true
    median?: true
    higherEducation?: true
  }

  export type PlacementMinAggregateInputType = {
    id?: true
    year?: true
    collegeId?: true
    totalGrads?: true
    placed?: true
    median?: true
    higherEducation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlacementMaxAggregateInputType = {
    id?: true
    year?: true
    collegeId?: true
    totalGrads?: true
    placed?: true
    median?: true
    higherEducation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlacementCountAggregateInputType = {
    id?: true
    year?: true
    collegeId?: true
    totalGrads?: true
    placed?: true
    median?: true
    higherEducation?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlacementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which placement to aggregate.
     */
    where?: placementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of placements to fetch.
     */
    orderBy?: placementOrderByWithRelationInput | placementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: placementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` placements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` placements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned placements
    **/
    _count?: true | PlacementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlacementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlacementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlacementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlacementMaxAggregateInputType
  }

  export type GetPlacementAggregateType<T extends PlacementAggregateArgs> = {
        [P in keyof T & keyof AggregatePlacement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlacement[P]>
      : GetScalarType<T[P], AggregatePlacement[P]>
  }




  export type placementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: placementWhereInput
    orderBy?: placementOrderByWithAggregationInput | placementOrderByWithAggregationInput[]
    by: PlacementScalarFieldEnum[] | PlacementScalarFieldEnum
    having?: placementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlacementCountAggregateInputType | true
    _avg?: PlacementAvgAggregateInputType
    _sum?: PlacementSumAggregateInputType
    _min?: PlacementMinAggregateInputType
    _max?: PlacementMaxAggregateInputType
  }

  export type PlacementGroupByOutputType = {
    id: string
    year: number
    collegeId: string
    totalGrads: number
    placed: number
    median: number
    higherEducation: number
    createdAt: Date
    updatedAt: Date
    _count: PlacementCountAggregateOutputType | null
    _avg: PlacementAvgAggregateOutputType | null
    _sum: PlacementSumAggregateOutputType | null
    _min: PlacementMinAggregateOutputType | null
    _max: PlacementMaxAggregateOutputType | null
  }

  type GetPlacementGroupByPayload<T extends placementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlacementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlacementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlacementGroupByOutputType[P]>
            : GetScalarType<T[P], PlacementGroupByOutputType[P]>
        }
      >
    >


  export type placementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    collegeId?: boolean
    totalGrads?: boolean
    placed?: boolean
    median?: boolean
    higherEducation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["placement"]>

  export type placementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    collegeId?: boolean
    totalGrads?: boolean
    placed?: boolean
    median?: boolean
    higherEducation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["placement"]>

  export type placementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    collegeId?: boolean
    totalGrads?: boolean
    placed?: boolean
    median?: boolean
    higherEducation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["placement"]>

  export type placementSelectScalar = {
    id?: boolean
    year?: boolean
    collegeId?: boolean
    totalGrads?: boolean
    placed?: boolean
    median?: boolean
    higherEducation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type placementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "year" | "collegeId" | "totalGrads" | "placed" | "median" | "higherEducation" | "createdAt" | "updatedAt", ExtArgs["result"]["placement"]>
  export type placementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }
  export type placementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }
  export type placementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }

  export type $placementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "placement"
    objects: {
      college: Prisma.$CollegePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      year: number
      collegeId: string
      totalGrads: number
      placed: number
      median: number
      higherEducation: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["placement"]>
    composites: {}
  }

  type placementGetPayload<S extends boolean | null | undefined | placementDefaultArgs> = $Result.GetResult<Prisma.$placementPayload, S>

  type placementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<placementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlacementCountAggregateInputType | true
    }

  export interface placementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['placement'], meta: { name: 'placement' } }
    /**
     * Find zero or one Placement that matches the filter.
     * @param {placementFindUniqueArgs} args - Arguments to find a Placement
     * @example
     * // Get one Placement
     * const placement = await prisma.placement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends placementFindUniqueArgs>(args: SelectSubset<T, placementFindUniqueArgs<ExtArgs>>): Prisma__placementClient<$Result.GetResult<Prisma.$placementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Placement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {placementFindUniqueOrThrowArgs} args - Arguments to find a Placement
     * @example
     * // Get one Placement
     * const placement = await prisma.placement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends placementFindUniqueOrThrowArgs>(args: SelectSubset<T, placementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__placementClient<$Result.GetResult<Prisma.$placementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Placement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {placementFindFirstArgs} args - Arguments to find a Placement
     * @example
     * // Get one Placement
     * const placement = await prisma.placement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends placementFindFirstArgs>(args?: SelectSubset<T, placementFindFirstArgs<ExtArgs>>): Prisma__placementClient<$Result.GetResult<Prisma.$placementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Placement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {placementFindFirstOrThrowArgs} args - Arguments to find a Placement
     * @example
     * // Get one Placement
     * const placement = await prisma.placement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends placementFindFirstOrThrowArgs>(args?: SelectSubset<T, placementFindFirstOrThrowArgs<ExtArgs>>): Prisma__placementClient<$Result.GetResult<Prisma.$placementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Placements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {placementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Placements
     * const placements = await prisma.placement.findMany()
     * 
     * // Get first 10 Placements
     * const placements = await prisma.placement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const placementWithIdOnly = await prisma.placement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends placementFindManyArgs>(args?: SelectSubset<T, placementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$placementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Placement.
     * @param {placementCreateArgs} args - Arguments to create a Placement.
     * @example
     * // Create one Placement
     * const Placement = await prisma.placement.create({
     *   data: {
     *     // ... data to create a Placement
     *   }
     * })
     * 
     */
    create<T extends placementCreateArgs>(args: SelectSubset<T, placementCreateArgs<ExtArgs>>): Prisma__placementClient<$Result.GetResult<Prisma.$placementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Placements.
     * @param {placementCreateManyArgs} args - Arguments to create many Placements.
     * @example
     * // Create many Placements
     * const placement = await prisma.placement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends placementCreateManyArgs>(args?: SelectSubset<T, placementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Placements and returns the data saved in the database.
     * @param {placementCreateManyAndReturnArgs} args - Arguments to create many Placements.
     * @example
     * // Create many Placements
     * const placement = await prisma.placement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Placements and only return the `id`
     * const placementWithIdOnly = await prisma.placement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends placementCreateManyAndReturnArgs>(args?: SelectSubset<T, placementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$placementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Placement.
     * @param {placementDeleteArgs} args - Arguments to delete one Placement.
     * @example
     * // Delete one Placement
     * const Placement = await prisma.placement.delete({
     *   where: {
     *     // ... filter to delete one Placement
     *   }
     * })
     * 
     */
    delete<T extends placementDeleteArgs>(args: SelectSubset<T, placementDeleteArgs<ExtArgs>>): Prisma__placementClient<$Result.GetResult<Prisma.$placementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Placement.
     * @param {placementUpdateArgs} args - Arguments to update one Placement.
     * @example
     * // Update one Placement
     * const placement = await prisma.placement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends placementUpdateArgs>(args: SelectSubset<T, placementUpdateArgs<ExtArgs>>): Prisma__placementClient<$Result.GetResult<Prisma.$placementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Placements.
     * @param {placementDeleteManyArgs} args - Arguments to filter Placements to delete.
     * @example
     * // Delete a few Placements
     * const { count } = await prisma.placement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends placementDeleteManyArgs>(args?: SelectSubset<T, placementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Placements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {placementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Placements
     * const placement = await prisma.placement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends placementUpdateManyArgs>(args: SelectSubset<T, placementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Placements and returns the data updated in the database.
     * @param {placementUpdateManyAndReturnArgs} args - Arguments to update many Placements.
     * @example
     * // Update many Placements
     * const placement = await prisma.placement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Placements and only return the `id`
     * const placementWithIdOnly = await prisma.placement.updateManyAndReturn({
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
    updateManyAndReturn<T extends placementUpdateManyAndReturnArgs>(args: SelectSubset<T, placementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$placementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Placement.
     * @param {placementUpsertArgs} args - Arguments to update or create a Placement.
     * @example
     * // Update or create a Placement
     * const placement = await prisma.placement.upsert({
     *   create: {
     *     // ... data to create a Placement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Placement we want to update
     *   }
     * })
     */
    upsert<T extends placementUpsertArgs>(args: SelectSubset<T, placementUpsertArgs<ExtArgs>>): Prisma__placementClient<$Result.GetResult<Prisma.$placementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Placements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {placementCountArgs} args - Arguments to filter Placements to count.
     * @example
     * // Count the number of Placements
     * const count = await prisma.placement.count({
     *   where: {
     *     // ... the filter for the Placements we want to count
     *   }
     * })
    **/
    count<T extends placementCountArgs>(
      args?: Subset<T, placementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlacementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Placement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlacementAggregateArgs>(args: Subset<T, PlacementAggregateArgs>): Prisma.PrismaPromise<GetPlacementAggregateType<T>>

    /**
     * Group by Placement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {placementGroupByArgs} args - Group by arguments.
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
      T extends placementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: placementGroupByArgs['orderBy'] }
        : { orderBy?: placementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, placementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlacementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the placement model
   */
  readonly fields: placementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for placement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__placementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    college<T extends CollegeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollegeDefaultArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the placement model
   */
  interface placementFieldRefs {
    readonly id: FieldRef<"placement", 'String'>
    readonly year: FieldRef<"placement", 'Int'>
    readonly collegeId: FieldRef<"placement", 'String'>
    readonly totalGrads: FieldRef<"placement", 'Int'>
    readonly placed: FieldRef<"placement", 'Int'>
    readonly median: FieldRef<"placement", 'Int'>
    readonly higherEducation: FieldRef<"placement", 'Int'>
    readonly createdAt: FieldRef<"placement", 'DateTime'>
    readonly updatedAt: FieldRef<"placement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * placement findUnique
   */
  export type placementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the placement
     */
    select?: placementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the placement
     */
    omit?: placementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: placementInclude<ExtArgs> | null
    /**
     * Filter, which placement to fetch.
     */
    where: placementWhereUniqueInput
  }

  /**
   * placement findUniqueOrThrow
   */
  export type placementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the placement
     */
    select?: placementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the placement
     */
    omit?: placementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: placementInclude<ExtArgs> | null
    /**
     * Filter, which placement to fetch.
     */
    where: placementWhereUniqueInput
  }

  /**
   * placement findFirst
   */
  export type placementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the placement
     */
    select?: placementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the placement
     */
    omit?: placementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: placementInclude<ExtArgs> | null
    /**
     * Filter, which placement to fetch.
     */
    where?: placementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of placements to fetch.
     */
    orderBy?: placementOrderByWithRelationInput | placementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for placements.
     */
    cursor?: placementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` placements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` placements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of placements.
     */
    distinct?: PlacementScalarFieldEnum | PlacementScalarFieldEnum[]
  }

  /**
   * placement findFirstOrThrow
   */
  export type placementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the placement
     */
    select?: placementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the placement
     */
    omit?: placementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: placementInclude<ExtArgs> | null
    /**
     * Filter, which placement to fetch.
     */
    where?: placementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of placements to fetch.
     */
    orderBy?: placementOrderByWithRelationInput | placementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for placements.
     */
    cursor?: placementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` placements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` placements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of placements.
     */
    distinct?: PlacementScalarFieldEnum | PlacementScalarFieldEnum[]
  }

  /**
   * placement findMany
   */
  export type placementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the placement
     */
    select?: placementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the placement
     */
    omit?: placementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: placementInclude<ExtArgs> | null
    /**
     * Filter, which placements to fetch.
     */
    where?: placementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of placements to fetch.
     */
    orderBy?: placementOrderByWithRelationInput | placementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing placements.
     */
    cursor?: placementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` placements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` placements.
     */
    skip?: number
    distinct?: PlacementScalarFieldEnum | PlacementScalarFieldEnum[]
  }

  /**
   * placement create
   */
  export type placementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the placement
     */
    select?: placementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the placement
     */
    omit?: placementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: placementInclude<ExtArgs> | null
    /**
     * The data needed to create a placement.
     */
    data: XOR<placementCreateInput, placementUncheckedCreateInput>
  }

  /**
   * placement createMany
   */
  export type placementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many placements.
     */
    data: placementCreateManyInput | placementCreateManyInput[]
  }

  /**
   * placement createManyAndReturn
   */
  export type placementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the placement
     */
    select?: placementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the placement
     */
    omit?: placementOmit<ExtArgs> | null
    /**
     * The data used to create many placements.
     */
    data: placementCreateManyInput | placementCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: placementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * placement update
   */
  export type placementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the placement
     */
    select?: placementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the placement
     */
    omit?: placementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: placementInclude<ExtArgs> | null
    /**
     * The data needed to update a placement.
     */
    data: XOR<placementUpdateInput, placementUncheckedUpdateInput>
    /**
     * Choose, which placement to update.
     */
    where: placementWhereUniqueInput
  }

  /**
   * placement updateMany
   */
  export type placementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update placements.
     */
    data: XOR<placementUpdateManyMutationInput, placementUncheckedUpdateManyInput>
    /**
     * Filter which placements to update
     */
    where?: placementWhereInput
    /**
     * Limit how many placements to update.
     */
    limit?: number
  }

  /**
   * placement updateManyAndReturn
   */
  export type placementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the placement
     */
    select?: placementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the placement
     */
    omit?: placementOmit<ExtArgs> | null
    /**
     * The data used to update placements.
     */
    data: XOR<placementUpdateManyMutationInput, placementUncheckedUpdateManyInput>
    /**
     * Filter which placements to update
     */
    where?: placementWhereInput
    /**
     * Limit how many placements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: placementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * placement upsert
   */
  export type placementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the placement
     */
    select?: placementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the placement
     */
    omit?: placementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: placementInclude<ExtArgs> | null
    /**
     * The filter to search for the placement to update in case it exists.
     */
    where: placementWhereUniqueInput
    /**
     * In case the placement found by the `where` argument doesn't exist, create a new placement with this data.
     */
    create: XOR<placementCreateInput, placementUncheckedCreateInput>
    /**
     * In case the placement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<placementUpdateInput, placementUncheckedUpdateInput>
  }

  /**
   * placement delete
   */
  export type placementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the placement
     */
    select?: placementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the placement
     */
    omit?: placementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: placementInclude<ExtArgs> | null
    /**
     * Filter which placement to delete.
     */
    where: placementWhereUniqueInput
  }

  /**
   * placement deleteMany
   */
  export type placementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which placements to delete
     */
    where?: placementWhereInput
    /**
     * Limit how many placements to delete.
     */
    limit?: number
  }

  /**
   * placement without action
   */
  export type placementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the placement
     */
    select?: placementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the placement
     */
    omit?: placementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: placementInclude<ExtArgs> | null
  }


  /**
   * Model CollegeImage
   */

  export type AggregateCollegeImage = {
    _count: CollegeImageCountAggregateOutputType | null
    _min: CollegeImageMinAggregateOutputType | null
    _max: CollegeImageMaxAggregateOutputType | null
  }

  export type CollegeImageMinAggregateOutputType = {
    id: string | null
    collegeId: string | null
    url: string | null
    createdAt: Date | null
  }

  export type CollegeImageMaxAggregateOutputType = {
    id: string | null
    collegeId: string | null
    url: string | null
    createdAt: Date | null
  }

  export type CollegeImageCountAggregateOutputType = {
    id: number
    collegeId: number
    url: number
    createdAt: number
    _all: number
  }


  export type CollegeImageMinAggregateInputType = {
    id?: true
    collegeId?: true
    url?: true
    createdAt?: true
  }

  export type CollegeImageMaxAggregateInputType = {
    id?: true
    collegeId?: true
    url?: true
    createdAt?: true
  }

  export type CollegeImageCountAggregateInputType = {
    id?: true
    collegeId?: true
    url?: true
    createdAt?: true
    _all?: true
  }

  export type CollegeImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CollegeImage to aggregate.
     */
    where?: CollegeImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollegeImages to fetch.
     */
    orderBy?: CollegeImageOrderByWithRelationInput | CollegeImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollegeImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollegeImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollegeImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CollegeImages
    **/
    _count?: true | CollegeImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollegeImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollegeImageMaxAggregateInputType
  }

  export type GetCollegeImageAggregateType<T extends CollegeImageAggregateArgs> = {
        [P in keyof T & keyof AggregateCollegeImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollegeImage[P]>
      : GetScalarType<T[P], AggregateCollegeImage[P]>
  }




  export type CollegeImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollegeImageWhereInput
    orderBy?: CollegeImageOrderByWithAggregationInput | CollegeImageOrderByWithAggregationInput[]
    by: CollegeImageScalarFieldEnum[] | CollegeImageScalarFieldEnum
    having?: CollegeImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollegeImageCountAggregateInputType | true
    _min?: CollegeImageMinAggregateInputType
    _max?: CollegeImageMaxAggregateInputType
  }

  export type CollegeImageGroupByOutputType = {
    id: string
    collegeId: string
    url: string
    createdAt: Date
    _count: CollegeImageCountAggregateOutputType | null
    _min: CollegeImageMinAggregateOutputType | null
    _max: CollegeImageMaxAggregateOutputType | null
  }

  type GetCollegeImageGroupByPayload<T extends CollegeImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollegeImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollegeImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollegeImageGroupByOutputType[P]>
            : GetScalarType<T[P], CollegeImageGroupByOutputType[P]>
        }
      >
    >


  export type CollegeImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    collegeId?: boolean
    url?: boolean
    createdAt?: boolean
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collegeImage"]>

  export type CollegeImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    collegeId?: boolean
    url?: boolean
    createdAt?: boolean
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collegeImage"]>

  export type CollegeImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    collegeId?: boolean
    url?: boolean
    createdAt?: boolean
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collegeImage"]>

  export type CollegeImageSelectScalar = {
    id?: boolean
    collegeId?: boolean
    url?: boolean
    createdAt?: boolean
  }

  export type CollegeImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "collegeId" | "url" | "createdAt", ExtArgs["result"]["collegeImage"]>
  export type CollegeImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }
  export type CollegeImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }
  export type CollegeImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }

  export type $CollegeImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CollegeImage"
    objects: {
      college: Prisma.$CollegePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      collegeId: string
      url: string
      createdAt: Date
    }, ExtArgs["result"]["collegeImage"]>
    composites: {}
  }

  type CollegeImageGetPayload<S extends boolean | null | undefined | CollegeImageDefaultArgs> = $Result.GetResult<Prisma.$CollegeImagePayload, S>

  type CollegeImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollegeImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollegeImageCountAggregateInputType | true
    }

  export interface CollegeImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CollegeImage'], meta: { name: 'CollegeImage' } }
    /**
     * Find zero or one CollegeImage that matches the filter.
     * @param {CollegeImageFindUniqueArgs} args - Arguments to find a CollegeImage
     * @example
     * // Get one CollegeImage
     * const collegeImage = await prisma.collegeImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollegeImageFindUniqueArgs>(args: SelectSubset<T, CollegeImageFindUniqueArgs<ExtArgs>>): Prisma__CollegeImageClient<$Result.GetResult<Prisma.$CollegeImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CollegeImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollegeImageFindUniqueOrThrowArgs} args - Arguments to find a CollegeImage
     * @example
     * // Get one CollegeImage
     * const collegeImage = await prisma.collegeImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollegeImageFindUniqueOrThrowArgs>(args: SelectSubset<T, CollegeImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollegeImageClient<$Result.GetResult<Prisma.$CollegeImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CollegeImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeImageFindFirstArgs} args - Arguments to find a CollegeImage
     * @example
     * // Get one CollegeImage
     * const collegeImage = await prisma.collegeImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollegeImageFindFirstArgs>(args?: SelectSubset<T, CollegeImageFindFirstArgs<ExtArgs>>): Prisma__CollegeImageClient<$Result.GetResult<Prisma.$CollegeImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CollegeImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeImageFindFirstOrThrowArgs} args - Arguments to find a CollegeImage
     * @example
     * // Get one CollegeImage
     * const collegeImage = await prisma.collegeImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollegeImageFindFirstOrThrowArgs>(args?: SelectSubset<T, CollegeImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollegeImageClient<$Result.GetResult<Prisma.$CollegeImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CollegeImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CollegeImages
     * const collegeImages = await prisma.collegeImage.findMany()
     * 
     * // Get first 10 CollegeImages
     * const collegeImages = await prisma.collegeImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collegeImageWithIdOnly = await prisma.collegeImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollegeImageFindManyArgs>(args?: SelectSubset<T, CollegeImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegeImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CollegeImage.
     * @param {CollegeImageCreateArgs} args - Arguments to create a CollegeImage.
     * @example
     * // Create one CollegeImage
     * const CollegeImage = await prisma.collegeImage.create({
     *   data: {
     *     // ... data to create a CollegeImage
     *   }
     * })
     * 
     */
    create<T extends CollegeImageCreateArgs>(args: SelectSubset<T, CollegeImageCreateArgs<ExtArgs>>): Prisma__CollegeImageClient<$Result.GetResult<Prisma.$CollegeImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CollegeImages.
     * @param {CollegeImageCreateManyArgs} args - Arguments to create many CollegeImages.
     * @example
     * // Create many CollegeImages
     * const collegeImage = await prisma.collegeImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollegeImageCreateManyArgs>(args?: SelectSubset<T, CollegeImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CollegeImages and returns the data saved in the database.
     * @param {CollegeImageCreateManyAndReturnArgs} args - Arguments to create many CollegeImages.
     * @example
     * // Create many CollegeImages
     * const collegeImage = await prisma.collegeImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CollegeImages and only return the `id`
     * const collegeImageWithIdOnly = await prisma.collegeImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollegeImageCreateManyAndReturnArgs>(args?: SelectSubset<T, CollegeImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegeImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CollegeImage.
     * @param {CollegeImageDeleteArgs} args - Arguments to delete one CollegeImage.
     * @example
     * // Delete one CollegeImage
     * const CollegeImage = await prisma.collegeImage.delete({
     *   where: {
     *     // ... filter to delete one CollegeImage
     *   }
     * })
     * 
     */
    delete<T extends CollegeImageDeleteArgs>(args: SelectSubset<T, CollegeImageDeleteArgs<ExtArgs>>): Prisma__CollegeImageClient<$Result.GetResult<Prisma.$CollegeImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CollegeImage.
     * @param {CollegeImageUpdateArgs} args - Arguments to update one CollegeImage.
     * @example
     * // Update one CollegeImage
     * const collegeImage = await prisma.collegeImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollegeImageUpdateArgs>(args: SelectSubset<T, CollegeImageUpdateArgs<ExtArgs>>): Prisma__CollegeImageClient<$Result.GetResult<Prisma.$CollegeImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CollegeImages.
     * @param {CollegeImageDeleteManyArgs} args - Arguments to filter CollegeImages to delete.
     * @example
     * // Delete a few CollegeImages
     * const { count } = await prisma.collegeImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollegeImageDeleteManyArgs>(args?: SelectSubset<T, CollegeImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CollegeImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CollegeImages
     * const collegeImage = await prisma.collegeImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollegeImageUpdateManyArgs>(args: SelectSubset<T, CollegeImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CollegeImages and returns the data updated in the database.
     * @param {CollegeImageUpdateManyAndReturnArgs} args - Arguments to update many CollegeImages.
     * @example
     * // Update many CollegeImages
     * const collegeImage = await prisma.collegeImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CollegeImages and only return the `id`
     * const collegeImageWithIdOnly = await prisma.collegeImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends CollegeImageUpdateManyAndReturnArgs>(args: SelectSubset<T, CollegeImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegeImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CollegeImage.
     * @param {CollegeImageUpsertArgs} args - Arguments to update or create a CollegeImage.
     * @example
     * // Update or create a CollegeImage
     * const collegeImage = await prisma.collegeImage.upsert({
     *   create: {
     *     // ... data to create a CollegeImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CollegeImage we want to update
     *   }
     * })
     */
    upsert<T extends CollegeImageUpsertArgs>(args: SelectSubset<T, CollegeImageUpsertArgs<ExtArgs>>): Prisma__CollegeImageClient<$Result.GetResult<Prisma.$CollegeImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CollegeImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeImageCountArgs} args - Arguments to filter CollegeImages to count.
     * @example
     * // Count the number of CollegeImages
     * const count = await prisma.collegeImage.count({
     *   where: {
     *     // ... the filter for the CollegeImages we want to count
     *   }
     * })
    **/
    count<T extends CollegeImageCountArgs>(
      args?: Subset<T, CollegeImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollegeImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CollegeImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CollegeImageAggregateArgs>(args: Subset<T, CollegeImageAggregateArgs>): Prisma.PrismaPromise<GetCollegeImageAggregateType<T>>

    /**
     * Group by CollegeImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeImageGroupByArgs} args - Group by arguments.
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
      T extends CollegeImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollegeImageGroupByArgs['orderBy'] }
        : { orderBy?: CollegeImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CollegeImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollegeImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CollegeImage model
   */
  readonly fields: CollegeImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CollegeImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollegeImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    college<T extends CollegeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollegeDefaultArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CollegeImage model
   */
  interface CollegeImageFieldRefs {
    readonly id: FieldRef<"CollegeImage", 'String'>
    readonly collegeId: FieldRef<"CollegeImage", 'String'>
    readonly url: FieldRef<"CollegeImage", 'String'>
    readonly createdAt: FieldRef<"CollegeImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CollegeImage findUnique
   */
  export type CollegeImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeImage
     */
    select?: CollegeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeImage
     */
    omit?: CollegeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeImageInclude<ExtArgs> | null
    /**
     * Filter, which CollegeImage to fetch.
     */
    where: CollegeImageWhereUniqueInput
  }

  /**
   * CollegeImage findUniqueOrThrow
   */
  export type CollegeImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeImage
     */
    select?: CollegeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeImage
     */
    omit?: CollegeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeImageInclude<ExtArgs> | null
    /**
     * Filter, which CollegeImage to fetch.
     */
    where: CollegeImageWhereUniqueInput
  }

  /**
   * CollegeImage findFirst
   */
  export type CollegeImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeImage
     */
    select?: CollegeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeImage
     */
    omit?: CollegeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeImageInclude<ExtArgs> | null
    /**
     * Filter, which CollegeImage to fetch.
     */
    where?: CollegeImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollegeImages to fetch.
     */
    orderBy?: CollegeImageOrderByWithRelationInput | CollegeImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollegeImages.
     */
    cursor?: CollegeImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollegeImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollegeImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollegeImages.
     */
    distinct?: CollegeImageScalarFieldEnum | CollegeImageScalarFieldEnum[]
  }

  /**
   * CollegeImage findFirstOrThrow
   */
  export type CollegeImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeImage
     */
    select?: CollegeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeImage
     */
    omit?: CollegeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeImageInclude<ExtArgs> | null
    /**
     * Filter, which CollegeImage to fetch.
     */
    where?: CollegeImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollegeImages to fetch.
     */
    orderBy?: CollegeImageOrderByWithRelationInput | CollegeImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollegeImages.
     */
    cursor?: CollegeImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollegeImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollegeImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollegeImages.
     */
    distinct?: CollegeImageScalarFieldEnum | CollegeImageScalarFieldEnum[]
  }

  /**
   * CollegeImage findMany
   */
  export type CollegeImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeImage
     */
    select?: CollegeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeImage
     */
    omit?: CollegeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeImageInclude<ExtArgs> | null
    /**
     * Filter, which CollegeImages to fetch.
     */
    where?: CollegeImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollegeImages to fetch.
     */
    orderBy?: CollegeImageOrderByWithRelationInput | CollegeImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CollegeImages.
     */
    cursor?: CollegeImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollegeImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollegeImages.
     */
    skip?: number
    distinct?: CollegeImageScalarFieldEnum | CollegeImageScalarFieldEnum[]
  }

  /**
   * CollegeImage create
   */
  export type CollegeImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeImage
     */
    select?: CollegeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeImage
     */
    omit?: CollegeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeImageInclude<ExtArgs> | null
    /**
     * The data needed to create a CollegeImage.
     */
    data: XOR<CollegeImageCreateInput, CollegeImageUncheckedCreateInput>
  }

  /**
   * CollegeImage createMany
   */
  export type CollegeImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CollegeImages.
     */
    data: CollegeImageCreateManyInput | CollegeImageCreateManyInput[]
  }

  /**
   * CollegeImage createManyAndReturn
   */
  export type CollegeImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeImage
     */
    select?: CollegeImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeImage
     */
    omit?: CollegeImageOmit<ExtArgs> | null
    /**
     * The data used to create many CollegeImages.
     */
    data: CollegeImageCreateManyInput | CollegeImageCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CollegeImage update
   */
  export type CollegeImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeImage
     */
    select?: CollegeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeImage
     */
    omit?: CollegeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeImageInclude<ExtArgs> | null
    /**
     * The data needed to update a CollegeImage.
     */
    data: XOR<CollegeImageUpdateInput, CollegeImageUncheckedUpdateInput>
    /**
     * Choose, which CollegeImage to update.
     */
    where: CollegeImageWhereUniqueInput
  }

  /**
   * CollegeImage updateMany
   */
  export type CollegeImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CollegeImages.
     */
    data: XOR<CollegeImageUpdateManyMutationInput, CollegeImageUncheckedUpdateManyInput>
    /**
     * Filter which CollegeImages to update
     */
    where?: CollegeImageWhereInput
    /**
     * Limit how many CollegeImages to update.
     */
    limit?: number
  }

  /**
   * CollegeImage updateManyAndReturn
   */
  export type CollegeImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeImage
     */
    select?: CollegeImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeImage
     */
    omit?: CollegeImageOmit<ExtArgs> | null
    /**
     * The data used to update CollegeImages.
     */
    data: XOR<CollegeImageUpdateManyMutationInput, CollegeImageUncheckedUpdateManyInput>
    /**
     * Filter which CollegeImages to update
     */
    where?: CollegeImageWhereInput
    /**
     * Limit how many CollegeImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CollegeImage upsert
   */
  export type CollegeImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeImage
     */
    select?: CollegeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeImage
     */
    omit?: CollegeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeImageInclude<ExtArgs> | null
    /**
     * The filter to search for the CollegeImage to update in case it exists.
     */
    where: CollegeImageWhereUniqueInput
    /**
     * In case the CollegeImage found by the `where` argument doesn't exist, create a new CollegeImage with this data.
     */
    create: XOR<CollegeImageCreateInput, CollegeImageUncheckedCreateInput>
    /**
     * In case the CollegeImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollegeImageUpdateInput, CollegeImageUncheckedUpdateInput>
  }

  /**
   * CollegeImage delete
   */
  export type CollegeImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeImage
     */
    select?: CollegeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeImage
     */
    omit?: CollegeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeImageInclude<ExtArgs> | null
    /**
     * Filter which CollegeImage to delete.
     */
    where: CollegeImageWhereUniqueInput
  }

  /**
   * CollegeImage deleteMany
   */
  export type CollegeImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CollegeImages to delete
     */
    where?: CollegeImageWhereInput
    /**
     * Limit how many CollegeImages to delete.
     */
    limit?: number
  }

  /**
   * CollegeImage without action
   */
  export type CollegeImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeImage
     */
    select?: CollegeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeImage
     */
    omit?: CollegeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeImageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CollegeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    bongs: 'bongs',
    coverImage: 'coverImage',
    location: 'location',
    officialWebsite: 'officialWebsite',
    totalStudents: 'totalStudents',
    maleStudents: 'maleStudents',
    femaleStudents: 'femaleStudents',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    nirf: 'nirf',
    moderated: 'moderated',
    collegeType: 'collegeType'
  };

  export type CollegeScalarFieldEnum = (typeof CollegeScalarFieldEnum)[keyof typeof CollegeScalarFieldEnum]


  export const OrcrScalarFieldEnum: {
    id: 'id',
    year: 'year',
    round: 'round',
    type: 'type',
    exam: 'exam',
    collegeId: 'collegeId',
    institute: 'institute',
    academicProgramName: 'academicProgramName',
    quota: 'quota',
    seatType: 'seatType',
    gender: 'gender',
    openRank: 'openRank',
    closeRank: 'closeRank',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrcrScalarFieldEnum = (typeof OrcrScalarFieldEnum)[keyof typeof OrcrScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    collegeId: 'collegeId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const PlacementScalarFieldEnum: {
    id: 'id',
    year: 'year',
    collegeId: 'collegeId',
    totalGrads: 'totalGrads',
    placed: 'placed',
    median: 'median',
    higherEducation: 'higherEducation',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlacementScalarFieldEnum = (typeof PlacementScalarFieldEnum)[keyof typeof PlacementScalarFieldEnum]


  export const CollegeImageScalarFieldEnum: {
    id: 'id',
    collegeId: 'collegeId',
    url: 'url',
    createdAt: 'createdAt'
  };

  export type CollegeImageScalarFieldEnum = (typeof CollegeImageScalarFieldEnum)[keyof typeof CollegeImageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CollegeWhereInput = {
    AND?: CollegeWhereInput | CollegeWhereInput[]
    OR?: CollegeWhereInput[]
    NOT?: CollegeWhereInput | CollegeWhereInput[]
    id?: StringFilter<"College"> | string
    name?: StringFilter<"College"> | string
    bongs?: IntFilter<"College"> | number
    coverImage?: StringNullableFilter<"College"> | string | null
    location?: StringNullableFilter<"College"> | string | null
    officialWebsite?: StringNullableFilter<"College"> | string | null
    totalStudents?: IntNullableFilter<"College"> | number | null
    maleStudents?: IntNullableFilter<"College"> | number | null
    femaleStudents?: IntNullableFilter<"College"> | number | null
    createdAt?: DateTimeFilter<"College"> | Date | string
    updatedAt?: DateTimeFilter<"College"> | Date | string
    nirf?: IntNullableFilter<"College"> | number | null
    moderated?: BoolFilter<"College"> | boolean
    collegeType?: StringNullableFilter<"College"> | string | null
    images?: CollegeImageListRelationFilter
    orcrs?: OrcrListRelationFilter
    reviews?: ReviewListRelationFilter
    placements?: PlacementListRelationFilter
  }

  export type CollegeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    bongs?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    officialWebsite?: SortOrderInput | SortOrder
    totalStudents?: SortOrderInput | SortOrder
    maleStudents?: SortOrderInput | SortOrder
    femaleStudents?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nirf?: SortOrderInput | SortOrder
    moderated?: SortOrder
    collegeType?: SortOrderInput | SortOrder
    images?: CollegeImageOrderByRelationAggregateInput
    orcrs?: OrcrOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    placements?: placementOrderByRelationAggregateInput
  }

  export type CollegeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CollegeWhereInput | CollegeWhereInput[]
    OR?: CollegeWhereInput[]
    NOT?: CollegeWhereInput | CollegeWhereInput[]
    bongs?: IntFilter<"College"> | number
    coverImage?: StringNullableFilter<"College"> | string | null
    location?: StringNullableFilter<"College"> | string | null
    officialWebsite?: StringNullableFilter<"College"> | string | null
    totalStudents?: IntNullableFilter<"College"> | number | null
    maleStudents?: IntNullableFilter<"College"> | number | null
    femaleStudents?: IntNullableFilter<"College"> | number | null
    createdAt?: DateTimeFilter<"College"> | Date | string
    updatedAt?: DateTimeFilter<"College"> | Date | string
    nirf?: IntNullableFilter<"College"> | number | null
    moderated?: BoolFilter<"College"> | boolean
    collegeType?: StringNullableFilter<"College"> | string | null
    images?: CollegeImageListRelationFilter
    orcrs?: OrcrListRelationFilter
    reviews?: ReviewListRelationFilter
    placements?: PlacementListRelationFilter
  }, "id" | "name">

  export type CollegeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    bongs?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    officialWebsite?: SortOrderInput | SortOrder
    totalStudents?: SortOrderInput | SortOrder
    maleStudents?: SortOrderInput | SortOrder
    femaleStudents?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nirf?: SortOrderInput | SortOrder
    moderated?: SortOrder
    collegeType?: SortOrderInput | SortOrder
    _count?: CollegeCountOrderByAggregateInput
    _avg?: CollegeAvgOrderByAggregateInput
    _max?: CollegeMaxOrderByAggregateInput
    _min?: CollegeMinOrderByAggregateInput
    _sum?: CollegeSumOrderByAggregateInput
  }

  export type CollegeScalarWhereWithAggregatesInput = {
    AND?: CollegeScalarWhereWithAggregatesInput | CollegeScalarWhereWithAggregatesInput[]
    OR?: CollegeScalarWhereWithAggregatesInput[]
    NOT?: CollegeScalarWhereWithAggregatesInput | CollegeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"College"> | string
    name?: StringWithAggregatesFilter<"College"> | string
    bongs?: IntWithAggregatesFilter<"College"> | number
    coverImage?: StringNullableWithAggregatesFilter<"College"> | string | null
    location?: StringNullableWithAggregatesFilter<"College"> | string | null
    officialWebsite?: StringNullableWithAggregatesFilter<"College"> | string | null
    totalStudents?: IntNullableWithAggregatesFilter<"College"> | number | null
    maleStudents?: IntNullableWithAggregatesFilter<"College"> | number | null
    femaleStudents?: IntNullableWithAggregatesFilter<"College"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"College"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"College"> | Date | string
    nirf?: IntNullableWithAggregatesFilter<"College"> | number | null
    moderated?: BoolWithAggregatesFilter<"College"> | boolean
    collegeType?: StringNullableWithAggregatesFilter<"College"> | string | null
  }

  export type OrcrWhereInput = {
    AND?: OrcrWhereInput | OrcrWhereInput[]
    OR?: OrcrWhereInput[]
    NOT?: OrcrWhereInput | OrcrWhereInput[]
    id?: StringFilter<"Orcr"> | string
    year?: IntFilter<"Orcr"> | number
    round?: IntFilter<"Orcr"> | number
    type?: StringFilter<"Orcr"> | string
    exam?: StringFilter<"Orcr"> | string
    collegeId?: StringFilter<"Orcr"> | string
    institute?: StringFilter<"Orcr"> | string
    academicProgramName?: StringFilter<"Orcr"> | string
    quota?: StringFilter<"Orcr"> | string
    seatType?: StringFilter<"Orcr"> | string
    gender?: StringFilter<"Orcr"> | string
    openRank?: IntFilter<"Orcr"> | number
    closeRank?: IntFilter<"Orcr"> | number
    createdAt?: DateTimeFilter<"Orcr"> | Date | string
    updatedAt?: DateTimeFilter<"Orcr"> | Date | string
    college?: XOR<CollegeScalarRelationFilter, CollegeWhereInput>
  }

  export type OrcrOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    round?: SortOrder
    type?: SortOrder
    exam?: SortOrder
    collegeId?: SortOrder
    institute?: SortOrder
    academicProgramName?: SortOrder
    quota?: SortOrder
    seatType?: SortOrder
    gender?: SortOrder
    openRank?: SortOrder
    closeRank?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    college?: CollegeOrderByWithRelationInput
  }

  export type OrcrWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrcrWhereInput | OrcrWhereInput[]
    OR?: OrcrWhereInput[]
    NOT?: OrcrWhereInput | OrcrWhereInput[]
    year?: IntFilter<"Orcr"> | number
    round?: IntFilter<"Orcr"> | number
    type?: StringFilter<"Orcr"> | string
    exam?: StringFilter<"Orcr"> | string
    collegeId?: StringFilter<"Orcr"> | string
    institute?: StringFilter<"Orcr"> | string
    academicProgramName?: StringFilter<"Orcr"> | string
    quota?: StringFilter<"Orcr"> | string
    seatType?: StringFilter<"Orcr"> | string
    gender?: StringFilter<"Orcr"> | string
    openRank?: IntFilter<"Orcr"> | number
    closeRank?: IntFilter<"Orcr"> | number
    createdAt?: DateTimeFilter<"Orcr"> | Date | string
    updatedAt?: DateTimeFilter<"Orcr"> | Date | string
    college?: XOR<CollegeScalarRelationFilter, CollegeWhereInput>
  }, "id">

  export type OrcrOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    round?: SortOrder
    type?: SortOrder
    exam?: SortOrder
    collegeId?: SortOrder
    institute?: SortOrder
    academicProgramName?: SortOrder
    quota?: SortOrder
    seatType?: SortOrder
    gender?: SortOrder
    openRank?: SortOrder
    closeRank?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrcrCountOrderByAggregateInput
    _avg?: OrcrAvgOrderByAggregateInput
    _max?: OrcrMaxOrderByAggregateInput
    _min?: OrcrMinOrderByAggregateInput
    _sum?: OrcrSumOrderByAggregateInput
  }

  export type OrcrScalarWhereWithAggregatesInput = {
    AND?: OrcrScalarWhereWithAggregatesInput | OrcrScalarWhereWithAggregatesInput[]
    OR?: OrcrScalarWhereWithAggregatesInput[]
    NOT?: OrcrScalarWhereWithAggregatesInput | OrcrScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Orcr"> | string
    year?: IntWithAggregatesFilter<"Orcr"> | number
    round?: IntWithAggregatesFilter<"Orcr"> | number
    type?: StringWithAggregatesFilter<"Orcr"> | string
    exam?: StringWithAggregatesFilter<"Orcr"> | string
    collegeId?: StringWithAggregatesFilter<"Orcr"> | string
    institute?: StringWithAggregatesFilter<"Orcr"> | string
    academicProgramName?: StringWithAggregatesFilter<"Orcr"> | string
    quota?: StringWithAggregatesFilter<"Orcr"> | string
    seatType?: StringWithAggregatesFilter<"Orcr"> | string
    gender?: StringWithAggregatesFilter<"Orcr"> | string
    openRank?: IntWithAggregatesFilter<"Orcr"> | number
    closeRank?: IntWithAggregatesFilter<"Orcr"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Orcr"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Orcr"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    collegeId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    college?: XOR<CollegeScalarRelationFilter, CollegeWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    collegeId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    college?: CollegeOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    collegeId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    college?: XOR<CollegeScalarRelationFilter, CollegeWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    collegeId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    collegeId?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringWithAggregatesFilter<"Review"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type placementWhereInput = {
    AND?: placementWhereInput | placementWhereInput[]
    OR?: placementWhereInput[]
    NOT?: placementWhereInput | placementWhereInput[]
    id?: StringFilter<"placement"> | string
    year?: IntFilter<"placement"> | number
    collegeId?: StringFilter<"placement"> | string
    totalGrads?: IntFilter<"placement"> | number
    placed?: IntFilter<"placement"> | number
    median?: IntFilter<"placement"> | number
    higherEducation?: IntFilter<"placement"> | number
    createdAt?: DateTimeFilter<"placement"> | Date | string
    updatedAt?: DateTimeFilter<"placement"> | Date | string
    college?: XOR<CollegeScalarRelationFilter, CollegeWhereInput>
  }

  export type placementOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    collegeId?: SortOrder
    totalGrads?: SortOrder
    placed?: SortOrder
    median?: SortOrder
    higherEducation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    college?: CollegeOrderByWithRelationInput
  }

  export type placementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: placementWhereInput | placementWhereInput[]
    OR?: placementWhereInput[]
    NOT?: placementWhereInput | placementWhereInput[]
    year?: IntFilter<"placement"> | number
    collegeId?: StringFilter<"placement"> | string
    totalGrads?: IntFilter<"placement"> | number
    placed?: IntFilter<"placement"> | number
    median?: IntFilter<"placement"> | number
    higherEducation?: IntFilter<"placement"> | number
    createdAt?: DateTimeFilter<"placement"> | Date | string
    updatedAt?: DateTimeFilter<"placement"> | Date | string
    college?: XOR<CollegeScalarRelationFilter, CollegeWhereInput>
  }, "id">

  export type placementOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    collegeId?: SortOrder
    totalGrads?: SortOrder
    placed?: SortOrder
    median?: SortOrder
    higherEducation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: placementCountOrderByAggregateInput
    _avg?: placementAvgOrderByAggregateInput
    _max?: placementMaxOrderByAggregateInput
    _min?: placementMinOrderByAggregateInput
    _sum?: placementSumOrderByAggregateInput
  }

  export type placementScalarWhereWithAggregatesInput = {
    AND?: placementScalarWhereWithAggregatesInput | placementScalarWhereWithAggregatesInput[]
    OR?: placementScalarWhereWithAggregatesInput[]
    NOT?: placementScalarWhereWithAggregatesInput | placementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"placement"> | string
    year?: IntWithAggregatesFilter<"placement"> | number
    collegeId?: StringWithAggregatesFilter<"placement"> | string
    totalGrads?: IntWithAggregatesFilter<"placement"> | number
    placed?: IntWithAggregatesFilter<"placement"> | number
    median?: IntWithAggregatesFilter<"placement"> | number
    higherEducation?: IntWithAggregatesFilter<"placement"> | number
    createdAt?: DateTimeWithAggregatesFilter<"placement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"placement"> | Date | string
  }

  export type CollegeImageWhereInput = {
    AND?: CollegeImageWhereInput | CollegeImageWhereInput[]
    OR?: CollegeImageWhereInput[]
    NOT?: CollegeImageWhereInput | CollegeImageWhereInput[]
    id?: StringFilter<"CollegeImage"> | string
    collegeId?: StringFilter<"CollegeImage"> | string
    url?: StringFilter<"CollegeImage"> | string
    createdAt?: DateTimeFilter<"CollegeImage"> | Date | string
    college?: XOR<CollegeScalarRelationFilter, CollegeWhereInput>
  }

  export type CollegeImageOrderByWithRelationInput = {
    id?: SortOrder
    collegeId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    college?: CollegeOrderByWithRelationInput
  }

  export type CollegeImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CollegeImageWhereInput | CollegeImageWhereInput[]
    OR?: CollegeImageWhereInput[]
    NOT?: CollegeImageWhereInput | CollegeImageWhereInput[]
    collegeId?: StringFilter<"CollegeImage"> | string
    url?: StringFilter<"CollegeImage"> | string
    createdAt?: DateTimeFilter<"CollegeImage"> | Date | string
    college?: XOR<CollegeScalarRelationFilter, CollegeWhereInput>
  }, "id">

  export type CollegeImageOrderByWithAggregationInput = {
    id?: SortOrder
    collegeId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    _count?: CollegeImageCountOrderByAggregateInput
    _max?: CollegeImageMaxOrderByAggregateInput
    _min?: CollegeImageMinOrderByAggregateInput
  }

  export type CollegeImageScalarWhereWithAggregatesInput = {
    AND?: CollegeImageScalarWhereWithAggregatesInput | CollegeImageScalarWhereWithAggregatesInput[]
    OR?: CollegeImageScalarWhereWithAggregatesInput[]
    NOT?: CollegeImageScalarWhereWithAggregatesInput | CollegeImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CollegeImage"> | string
    collegeId?: StringWithAggregatesFilter<"CollegeImage"> | string
    url?: StringWithAggregatesFilter<"CollegeImage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CollegeImage"> | Date | string
  }

  export type CollegeCreateInput = {
    id?: string
    name: string
    bongs?: number
    coverImage?: string | null
    location?: string | null
    officialWebsite?: string | null
    totalStudents?: number | null
    maleStudents?: number | null
    femaleStudents?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nirf?: number | null
    moderated?: boolean
    collegeType?: string | null
    images?: CollegeImageCreateNestedManyWithoutCollegeInput
    orcrs?: OrcrCreateNestedManyWithoutCollegeInput
    reviews?: ReviewCreateNestedManyWithoutCollegeInput
    placements?: placementCreateNestedManyWithoutCollegeInput
  }

  export type CollegeUncheckedCreateInput = {
    id?: string
    name: string
    bongs?: number
    coverImage?: string | null
    location?: string | null
    officialWebsite?: string | null
    totalStudents?: number | null
    maleStudents?: number | null
    femaleStudents?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nirf?: number | null
    moderated?: boolean
    collegeType?: string | null
    images?: CollegeImageUncheckedCreateNestedManyWithoutCollegeInput
    orcrs?: OrcrUncheckedCreateNestedManyWithoutCollegeInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutCollegeInput
    placements?: placementUncheckedCreateNestedManyWithoutCollegeInput
  }

  export type CollegeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bongs?: IntFieldUpdateOperationsInput | number
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    officialWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    totalStudents?: NullableIntFieldUpdateOperationsInput | number | null
    maleStudents?: NullableIntFieldUpdateOperationsInput | number | null
    femaleStudents?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nirf?: NullableIntFieldUpdateOperationsInput | number | null
    moderated?: BoolFieldUpdateOperationsInput | boolean
    collegeType?: NullableStringFieldUpdateOperationsInput | string | null
    images?: CollegeImageUpdateManyWithoutCollegeNestedInput
    orcrs?: OrcrUpdateManyWithoutCollegeNestedInput
    reviews?: ReviewUpdateManyWithoutCollegeNestedInput
    placements?: placementUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bongs?: IntFieldUpdateOperationsInput | number
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    officialWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    totalStudents?: NullableIntFieldUpdateOperationsInput | number | null
    maleStudents?: NullableIntFieldUpdateOperationsInput | number | null
    femaleStudents?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nirf?: NullableIntFieldUpdateOperationsInput | number | null
    moderated?: BoolFieldUpdateOperationsInput | boolean
    collegeType?: NullableStringFieldUpdateOperationsInput | string | null
    images?: CollegeImageUncheckedUpdateManyWithoutCollegeNestedInput
    orcrs?: OrcrUncheckedUpdateManyWithoutCollegeNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutCollegeNestedInput
    placements?: placementUncheckedUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeCreateManyInput = {
    id?: string
    name: string
    bongs?: number
    coverImage?: string | null
    location?: string | null
    officialWebsite?: string | null
    totalStudents?: number | null
    maleStudents?: number | null
    femaleStudents?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nirf?: number | null
    moderated?: boolean
    collegeType?: string | null
  }

  export type CollegeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bongs?: IntFieldUpdateOperationsInput | number
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    officialWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    totalStudents?: NullableIntFieldUpdateOperationsInput | number | null
    maleStudents?: NullableIntFieldUpdateOperationsInput | number | null
    femaleStudents?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nirf?: NullableIntFieldUpdateOperationsInput | number | null
    moderated?: BoolFieldUpdateOperationsInput | boolean
    collegeType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CollegeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bongs?: IntFieldUpdateOperationsInput | number
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    officialWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    totalStudents?: NullableIntFieldUpdateOperationsInput | number | null
    maleStudents?: NullableIntFieldUpdateOperationsInput | number | null
    femaleStudents?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nirf?: NullableIntFieldUpdateOperationsInput | number | null
    moderated?: BoolFieldUpdateOperationsInput | boolean
    collegeType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrcrCreateInput = {
    id?: string
    year: number
    round: number
    type: string
    exam: string
    institute: string
    academicProgramName: string
    quota: string
    seatType: string
    gender: string
    openRank: number
    closeRank: number
    createdAt?: Date | string
    updatedAt?: Date | string
    college: CollegeCreateNestedOneWithoutOrcrsInput
  }

  export type OrcrUncheckedCreateInput = {
    id?: string
    year: number
    round: number
    type: string
    exam: string
    collegeId: string
    institute: string
    academicProgramName: string
    quota: string
    seatType: string
    gender: string
    openRank: number
    closeRank: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrcrUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    round?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    exam?: StringFieldUpdateOperationsInput | string
    institute?: StringFieldUpdateOperationsInput | string
    academicProgramName?: StringFieldUpdateOperationsInput | string
    quota?: StringFieldUpdateOperationsInput | string
    seatType?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    openRank?: IntFieldUpdateOperationsInput | number
    closeRank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    college?: CollegeUpdateOneRequiredWithoutOrcrsNestedInput
  }

  export type OrcrUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    round?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    exam?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
    institute?: StringFieldUpdateOperationsInput | string
    academicProgramName?: StringFieldUpdateOperationsInput | string
    quota?: StringFieldUpdateOperationsInput | string
    seatType?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    openRank?: IntFieldUpdateOperationsInput | number
    closeRank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrcrCreateManyInput = {
    id?: string
    year: number
    round: number
    type: string
    exam: string
    collegeId: string
    institute: string
    academicProgramName: string
    quota: string
    seatType: string
    gender: string
    openRank: number
    closeRank: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrcrUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    round?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    exam?: StringFieldUpdateOperationsInput | string
    institute?: StringFieldUpdateOperationsInput | string
    academicProgramName?: StringFieldUpdateOperationsInput | string
    quota?: StringFieldUpdateOperationsInput | string
    seatType?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    openRank?: IntFieldUpdateOperationsInput | number
    closeRank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrcrUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    round?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    exam?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
    institute?: StringFieldUpdateOperationsInput | string
    academicProgramName?: StringFieldUpdateOperationsInput | string
    quota?: StringFieldUpdateOperationsInput | string
    seatType?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    openRank?: IntFieldUpdateOperationsInput | number
    closeRank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    id?: string
    rating: number
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    college: CollegeCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    collegeId: string
    rating: number
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    college?: CollegeUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    collegeId: string
    rating: number
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type placementCreateInput = {
    id?: string
    year: number
    totalGrads: number
    placed: number
    median: number
    higherEducation: number
    createdAt?: Date | string
    updatedAt?: Date | string
    college: CollegeCreateNestedOneWithoutPlacementsInput
  }

  export type placementUncheckedCreateInput = {
    id?: string
    year: number
    collegeId: string
    totalGrads: number
    placed: number
    median: number
    higherEducation: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type placementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    totalGrads?: IntFieldUpdateOperationsInput | number
    placed?: IntFieldUpdateOperationsInput | number
    median?: IntFieldUpdateOperationsInput | number
    higherEducation?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    college?: CollegeUpdateOneRequiredWithoutPlacementsNestedInput
  }

  export type placementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    collegeId?: StringFieldUpdateOperationsInput | string
    totalGrads?: IntFieldUpdateOperationsInput | number
    placed?: IntFieldUpdateOperationsInput | number
    median?: IntFieldUpdateOperationsInput | number
    higherEducation?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type placementCreateManyInput = {
    id?: string
    year: number
    collegeId: string
    totalGrads: number
    placed: number
    median: number
    higherEducation: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type placementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    totalGrads?: IntFieldUpdateOperationsInput | number
    placed?: IntFieldUpdateOperationsInput | number
    median?: IntFieldUpdateOperationsInput | number
    higherEducation?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type placementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    collegeId?: StringFieldUpdateOperationsInput | string
    totalGrads?: IntFieldUpdateOperationsInput | number
    placed?: IntFieldUpdateOperationsInput | number
    median?: IntFieldUpdateOperationsInput | number
    higherEducation?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollegeImageCreateInput = {
    id?: string
    url: string
    createdAt?: Date | string
    college: CollegeCreateNestedOneWithoutImagesInput
  }

  export type CollegeImageUncheckedCreateInput = {
    id?: string
    collegeId: string
    url: string
    createdAt?: Date | string
  }

  export type CollegeImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    college?: CollegeUpdateOneRequiredWithoutImagesNestedInput
  }

  export type CollegeImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollegeImageCreateManyInput = {
    id?: string
    collegeId: string
    url: string
    createdAt?: Date | string
  }

  export type CollegeImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollegeImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CollegeImageListRelationFilter = {
    every?: CollegeImageWhereInput
    some?: CollegeImageWhereInput
    none?: CollegeImageWhereInput
  }

  export type OrcrListRelationFilter = {
    every?: OrcrWhereInput
    some?: OrcrWhereInput
    none?: OrcrWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type PlacementListRelationFilter = {
    every?: placementWhereInput
    some?: placementWhereInput
    none?: placementWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CollegeImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrcrOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type placementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CollegeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bongs?: SortOrder
    coverImage?: SortOrder
    location?: SortOrder
    officialWebsite?: SortOrder
    totalStudents?: SortOrder
    maleStudents?: SortOrder
    femaleStudents?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nirf?: SortOrder
    moderated?: SortOrder
    collegeType?: SortOrder
  }

  export type CollegeAvgOrderByAggregateInput = {
    bongs?: SortOrder
    totalStudents?: SortOrder
    maleStudents?: SortOrder
    femaleStudents?: SortOrder
    nirf?: SortOrder
  }

  export type CollegeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bongs?: SortOrder
    coverImage?: SortOrder
    location?: SortOrder
    officialWebsite?: SortOrder
    totalStudents?: SortOrder
    maleStudents?: SortOrder
    femaleStudents?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nirf?: SortOrder
    moderated?: SortOrder
    collegeType?: SortOrder
  }

  export type CollegeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bongs?: SortOrder
    coverImage?: SortOrder
    location?: SortOrder
    officialWebsite?: SortOrder
    totalStudents?: SortOrder
    maleStudents?: SortOrder
    femaleStudents?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nirf?: SortOrder
    moderated?: SortOrder
    collegeType?: SortOrder
  }

  export type CollegeSumOrderByAggregateInput = {
    bongs?: SortOrder
    totalStudents?: SortOrder
    maleStudents?: SortOrder
    femaleStudents?: SortOrder
    nirf?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CollegeScalarRelationFilter = {
    is?: CollegeWhereInput
    isNot?: CollegeWhereInput
  }

  export type OrcrCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    round?: SortOrder
    type?: SortOrder
    exam?: SortOrder
    collegeId?: SortOrder
    institute?: SortOrder
    academicProgramName?: SortOrder
    quota?: SortOrder
    seatType?: SortOrder
    gender?: SortOrder
    openRank?: SortOrder
    closeRank?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrcrAvgOrderByAggregateInput = {
    year?: SortOrder
    round?: SortOrder
    openRank?: SortOrder
    closeRank?: SortOrder
  }

  export type OrcrMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    round?: SortOrder
    type?: SortOrder
    exam?: SortOrder
    collegeId?: SortOrder
    institute?: SortOrder
    academicProgramName?: SortOrder
    quota?: SortOrder
    seatType?: SortOrder
    gender?: SortOrder
    openRank?: SortOrder
    closeRank?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrcrMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    round?: SortOrder
    type?: SortOrder
    exam?: SortOrder
    collegeId?: SortOrder
    institute?: SortOrder
    academicProgramName?: SortOrder
    quota?: SortOrder
    seatType?: SortOrder
    gender?: SortOrder
    openRank?: SortOrder
    closeRank?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrcrSumOrderByAggregateInput = {
    year?: SortOrder
    round?: SortOrder
    openRank?: SortOrder
    closeRank?: SortOrder
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    collegeId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    collegeId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    collegeId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type placementCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    collegeId?: SortOrder
    totalGrads?: SortOrder
    placed?: SortOrder
    median?: SortOrder
    higherEducation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type placementAvgOrderByAggregateInput = {
    year?: SortOrder
    totalGrads?: SortOrder
    placed?: SortOrder
    median?: SortOrder
    higherEducation?: SortOrder
  }

  export type placementMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    collegeId?: SortOrder
    totalGrads?: SortOrder
    placed?: SortOrder
    median?: SortOrder
    higherEducation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type placementMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    collegeId?: SortOrder
    totalGrads?: SortOrder
    placed?: SortOrder
    median?: SortOrder
    higherEducation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type placementSumOrderByAggregateInput = {
    year?: SortOrder
    totalGrads?: SortOrder
    placed?: SortOrder
    median?: SortOrder
    higherEducation?: SortOrder
  }

  export type CollegeImageCountOrderByAggregateInput = {
    id?: SortOrder
    collegeId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type CollegeImageMaxOrderByAggregateInput = {
    id?: SortOrder
    collegeId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type CollegeImageMinOrderByAggregateInput = {
    id?: SortOrder
    collegeId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type CollegeImageCreateNestedManyWithoutCollegeInput = {
    create?: XOR<CollegeImageCreateWithoutCollegeInput, CollegeImageUncheckedCreateWithoutCollegeInput> | CollegeImageCreateWithoutCollegeInput[] | CollegeImageUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: CollegeImageCreateOrConnectWithoutCollegeInput | CollegeImageCreateOrConnectWithoutCollegeInput[]
    createMany?: CollegeImageCreateManyCollegeInputEnvelope
    connect?: CollegeImageWhereUniqueInput | CollegeImageWhereUniqueInput[]
  }

  export type OrcrCreateNestedManyWithoutCollegeInput = {
    create?: XOR<OrcrCreateWithoutCollegeInput, OrcrUncheckedCreateWithoutCollegeInput> | OrcrCreateWithoutCollegeInput[] | OrcrUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: OrcrCreateOrConnectWithoutCollegeInput | OrcrCreateOrConnectWithoutCollegeInput[]
    createMany?: OrcrCreateManyCollegeInputEnvelope
    connect?: OrcrWhereUniqueInput | OrcrWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutCollegeInput = {
    create?: XOR<ReviewCreateWithoutCollegeInput, ReviewUncheckedCreateWithoutCollegeInput> | ReviewCreateWithoutCollegeInput[] | ReviewUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutCollegeInput | ReviewCreateOrConnectWithoutCollegeInput[]
    createMany?: ReviewCreateManyCollegeInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type placementCreateNestedManyWithoutCollegeInput = {
    create?: XOR<placementCreateWithoutCollegeInput, placementUncheckedCreateWithoutCollegeInput> | placementCreateWithoutCollegeInput[] | placementUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: placementCreateOrConnectWithoutCollegeInput | placementCreateOrConnectWithoutCollegeInput[]
    createMany?: placementCreateManyCollegeInputEnvelope
    connect?: placementWhereUniqueInput | placementWhereUniqueInput[]
  }

  export type CollegeImageUncheckedCreateNestedManyWithoutCollegeInput = {
    create?: XOR<CollegeImageCreateWithoutCollegeInput, CollegeImageUncheckedCreateWithoutCollegeInput> | CollegeImageCreateWithoutCollegeInput[] | CollegeImageUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: CollegeImageCreateOrConnectWithoutCollegeInput | CollegeImageCreateOrConnectWithoutCollegeInput[]
    createMany?: CollegeImageCreateManyCollegeInputEnvelope
    connect?: CollegeImageWhereUniqueInput | CollegeImageWhereUniqueInput[]
  }

  export type OrcrUncheckedCreateNestedManyWithoutCollegeInput = {
    create?: XOR<OrcrCreateWithoutCollegeInput, OrcrUncheckedCreateWithoutCollegeInput> | OrcrCreateWithoutCollegeInput[] | OrcrUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: OrcrCreateOrConnectWithoutCollegeInput | OrcrCreateOrConnectWithoutCollegeInput[]
    createMany?: OrcrCreateManyCollegeInputEnvelope
    connect?: OrcrWhereUniqueInput | OrcrWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutCollegeInput = {
    create?: XOR<ReviewCreateWithoutCollegeInput, ReviewUncheckedCreateWithoutCollegeInput> | ReviewCreateWithoutCollegeInput[] | ReviewUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutCollegeInput | ReviewCreateOrConnectWithoutCollegeInput[]
    createMany?: ReviewCreateManyCollegeInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type placementUncheckedCreateNestedManyWithoutCollegeInput = {
    create?: XOR<placementCreateWithoutCollegeInput, placementUncheckedCreateWithoutCollegeInput> | placementCreateWithoutCollegeInput[] | placementUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: placementCreateOrConnectWithoutCollegeInput | placementCreateOrConnectWithoutCollegeInput[]
    createMany?: placementCreateManyCollegeInputEnvelope
    connect?: placementWhereUniqueInput | placementWhereUniqueInput[]
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CollegeImageUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<CollegeImageCreateWithoutCollegeInput, CollegeImageUncheckedCreateWithoutCollegeInput> | CollegeImageCreateWithoutCollegeInput[] | CollegeImageUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: CollegeImageCreateOrConnectWithoutCollegeInput | CollegeImageCreateOrConnectWithoutCollegeInput[]
    upsert?: CollegeImageUpsertWithWhereUniqueWithoutCollegeInput | CollegeImageUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: CollegeImageCreateManyCollegeInputEnvelope
    set?: CollegeImageWhereUniqueInput | CollegeImageWhereUniqueInput[]
    disconnect?: CollegeImageWhereUniqueInput | CollegeImageWhereUniqueInput[]
    delete?: CollegeImageWhereUniqueInput | CollegeImageWhereUniqueInput[]
    connect?: CollegeImageWhereUniqueInput | CollegeImageWhereUniqueInput[]
    update?: CollegeImageUpdateWithWhereUniqueWithoutCollegeInput | CollegeImageUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: CollegeImageUpdateManyWithWhereWithoutCollegeInput | CollegeImageUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: CollegeImageScalarWhereInput | CollegeImageScalarWhereInput[]
  }

  export type OrcrUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<OrcrCreateWithoutCollegeInput, OrcrUncheckedCreateWithoutCollegeInput> | OrcrCreateWithoutCollegeInput[] | OrcrUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: OrcrCreateOrConnectWithoutCollegeInput | OrcrCreateOrConnectWithoutCollegeInput[]
    upsert?: OrcrUpsertWithWhereUniqueWithoutCollegeInput | OrcrUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: OrcrCreateManyCollegeInputEnvelope
    set?: OrcrWhereUniqueInput | OrcrWhereUniqueInput[]
    disconnect?: OrcrWhereUniqueInput | OrcrWhereUniqueInput[]
    delete?: OrcrWhereUniqueInput | OrcrWhereUniqueInput[]
    connect?: OrcrWhereUniqueInput | OrcrWhereUniqueInput[]
    update?: OrcrUpdateWithWhereUniqueWithoutCollegeInput | OrcrUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: OrcrUpdateManyWithWhereWithoutCollegeInput | OrcrUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: OrcrScalarWhereInput | OrcrScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<ReviewCreateWithoutCollegeInput, ReviewUncheckedCreateWithoutCollegeInput> | ReviewCreateWithoutCollegeInput[] | ReviewUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutCollegeInput | ReviewCreateOrConnectWithoutCollegeInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutCollegeInput | ReviewUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: ReviewCreateManyCollegeInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutCollegeInput | ReviewUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutCollegeInput | ReviewUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type placementUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<placementCreateWithoutCollegeInput, placementUncheckedCreateWithoutCollegeInput> | placementCreateWithoutCollegeInput[] | placementUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: placementCreateOrConnectWithoutCollegeInput | placementCreateOrConnectWithoutCollegeInput[]
    upsert?: placementUpsertWithWhereUniqueWithoutCollegeInput | placementUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: placementCreateManyCollegeInputEnvelope
    set?: placementWhereUniqueInput | placementWhereUniqueInput[]
    disconnect?: placementWhereUniqueInput | placementWhereUniqueInput[]
    delete?: placementWhereUniqueInput | placementWhereUniqueInput[]
    connect?: placementWhereUniqueInput | placementWhereUniqueInput[]
    update?: placementUpdateWithWhereUniqueWithoutCollegeInput | placementUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: placementUpdateManyWithWhereWithoutCollegeInput | placementUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: placementScalarWhereInput | placementScalarWhereInput[]
  }

  export type CollegeImageUncheckedUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<CollegeImageCreateWithoutCollegeInput, CollegeImageUncheckedCreateWithoutCollegeInput> | CollegeImageCreateWithoutCollegeInput[] | CollegeImageUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: CollegeImageCreateOrConnectWithoutCollegeInput | CollegeImageCreateOrConnectWithoutCollegeInput[]
    upsert?: CollegeImageUpsertWithWhereUniqueWithoutCollegeInput | CollegeImageUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: CollegeImageCreateManyCollegeInputEnvelope
    set?: CollegeImageWhereUniqueInput | CollegeImageWhereUniqueInput[]
    disconnect?: CollegeImageWhereUniqueInput | CollegeImageWhereUniqueInput[]
    delete?: CollegeImageWhereUniqueInput | CollegeImageWhereUniqueInput[]
    connect?: CollegeImageWhereUniqueInput | CollegeImageWhereUniqueInput[]
    update?: CollegeImageUpdateWithWhereUniqueWithoutCollegeInput | CollegeImageUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: CollegeImageUpdateManyWithWhereWithoutCollegeInput | CollegeImageUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: CollegeImageScalarWhereInput | CollegeImageScalarWhereInput[]
  }

  export type OrcrUncheckedUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<OrcrCreateWithoutCollegeInput, OrcrUncheckedCreateWithoutCollegeInput> | OrcrCreateWithoutCollegeInput[] | OrcrUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: OrcrCreateOrConnectWithoutCollegeInput | OrcrCreateOrConnectWithoutCollegeInput[]
    upsert?: OrcrUpsertWithWhereUniqueWithoutCollegeInput | OrcrUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: OrcrCreateManyCollegeInputEnvelope
    set?: OrcrWhereUniqueInput | OrcrWhereUniqueInput[]
    disconnect?: OrcrWhereUniqueInput | OrcrWhereUniqueInput[]
    delete?: OrcrWhereUniqueInput | OrcrWhereUniqueInput[]
    connect?: OrcrWhereUniqueInput | OrcrWhereUniqueInput[]
    update?: OrcrUpdateWithWhereUniqueWithoutCollegeInput | OrcrUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: OrcrUpdateManyWithWhereWithoutCollegeInput | OrcrUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: OrcrScalarWhereInput | OrcrScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<ReviewCreateWithoutCollegeInput, ReviewUncheckedCreateWithoutCollegeInput> | ReviewCreateWithoutCollegeInput[] | ReviewUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutCollegeInput | ReviewCreateOrConnectWithoutCollegeInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutCollegeInput | ReviewUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: ReviewCreateManyCollegeInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutCollegeInput | ReviewUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutCollegeInput | ReviewUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type placementUncheckedUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<placementCreateWithoutCollegeInput, placementUncheckedCreateWithoutCollegeInput> | placementCreateWithoutCollegeInput[] | placementUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: placementCreateOrConnectWithoutCollegeInput | placementCreateOrConnectWithoutCollegeInput[]
    upsert?: placementUpsertWithWhereUniqueWithoutCollegeInput | placementUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: placementCreateManyCollegeInputEnvelope
    set?: placementWhereUniqueInput | placementWhereUniqueInput[]
    disconnect?: placementWhereUniqueInput | placementWhereUniqueInput[]
    delete?: placementWhereUniqueInput | placementWhereUniqueInput[]
    connect?: placementWhereUniqueInput | placementWhereUniqueInput[]
    update?: placementUpdateWithWhereUniqueWithoutCollegeInput | placementUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: placementUpdateManyWithWhereWithoutCollegeInput | placementUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: placementScalarWhereInput | placementScalarWhereInput[]
  }

  export type CollegeCreateNestedOneWithoutOrcrsInput = {
    create?: XOR<CollegeCreateWithoutOrcrsInput, CollegeUncheckedCreateWithoutOrcrsInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutOrcrsInput
    connect?: CollegeWhereUniqueInput
  }

  export type CollegeUpdateOneRequiredWithoutOrcrsNestedInput = {
    create?: XOR<CollegeCreateWithoutOrcrsInput, CollegeUncheckedCreateWithoutOrcrsInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutOrcrsInput
    upsert?: CollegeUpsertWithoutOrcrsInput
    connect?: CollegeWhereUniqueInput
    update?: XOR<XOR<CollegeUpdateToOneWithWhereWithoutOrcrsInput, CollegeUpdateWithoutOrcrsInput>, CollegeUncheckedUpdateWithoutOrcrsInput>
  }

  export type CollegeCreateNestedOneWithoutReviewsInput = {
    create?: XOR<CollegeCreateWithoutReviewsInput, CollegeUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutReviewsInput
    connect?: CollegeWhereUniqueInput
  }

  export type CollegeUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<CollegeCreateWithoutReviewsInput, CollegeUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutReviewsInput
    upsert?: CollegeUpsertWithoutReviewsInput
    connect?: CollegeWhereUniqueInput
    update?: XOR<XOR<CollegeUpdateToOneWithWhereWithoutReviewsInput, CollegeUpdateWithoutReviewsInput>, CollegeUncheckedUpdateWithoutReviewsInput>
  }

  export type CollegeCreateNestedOneWithoutPlacementsInput = {
    create?: XOR<CollegeCreateWithoutPlacementsInput, CollegeUncheckedCreateWithoutPlacementsInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutPlacementsInput
    connect?: CollegeWhereUniqueInput
  }

  export type CollegeUpdateOneRequiredWithoutPlacementsNestedInput = {
    create?: XOR<CollegeCreateWithoutPlacementsInput, CollegeUncheckedCreateWithoutPlacementsInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutPlacementsInput
    upsert?: CollegeUpsertWithoutPlacementsInput
    connect?: CollegeWhereUniqueInput
    update?: XOR<XOR<CollegeUpdateToOneWithWhereWithoutPlacementsInput, CollegeUpdateWithoutPlacementsInput>, CollegeUncheckedUpdateWithoutPlacementsInput>
  }

  export type CollegeCreateNestedOneWithoutImagesInput = {
    create?: XOR<CollegeCreateWithoutImagesInput, CollegeUncheckedCreateWithoutImagesInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutImagesInput
    connect?: CollegeWhereUniqueInput
  }

  export type CollegeUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<CollegeCreateWithoutImagesInput, CollegeUncheckedCreateWithoutImagesInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutImagesInput
    upsert?: CollegeUpsertWithoutImagesInput
    connect?: CollegeWhereUniqueInput
    update?: XOR<XOR<CollegeUpdateToOneWithWhereWithoutImagesInput, CollegeUpdateWithoutImagesInput>, CollegeUncheckedUpdateWithoutImagesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CollegeImageCreateWithoutCollegeInput = {
    id?: string
    url: string
    createdAt?: Date | string
  }

  export type CollegeImageUncheckedCreateWithoutCollegeInput = {
    id?: string
    url: string
    createdAt?: Date | string
  }

  export type CollegeImageCreateOrConnectWithoutCollegeInput = {
    where: CollegeImageWhereUniqueInput
    create: XOR<CollegeImageCreateWithoutCollegeInput, CollegeImageUncheckedCreateWithoutCollegeInput>
  }

  export type CollegeImageCreateManyCollegeInputEnvelope = {
    data: CollegeImageCreateManyCollegeInput | CollegeImageCreateManyCollegeInput[]
  }

  export type OrcrCreateWithoutCollegeInput = {
    id?: string
    year: number
    round: number
    type: string
    exam: string
    institute: string
    academicProgramName: string
    quota: string
    seatType: string
    gender: string
    openRank: number
    closeRank: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrcrUncheckedCreateWithoutCollegeInput = {
    id?: string
    year: number
    round: number
    type: string
    exam: string
    institute: string
    academicProgramName: string
    quota: string
    seatType: string
    gender: string
    openRank: number
    closeRank: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrcrCreateOrConnectWithoutCollegeInput = {
    where: OrcrWhereUniqueInput
    create: XOR<OrcrCreateWithoutCollegeInput, OrcrUncheckedCreateWithoutCollegeInput>
  }

  export type OrcrCreateManyCollegeInputEnvelope = {
    data: OrcrCreateManyCollegeInput | OrcrCreateManyCollegeInput[]
  }

  export type ReviewCreateWithoutCollegeInput = {
    id?: string
    rating: number
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUncheckedCreateWithoutCollegeInput = {
    id?: string
    rating: number
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutCollegeInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutCollegeInput, ReviewUncheckedCreateWithoutCollegeInput>
  }

  export type ReviewCreateManyCollegeInputEnvelope = {
    data: ReviewCreateManyCollegeInput | ReviewCreateManyCollegeInput[]
  }

  export type placementCreateWithoutCollegeInput = {
    id?: string
    year: number
    totalGrads: number
    placed: number
    median: number
    higherEducation: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type placementUncheckedCreateWithoutCollegeInput = {
    id?: string
    year: number
    totalGrads: number
    placed: number
    median: number
    higherEducation: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type placementCreateOrConnectWithoutCollegeInput = {
    where: placementWhereUniqueInput
    create: XOR<placementCreateWithoutCollegeInput, placementUncheckedCreateWithoutCollegeInput>
  }

  export type placementCreateManyCollegeInputEnvelope = {
    data: placementCreateManyCollegeInput | placementCreateManyCollegeInput[]
  }

  export type CollegeImageUpsertWithWhereUniqueWithoutCollegeInput = {
    where: CollegeImageWhereUniqueInput
    update: XOR<CollegeImageUpdateWithoutCollegeInput, CollegeImageUncheckedUpdateWithoutCollegeInput>
    create: XOR<CollegeImageCreateWithoutCollegeInput, CollegeImageUncheckedCreateWithoutCollegeInput>
  }

  export type CollegeImageUpdateWithWhereUniqueWithoutCollegeInput = {
    where: CollegeImageWhereUniqueInput
    data: XOR<CollegeImageUpdateWithoutCollegeInput, CollegeImageUncheckedUpdateWithoutCollegeInput>
  }

  export type CollegeImageUpdateManyWithWhereWithoutCollegeInput = {
    where: CollegeImageScalarWhereInput
    data: XOR<CollegeImageUpdateManyMutationInput, CollegeImageUncheckedUpdateManyWithoutCollegeInput>
  }

  export type CollegeImageScalarWhereInput = {
    AND?: CollegeImageScalarWhereInput | CollegeImageScalarWhereInput[]
    OR?: CollegeImageScalarWhereInput[]
    NOT?: CollegeImageScalarWhereInput | CollegeImageScalarWhereInput[]
    id?: StringFilter<"CollegeImage"> | string
    collegeId?: StringFilter<"CollegeImage"> | string
    url?: StringFilter<"CollegeImage"> | string
    createdAt?: DateTimeFilter<"CollegeImage"> | Date | string
  }

  export type OrcrUpsertWithWhereUniqueWithoutCollegeInput = {
    where: OrcrWhereUniqueInput
    update: XOR<OrcrUpdateWithoutCollegeInput, OrcrUncheckedUpdateWithoutCollegeInput>
    create: XOR<OrcrCreateWithoutCollegeInput, OrcrUncheckedCreateWithoutCollegeInput>
  }

  export type OrcrUpdateWithWhereUniqueWithoutCollegeInput = {
    where: OrcrWhereUniqueInput
    data: XOR<OrcrUpdateWithoutCollegeInput, OrcrUncheckedUpdateWithoutCollegeInput>
  }

  export type OrcrUpdateManyWithWhereWithoutCollegeInput = {
    where: OrcrScalarWhereInput
    data: XOR<OrcrUpdateManyMutationInput, OrcrUncheckedUpdateManyWithoutCollegeInput>
  }

  export type OrcrScalarWhereInput = {
    AND?: OrcrScalarWhereInput | OrcrScalarWhereInput[]
    OR?: OrcrScalarWhereInput[]
    NOT?: OrcrScalarWhereInput | OrcrScalarWhereInput[]
    id?: StringFilter<"Orcr"> | string
    year?: IntFilter<"Orcr"> | number
    round?: IntFilter<"Orcr"> | number
    type?: StringFilter<"Orcr"> | string
    exam?: StringFilter<"Orcr"> | string
    collegeId?: StringFilter<"Orcr"> | string
    institute?: StringFilter<"Orcr"> | string
    academicProgramName?: StringFilter<"Orcr"> | string
    quota?: StringFilter<"Orcr"> | string
    seatType?: StringFilter<"Orcr"> | string
    gender?: StringFilter<"Orcr"> | string
    openRank?: IntFilter<"Orcr"> | number
    closeRank?: IntFilter<"Orcr"> | number
    createdAt?: DateTimeFilter<"Orcr"> | Date | string
    updatedAt?: DateTimeFilter<"Orcr"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutCollegeInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutCollegeInput, ReviewUncheckedUpdateWithoutCollegeInput>
    create: XOR<ReviewCreateWithoutCollegeInput, ReviewUncheckedCreateWithoutCollegeInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutCollegeInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutCollegeInput, ReviewUncheckedUpdateWithoutCollegeInput>
  }

  export type ReviewUpdateManyWithWhereWithoutCollegeInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutCollegeInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    collegeId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type placementUpsertWithWhereUniqueWithoutCollegeInput = {
    where: placementWhereUniqueInput
    update: XOR<placementUpdateWithoutCollegeInput, placementUncheckedUpdateWithoutCollegeInput>
    create: XOR<placementCreateWithoutCollegeInput, placementUncheckedCreateWithoutCollegeInput>
  }

  export type placementUpdateWithWhereUniqueWithoutCollegeInput = {
    where: placementWhereUniqueInput
    data: XOR<placementUpdateWithoutCollegeInput, placementUncheckedUpdateWithoutCollegeInput>
  }

  export type placementUpdateManyWithWhereWithoutCollegeInput = {
    where: placementScalarWhereInput
    data: XOR<placementUpdateManyMutationInput, placementUncheckedUpdateManyWithoutCollegeInput>
  }

  export type placementScalarWhereInput = {
    AND?: placementScalarWhereInput | placementScalarWhereInput[]
    OR?: placementScalarWhereInput[]
    NOT?: placementScalarWhereInput | placementScalarWhereInput[]
    id?: StringFilter<"placement"> | string
    year?: IntFilter<"placement"> | number
    collegeId?: StringFilter<"placement"> | string
    totalGrads?: IntFilter<"placement"> | number
    placed?: IntFilter<"placement"> | number
    median?: IntFilter<"placement"> | number
    higherEducation?: IntFilter<"placement"> | number
    createdAt?: DateTimeFilter<"placement"> | Date | string
    updatedAt?: DateTimeFilter<"placement"> | Date | string
  }

  export type CollegeCreateWithoutOrcrsInput = {
    id?: string
    name: string
    bongs?: number
    coverImage?: string | null
    location?: string | null
    officialWebsite?: string | null
    totalStudents?: number | null
    maleStudents?: number | null
    femaleStudents?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nirf?: number | null
    moderated?: boolean
    collegeType?: string | null
    images?: CollegeImageCreateNestedManyWithoutCollegeInput
    reviews?: ReviewCreateNestedManyWithoutCollegeInput
    placements?: placementCreateNestedManyWithoutCollegeInput
  }

  export type CollegeUncheckedCreateWithoutOrcrsInput = {
    id?: string
    name: string
    bongs?: number
    coverImage?: string | null
    location?: string | null
    officialWebsite?: string | null
    totalStudents?: number | null
    maleStudents?: number | null
    femaleStudents?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nirf?: number | null
    moderated?: boolean
    collegeType?: string | null
    images?: CollegeImageUncheckedCreateNestedManyWithoutCollegeInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutCollegeInput
    placements?: placementUncheckedCreateNestedManyWithoutCollegeInput
  }

  export type CollegeCreateOrConnectWithoutOrcrsInput = {
    where: CollegeWhereUniqueInput
    create: XOR<CollegeCreateWithoutOrcrsInput, CollegeUncheckedCreateWithoutOrcrsInput>
  }

  export type CollegeUpsertWithoutOrcrsInput = {
    update: XOR<CollegeUpdateWithoutOrcrsInput, CollegeUncheckedUpdateWithoutOrcrsInput>
    create: XOR<CollegeCreateWithoutOrcrsInput, CollegeUncheckedCreateWithoutOrcrsInput>
    where?: CollegeWhereInput
  }

  export type CollegeUpdateToOneWithWhereWithoutOrcrsInput = {
    where?: CollegeWhereInput
    data: XOR<CollegeUpdateWithoutOrcrsInput, CollegeUncheckedUpdateWithoutOrcrsInput>
  }

  export type CollegeUpdateWithoutOrcrsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bongs?: IntFieldUpdateOperationsInput | number
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    officialWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    totalStudents?: NullableIntFieldUpdateOperationsInput | number | null
    maleStudents?: NullableIntFieldUpdateOperationsInput | number | null
    femaleStudents?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nirf?: NullableIntFieldUpdateOperationsInput | number | null
    moderated?: BoolFieldUpdateOperationsInput | boolean
    collegeType?: NullableStringFieldUpdateOperationsInput | string | null
    images?: CollegeImageUpdateManyWithoutCollegeNestedInput
    reviews?: ReviewUpdateManyWithoutCollegeNestedInput
    placements?: placementUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeUncheckedUpdateWithoutOrcrsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bongs?: IntFieldUpdateOperationsInput | number
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    officialWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    totalStudents?: NullableIntFieldUpdateOperationsInput | number | null
    maleStudents?: NullableIntFieldUpdateOperationsInput | number | null
    femaleStudents?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nirf?: NullableIntFieldUpdateOperationsInput | number | null
    moderated?: BoolFieldUpdateOperationsInput | boolean
    collegeType?: NullableStringFieldUpdateOperationsInput | string | null
    images?: CollegeImageUncheckedUpdateManyWithoutCollegeNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutCollegeNestedInput
    placements?: placementUncheckedUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeCreateWithoutReviewsInput = {
    id?: string
    name: string
    bongs?: number
    coverImage?: string | null
    location?: string | null
    officialWebsite?: string | null
    totalStudents?: number | null
    maleStudents?: number | null
    femaleStudents?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nirf?: number | null
    moderated?: boolean
    collegeType?: string | null
    images?: CollegeImageCreateNestedManyWithoutCollegeInput
    orcrs?: OrcrCreateNestedManyWithoutCollegeInput
    placements?: placementCreateNestedManyWithoutCollegeInput
  }

  export type CollegeUncheckedCreateWithoutReviewsInput = {
    id?: string
    name: string
    bongs?: number
    coverImage?: string | null
    location?: string | null
    officialWebsite?: string | null
    totalStudents?: number | null
    maleStudents?: number | null
    femaleStudents?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nirf?: number | null
    moderated?: boolean
    collegeType?: string | null
    images?: CollegeImageUncheckedCreateNestedManyWithoutCollegeInput
    orcrs?: OrcrUncheckedCreateNestedManyWithoutCollegeInput
    placements?: placementUncheckedCreateNestedManyWithoutCollegeInput
  }

  export type CollegeCreateOrConnectWithoutReviewsInput = {
    where: CollegeWhereUniqueInput
    create: XOR<CollegeCreateWithoutReviewsInput, CollegeUncheckedCreateWithoutReviewsInput>
  }

  export type CollegeUpsertWithoutReviewsInput = {
    update: XOR<CollegeUpdateWithoutReviewsInput, CollegeUncheckedUpdateWithoutReviewsInput>
    create: XOR<CollegeCreateWithoutReviewsInput, CollegeUncheckedCreateWithoutReviewsInput>
    where?: CollegeWhereInput
  }

  export type CollegeUpdateToOneWithWhereWithoutReviewsInput = {
    where?: CollegeWhereInput
    data: XOR<CollegeUpdateWithoutReviewsInput, CollegeUncheckedUpdateWithoutReviewsInput>
  }

  export type CollegeUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bongs?: IntFieldUpdateOperationsInput | number
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    officialWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    totalStudents?: NullableIntFieldUpdateOperationsInput | number | null
    maleStudents?: NullableIntFieldUpdateOperationsInput | number | null
    femaleStudents?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nirf?: NullableIntFieldUpdateOperationsInput | number | null
    moderated?: BoolFieldUpdateOperationsInput | boolean
    collegeType?: NullableStringFieldUpdateOperationsInput | string | null
    images?: CollegeImageUpdateManyWithoutCollegeNestedInput
    orcrs?: OrcrUpdateManyWithoutCollegeNestedInput
    placements?: placementUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bongs?: IntFieldUpdateOperationsInput | number
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    officialWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    totalStudents?: NullableIntFieldUpdateOperationsInput | number | null
    maleStudents?: NullableIntFieldUpdateOperationsInput | number | null
    femaleStudents?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nirf?: NullableIntFieldUpdateOperationsInput | number | null
    moderated?: BoolFieldUpdateOperationsInput | boolean
    collegeType?: NullableStringFieldUpdateOperationsInput | string | null
    images?: CollegeImageUncheckedUpdateManyWithoutCollegeNestedInput
    orcrs?: OrcrUncheckedUpdateManyWithoutCollegeNestedInput
    placements?: placementUncheckedUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeCreateWithoutPlacementsInput = {
    id?: string
    name: string
    bongs?: number
    coverImage?: string | null
    location?: string | null
    officialWebsite?: string | null
    totalStudents?: number | null
    maleStudents?: number | null
    femaleStudents?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nirf?: number | null
    moderated?: boolean
    collegeType?: string | null
    images?: CollegeImageCreateNestedManyWithoutCollegeInput
    orcrs?: OrcrCreateNestedManyWithoutCollegeInput
    reviews?: ReviewCreateNestedManyWithoutCollegeInput
  }

  export type CollegeUncheckedCreateWithoutPlacementsInput = {
    id?: string
    name: string
    bongs?: number
    coverImage?: string | null
    location?: string | null
    officialWebsite?: string | null
    totalStudents?: number | null
    maleStudents?: number | null
    femaleStudents?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nirf?: number | null
    moderated?: boolean
    collegeType?: string | null
    images?: CollegeImageUncheckedCreateNestedManyWithoutCollegeInput
    orcrs?: OrcrUncheckedCreateNestedManyWithoutCollegeInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutCollegeInput
  }

  export type CollegeCreateOrConnectWithoutPlacementsInput = {
    where: CollegeWhereUniqueInput
    create: XOR<CollegeCreateWithoutPlacementsInput, CollegeUncheckedCreateWithoutPlacementsInput>
  }

  export type CollegeUpsertWithoutPlacementsInput = {
    update: XOR<CollegeUpdateWithoutPlacementsInput, CollegeUncheckedUpdateWithoutPlacementsInput>
    create: XOR<CollegeCreateWithoutPlacementsInput, CollegeUncheckedCreateWithoutPlacementsInput>
    where?: CollegeWhereInput
  }

  export type CollegeUpdateToOneWithWhereWithoutPlacementsInput = {
    where?: CollegeWhereInput
    data: XOR<CollegeUpdateWithoutPlacementsInput, CollegeUncheckedUpdateWithoutPlacementsInput>
  }

  export type CollegeUpdateWithoutPlacementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bongs?: IntFieldUpdateOperationsInput | number
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    officialWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    totalStudents?: NullableIntFieldUpdateOperationsInput | number | null
    maleStudents?: NullableIntFieldUpdateOperationsInput | number | null
    femaleStudents?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nirf?: NullableIntFieldUpdateOperationsInput | number | null
    moderated?: BoolFieldUpdateOperationsInput | boolean
    collegeType?: NullableStringFieldUpdateOperationsInput | string | null
    images?: CollegeImageUpdateManyWithoutCollegeNestedInput
    orcrs?: OrcrUpdateManyWithoutCollegeNestedInput
    reviews?: ReviewUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeUncheckedUpdateWithoutPlacementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bongs?: IntFieldUpdateOperationsInput | number
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    officialWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    totalStudents?: NullableIntFieldUpdateOperationsInput | number | null
    maleStudents?: NullableIntFieldUpdateOperationsInput | number | null
    femaleStudents?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nirf?: NullableIntFieldUpdateOperationsInput | number | null
    moderated?: BoolFieldUpdateOperationsInput | boolean
    collegeType?: NullableStringFieldUpdateOperationsInput | string | null
    images?: CollegeImageUncheckedUpdateManyWithoutCollegeNestedInput
    orcrs?: OrcrUncheckedUpdateManyWithoutCollegeNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeCreateWithoutImagesInput = {
    id?: string
    name: string
    bongs?: number
    coverImage?: string | null
    location?: string | null
    officialWebsite?: string | null
    totalStudents?: number | null
    maleStudents?: number | null
    femaleStudents?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nirf?: number | null
    moderated?: boolean
    collegeType?: string | null
    orcrs?: OrcrCreateNestedManyWithoutCollegeInput
    reviews?: ReviewCreateNestedManyWithoutCollegeInput
    placements?: placementCreateNestedManyWithoutCollegeInput
  }

  export type CollegeUncheckedCreateWithoutImagesInput = {
    id?: string
    name: string
    bongs?: number
    coverImage?: string | null
    location?: string | null
    officialWebsite?: string | null
    totalStudents?: number | null
    maleStudents?: number | null
    femaleStudents?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nirf?: number | null
    moderated?: boolean
    collegeType?: string | null
    orcrs?: OrcrUncheckedCreateNestedManyWithoutCollegeInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutCollegeInput
    placements?: placementUncheckedCreateNestedManyWithoutCollegeInput
  }

  export type CollegeCreateOrConnectWithoutImagesInput = {
    where: CollegeWhereUniqueInput
    create: XOR<CollegeCreateWithoutImagesInput, CollegeUncheckedCreateWithoutImagesInput>
  }

  export type CollegeUpsertWithoutImagesInput = {
    update: XOR<CollegeUpdateWithoutImagesInput, CollegeUncheckedUpdateWithoutImagesInput>
    create: XOR<CollegeCreateWithoutImagesInput, CollegeUncheckedCreateWithoutImagesInput>
    where?: CollegeWhereInput
  }

  export type CollegeUpdateToOneWithWhereWithoutImagesInput = {
    where?: CollegeWhereInput
    data: XOR<CollegeUpdateWithoutImagesInput, CollegeUncheckedUpdateWithoutImagesInput>
  }

  export type CollegeUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bongs?: IntFieldUpdateOperationsInput | number
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    officialWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    totalStudents?: NullableIntFieldUpdateOperationsInput | number | null
    maleStudents?: NullableIntFieldUpdateOperationsInput | number | null
    femaleStudents?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nirf?: NullableIntFieldUpdateOperationsInput | number | null
    moderated?: BoolFieldUpdateOperationsInput | boolean
    collegeType?: NullableStringFieldUpdateOperationsInput | string | null
    orcrs?: OrcrUpdateManyWithoutCollegeNestedInput
    reviews?: ReviewUpdateManyWithoutCollegeNestedInput
    placements?: placementUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bongs?: IntFieldUpdateOperationsInput | number
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    officialWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    totalStudents?: NullableIntFieldUpdateOperationsInput | number | null
    maleStudents?: NullableIntFieldUpdateOperationsInput | number | null
    femaleStudents?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nirf?: NullableIntFieldUpdateOperationsInput | number | null
    moderated?: BoolFieldUpdateOperationsInput | boolean
    collegeType?: NullableStringFieldUpdateOperationsInput | string | null
    orcrs?: OrcrUncheckedUpdateManyWithoutCollegeNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutCollegeNestedInput
    placements?: placementUncheckedUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeImageCreateManyCollegeInput = {
    id?: string
    url: string
    createdAt?: Date | string
  }

  export type OrcrCreateManyCollegeInput = {
    id?: string
    year: number
    round: number
    type: string
    exam: string
    institute: string
    academicProgramName: string
    quota: string
    seatType: string
    gender: string
    openRank: number
    closeRank: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyCollegeInput = {
    id?: string
    rating: number
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type placementCreateManyCollegeInput = {
    id?: string
    year: number
    totalGrads: number
    placed: number
    median: number
    higherEducation: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollegeImageUpdateWithoutCollegeInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollegeImageUncheckedUpdateWithoutCollegeInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollegeImageUncheckedUpdateManyWithoutCollegeInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrcrUpdateWithoutCollegeInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    round?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    exam?: StringFieldUpdateOperationsInput | string
    institute?: StringFieldUpdateOperationsInput | string
    academicProgramName?: StringFieldUpdateOperationsInput | string
    quota?: StringFieldUpdateOperationsInput | string
    seatType?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    openRank?: IntFieldUpdateOperationsInput | number
    closeRank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrcrUncheckedUpdateWithoutCollegeInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    round?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    exam?: StringFieldUpdateOperationsInput | string
    institute?: StringFieldUpdateOperationsInput | string
    academicProgramName?: StringFieldUpdateOperationsInput | string
    quota?: StringFieldUpdateOperationsInput | string
    seatType?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    openRank?: IntFieldUpdateOperationsInput | number
    closeRank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrcrUncheckedUpdateManyWithoutCollegeInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    round?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    exam?: StringFieldUpdateOperationsInput | string
    institute?: StringFieldUpdateOperationsInput | string
    academicProgramName?: StringFieldUpdateOperationsInput | string
    quota?: StringFieldUpdateOperationsInput | string
    seatType?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    openRank?: IntFieldUpdateOperationsInput | number
    closeRank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutCollegeInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateWithoutCollegeInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutCollegeInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type placementUpdateWithoutCollegeInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    totalGrads?: IntFieldUpdateOperationsInput | number
    placed?: IntFieldUpdateOperationsInput | number
    median?: IntFieldUpdateOperationsInput | number
    higherEducation?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type placementUncheckedUpdateWithoutCollegeInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    totalGrads?: IntFieldUpdateOperationsInput | number
    placed?: IntFieldUpdateOperationsInput | number
    median?: IntFieldUpdateOperationsInput | number
    higherEducation?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type placementUncheckedUpdateManyWithoutCollegeInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    totalGrads?: IntFieldUpdateOperationsInput | number
    placed?: IntFieldUpdateOperationsInput | number
    median?: IntFieldUpdateOperationsInput | number
    higherEducation?: IntFieldUpdateOperationsInput | number
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