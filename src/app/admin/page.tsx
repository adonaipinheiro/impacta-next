import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { LogoutButton } from '@/components/LogoutButton';
import { LogoImpacta } from '@/components/LogoImpacta';

export const dynamic = 'force-dynamic'; // garante renderização server-side

type User = {
    name: string;
    email: string;
    phone: string;
    company: { name: string; catchPhrase: string };
    address: { street: string; suite: string; city: string };
};

export default async function AdminPage() {
    const cookieStore = cookies();
    const token = (await cookieStore).get('token')?.value;

    if (!token) {
        redirect('/login');
    }

    // Consome API externa durante SSR
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user: User = await res.json();

    return (
        <main className="min-h-screen bg-gray-900 text-white px-6 py-10">
            <div className="max-w-5xl mx-auto relative">
                <div className="flex justify-between items-center mb-8">
                    <LogoImpacta />
                    <LogoutButton />
                </div>

                <h1 className="text-3xl font-bold mb-6 border-b-4 border-[#c3ec35] inline-block">
                    Painel Administrativo (SSR + API)
                </h1>

                <p className="text-gray-300 text-lg mb-6">
                    Bem-vindo! Esta página foi renderizada no servidor com base no cookie de autenticação.
                </p>

                <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 shadow-md mb-8">
                    <h2 className="text-xl font-semibold text-white mb-2">👤 Usuário Autenticado (API)</h2>
                    <ul className="text-sm text-gray-300 space-y-1">
                        <li><strong>Nome:</strong> {user.name}</li>
                        <li><strong>Email:</strong> {user.email}</li>
                        <li><strong>Telefone:</strong> {user.phone}</li>
                        <li><strong>Empresa:</strong> {user.company.name}</li>
                        <li><strong>Endereço:</strong> {user.address.street}, {user.address.suite} — {user.address.city}</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
