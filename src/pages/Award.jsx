import React from 'react';
import AwardCard from './../components/AwardCard';
import styles from '../style';
import { awards, badges, certificates } from '../db/data';
import CertificateCard from '../components/CertificateCard';
import BadgeCard from '../components/BadgeCard';

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
                <h1 className={`${styles.heading2} text-center pt-5`}>Badges</h1>
                <div className={`${styles.boxWidth} flex md:flex-row flex-wrap flex-col`}>
                    {
                        badges.map((item, index)=>(
                            <BadgeCard key={index} url={item.img}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Award;
