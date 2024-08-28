import { useState } from 'react'


import './App.css'

function Login() {
 

  return (
    <>
<div className='mt-20  text-center text-2xl text-slate-50 Login
'>
    <h2 className='text-4xl'>{"Login"}</h2>
    <br />
  <form action="login" className='grid bg-gradient-to-r from-slate-900 to-slate-700   p-[3rem] rounded-lg gap-20 w-fit m-auto'>
   
<div className='grid gap-10'>
<input  type="email" placeholder='E-Mail' required  className='text-black text-xl rounded-md p-1'/>
    <input type="password" placeholder='Password' required  className='text-black rounded-md text-xl p-1'/>
</div>
   
<div className='m-auto flex gap-20 w-full'>
<button className='border-2 p-2 rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-all ease-in-out text-xl'>Register</button>
    <button   className='hover:cursor-pointer  m-auto p-2 mr-[-0.1rem] rounded-lg hover:bg-slate-50 hover:text-slate-950 transition-all ease-in-out text-xl bg-[#1679AB]' >Login</button>
   
    </div>
  </form> 
</div>
<br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /><br />

    </>
  )
}

export default Login