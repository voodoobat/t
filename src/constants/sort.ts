export type SortDirectionType = 'ASC' | 'DESC'
export type SortPropType = 'id' | 'firstName' | 'lastName' | 'email' | 'phone'

export interface SortUsersInterface {
    direction: SortDirectionType
    prop: SortPropType
}
