import Link from 'next/link';
import { LogoImpacta } from '@/components/LogoImpacta';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
            <div className="mb-8">
                <LogoImpacta />
            </div>

            <h1 className="text-4xl font-bold text-[#c3ec35] mb-4">Página não encontrada</h1>
            <p className="text-gray-400 mb-6 text-center max-w-md">
                A rota que você tentou acessar não existe. Talvez tenha digitado algo errado ou a página foi movida.
            </p>
            <Link
                href="/"
                className="bg-[#c3ec35] text-gray-900 font-semibold px-5 py-2 rounded hover:brightness-110 transition"
            >
                Voltar à Página Inicial
            </Link>
        </main>
    );
}
