type Length<T extends readonly any[]> = T['length']

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const

type Test = Length<typeof tesla>
