import styles from '@/styles/Home.module.css'
import { Button } from '@mui/material'
import { Inter } from 'next/font/google'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { MuiOtpInput } from 'mui-one-time-password-input'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';







const inter = Inter({ subsets: ['latin'] })



export default function Otp() {
  const router = useRouter()
  const [otp, setOtp] = useState<string>('')
  const handleChange = (newValue: string) => {
    setOtp(newValue.replace(/\D/g, ''))
  }

  const onSubmit = async () => {
    try {

      const phone: any = localStorage.getItem("phone")
      const username: any = localStorage.getItem("username")

      console.log(phone, username);
      const response = await axios.post(`${process.env.NEXT_PUBLIC_XOXO_SERVER_URL}/otp`, {
        otp: otp,
        phone: phone,
        username: username
      })
      if (response.status === 201) {
        router.push('/home')
        console.log(response);
      }
    } catch (error: any) {
      console.log(error.response);
      toast("Invalid Otp")

    }
  }


  return (
    <div className={`${styles.main} ${inter.className}`}>
      <h2>Enter Your OTP</h2>
      <div className={styles.card}>
        <form onSubmit={onSubmit}>
        
          <MuiOtpInput value={otp} length={6} onChange={handleChange} />
          <Button type={'submit'} style={{ marginTop: "10px" }} variant='contained'>Submit</Button>
          
        </form>
      </div>
      <ToastContainer />
    </div>


  )
}
