'use client';

import { useRouter } from 'next/navigation';

export function LogoutButton() {
    const router = useRouter();

    const handleLogout = () => {
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        router.push('/login');
    };

    return (
        <button
            onClick={handleLogout}
            className="bg-[#c3ec35] text-gray-900 font-semibold px-4 py-2 rounded hover:brightness-110 transition"
        >
            Sair
        </button>
    );
}
