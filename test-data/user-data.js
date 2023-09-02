const users = {
    username: {
        locked: 'locked_out_user',
        problem: 'problem_user',
        wrong: 'user_standart',
    },
    password: {
        valid: 'secret_sauce',
        wrong: 'sauce_secret',
    },
};

users.username.standart = process.env.USER === 'success' ? 'standard_user' : 'problem_user';

const checkout = {
    firstname: 'Georgiy',
    lastname: 'Antonov',
    postalCode: '123456',
};

module.exports = { users, checkout };
