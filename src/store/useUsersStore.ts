import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useAxios } from '~/service/useAxios.ts'
import { IUser } from '~/contracts/schema/user.ts'
import { IBaseTableSort } from '~/contracts/components/baseTable.ts'
import { NonOptionalKeys } from '~/contracts/generics.ts'

export const useUsersStore = defineStore('users', {
    state: (): {
        isLoading: boolean
        users: IUser[]
        search: string
        sort: IBaseTableSort
        active: IUser | null
        showBy: number
        page: number
    } => ({
        isLoading: false,
        users: [],
        search: '',
        sort: {
            key: '',
            direction: 'ASC',
        },
        active: null,
        showBy: 5,
        page: 1,
    }),
    actions: {
        async fetch(count: number) {
            const url = `http://www.filltext.com/?rows=${count}&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D`

            this.$reset()
            this.isLoading = true
            const { data, error } = await useAxios<IUser[]>('get', url)

            if (error) {
                return console.error(error)
            }

            this.isLoading = false
            this.users = data || []
        },
        add(user: IUser) {
            this.users = [user, ...this.users]
        },
    },
    getters: {
        searchResults(): IUser[] {
            if (this.search) {
                return this.users.filter(({ id, firstName, lastName, email, phone }) => {
                    const src = [id, firstName, lastName, email, phone].join(' ').toLowerCase()
                    return src.includes(this.search.toLowerCase().trim())
                })
            }

            return this.users
        },
        usersData(): IUser[] {
            const sortResults = computed<IUser[]>(() => {
                if (this.sort.key) {
                    const prop = this.sort.key as NonOptionalKeys<IUser>

                    return this.searchResults.sort((userX, userY) => {
                        const x = String(userX[prop]).toLowerCase()
                        const y = String(userY[prop]).toLowerCase()

                        if (x > y) return this.sort.direction === 'ASC' ? 1 : -1
                        if (x < y) return this.sort.direction === 'ASC' ? -1 : 1

                        return 0
                    })
                }

                return this.searchResults
            })

            const from = (this.page - 1) * this.showBy
            const to = this.page * this.showBy

            return sortResults.value.slice(from, to)
        },
    },
})
