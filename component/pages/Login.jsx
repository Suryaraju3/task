'use client'
import React, { useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import next from 'next';
import cookies from 'js-cookie';

const Login = () => {
    const [username,setUserName]=useState('');
    const [password,setPassword]=useState('');
   
   
    const router=useRouter()

    const handlesubmit = async()=>{
        try{
            const response = await axios.post(`http://127.0.0.1:8000/api/token/`,{username,password});
            window.location.loading();
        }
        catch (err){
            alert('login failed');
        }  
    };
 
   return  (
    <div>

        <form action="" onSubmit={handlesubmit} className='mx-auto  max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10'>

            <div className='flex justify-center'> <h1>Login</h1></div>
            <div className=''>
            <div><input type="text" placeholder='UserName' className='border-1 rounded' onChange={e=>setUserName(e.target.value)} /></div>
            <div><input type="text" className='border-1 rounded' placeholder='Passwrod'  onChange={e=>setPassword(e.target.value)}/></div>
            <div><button type='submit' className='broder-0 rounded-2xl bg-blue-50 px-20 font-semibold'>Login</button></div>
            </div>
        </form>
      
    </div>
  )
}

export default Login
