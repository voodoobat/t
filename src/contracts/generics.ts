export type NonOptionalKeys<T> = {
    [K in keyof T]-?: T extends { [K1 in K]: any } ? K : never
}[keyof T]
