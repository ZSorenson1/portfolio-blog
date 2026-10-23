"use client";
import { useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import NavBtn from "@components/NavBtn";

const links = [
    { label: "About Me", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
];

export default function NavBar() {
    const pathname = usePathname();
    const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
    const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

    const activeHref = links.find(({ href }) => isActive(href))?.href;

    useLayoutEffect(() => {
        const el = activeHref ? linkRefs.current[activeHref] : null;
        if (!el) {
            setIndicator(null);
            return;
        }

        setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
    }, [activeHref]);

    return <nav className="relative flex flex-row w-full pb-1">
        {links.map(({ label, href }) => (
            <NavBtn
                key={href}
                ref={(el) => { linkRefs.current[href] = el; }}
                label={label}
                href={href}
                active={href === activeHref}
            />
        ))}
        <span
            aria-hidden="true"
            className="absolute bottom-0 h-0.5 bg-[#E89FB0] transition-all duration-300 ease-in-out motion-reduce:transition-none"
            style={indicator ? { left: indicator.left, width: indicator.width } : { opacity: 0 }}
        />
    </nav>
}