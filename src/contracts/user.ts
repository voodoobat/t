import { AddressContract } from '~/contracts/address.ts'

export interface UserContract {
    id: number
    email: string
    description?: string
    firstName: string
    lastName: string
    phone: string
    address?: AddressContract
}
