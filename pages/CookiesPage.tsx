tsx
import React from 'react';
import { Link } from 'react-router-dom';

// NOTE: A real cookie banner would have state management and logic to set cookies.
// This is a visual placeholder.
const CookieConsentBanner: React.FC = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-neutral-900 text-white p-4 flex flex-col sm:flex-row justify-between items-center z-50">
        <p className="text-sm">Nós usamos cookies para melhorar sua experiência. Ao continuar a navegar, você concorda com nosso uso de cookies.</p>
        <div className="flex gap-2 mt-2 sm:mt-0">
            <button className="bg-primary text-white px-4 py-2 rounded text-sm font-semibold">Aceitar</button>
            <Link to="/politica-de-cookies" className="px-4 py-2 rounded text-sm hover:bg-neutral-700">Saber mais</Link>
        </div>
    </div>
);

const LegalPageLayout: React.FC<{ title: string; lastUpdated: string; children: React.ReactNode }> = ({ title, lastUpdated, children }) => (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto bg-white dark:bg-neutral-800 p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <p className="text-sm text-neutral-500 mb-6">Última atualização: {lastUpdated}</p>
            <div className="prose dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300">
                {children}
            </div>
        </div>
    </div>
);

const CookiesPage: React.FC = () => {
    return (
        <>
            <LegalPageLayout title="Política de Cookies" lastUpdated="1 de Janeiro de 2024">
                <h2>1. O que são cookies?</h2>
                <p>Cookies são pequenos arquivos de texto que um site armazena em seu computador, smartphone ou outro dispositivo quando você o visita. Eles servem para reconhecer o seu dispositivo e armazenar algumas informações sobre suas preferências ou ações anteriores.</p>

                <h2>2. Como usamos os cookies?</h2>
                <p>No ZapVoice, utilizamos cookies para melhorar a navegação, oferecer uma experiência personalizada e analisar o desempenho do site. Os cookies nos ajudam a entender como os visitantes interagem com nossas páginas e como podemos otimizar nosso conteúdo e serviços.</p>

                <h2>3. Tipos de cookies que usamos</h2>
                <ul>
                    <li><strong>Cookies Essenciais:</strong> Necessários para o funcionamento básico do site e para permitir que você navegue e use suas funcionalidades.</li>
                    <li><strong>Cookies de Desempenho:</strong> Coletam informações sobre como os visitantes usam o site, como páginas mais visitadas e possíveis erros.</li>
                    <li><strong>Cookies de Funcionalidade:</strong> Memorizam suas preferências e escolhas (como nome de usuário, idioma ou região), proporcionando uma experiência mais personalizada.</li>
                    <li><strong>Cookies de Marketing:</strong> Usados para exibir anúncios relevantes e avaliar a eficácia das campanhas de marketing.</li>
                </ul>

                <h2>4. Gerenciamento de cookies</h2>
                <p>Você pode optar por aceitar ou recusar cookies ao visitar nosso site. A maioria dos navegadores aceita cookies automaticamente, mas você pode modificar as configurações para recusá-los, se preferir. No entanto, isso pode impactar a funcionalidade de algumas partes do site.</p>

                <h2>5. Cookies de terceiros</h2>
                <p>Podemos utilizar cookies de terceiros (como Google Analytics) para coletar dados estatísticos e melhorar nossos serviços. Esses cookies são gerenciados por terceiros e seguem suas próprias políticas de privacidade.</p>

                <h2>6. Alterações nesta política</h2>
                <p>Podemos atualizar esta Política de Cookies periodicamente para refletir mudanças em nossas práticas ou por outros motivos operacionais, legais ou regulamentares. Recomendamos que você revise esta página regularmente.</p>

                <h2>7. Contato</h2>
                <p>Se tiver dúvidas sobre esta Política de Cookies, entre em contato conosco pelo suporte oficial do ZapVoice via WhatsApp ou pelos canais informados em nosso site <a href="https://zp.valoresdigitais.com" target="_blank" rel="noopener noreferrer">zp.valoresdigitais.com</a>.</p>
            </LegalPageLayout>
            <CookieConsentBanner />
        </>
    );
};

export default CookiesPage;
