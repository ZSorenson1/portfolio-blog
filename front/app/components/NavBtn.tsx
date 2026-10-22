interface NavBtnProps {
    label: string;
    onClick: () => void;
    active: boolean;
}

export default function NavBtn({
    label,
    onClick,
    active,
}: NavBtnProps) {
    const classes = active ? "text-xl mx-5 px-1 text-[#E89FB0] border-b-2 border-[E89FB0]" : "text-xl mx-5 mb-1 px-1 text-[#C5B4B7] hover:text-[#F5ECEE] transition duration-350 ease-in-out active:text-[#E89FB0]";
    return <button className={classes} onClick={onClick}>{label}</button>
}