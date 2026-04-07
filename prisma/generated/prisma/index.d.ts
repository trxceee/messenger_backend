
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Attachment
 * 
 */
export type Attachment = $Result.DefaultSelection<Prisma.$AttachmentPayload>
/**
 * Model ChatMember
 * 
 */
export type ChatMember = $Result.DefaultSelection<Prisma.$ChatMemberPayload>
/**
 * Model Chat
 * 
 */
export type Chat = $Result.DefaultSelection<Prisma.$ChatPayload>
/**
 * Model UserContacts
 * 
 */
export type UserContacts = $Result.DefaultSelection<Prisma.$UserContactsPayload>
/**
 * Model Codes
 * 
 */
export type Codes = $Result.DefaultSelection<Prisma.$CodesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const WhoCanSeen: {
  ALL: 'ALL',
  CONTACTS: 'CONTACTS',
  I: 'I'
};

export type WhoCanSeen = (typeof WhoCanSeen)[keyof typeof WhoCanSeen]

}

export type WhoCanSeen = $Enums.WhoCanSeen

export const WhoCanSeen: typeof $Enums.WhoCanSeen

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attachment`: Exposes CRUD operations for the **Attachment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attachments
    * const attachments = await prisma.attachment.findMany()
    * ```
    */
  get attachment(): Prisma.AttachmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMember`: Exposes CRUD operations for the **ChatMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMembers
    * const chatMembers = await prisma.chatMember.findMany()
    * ```
    */
  get chatMember(): Prisma.ChatMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.ChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userContacts`: Exposes CRUD operations for the **UserContacts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserContacts
    * const userContacts = await prisma.userContacts.findMany()
    * ```
    */
  get userContacts(): Prisma.UserContactsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.codes`: Exposes CRUD operations for the **Codes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Codes
    * const codes = await prisma.codes.findMany()
    * ```
    */
  get codes(): Prisma.CodesDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
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
    User: 'User',
    Message: 'Message',
    Attachment: 'Attachment',
    ChatMember: 'ChatMember',
    Chat: 'Chat',
    UserContacts: 'UserContacts',
    Codes: 'Codes'
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
      modelProps: "user" | "message" | "attachment" | "chatMember" | "chat" | "userContacts" | "codes"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Attachment: {
        payload: Prisma.$AttachmentPayload<ExtArgs>
        fields: Prisma.AttachmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttachmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttachmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          findFirst: {
            args: Prisma.AttachmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttachmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          findMany: {
            args: Prisma.AttachmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>[]
          }
          create: {
            args: Prisma.AttachmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          createMany: {
            args: Prisma.AttachmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttachmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>[]
          }
          delete: {
            args: Prisma.AttachmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          update: {
            args: Prisma.AttachmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          deleteMany: {
            args: Prisma.AttachmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttachmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttachmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>[]
          }
          upsert: {
            args: Prisma.AttachmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          aggregate: {
            args: Prisma.AttachmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttachment>
          }
          groupBy: {
            args: Prisma.AttachmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttachmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttachmentCountArgs<ExtArgs>
            result: $Utils.Optional<AttachmentCountAggregateOutputType> | number
          }
        }
      }
      ChatMember: {
        payload: Prisma.$ChatMemberPayload<ExtArgs>
        fields: Prisma.ChatMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>
          }
          findFirst: {
            args: Prisma.ChatMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>
          }
          findMany: {
            args: Prisma.ChatMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>[]
          }
          create: {
            args: Prisma.ChatMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>
          }
          createMany: {
            args: Prisma.ChatMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>[]
          }
          delete: {
            args: Prisma.ChatMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>
          }
          update: {
            args: Prisma.ChatMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>
          }
          deleteMany: {
            args: Prisma.ChatMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>[]
          }
          upsert: {
            args: Prisma.ChatMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>
          }
          aggregate: {
            args: Prisma.ChatMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMember>
          }
          groupBy: {
            args: Prisma.ChatMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMemberCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMemberCountAggregateOutputType> | number
          }
        }
      }
      Chat: {
        payload: Prisma.$ChatPayload<ExtArgs>
        fields: Prisma.ChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findFirst: {
            args: Prisma.ChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findMany: {
            args: Prisma.ChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          create: {
            args: Prisma.ChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          createMany: {
            args: Prisma.ChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          delete: {
            args: Prisma.ChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          update: {
            args: Prisma.ChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          deleteMany: {
            args: Prisma.ChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          upsert: {
            args: Prisma.ChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.ChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatCountArgs<ExtArgs>
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      UserContacts: {
        payload: Prisma.$UserContactsPayload<ExtArgs>
        fields: Prisma.UserContactsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserContactsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContactsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserContactsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContactsPayload>
          }
          findFirst: {
            args: Prisma.UserContactsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContactsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserContactsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContactsPayload>
          }
          findMany: {
            args: Prisma.UserContactsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContactsPayload>[]
          }
          create: {
            args: Prisma.UserContactsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContactsPayload>
          }
          createMany: {
            args: Prisma.UserContactsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserContactsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContactsPayload>[]
          }
          delete: {
            args: Prisma.UserContactsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContactsPayload>
          }
          update: {
            args: Prisma.UserContactsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContactsPayload>
          }
          deleteMany: {
            args: Prisma.UserContactsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserContactsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserContactsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContactsPayload>[]
          }
          upsert: {
            args: Prisma.UserContactsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContactsPayload>
          }
          aggregate: {
            args: Prisma.UserContactsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserContacts>
          }
          groupBy: {
            args: Prisma.UserContactsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserContactsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserContactsCountArgs<ExtArgs>
            result: $Utils.Optional<UserContactsCountAggregateOutputType> | number
          }
        }
      }
      Codes: {
        payload: Prisma.$CodesPayload<ExtArgs>
        fields: Prisma.CodesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CodesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CodesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodesPayload>
          }
          findFirst: {
            args: Prisma.CodesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CodesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodesPayload>
          }
          findMany: {
            args: Prisma.CodesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodesPayload>[]
          }
          create: {
            args: Prisma.CodesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodesPayload>
          }
          createMany: {
            args: Prisma.CodesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CodesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodesPayload>[]
          }
          delete: {
            args: Prisma.CodesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodesPayload>
          }
          update: {
            args: Prisma.CodesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodesPayload>
          }
          deleteMany: {
            args: Prisma.CodesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CodesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CodesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodesPayload>[]
          }
          upsert: {
            args: Prisma.CodesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodesPayload>
          }
          aggregate: {
            args: Prisma.CodesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCodes>
          }
          groupBy: {
            args: Prisma.CodesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CodesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CodesCountArgs<ExtArgs>
            result: $Utils.Optional<CodesCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    message?: MessageOmit
    attachment?: AttachmentOmit
    chatMember?: ChatMemberOmit
    chat?: ChatOmit
    userContacts?: UserContactsOmit
    codes?: CodesOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    contacts: number
    chatMembers: number
    messages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contacts?: boolean | UserCountOutputTypeCountContactsArgs
    chatMembers?: boolean | UserCountOutputTypeCountChatMembersArgs
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserContactsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type MessageCountOutputType
   */

  export type MessageCountOutputType = {
    attachments: number
  }

  export type MessageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attachments?: boolean | MessageCountOutputTypeCountAttachmentsArgs
  }

  // Custom InputTypes
  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageCountOutputType
     */
    select?: MessageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentWhereInput
  }


  /**
   * Count Type ChatCountOutputType
   */

  export type ChatCountOutputType = {
    members: number
    messages: number
  }

  export type ChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | ChatCountOutputTypeCountMembersArgs
    messages?: boolean | ChatCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCountOutputType
     */
    select?: ChatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMemberWhereInput
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    number: string | null
    username: string | null
    bio: string | null
    birthday: Date | null
    firstName: string | null
    lastName: string | null
    phoneVisible: $Enums.WhoCanSeen | null
    emailVisible: $Enums.WhoCanSeen | null
    bioVisible: $Enums.WhoCanSeen | null
    avatarsVisible: $Enums.WhoCanSeen | null
    birthdayVisible: $Enums.WhoCanSeen | null
    cloudPassword: string | null
    isOnline: boolean | null
    lastSeen: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    number: string | null
    username: string | null
    bio: string | null
    birthday: Date | null
    firstName: string | null
    lastName: string | null
    phoneVisible: $Enums.WhoCanSeen | null
    emailVisible: $Enums.WhoCanSeen | null
    bioVisible: $Enums.WhoCanSeen | null
    avatarsVisible: $Enums.WhoCanSeen | null
    birthdayVisible: $Enums.WhoCanSeen | null
    cloudPassword: string | null
    isOnline: boolean | null
    lastSeen: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    number: number
    username: number
    avatars: number
    bio: number
    birthday: number
    firstName: number
    lastName: number
    blockedUsers: number
    phoneVisible: number
    emailVisible: number
    bioVisible: number
    avatarsVisible: number
    birthdayVisible: number
    cloudPassword: number
    isOnline: number
    lastSeen: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    number?: true
    username?: true
    bio?: true
    birthday?: true
    firstName?: true
    lastName?: true
    phoneVisible?: true
    emailVisible?: true
    bioVisible?: true
    avatarsVisible?: true
    birthdayVisible?: true
    cloudPassword?: true
    isOnline?: true
    lastSeen?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    number?: true
    username?: true
    bio?: true
    birthday?: true
    firstName?: true
    lastName?: true
    phoneVisible?: true
    emailVisible?: true
    bioVisible?: true
    avatarsVisible?: true
    birthdayVisible?: true
    cloudPassword?: true
    isOnline?: true
    lastSeen?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    number?: true
    username?: true
    avatars?: true
    bio?: true
    birthday?: true
    firstName?: true
    lastName?: true
    blockedUsers?: true
    phoneVisible?: true
    emailVisible?: true
    bioVisible?: true
    avatarsVisible?: true
    birthdayVisible?: true
    cloudPassword?: true
    isOnline?: true
    lastSeen?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string | null
    number: string
    username: string
    avatars: string[]
    bio: string | null
    birthday: Date | null
    firstName: string
    lastName: string
    blockedUsers: string[]
    phoneVisible: $Enums.WhoCanSeen
    emailVisible: $Enums.WhoCanSeen
    bioVisible: $Enums.WhoCanSeen
    avatarsVisible: $Enums.WhoCanSeen
    birthdayVisible: $Enums.WhoCanSeen
    cloudPassword: string | null
    isOnline: boolean
    lastSeen: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    number?: boolean
    username?: boolean
    avatars?: boolean
    bio?: boolean
    birthday?: boolean
    firstName?: boolean
    lastName?: boolean
    blockedUsers?: boolean
    phoneVisible?: boolean
    emailVisible?: boolean
    bioVisible?: boolean
    avatarsVisible?: boolean
    birthdayVisible?: boolean
    cloudPassword?: boolean
    isOnline?: boolean
    lastSeen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contacts?: boolean | User$contactsArgs<ExtArgs>
    chatMembers?: boolean | User$chatMembersArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    number?: boolean
    username?: boolean
    avatars?: boolean
    bio?: boolean
    birthday?: boolean
    firstName?: boolean
    lastName?: boolean
    blockedUsers?: boolean
    phoneVisible?: boolean
    emailVisible?: boolean
    bioVisible?: boolean
    avatarsVisible?: boolean
    birthdayVisible?: boolean
    cloudPassword?: boolean
    isOnline?: boolean
    lastSeen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    number?: boolean
    username?: boolean
    avatars?: boolean
    bio?: boolean
    birthday?: boolean
    firstName?: boolean
    lastName?: boolean
    blockedUsers?: boolean
    phoneVisible?: boolean
    emailVisible?: boolean
    bioVisible?: boolean
    avatarsVisible?: boolean
    birthdayVisible?: boolean
    cloudPassword?: boolean
    isOnline?: boolean
    lastSeen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    number?: boolean
    username?: boolean
    avatars?: boolean
    bio?: boolean
    birthday?: boolean
    firstName?: boolean
    lastName?: boolean
    blockedUsers?: boolean
    phoneVisible?: boolean
    emailVisible?: boolean
    bioVisible?: boolean
    avatarsVisible?: boolean
    birthdayVisible?: boolean
    cloudPassword?: boolean
    isOnline?: boolean
    lastSeen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "number" | "username" | "avatars" | "bio" | "birthday" | "firstName" | "lastName" | "blockedUsers" | "phoneVisible" | "emailVisible" | "bioVisible" | "avatarsVisible" | "birthdayVisible" | "cloudPassword" | "isOnline" | "lastSeen" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contacts?: boolean | User$contactsArgs<ExtArgs>
    chatMembers?: boolean | User$chatMembersArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      contacts: Prisma.$UserContactsPayload<ExtArgs>[]
      chatMembers: Prisma.$ChatMemberPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      number: string
      username: string
      avatars: string[]
      bio: string | null
      birthday: Date | null
      firstName: string
      lastName: string
      blockedUsers: string[]
      phoneVisible: $Enums.WhoCanSeen
      emailVisible: $Enums.WhoCanSeen
      bioVisible: $Enums.WhoCanSeen
      avatarsVisible: $Enums.WhoCanSeen
      birthdayVisible: $Enums.WhoCanSeen
      cloudPassword: string | null
      isOnline: boolean
      lastSeen: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contacts<T extends User$contactsArgs<ExtArgs> = {}>(args?: Subset<T, User$contactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserContactsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatMembers<T extends User$chatMembersArgs<ExtArgs> = {}>(args?: Subset<T, User$chatMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends User$messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly number: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly avatars: FieldRef<"User", 'String[]'>
    readonly bio: FieldRef<"User", 'String'>
    readonly birthday: FieldRef<"User", 'DateTime'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly blockedUsers: FieldRef<"User", 'String[]'>
    readonly phoneVisible: FieldRef<"User", 'WhoCanSeen'>
    readonly emailVisible: FieldRef<"User", 'WhoCanSeen'>
    readonly bioVisible: FieldRef<"User", 'WhoCanSeen'>
    readonly avatarsVisible: FieldRef<"User", 'WhoCanSeen'>
    readonly birthdayVisible: FieldRef<"User", 'WhoCanSeen'>
    readonly cloudPassword: FieldRef<"User", 'String'>
    readonly isOnline: FieldRef<"User", 'Boolean'>
    readonly lastSeen: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.contacts
   */
  export type User$contactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContacts
     */
    select?: UserContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContacts
     */
    omit?: UserContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContactsInclude<ExtArgs> | null
    where?: UserContactsWhereInput
    orderBy?: UserContactsOrderByWithRelationInput | UserContactsOrderByWithRelationInput[]
    cursor?: UserContactsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserContactsScalarFieldEnum | UserContactsScalarFieldEnum[]
  }

  /**
   * User.chatMembers
   */
  export type User$chatMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    where?: ChatMemberWhereInput
    orderBy?: ChatMemberOrderByWithRelationInput | ChatMemberOrderByWithRelationInput[]
    cursor?: ChatMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMemberScalarFieldEnum | ChatMemberScalarFieldEnum[]
  }

  /**
   * User.messages
   */
  export type User$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    text: string | null
    chatId: string | null
    senderId: string | null
    isRead: boolean | null
    isBlocked: boolean | null
    editedAt: Date | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    text: string | null
    chatId: string | null
    senderId: string | null
    isRead: boolean | null
    isBlocked: boolean | null
    editedAt: Date | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    text: number
    chatId: number
    senderId: number
    isRead: number
    isBlocked: number
    editedAt: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    text?: true
    chatId?: true
    senderId?: true
    isRead?: true
    isBlocked?: true
    editedAt?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    text?: true
    chatId?: true
    senderId?: true
    isRead?: true
    isBlocked?: true
    editedAt?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    text?: true
    chatId?: true
    senderId?: true
    isRead?: true
    isBlocked?: true
    editedAt?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    text: string
    chatId: string
    senderId: string
    isRead: boolean
    isBlocked: boolean
    editedAt: Date | null
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    chatId?: boolean
    senderId?: boolean
    isRead?: boolean
    isBlocked?: boolean
    editedAt?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attachments?: boolean | Message$attachmentsArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    chatId?: boolean
    senderId?: boolean
    isRead?: boolean
    isBlocked?: boolean
    editedAt?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    chatId?: boolean
    senderId?: boolean
    isRead?: boolean
    isBlocked?: boolean
    editedAt?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    text?: boolean
    chatId?: boolean
    senderId?: boolean
    isRead?: boolean
    isBlocked?: boolean
    editedAt?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "chatId" | "senderId" | "isRead" | "isBlocked" | "editedAt" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attachments?: boolean | Message$attachmentsArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      attachments: Prisma.$AttachmentPayload<ExtArgs>[]
      chat: Prisma.$ChatPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      chatId: string
      senderId: string
      isRead: boolean
      isBlocked: boolean
      editedAt: Date | null
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attachments<T extends Message$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, Message$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chat<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly text: FieldRef<"Message", 'String'>
    readonly chatId: FieldRef<"Message", 'String'>
    readonly senderId: FieldRef<"Message", 'String'>
    readonly isRead: FieldRef<"Message", 'Boolean'>
    readonly isBlocked: FieldRef<"Message", 'Boolean'>
    readonly editedAt: FieldRef<"Message", 'DateTime'>
    readonly deletedAt: FieldRef<"Message", 'DateTime'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly updatedAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message.attachments
   */
  export type Message$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    where?: AttachmentWhereInput
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    cursor?: AttachmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model Attachment
   */

  export type AggregateAttachment = {
    _count: AttachmentCountAggregateOutputType | null
    _avg: AttachmentAvgAggregateOutputType | null
    _sum: AttachmentSumAggregateOutputType | null
    _min: AttachmentMinAggregateOutputType | null
    _max: AttachmentMaxAggregateOutputType | null
  }

  export type AttachmentAvgAggregateOutputType = {
    fileSize: number | null
  }

  export type AttachmentSumAggregateOutputType = {
    fileSize: number | null
  }

  export type AttachmentMinAggregateOutputType = {
    id: string | null
    chatId: string | null
    messageId: string | null
    uuidURI: string | null
    fileName: string | null
    fileExt: string | null
    fileSize: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttachmentMaxAggregateOutputType = {
    id: string | null
    chatId: string | null
    messageId: string | null
    uuidURI: string | null
    fileName: string | null
    fileExt: string | null
    fileSize: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttachmentCountAggregateOutputType = {
    id: number
    chatId: number
    messageId: number
    uuidURI: number
    fileName: number
    fileExt: number
    fileSize: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AttachmentAvgAggregateInputType = {
    fileSize?: true
  }

  export type AttachmentSumAggregateInputType = {
    fileSize?: true
  }

  export type AttachmentMinAggregateInputType = {
    id?: true
    chatId?: true
    messageId?: true
    uuidURI?: true
    fileName?: true
    fileExt?: true
    fileSize?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttachmentMaxAggregateInputType = {
    id?: true
    chatId?: true
    messageId?: true
    uuidURI?: true
    fileName?: true
    fileExt?: true
    fileSize?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttachmentCountAggregateInputType = {
    id?: true
    chatId?: true
    messageId?: true
    uuidURI?: true
    fileName?: true
    fileExt?: true
    fileSize?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AttachmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachment to aggregate.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attachments
    **/
    _count?: true | AttachmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttachmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttachmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttachmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttachmentMaxAggregateInputType
  }

  export type GetAttachmentAggregateType<T extends AttachmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAttachment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttachment[P]>
      : GetScalarType<T[P], AggregateAttachment[P]>
  }




  export type AttachmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentWhereInput
    orderBy?: AttachmentOrderByWithAggregationInput | AttachmentOrderByWithAggregationInput[]
    by: AttachmentScalarFieldEnum[] | AttachmentScalarFieldEnum
    having?: AttachmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttachmentCountAggregateInputType | true
    _avg?: AttachmentAvgAggregateInputType
    _sum?: AttachmentSumAggregateInputType
    _min?: AttachmentMinAggregateInputType
    _max?: AttachmentMaxAggregateInputType
  }

  export type AttachmentGroupByOutputType = {
    id: string
    chatId: string
    messageId: string
    uuidURI: string
    fileName: string
    fileExt: string
    fileSize: number
    createdAt: Date
    updatedAt: Date
    _count: AttachmentCountAggregateOutputType | null
    _avg: AttachmentAvgAggregateOutputType | null
    _sum: AttachmentSumAggregateOutputType | null
    _min: AttachmentMinAggregateOutputType | null
    _max: AttachmentMaxAggregateOutputType | null
  }

  type GetAttachmentGroupByPayload<T extends AttachmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttachmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttachmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttachmentGroupByOutputType[P]>
            : GetScalarType<T[P], AttachmentGroupByOutputType[P]>
        }
      >
    >


  export type AttachmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    messageId?: boolean
    uuidURI?: boolean
    fileName?: boolean
    fileExt?: boolean
    fileSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachment"]>

  export type AttachmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    messageId?: boolean
    uuidURI?: boolean
    fileName?: boolean
    fileExt?: boolean
    fileSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachment"]>

  export type AttachmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    messageId?: boolean
    uuidURI?: boolean
    fileName?: boolean
    fileExt?: boolean
    fileSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachment"]>

  export type AttachmentSelectScalar = {
    id?: boolean
    chatId?: boolean
    messageId?: boolean
    uuidURI?: boolean
    fileName?: boolean
    fileExt?: boolean
    fileSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AttachmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chatId" | "messageId" | "uuidURI" | "fileName" | "fileExt" | "fileSize" | "createdAt" | "updatedAt", ExtArgs["result"]["attachment"]>
  export type AttachmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }
  export type AttachmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }
  export type AttachmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }

  export type $AttachmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attachment"
    objects: {
      message: Prisma.$MessagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chatId: string
      messageId: string
      uuidURI: string
      fileName: string
      fileExt: string
      fileSize: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["attachment"]>
    composites: {}
  }

  type AttachmentGetPayload<S extends boolean | null | undefined | AttachmentDefaultArgs> = $Result.GetResult<Prisma.$AttachmentPayload, S>

  type AttachmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttachmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttachmentCountAggregateInputType | true
    }

  export interface AttachmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attachment'], meta: { name: 'Attachment' } }
    /**
     * Find zero or one Attachment that matches the filter.
     * @param {AttachmentFindUniqueArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttachmentFindUniqueArgs>(args: SelectSubset<T, AttachmentFindUniqueArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attachment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttachmentFindUniqueOrThrowArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttachmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AttachmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindFirstArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttachmentFindFirstArgs>(args?: SelectSubset<T, AttachmentFindFirstArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindFirstOrThrowArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttachmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AttachmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attachments
     * const attachments = await prisma.attachment.findMany()
     * 
     * // Get first 10 Attachments
     * const attachments = await prisma.attachment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attachmentWithIdOnly = await prisma.attachment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttachmentFindManyArgs>(args?: SelectSubset<T, AttachmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attachment.
     * @param {AttachmentCreateArgs} args - Arguments to create a Attachment.
     * @example
     * // Create one Attachment
     * const Attachment = await prisma.attachment.create({
     *   data: {
     *     // ... data to create a Attachment
     *   }
     * })
     * 
     */
    create<T extends AttachmentCreateArgs>(args: SelectSubset<T, AttachmentCreateArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attachments.
     * @param {AttachmentCreateManyArgs} args - Arguments to create many Attachments.
     * @example
     * // Create many Attachments
     * const attachment = await prisma.attachment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttachmentCreateManyArgs>(args?: SelectSubset<T, AttachmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attachments and returns the data saved in the database.
     * @param {AttachmentCreateManyAndReturnArgs} args - Arguments to create many Attachments.
     * @example
     * // Create many Attachments
     * const attachment = await prisma.attachment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attachments and only return the `id`
     * const attachmentWithIdOnly = await prisma.attachment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttachmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AttachmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attachment.
     * @param {AttachmentDeleteArgs} args - Arguments to delete one Attachment.
     * @example
     * // Delete one Attachment
     * const Attachment = await prisma.attachment.delete({
     *   where: {
     *     // ... filter to delete one Attachment
     *   }
     * })
     * 
     */
    delete<T extends AttachmentDeleteArgs>(args: SelectSubset<T, AttachmentDeleteArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attachment.
     * @param {AttachmentUpdateArgs} args - Arguments to update one Attachment.
     * @example
     * // Update one Attachment
     * const attachment = await prisma.attachment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttachmentUpdateArgs>(args: SelectSubset<T, AttachmentUpdateArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attachments.
     * @param {AttachmentDeleteManyArgs} args - Arguments to filter Attachments to delete.
     * @example
     * // Delete a few Attachments
     * const { count } = await prisma.attachment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttachmentDeleteManyArgs>(args?: SelectSubset<T, AttachmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attachments
     * const attachment = await prisma.attachment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttachmentUpdateManyArgs>(args: SelectSubset<T, AttachmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments and returns the data updated in the database.
     * @param {AttachmentUpdateManyAndReturnArgs} args - Arguments to update many Attachments.
     * @example
     * // Update many Attachments
     * const attachment = await prisma.attachment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attachments and only return the `id`
     * const attachmentWithIdOnly = await prisma.attachment.updateManyAndReturn({
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
    updateManyAndReturn<T extends AttachmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AttachmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attachment.
     * @param {AttachmentUpsertArgs} args - Arguments to update or create a Attachment.
     * @example
     * // Update or create a Attachment
     * const attachment = await prisma.attachment.upsert({
     *   create: {
     *     // ... data to create a Attachment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attachment we want to update
     *   }
     * })
     */
    upsert<T extends AttachmentUpsertArgs>(args: SelectSubset<T, AttachmentUpsertArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentCountArgs} args - Arguments to filter Attachments to count.
     * @example
     * // Count the number of Attachments
     * const count = await prisma.attachment.count({
     *   where: {
     *     // ... the filter for the Attachments we want to count
     *   }
     * })
    **/
    count<T extends AttachmentCountArgs>(
      args?: Subset<T, AttachmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttachmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttachmentAggregateArgs>(args: Subset<T, AttachmentAggregateArgs>): Prisma.PrismaPromise<GetAttachmentAggregateType<T>>

    /**
     * Group by Attachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentGroupByArgs} args - Group by arguments.
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
      T extends AttachmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttachmentGroupByArgs['orderBy'] }
        : { orderBy?: AttachmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attachment model
   */
  readonly fields: AttachmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attachment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttachmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    message<T extends MessageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MessageDefaultArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Attachment model
   */
  interface AttachmentFieldRefs {
    readonly id: FieldRef<"Attachment", 'String'>
    readonly chatId: FieldRef<"Attachment", 'String'>
    readonly messageId: FieldRef<"Attachment", 'String'>
    readonly uuidURI: FieldRef<"Attachment", 'String'>
    readonly fileName: FieldRef<"Attachment", 'String'>
    readonly fileExt: FieldRef<"Attachment", 'String'>
    readonly fileSize: FieldRef<"Attachment", 'Int'>
    readonly createdAt: FieldRef<"Attachment", 'DateTime'>
    readonly updatedAt: FieldRef<"Attachment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attachment findUnique
   */
  export type AttachmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment findUniqueOrThrow
   */
  export type AttachmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment findFirst
   */
  export type AttachmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment findFirstOrThrow
   */
  export type AttachmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment findMany
   */
  export type AttachmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachments to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment create
   */
  export type AttachmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Attachment.
     */
    data: XOR<AttachmentCreateInput, AttachmentUncheckedCreateInput>
  }

  /**
   * Attachment createMany
   */
  export type AttachmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attachments.
     */
    data: AttachmentCreateManyInput | AttachmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attachment createManyAndReturn
   */
  export type AttachmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * The data used to create many Attachments.
     */
    data: AttachmentCreateManyInput | AttachmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attachment update
   */
  export type AttachmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Attachment.
     */
    data: XOR<AttachmentUpdateInput, AttachmentUncheckedUpdateInput>
    /**
     * Choose, which Attachment to update.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment updateMany
   */
  export type AttachmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attachments.
     */
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyInput>
    /**
     * Filter which Attachments to update
     */
    where?: AttachmentWhereInput
    /**
     * Limit how many Attachments to update.
     */
    limit?: number
  }

  /**
   * Attachment updateManyAndReturn
   */
  export type AttachmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * The data used to update Attachments.
     */
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyInput>
    /**
     * Filter which Attachments to update
     */
    where?: AttachmentWhereInput
    /**
     * Limit how many Attachments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attachment upsert
   */
  export type AttachmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Attachment to update in case it exists.
     */
    where: AttachmentWhereUniqueInput
    /**
     * In case the Attachment found by the `where` argument doesn't exist, create a new Attachment with this data.
     */
    create: XOR<AttachmentCreateInput, AttachmentUncheckedCreateInput>
    /**
     * In case the Attachment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttachmentUpdateInput, AttachmentUncheckedUpdateInput>
  }

  /**
   * Attachment delete
   */
  export type AttachmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter which Attachment to delete.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment deleteMany
   */
  export type AttachmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachments to delete
     */
    where?: AttachmentWhereInput
    /**
     * Limit how many Attachments to delete.
     */
    limit?: number
  }

  /**
   * Attachment without action
   */
  export type AttachmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
  }


  /**
   * Model ChatMember
   */

  export type AggregateChatMember = {
    _count: ChatMemberCountAggregateOutputType | null
    _min: ChatMemberMinAggregateOutputType | null
    _max: ChatMemberMaxAggregateOutputType | null
  }

  export type ChatMemberMinAggregateOutputType = {
    id: string | null
    chatId: string | null
    userId: string | null
    joinedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatMemberMaxAggregateOutputType = {
    id: string | null
    chatId: string | null
    userId: string | null
    joinedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatMemberCountAggregateOutputType = {
    id: number
    chatId: number
    userId: number
    joinedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatMemberMinAggregateInputType = {
    id?: true
    chatId?: true
    userId?: true
    joinedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatMemberMaxAggregateInputType = {
    id?: true
    chatId?: true
    userId?: true
    joinedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatMemberCountAggregateInputType = {
    id?: true
    chatId?: true
    userId?: true
    joinedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMember to aggregate.
     */
    where?: ChatMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMembers to fetch.
     */
    orderBy?: ChatMemberOrderByWithRelationInput | ChatMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMembers
    **/
    _count?: true | ChatMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMemberMaxAggregateInputType
  }

  export type GetChatMemberAggregateType<T extends ChatMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMember[P]>
      : GetScalarType<T[P], AggregateChatMember[P]>
  }




  export type ChatMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMemberWhereInput
    orderBy?: ChatMemberOrderByWithAggregationInput | ChatMemberOrderByWithAggregationInput[]
    by: ChatMemberScalarFieldEnum[] | ChatMemberScalarFieldEnum
    having?: ChatMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMemberCountAggregateInputType | true
    _min?: ChatMemberMinAggregateInputType
    _max?: ChatMemberMaxAggregateInputType
  }

  export type ChatMemberGroupByOutputType = {
    id: string
    chatId: string
    userId: string
    joinedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: ChatMemberCountAggregateOutputType | null
    _min: ChatMemberMinAggregateOutputType | null
    _max: ChatMemberMaxAggregateOutputType | null
  }

  type GetChatMemberGroupByPayload<T extends ChatMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMemberGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMemberGroupByOutputType[P]>
        }
      >
    >


  export type ChatMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    userId?: boolean
    joinedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMember"]>

  export type ChatMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    userId?: boolean
    joinedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMember"]>

  export type ChatMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    userId?: boolean
    joinedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMember"]>

  export type ChatMemberSelectScalar = {
    id?: boolean
    chatId?: boolean
    userId?: boolean
    joinedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chatId" | "userId" | "joinedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["chatMember"]>
  export type ChatMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMember"
    objects: {
      chat: Prisma.$ChatPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chatId: string
      userId: string
      joinedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chatMember"]>
    composites: {}
  }

  type ChatMemberGetPayload<S extends boolean | null | undefined | ChatMemberDefaultArgs> = $Result.GetResult<Prisma.$ChatMemberPayload, S>

  type ChatMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMemberCountAggregateInputType | true
    }

  export interface ChatMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMember'], meta: { name: 'ChatMember' } }
    /**
     * Find zero or one ChatMember that matches the filter.
     * @param {ChatMemberFindUniqueArgs} args - Arguments to find a ChatMember
     * @example
     * // Get one ChatMember
     * const chatMember = await prisma.chatMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMemberFindUniqueArgs>(args: SelectSubset<T, ChatMemberFindUniqueArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMemberFindUniqueOrThrowArgs} args - Arguments to find a ChatMember
     * @example
     * // Get one ChatMember
     * const chatMember = await prisma.chatMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMemberFindFirstArgs} args - Arguments to find a ChatMember
     * @example
     * // Get one ChatMember
     * const chatMember = await prisma.chatMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMemberFindFirstArgs>(args?: SelectSubset<T, ChatMemberFindFirstArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMemberFindFirstOrThrowArgs} args - Arguments to find a ChatMember
     * @example
     * // Get one ChatMember
     * const chatMember = await prisma.chatMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMembers
     * const chatMembers = await prisma.chatMember.findMany()
     * 
     * // Get first 10 ChatMembers
     * const chatMembers = await prisma.chatMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMemberWithIdOnly = await prisma.chatMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMemberFindManyArgs>(args?: SelectSubset<T, ChatMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMember.
     * @param {ChatMemberCreateArgs} args - Arguments to create a ChatMember.
     * @example
     * // Create one ChatMember
     * const ChatMember = await prisma.chatMember.create({
     *   data: {
     *     // ... data to create a ChatMember
     *   }
     * })
     * 
     */
    create<T extends ChatMemberCreateArgs>(args: SelectSubset<T, ChatMemberCreateArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMembers.
     * @param {ChatMemberCreateManyArgs} args - Arguments to create many ChatMembers.
     * @example
     * // Create many ChatMembers
     * const chatMember = await prisma.chatMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMemberCreateManyArgs>(args?: SelectSubset<T, ChatMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMembers and returns the data saved in the database.
     * @param {ChatMemberCreateManyAndReturnArgs} args - Arguments to create many ChatMembers.
     * @example
     * // Create many ChatMembers
     * const chatMember = await prisma.chatMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMembers and only return the `id`
     * const chatMemberWithIdOnly = await prisma.chatMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMember.
     * @param {ChatMemberDeleteArgs} args - Arguments to delete one ChatMember.
     * @example
     * // Delete one ChatMember
     * const ChatMember = await prisma.chatMember.delete({
     *   where: {
     *     // ... filter to delete one ChatMember
     *   }
     * })
     * 
     */
    delete<T extends ChatMemberDeleteArgs>(args: SelectSubset<T, ChatMemberDeleteArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMember.
     * @param {ChatMemberUpdateArgs} args - Arguments to update one ChatMember.
     * @example
     * // Update one ChatMember
     * const chatMember = await prisma.chatMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMemberUpdateArgs>(args: SelectSubset<T, ChatMemberUpdateArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMembers.
     * @param {ChatMemberDeleteManyArgs} args - Arguments to filter ChatMembers to delete.
     * @example
     * // Delete a few ChatMembers
     * const { count } = await prisma.chatMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMemberDeleteManyArgs>(args?: SelectSubset<T, ChatMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMembers
     * const chatMember = await prisma.chatMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMemberUpdateManyArgs>(args: SelectSubset<T, ChatMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMembers and returns the data updated in the database.
     * @param {ChatMemberUpdateManyAndReturnArgs} args - Arguments to update many ChatMembers.
     * @example
     * // Update many ChatMembers
     * const chatMember = await prisma.chatMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMembers and only return the `id`
     * const chatMemberWithIdOnly = await prisma.chatMember.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMember.
     * @param {ChatMemberUpsertArgs} args - Arguments to update or create a ChatMember.
     * @example
     * // Update or create a ChatMember
     * const chatMember = await prisma.chatMember.upsert({
     *   create: {
     *     // ... data to create a ChatMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMember we want to update
     *   }
     * })
     */
    upsert<T extends ChatMemberUpsertArgs>(args: SelectSubset<T, ChatMemberUpsertArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMemberCountArgs} args - Arguments to filter ChatMembers to count.
     * @example
     * // Count the number of ChatMembers
     * const count = await prisma.chatMember.count({
     *   where: {
     *     // ... the filter for the ChatMembers we want to count
     *   }
     * })
    **/
    count<T extends ChatMemberCountArgs>(
      args?: Subset<T, ChatMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatMemberAggregateArgs>(args: Subset<T, ChatMemberAggregateArgs>): Prisma.PrismaPromise<GetChatMemberAggregateType<T>>

    /**
     * Group by ChatMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMemberGroupByArgs} args - Group by arguments.
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
      T extends ChatMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMemberGroupByArgs['orderBy'] }
        : { orderBy?: ChatMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMember model
   */
  readonly fields: ChatMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChatMember model
   */
  interface ChatMemberFieldRefs {
    readonly id: FieldRef<"ChatMember", 'String'>
    readonly chatId: FieldRef<"ChatMember", 'String'>
    readonly userId: FieldRef<"ChatMember", 'String'>
    readonly joinedAt: FieldRef<"ChatMember", 'DateTime'>
    readonly createdAt: FieldRef<"ChatMember", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatMember findUnique
   */
  export type ChatMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatMember to fetch.
     */
    where: ChatMemberWhereUniqueInput
  }

  /**
   * ChatMember findUniqueOrThrow
   */
  export type ChatMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatMember to fetch.
     */
    where: ChatMemberWhereUniqueInput
  }

  /**
   * ChatMember findFirst
   */
  export type ChatMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatMember to fetch.
     */
    where?: ChatMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMembers to fetch.
     */
    orderBy?: ChatMemberOrderByWithRelationInput | ChatMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMembers.
     */
    cursor?: ChatMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMembers.
     */
    distinct?: ChatMemberScalarFieldEnum | ChatMemberScalarFieldEnum[]
  }

  /**
   * ChatMember findFirstOrThrow
   */
  export type ChatMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatMember to fetch.
     */
    where?: ChatMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMembers to fetch.
     */
    orderBy?: ChatMemberOrderByWithRelationInput | ChatMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMembers.
     */
    cursor?: ChatMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMembers.
     */
    distinct?: ChatMemberScalarFieldEnum | ChatMemberScalarFieldEnum[]
  }

  /**
   * ChatMember findMany
   */
  export type ChatMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatMembers to fetch.
     */
    where?: ChatMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMembers to fetch.
     */
    orderBy?: ChatMemberOrderByWithRelationInput | ChatMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMembers.
     */
    cursor?: ChatMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMembers.
     */
    skip?: number
    distinct?: ChatMemberScalarFieldEnum | ChatMemberScalarFieldEnum[]
  }

  /**
   * ChatMember create
   */
  export type ChatMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMember.
     */
    data: XOR<ChatMemberCreateInput, ChatMemberUncheckedCreateInput>
  }

  /**
   * ChatMember createMany
   */
  export type ChatMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMembers.
     */
    data: ChatMemberCreateManyInput | ChatMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMember createManyAndReturn
   */
  export type ChatMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMembers.
     */
    data: ChatMemberCreateManyInput | ChatMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMember update
   */
  export type ChatMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMember.
     */
    data: XOR<ChatMemberUpdateInput, ChatMemberUncheckedUpdateInput>
    /**
     * Choose, which ChatMember to update.
     */
    where: ChatMemberWhereUniqueInput
  }

  /**
   * ChatMember updateMany
   */
  export type ChatMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMembers.
     */
    data: XOR<ChatMemberUpdateManyMutationInput, ChatMemberUncheckedUpdateManyInput>
    /**
     * Filter which ChatMembers to update
     */
    where?: ChatMemberWhereInput
    /**
     * Limit how many ChatMembers to update.
     */
    limit?: number
  }

  /**
   * ChatMember updateManyAndReturn
   */
  export type ChatMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * The data used to update ChatMembers.
     */
    data: XOR<ChatMemberUpdateManyMutationInput, ChatMemberUncheckedUpdateManyInput>
    /**
     * Filter which ChatMembers to update
     */
    where?: ChatMemberWhereInput
    /**
     * Limit how many ChatMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMember upsert
   */
  export type ChatMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMember to update in case it exists.
     */
    where: ChatMemberWhereUniqueInput
    /**
     * In case the ChatMember found by the `where` argument doesn't exist, create a new ChatMember with this data.
     */
    create: XOR<ChatMemberCreateInput, ChatMemberUncheckedCreateInput>
    /**
     * In case the ChatMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMemberUpdateInput, ChatMemberUncheckedUpdateInput>
  }

  /**
   * ChatMember delete
   */
  export type ChatMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * Filter which ChatMember to delete.
     */
    where: ChatMemberWhereUniqueInput
  }

  /**
   * ChatMember deleteMany
   */
  export type ChatMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMembers to delete
     */
    where?: ChatMemberWhereInput
    /**
     * Limit how many ChatMembers to delete.
     */
    limit?: number
  }

  /**
   * ChatMember without action
   */
  export type ChatMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
  }


  /**
   * Model Chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatMinAggregateOutputType = {
    id: string | null
    chatName: string | null
    isGroup: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatMaxAggregateOutputType = {
    id: string | null
    chatName: string | null
    isGroup: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    chatName: number
    isGroup: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatMinAggregateInputType = {
    id?: true
    chatName?: true
    isGroup?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    chatName?: true
    isGroup?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    chatName?: true
    isGroup?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chat to aggregate.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type ChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithAggregationInput | ChatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: string
    chatName: string | null
    isGroup: boolean
    createdAt: Date
    updatedAt: Date
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends ChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type ChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatName?: boolean
    isGroup?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    members?: boolean | Chat$membersArgs<ExtArgs>
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatName?: boolean
    isGroup?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatName?: boolean
    isGroup?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectScalar = {
    id?: boolean
    chatName?: boolean
    isGroup?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chatName" | "isGroup" | "createdAt" | "updatedAt", ExtArgs["result"]["chat"]>
  export type ChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Chat$membersArgs<ExtArgs>
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chat"
    objects: {
      members: Prisma.$ChatMemberPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chatName: string | null
      isGroup: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }

  type ChatGetPayload<S extends boolean | null | undefined | ChatDefaultArgs> = $Result.GetResult<Prisma.$ChatPayload, S>

  type ChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface ChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chat'], meta: { name: 'Chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {ChatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatFindUniqueArgs>(args: SelectSubset<T, ChatFindUniqueArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatFindFirstArgs>(args?: SelectSubset<T, ChatFindFirstArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatFindManyArgs>(args?: SelectSubset<T, ChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat.
     * @param {ChatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
     */
    create<T extends ChatCreateArgs>(args: SelectSubset<T, ChatCreateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chats.
     * @param {ChatCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatCreateManyArgs>(args?: SelectSubset<T, ChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chats and returns the data saved in the database.
     * @param {ChatCreateManyAndReturnArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chat.
     * @param {ChatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
     */
    delete<T extends ChatDeleteArgs>(args: SelectSubset<T, ChatDeleteArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat.
     * @param {ChatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatUpdateArgs>(args: SelectSubset<T, ChatUpdateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chats.
     * @param {ChatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatDeleteManyArgs>(args?: SelectSubset<T, ChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatUpdateManyArgs>(args: SelectSubset<T, ChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats and returns the data updated in the database.
     * @param {ChatUpdateManyAndReturnArgs} args - Arguments to update many Chats.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chat.
     * @param {ChatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
     */
    upsert<T extends ChatUpsertArgs>(args: SelectSubset<T, ChatUpsertArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends ChatCountArgs>(
      args?: Subset<T, ChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupByArgs} args - Group by arguments.
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
      T extends ChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chat model
   */
  readonly fields: ChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Chat$membersArgs<ExtArgs> = {}>(args?: Subset<T, Chat$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends Chat$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Chat$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Chat model
   */
  interface ChatFieldRefs {
    readonly id: FieldRef<"Chat", 'String'>
    readonly chatName: FieldRef<"Chat", 'String'>
    readonly isGroup: FieldRef<"Chat", 'Boolean'>
    readonly createdAt: FieldRef<"Chat", 'DateTime'>
    readonly updatedAt: FieldRef<"Chat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chat findUnique
   */
  export type ChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findUniqueOrThrow
   */
  export type ChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findFirst
   */
  export type ChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findFirstOrThrow
   */
  export type ChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findMany
   */
  export type ChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat create
   */
  export type ChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to create a Chat.
     */
    data: XOR<ChatCreateInput, ChatUncheckedCreateInput>
  }

  /**
   * Chat createMany
   */
  export type ChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chat createManyAndReturn
   */
  export type ChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chat update
   */
  export type ChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to update a Chat.
     */
    data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    /**
     * Choose, which Chat to update.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat updateMany
   */
  export type ChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
  }

  /**
   * Chat updateManyAndReturn
   */
  export type ChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
  }

  /**
   * Chat upsert
   */
  export type ChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The filter to search for the Chat to update in case it exists.
     */
    where: ChatWhereUniqueInput
    /**
     * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
     */
    create: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    /**
     * In case the Chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
  }

  /**
   * Chat delete
   */
  export type ChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter which Chat to delete.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat deleteMany
   */
  export type ChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chats to delete
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to delete.
     */
    limit?: number
  }

  /**
   * Chat.members
   */
  export type Chat$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    where?: ChatMemberWhereInput
    orderBy?: ChatMemberOrderByWithRelationInput | ChatMemberOrderByWithRelationInput[]
    cursor?: ChatMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMemberScalarFieldEnum | ChatMemberScalarFieldEnum[]
  }

  /**
   * Chat.messages
   */
  export type Chat$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Chat without action
   */
  export type ChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
  }


  /**
   * Model UserContacts
   */

  export type AggregateUserContacts = {
    _count: UserContactsCountAggregateOutputType | null
    _min: UserContactsMinAggregateOutputType | null
    _max: UserContactsMaxAggregateOutputType | null
  }

  export type UserContactsMinAggregateOutputType = {
    id: string | null
    username: string | null
    usernameContact: string | null
    firstNameContact: string | null
    lastNameContact: string | null
    avatarsContact: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserContactsMaxAggregateOutputType = {
    id: string | null
    username: string | null
    usernameContact: string | null
    firstNameContact: string | null
    lastNameContact: string | null
    avatarsContact: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserContactsCountAggregateOutputType = {
    id: number
    username: number
    usernameContact: number
    firstNameContact: number
    lastNameContact: number
    avatarsContact: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserContactsMinAggregateInputType = {
    id?: true
    username?: true
    usernameContact?: true
    firstNameContact?: true
    lastNameContact?: true
    avatarsContact?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserContactsMaxAggregateInputType = {
    id?: true
    username?: true
    usernameContact?: true
    firstNameContact?: true
    lastNameContact?: true
    avatarsContact?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserContactsCountAggregateInputType = {
    id?: true
    username?: true
    usernameContact?: true
    firstNameContact?: true
    lastNameContact?: true
    avatarsContact?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserContactsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserContacts to aggregate.
     */
    where?: UserContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserContacts to fetch.
     */
    orderBy?: UserContactsOrderByWithRelationInput | UserContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserContacts
    **/
    _count?: true | UserContactsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserContactsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserContactsMaxAggregateInputType
  }

  export type GetUserContactsAggregateType<T extends UserContactsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserContacts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserContacts[P]>
      : GetScalarType<T[P], AggregateUserContacts[P]>
  }




  export type UserContactsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserContactsWhereInput
    orderBy?: UserContactsOrderByWithAggregationInput | UserContactsOrderByWithAggregationInput[]
    by: UserContactsScalarFieldEnum[] | UserContactsScalarFieldEnum
    having?: UserContactsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserContactsCountAggregateInputType | true
    _min?: UserContactsMinAggregateInputType
    _max?: UserContactsMaxAggregateInputType
  }

  export type UserContactsGroupByOutputType = {
    id: string
    username: string
    usernameContact: string
    firstNameContact: string
    lastNameContact: string
    avatarsContact: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserContactsCountAggregateOutputType | null
    _min: UserContactsMinAggregateOutputType | null
    _max: UserContactsMaxAggregateOutputType | null
  }

  type GetUserContactsGroupByPayload<T extends UserContactsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserContactsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserContactsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserContactsGroupByOutputType[P]>
            : GetScalarType<T[P], UserContactsGroupByOutputType[P]>
        }
      >
    >


  export type UserContactsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    usernameContact?: boolean
    firstNameContact?: boolean
    lastNameContact?: boolean
    avatarsContact?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userContacts"]>

  export type UserContactsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    usernameContact?: boolean
    firstNameContact?: boolean
    lastNameContact?: boolean
    avatarsContact?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userContacts"]>

  export type UserContactsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    usernameContact?: boolean
    firstNameContact?: boolean
    lastNameContact?: boolean
    avatarsContact?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userContacts"]>

  export type UserContactsSelectScalar = {
    id?: boolean
    username?: boolean
    usernameContact?: boolean
    firstNameContact?: boolean
    lastNameContact?: boolean
    avatarsContact?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserContactsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "usernameContact" | "firstNameContact" | "lastNameContact" | "avatarsContact" | "createdAt" | "updatedAt", ExtArgs["result"]["userContacts"]>
  export type UserContactsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserContactsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserContactsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserContactsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserContacts"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      usernameContact: string
      firstNameContact: string
      lastNameContact: string
      avatarsContact: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userContacts"]>
    composites: {}
  }

  type UserContactsGetPayload<S extends boolean | null | undefined | UserContactsDefaultArgs> = $Result.GetResult<Prisma.$UserContactsPayload, S>

  type UserContactsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserContactsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserContactsCountAggregateInputType | true
    }

  export interface UserContactsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserContacts'], meta: { name: 'UserContacts' } }
    /**
     * Find zero or one UserContacts that matches the filter.
     * @param {UserContactsFindUniqueArgs} args - Arguments to find a UserContacts
     * @example
     * // Get one UserContacts
     * const userContacts = await prisma.userContacts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserContactsFindUniqueArgs>(args: SelectSubset<T, UserContactsFindUniqueArgs<ExtArgs>>): Prisma__UserContactsClient<$Result.GetResult<Prisma.$UserContactsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserContacts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserContactsFindUniqueOrThrowArgs} args - Arguments to find a UserContacts
     * @example
     * // Get one UserContacts
     * const userContacts = await prisma.userContacts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserContactsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserContactsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserContactsClient<$Result.GetResult<Prisma.$UserContactsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserContacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContactsFindFirstArgs} args - Arguments to find a UserContacts
     * @example
     * // Get one UserContacts
     * const userContacts = await prisma.userContacts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserContactsFindFirstArgs>(args?: SelectSubset<T, UserContactsFindFirstArgs<ExtArgs>>): Prisma__UserContactsClient<$Result.GetResult<Prisma.$UserContactsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserContacts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContactsFindFirstOrThrowArgs} args - Arguments to find a UserContacts
     * @example
     * // Get one UserContacts
     * const userContacts = await prisma.userContacts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserContactsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserContactsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserContactsClient<$Result.GetResult<Prisma.$UserContactsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserContacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContactsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserContacts
     * const userContacts = await prisma.userContacts.findMany()
     * 
     * // Get first 10 UserContacts
     * const userContacts = await prisma.userContacts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userContactsWithIdOnly = await prisma.userContacts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserContactsFindManyArgs>(args?: SelectSubset<T, UserContactsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserContactsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserContacts.
     * @param {UserContactsCreateArgs} args - Arguments to create a UserContacts.
     * @example
     * // Create one UserContacts
     * const UserContacts = await prisma.userContacts.create({
     *   data: {
     *     // ... data to create a UserContacts
     *   }
     * })
     * 
     */
    create<T extends UserContactsCreateArgs>(args: SelectSubset<T, UserContactsCreateArgs<ExtArgs>>): Prisma__UserContactsClient<$Result.GetResult<Prisma.$UserContactsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserContacts.
     * @param {UserContactsCreateManyArgs} args - Arguments to create many UserContacts.
     * @example
     * // Create many UserContacts
     * const userContacts = await prisma.userContacts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserContactsCreateManyArgs>(args?: SelectSubset<T, UserContactsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserContacts and returns the data saved in the database.
     * @param {UserContactsCreateManyAndReturnArgs} args - Arguments to create many UserContacts.
     * @example
     * // Create many UserContacts
     * const userContacts = await prisma.userContacts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserContacts and only return the `id`
     * const userContactsWithIdOnly = await prisma.userContacts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserContactsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserContactsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserContactsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserContacts.
     * @param {UserContactsDeleteArgs} args - Arguments to delete one UserContacts.
     * @example
     * // Delete one UserContacts
     * const UserContacts = await prisma.userContacts.delete({
     *   where: {
     *     // ... filter to delete one UserContacts
     *   }
     * })
     * 
     */
    delete<T extends UserContactsDeleteArgs>(args: SelectSubset<T, UserContactsDeleteArgs<ExtArgs>>): Prisma__UserContactsClient<$Result.GetResult<Prisma.$UserContactsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserContacts.
     * @param {UserContactsUpdateArgs} args - Arguments to update one UserContacts.
     * @example
     * // Update one UserContacts
     * const userContacts = await prisma.userContacts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserContactsUpdateArgs>(args: SelectSubset<T, UserContactsUpdateArgs<ExtArgs>>): Prisma__UserContactsClient<$Result.GetResult<Prisma.$UserContactsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserContacts.
     * @param {UserContactsDeleteManyArgs} args - Arguments to filter UserContacts to delete.
     * @example
     * // Delete a few UserContacts
     * const { count } = await prisma.userContacts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserContactsDeleteManyArgs>(args?: SelectSubset<T, UserContactsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContactsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserContacts
     * const userContacts = await prisma.userContacts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserContactsUpdateManyArgs>(args: SelectSubset<T, UserContactsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserContacts and returns the data updated in the database.
     * @param {UserContactsUpdateManyAndReturnArgs} args - Arguments to update many UserContacts.
     * @example
     * // Update many UserContacts
     * const userContacts = await prisma.userContacts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserContacts and only return the `id`
     * const userContactsWithIdOnly = await prisma.userContacts.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserContactsUpdateManyAndReturnArgs>(args: SelectSubset<T, UserContactsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserContactsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserContacts.
     * @param {UserContactsUpsertArgs} args - Arguments to update or create a UserContacts.
     * @example
     * // Update or create a UserContacts
     * const userContacts = await prisma.userContacts.upsert({
     *   create: {
     *     // ... data to create a UserContacts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserContacts we want to update
     *   }
     * })
     */
    upsert<T extends UserContactsUpsertArgs>(args: SelectSubset<T, UserContactsUpsertArgs<ExtArgs>>): Prisma__UserContactsClient<$Result.GetResult<Prisma.$UserContactsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContactsCountArgs} args - Arguments to filter UserContacts to count.
     * @example
     * // Count the number of UserContacts
     * const count = await prisma.userContacts.count({
     *   where: {
     *     // ... the filter for the UserContacts we want to count
     *   }
     * })
    **/
    count<T extends UserContactsCountArgs>(
      args?: Subset<T, UserContactsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserContactsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContactsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserContactsAggregateArgs>(args: Subset<T, UserContactsAggregateArgs>): Prisma.PrismaPromise<GetUserContactsAggregateType<T>>

    /**
     * Group by UserContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContactsGroupByArgs} args - Group by arguments.
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
      T extends UserContactsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserContactsGroupByArgs['orderBy'] }
        : { orderBy?: UserContactsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserContactsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserContactsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserContacts model
   */
  readonly fields: UserContactsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserContacts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserContactsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserContacts model
   */
  interface UserContactsFieldRefs {
    readonly id: FieldRef<"UserContacts", 'String'>
    readonly username: FieldRef<"UserContacts", 'String'>
    readonly usernameContact: FieldRef<"UserContacts", 'String'>
    readonly firstNameContact: FieldRef<"UserContacts", 'String'>
    readonly lastNameContact: FieldRef<"UserContacts", 'String'>
    readonly avatarsContact: FieldRef<"UserContacts", 'String'>
    readonly createdAt: FieldRef<"UserContacts", 'DateTime'>
    readonly updatedAt: FieldRef<"UserContacts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserContacts findUnique
   */
  export type UserContactsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContacts
     */
    select?: UserContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContacts
     */
    omit?: UserContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContactsInclude<ExtArgs> | null
    /**
     * Filter, which UserContacts to fetch.
     */
    where: UserContactsWhereUniqueInput
  }

  /**
   * UserContacts findUniqueOrThrow
   */
  export type UserContactsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContacts
     */
    select?: UserContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContacts
     */
    omit?: UserContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContactsInclude<ExtArgs> | null
    /**
     * Filter, which UserContacts to fetch.
     */
    where: UserContactsWhereUniqueInput
  }

  /**
   * UserContacts findFirst
   */
  export type UserContactsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContacts
     */
    select?: UserContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContacts
     */
    omit?: UserContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContactsInclude<ExtArgs> | null
    /**
     * Filter, which UserContacts to fetch.
     */
    where?: UserContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserContacts to fetch.
     */
    orderBy?: UserContactsOrderByWithRelationInput | UserContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserContacts.
     */
    cursor?: UserContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserContacts.
     */
    distinct?: UserContactsScalarFieldEnum | UserContactsScalarFieldEnum[]
  }

  /**
   * UserContacts findFirstOrThrow
   */
  export type UserContactsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContacts
     */
    select?: UserContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContacts
     */
    omit?: UserContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContactsInclude<ExtArgs> | null
    /**
     * Filter, which UserContacts to fetch.
     */
    where?: UserContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserContacts to fetch.
     */
    orderBy?: UserContactsOrderByWithRelationInput | UserContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserContacts.
     */
    cursor?: UserContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserContacts.
     */
    distinct?: UserContactsScalarFieldEnum | UserContactsScalarFieldEnum[]
  }

  /**
   * UserContacts findMany
   */
  export type UserContactsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContacts
     */
    select?: UserContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContacts
     */
    omit?: UserContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContactsInclude<ExtArgs> | null
    /**
     * Filter, which UserContacts to fetch.
     */
    where?: UserContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserContacts to fetch.
     */
    orderBy?: UserContactsOrderByWithRelationInput | UserContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserContacts.
     */
    cursor?: UserContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserContacts.
     */
    skip?: number
    distinct?: UserContactsScalarFieldEnum | UserContactsScalarFieldEnum[]
  }

  /**
   * UserContacts create
   */
  export type UserContactsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContacts
     */
    select?: UserContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContacts
     */
    omit?: UserContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContactsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserContacts.
     */
    data: XOR<UserContactsCreateInput, UserContactsUncheckedCreateInput>
  }

  /**
   * UserContacts createMany
   */
  export type UserContactsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserContacts.
     */
    data: UserContactsCreateManyInput | UserContactsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserContacts createManyAndReturn
   */
  export type UserContactsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContacts
     */
    select?: UserContactsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserContacts
     */
    omit?: UserContactsOmit<ExtArgs> | null
    /**
     * The data used to create many UserContacts.
     */
    data: UserContactsCreateManyInput | UserContactsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContactsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserContacts update
   */
  export type UserContactsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContacts
     */
    select?: UserContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContacts
     */
    omit?: UserContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContactsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserContacts.
     */
    data: XOR<UserContactsUpdateInput, UserContactsUncheckedUpdateInput>
    /**
     * Choose, which UserContacts to update.
     */
    where: UserContactsWhereUniqueInput
  }

  /**
   * UserContacts updateMany
   */
  export type UserContactsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserContacts.
     */
    data: XOR<UserContactsUpdateManyMutationInput, UserContactsUncheckedUpdateManyInput>
    /**
     * Filter which UserContacts to update
     */
    where?: UserContactsWhereInput
    /**
     * Limit how many UserContacts to update.
     */
    limit?: number
  }

  /**
   * UserContacts updateManyAndReturn
   */
  export type UserContactsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContacts
     */
    select?: UserContactsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserContacts
     */
    omit?: UserContactsOmit<ExtArgs> | null
    /**
     * The data used to update UserContacts.
     */
    data: XOR<UserContactsUpdateManyMutationInput, UserContactsUncheckedUpdateManyInput>
    /**
     * Filter which UserContacts to update
     */
    where?: UserContactsWhereInput
    /**
     * Limit how many UserContacts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContactsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserContacts upsert
   */
  export type UserContactsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContacts
     */
    select?: UserContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContacts
     */
    omit?: UserContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContactsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserContacts to update in case it exists.
     */
    where: UserContactsWhereUniqueInput
    /**
     * In case the UserContacts found by the `where` argument doesn't exist, create a new UserContacts with this data.
     */
    create: XOR<UserContactsCreateInput, UserContactsUncheckedCreateInput>
    /**
     * In case the UserContacts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserContactsUpdateInput, UserContactsUncheckedUpdateInput>
  }

  /**
   * UserContacts delete
   */
  export type UserContactsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContacts
     */
    select?: UserContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContacts
     */
    omit?: UserContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContactsInclude<ExtArgs> | null
    /**
     * Filter which UserContacts to delete.
     */
    where: UserContactsWhereUniqueInput
  }

  /**
   * UserContacts deleteMany
   */
  export type UserContactsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserContacts to delete
     */
    where?: UserContactsWhereInput
    /**
     * Limit how many UserContacts to delete.
     */
    limit?: number
  }

  /**
   * UserContacts without action
   */
  export type UserContactsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContacts
     */
    select?: UserContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContacts
     */
    omit?: UserContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContactsInclude<ExtArgs> | null
  }


  /**
   * Model Codes
   */

  export type AggregateCodes = {
    _count: CodesCountAggregateOutputType | null
    _min: CodesMinAggregateOutputType | null
    _max: CodesMaxAggregateOutputType | null
  }

  export type CodesMinAggregateOutputType = {
    id: string | null
    number: string | null
    code: string | null
    isActived: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CodesMaxAggregateOutputType = {
    id: string | null
    number: string | null
    code: string | null
    isActived: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CodesCountAggregateOutputType = {
    id: number
    number: number
    code: number
    isActived: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CodesMinAggregateInputType = {
    id?: true
    number?: true
    code?: true
    isActived?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CodesMaxAggregateInputType = {
    id?: true
    number?: true
    code?: true
    isActived?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CodesCountAggregateInputType = {
    id?: true
    number?: true
    code?: true
    isActived?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CodesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Codes to aggregate.
     */
    where?: CodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Codes to fetch.
     */
    orderBy?: CodesOrderByWithRelationInput | CodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Codes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Codes
    **/
    _count?: true | CodesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CodesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CodesMaxAggregateInputType
  }

  export type GetCodesAggregateType<T extends CodesAggregateArgs> = {
        [P in keyof T & keyof AggregateCodes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCodes[P]>
      : GetScalarType<T[P], AggregateCodes[P]>
  }




  export type CodesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CodesWhereInput
    orderBy?: CodesOrderByWithAggregationInput | CodesOrderByWithAggregationInput[]
    by: CodesScalarFieldEnum[] | CodesScalarFieldEnum
    having?: CodesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CodesCountAggregateInputType | true
    _min?: CodesMinAggregateInputType
    _max?: CodesMaxAggregateInputType
  }

  export type CodesGroupByOutputType = {
    id: string
    number: string
    code: string
    isActived: boolean
    createdAt: Date
    updatedAt: Date
    _count: CodesCountAggregateOutputType | null
    _min: CodesMinAggregateOutputType | null
    _max: CodesMaxAggregateOutputType | null
  }

  type GetCodesGroupByPayload<T extends CodesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CodesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CodesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CodesGroupByOutputType[P]>
            : GetScalarType<T[P], CodesGroupByOutputType[P]>
        }
      >
    >


  export type CodesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    code?: boolean
    isActived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["codes"]>

  export type CodesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    code?: boolean
    isActived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["codes"]>

  export type CodesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    code?: boolean
    isActived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["codes"]>

  export type CodesSelectScalar = {
    id?: boolean
    number?: boolean
    code?: boolean
    isActived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CodesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "number" | "code" | "isActived" | "createdAt" | "updatedAt", ExtArgs["result"]["codes"]>

  export type $CodesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Codes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      number: string
      code: string
      isActived: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["codes"]>
    composites: {}
  }

  type CodesGetPayload<S extends boolean | null | undefined | CodesDefaultArgs> = $Result.GetResult<Prisma.$CodesPayload, S>

  type CodesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CodesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CodesCountAggregateInputType | true
    }

  export interface CodesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Codes'], meta: { name: 'Codes' } }
    /**
     * Find zero or one Codes that matches the filter.
     * @param {CodesFindUniqueArgs} args - Arguments to find a Codes
     * @example
     * // Get one Codes
     * const codes = await prisma.codes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CodesFindUniqueArgs>(args: SelectSubset<T, CodesFindUniqueArgs<ExtArgs>>): Prisma__CodesClient<$Result.GetResult<Prisma.$CodesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Codes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CodesFindUniqueOrThrowArgs} args - Arguments to find a Codes
     * @example
     * // Get one Codes
     * const codes = await prisma.codes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CodesFindUniqueOrThrowArgs>(args: SelectSubset<T, CodesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CodesClient<$Result.GetResult<Prisma.$CodesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Codes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodesFindFirstArgs} args - Arguments to find a Codes
     * @example
     * // Get one Codes
     * const codes = await prisma.codes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CodesFindFirstArgs>(args?: SelectSubset<T, CodesFindFirstArgs<ExtArgs>>): Prisma__CodesClient<$Result.GetResult<Prisma.$CodesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Codes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodesFindFirstOrThrowArgs} args - Arguments to find a Codes
     * @example
     * // Get one Codes
     * const codes = await prisma.codes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CodesFindFirstOrThrowArgs>(args?: SelectSubset<T, CodesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CodesClient<$Result.GetResult<Prisma.$CodesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Codes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Codes
     * const codes = await prisma.codes.findMany()
     * 
     * // Get first 10 Codes
     * const codes = await prisma.codes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const codesWithIdOnly = await prisma.codes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CodesFindManyArgs>(args?: SelectSubset<T, CodesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Codes.
     * @param {CodesCreateArgs} args - Arguments to create a Codes.
     * @example
     * // Create one Codes
     * const Codes = await prisma.codes.create({
     *   data: {
     *     // ... data to create a Codes
     *   }
     * })
     * 
     */
    create<T extends CodesCreateArgs>(args: SelectSubset<T, CodesCreateArgs<ExtArgs>>): Prisma__CodesClient<$Result.GetResult<Prisma.$CodesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Codes.
     * @param {CodesCreateManyArgs} args - Arguments to create many Codes.
     * @example
     * // Create many Codes
     * const codes = await prisma.codes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CodesCreateManyArgs>(args?: SelectSubset<T, CodesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Codes and returns the data saved in the database.
     * @param {CodesCreateManyAndReturnArgs} args - Arguments to create many Codes.
     * @example
     * // Create many Codes
     * const codes = await prisma.codes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Codes and only return the `id`
     * const codesWithIdOnly = await prisma.codes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CodesCreateManyAndReturnArgs>(args?: SelectSubset<T, CodesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Codes.
     * @param {CodesDeleteArgs} args - Arguments to delete one Codes.
     * @example
     * // Delete one Codes
     * const Codes = await prisma.codes.delete({
     *   where: {
     *     // ... filter to delete one Codes
     *   }
     * })
     * 
     */
    delete<T extends CodesDeleteArgs>(args: SelectSubset<T, CodesDeleteArgs<ExtArgs>>): Prisma__CodesClient<$Result.GetResult<Prisma.$CodesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Codes.
     * @param {CodesUpdateArgs} args - Arguments to update one Codes.
     * @example
     * // Update one Codes
     * const codes = await prisma.codes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CodesUpdateArgs>(args: SelectSubset<T, CodesUpdateArgs<ExtArgs>>): Prisma__CodesClient<$Result.GetResult<Prisma.$CodesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Codes.
     * @param {CodesDeleteManyArgs} args - Arguments to filter Codes to delete.
     * @example
     * // Delete a few Codes
     * const { count } = await prisma.codes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CodesDeleteManyArgs>(args?: SelectSubset<T, CodesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Codes
     * const codes = await prisma.codes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CodesUpdateManyArgs>(args: SelectSubset<T, CodesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Codes and returns the data updated in the database.
     * @param {CodesUpdateManyAndReturnArgs} args - Arguments to update many Codes.
     * @example
     * // Update many Codes
     * const codes = await prisma.codes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Codes and only return the `id`
     * const codesWithIdOnly = await prisma.codes.updateManyAndReturn({
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
    updateManyAndReturn<T extends CodesUpdateManyAndReturnArgs>(args: SelectSubset<T, CodesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Codes.
     * @param {CodesUpsertArgs} args - Arguments to update or create a Codes.
     * @example
     * // Update or create a Codes
     * const codes = await prisma.codes.upsert({
     *   create: {
     *     // ... data to create a Codes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Codes we want to update
     *   }
     * })
     */
    upsert<T extends CodesUpsertArgs>(args: SelectSubset<T, CodesUpsertArgs<ExtArgs>>): Prisma__CodesClient<$Result.GetResult<Prisma.$CodesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodesCountArgs} args - Arguments to filter Codes to count.
     * @example
     * // Count the number of Codes
     * const count = await prisma.codes.count({
     *   where: {
     *     // ... the filter for the Codes we want to count
     *   }
     * })
    **/
    count<T extends CodesCountArgs>(
      args?: Subset<T, CodesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CodesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CodesAggregateArgs>(args: Subset<T, CodesAggregateArgs>): Prisma.PrismaPromise<GetCodesAggregateType<T>>

    /**
     * Group by Codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodesGroupByArgs} args - Group by arguments.
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
      T extends CodesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CodesGroupByArgs['orderBy'] }
        : { orderBy?: CodesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CodesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCodesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Codes model
   */
  readonly fields: CodesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Codes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CodesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Codes model
   */
  interface CodesFieldRefs {
    readonly id: FieldRef<"Codes", 'String'>
    readonly number: FieldRef<"Codes", 'String'>
    readonly code: FieldRef<"Codes", 'String'>
    readonly isActived: FieldRef<"Codes", 'Boolean'>
    readonly createdAt: FieldRef<"Codes", 'DateTime'>
    readonly updatedAt: FieldRef<"Codes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Codes findUnique
   */
  export type CodesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Codes
     */
    select?: CodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Codes
     */
    omit?: CodesOmit<ExtArgs> | null
    /**
     * Filter, which Codes to fetch.
     */
    where: CodesWhereUniqueInput
  }

  /**
   * Codes findUniqueOrThrow
   */
  export type CodesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Codes
     */
    select?: CodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Codes
     */
    omit?: CodesOmit<ExtArgs> | null
    /**
     * Filter, which Codes to fetch.
     */
    where: CodesWhereUniqueInput
  }

  /**
   * Codes findFirst
   */
  export type CodesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Codes
     */
    select?: CodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Codes
     */
    omit?: CodesOmit<ExtArgs> | null
    /**
     * Filter, which Codes to fetch.
     */
    where?: CodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Codes to fetch.
     */
    orderBy?: CodesOrderByWithRelationInput | CodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Codes.
     */
    cursor?: CodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Codes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Codes.
     */
    distinct?: CodesScalarFieldEnum | CodesScalarFieldEnum[]
  }

  /**
   * Codes findFirstOrThrow
   */
  export type CodesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Codes
     */
    select?: CodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Codes
     */
    omit?: CodesOmit<ExtArgs> | null
    /**
     * Filter, which Codes to fetch.
     */
    where?: CodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Codes to fetch.
     */
    orderBy?: CodesOrderByWithRelationInput | CodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Codes.
     */
    cursor?: CodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Codes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Codes.
     */
    distinct?: CodesScalarFieldEnum | CodesScalarFieldEnum[]
  }

  /**
   * Codes findMany
   */
  export type CodesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Codes
     */
    select?: CodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Codes
     */
    omit?: CodesOmit<ExtArgs> | null
    /**
     * Filter, which Codes to fetch.
     */
    where?: CodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Codes to fetch.
     */
    orderBy?: CodesOrderByWithRelationInput | CodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Codes.
     */
    cursor?: CodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Codes.
     */
    skip?: number
    distinct?: CodesScalarFieldEnum | CodesScalarFieldEnum[]
  }

  /**
   * Codes create
   */
  export type CodesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Codes
     */
    select?: CodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Codes
     */
    omit?: CodesOmit<ExtArgs> | null
    /**
     * The data needed to create a Codes.
     */
    data: XOR<CodesCreateInput, CodesUncheckedCreateInput>
  }

  /**
   * Codes createMany
   */
  export type CodesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Codes.
     */
    data: CodesCreateManyInput | CodesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Codes createManyAndReturn
   */
  export type CodesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Codes
     */
    select?: CodesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Codes
     */
    omit?: CodesOmit<ExtArgs> | null
    /**
     * The data used to create many Codes.
     */
    data: CodesCreateManyInput | CodesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Codes update
   */
  export type CodesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Codes
     */
    select?: CodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Codes
     */
    omit?: CodesOmit<ExtArgs> | null
    /**
     * The data needed to update a Codes.
     */
    data: XOR<CodesUpdateInput, CodesUncheckedUpdateInput>
    /**
     * Choose, which Codes to update.
     */
    where: CodesWhereUniqueInput
  }

  /**
   * Codes updateMany
   */
  export type CodesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Codes.
     */
    data: XOR<CodesUpdateManyMutationInput, CodesUncheckedUpdateManyInput>
    /**
     * Filter which Codes to update
     */
    where?: CodesWhereInput
    /**
     * Limit how many Codes to update.
     */
    limit?: number
  }

  /**
   * Codes updateManyAndReturn
   */
  export type CodesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Codes
     */
    select?: CodesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Codes
     */
    omit?: CodesOmit<ExtArgs> | null
    /**
     * The data used to update Codes.
     */
    data: XOR<CodesUpdateManyMutationInput, CodesUncheckedUpdateManyInput>
    /**
     * Filter which Codes to update
     */
    where?: CodesWhereInput
    /**
     * Limit how many Codes to update.
     */
    limit?: number
  }

  /**
   * Codes upsert
   */
  export type CodesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Codes
     */
    select?: CodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Codes
     */
    omit?: CodesOmit<ExtArgs> | null
    /**
     * The filter to search for the Codes to update in case it exists.
     */
    where: CodesWhereUniqueInput
    /**
     * In case the Codes found by the `where` argument doesn't exist, create a new Codes with this data.
     */
    create: XOR<CodesCreateInput, CodesUncheckedCreateInput>
    /**
     * In case the Codes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CodesUpdateInput, CodesUncheckedUpdateInput>
  }

  /**
   * Codes delete
   */
  export type CodesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Codes
     */
    select?: CodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Codes
     */
    omit?: CodesOmit<ExtArgs> | null
    /**
     * Filter which Codes to delete.
     */
    where: CodesWhereUniqueInput
  }

  /**
   * Codes deleteMany
   */
  export type CodesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Codes to delete
     */
    where?: CodesWhereInput
    /**
     * Limit how many Codes to delete.
     */
    limit?: number
  }

  /**
   * Codes without action
   */
  export type CodesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Codes
     */
    select?: CodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Codes
     */
    omit?: CodesOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    number: 'number',
    username: 'username',
    avatars: 'avatars',
    bio: 'bio',
    birthday: 'birthday',
    firstName: 'firstName',
    lastName: 'lastName',
    blockedUsers: 'blockedUsers',
    phoneVisible: 'phoneVisible',
    emailVisible: 'emailVisible',
    bioVisible: 'bioVisible',
    avatarsVisible: 'avatarsVisible',
    birthdayVisible: 'birthdayVisible',
    cloudPassword: 'cloudPassword',
    isOnline: 'isOnline',
    lastSeen: 'lastSeen',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    text: 'text',
    chatId: 'chatId',
    senderId: 'senderId',
    isRead: 'isRead',
    isBlocked: 'isBlocked',
    editedAt: 'editedAt',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const AttachmentScalarFieldEnum: {
    id: 'id',
    chatId: 'chatId',
    messageId: 'messageId',
    uuidURI: 'uuidURI',
    fileName: 'fileName',
    fileExt: 'fileExt',
    fileSize: 'fileSize',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AttachmentScalarFieldEnum = (typeof AttachmentScalarFieldEnum)[keyof typeof AttachmentScalarFieldEnum]


  export const ChatMemberScalarFieldEnum: {
    id: 'id',
    chatId: 'chatId',
    userId: 'userId',
    joinedAt: 'joinedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatMemberScalarFieldEnum = (typeof ChatMemberScalarFieldEnum)[keyof typeof ChatMemberScalarFieldEnum]


  export const ChatScalarFieldEnum: {
    id: 'id',
    chatName: 'chatName',
    isGroup: 'isGroup',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const UserContactsScalarFieldEnum: {
    id: 'id',
    username: 'username',
    usernameContact: 'usernameContact',
    firstNameContact: 'firstNameContact',
    lastNameContact: 'lastNameContact',
    avatarsContact: 'avatarsContact',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserContactsScalarFieldEnum = (typeof UserContactsScalarFieldEnum)[keyof typeof UserContactsScalarFieldEnum]


  export const CodesScalarFieldEnum: {
    id: 'id',
    number: 'number',
    code: 'code',
    isActived: 'isActived',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CodesScalarFieldEnum = (typeof CodesScalarFieldEnum)[keyof typeof CodesScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'WhoCanSeen'
   */
  export type EnumWhoCanSeenFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WhoCanSeen'>
    


  /**
   * Reference to a field of type 'WhoCanSeen[]'
   */
  export type ListEnumWhoCanSeenFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WhoCanSeen[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    number?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    avatars?: StringNullableListFilter<"User">
    bio?: StringNullableFilter<"User"> | string | null
    birthday?: DateTimeNullableFilter<"User"> | Date | string | null
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    blockedUsers?: StringNullableListFilter<"User">
    phoneVisible?: EnumWhoCanSeenFilter<"User"> | $Enums.WhoCanSeen
    emailVisible?: EnumWhoCanSeenFilter<"User"> | $Enums.WhoCanSeen
    bioVisible?: EnumWhoCanSeenFilter<"User"> | $Enums.WhoCanSeen
    avatarsVisible?: EnumWhoCanSeenFilter<"User"> | $Enums.WhoCanSeen
    birthdayVisible?: EnumWhoCanSeenFilter<"User"> | $Enums.WhoCanSeen
    cloudPassword?: StringNullableFilter<"User"> | string | null
    isOnline?: BoolFilter<"User"> | boolean
    lastSeen?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    contacts?: UserContactsListRelationFilter
    chatMembers?: ChatMemberListRelationFilter
    messages?: MessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    number?: SortOrder
    username?: SortOrder
    avatars?: SortOrder
    bio?: SortOrderInput | SortOrder
    birthday?: SortOrderInput | SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    blockedUsers?: SortOrder
    phoneVisible?: SortOrder
    emailVisible?: SortOrder
    bioVisible?: SortOrder
    avatarsVisible?: SortOrder
    birthdayVisible?: SortOrder
    cloudPassword?: SortOrderInput | SortOrder
    isOnline?: SortOrder
    lastSeen?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contacts?: UserContactsOrderByRelationAggregateInput
    chatMembers?: ChatMemberOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    number?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    avatars?: StringNullableListFilter<"User">
    bio?: StringNullableFilter<"User"> | string | null
    birthday?: DateTimeNullableFilter<"User"> | Date | string | null
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    blockedUsers?: StringNullableListFilter<"User">
    phoneVisible?: EnumWhoCanSeenFilter<"User"> | $Enums.WhoCanSeen
    emailVisible?: EnumWhoCanSeenFilter<"User"> | $Enums.WhoCanSeen
    bioVisible?: EnumWhoCanSeenFilter<"User"> | $Enums.WhoCanSeen
    avatarsVisible?: EnumWhoCanSeenFilter<"User"> | $Enums.WhoCanSeen
    birthdayVisible?: EnumWhoCanSeenFilter<"User"> | $Enums.WhoCanSeen
    cloudPassword?: StringNullableFilter<"User"> | string | null
    isOnline?: BoolFilter<"User"> | boolean
    lastSeen?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    contacts?: UserContactsListRelationFilter
    chatMembers?: ChatMemberListRelationFilter
    messages?: MessageListRelationFilter
  }, "id" | "email" | "number" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    number?: SortOrder
    username?: SortOrder
    avatars?: SortOrder
    bio?: SortOrderInput | SortOrder
    birthday?: SortOrderInput | SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    blockedUsers?: SortOrder
    phoneVisible?: SortOrder
    emailVisible?: SortOrder
    bioVisible?: SortOrder
    avatarsVisible?: SortOrder
    birthdayVisible?: SortOrder
    cloudPassword?: SortOrderInput | SortOrder
    isOnline?: SortOrder
    lastSeen?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    number?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    avatars?: StringNullableListFilter<"User">
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    birthday?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    blockedUsers?: StringNullableListFilter<"User">
    phoneVisible?: EnumWhoCanSeenWithAggregatesFilter<"User"> | $Enums.WhoCanSeen
    emailVisible?: EnumWhoCanSeenWithAggregatesFilter<"User"> | $Enums.WhoCanSeen
    bioVisible?: EnumWhoCanSeenWithAggregatesFilter<"User"> | $Enums.WhoCanSeen
    avatarsVisible?: EnumWhoCanSeenWithAggregatesFilter<"User"> | $Enums.WhoCanSeen
    birthdayVisible?: EnumWhoCanSeenWithAggregatesFilter<"User"> | $Enums.WhoCanSeen
    cloudPassword?: StringNullableWithAggregatesFilter<"User"> | string | null
    isOnline?: BoolWithAggregatesFilter<"User"> | boolean
    lastSeen?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    text?: StringFilter<"Message"> | string
    chatId?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    isRead?: BoolFilter<"Message"> | boolean
    isBlocked?: BoolFilter<"Message"> | boolean
    editedAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    attachments?: AttachmentListRelationFilter
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    chatId?: SortOrder
    senderId?: SortOrder
    isRead?: SortOrder
    isBlocked?: SortOrder
    editedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attachments?: AttachmentOrderByRelationAggregateInput
    chat?: ChatOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    text?: StringFilter<"Message"> | string
    chatId?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    isRead?: BoolFilter<"Message"> | boolean
    isBlocked?: BoolFilter<"Message"> | boolean
    editedAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    attachments?: AttachmentListRelationFilter
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    chatId?: SortOrder
    senderId?: SortOrder
    isRead?: SortOrder
    isBlocked?: SortOrder
    editedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    text?: StringWithAggregatesFilter<"Message"> | string
    chatId?: StringWithAggregatesFilter<"Message"> | string
    senderId?: StringWithAggregatesFilter<"Message"> | string
    isRead?: BoolWithAggregatesFilter<"Message"> | boolean
    isBlocked?: BoolWithAggregatesFilter<"Message"> | boolean
    editedAt?: DateTimeNullableWithAggregatesFilter<"Message"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Message"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type AttachmentWhereInput = {
    AND?: AttachmentWhereInput | AttachmentWhereInput[]
    OR?: AttachmentWhereInput[]
    NOT?: AttachmentWhereInput | AttachmentWhereInput[]
    id?: StringFilter<"Attachment"> | string
    chatId?: StringFilter<"Attachment"> | string
    messageId?: StringFilter<"Attachment"> | string
    uuidURI?: StringFilter<"Attachment"> | string
    fileName?: StringFilter<"Attachment"> | string
    fileExt?: StringFilter<"Attachment"> | string
    fileSize?: IntFilter<"Attachment"> | number
    createdAt?: DateTimeFilter<"Attachment"> | Date | string
    updatedAt?: DateTimeFilter<"Attachment"> | Date | string
    message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
  }

  export type AttachmentOrderByWithRelationInput = {
    id?: SortOrder
    chatId?: SortOrder
    messageId?: SortOrder
    uuidURI?: SortOrder
    fileName?: SortOrder
    fileExt?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    message?: MessageOrderByWithRelationInput
  }

  export type AttachmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttachmentWhereInput | AttachmentWhereInput[]
    OR?: AttachmentWhereInput[]
    NOT?: AttachmentWhereInput | AttachmentWhereInput[]
    chatId?: StringFilter<"Attachment"> | string
    messageId?: StringFilter<"Attachment"> | string
    uuidURI?: StringFilter<"Attachment"> | string
    fileName?: StringFilter<"Attachment"> | string
    fileExt?: StringFilter<"Attachment"> | string
    fileSize?: IntFilter<"Attachment"> | number
    createdAt?: DateTimeFilter<"Attachment"> | Date | string
    updatedAt?: DateTimeFilter<"Attachment"> | Date | string
    message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
  }, "id">

  export type AttachmentOrderByWithAggregationInput = {
    id?: SortOrder
    chatId?: SortOrder
    messageId?: SortOrder
    uuidURI?: SortOrder
    fileName?: SortOrder
    fileExt?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AttachmentCountOrderByAggregateInput
    _avg?: AttachmentAvgOrderByAggregateInput
    _max?: AttachmentMaxOrderByAggregateInput
    _min?: AttachmentMinOrderByAggregateInput
    _sum?: AttachmentSumOrderByAggregateInput
  }

  export type AttachmentScalarWhereWithAggregatesInput = {
    AND?: AttachmentScalarWhereWithAggregatesInput | AttachmentScalarWhereWithAggregatesInput[]
    OR?: AttachmentScalarWhereWithAggregatesInput[]
    NOT?: AttachmentScalarWhereWithAggregatesInput | AttachmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Attachment"> | string
    chatId?: StringWithAggregatesFilter<"Attachment"> | string
    messageId?: StringWithAggregatesFilter<"Attachment"> | string
    uuidURI?: StringWithAggregatesFilter<"Attachment"> | string
    fileName?: StringWithAggregatesFilter<"Attachment"> | string
    fileExt?: StringWithAggregatesFilter<"Attachment"> | string
    fileSize?: IntWithAggregatesFilter<"Attachment"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Attachment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Attachment"> | Date | string
  }

  export type ChatMemberWhereInput = {
    AND?: ChatMemberWhereInput | ChatMemberWhereInput[]
    OR?: ChatMemberWhereInput[]
    NOT?: ChatMemberWhereInput | ChatMemberWhereInput[]
    id?: StringFilter<"ChatMember"> | string
    chatId?: StringFilter<"ChatMember"> | string
    userId?: StringFilter<"ChatMember"> | string
    joinedAt?: DateTimeFilter<"ChatMember"> | Date | string
    createdAt?: DateTimeFilter<"ChatMember"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMember"> | Date | string
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ChatMemberOrderByWithRelationInput = {
    id?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chat?: ChatOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ChatMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatMemberWhereInput | ChatMemberWhereInput[]
    OR?: ChatMemberWhereInput[]
    NOT?: ChatMemberWhereInput | ChatMemberWhereInput[]
    chatId?: StringFilter<"ChatMember"> | string
    userId?: StringFilter<"ChatMember"> | string
    joinedAt?: DateTimeFilter<"ChatMember"> | Date | string
    createdAt?: DateTimeFilter<"ChatMember"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMember"> | Date | string
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ChatMemberOrderByWithAggregationInput = {
    id?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatMemberCountOrderByAggregateInput
    _max?: ChatMemberMaxOrderByAggregateInput
    _min?: ChatMemberMinOrderByAggregateInput
  }

  export type ChatMemberScalarWhereWithAggregatesInput = {
    AND?: ChatMemberScalarWhereWithAggregatesInput | ChatMemberScalarWhereWithAggregatesInput[]
    OR?: ChatMemberScalarWhereWithAggregatesInput[]
    NOT?: ChatMemberScalarWhereWithAggregatesInput | ChatMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatMember"> | string
    chatId?: StringWithAggregatesFilter<"ChatMember"> | string
    userId?: StringWithAggregatesFilter<"ChatMember"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"ChatMember"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatMember"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatMember"> | Date | string
  }

  export type ChatWhereInput = {
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    id?: StringFilter<"Chat"> | string
    chatName?: StringNullableFilter<"Chat"> | string | null
    isGroup?: BoolFilter<"Chat"> | boolean
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
    members?: ChatMemberListRelationFilter
    messages?: MessageListRelationFilter
  }

  export type ChatOrderByWithRelationInput = {
    id?: SortOrder
    chatName?: SortOrderInput | SortOrder
    isGroup?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    members?: ChatMemberOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type ChatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    chatName?: StringNullableFilter<"Chat"> | string | null
    isGroup?: BoolFilter<"Chat"> | boolean
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
    members?: ChatMemberListRelationFilter
    messages?: MessageListRelationFilter
  }, "id">

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    chatName?: SortOrderInput | SortOrder
    isGroup?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatCountOrderByAggregateInput
    _max?: ChatMaxOrderByAggregateInput
    _min?: ChatMinOrderByAggregateInput
  }

  export type ChatScalarWhereWithAggregatesInput = {
    AND?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    OR?: ChatScalarWhereWithAggregatesInput[]
    NOT?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chat"> | string
    chatName?: StringNullableWithAggregatesFilter<"Chat"> | string | null
    isGroup?: BoolWithAggregatesFilter<"Chat"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
  }

  export type UserContactsWhereInput = {
    AND?: UserContactsWhereInput | UserContactsWhereInput[]
    OR?: UserContactsWhereInput[]
    NOT?: UserContactsWhereInput | UserContactsWhereInput[]
    id?: StringFilter<"UserContacts"> | string
    username?: StringFilter<"UserContacts"> | string
    usernameContact?: StringFilter<"UserContacts"> | string
    firstNameContact?: StringFilter<"UserContacts"> | string
    lastNameContact?: StringFilter<"UserContacts"> | string
    avatarsContact?: StringNullableFilter<"UserContacts"> | string | null
    createdAt?: DateTimeFilter<"UserContacts"> | Date | string
    updatedAt?: DateTimeFilter<"UserContacts"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserContactsOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    usernameContact?: SortOrder
    firstNameContact?: SortOrder
    lastNameContact?: SortOrder
    avatarsContact?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserContactsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserContactsWhereInput | UserContactsWhereInput[]
    OR?: UserContactsWhereInput[]
    NOT?: UserContactsWhereInput | UserContactsWhereInput[]
    username?: StringFilter<"UserContacts"> | string
    usernameContact?: StringFilter<"UserContacts"> | string
    firstNameContact?: StringFilter<"UserContacts"> | string
    lastNameContact?: StringFilter<"UserContacts"> | string
    avatarsContact?: StringNullableFilter<"UserContacts"> | string | null
    createdAt?: DateTimeFilter<"UserContacts"> | Date | string
    updatedAt?: DateTimeFilter<"UserContacts"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserContactsOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    usernameContact?: SortOrder
    firstNameContact?: SortOrder
    lastNameContact?: SortOrder
    avatarsContact?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserContactsCountOrderByAggregateInput
    _max?: UserContactsMaxOrderByAggregateInput
    _min?: UserContactsMinOrderByAggregateInput
  }

  export type UserContactsScalarWhereWithAggregatesInput = {
    AND?: UserContactsScalarWhereWithAggregatesInput | UserContactsScalarWhereWithAggregatesInput[]
    OR?: UserContactsScalarWhereWithAggregatesInput[]
    NOT?: UserContactsScalarWhereWithAggregatesInput | UserContactsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserContacts"> | string
    username?: StringWithAggregatesFilter<"UserContacts"> | string
    usernameContact?: StringWithAggregatesFilter<"UserContacts"> | string
    firstNameContact?: StringWithAggregatesFilter<"UserContacts"> | string
    lastNameContact?: StringWithAggregatesFilter<"UserContacts"> | string
    avatarsContact?: StringNullableWithAggregatesFilter<"UserContacts"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserContacts"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserContacts"> | Date | string
  }

  export type CodesWhereInput = {
    AND?: CodesWhereInput | CodesWhereInput[]
    OR?: CodesWhereInput[]
    NOT?: CodesWhereInput | CodesWhereInput[]
    id?: StringFilter<"Codes"> | string
    number?: StringFilter<"Codes"> | string
    code?: StringFilter<"Codes"> | string
    isActived?: BoolFilter<"Codes"> | boolean
    createdAt?: DateTimeFilter<"Codes"> | Date | string
    updatedAt?: DateTimeFilter<"Codes"> | Date | string
  }

  export type CodesOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    code?: SortOrder
    isActived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CodesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    number?: string
    AND?: CodesWhereInput | CodesWhereInput[]
    OR?: CodesWhereInput[]
    NOT?: CodesWhereInput | CodesWhereInput[]
    code?: StringFilter<"Codes"> | string
    isActived?: BoolFilter<"Codes"> | boolean
    createdAt?: DateTimeFilter<"Codes"> | Date | string
    updatedAt?: DateTimeFilter<"Codes"> | Date | string
  }, "id" | "number">

  export type CodesOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    code?: SortOrder
    isActived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CodesCountOrderByAggregateInput
    _max?: CodesMaxOrderByAggregateInput
    _min?: CodesMinOrderByAggregateInput
  }

  export type CodesScalarWhereWithAggregatesInput = {
    AND?: CodesScalarWhereWithAggregatesInput | CodesScalarWhereWithAggregatesInput[]
    OR?: CodesScalarWhereWithAggregatesInput[]
    NOT?: CodesScalarWhereWithAggregatesInput | CodesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Codes"> | string
    number?: StringWithAggregatesFilter<"Codes"> | string
    code?: StringWithAggregatesFilter<"Codes"> | string
    isActived?: BoolWithAggregatesFilter<"Codes"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Codes"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Codes"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email?: string | null
    number: string
    username: string
    avatars?: UserCreateavatarsInput | string[]
    bio?: string | null
    birthday?: Date | string | null
    firstName: string
    lastName: string
    blockedUsers?: UserCreateblockedUsersInput | string[]
    phoneVisible?: $Enums.WhoCanSeen
    emailVisible?: $Enums.WhoCanSeen
    bioVisible?: $Enums.WhoCanSeen
    avatarsVisible?: $Enums.WhoCanSeen
    birthdayVisible?: $Enums.WhoCanSeen
    cloudPassword?: string | null
    isOnline?: boolean
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: UserContactsCreateNestedManyWithoutUserInput
    chatMembers?: ChatMemberCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email?: string | null
    number: string
    username: string
    avatars?: UserCreateavatarsInput | string[]
    bio?: string | null
    birthday?: Date | string | null
    firstName: string
    lastName: string
    blockedUsers?: UserCreateblockedUsersInput | string[]
    phoneVisible?: $Enums.WhoCanSeen
    emailVisible?: $Enums.WhoCanSeen
    bioVisible?: $Enums.WhoCanSeen
    avatarsVisible?: $Enums.WhoCanSeen
    birthdayVisible?: $Enums.WhoCanSeen
    cloudPassword?: string | null
    isOnline?: boolean
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: UserContactsUncheckedCreateNestedManyWithoutUserInput
    chatMembers?: ChatMemberUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatars?: UserUpdateavatarsInput | string[]
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    blockedUsers?: UserUpdateblockedUsersInput | string[]
    phoneVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    emailVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    bioVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    avatarsVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    birthdayVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    cloudPassword?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: UserContactsUpdateManyWithoutUserNestedInput
    chatMembers?: ChatMemberUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatars?: UserUpdateavatarsInput | string[]
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    blockedUsers?: UserUpdateblockedUsersInput | string[]
    phoneVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    emailVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    bioVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    avatarsVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    birthdayVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    cloudPassword?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: UserContactsUncheckedUpdateManyWithoutUserNestedInput
    chatMembers?: ChatMemberUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email?: string | null
    number: string
    username: string
    avatars?: UserCreateavatarsInput | string[]
    bio?: string | null
    birthday?: Date | string | null
    firstName: string
    lastName: string
    blockedUsers?: UserCreateblockedUsersInput | string[]
    phoneVisible?: $Enums.WhoCanSeen
    emailVisible?: $Enums.WhoCanSeen
    bioVisible?: $Enums.WhoCanSeen
    avatarsVisible?: $Enums.WhoCanSeen
    birthdayVisible?: $Enums.WhoCanSeen
    cloudPassword?: string | null
    isOnline?: boolean
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatars?: UserUpdateavatarsInput | string[]
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    blockedUsers?: UserUpdateblockedUsersInput | string[]
    phoneVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    emailVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    bioVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    avatarsVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    birthdayVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    cloudPassword?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatars?: UserUpdateavatarsInput | string[]
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    blockedUsers?: UserUpdateblockedUsersInput | string[]
    phoneVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    emailVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    bioVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    avatarsVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    birthdayVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    cloudPassword?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    id?: string
    text: string
    isRead?: boolean
    isBlocked?: boolean
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attachments?: AttachmentCreateNestedManyWithoutMessageInput
    chat: ChatCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    text: string
    chatId: string
    senderId: string
    isRead?: boolean
    isBlocked?: boolean
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attachments?: AttachmentUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachments?: AttachmentUpdateManyWithoutMessageNestedInput
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachments?: AttachmentUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageCreateManyInput = {
    id?: string
    text: string
    chatId: string
    senderId: string
    isRead?: boolean
    isBlocked?: boolean
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentCreateInput = {
    id?: string
    chatId: string
    uuidURI: string
    fileName: string
    fileExt: string
    fileSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
    message: MessageCreateNestedOneWithoutAttachmentsInput
  }

  export type AttachmentUncheckedCreateInput = {
    id?: string
    chatId: string
    messageId: string
    uuidURI: string
    fileName: string
    fileExt: string
    fileSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttachmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    uuidURI?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileExt?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: MessageUpdateOneRequiredWithoutAttachmentsNestedInput
  }

  export type AttachmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    uuidURI?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileExt?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentCreateManyInput = {
    id?: string
    chatId: string
    messageId: string
    uuidURI: string
    fileName: string
    fileExt: string
    fileSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttachmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    uuidURI?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileExt?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    uuidURI?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileExt?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMemberCreateInput = {
    id?: string
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    chat: ChatCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutChatMembersInput
  }

  export type ChatMemberUncheckedCreateInput = {
    id?: string
    chatId: string
    userId: string
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutChatMembersNestedInput
  }

  export type ChatMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMemberCreateManyInput = {
    id?: string
    chatId: string
    userId: string
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCreateInput = {
    id?: string
    chatName?: string | null
    isGroup?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ChatMemberCreateNestedManyWithoutChatInput
    messages?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateInput = {
    id?: string
    chatName?: string | null
    isGroup?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ChatMemberUncheckedCreateNestedManyWithoutChatInput
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ChatMemberUpdateManyWithoutChatNestedInput
    messages?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ChatMemberUncheckedUpdateManyWithoutChatNestedInput
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatCreateManyInput = {
    id?: string
    chatName?: string | null
    isGroup?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserContactsCreateInput = {
    id?: string
    usernameContact: string
    firstNameContact: string
    lastNameContact: string
    avatarsContact?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutContactsInput
  }

  export type UserContactsUncheckedCreateInput = {
    id?: string
    username: string
    usernameContact: string
    firstNameContact: string
    lastNameContact: string
    avatarsContact?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserContactsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usernameContact?: StringFieldUpdateOperationsInput | string
    firstNameContact?: StringFieldUpdateOperationsInput | string
    lastNameContact?: StringFieldUpdateOperationsInput | string
    avatarsContact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContactsNestedInput
  }

  export type UserContactsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    usernameContact?: StringFieldUpdateOperationsInput | string
    firstNameContact?: StringFieldUpdateOperationsInput | string
    lastNameContact?: StringFieldUpdateOperationsInput | string
    avatarsContact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserContactsCreateManyInput = {
    id?: string
    username: string
    usernameContact: string
    firstNameContact: string
    lastNameContact: string
    avatarsContact?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserContactsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    usernameContact?: StringFieldUpdateOperationsInput | string
    firstNameContact?: StringFieldUpdateOperationsInput | string
    lastNameContact?: StringFieldUpdateOperationsInput | string
    avatarsContact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserContactsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    usernameContact?: StringFieldUpdateOperationsInput | string
    firstNameContact?: StringFieldUpdateOperationsInput | string
    lastNameContact?: StringFieldUpdateOperationsInput | string
    avatarsContact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodesCreateInput = {
    id?: string
    number: string
    code: string
    isActived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CodesUncheckedCreateInput = {
    id?: string
    number: string
    code: string
    isActived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CodesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isActived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isActived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodesCreateManyInput = {
    id?: string
    number: string
    code: string
    isActived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CodesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isActived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isActived?: BoolFieldUpdateOperationsInput | boolean
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type EnumWhoCanSeenFilter<$PrismaModel = never> = {
    equals?: $Enums.WhoCanSeen | EnumWhoCanSeenFieldRefInput<$PrismaModel>
    in?: $Enums.WhoCanSeen[] | ListEnumWhoCanSeenFieldRefInput<$PrismaModel>
    notIn?: $Enums.WhoCanSeen[] | ListEnumWhoCanSeenFieldRefInput<$PrismaModel>
    not?: NestedEnumWhoCanSeenFilter<$PrismaModel> | $Enums.WhoCanSeen
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type UserContactsListRelationFilter = {
    every?: UserContactsWhereInput
    some?: UserContactsWhereInput
    none?: UserContactsWhereInput
  }

  export type ChatMemberListRelationFilter = {
    every?: ChatMemberWhereInput
    some?: ChatMemberWhereInput
    none?: ChatMemberWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserContactsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    number?: SortOrder
    username?: SortOrder
    avatars?: SortOrder
    bio?: SortOrder
    birthday?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    blockedUsers?: SortOrder
    phoneVisible?: SortOrder
    emailVisible?: SortOrder
    bioVisible?: SortOrder
    avatarsVisible?: SortOrder
    birthdayVisible?: SortOrder
    cloudPassword?: SortOrder
    isOnline?: SortOrder
    lastSeen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    number?: SortOrder
    username?: SortOrder
    bio?: SortOrder
    birthday?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneVisible?: SortOrder
    emailVisible?: SortOrder
    bioVisible?: SortOrder
    avatarsVisible?: SortOrder
    birthdayVisible?: SortOrder
    cloudPassword?: SortOrder
    isOnline?: SortOrder
    lastSeen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    number?: SortOrder
    username?: SortOrder
    bio?: SortOrder
    birthday?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneVisible?: SortOrder
    emailVisible?: SortOrder
    bioVisible?: SortOrder
    avatarsVisible?: SortOrder
    birthdayVisible?: SortOrder
    cloudPassword?: SortOrder
    isOnline?: SortOrder
    lastSeen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumWhoCanSeenWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WhoCanSeen | EnumWhoCanSeenFieldRefInput<$PrismaModel>
    in?: $Enums.WhoCanSeen[] | ListEnumWhoCanSeenFieldRefInput<$PrismaModel>
    notIn?: $Enums.WhoCanSeen[] | ListEnumWhoCanSeenFieldRefInput<$PrismaModel>
    not?: NestedEnumWhoCanSeenWithAggregatesFilter<$PrismaModel> | $Enums.WhoCanSeen
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWhoCanSeenFilter<$PrismaModel>
    _max?: NestedEnumWhoCanSeenFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type AttachmentListRelationFilter = {
    every?: AttachmentWhereInput
    some?: AttachmentWhereInput
    none?: AttachmentWhereInput
  }

  export type ChatScalarRelationFilter = {
    is?: ChatWhereInput
    isNot?: ChatWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AttachmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    chatId?: SortOrder
    senderId?: SortOrder
    isRead?: SortOrder
    isBlocked?: SortOrder
    editedAt?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    chatId?: SortOrder
    senderId?: SortOrder
    isRead?: SortOrder
    isBlocked?: SortOrder
    editedAt?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    chatId?: SortOrder
    senderId?: SortOrder
    isRead?: SortOrder
    isBlocked?: SortOrder
    editedAt?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type MessageScalarRelationFilter = {
    is?: MessageWhereInput
    isNot?: MessageWhereInput
  }

  export type AttachmentCountOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    messageId?: SortOrder
    uuidURI?: SortOrder
    fileName?: SortOrder
    fileExt?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttachmentAvgOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type AttachmentMaxOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    messageId?: SortOrder
    uuidURI?: SortOrder
    fileName?: SortOrder
    fileExt?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttachmentMinOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    messageId?: SortOrder
    uuidURI?: SortOrder
    fileName?: SortOrder
    fileExt?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttachmentSumOrderByAggregateInput = {
    fileSize?: SortOrder
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

  export type ChatMemberCountOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMemberMinOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
    chatName?: SortOrder
    isGroup?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMaxOrderByAggregateInput = {
    id?: SortOrder
    chatName?: SortOrder
    isGroup?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMinOrderByAggregateInput = {
    id?: SortOrder
    chatName?: SortOrder
    isGroup?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserContactsCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    usernameContact?: SortOrder
    firstNameContact?: SortOrder
    lastNameContact?: SortOrder
    avatarsContact?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserContactsMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    usernameContact?: SortOrder
    firstNameContact?: SortOrder
    lastNameContact?: SortOrder
    avatarsContact?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserContactsMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    usernameContact?: SortOrder
    firstNameContact?: SortOrder
    lastNameContact?: SortOrder
    avatarsContact?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CodesCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    code?: SortOrder
    isActived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CodesMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    code?: SortOrder
    isActived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CodesMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    code?: SortOrder
    isActived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCreateavatarsInput = {
    set: string[]
  }

  export type UserCreateblockedUsersInput = {
    set: string[]
  }

  export type UserContactsCreateNestedManyWithoutUserInput = {
    create?: XOR<UserContactsCreateWithoutUserInput, UserContactsUncheckedCreateWithoutUserInput> | UserContactsCreateWithoutUserInput[] | UserContactsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserContactsCreateOrConnectWithoutUserInput | UserContactsCreateOrConnectWithoutUserInput[]
    createMany?: UserContactsCreateManyUserInputEnvelope
    connect?: UserContactsWhereUniqueInput | UserContactsWhereUniqueInput[]
  }

  export type ChatMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatMemberCreateWithoutUserInput, ChatMemberUncheckedCreateWithoutUserInput> | ChatMemberCreateWithoutUserInput[] | ChatMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMemberCreateOrConnectWithoutUserInput | ChatMemberCreateOrConnectWithoutUserInput[]
    createMany?: ChatMemberCreateManyUserInputEnvelope
    connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UserContactsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserContactsCreateWithoutUserInput, UserContactsUncheckedCreateWithoutUserInput> | UserContactsCreateWithoutUserInput[] | UserContactsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserContactsCreateOrConnectWithoutUserInput | UserContactsCreateOrConnectWithoutUserInput[]
    createMany?: UserContactsCreateManyUserInputEnvelope
    connect?: UserContactsWhereUniqueInput | UserContactsWhereUniqueInput[]
  }

  export type ChatMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatMemberCreateWithoutUserInput, ChatMemberUncheckedCreateWithoutUserInput> | ChatMemberCreateWithoutUserInput[] | ChatMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMemberCreateOrConnectWithoutUserInput | ChatMemberCreateOrConnectWithoutUserInput[]
    createMany?: ChatMemberCreateManyUserInputEnvelope
    connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateavatarsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateblockedUsersInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumWhoCanSeenFieldUpdateOperationsInput = {
    set?: $Enums.WhoCanSeen
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserContactsUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserContactsCreateWithoutUserInput, UserContactsUncheckedCreateWithoutUserInput> | UserContactsCreateWithoutUserInput[] | UserContactsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserContactsCreateOrConnectWithoutUserInput | UserContactsCreateOrConnectWithoutUserInput[]
    upsert?: UserContactsUpsertWithWhereUniqueWithoutUserInput | UserContactsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserContactsCreateManyUserInputEnvelope
    set?: UserContactsWhereUniqueInput | UserContactsWhereUniqueInput[]
    disconnect?: UserContactsWhereUniqueInput | UserContactsWhereUniqueInput[]
    delete?: UserContactsWhereUniqueInput | UserContactsWhereUniqueInput[]
    connect?: UserContactsWhereUniqueInput | UserContactsWhereUniqueInput[]
    update?: UserContactsUpdateWithWhereUniqueWithoutUserInput | UserContactsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserContactsUpdateManyWithWhereWithoutUserInput | UserContactsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserContactsScalarWhereInput | UserContactsScalarWhereInput[]
  }

  export type ChatMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatMemberCreateWithoutUserInput, ChatMemberUncheckedCreateWithoutUserInput> | ChatMemberCreateWithoutUserInput[] | ChatMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMemberCreateOrConnectWithoutUserInput | ChatMemberCreateOrConnectWithoutUserInput[]
    upsert?: ChatMemberUpsertWithWhereUniqueWithoutUserInput | ChatMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatMemberCreateManyUserInputEnvelope
    set?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    disconnect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    delete?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    update?: ChatMemberUpdateWithWhereUniqueWithoutUserInput | ChatMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatMemberUpdateManyWithWhereWithoutUserInput | ChatMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatMemberScalarWhereInput | ChatMemberScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserContactsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserContactsCreateWithoutUserInput, UserContactsUncheckedCreateWithoutUserInput> | UserContactsCreateWithoutUserInput[] | UserContactsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserContactsCreateOrConnectWithoutUserInput | UserContactsCreateOrConnectWithoutUserInput[]
    upsert?: UserContactsUpsertWithWhereUniqueWithoutUserInput | UserContactsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserContactsCreateManyUserInputEnvelope
    set?: UserContactsWhereUniqueInput | UserContactsWhereUniqueInput[]
    disconnect?: UserContactsWhereUniqueInput | UserContactsWhereUniqueInput[]
    delete?: UserContactsWhereUniqueInput | UserContactsWhereUniqueInput[]
    connect?: UserContactsWhereUniqueInput | UserContactsWhereUniqueInput[]
    update?: UserContactsUpdateWithWhereUniqueWithoutUserInput | UserContactsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserContactsUpdateManyWithWhereWithoutUserInput | UserContactsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserContactsScalarWhereInput | UserContactsScalarWhereInput[]
  }

  export type ChatMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatMemberCreateWithoutUserInput, ChatMemberUncheckedCreateWithoutUserInput> | ChatMemberCreateWithoutUserInput[] | ChatMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMemberCreateOrConnectWithoutUserInput | ChatMemberCreateOrConnectWithoutUserInput[]
    upsert?: ChatMemberUpsertWithWhereUniqueWithoutUserInput | ChatMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatMemberCreateManyUserInputEnvelope
    set?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    disconnect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    delete?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    update?: ChatMemberUpdateWithWhereUniqueWithoutUserInput | ChatMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatMemberUpdateManyWithWhereWithoutUserInput | ChatMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatMemberScalarWhereInput | ChatMemberScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type AttachmentCreateNestedManyWithoutMessageInput = {
    create?: XOR<AttachmentCreateWithoutMessageInput, AttachmentUncheckedCreateWithoutMessageInput> | AttachmentCreateWithoutMessageInput[] | AttachmentUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutMessageInput | AttachmentCreateOrConnectWithoutMessageInput[]
    createMany?: AttachmentCreateManyMessageInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type ChatCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    connect?: ChatWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type AttachmentUncheckedCreateNestedManyWithoutMessageInput = {
    create?: XOR<AttachmentCreateWithoutMessageInput, AttachmentUncheckedCreateWithoutMessageInput> | AttachmentCreateWithoutMessageInput[] | AttachmentUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutMessageInput | AttachmentCreateOrConnectWithoutMessageInput[]
    createMany?: AttachmentCreateManyMessageInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type AttachmentUpdateManyWithoutMessageNestedInput = {
    create?: XOR<AttachmentCreateWithoutMessageInput, AttachmentUncheckedCreateWithoutMessageInput> | AttachmentCreateWithoutMessageInput[] | AttachmentUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutMessageInput | AttachmentCreateOrConnectWithoutMessageInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutMessageInput | AttachmentUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: AttachmentCreateManyMessageInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutMessageInput | AttachmentUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutMessageInput | AttachmentUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type ChatUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    upsert?: ChatUpsertWithoutMessagesInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutMessagesInput, ChatUpdateWithoutMessagesInput>, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesInput, UserUpdateWithoutMessagesInput>, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type AttachmentUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: XOR<AttachmentCreateWithoutMessageInput, AttachmentUncheckedCreateWithoutMessageInput> | AttachmentCreateWithoutMessageInput[] | AttachmentUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutMessageInput | AttachmentCreateOrConnectWithoutMessageInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutMessageInput | AttachmentUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: AttachmentCreateManyMessageInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutMessageInput | AttachmentUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutMessageInput | AttachmentUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type MessageCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<MessageCreateWithoutAttachmentsInput, MessageUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: MessageCreateOrConnectWithoutAttachmentsInput
    connect?: MessageWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MessageUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: XOR<MessageCreateWithoutAttachmentsInput, MessageUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: MessageCreateOrConnectWithoutAttachmentsInput
    upsert?: MessageUpsertWithoutAttachmentsInput
    connect?: MessageWhereUniqueInput
    update?: XOR<XOR<MessageUpdateToOneWithWhereWithoutAttachmentsInput, MessageUpdateWithoutAttachmentsInput>, MessageUncheckedUpdateWithoutAttachmentsInput>
  }

  export type ChatCreateNestedOneWithoutMembersInput = {
    create?: XOR<ChatCreateWithoutMembersInput, ChatUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMembersInput
    connect?: ChatWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChatMembersInput = {
    create?: XOR<UserCreateWithoutChatMembersInput, UserUncheckedCreateWithoutChatMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMembersInput
    connect?: UserWhereUniqueInput
  }

  export type ChatUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<ChatCreateWithoutMembersInput, ChatUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMembersInput
    upsert?: ChatUpsertWithoutMembersInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutMembersInput, ChatUpdateWithoutMembersInput>, ChatUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutChatMembersNestedInput = {
    create?: XOR<UserCreateWithoutChatMembersInput, UserUncheckedCreateWithoutChatMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMembersInput
    upsert?: UserUpsertWithoutChatMembersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatMembersInput, UserUpdateWithoutChatMembersInput>, UserUncheckedUpdateWithoutChatMembersInput>
  }

  export type ChatMemberCreateNestedManyWithoutChatInput = {
    create?: XOR<ChatMemberCreateWithoutChatInput, ChatMemberUncheckedCreateWithoutChatInput> | ChatMemberCreateWithoutChatInput[] | ChatMemberUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatMemberCreateOrConnectWithoutChatInput | ChatMemberCreateOrConnectWithoutChatInput[]
    createMany?: ChatMemberCreateManyChatInputEnvelope
    connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ChatMemberUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<ChatMemberCreateWithoutChatInput, ChatMemberUncheckedCreateWithoutChatInput> | ChatMemberCreateWithoutChatInput[] | ChatMemberUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatMemberCreateOrConnectWithoutChatInput | ChatMemberCreateOrConnectWithoutChatInput[]
    createMany?: ChatMemberCreateManyChatInputEnvelope
    connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ChatMemberUpdateManyWithoutChatNestedInput = {
    create?: XOR<ChatMemberCreateWithoutChatInput, ChatMemberUncheckedCreateWithoutChatInput> | ChatMemberCreateWithoutChatInput[] | ChatMemberUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatMemberCreateOrConnectWithoutChatInput | ChatMemberCreateOrConnectWithoutChatInput[]
    upsert?: ChatMemberUpsertWithWhereUniqueWithoutChatInput | ChatMemberUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: ChatMemberCreateManyChatInputEnvelope
    set?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    disconnect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    delete?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    update?: ChatMemberUpdateWithWhereUniqueWithoutChatInput | ChatMemberUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: ChatMemberUpdateManyWithWhereWithoutChatInput | ChatMemberUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: ChatMemberScalarWhereInput | ChatMemberScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ChatMemberUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<ChatMemberCreateWithoutChatInput, ChatMemberUncheckedCreateWithoutChatInput> | ChatMemberCreateWithoutChatInput[] | ChatMemberUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatMemberCreateOrConnectWithoutChatInput | ChatMemberCreateOrConnectWithoutChatInput[]
    upsert?: ChatMemberUpsertWithWhereUniqueWithoutChatInput | ChatMemberUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: ChatMemberCreateManyChatInputEnvelope
    set?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    disconnect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    delete?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    update?: ChatMemberUpdateWithWhereUniqueWithoutChatInput | ChatMemberUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: ChatMemberUpdateManyWithWhereWithoutChatInput | ChatMemberUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: ChatMemberScalarWhereInput | ChatMemberScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutContactsInput = {
    create?: XOR<UserCreateWithoutContactsInput, UserUncheckedCreateWithoutContactsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContactsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutContactsNestedInput = {
    create?: XOR<UserCreateWithoutContactsInput, UserUncheckedCreateWithoutContactsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContactsInput
    upsert?: UserUpsertWithoutContactsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContactsInput, UserUpdateWithoutContactsInput>, UserUncheckedUpdateWithoutContactsInput>
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

  export type NestedEnumWhoCanSeenFilter<$PrismaModel = never> = {
    equals?: $Enums.WhoCanSeen | EnumWhoCanSeenFieldRefInput<$PrismaModel>
    in?: $Enums.WhoCanSeen[] | ListEnumWhoCanSeenFieldRefInput<$PrismaModel>
    notIn?: $Enums.WhoCanSeen[] | ListEnumWhoCanSeenFieldRefInput<$PrismaModel>
    not?: NestedEnumWhoCanSeenFilter<$PrismaModel> | $Enums.WhoCanSeen
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumWhoCanSeenWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WhoCanSeen | EnumWhoCanSeenFieldRefInput<$PrismaModel>
    in?: $Enums.WhoCanSeen[] | ListEnumWhoCanSeenFieldRefInput<$PrismaModel>
    notIn?: $Enums.WhoCanSeen[] | ListEnumWhoCanSeenFieldRefInput<$PrismaModel>
    not?: NestedEnumWhoCanSeenWithAggregatesFilter<$PrismaModel> | $Enums.WhoCanSeen
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWhoCanSeenFilter<$PrismaModel>
    _max?: NestedEnumWhoCanSeenFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserContactsCreateWithoutUserInput = {
    id?: string
    usernameContact: string
    firstNameContact: string
    lastNameContact: string
    avatarsContact?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserContactsUncheckedCreateWithoutUserInput = {
    id?: string
    usernameContact: string
    firstNameContact: string
    lastNameContact: string
    avatarsContact?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserContactsCreateOrConnectWithoutUserInput = {
    where: UserContactsWhereUniqueInput
    create: XOR<UserContactsCreateWithoutUserInput, UserContactsUncheckedCreateWithoutUserInput>
  }

  export type UserContactsCreateManyUserInputEnvelope = {
    data: UserContactsCreateManyUserInput | UserContactsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatMemberCreateWithoutUserInput = {
    id?: string
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    chat: ChatCreateNestedOneWithoutMembersInput
  }

  export type ChatMemberUncheckedCreateWithoutUserInput = {
    id?: string
    chatId: string
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMemberCreateOrConnectWithoutUserInput = {
    where: ChatMemberWhereUniqueInput
    create: XOR<ChatMemberCreateWithoutUserInput, ChatMemberUncheckedCreateWithoutUserInput>
  }

  export type ChatMemberCreateManyUserInputEnvelope = {
    data: ChatMemberCreateManyUserInput | ChatMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSenderInput = {
    id?: string
    text: string
    isRead?: boolean
    isBlocked?: boolean
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attachments?: AttachmentCreateNestedManyWithoutMessageInput
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string
    text: string
    chatId: string
    isRead?: boolean
    isBlocked?: boolean
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attachments?: AttachmentUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type UserContactsUpsertWithWhereUniqueWithoutUserInput = {
    where: UserContactsWhereUniqueInput
    update: XOR<UserContactsUpdateWithoutUserInput, UserContactsUncheckedUpdateWithoutUserInput>
    create: XOR<UserContactsCreateWithoutUserInput, UserContactsUncheckedCreateWithoutUserInput>
  }

  export type UserContactsUpdateWithWhereUniqueWithoutUserInput = {
    where: UserContactsWhereUniqueInput
    data: XOR<UserContactsUpdateWithoutUserInput, UserContactsUncheckedUpdateWithoutUserInput>
  }

  export type UserContactsUpdateManyWithWhereWithoutUserInput = {
    where: UserContactsScalarWhereInput
    data: XOR<UserContactsUpdateManyMutationInput, UserContactsUncheckedUpdateManyWithoutUserInput>
  }

  export type UserContactsScalarWhereInput = {
    AND?: UserContactsScalarWhereInput | UserContactsScalarWhereInput[]
    OR?: UserContactsScalarWhereInput[]
    NOT?: UserContactsScalarWhereInput | UserContactsScalarWhereInput[]
    id?: StringFilter<"UserContacts"> | string
    username?: StringFilter<"UserContacts"> | string
    usernameContact?: StringFilter<"UserContacts"> | string
    firstNameContact?: StringFilter<"UserContacts"> | string
    lastNameContact?: StringFilter<"UserContacts"> | string
    avatarsContact?: StringNullableFilter<"UserContacts"> | string | null
    createdAt?: DateTimeFilter<"UserContacts"> | Date | string
    updatedAt?: DateTimeFilter<"UserContacts"> | Date | string
  }

  export type ChatMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatMemberWhereUniqueInput
    update: XOR<ChatMemberUpdateWithoutUserInput, ChatMemberUncheckedUpdateWithoutUserInput>
    create: XOR<ChatMemberCreateWithoutUserInput, ChatMemberUncheckedCreateWithoutUserInput>
  }

  export type ChatMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatMemberWhereUniqueInput
    data: XOR<ChatMemberUpdateWithoutUserInput, ChatMemberUncheckedUpdateWithoutUserInput>
  }

  export type ChatMemberUpdateManyWithWhereWithoutUserInput = {
    where: ChatMemberScalarWhereInput
    data: XOR<ChatMemberUpdateManyMutationInput, ChatMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatMemberScalarWhereInput = {
    AND?: ChatMemberScalarWhereInput | ChatMemberScalarWhereInput[]
    OR?: ChatMemberScalarWhereInput[]
    NOT?: ChatMemberScalarWhereInput | ChatMemberScalarWhereInput[]
    id?: StringFilter<"ChatMember"> | string
    chatId?: StringFilter<"ChatMember"> | string
    userId?: StringFilter<"ChatMember"> | string
    joinedAt?: DateTimeFilter<"ChatMember"> | Date | string
    createdAt?: DateTimeFilter<"ChatMember"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMember"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    text?: StringFilter<"Message"> | string
    chatId?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    isRead?: BoolFilter<"Message"> | boolean
    isBlocked?: BoolFilter<"Message"> | boolean
    editedAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type AttachmentCreateWithoutMessageInput = {
    id?: string
    chatId: string
    uuidURI: string
    fileName: string
    fileExt: string
    fileSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttachmentUncheckedCreateWithoutMessageInput = {
    id?: string
    chatId: string
    uuidURI: string
    fileName: string
    fileExt: string
    fileSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttachmentCreateOrConnectWithoutMessageInput = {
    where: AttachmentWhereUniqueInput
    create: XOR<AttachmentCreateWithoutMessageInput, AttachmentUncheckedCreateWithoutMessageInput>
  }

  export type AttachmentCreateManyMessageInputEnvelope = {
    data: AttachmentCreateManyMessageInput | AttachmentCreateManyMessageInput[]
    skipDuplicates?: boolean
  }

  export type ChatCreateWithoutMessagesInput = {
    id?: string
    chatName?: string | null
    isGroup?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ChatMemberCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutMessagesInput = {
    id?: string
    chatName?: string | null
    isGroup?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ChatMemberUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutMessagesInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
  }

  export type UserCreateWithoutMessagesInput = {
    id?: string
    email?: string | null
    number: string
    username: string
    avatars?: UserCreateavatarsInput | string[]
    bio?: string | null
    birthday?: Date | string | null
    firstName: string
    lastName: string
    blockedUsers?: UserCreateblockedUsersInput | string[]
    phoneVisible?: $Enums.WhoCanSeen
    emailVisible?: $Enums.WhoCanSeen
    bioVisible?: $Enums.WhoCanSeen
    avatarsVisible?: $Enums.WhoCanSeen
    birthdayVisible?: $Enums.WhoCanSeen
    cloudPassword?: string | null
    isOnline?: boolean
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: UserContactsCreateNestedManyWithoutUserInput
    chatMembers?: ChatMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: string
    email?: string | null
    number: string
    username: string
    avatars?: UserCreateavatarsInput | string[]
    bio?: string | null
    birthday?: Date | string | null
    firstName: string
    lastName: string
    blockedUsers?: UserCreateblockedUsersInput | string[]
    phoneVisible?: $Enums.WhoCanSeen
    emailVisible?: $Enums.WhoCanSeen
    bioVisible?: $Enums.WhoCanSeen
    avatarsVisible?: $Enums.WhoCanSeen
    birthdayVisible?: $Enums.WhoCanSeen
    cloudPassword?: string | null
    isOnline?: boolean
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: UserContactsUncheckedCreateNestedManyWithoutUserInput
    chatMembers?: ChatMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type AttachmentUpsertWithWhereUniqueWithoutMessageInput = {
    where: AttachmentWhereUniqueInput
    update: XOR<AttachmentUpdateWithoutMessageInput, AttachmentUncheckedUpdateWithoutMessageInput>
    create: XOR<AttachmentCreateWithoutMessageInput, AttachmentUncheckedCreateWithoutMessageInput>
  }

  export type AttachmentUpdateWithWhereUniqueWithoutMessageInput = {
    where: AttachmentWhereUniqueInput
    data: XOR<AttachmentUpdateWithoutMessageInput, AttachmentUncheckedUpdateWithoutMessageInput>
  }

  export type AttachmentUpdateManyWithWhereWithoutMessageInput = {
    where: AttachmentScalarWhereInput
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyWithoutMessageInput>
  }

  export type AttachmentScalarWhereInput = {
    AND?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
    OR?: AttachmentScalarWhereInput[]
    NOT?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
    id?: StringFilter<"Attachment"> | string
    chatId?: StringFilter<"Attachment"> | string
    messageId?: StringFilter<"Attachment"> | string
    uuidURI?: StringFilter<"Attachment"> | string
    fileName?: StringFilter<"Attachment"> | string
    fileExt?: StringFilter<"Attachment"> | string
    fileSize?: IntFilter<"Attachment"> | number
    createdAt?: DateTimeFilter<"Attachment"> | Date | string
    updatedAt?: DateTimeFilter<"Attachment"> | Date | string
  }

  export type ChatUpsertWithoutMessagesInput = {
    update: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ChatMemberUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ChatMemberUncheckedUpdateManyWithoutChatNestedInput
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatars?: UserUpdateavatarsInput | string[]
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    blockedUsers?: UserUpdateblockedUsersInput | string[]
    phoneVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    emailVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    bioVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    avatarsVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    birthdayVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    cloudPassword?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: UserContactsUpdateManyWithoutUserNestedInput
    chatMembers?: ChatMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatars?: UserUpdateavatarsInput | string[]
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    blockedUsers?: UserUpdateblockedUsersInput | string[]
    phoneVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    emailVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    bioVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    avatarsVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    birthdayVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    cloudPassword?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: UserContactsUncheckedUpdateManyWithoutUserNestedInput
    chatMembers?: ChatMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MessageCreateWithoutAttachmentsInput = {
    id?: string
    text: string
    isRead?: boolean
    isBlocked?: boolean
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chat: ChatCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutAttachmentsInput = {
    id?: string
    text: string
    chatId: string
    senderId: string
    isRead?: boolean
    isBlocked?: boolean
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutAttachmentsInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutAttachmentsInput, MessageUncheckedCreateWithoutAttachmentsInput>
  }

  export type MessageUpsertWithoutAttachmentsInput = {
    update: XOR<MessageUpdateWithoutAttachmentsInput, MessageUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<MessageCreateWithoutAttachmentsInput, MessageUncheckedCreateWithoutAttachmentsInput>
    where?: MessageWhereInput
  }

  export type MessageUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: MessageWhereInput
    data: XOR<MessageUpdateWithoutAttachmentsInput, MessageUncheckedUpdateWithoutAttachmentsInput>
  }

  export type MessageUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCreateWithoutMembersInput = {
    id?: string
    chatName?: string | null
    isGroup?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutMembersInput = {
    id?: string
    chatName?: string | null
    isGroup?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutMembersInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutMembersInput, ChatUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutChatMembersInput = {
    id?: string
    email?: string | null
    number: string
    username: string
    avatars?: UserCreateavatarsInput | string[]
    bio?: string | null
    birthday?: Date | string | null
    firstName: string
    lastName: string
    blockedUsers?: UserCreateblockedUsersInput | string[]
    phoneVisible?: $Enums.WhoCanSeen
    emailVisible?: $Enums.WhoCanSeen
    bioVisible?: $Enums.WhoCanSeen
    avatarsVisible?: $Enums.WhoCanSeen
    birthdayVisible?: $Enums.WhoCanSeen
    cloudPassword?: string | null
    isOnline?: boolean
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: UserContactsCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutChatMembersInput = {
    id?: string
    email?: string | null
    number: string
    username: string
    avatars?: UserCreateavatarsInput | string[]
    bio?: string | null
    birthday?: Date | string | null
    firstName: string
    lastName: string
    blockedUsers?: UserCreateblockedUsersInput | string[]
    phoneVisible?: $Enums.WhoCanSeen
    emailVisible?: $Enums.WhoCanSeen
    bioVisible?: $Enums.WhoCanSeen
    avatarsVisible?: $Enums.WhoCanSeen
    birthdayVisible?: $Enums.WhoCanSeen
    cloudPassword?: string | null
    isOnline?: boolean
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: UserContactsUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutChatMembersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatMembersInput, UserUncheckedCreateWithoutChatMembersInput>
  }

  export type ChatUpsertWithoutMembersInput = {
    update: XOR<ChatUpdateWithoutMembersInput, ChatUncheckedUpdateWithoutMembersInput>
    create: XOR<ChatCreateWithoutMembersInput, ChatUncheckedCreateWithoutMembersInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutMembersInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutMembersInput, ChatUncheckedUpdateWithoutMembersInput>
  }

  export type ChatUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type UserUpsertWithoutChatMembersInput = {
    update: XOR<UserUpdateWithoutChatMembersInput, UserUncheckedUpdateWithoutChatMembersInput>
    create: XOR<UserCreateWithoutChatMembersInput, UserUncheckedCreateWithoutChatMembersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatMembersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatMembersInput, UserUncheckedUpdateWithoutChatMembersInput>
  }

  export type UserUpdateWithoutChatMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatars?: UserUpdateavatarsInput | string[]
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    blockedUsers?: UserUpdateblockedUsersInput | string[]
    phoneVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    emailVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    bioVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    avatarsVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    birthdayVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    cloudPassword?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: UserContactsUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutChatMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatars?: UserUpdateavatarsInput | string[]
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    blockedUsers?: UserUpdateblockedUsersInput | string[]
    phoneVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    emailVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    bioVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    avatarsVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    birthdayVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    cloudPassword?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: UserContactsUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type ChatMemberCreateWithoutChatInput = {
    id?: string
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutChatMembersInput
  }

  export type ChatMemberUncheckedCreateWithoutChatInput = {
    id?: string
    userId: string
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMemberCreateOrConnectWithoutChatInput = {
    where: ChatMemberWhereUniqueInput
    create: XOR<ChatMemberCreateWithoutChatInput, ChatMemberUncheckedCreateWithoutChatInput>
  }

  export type ChatMemberCreateManyChatInputEnvelope = {
    data: ChatMemberCreateManyChatInput | ChatMemberCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutChatInput = {
    id?: string
    text: string
    isRead?: boolean
    isBlocked?: boolean
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attachments?: AttachmentCreateNestedManyWithoutMessageInput
    sender: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutChatInput = {
    id?: string
    text: string
    senderId: string
    isRead?: boolean
    isBlocked?: boolean
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attachments?: AttachmentUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutChatInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageCreateManyChatInputEnvelope = {
    data: MessageCreateManyChatInput | MessageCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type ChatMemberUpsertWithWhereUniqueWithoutChatInput = {
    where: ChatMemberWhereUniqueInput
    update: XOR<ChatMemberUpdateWithoutChatInput, ChatMemberUncheckedUpdateWithoutChatInput>
    create: XOR<ChatMemberCreateWithoutChatInput, ChatMemberUncheckedCreateWithoutChatInput>
  }

  export type ChatMemberUpdateWithWhereUniqueWithoutChatInput = {
    where: ChatMemberWhereUniqueInput
    data: XOR<ChatMemberUpdateWithoutChatInput, ChatMemberUncheckedUpdateWithoutChatInput>
  }

  export type ChatMemberUpdateManyWithWhereWithoutChatInput = {
    where: ChatMemberScalarWhereInput
    data: XOR<ChatMemberUpdateManyMutationInput, ChatMemberUncheckedUpdateManyWithoutChatInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
  }

  export type MessageUpdateManyWithWhereWithoutChatInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutChatInput>
  }

  export type UserCreateWithoutContactsInput = {
    id?: string
    email?: string | null
    number: string
    username: string
    avatars?: UserCreateavatarsInput | string[]
    bio?: string | null
    birthday?: Date | string | null
    firstName: string
    lastName: string
    blockedUsers?: UserCreateblockedUsersInput | string[]
    phoneVisible?: $Enums.WhoCanSeen
    emailVisible?: $Enums.WhoCanSeen
    bioVisible?: $Enums.WhoCanSeen
    avatarsVisible?: $Enums.WhoCanSeen
    birthdayVisible?: $Enums.WhoCanSeen
    cloudPassword?: string | null
    isOnline?: boolean
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatMembers?: ChatMemberCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutContactsInput = {
    id?: string
    email?: string | null
    number: string
    username: string
    avatars?: UserCreateavatarsInput | string[]
    bio?: string | null
    birthday?: Date | string | null
    firstName: string
    lastName: string
    blockedUsers?: UserCreateblockedUsersInput | string[]
    phoneVisible?: $Enums.WhoCanSeen
    emailVisible?: $Enums.WhoCanSeen
    bioVisible?: $Enums.WhoCanSeen
    avatarsVisible?: $Enums.WhoCanSeen
    birthdayVisible?: $Enums.WhoCanSeen
    cloudPassword?: string | null
    isOnline?: boolean
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatMembers?: ChatMemberUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutContactsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContactsInput, UserUncheckedCreateWithoutContactsInput>
  }

  export type UserUpsertWithoutContactsInput = {
    update: XOR<UserUpdateWithoutContactsInput, UserUncheckedUpdateWithoutContactsInput>
    create: XOR<UserCreateWithoutContactsInput, UserUncheckedCreateWithoutContactsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContactsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContactsInput, UserUncheckedUpdateWithoutContactsInput>
  }

  export type UserUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatars?: UserUpdateavatarsInput | string[]
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    blockedUsers?: UserUpdateblockedUsersInput | string[]
    phoneVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    emailVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    bioVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    avatarsVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    birthdayVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    cloudPassword?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatMembers?: ChatMemberUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatars?: UserUpdateavatarsInput | string[]
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    blockedUsers?: UserUpdateblockedUsersInput | string[]
    phoneVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    emailVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    bioVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    avatarsVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    birthdayVisible?: EnumWhoCanSeenFieldUpdateOperationsInput | $Enums.WhoCanSeen
    cloudPassword?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatMembers?: ChatMemberUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserContactsCreateManyUserInput = {
    id?: string
    usernameContact: string
    firstNameContact: string
    lastNameContact: string
    avatarsContact?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMemberCreateManyUserInput = {
    id?: string
    chatId: string
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateManySenderInput = {
    id?: string
    text: string
    chatId: string
    isRead?: boolean
    isBlocked?: boolean
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserContactsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    usernameContact?: StringFieldUpdateOperationsInput | string
    firstNameContact?: StringFieldUpdateOperationsInput | string
    lastNameContact?: StringFieldUpdateOperationsInput | string
    avatarsContact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserContactsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    usernameContact?: StringFieldUpdateOperationsInput | string
    firstNameContact?: StringFieldUpdateOperationsInput | string
    lastNameContact?: StringFieldUpdateOperationsInput | string
    avatarsContact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserContactsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    usernameContact?: StringFieldUpdateOperationsInput | string
    firstNameContact?: StringFieldUpdateOperationsInput | string
    lastNameContact?: StringFieldUpdateOperationsInput | string
    avatarsContact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutMembersNestedInput
  }

  export type ChatMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachments?: AttachmentUpdateManyWithoutMessageNestedInput
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachments?: AttachmentUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentCreateManyMessageInput = {
    id?: string
    chatId: string
    uuidURI: string
    fileName: string
    fileExt: string
    fileSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttachmentUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    uuidURI?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileExt?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentUncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    uuidURI?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileExt?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentUncheckedUpdateManyWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    uuidURI?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileExt?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMemberCreateManyChatInput = {
    id?: string
    userId: string
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateManyChatInput = {
    id?: string
    text: string
    senderId: string
    isRead?: boolean
    isBlocked?: boolean
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMemberUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatMembersNestedInput
  }

  export type ChatMemberUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMemberUncheckedUpdateManyWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachments?: AttachmentUpdateManyWithoutMessageNestedInput
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachments?: AttachmentUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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