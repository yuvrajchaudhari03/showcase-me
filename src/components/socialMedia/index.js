import {
    FaGithub, FaLinkedinIn,
    FaGoogle,
    FaTwitter,
    FaFacebookF,
    FaInstagram
} from 'react-icons/fa6';

export default function SocialMedia({ containerStyles }) {
    return (
        <div className={`flex m-auto justify-center md:justify-start sm:justify-center ${containerStyles}`}>
            <div className="flex gap-3 mb-6">
                <div>
                    <a
                        href={"https://github.com/yuvrajchaudhari03"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="rounded-full p-3 bg-[#181717]  hover:bg-dark-blue-color"><FaGithub width={'22px'} height={'22px'} color="#FFFFFF" /></div>
                    </a>
                </div>
                <div>
                    <a
                        href={"https://www.linkedin.com/in/yuvraj-chaudhari/"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="rounded-full p-3 bg-[#0077B5] hover:bg-dark-blue-color"><FaLinkedinIn width={'22px'} height={'22px'} color="#FFFFFF" /></div>
                    </a>
                </div>
                <div>
                    <a
                        href={"mailto:yuvrajchaudhari4@gmail.com"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="rounded-full p-3 bg-[#D14836] hover:bg-dark-blue-color"><FaGoogle width={'22px'} height={'22px'} color="#FFFFFF" /></div>
                    </a>
                </div>
                <div>
                    <a
                        href={"https://twitter.com/chaudhariyu2"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="rounded-full p-3 bg-[#1DA1F2] hover:bg-dark-blue-color"><FaTwitter width={'22px'} height={'22px'} color="#FFFFFF" /></div>
                    </a>
                </div>
                <div>
                    <a
                        href={"https://www.facebook.com/yuvrajchoudhari2/"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="rounded-full p-3 bg-[#1877F2] hover:bg-dark-blue-color"><FaFacebookF width={'22px'} height={'22px'} color="#FFFFFF" /
                        ></div>
                    </a>
                </div>
                <div>
                    <a
                        href={"https://www.instagram.com/yuvrajchoudhari_/"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="rounded-full p-3 bg-[#E4405F] hover:bg-dark-blue-color"><FaInstagram width={'22px'} height={'22px'} color="#FFFFFF" /
                        ></div>
                    </a>
                </div>
            </div>
        </div>
    )
}