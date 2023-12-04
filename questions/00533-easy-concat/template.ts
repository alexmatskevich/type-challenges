type Concat<T extends readonly unknown[], U extends readonly unknown[]> = [...T, ...U]

type TestType = Concat<[1, 2], [3, 4]>
