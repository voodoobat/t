import { defineStore } from 'pinia'
import { useAxios } from '~/service/useAxios.ts'
import { UserContract } from '~/contracts/user.ts'

export const useUsersStore = defineStore('users', {
    state: (): {
        isLoading: boolean
        users: UserContract[]
    } => ({
        isLoading: false,
        users: [],
    }),
    actions: {
        async fetch(count: number) {
            const url = `http://www.filltext.com/?rows=${count}&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`

            this.isLoading = true
            const { data, error } = await useAxios<UserContract[]>('get', url)

            if (error) {
                return console.error(error)
            }

            this.isLoading = false
            this.users = data
        },
    },
})
