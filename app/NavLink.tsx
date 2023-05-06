'use client';

import { usePathname } from "next/navigation";
import Link from 'next/link';

export default function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <li className={pathname == href ? "active" : ""}>
            <Link href={href}>
                {children}
            </Link>
        </li>
    );
};