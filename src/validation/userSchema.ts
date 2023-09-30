export const userSchema = {
    properties: {
        id: {
            type: 'number',
            errorMessage: 'Заполните поле "id"',
        },
        firstName: {
            type: 'string',
            errorMessage: 'Заполните поле "firstName"',
        },
        lastName: {
            type: 'string',
            errorMessage: 'Заполните поле "lastName"',
        },
        email: {
            type: 'string',
            format: 'email',
            errorMessage: 'Введите валидный email',
        },
        phone: {
            type: 'string',
            errorMessage: 'Заполните поле "phone"',
        },
    },
}
