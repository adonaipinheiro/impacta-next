'use client';

import Image from 'next/image';
import Link from 'next/link';

export function LogoImpacta() {
    return (
        <Link href="/" className="block w-fit">
            <Image
                src="/logo_impacta.png"
                alt="Logo Impacta"
                width={200}
                height={40}
                className="h-auto max-w-[200px]"
                priority
            />
        </Link>
    );
}