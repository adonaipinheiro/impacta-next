import { LogoImpacta } from '@/components/LogoImpacta';
import Link from 'next/link';

type Produto = {
    id: number;
    name: string;
    email: string;
    company: { name: string };
};

export const revalidate = 3600; // apenas para segurança, mas é SSG puro sem ISR

export default async function ProdutosPage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        cache: 'force-cache', // SSG puro
    });
    const produtos: Produto[] = await res.json();

    return (
        <main className="min-h-screen bg-gray-900 text-white px-6 py-10">
            <div className="max-w-5xl mx-auto">
                <div className="flex justify-start mb-8">
                    <LogoImpacta />
                </div>

                <h1 className="text-3xl font-bold mb-6 border-b-4 border-[#c3ec35] inline-block">
                    Catálogo de Produtos (SSG)
                </h1>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {produtos.map((produto) => (
                        <li key={produto.id} className="bg-gray-800 border border-gray-700 rounded-xl p-5 shadow-sm hover:shadow-md transition">
                            <h2 className="text-xl font-semibold text-[#c3ec35]">
                                {produto.name}
                            </h2>
                            <p className="text-sm text-gray-300">{produto.company.name}</p>
                            <p className="text-sm text-gray-400 mt-1">{produto.email}</p>
                            <Link
                                href={`/products/${produto.id}`}
                                className="inline-block mt-4 text-sm text-[#c3ec35] font-semibold hover:underline"
                            >
                                Ver detalhes →
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}
