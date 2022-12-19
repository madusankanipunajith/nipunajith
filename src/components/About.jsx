import React from 'react';
import { about} from '../assets';
import styles from '../style';

const About = () => {
    return (
        <div className='flex md:flex-row md:gap-x-5 flex-col-reverse  pt-2 md:px-2 px-2'>
            <div className='flex-[2]'>
                <p className={`${styles.paragraph} md:mt-0 mt-3`}>I am an undergraduate at University of Colombo School of Computing and got selected to the 4th year special (SE) degree program. I am 25 years old and I live in Gampaha. I did my advance level in physical science stream at Ananda college. I am very punctual and like to do all my work all day at the right time. I am very keen to complete a task which has been assigned me as soon as possible before the deadline with good productivity. I have plenty of hobbies. Playing cricket and coding are my favorite hobbies out of them. Most of the time, people knows me as ‘Nipuna’, ‘Bauddaya’ and ‘Jith’ instead of my real name.

                <br/><br/>I was lucky to be an intern software engineer at WSO2 which is a leading software company in Srilanka. I think it would be a turning point in my life. My ambition is to be a reputed person in Sri Lanka and working hard to get a brand in front of my name in one day.</p>
            </div>
            <div className='flex-1  '>
                <img src={about} alt='nadeeshaan' className=' object-fill w-[100%] border border-[#33bbcf]'/>
            </div>
        </div>
    );
}

export default About;
