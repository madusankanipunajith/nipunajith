import React from 'react';

const CommentCard = ({ content, name, title, img, index }) => {
    return (
            <div className={`block justify-between flex-col md:px-10 px-2 py-1 rounded-[20px] md:max-w-[60%] md:mr-5 mr-0 my-5 feedback-card
        ${index % 2 === 0 ? 'md:float-left' : 'md:float-right'} md:clear-both`}>
                <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white mb-5">
                    {content}
                </p>

                <div className="flex flex-row">
                    <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
                    <div className="flex flex-col ml-4">
                        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
                            {name}
                        </h4>
                        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
                            {title}
                        </p>
                    </div>
                </div>
            </div>
    );
}

export default CommentCard;
