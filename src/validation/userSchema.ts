import { email, numeric, required, minLength, helpers } from '@vuelidate/validators'

const { withMessage } = helpers
const messageRequired = 'Обязательное поле'

export const userSchema = {
    id: {
        required: withMessage(messageRequired, required),
        numeric: withMessage('Только цифры', numeric),
    },
    firstName: {
        required: withMessage(messageRequired, required),
    },
    lastName: {
        required: withMessage(messageRequired, required),
    },
    email: {
        required: withMessage(messageRequired, required),
        email: withMessage('Введите корректный email', email),
    },
    phone: {
        required: withMessage(messageRequired, required),
        minLength: withMessage('Введите корректный номер', minLength(18)),
    },
}
