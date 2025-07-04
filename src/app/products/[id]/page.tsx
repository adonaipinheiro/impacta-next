import { notFound } from 'next/navigation';
import { LogoImpacta } from '@/components/LogoImpacta';

type Produto = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
    };
};

export async function generateStaticParams() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const produtos: Produto[] = await res.json();

    return produtos.map((produto) => ({
        id: produto.id.toString(),
    }));
}

// Gera nova página a cada 60 segundos (ISR)
export const revalidate = 60;

export default async function ProdutoPage({ params }: { params: { id: string } }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`, {
        next: { revalidate: 60 },
    });

    if (!res.ok) {
        notFound();
    }

    const produto: Produto = await res.json();

    if (!produto?.id) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-gray-900 text-white px-6 py-10">
            <div className="max-w-3xl mx-auto">
                <div className="flex justify-start mb-8">
                    <LogoImpacta />
                </div>

                <h1 className="text-3xl font-bold mb-6 border-b-4 border-[#c3ec35] inline-block">
                    Produto #{produto.id} — {produto.name}
                </h1>

                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-md">
                    <ul className="text-sm text-gray-300 space-y-2">
                        <li><strong>Usuário:</strong> {produto.username}</li>
                        <li><strong>Email:</strong> {produto.email}</li>
                        <li><strong>Telefone:</strong> {produto.phone}</li>
                        <li><strong>Website:</strong> {produto.website}</li>
                        <li><strong>Empresa:</strong> {produto.company.name}</li>
                        <li><strong>Slogan:</strong> <em>{produto.company.catchPhrase}</em></li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
