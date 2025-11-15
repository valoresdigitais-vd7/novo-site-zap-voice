tsx
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

const PrivacyPage: React.FC = () => {
    return (
        <LegalPageLayout title="Política de Privacidade" lastUpdated="1 de Janeiro de 2024">
            <p>
                A ZapVoice, acessível em zp.valoresdigitais.com, preza pela sua privacidade e está comprometida em proteger os dados pessoais de seus usuários. 
                Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos suas informações em conformidade com a Lei Geral de Proteção de Dados (LGPD).
            </p>

            <h2>1. Coleta de Dados</h2>
            <p>
                Coletamos informações pessoais e técnicas quando você utiliza nosso site ou a extensão do Chrome.  
                Isso pode incluir: nome, e-mail, número de WhatsApp, informações de uso e dados de navegação.  
                Os dados são coletados com o objetivo de garantir uma melhor experiência de uso e oferecer suporte adequado.
            </p>

            <h2>2. Uso das Informações</h2>
            <p>
                As informações coletadas são utilizadas para:  
                - Operar e manter o funcionamento do ZapVoice;  
                - Enviar atualizações sobre o serviço;  
                - Fornecer suporte técnico;  
                - Personalizar e otimizar sua experiência;  
                - Cumprir obrigações legais e regulatórias.
            </p>

            <h2>3. Compartilhamento de Dados</h2>
            <p>
                Não vendemos nem compartilhamos suas informações pessoais com terceiros, exceto quando necessário para cumprimento legal, auditorias, processamentos de pagamentos (por exemplo, via Eduzz) 
                ou quando expressamente autorizado por você.
            </p>

            <h2>4. Armazenamento e Segurança</h2>
            <p>
                Seus dados são armazenados em servidores seguros e acessíveis apenas por pessoas autorizadas.  
                Empregamos medidas de segurança técnicas e administrativas para proteger suas informações contra acesso não autorizado, perda, alteração ou destruição.
            </p>

            <h2>5. Cookies e Tecnologias Semelhantes</h2>
            <p>
                O ZapVoice pode utilizar cookies e tecnologias semelhantes para melhorar a usabilidade do site, analisar estatísticas de visita e personalizar o conteúdo exibido.  
                Você pode alterar as configurações do seu navegador para recusar cookies, se desejar.
            </p>

            <h2>6. Direitos dos Titulares de Dados</h2>
            <p>
                Em conformidade com a LGPD, você tem o direito de:  
                - Confirmar a existência de tratamento dos seus dados;  
                - Acessar, corrigir ou excluir informações pessoais;  
                - Revogar o consentimento de uso de dados;  
                - Solicitar a portabilidade dos dados.  
                Para exercer seus direitos, entre em contato pelo e-mail: suporte@valoresdigitais.com.
            </p>

            <h2>7. Retenção de Dados</h2>
            <p>
                Os dados pessoais são mantidos apenas pelo tempo necessário para cumprir as finalidades descritas nesta política ou conforme exigido por lei.
            </p>

            <h2>8. Links Externos</h2>
            <p>
                Nosso site pode conter links para terceiros (como Eduzz ou YouTube).  
                Não nos responsabilizamos pelas práticas de privacidade desses websites.  
                Recomendamos que leia as políticas de privacidade de cada site externo que visitar.
            </p>

            <h2>9. Alterações nesta Política</h2>
            <p>
                Podemos atualizar esta Política de Privacidade periodicamente.  
                A data da última atualização será sempre indicada no início do documento.  
                Encorajamos que consulte esta página regularmente para manter-se informado.
            </p>

            <h2>10. Contato</h2>
            <p>
                Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais, entre em contato conosco pelo e-mail: suporte@valoresdigitais.com  
                ou diretamente via WhatsApp através dos canais oficiais do ZapVoice.
            </p>

            <p>
                Ao utilizar o site ou a extensão ZapVoice, você concorda com os termos desta Política de Privacidade.
            </p>
        </LegalPageLayout>
    );
};

export default PrivacyPage;
