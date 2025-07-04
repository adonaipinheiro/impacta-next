'use client';

import { useEffect, useState } from 'react';
import { LogoImpacta } from '@/components/LogoImpacta';

type Cliente = {
    id: number;
    name: string;
    email: string;
};

export default function ClientesPage() {
    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => {
                setClientes(data);
                setLoading(false);
            });
    }, []);

    return (
        <main className="min-h-screen bg-gray-900 text-white px-6 py-10">
            <div className="max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <LogoImpacta />
                </div>

                <h1 className="text-3xl font-bold mb-6 border-b-4 border-[#c3ec35] inline-block">
                    Lista de Clientes (CSR)
                </h1>

                {loading ? (
                    <p className="text-gray-400 text-lg">Carregando clientes...</p>
                ) : (
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        {clientes.map((cliente) => (
                            <li
                                key={cliente.id}
                                className="p-5 border border-gray-700 rounded-xl bg-gray-800 shadow-sm hover:shadow-md transition duration-300"
                            >
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-semibold text-white">
                                        {cliente.name}
                                    </h2>
                                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-[#c3ec35] text-gray-900">
                                        ID {cliente.id}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-300 mt-1">{cliente.email}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </main>
    );
}
