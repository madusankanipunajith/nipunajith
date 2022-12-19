import React from 'react';
import { technology } from '../assets';
import styles from '../style';

const ProjectCard = ({ proj }) => {
    return (
        <div className='flex sm:flex-row flex-col md:gap-12 md:py-6 py-2 md:px-5 md:mx-5 px-0 mt-5 feedback-card h-[auto]'>
            <img src={proj.img} className='md:w-[350px] md:h-[350px] w-[90%] h-[300px] ml-auto mr-auto' alt='project'></img>
            <div className='flex flex-col'>
                <section className={`md:text-[38px] text-[28px] text-white font-poppins text-center`}>{proj.topic}</section>
                <section className={`${styles.paragraph} md:max-w-[90%] px-3`}>
                   {proj.description}
                </section>
                <div className='flex-col pt-3'>
                    {proj.tech.map((item, index) => (
                        <section key={index} className='flex gap-2 px-3'>
                            <img src={technology} className='w-[28px] h-[28px] p-1' alt='technology'></img>
                            <p className={`${styles.paragraph}`}>{item}</p>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
