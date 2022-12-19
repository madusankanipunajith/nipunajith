import React from 'react';
import Vawe from './Vawe';
import styles from '../style';
import { ignots, cover } from '../assets';

const Hero = () => {
    return (
        <div className={`flex md:flex-row flex-col ${styles.paddingY}`}>
                    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:pl-16 sm:pr-10 px-6`}>
                        <div className="flex flex-row items-center py-[2px] px-4 bg-ignot-gradient rounded-[10px] mb-2">
                            <img src={ignots} alt='star' className="w-[32px] h-[32px]"></img>
                            <p className={`${styles.paragraph} ml-2 md:text-left text-center`}>
                                <span className='text-white'>A disciplined mind brings happiness.</span>
                            </p>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full">
                            <h1 className='flex-1 font-poppins font-semibold text-[52px] text-white ss:leading-[80px] leading-[75px]'>Hello. I am, <br className='sm:block hidden' /> {" "}
                                <span className='ss:text-[72px] text-gradient'>Madusanka</span> <br /> {" "}
                            </h1>
                            <div className='ss:flex hidden'>
                                <Vawe/>
                            </div>
                        </div>
                        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                            I am an undergraduate at UCSC and Self-driven and motivated Computer Science student possessing great analytical skills, love to work in team environments. Furthermore, I am a former software engineer (intern) at WSO2
                        </p>
                    </div>
                    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                        <img src={cover} alt='billing' className="md:w-[50%] md:h-[100%] w-[90%] relative z-[5]"></img>
                        <div className="absolute z-[5] w-[40%] h-[35%] top-0 pink__gradient" />
                        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                    </div>
                </div>
    );
}

export default Hero;
