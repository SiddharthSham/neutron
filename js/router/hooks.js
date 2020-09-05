import {
    passwordCheck
} from '../views/auth/register'


export const hooks = {
    login: {
        mounted: () => console.log('hello from login'),
        unmount: () => console.log('bye from login'),
    },
    register: {
        mounted: passwordCheck, 
        unmount: () => console.log('bye from register')
    }
}