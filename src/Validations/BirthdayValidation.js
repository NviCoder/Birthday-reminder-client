import * as yup from 'yup';

export const birthdaySchema = yup.object().shape({
    fullName: yup.string().min(2).max(15).typeError("Invalid name").required(),
    dateOfBirth: yup.date().typeError("Invalid date").required(),
    img: yup.string().max(99).typeError("Invalid img").required(),
})
