import styles from "../style";
import { ananda, c, html, java, jithson, js, m6, mongo, node, php, python, react, sql } from "../assets";

const Footer = ({ socialMedia }) => (
    <section className={`${styles.flexCenter} ${styles.paddingY} ${styles.paddingX} px-2 md:text-left text-center flex-col bg-primary`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
            <div className="flex-[1] flex flex-col md:justify-start md:mr-10">
                <div className="flex md:flex-row gap-0 flex-col">
                    <img
                        src={jithson}
                        alt="jithson"
                        className="w-[266px] h-[72.14px] object-contain bg-slate-200 rounded-xl ml-auto mr-auto md:ml-0 md:mr-10"
                    />
                    <img src={m6} alt="" className="w-[70px] h-[70px] rounded-full border hidden md:inline md:mr-10"/>
                    <img src={ananda} alt="" className="w-[70px] h-[70px] hidden md:inline"/>
                    <section className="flex flex-row gap-2 md:hidden mx-auto pt-4">
                        <img src={m6} alt="" className="w-[70px] h-[70px] rounded-full border md:mr-10"/>
                        <img src={ananda} alt="" className="w-[70px] h-[70px]"/>
                    </section>
                </div>
                <p className={`font-poppins font-normal text-dimWhite text-[14px] leading-[30.8px] mt-4 md:max-w-[512px] w-full`}>
                    Sometimes, your expectation might not be happened and might have to face different thing that you have never expected due to any reason. but don’t give up. because the new thing might be the best turning point in your life…..
                </p>
            </div>

            <div className="flex-[1] w-full flex-col">
                <hr className="border border-white md:mt-0 mt-5 md:invisible block" />
                <p className={`${styles.paragraph} text-center pt-3 font-bold`}>Skills</p>
                <div className="flex flex-row gap-y-2 justify-around flex-wrap md:mt-10 mt-5">
                    <img src={java} alt="java" className="w-[60px] h-[60px]" />
                    <img src={python} alt="python" className="w-[60px] h-[60px]" />
                    <img src={js} alt="js" className="w-[60px] h-[60px]" />
                    <img src={react} alt="react" className="w-[60px] h-[60px]" />
                    <img src={html} alt="html" className="w-[60px] h-[60px]" />
                    <img src={node} alt="node" className="w-[60px] h-[60px]" />
                    <img src={php} alt="php" className="w-[60px] h-[60px]" />
                    <img src={sql} alt="sql" className="w-[60px] h-[60px]" />
                    <img src={c} alt="c++" className="w-[60px] h-[60px]" />
                    <img src={mongo} alt="mongodb" className="w-[60px] h-[60px]" />
                </div>
            </div>
        </div>

        <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
            <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white flex flex-col md:flex-row">
                <span>Copyright Ⓒ 2022 Jithson.</span> <span>&nbsp;All Rights Reserved.</span>
            </p>

            <div className="flex flex-row md:mt-0 mt-6">
                {socialMedia.map((social, index) => (
                    <img
                        key={social.id}
                        src={social.icon}
                        alt={social.id}
                        className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-10" : "mr-0"
                            }`}
                        onClick={() => window.open(social.link)}
                    />
                ))}
            </div>
        </div>
    </section>
);

export default Footer;