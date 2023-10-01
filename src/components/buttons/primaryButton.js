import Image from "next/image";

export default function PrimaryButton({ title, styles, icon }) {
    return (
        <a
            href={"https://drive.google.com/file/d/1TRD_aBuQou9NcD5w-ENZcZmuM_32n6D4/view?usp=drive_link"}
            target="_blank"
            rel="noopener noreferrer"
        ><button className={`${styles} flex justify-center items-center gap-2 text-body-color bg-dark-blue-color px-4 py-2 rounded text-lg`}>
                {icon && <Image width={20} height={20} src={icon} alt="primary-button-icon" />}
                {title}</button>
        </a>
    )
}