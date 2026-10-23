import type { Ref } from "react";
import Link from "next/link";

interface NavBtnProps {
    label: string;
    href: string;
    active: boolean;
    ref?: Ref<HTMLAnchorElement>;
}

export default function NavBtn({
    label,
    href,
    active,
    ref,
}: NavBtnProps) {
    const base = "text-xl mx-5 px-1 transition-colors duration-300 ease-in-out";
    const classes = active ? `${base} text-[#E89FB0]` : `${base} text-[#C5B4B7] hover:text-[#F5ECEE] active:text-[#E89FB0]`;
    return <Link ref={ref} href={href} className={classes} aria-current={active ? "page" : undefined}>{label}</Link>
}