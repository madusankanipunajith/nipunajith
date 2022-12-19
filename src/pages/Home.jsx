import React from 'react'
import Hero from '../components/Hero'
import styles from '../style'
import { feedback } from '../db/data'
import CommentCard from '../components/CommentCard'
import Role from '../components/Role'


export default function Home() {
    return (
        <>
            {/**Hero Section */}
            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero />
                </div>
            </div>

            {/**Role Section */}
            <div className='bg-primary'>
                <Role/>
            </div>

            {/**Comment Section */}
            <section id='comments' className={`bg-primary md:px-16 px-2 ${styles.flexStart}`}>
                <div className={`w-full flex-col`}>
                    {feedback.map((item, index)=>(
                        <CommentCard key={item.id} {...item} index={index}/>
                    ))}
                </div>
            </section>


        </>

    )
}
