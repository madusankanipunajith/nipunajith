import React from 'react';
import styles from '../style';
import {member} from '../assets'

const AwardCard = ({award}) => {
    return (
        <div className='flex sm:flex-row flex-col md:gap-12 md:py-6 py-2 md:px-5 md:mx-5 px-0 mt-5 feedback-card h-[auto]'>
            <img src={award.img} className='md:w-[350px] md:h-[350px] w-[90%] h-[300px] ml-auto mr-auto' alt='project'></img>
            <div className='flex flex-col'>
                <section className={`md:text-[38px] text-[28px] text-white font-poppins text-center`}>{award.topic}</section>
                <section className={`${styles.paragraph} md:max-w-[90%] px-3`}>
                   {award.description}
                </section>
                <div className='flex-col pt-3'>
                    {award.member.map((item, index) => (
                        <section key={index} className='flex gap-2 px-3'>
                            <img src={member} className='w-[28px] h-[28px] p-1' alt='member'></img>
                            <p className={`${styles.paragraph}`}>{item}</p>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AwardCard;
