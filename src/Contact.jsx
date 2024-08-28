import { useFormData } from 'herotofu-react';



import './App.css'

function Contact() {

  const { formState, getFormSubmitHandler } = useFormData('https://herotofu.com/start');
  return (
    <main>
      
<div className=' grid justify-center text-center text-2xl text-slate-50 p-20 About 
'>
    <h2 className='text-4xl'>{"Contact"}</h2>
    <form   method="post" accept-charset="UTF-8" className='grid gap-5 w-fit m-auto mt-5 h-[70vh] '>
      
        <input required type="name" placeholder='Name' className='bg-transparent border-y-2 text-center rounded-lg p-4' />
        <input required type="email" placeholder='Email' className='bg-transparent border-y-2  text-center rounded-lg p-4' />
        <textarea name="Message" id="" cols="10" rows="10" required placeholder='Your Message' className='bg-transparent border-y-2 text-center rounded-lg p-4'></textarea>

        <input placeholder='Send'  type="submit" className=' hover:bg-slate-900 transition-all ease-in-out hover:cursor-pointer border-2 w-fit m-auto p-2 rounded-lg' />

    </form>
    <br /><br /><br /><br /><br /><br /><br /> <br /><br /><br />

</div>

    </main>
  )
}

export default Contact