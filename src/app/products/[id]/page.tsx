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

export const revalidate = 60;

export async function generateMetadata({ params }: { params: { id: string } }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    if (!res.ok) return { title: 'Usuário não encontrado' };

    const produto: Produto = await res.json();

    return {
        title: `Perfil de ${produto.name}`,
        description: `Informações do usuário ${produto.name}, colaborador da empresa ${produto.company.name}.`,
        openGraph: {
            title: `Usuário: ${produto.name}`,
            description: produto.company.catchPhrase,
            url: `https://seusite.com/products/${produto.id}`,
        },
    };
}

export default async function ProductPage({ params }: { params: { id: string } }) {
    const id = params.id;

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
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
                    Product #{produto.id} — {produto.name}
                </h1>

                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-md">
                    <ul className="text-sm text-gray-300 space-y-2">
                        <li><strong>Username:</strong> {produto.username}</li>
                        <li><strong>Email:</strong> {produto.email}</li>
                        <li><strong>Phone:</strong> {produto.phone}</li>
                        <li><strong>Website:</strong> {produto.website}</li>
                        <li><strong>Company:</strong> {produto.company.name}</li>
                        <li><strong>Slogan:</strong> <em>{produto.company.catchPhrase}</em></li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
