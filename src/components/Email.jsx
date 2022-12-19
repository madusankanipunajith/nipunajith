import React from 'react';
import styles from '../style';
import { emails } from '../db/data';

const Email = () => {
    return (
        <div className={`${styles.flexCenter} mt-5 md:w-[full] md:flex-row md:gap-5 flex-col mx-auto`}>
        {emails.map((stat) => (
          <div key={stat.id} className={`flex justify-start items-center md:flex-row flex-col my-3 mx-6 md:pt-10`} >
            <img src={stat.icon} alt='role' className='w-[50px] h-[50px]'/>
            <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient text-center ml-3">
              {stat.title}
            </p>
          </div>
        ))}
      </div>
    );
}

export default Email;