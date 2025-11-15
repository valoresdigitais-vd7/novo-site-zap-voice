import React from 'react';

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


const TermsPage: React.FC = () => {
    return (
        <LegalPageLayout title="Termos de Uso - ZapVoice" lastUpdated="1 de Janeiro de 2024">
            <h2>1. Aceitação dos Termos</h2>
            <p>Ao acessar, instalar ou utilizar a extensão <strong>ZapVoice</strong> (zp.valoresdigitais.com), você declara ter lido, compreendido e aceitado integralmente as condições descritas nestes Termos de Uso.</p>

            <h2>2. Descrição do Serviço</h2>
            <p>O <strong>ZapVoice</strong> é uma ferramenta que integra-se ao WhatsApp Web por meio de uma extensão para Google Chrome, permitindo o envio de áudios humanizados, mensagens automáticas e outras funcionalidades para otimizar o atendimento e as vendas.</p>

            <h2>3. Responsabilidades do Usuário</h2>
            <ul>
                <li>Utilizar o <strong>ZapVoice</strong> de forma ética e em conformidade com as leis vigentes;</li>
                <li>Não utilizar a ferramenta para fins ilegais, spam ou envio em massa não autorizado;</li>
                <li>Proteger as informações de login e credenciais de acesso;</li>
                <li>Respeitar os Termos de Uso e a Política de Privacidade do WhatsApp e demais plataformas integradas.</li>
            </ul>

            <h2>4. Licença de Uso</h2>
            <p>O usuário adquire uma licença pessoal, não exclusiva e intransferível para utilizar o <strong>ZapVoice</strong>. É expressamente proibida a redistribuição, modificação, engenharia reversa ou revenda da ferramenta sem autorização prévia.</p>

            <h2>5. Planos e Pagamentos</h2>
            <p>O <strong>ZapVoice</strong> oferece assinaturas através da plataforma Eduzz, podendo ser:</p>
            <ul>
                <li>💎 Plano Anual – 12x de R$ 29,99</li>
                <li>💰 Plano Mensal – R$ 49,90/mês</li>
                <li>🎁 Teste Grátis 7 Dias</li>
            </ul>
            <p>As renovações são automáticas e o cancelamento pode ser solicitado a qualquer momento pelo painel da Eduzz.</p>

            <h2>6. Garantias e Limitações</h2>
            <p>O <strong>ZapVoice</strong> é fornecido “no estado em que se encontra”, sem garantias expressas ou implícitas. A equipe do projeto não se responsabiliza por problemas, danos ou prejuízos decorrentes do uso incorreto da ferramenta ou de atualizações do WhatsApp fora do controle da equipe desenvolvedora.</p>

            <h2>7. Privacidade e Dados</h2>
            <p>O <strong>ZapVoice</strong> não armazena mensagens, áudios ou dados de conversas dos usuários. Todas as informações trafegam diretamente no ambiente do WhatsApp Web, respeitando as políticas de segurança e privacidade aplicáveis.</p>

            <h2>8. Modificações nos Termos</h2>
            <p>A <strong>ZapVoice</strong> reserva-se o direito de alterar estes Termos de Uso a qualquer momento. Mudanças entrarão em vigor assim que publicadas no site oficial.</p>

            <h2>9. Suporte e Contato</h2>
            <p>Para dúvidas, suporte ou solicitações, entre em contato através do WhatsApp oficial disponível no site <a href="https://zp.valoresdigitais.com" target="_blank" rel="noopener noreferrer">zp.valoresdigitais.com</a>.</p>

            <h2>10. Disposições Gerais</h2>
            <p>Estes Termos são regidos pelas leis brasileiras. Qualquer disputa será submetida ao foro competente da cidade de São Paulo – SP, com exclusão de qualquer outro, por mais privilegiado que seja.</p>

            <p className="mt-8">© {new Date().getFullYear()} ZapVoice - Todos os direitos reservados.</p>
        </LegalPageLayout>
    );
};

export default TermsPage;
