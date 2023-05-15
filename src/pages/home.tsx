import styles from '@/styles/Home.module.css'
import { TextField } from '@material-ui/core'
import { Button } from '@mui/material'
import { Inter } from 'next/font/google'
import { useState  } from 'react'
import io from 'socket.io-client'


const inter = Inter({ subsets: ['latin'] })

const ENDPOINT:any = process.env.NEXT_PUBLIC_XOXO_SERVER_URL
const newSocket = io(ENDPOINT).connect()
console.log(newSocket);

export default function Home() {
const [username , setUsername] = useState('')
const [room , setRoom] = useState('')

const joinRoom = ()=>{
if(username!== "" && room !== ""){
  newSocket.emit("join_room",room)
}
  return (
    <>
    <div className={`${styles.main} ${inter.className}`}>
    <h2>Home</h2>
    <TextField 
    type='text'
    variant='outlined'
    label="name"
    onChange={(e)=>{setUsername(e.target.value)}}/>

    <TextField 
    type='text'
    variant='outlined'
    label="room"
    onChange={(e)=>{setRoom(e.target.value)}}/>
    
    <Button onClick={joinRoom} type='submit'>Join</Button>
    </div>
    </>
   )
  }
}



// onChange={(e)=>{setRoom(e.target.value)}}