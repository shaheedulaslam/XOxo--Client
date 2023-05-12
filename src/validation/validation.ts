import { text } from 'stream/consumers'
import * as Yup from 'yup'


const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
 export const formSchema = Yup.object({
    username:Yup.string()
    .required('Please enter your UserName')
    .min(5,'too Short!.. Please enter minimum 5 Characters for UserName')
    .max(8,'UserName 8 Characters Only Allowed'),

    phone:Yup.string()
    .required('Please Enter Your Phone Number')
    .matches(phoneRegex,"Enter 10 digit number")
    
  })



 


  
