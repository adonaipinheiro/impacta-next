'use client';

import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';

const Logo = () => {
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

export const LogoImpacta = memo(Logo);