import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import styles from '../style';

function ContactForm() {
    const form = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        if (name.length > 0 && email.length > 0 && message.length > 0){
            emailjs.sendForm('service_x3gbvbl', 'template_ab7noin', form.current, 'Dcg1PXeGNnE8dRJBN')
            .then((result) => {
                console.log(result.text);
                e.target.reset()
                alert('Message has been sent successfully')
            }, (error) => {
                console.log(error.text);
                alert('Something went wrong')
            });
            
        }else{
            alert('Each fields should be filled')
        }

        
    };

    return (
        <div className='w-full flex md:gap-x-5 flex-col  pt-2 px-2'>
            <form className='flex flex-col px-4 my-10 max-w-5xl md:ml-[20%] md:mr-[20%] mr-[5px] ml-[5px] space-y-6' ref={form} onSubmit={sendEmail}>
                <div className='flex md:flex-row flex-col gap-5'>
                    <div className='md:w-1/2 w-[90%] mx-auto'>
                        <label className={`${styles.paragraph} ${styles.flexCenter}`}>Name</label>
                        <input className='border-2 border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500 font-poppins' required type="text" name="from_name" onChange={(e)=> setName(e.target.value.trim())}/>
                    </div>
                    <div className='md:w-1/2 w-[90%] mx-auto'>
                        <label className={`${styles.paragraph} ${styles.flexCenter}`}>Email</label>
                        <input className='border-2 border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500 font-poppins' required type="email" name="from_email" onChange={(e) => setEmail(e.target.value.trim())}/>
                    </div>
                </div>
                <section>
                    <label className={`${styles.paragraph} ${styles.flexCenter}`}>Message</label>
                    <textarea className='border-2 border-gray-400 block py-2 px-4 w-full h-[150px] rounded focus:outline-none focus:border-teal-500 font-poppins' required name="message" onChange={(e)=> setMessage(e.target.value.trim())}/>
                </section>
                <input className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles.flexCenter} md:w-[50%] w-[80%] mx-auto cursor-pointer`} type="submit" value="Send to Madusanka" />
            </form>
        </div>
    )
}

export default ContactForm