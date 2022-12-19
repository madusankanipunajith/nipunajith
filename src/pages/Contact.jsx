import React from 'react';
import About from '../components/About';
import styles from '../style';
import Email from '../components/Email';

const Contact = () => {
    return (
        <div className={`bg-primary ${styles.flexStart} flex-col`} >
            <About/>
            <hr className='border border-white w-[95%] mx-auto mt-5'/>
            <Email/>
            <hr className='border border-white w-[95%]  mx-auto mt-5'/>
        </div>
    );
}

export default Contact;
