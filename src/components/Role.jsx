import React from 'react';
import styles from '../style';
import { roles } from '../db/data';

const Role = () => {
    return (
        <section className={`${styles.flexCenter} border-y-2 flex-row flex-wrap md:mx-10 sm:pb-20 pb-6`}>
        {roles.map((stat) => (
          <div key={stat.id} className={`flex justify-start items-center flex-row my-3 mx-6 md:pt-10`} >
            <img src={stat.icon} alt='role' className='w-[50px] h-[50px]'/>
            <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
              {stat.title}
            </p>
          </div>
        ))}
      </section>
    );
}

export default Role;
