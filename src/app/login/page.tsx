'use client';

import { useRouter } from 'next/navigation';
import { LogoImpacta } from '@/components/LogoImpacta';

export default function LoginPage() {
    const router = useRouter();

    const handleLogin = () => {
        document.cookie = 'token=123; path=/';
        router.push('/admin');
    };

    return (
        <main className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 w-full max-w-md shadow-md">
                <div className="flex justify-center mb-6">
                    <LogoImpacta />
                </div>

                <p className="text-gray-300 text-center mb-4">
                    Clique abaixo para simular o login com um cookie fake.
                </p>

                <button
                    onClick={handleLogin}
                    className="w-full bg-[#c3ec35] text-gray-900 font-semibold py-2 px-4 rounded hover:brightness-110 transition"
                >
                    Entrar como Admin
                </button>
            </div>
        </main>
    );
}
