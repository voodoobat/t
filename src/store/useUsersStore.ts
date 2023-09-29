import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useAxios } from '~/service/useAxios.ts'
import { UserContract } from '~/contracts/user.ts'
import { SortPropType, SortUsersInterface } from '~/constants/sort.ts'

export const useUsersStore = defineStore('users', {
    state: (): {
        isLoading: boolean
        users: UserContract[]
        search: string
        sort: SortUsersInterface | null
        active: UserContract | null
        showBy: number
        page: number
    } => ({
        isLoading: false,
        users: [],
        search: '',
        sort: null,
        active: null,
        showBy: 5,
        page: 1,
    }),
    actions: {
        async fetch(count: number) {
            const url = `http://www.filltext.com/?rows=${count}&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D`

            this.$reset()
            this.isLoading = true
            const { data, error } = await useAxios<UserContract[]>('get', url)

            if (error) {
                return console.error(error)
            }

            this.isLoading = false
            this.users = data || []
        },
    },
    getters: {
        usersData(): UserContract[] {
            const searchResults = computed<UserContract[]>(() => {
                if (this.search) {
                    return this.users.filter(({ id, firstName, lastName, email, phone }) => {
                        const src = [id, firstName, lastName, email, phone].join(' ').toLowerCase()
                        return src.includes(this.search.toLowerCase().trim())
                    })
                }

                return this.users
            })

            const sortResults = computed<UserContract[]>(() => {
                if (this.sort) {
                    const prop = this.sort.prop as SortPropType

                    return searchResults.value.sort((x, y) => {
                        if (x[prop] > y[prop]) return this.sort?.direction === 'ASC' ? 1 : -1
                        if (x[prop] < y[prop]) return this.sort?.direction === 'ASC' ? -1 : 1

                        return 0
                    })
                }

                return searchResults.value
            })

            const from = (this.page - 1) * this.showBy
            const to = this.page * this.showBy

            return sortResults.value.slice(from, to)
        },
    },
})
