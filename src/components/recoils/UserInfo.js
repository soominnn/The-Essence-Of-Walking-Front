import {atom} from 'recoil';

export const userInfo = atom({
    key: "userInfo",
    default: {
        userid: "",
        password: "",
        name: "",
        age: "",
        gender: "",
        email: "",
        phone: "",
    },
})