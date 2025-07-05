import { LogoImpacta } from "@/components/LogoImpacta";
import Link from "next/link";

export default function ProductNotFound() {
    return (
        <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
            <div className="mb-8">
                <LogoImpacta />
            </div>
            <h1 className="text-4xl font-bold text-[#c3ec35] mb-4">Produto não encontrado</h1>
            <p className="text-gray-400 mb-6">O item que você está tentando acessar não existe ou foi removido.</p>
            <Link
                href="/products"
                className="bg-[#c3ec35] text-gray-900 font-semibold px-4 py-2 rounded hover:brightness-110 transition"
            >
                Voltar ao Catálogo
            </Link>
        </main>
    );
}
