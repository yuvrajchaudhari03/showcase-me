import Image from "next/image";
import programmingImg from '../../../public/assets/Programming-bro.svg';
import PrimaryButton from "../buttons/primaryButton";
import AttachmentIcon from '../../../public/assets/download-icon.svg';
import SocialMedia from "../socialMedia";


export default function HomeGreet() {
    return (
        <div className="animate-slideUpEnter flex flex-col sm:flex-col md:flex-row justify-center items-center mt-4">
            <div className=" text-dark-blue-color w-full sm:w-full md:w-2/4 text-center md:text-left sm:text-center">
                <div>
                    <h3 className="text-3xl sm:text-5xl md:text-5xl font-bold my-3">Yuvraj Chaudhari</h3>
                    <span className="italic text-xl">- Software Engineer</span>
                </div>
                <div className="text-light-grey-color text-xl sm:text-3xl md:text-3xl my-4 leading-[38px] sm:leading-[45px] md:leading-[45px]">
                    A driven professional dedicated to crafting holistic solutions that foster sustainable, impactful social and technical ecosystems within end-to-end product development
                </div>
                <SocialMedia />
                <PrimaryButton
                    title="See My Resume"
                    icon={AttachmentIcon}
                    styles={'m-auto sm:m-auto md:m-0'}
                />
            </div>
            <div className="w-full sm:w-full md:w-2/4">
                <Image
                    width={"100%"}
                    height={"100%"}
                    src={programmingImg}
                    className="text-center m-auto mt-4"
                    alt="Dude"
                />
            </div>
        </div>
    )
}