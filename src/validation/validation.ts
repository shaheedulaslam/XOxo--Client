import * as Yup from 'yup'

 export const formSchema = Yup.object({
    username:Yup.string()
    .required('Please enter your UserName')
    .min(5,'Please enter minimum 5 Characters for UserName')
    .max(8,'UserName 8 Characters Only Allowed'),

    phone:Yup.number()
    .required('Please Enter Your Phone Number')
    .min(10,'Please Enter 10 digit number')
    .max(10,'Pleas Enter 10 digit number')
  })

