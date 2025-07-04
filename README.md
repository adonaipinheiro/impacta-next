# 📘 Impacta Next.js — Projeto Didático

Este projeto demonstra as principais estratégias de renderização do **Next.js 13+ com App Router**, utilizando **Tailwind CSS**, **API Routes**, e estrutura de autenticação simulada via cookies.

Desenvolvido como parte da disciplina de **Server Side Rendering com Next.js** na Pós-Graduação da Impacta.

---

## 🚀 Tecnologias Utilizadas

- [Next.js 13+ App Router](https://nextjs.org/docs/app)
- Tailwind CSS
- API externa `jsonplaceholder.typicode.com` (mock)
- Server Components & Client Components
- Cookies via `next/headers`
- Deploy-ready (Vercel)

---

## 🧩 Estrutura das Rotas

| Rota             | Tipo de Renderização | Descrição                                                         |
|------------------|----------------------|--------------------------------------------------------------------|
| `/`              | SSG                  | Home com links para as outras páginas                             |
| `/clientes`      | CSR                  | Carrega dados no cliente com `useEffect`                          |
| `/admin`         | SSR                  | Protegida por cookie, renderizada a cada requisição               |
| `/login`         | CSR                  | Simula login via `document.cookie` e redireciona com `useRouter` |
| `/produtos`      | SSG                  | Lista produtos (usuários) gerados estaticamente                   |
| `/products/[id]` | ISR                  | Página dinâmica gerada com `generateStaticParams` + `revalidate` |
| `/api/produtos`  | API Route            | Retorna lista mockada de produtos em JSON                         |
| `not-found.tsx`  | SSR fallback         | Página 404 genérica para o app inteiro                            |

---

## ⚙️ Como rodar localmente

```bash
# Clone o projeto
git clone https://github.com/seuusuario/impacta-next.git
cd impacta-next

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev

# Acesse: http://localhost:3000
```

---

## 📁 Estrutura de Pastas (resumida)

```
app/
├── admin/              → SSR + cookies
├── clientes/           → CSR com useEffect
├── login/              → CSR com botão de login
├── produtos/           → SSG
├── products/[id]/      → ISR
├── api/produtos/       → API Route mock
├── components/         → Logo, botão de logout, etc.
└── not-found.tsx       → Página 404 global
```

---

## 🧠 Conceitos Demonstrados

- ✅ Client-Side Rendering (CSR)
- ✅ Server-Side Rendering (SSR)
- ✅ Static Site Generation (SSG)
- ✅ Incremental Static Regeneration (ISR)
- ✅ Cookies com `next/headers`
- ✅ API Routes integradas
- ✅ Página 404 personalizada
- ✅ Navegação com App Router
- ✅ Uso de `generateStaticParams`, `revalidate`, `notFound()`

---

## 👨‍🏫 Autor

**Prof. Adonai Pinheiro**  
Pós-graduação Impacta • Arquiteto Mobile @ Smiles / Gol