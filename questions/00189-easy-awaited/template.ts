type MyAwaited<T> = T extends Promise<infer R> ? MyAwaited<R> : T
