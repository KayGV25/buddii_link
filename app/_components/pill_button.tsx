'use client'
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

interface PillButtonProps {
    text: string,
    icon: PillButtonIcon,
    onClick?: () => void;
}

export function PillButton({text, icon, onClick}: PillButtonProps) {
    return (
        <div onClick={onClick} className="
        flex flex-row items-center justify-start gap-x-2 px-8 py-2 w-full shadow-lg
        rounded-full bg-white hover:cursor-pointer border-black border-2 hover:border-white">
            <GetIcon icon={icon}/>
            <p>{text}</p>
        </div>
    )
}

export enum PillButtonIcon {
    WHATSAPP,
    INSTAGRAM,
    FACEBOOK,
    LINK
}

function GetIcon({ icon }: { icon: PillButtonIcon }) {
    switch (icon) {
        case PillButtonIcon.WHATSAPP:
            return <FaWhatsapp />;
        case PillButtonIcon.INSTAGRAM:
            return <FaInstagram />;
        case PillButtonIcon.FACEBOOK:
            return <FaFacebook />;
        case PillButtonIcon.LINK:
            return <FaLink />;
        default:
            return null;
    }
}
