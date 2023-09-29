export interface IUser {
    id: number
    email: string
    description?: string
    firstName: string
    lastName: string
    phone: string
    address?: IUserAddress
}

export interface IUserAddress {
    city: string
    state: string
    streetAddress: string
    zip: string
}

export type TUserProps = 'id' | 'firstName' | 'lastName' | 'email' | 'phone'
