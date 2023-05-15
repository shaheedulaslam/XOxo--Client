import styles from '@/styles/Home.module.css'
import TextField from '@mui/material/TextField/TextField' 
import { Button } from '@mui/material'
import { Inter } from 'next/font/google'
import { useFormik } from 'formik'
import { formSchema } from '@/validation/validation'
import axios from 'axios'
import { useRouter } from 'next/router'


const inter = Inter({ subsets: ['latin'] })

export default function Register() {
const router = useRouter()
const {values,handleBlur,handleChange, errors, handleSubmit, touched} = useFormik({
  initialValues:{
    username:'',
    phone:''
  },
  validationSchema:formSchema,
  onSubmit:()=>{
    submit()
  },
});
const submit = async()=>{
  try {
  const response = await axios.post(`${process.env.NEXT_PUBLIC_XOXO_SERVER_URL}/register`,values)
  console.log(response)
  localStorage.setItem("phone",values.phone)
  localStorage.setItem("username",values.username)
  router.push("/otp")
  } catch (error) {
    console.log(error);
  }
 
}
  return (
    <div className= {`${styles.main} ${inter.className}`}>
        <h2>Register Page</h2>
            <div className={styles.card}>
            <form onSubmit={handleSubmit}>

             <TextField id="outlined-basic"
              label="Username"
              name='username'
              variant="outlined"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              type='text'
              className={styles.errors} />
              {errors.username && touched.username && <p className={styles.error1}>{errors.username}</p>}
             <br/>

              <TextField id="outlined-basic" 
              label="Phone" 
              name='phone'
              variant="outlined"  
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              type='number'
              className={styles.errors} />
              {errors.phone && touched.phone && <p className={styles.error1}>{errors.phone}</p>}
              <br/>
              <Button type='submit' variant='contained' style={{marginTop:"10px"}}>Submit</Button>
              </form>
            </div>
            </div>
        )
      }
    
