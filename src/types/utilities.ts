/* eslint-disable @typescript-eslint/no-explicit-any */

type AsyncReturnType<T> = T extends (...args: any[]) => Promise<infer R> ? R : never

type PaginatedItem<T> = AsyncReturnType<T> extends { items: (infer R)[] } ? R : never

export type { AsyncReturnType, PaginatedItem }
