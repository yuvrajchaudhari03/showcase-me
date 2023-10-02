import Image from "next/image";
import SocialMedia from "../socialMedia";
import PrimaryButton from "../buttons/primaryButton";
import ProfilePic from '../../../public/assets/profile-pic.png';
import AttachmentIcon from '../../../public/assets/download-icon.svg';
import { MainHeading } from "../shareComponents/shareComponents";

export default function ContactMeComponent() {
    return (
        <div className="animate-slideUpEnter text-dark-blue-color flex flex-col sm:flex-col md:flex-row justify-center items-center mt-4">
            <div className="w-full sm:w-full md:w-2/4 mt-[50px] ">
                <Image
                    src={ProfilePic}
                    width={500}
                    height={500}
                    alt="profile_pic"
                    className="rounded-full border-4 border-[#000000] m-auto"
                />
            </div>
            <div className="text-center w-full sm:w-full md:w-2/4 mt-7 ">
                <MainHeading title="Contact Me"/>
                <div className="text-light-grey-color text-xl sm:text-3xl md:text-3xl my-4 leading-[38px] sm:leading-[45px] md:leading-[45px]">
                    I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with React, Javascript, React Native and Opensource Development.
                </div>
                <SocialMedia containerStyles={'justify-center md:justify-center sm:justify-center'} />
                <PrimaryButton
                    title="See My Resume"
                    icon={AttachmentIcon}
                    styles={'m-auto '}
                />
            </div>
        </div>
    )
}