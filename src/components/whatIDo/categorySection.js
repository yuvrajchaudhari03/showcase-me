import Image from "next/image";
import {
    FaCss3, FaYarn, FaPython
} from 'react-icons/fa6';
import { AiFillHtml5 } from 'react-icons/ai';
import { SiJavascript } from 'react-icons/si';
import { TbBrandReactNative, TbBrandNextjs } from 'react-icons/tb';
import { ImNpm } from 'react-icons/im';
import { BiLogoReact } from 'react-icons/bi';
import Tooltip from "../toolltip";
import { SubHeading } from "../shareComponents/shareComponents";

export default function CategorySection({ title, detailsList, iconList, image }) {
    return (
        <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-row  mt-[0px] md:mt-[50px] sm:mt-[50px] ">
            <div className="animate-slideRightEnter w-full sm:w-full md:w-2/4 mt-[30px]">
                <Image
                    width={"100%"}
                    height={"100%"}
                    src={image}
                    className="text-center m-auto"
                    alt="Dude"
                />
            </div>
            <div className="animate-slideLeftEnter text-dark-blue-color w-full sm:w-full md:w-2/4 text-center md:text-left sm:text-center">
                <div className="my-8 sm:mt-2 text-center">
                    <SubHeading title={title} />
                </div>
                <div className='flex flex-wrap gap-3 justify-center py-2 sm:py-8 md:py-8 sm:pt-0'>
                    <Tooltip message={"HTML"}>
                        <AiFillHtml5 size={48} color="#E34F26" />
                    </Tooltip>
                    <Tooltip message={"CSS"}>
                        <FaCss3 size={48} color="#1572B6" />
                    </Tooltip>
                    <Tooltip message={"Javascript"}>
                        <SiJavascript size={48} color="#F7DF1E" className='bg-[#000000]' />
                    </Tooltip>
                    <Tooltip message={"React"}>
                        <BiLogoReact size={48} color="#61DAFB" />
                    </Tooltip>
                    <Tooltip message={"React Native"}>
                        <TbBrandReactNative size={48} color="#61DAFB" />
                    </Tooltip>
                    <Tooltip message={"Next JS"}>
                        <TbBrandNextjs size={48} color="#000000" />
                    </Tooltip>
                    <Tooltip message={"NPM"}>
                        <ImNpm size={48} color="#CB3837" />
                    </Tooltip>
                    <Tooltip message={"Yarn"}>
                        <FaYarn size={48} color="#2C8EBB" />
                    </Tooltip>
                    <Tooltip message={"Python"}>
                        <FaPython size={48} color="#4584B6" />
                    </Tooltip>
                </div>
                <ul className='text-xl text-light-grey-color mt-6'>
                    {detailsList.map(detail => (
                        <li className='my-[20px]'>⚡ {detail}</li>
                    ))}
                </ul>
            </div>

        </div>
    )
}