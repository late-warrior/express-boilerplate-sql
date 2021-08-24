
/**
 * Client
**/

import * as runtime from './runtime';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model app_user
 */

export type app_user = {
  id: number
  name: string | null
  email: string
}

/**
 * Model post
 */

export type post = {
  id: number
  title: string
  createdAt: Date
  content: string | null
  published: boolean
  authorId: number
}

/**
 * Model profile
 */

export type profile = {
  id: number
  bio: string | null
  userId: number
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more App_users
 * const app_users = await prisma.app_user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more App_users
   * const app_users = await prisma.app_user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.$executeRaw``, values will be escaped automatically
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.$executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $executeRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.$queryRaw``, values will be escaped automatically
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.$queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $queryRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>

      /**
   * `prisma.app_user`: Exposes CRUD operations for the **app_user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more App_users
    * const app_users = await prisma.app_user.findMany()
    * ```
    */
  get app_user(): Prisma.app_userDelegate<GlobalReject>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.postDelegate<GlobalReject>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.profileDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

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

  /**
   * Prisma Client JS version: 2.29.1
   * Query Engine version: 1be4cd60b89afa04b192acb1ef47758a39810f3a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | null | JsonObject | JsonArray

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = undefined |  string | number | boolean | null | InputJsonObject | InputJsonArray
   type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    app_user: 'app_user',
    post: 'post',
    profile: 'profile'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model app_user
   */


  export type AggregateApp_user = {
    _count: App_userCountAggregateOutputType | null
    count: App_userCountAggregateOutputType | null
    _avg: App_userAvgAggregateOutputType | null
    avg: App_userAvgAggregateOutputType | null
    _sum: App_userSumAggregateOutputType | null
    sum: App_userSumAggregateOutputType | null
    _min: App_userMinAggregateOutputType | null
    min: App_userMinAggregateOutputType | null
    _max: App_userMaxAggregateOutputType | null
    max: App_userMaxAggregateOutputType | null
  }

  export type App_userAvgAggregateOutputType = {
    id: number | null
  }

  export type App_userSumAggregateOutputType = {
    id: number | null
  }

  export type App_userMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
  }

  export type App_userMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
  }

  export type App_userCountAggregateOutputType = {
    id: number
    name: number
    email: number
    _all: number
  }


  export type App_userAvgAggregateInputType = {
    id?: true
  }

  export type App_userSumAggregateInputType = {
    id?: true
  }

  export type App_userMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
  }

  export type App_userMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
  }

  export type App_userCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    _all?: true
  }

  export type App_userAggregateArgs = {
    /**
     * Filter which app_user to aggregate.
     * 
    **/
    where?: app_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of app_users to fetch.
     * 
    **/
    orderBy?: Enumerable<app_userOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: app_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` app_users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` app_users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned app_users
    **/
    _count?: true | App_userCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | App_userCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: App_userAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: App_userAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: App_userSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: App_userSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: App_userMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: App_userMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: App_userMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: App_userMaxAggregateInputType
  }

  export type GetApp_userAggregateType<T extends App_userAggregateArgs> = {
        [P in keyof T & keyof AggregateApp_user]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApp_user[P]>
      : GetScalarType<T[P], AggregateApp_user[P]>
  }


    
    
  export type App_userGroupByArgs = {
    where?: app_userWhereInput
    orderBy?: Enumerable<app_userOrderByInput>
    by: Array<App_userScalarFieldEnum>
    having?: app_userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: App_userCountAggregateInputType | true
    _avg?: App_userAvgAggregateInputType
    _sum?: App_userSumAggregateInputType
    _min?: App_userMinAggregateInputType
    _max?: App_userMaxAggregateInputType
  }


  export type App_userGroupByOutputType = {
    id: number
    name: string | null
    email: string
    _count: App_userCountAggregateOutputType | null
    _avg: App_userAvgAggregateOutputType | null
    _sum: App_userSumAggregateOutputType | null
    _min: App_userMinAggregateOutputType | null
    _max: App_userMaxAggregateOutputType | null
  }

  type GetApp_userGroupByPayload<T extends App_userGroupByArgs> = Promise<
    Array<
      PickArray<App_userGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof App_userGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], App_userGroupByOutputType[P]> 
            : GetScalarType<T[P], App_userGroupByOutputType[P]>
        }
      > 
    >


  export type app_userSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    posts?: boolean | postFindManyArgs
    profile?: boolean | profileArgs
  }

  export type app_userInclude = {
    posts?: boolean | postFindManyArgs
    profile?: boolean | profileArgs
  }

  export type app_userGetPayload<
    S extends boolean | null | undefined | app_userArgs,
    U = keyof S
      > = S extends true
        ? app_user
    : S extends undefined
    ? never
    : S extends app_userArgs | app_userFindManyArgs
    ?'include' extends U
    ? app_user  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'posts'
        ? Array < postGetPayload<S['include'][P]>>  :
        P extends 'profile'
        ? profileGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof app_user ?app_user [P]
  : 
          P extends 'posts'
        ? Array < postGetPayload<S['select'][P]>>  :
        P extends 'profile'
        ? profileGetPayload<S['select'][P]> | null : never
  } 
    : app_user
  : app_user


  type app_userCountArgs = Merge<
    Omit<app_userFindManyArgs, 'select' | 'include'> & {
      select?: App_userCountAggregateInputType | true
    }
  >

  export interface app_userDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one App_user that matches the filter.
     * @param {app_userFindUniqueArgs} args - Arguments to find a App_user
     * @example
     * // Get one App_user
     * const app_user = await prisma.app_user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends app_userFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, app_userFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'app_user'> extends True ? CheckSelect<T, Prisma__app_userClient<app_user>, Prisma__app_userClient<app_userGetPayload<T>>> : CheckSelect<T, Prisma__app_userClient<app_user | null >, Prisma__app_userClient<app_userGetPayload<T> | null >>

    /**
     * Find the first App_user that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {app_userFindFirstArgs} args - Arguments to find a App_user
     * @example
     * // Get one App_user
     * const app_user = await prisma.app_user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends app_userFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, app_userFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'app_user'> extends True ? CheckSelect<T, Prisma__app_userClient<app_user>, Prisma__app_userClient<app_userGetPayload<T>>> : CheckSelect<T, Prisma__app_userClient<app_user | null >, Prisma__app_userClient<app_userGetPayload<T> | null >>

    /**
     * Find zero or more App_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {app_userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all App_users
     * const app_users = await prisma.app_user.findMany()
     * 
     * // Get first 10 App_users
     * const app_users = await prisma.app_user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const app_userWithIdOnly = await prisma.app_user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends app_userFindManyArgs>(
      args?: SelectSubset<T, app_userFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<app_user>>, PrismaPromise<Array<app_userGetPayload<T>>>>

    /**
     * Create a App_user.
     * @param {app_userCreateArgs} args - Arguments to create a App_user.
     * @example
     * // Create one App_user
     * const App_user = await prisma.app_user.create({
     *   data: {
     *     // ... data to create a App_user
     *   }
     * })
     * 
    **/
    create<T extends app_userCreateArgs>(
      args: SelectSubset<T, app_userCreateArgs>
    ): CheckSelect<T, Prisma__app_userClient<app_user>, Prisma__app_userClient<app_userGetPayload<T>>>

    /**
     * Create many App_users.
     *     @param {app_userCreateManyArgs} args - Arguments to create many App_users.
     *     @example
     *     // Create many App_users
     *     const app_user = await prisma.app_user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends app_userCreateManyArgs>(
      args?: SelectSubset<T, app_userCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a App_user.
     * @param {app_userDeleteArgs} args - Arguments to delete one App_user.
     * @example
     * // Delete one App_user
     * const App_user = await prisma.app_user.delete({
     *   where: {
     *     // ... filter to delete one App_user
     *   }
     * })
     * 
    **/
    delete<T extends app_userDeleteArgs>(
      args: SelectSubset<T, app_userDeleteArgs>
    ): CheckSelect<T, Prisma__app_userClient<app_user>, Prisma__app_userClient<app_userGetPayload<T>>>

    /**
     * Update one App_user.
     * @param {app_userUpdateArgs} args - Arguments to update one App_user.
     * @example
     * // Update one App_user
     * const app_user = await prisma.app_user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends app_userUpdateArgs>(
      args: SelectSubset<T, app_userUpdateArgs>
    ): CheckSelect<T, Prisma__app_userClient<app_user>, Prisma__app_userClient<app_userGetPayload<T>>>

    /**
     * Delete zero or more App_users.
     * @param {app_userDeleteManyArgs} args - Arguments to filter App_users to delete.
     * @example
     * // Delete a few App_users
     * const { count } = await prisma.app_user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends app_userDeleteManyArgs>(
      args?: SelectSubset<T, app_userDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more App_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {app_userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many App_users
     * const app_user = await prisma.app_user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends app_userUpdateManyArgs>(
      args: SelectSubset<T, app_userUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one App_user.
     * @param {app_userUpsertArgs} args - Arguments to update or create a App_user.
     * @example
     * // Update or create a App_user
     * const app_user = await prisma.app_user.upsert({
     *   create: {
     *     // ... data to create a App_user
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the App_user we want to update
     *   }
     * })
    **/
    upsert<T extends app_userUpsertArgs>(
      args: SelectSubset<T, app_userUpsertArgs>
    ): CheckSelect<T, Prisma__app_userClient<app_user>, Prisma__app_userClient<app_userGetPayload<T>>>

    /**
     * Count the number of App_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {app_userCountArgs} args - Arguments to filter App_users to count.
     * @example
     * // Count the number of App_users
     * const count = await prisma.app_user.count({
     *   where: {
     *     // ... the filter for the App_users we want to count
     *   }
     * })
    **/
    count<T extends app_userCountArgs>(
      args?: Subset<T, app_userCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], App_userCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a App_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {App_userAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends App_userAggregateArgs>(args: Subset<T, App_userAggregateArgs>): PrismaPromise<GetApp_userAggregateType<T>>

    /**
     * Group by App_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {App_userGroupByArgs} args - Group by arguments.
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
      T extends App_userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: App_userGroupByArgs['orderBy'] }
        : { orderBy?: App_userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, App_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApp_userGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for app_user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__app_userClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    posts<T extends postFindManyArgs = {}>(args?: Subset<T, postFindManyArgs>): CheckSelect<T, PrismaPromise<Array<post>>, PrismaPromise<Array<postGetPayload<T>>>>;

    profile<T extends profileArgs = {}>(args?: Subset<T, profileArgs>): CheckSelect<T, Prisma__profileClient<profile | null >, Prisma__profileClient<profileGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * app_user findUnique
   */
  export type app_userFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the app_user
     * 
    **/
    select?: app_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: app_userInclude | null
    /**
     * Throw an Error if a app_user can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which app_user to fetch.
     * 
    **/
    where: app_userWhereUniqueInput
  }


  /**
   * app_user findFirst
   */
  export type app_userFindFirstArgs = {
    /**
     * Select specific fields to fetch from the app_user
     * 
    **/
    select?: app_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: app_userInclude | null
    /**
     * Throw an Error if a app_user can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which app_user to fetch.
     * 
    **/
    where?: app_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of app_users to fetch.
     * 
    **/
    orderBy?: Enumerable<app_userOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for app_users.
     * 
    **/
    cursor?: app_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` app_users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` app_users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of app_users.
     * 
    **/
    distinct?: Enumerable<App_userScalarFieldEnum>
  }


  /**
   * app_user findMany
   */
  export type app_userFindManyArgs = {
    /**
     * Select specific fields to fetch from the app_user
     * 
    **/
    select?: app_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: app_userInclude | null
    /**
     * Filter, which app_users to fetch.
     * 
    **/
    where?: app_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of app_users to fetch.
     * 
    **/
    orderBy?: Enumerable<app_userOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing app_users.
     * 
    **/
    cursor?: app_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` app_users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` app_users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<App_userScalarFieldEnum>
  }


  /**
   * app_user create
   */
  export type app_userCreateArgs = {
    /**
     * Select specific fields to fetch from the app_user
     * 
    **/
    select?: app_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: app_userInclude | null
    /**
     * The data needed to create a app_user.
     * 
    **/
    data: XOR<app_userCreateInput, app_userUncheckedCreateInput>
  }


  /**
   * app_user createMany
   */
  export type app_userCreateManyArgs = {
    data: Enumerable<app_userCreateManyInput>
  }


  /**
   * app_user update
   */
  export type app_userUpdateArgs = {
    /**
     * Select specific fields to fetch from the app_user
     * 
    **/
    select?: app_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: app_userInclude | null
    /**
     * The data needed to update a app_user.
     * 
    **/
    data: XOR<app_userUpdateInput, app_userUncheckedUpdateInput>
    /**
     * Choose, which app_user to update.
     * 
    **/
    where: app_userWhereUniqueInput
  }


  /**
   * app_user updateMany
   */
  export type app_userUpdateManyArgs = {
    data: XOR<app_userUpdateManyMutationInput, app_userUncheckedUpdateManyInput>
    where?: app_userWhereInput
  }


  /**
   * app_user upsert
   */
  export type app_userUpsertArgs = {
    /**
     * Select specific fields to fetch from the app_user
     * 
    **/
    select?: app_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: app_userInclude | null
    /**
     * The filter to search for the app_user to update in case it exists.
     * 
    **/
    where: app_userWhereUniqueInput
    /**
     * In case the app_user found by the `where` argument doesn't exist, create a new app_user with this data.
     * 
    **/
    create: XOR<app_userCreateInput, app_userUncheckedCreateInput>
    /**
     * In case the app_user was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<app_userUpdateInput, app_userUncheckedUpdateInput>
  }


  /**
   * app_user delete
   */
  export type app_userDeleteArgs = {
    /**
     * Select specific fields to fetch from the app_user
     * 
    **/
    select?: app_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: app_userInclude | null
    /**
     * Filter which app_user to delete.
     * 
    **/
    where: app_userWhereUniqueInput
  }


  /**
   * app_user deleteMany
   */
  export type app_userDeleteManyArgs = {
    where?: app_userWhereInput
  }


  /**
   * app_user without action
   */
  export type app_userArgs = {
    /**
     * Select specific fields to fetch from the app_user
     * 
    **/
    select?: app_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: app_userInclude | null
  }



  /**
   * Model post
   */


  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
    max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    title: string | null
    createdAt: Date | null
    content: string | null
    published: boolean | null
    authorId: number | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    title: string | null
    createdAt: Date | null
    content: string | null
    published: boolean | null
    authorId: number | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    createdAt: number
    content: number
    published: number
    authorId: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    content?: true
    published?: true
    authorId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    content?: true
    published?: true
    authorId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    content?: true
    published?: true
    authorId?: true
    _all?: true
  }

  export type PostAggregateArgs = {
    /**
     * Filter which post to aggregate.
     * 
    **/
    where?: postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     * 
    **/
    orderBy?: Enumerable<postOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }


    
    
  export type PostGroupByArgs = {
    where?: postWhereInput
    orderBy?: Enumerable<postOrderByInput>
    by: Array<PostScalarFieldEnum>
    having?: postScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }


  export type PostGroupByOutputType = {
    id: number
    title: string
    createdAt: Date
    content: string | null
    published: boolean
    authorId: number
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Promise<
    Array<
      PickArray<PostGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], PostGroupByOutputType[P]> 
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      > 
    >


  export type postSelect = {
    id?: boolean
    title?: boolean
    createdAt?: boolean
    content?: boolean
    published?: boolean
    authorId?: boolean
    app_user?: boolean | app_userArgs
  }

  export type postInclude = {
    app_user?: boolean | app_userArgs
  }

  export type postGetPayload<
    S extends boolean | null | undefined | postArgs,
    U = keyof S
      > = S extends true
        ? post
    : S extends undefined
    ? never
    : S extends postArgs | postFindManyArgs
    ?'include' extends U
    ? post  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'app_user'
        ? app_userGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof post ?post [P]
  : 
          P extends 'app_user'
        ? app_userGetPayload<S['select'][P]> : never
  } 
    : post
  : post


  type postCountArgs = Merge<
    Omit<postFindManyArgs, 'select' | 'include'> & {
      select?: PostCountAggregateInputType | true
    }
  >

  export interface postDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Post that matches the filter.
     * @param {postFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends postFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, postFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'post'> extends True ? CheckSelect<T, Prisma__postClient<post>, Prisma__postClient<postGetPayload<T>>> : CheckSelect<T, Prisma__postClient<post | null >, Prisma__postClient<postGetPayload<T> | null >>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends postFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, postFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'post'> extends True ? CheckSelect<T, Prisma__postClient<post>, Prisma__postClient<postGetPayload<T>>> : CheckSelect<T, Prisma__postClient<post | null >, Prisma__postClient<postGetPayload<T> | null >>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends postFindManyArgs>(
      args?: SelectSubset<T, postFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<post>>, PrismaPromise<Array<postGetPayload<T>>>>

    /**
     * Create a Post.
     * @param {postCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
    **/
    create<T extends postCreateArgs>(
      args: SelectSubset<T, postCreateArgs>
    ): CheckSelect<T, Prisma__postClient<post>, Prisma__postClient<postGetPayload<T>>>

    /**
     * Create many Posts.
     *     @param {postCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const post = await prisma.post.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends postCreateManyArgs>(
      args?: SelectSubset<T, postCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {postDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
    **/
    delete<T extends postDeleteArgs>(
      args: SelectSubset<T, postDeleteArgs>
    ): CheckSelect<T, Prisma__postClient<post>, Prisma__postClient<postGetPayload<T>>>

    /**
     * Update one Post.
     * @param {postUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends postUpdateArgs>(
      args: SelectSubset<T, postUpdateArgs>
    ): CheckSelect<T, Prisma__postClient<post>, Prisma__postClient<postGetPayload<T>>>

    /**
     * Delete zero or more Posts.
     * @param {postDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends postDeleteManyArgs>(
      args?: SelectSubset<T, postDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends postUpdateManyArgs>(
      args: SelectSubset<T, postUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {postUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
    **/
    upsert<T extends postUpsertArgs>(
      args: SelectSubset<T, postUpsertArgs>
    ): CheckSelect<T, Prisma__postClient<post>, Prisma__postClient<postGetPayload<T>>>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends postCountArgs>(
      args?: Subset<T, postCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__postClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    app_user<T extends app_userArgs = {}>(args?: Subset<T, app_userArgs>): CheckSelect<T, Prisma__app_userClient<app_user | null >, Prisma__app_userClient<app_userGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * post findUnique
   */
  export type postFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude | null
    /**
     * Throw an Error if a post can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which post to fetch.
     * 
    **/
    where: postWhereUniqueInput
  }


  /**
   * post findFirst
   */
  export type postFindFirstArgs = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude | null
    /**
     * Throw an Error if a post can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which post to fetch.
     * 
    **/
    where?: postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     * 
    **/
    orderBy?: Enumerable<postOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     * 
    **/
    cursor?: postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     * 
    **/
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * post findMany
   */
  export type postFindManyArgs = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude | null
    /**
     * Filter, which posts to fetch.
     * 
    **/
    where?: postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     * 
    **/
    orderBy?: Enumerable<postOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing posts.
     * 
    **/
    cursor?: postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * post create
   */
  export type postCreateArgs = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude | null
    /**
     * The data needed to create a post.
     * 
    **/
    data: XOR<postCreateInput, postUncheckedCreateInput>
  }


  /**
   * post createMany
   */
  export type postCreateManyArgs = {
    data: Enumerable<postCreateManyInput>
  }


  /**
   * post update
   */
  export type postUpdateArgs = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude | null
    /**
     * The data needed to update a post.
     * 
    **/
    data: XOR<postUpdateInput, postUncheckedUpdateInput>
    /**
     * Choose, which post to update.
     * 
    **/
    where: postWhereUniqueInput
  }


  /**
   * post updateMany
   */
  export type postUpdateManyArgs = {
    data: XOR<postUpdateManyMutationInput, postUncheckedUpdateManyInput>
    where?: postWhereInput
  }


  /**
   * post upsert
   */
  export type postUpsertArgs = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude | null
    /**
     * The filter to search for the post to update in case it exists.
     * 
    **/
    where: postWhereUniqueInput
    /**
     * In case the post found by the `where` argument doesn't exist, create a new post with this data.
     * 
    **/
    create: XOR<postCreateInput, postUncheckedCreateInput>
    /**
     * In case the post was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<postUpdateInput, postUncheckedUpdateInput>
  }


  /**
   * post delete
   */
  export type postDeleteArgs = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude | null
    /**
     * Filter which post to delete.
     * 
    **/
    where: postWhereUniqueInput
  }


  /**
   * post deleteMany
   */
  export type postDeleteManyArgs = {
    where?: postWhereInput
  }


  /**
   * post without action
   */
  export type postArgs = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude | null
  }



  /**
   * Model profile
   */


  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
    max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: number | null
    bio: string | null
    userId: number | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: number | null
    bio: string | null
    userId: number | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    bio: number
    userId: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    bio?: true
    userId?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    bio?: true
    userId?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    bio?: true
    userId?: true
    _all?: true
  }

  export type ProfileAggregateArgs = {
    /**
     * Filter which profile to aggregate.
     * 
    **/
    where?: profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     * 
    **/
    orderBy?: Enumerable<profileOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }


    
    
  export type ProfileGroupByArgs = {
    where?: profileWhereInput
    orderBy?: Enumerable<profileOrderByInput>
    by: Array<ProfileScalarFieldEnum>
    having?: profileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }


  export type ProfileGroupByOutputType = {
    id: number
    bio: string | null
    userId: number
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Promise<
    Array<
      PickArray<ProfileGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], ProfileGroupByOutputType[P]> 
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      > 
    >


  export type profileSelect = {
    id?: boolean
    bio?: boolean
    userId?: boolean
    app_user?: boolean | app_userArgs
  }

  export type profileInclude = {
    app_user?: boolean | app_userArgs
  }

  export type profileGetPayload<
    S extends boolean | null | undefined | profileArgs,
    U = keyof S
      > = S extends true
        ? profile
    : S extends undefined
    ? never
    : S extends profileArgs | profileFindManyArgs
    ?'include' extends U
    ? profile  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'app_user'
        ? app_userGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof profile ?profile [P]
  : 
          P extends 'app_user'
        ? app_userGetPayload<S['select'][P]> : never
  } 
    : profile
  : profile


  type profileCountArgs = Merge<
    Omit<profileFindManyArgs, 'select' | 'include'> & {
      select?: ProfileCountAggregateInputType | true
    }
  >

  export interface profileDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Profile that matches the filter.
     * @param {profileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends profileFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, profileFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'profile'> extends True ? CheckSelect<T, Prisma__profileClient<profile>, Prisma__profileClient<profileGetPayload<T>>> : CheckSelect<T, Prisma__profileClient<profile | null >, Prisma__profileClient<profileGetPayload<T> | null >>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends profileFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, profileFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'profile'> extends True ? CheckSelect<T, Prisma__profileClient<profile>, Prisma__profileClient<profileGetPayload<T>>> : CheckSelect<T, Prisma__profileClient<profile | null >, Prisma__profileClient<profileGetPayload<T> | null >>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends profileFindManyArgs>(
      args?: SelectSubset<T, profileFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<profile>>, PrismaPromise<Array<profileGetPayload<T>>>>

    /**
     * Create a Profile.
     * @param {profileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
    **/
    create<T extends profileCreateArgs>(
      args: SelectSubset<T, profileCreateArgs>
    ): CheckSelect<T, Prisma__profileClient<profile>, Prisma__profileClient<profileGetPayload<T>>>

    /**
     * Create many Profiles.
     *     @param {profileCreateManyArgs} args - Arguments to create many Profiles.
     *     @example
     *     // Create many Profiles
     *     const profile = await prisma.profile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends profileCreateManyArgs>(
      args?: SelectSubset<T, profileCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Profile.
     * @param {profileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
    **/
    delete<T extends profileDeleteArgs>(
      args: SelectSubset<T, profileDeleteArgs>
    ): CheckSelect<T, Prisma__profileClient<profile>, Prisma__profileClient<profileGetPayload<T>>>

    /**
     * Update one Profile.
     * @param {profileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends profileUpdateArgs>(
      args: SelectSubset<T, profileUpdateArgs>
    ): CheckSelect<T, Prisma__profileClient<profile>, Prisma__profileClient<profileGetPayload<T>>>

    /**
     * Delete zero or more Profiles.
     * @param {profileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends profileDeleteManyArgs>(
      args?: SelectSubset<T, profileDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends profileUpdateManyArgs>(
      args: SelectSubset<T, profileUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Profile.
     * @param {profileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
    **/
    upsert<T extends profileUpsertArgs>(
      args: SelectSubset<T, profileUpsertArgs>
    ): CheckSelect<T, Prisma__profileClient<profile>, Prisma__profileClient<profileGetPayload<T>>>

    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends profileCountArgs>(
      args?: Subset<T, profileCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__profileClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    app_user<T extends app_userArgs = {}>(args?: Subset<T, app_userArgs>): CheckSelect<T, Prisma__app_userClient<app_user | null >, Prisma__app_userClient<app_userGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * profile findUnique
   */
  export type profileFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the profile
     * 
    **/
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: profileInclude | null
    /**
     * Throw an Error if a profile can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which profile to fetch.
     * 
    **/
    where: profileWhereUniqueInput
  }


  /**
   * profile findFirst
   */
  export type profileFindFirstArgs = {
    /**
     * Select specific fields to fetch from the profile
     * 
    **/
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: profileInclude | null
    /**
     * Throw an Error if a profile can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which profile to fetch.
     * 
    **/
    where?: profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     * 
    **/
    orderBy?: Enumerable<profileOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profiles.
     * 
    **/
    cursor?: profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profiles.
     * 
    **/
    distinct?: Enumerable<ProfileScalarFieldEnum>
  }


  /**
   * profile findMany
   */
  export type profileFindManyArgs = {
    /**
     * Select specific fields to fetch from the profile
     * 
    **/
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: profileInclude | null
    /**
     * Filter, which profiles to fetch.
     * 
    **/
    where?: profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     * 
    **/
    orderBy?: Enumerable<profileOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing profiles.
     * 
    **/
    cursor?: profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProfileScalarFieldEnum>
  }


  /**
   * profile create
   */
  export type profileCreateArgs = {
    /**
     * Select specific fields to fetch from the profile
     * 
    **/
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: profileInclude | null
    /**
     * The data needed to create a profile.
     * 
    **/
    data: XOR<profileCreateInput, profileUncheckedCreateInput>
  }


  /**
   * profile createMany
   */
  export type profileCreateManyArgs = {
    data: Enumerable<profileCreateManyInput>
  }


  /**
   * profile update
   */
  export type profileUpdateArgs = {
    /**
     * Select specific fields to fetch from the profile
     * 
    **/
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: profileInclude | null
    /**
     * The data needed to update a profile.
     * 
    **/
    data: XOR<profileUpdateInput, profileUncheckedUpdateInput>
    /**
     * Choose, which profile to update.
     * 
    **/
    where: profileWhereUniqueInput
  }


  /**
   * profile updateMany
   */
  export type profileUpdateManyArgs = {
    data: XOR<profileUpdateManyMutationInput, profileUncheckedUpdateManyInput>
    where?: profileWhereInput
  }


  /**
   * profile upsert
   */
  export type profileUpsertArgs = {
    /**
     * Select specific fields to fetch from the profile
     * 
    **/
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: profileInclude | null
    /**
     * The filter to search for the profile to update in case it exists.
     * 
    **/
    where: profileWhereUniqueInput
    /**
     * In case the profile found by the `where` argument doesn't exist, create a new profile with this data.
     * 
    **/
    create: XOR<profileCreateInput, profileUncheckedCreateInput>
    /**
     * In case the profile was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<profileUpdateInput, profileUncheckedUpdateInput>
  }


  /**
   * profile delete
   */
  export type profileDeleteArgs = {
    /**
     * Select specific fields to fetch from the profile
     * 
    **/
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: profileInclude | null
    /**
     * Filter which profile to delete.
     * 
    **/
    where: profileWhereUniqueInput
  }


  /**
   * profile deleteMany
   */
  export type profileDeleteManyArgs = {
    where?: profileWhereInput
  }


  /**
   * profile without action
   */
  export type profileArgs = {
    /**
     * Select specific fields to fetch from the profile
     * 
    **/
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: profileInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const App_userScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email'
  };

  export type App_userScalarFieldEnum = (typeof App_userScalarFieldEnum)[keyof typeof App_userScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    createdAt: 'createdAt',
    content: 'content',
    published: 'published',
    authorId: 'authorId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    bio: 'bio',
    userId: 'userId'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type app_userWhereInput = {
    AND?: Enumerable<app_userWhereInput>
    OR?: Enumerable<app_userWhereInput>
    NOT?: Enumerable<app_userWhereInput>
    id?: IntFilter | number
    name?: StringNullableFilter | string | null
    email?: StringFilter | string
    posts?: PostListRelationFilter
    profile?: XOR<ProfileRelationFilter, profileWhereInput> | null
  }

  export type app_userOrderByInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type app_userWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type app_userScalarWhereWithAggregatesInput = {
    AND?: Enumerable<app_userScalarWhereWithAggregatesInput>
    OR?: Enumerable<app_userScalarWhereWithAggregatesInput>
    NOT?: Enumerable<app_userScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringNullableWithAggregatesFilter | string | null
    email?: StringWithAggregatesFilter | string
  }

  export type postWhereInput = {
    AND?: Enumerable<postWhereInput>
    OR?: Enumerable<postWhereInput>
    NOT?: Enumerable<postWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    content?: StringNullableFilter | string | null
    published?: BoolFilter | boolean
    authorId?: IntFilter | number
    app_user?: XOR<App_userRelationFilter, app_userWhereInput>
  }

  export type postOrderByInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    content?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
  }

  export type postWhereUniqueInput = {
    id?: number
  }

  export type postScalarWhereWithAggregatesInput = {
    AND?: Enumerable<postScalarWhereWithAggregatesInput>
    OR?: Enumerable<postScalarWhereWithAggregatesInput>
    NOT?: Enumerable<postScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    content?: StringNullableWithAggregatesFilter | string | null
    published?: BoolWithAggregatesFilter | boolean
    authorId?: IntWithAggregatesFilter | number
  }

  export type profileWhereInput = {
    AND?: Enumerable<profileWhereInput>
    OR?: Enumerable<profileWhereInput>
    NOT?: Enumerable<profileWhereInput>
    id?: IntFilter | number
    bio?: StringNullableFilter | string | null
    userId?: IntFilter | number
    app_user?: XOR<App_userRelationFilter, app_userWhereInput>
  }

  export type profileOrderByInput = {
    id?: SortOrder
    bio?: SortOrder
    userId?: SortOrder
  }

  export type profileWhereUniqueInput = {
    id?: number
    userId?: number
  }

  export type profileScalarWhereWithAggregatesInput = {
    AND?: Enumerable<profileScalarWhereWithAggregatesInput>
    OR?: Enumerable<profileScalarWhereWithAggregatesInput>
    NOT?: Enumerable<profileScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    bio?: StringNullableWithAggregatesFilter | string | null
    userId?: IntWithAggregatesFilter | number
  }

  export type app_userCreateInput = {
    name?: string | null
    email: string
    posts?: postCreateNestedManyWithoutApp_userInput
    profile?: profileCreateNestedOneWithoutApp_userInput
  }

  export type app_userUncheckedCreateInput = {
    id?: number
    name?: string | null
    email: string
    posts?: postUncheckedCreateNestedManyWithoutApp_userInput
    profile?: profileUncheckedCreateNestedOneWithoutApp_userInput
  }

  export type app_userUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    posts?: postUpdateManyWithoutApp_userInput
    profile?: profileUpdateOneWithoutApp_userInput
  }

  export type app_userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    posts?: postUncheckedUpdateManyWithoutApp_userInput
    profile?: profileUncheckedUpdateOneWithoutApp_userInput
  }

  export type app_userCreateManyInput = {
    name?: string | null
    email: string
  }

  export type app_userUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type app_userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type postCreateInput = {
    title: string
    createdAt?: Date | string
    content?: string | null
    published?: boolean
    app_user: app_userCreateNestedOneWithoutPostsInput
  }

  export type postUncheckedCreateInput = {
    id?: number
    title: string
    createdAt?: Date | string
    content?: string | null
    published?: boolean
    authorId: number
  }

  export type postUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    app_user?: app_userUpdateOneRequiredWithoutPostsInput
  }

  export type postUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type postCreateManyInput = {
    title: string
    createdAt?: Date | string
    content?: string | null
    published?: boolean
    authorId: number
  }

  export type postUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
  }

  export type postUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type profileCreateInput = {
    bio?: string | null
    app_user: app_userCreateNestedOneWithoutProfileInput
  }

  export type profileUncheckedCreateInput = {
    id?: number
    bio?: string | null
    userId: number
  }

  export type profileUpdateInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    app_user?: app_userUpdateOneRequiredWithoutProfileInput
  }

  export type profileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type profileCreateManyInput = {
    bio?: string | null
    userId: number
  }

  export type profileUpdateManyMutationInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type PostListRelationFilter = {
    every?: postWhereInput
    some?: postWhereInput
    none?: postWhereInput
  }

  export type ProfileRelationFilter = {
    is?: profileWhereInput | null
    isNot?: profileWhereInput | null
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _avg?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntFilter
    _min?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntFilter
    _max?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringNullableFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringFilter
    _max?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringFilter
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type App_userRelationFilter = {
    is?: app_userWhereInput
    isNot?: app_userWhereInput
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDateTimeFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedBoolFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedBoolFilter
    _max?: NestedBoolFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedBoolFilter
  }

  export type postCreateNestedManyWithoutApp_userInput = {
    create?: XOR<Enumerable<postCreateWithoutApp_userInput>, Enumerable<postUncheckedCreateWithoutApp_userInput>>
    connectOrCreate?: Enumerable<postCreateOrConnectWithoutApp_userInput>
    createMany?: postCreateManyApp_userInputEnvelope
    connect?: Enumerable<postWhereUniqueInput>
  }

  export type profileCreateNestedOneWithoutApp_userInput = {
    create?: XOR<profileCreateWithoutApp_userInput, profileUncheckedCreateWithoutApp_userInput>
    connectOrCreate?: profileCreateOrConnectWithoutApp_userInput
    connect?: profileWhereUniqueInput
  }

  export type postUncheckedCreateNestedManyWithoutApp_userInput = {
    create?: XOR<Enumerable<postCreateWithoutApp_userInput>, Enumerable<postUncheckedCreateWithoutApp_userInput>>
    connectOrCreate?: Enumerable<postCreateOrConnectWithoutApp_userInput>
    createMany?: postCreateManyApp_userInputEnvelope
    connect?: Enumerable<postWhereUniqueInput>
  }

  export type profileUncheckedCreateNestedOneWithoutApp_userInput = {
    create?: XOR<profileCreateWithoutApp_userInput, profileUncheckedCreateWithoutApp_userInput>
    connectOrCreate?: profileCreateOrConnectWithoutApp_userInput
    connect?: profileWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type postUpdateManyWithoutApp_userInput = {
    create?: XOR<Enumerable<postCreateWithoutApp_userInput>, Enumerable<postUncheckedCreateWithoutApp_userInput>>
    connectOrCreate?: Enumerable<postCreateOrConnectWithoutApp_userInput>
    upsert?: Enumerable<postUpsertWithWhereUniqueWithoutApp_userInput>
    createMany?: postCreateManyApp_userInputEnvelope
    connect?: Enumerable<postWhereUniqueInput>
    set?: Enumerable<postWhereUniqueInput>
    disconnect?: Enumerable<postWhereUniqueInput>
    delete?: Enumerable<postWhereUniqueInput>
    update?: Enumerable<postUpdateWithWhereUniqueWithoutApp_userInput>
    updateMany?: Enumerable<postUpdateManyWithWhereWithoutApp_userInput>
    deleteMany?: Enumerable<postScalarWhereInput>
  }

  export type profileUpdateOneWithoutApp_userInput = {
    create?: XOR<profileCreateWithoutApp_userInput, profileUncheckedCreateWithoutApp_userInput>
    connectOrCreate?: profileCreateOrConnectWithoutApp_userInput
    upsert?: profileUpsertWithoutApp_userInput
    connect?: profileWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<profileUpdateWithoutApp_userInput, profileUncheckedUpdateWithoutApp_userInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type postUncheckedUpdateManyWithoutApp_userInput = {
    create?: XOR<Enumerable<postCreateWithoutApp_userInput>, Enumerable<postUncheckedCreateWithoutApp_userInput>>
    connectOrCreate?: Enumerable<postCreateOrConnectWithoutApp_userInput>
    upsert?: Enumerable<postUpsertWithWhereUniqueWithoutApp_userInput>
    createMany?: postCreateManyApp_userInputEnvelope
    connect?: Enumerable<postWhereUniqueInput>
    set?: Enumerable<postWhereUniqueInput>
    disconnect?: Enumerable<postWhereUniqueInput>
    delete?: Enumerable<postWhereUniqueInput>
    update?: Enumerable<postUpdateWithWhereUniqueWithoutApp_userInput>
    updateMany?: Enumerable<postUpdateManyWithWhereWithoutApp_userInput>
    deleteMany?: Enumerable<postScalarWhereInput>
  }

  export type profileUncheckedUpdateOneWithoutApp_userInput = {
    create?: XOR<profileCreateWithoutApp_userInput, profileUncheckedCreateWithoutApp_userInput>
    connectOrCreate?: profileCreateOrConnectWithoutApp_userInput
    upsert?: profileUpsertWithoutApp_userInput
    connect?: profileWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<profileUpdateWithoutApp_userInput, profileUncheckedUpdateWithoutApp_userInput>
  }

  export type app_userCreateNestedOneWithoutPostsInput = {
    create?: XOR<app_userCreateWithoutPostsInput, app_userUncheckedCreateWithoutPostsInput>
    connectOrCreate?: app_userCreateOrConnectWithoutPostsInput
    connect?: app_userWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type app_userUpdateOneRequiredWithoutPostsInput = {
    create?: XOR<app_userCreateWithoutPostsInput, app_userUncheckedCreateWithoutPostsInput>
    connectOrCreate?: app_userCreateOrConnectWithoutPostsInput
    upsert?: app_userUpsertWithoutPostsInput
    connect?: app_userWhereUniqueInput
    update?: XOR<app_userUpdateWithoutPostsInput, app_userUncheckedUpdateWithoutPostsInput>
  }

  export type app_userCreateNestedOneWithoutProfileInput = {
    create?: XOR<app_userCreateWithoutProfileInput, app_userUncheckedCreateWithoutProfileInput>
    connectOrCreate?: app_userCreateOrConnectWithoutProfileInput
    connect?: app_userWhereUniqueInput
  }

  export type app_userUpdateOneRequiredWithoutProfileInput = {
    create?: XOR<app_userCreateWithoutProfileInput, app_userUncheckedCreateWithoutProfileInput>
    connectOrCreate?: app_userCreateOrConnectWithoutProfileInput
    upsert?: app_userUpsertWithoutProfileInput
    connect?: app_userWhereUniqueInput
    update?: XOR<app_userUpdateWithoutProfileInput, app_userUncheckedUpdateWithoutProfileInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _avg?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntFilter
    _min?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntFilter
    _max?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringFilter
    _max?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDateTimeFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedBoolFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedBoolFilter
    _max?: NestedBoolFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedBoolFilter
  }

  export type postCreateWithoutApp_userInput = {
    title: string
    createdAt?: Date | string
    content?: string | null
    published?: boolean
  }

  export type postUncheckedCreateWithoutApp_userInput = {
    id?: number
    title: string
    createdAt?: Date | string
    content?: string | null
    published?: boolean
  }

  export type postCreateOrConnectWithoutApp_userInput = {
    where: postWhereUniqueInput
    create: XOR<postCreateWithoutApp_userInput, postUncheckedCreateWithoutApp_userInput>
  }

  export type postCreateManyApp_userInputEnvelope = {
    data: Enumerable<postCreateManyApp_userInput>
  }

  export type profileCreateWithoutApp_userInput = {
    bio?: string | null
  }

  export type profileUncheckedCreateWithoutApp_userInput = {
    id?: number
    bio?: string | null
  }

  export type profileCreateOrConnectWithoutApp_userInput = {
    where: profileWhereUniqueInput
    create: XOR<profileCreateWithoutApp_userInput, profileUncheckedCreateWithoutApp_userInput>
  }

  export type postUpsertWithWhereUniqueWithoutApp_userInput = {
    where: postWhereUniqueInput
    update: XOR<postUpdateWithoutApp_userInput, postUncheckedUpdateWithoutApp_userInput>
    create: XOR<postCreateWithoutApp_userInput, postUncheckedCreateWithoutApp_userInput>
  }

  export type postUpdateWithWhereUniqueWithoutApp_userInput = {
    where: postWhereUniqueInput
    data: XOR<postUpdateWithoutApp_userInput, postUncheckedUpdateWithoutApp_userInput>
  }

  export type postUpdateManyWithWhereWithoutApp_userInput = {
    where: postScalarWhereInput
    data: XOR<postUpdateManyMutationInput, postUncheckedUpdateManyWithoutPostsInput>
  }

  export type postScalarWhereInput = {
    AND?: Enumerable<postScalarWhereInput>
    OR?: Enumerable<postScalarWhereInput>
    NOT?: Enumerable<postScalarWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    content?: StringNullableFilter | string | null
    published?: BoolFilter | boolean
    authorId?: IntFilter | number
  }

  export type profileUpsertWithoutApp_userInput = {
    update: XOR<profileUpdateWithoutApp_userInput, profileUncheckedUpdateWithoutApp_userInput>
    create: XOR<profileCreateWithoutApp_userInput, profileUncheckedCreateWithoutApp_userInput>
  }

  export type profileUpdateWithoutApp_userInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profileUncheckedUpdateWithoutApp_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type app_userCreateWithoutPostsInput = {
    name?: string | null
    email: string
    profile?: profileCreateNestedOneWithoutApp_userInput
  }

  export type app_userUncheckedCreateWithoutPostsInput = {
    id?: number
    name?: string | null
    email: string
    profile?: profileUncheckedCreateNestedOneWithoutApp_userInput
  }

  export type app_userCreateOrConnectWithoutPostsInput = {
    where: app_userWhereUniqueInput
    create: XOR<app_userCreateWithoutPostsInput, app_userUncheckedCreateWithoutPostsInput>
  }

  export type app_userUpsertWithoutPostsInput = {
    update: XOR<app_userUpdateWithoutPostsInput, app_userUncheckedUpdateWithoutPostsInput>
    create: XOR<app_userCreateWithoutPostsInput, app_userUncheckedCreateWithoutPostsInput>
  }

  export type app_userUpdateWithoutPostsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    profile?: profileUpdateOneWithoutApp_userInput
  }

  export type app_userUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    profile?: profileUncheckedUpdateOneWithoutApp_userInput
  }

  export type app_userCreateWithoutProfileInput = {
    name?: string | null
    email: string
    posts?: postCreateNestedManyWithoutApp_userInput
  }

  export type app_userUncheckedCreateWithoutProfileInput = {
    id?: number
    name?: string | null
    email: string
    posts?: postUncheckedCreateNestedManyWithoutApp_userInput
  }

  export type app_userCreateOrConnectWithoutProfileInput = {
    where: app_userWhereUniqueInput
    create: XOR<app_userCreateWithoutProfileInput, app_userUncheckedCreateWithoutProfileInput>
  }

  export type app_userUpsertWithoutProfileInput = {
    update: XOR<app_userUpdateWithoutProfileInput, app_userUncheckedUpdateWithoutProfileInput>
    create: XOR<app_userCreateWithoutProfileInput, app_userUncheckedCreateWithoutProfileInput>
  }

  export type app_userUpdateWithoutProfileInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    posts?: postUpdateManyWithoutApp_userInput
  }

  export type app_userUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    posts?: postUncheckedUpdateManyWithoutApp_userInput
  }

  export type postCreateManyApp_userInput = {
    title: string
    createdAt?: Date | string
    content?: string | null
    published?: boolean
  }

  export type postUpdateWithoutApp_userInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
  }

  export type postUncheckedUpdateWithoutApp_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
  }

  export type postUncheckedUpdateManyWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
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
  export const dmmf: runtime.DMMF.Document;
}