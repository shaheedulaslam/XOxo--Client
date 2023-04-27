import styles from '@/styles/Home.module.css'
import TextField from '@mui/material/TextField/TextField' 
import { Button } from '@mui/material'
import { Inter } from 'next/font/google'
import { useFormik } from 'formik'
import { formSchema } from '@/validation/validation'


const inter = Inter({ subsets: ['latin'] })
const onSubmit = ((values)=>{
  console.log(values); 
})

export default function Register() {
const {values,handleBlur,handleChange, errors, handleSubmit, touched} = useFormik({
  initialValues:{
    username:'',
    phone:''
  },
  validationSchema:formSchema,
  onSubmit,
});

  return (
    <div className= { `${styles.main} ${inter.className}`}>
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
              className={errors.username && touched.username ? styles.errors :''} />
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
              className={errors.phone && touched.phone ? styles.errors :''} />
              {errors.phone && touched.phone && <p className={styles.error1}>{errors.phone}</p>}
              <br/>
              <Button type='submit' variant='contained'>Submit</Button>
              </form>
            </div>
            </div>
        )
      }
        

