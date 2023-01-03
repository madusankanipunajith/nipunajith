import React from 'react';
import AwardCard from './../components/AwardCard';
import styles from '../style';
import { awards, certificates } from '../db/data';
import CertificateCard from '../components/CertificateCard';

const Award = () => {
    return (
        <div className={`bg-primary ${styles.flexStart}`}>
            <div className='flex flex-col'>
                <h1 className={`${styles.heading2} text-center`}>Trophies</h1>
                <div className={`${styles.boxWidth}`}>
                    {
                        awards.map((selectedAward, index) => (
                            <AwardCard key={index} award={selectedAward} />
                        ))
                    }
                </div>
                <h1 className={`${styles.heading2} text-center pt-5`}>Certficates</h1>
                <div className={`${styles.boxWidth} flex md:flex-row flex-wrap flex-col`}>
                    {
                        certificates.map((item, index)=>(
                            <CertificateCard key={index} url={item.img}/>
                        ))
                    }
                </div>
                <h1>Badges</h1>
            </div>
        </div>
    );
}

export default Award;
