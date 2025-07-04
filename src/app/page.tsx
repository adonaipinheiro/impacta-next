import Link from 'next/link';
import { LogoImpacta } from '@/components/LogoImpacta';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-10">
          <LogoImpacta />
        </div>

        <h1 className="text-4xl font-bold mb-4">Boas-vindas ao Projeto Impacta Next.js</h1>
        <p className="text-gray-300 mb-10">
          Este projeto demonstra as principais formas de renderização do Next.js 13+ com Tailwind e estrutura moderna.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {[
            { href: '/clients', label: 'Clientes (CSR)' },
            { href: '/admin', label: 'Admin (SSR)' },
            { href: '/login', label: 'Login (Cookie)' },
            { href: '/products', label: 'Produtos (SSG)' },
            { href: '/products/1', label: 'Produto #1 (ISR)' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block bg-gray-800 border border-gray-700 rounded-lg px-6 py-4 hover:shadow-md transition"
            >
              <span className="text-[#c3ec35] font-semibold">{label}</span>
              <p className="text-gray-400 text-sm mt-1">/ {href.replace('/', '') || 'início'}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
