import * as yup from 'yup';

export const userSchema = yup.object().shape({
    name: yup.string().typeError("Invalid name").required(),
    email: yup.string().email().typeError("Invalid email").required(),
    pass: yup.string().typeError("Invalid password").min(4).max(12).required()
})