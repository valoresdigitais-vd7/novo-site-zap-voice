import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TESTIMONIALS } from '../constants';
import { CheckCircleIcon, ZapIcon, ShieldIcon } from '../components/icons';

// --- SHARED COMPONENTS ---

// InlineCheckoutForm Component
interface InlineCheckoutFormProps {
    productName: string;
}
const InlineCheckoutForm: React.FC<InlineCheckoutFormProps> = ({ productName }) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        await new Promise(resolve => setTimeout(resolve, 1500));

        if (email && email.includes('@')) {
            setStatus('success');
            setMessage(`Obrigado! Em breve entraremos em contato para finalizar sua compra do ${productName}.`);
        } else {
            setStatus('error');
            setMessage('Por favor, insira um email válido.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-6">
            <div className="flex flex-col sm:flex-row gap-2">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu melhor email"
                    required
                    className="flex-grow px-4 py-3 rounded-md bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
                    disabled={status === 'loading'}
                />
                <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 disabled:bg-opacity-50 disabled:cursor-not-allowed"
                    disabled={status === 'loading'}
                >
                    {status === 'loading' ? 'Enviando...' : 'Teste Grátis Agora'}
                </button>
            </div>
            {message && (
                <p className={`mt-3 text-sm ${status === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {message}
                </p>
            )}
        </form>
    );
};

// --- UPDATED SECTIONS (ZAPVOICE) ---

const HeroSection: React.FC = () => (
    <section className="py-20 md:py-32 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 dark:text-white">
                Automatize seu WhatsApp sem perder a conexão humana
            </h1>
            <p className="mt-4 text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
                Envie áudios humanizados que simulam gravação real para um atendimento mais próximo e eficiente.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <a href="https://sun.eduzz.com/996637?a=525913" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-md transition-transform transform hover:scale-105">
                    Teste Grátis Agora
                </a>
                <a href="https://youtu.be/_xiYTqNZiI0" className="bg-white dark:bg-neutral-800 border border-green-600 text-green-600 dark:text-green-400 font-bold py-3 px-8 rounded-md transition-transform transform hover:scale-105">
                    Ver Demonstração
                </a>
            </div>
            <p className="mt-3 text-sm text-neutral-500">7 dias sem compromisso</p>
            <div className="mt-8 flex justify-center space-x-6 text-sm text-neutral-600 dark:text-neutral-400">
                <span>+500 usuários satisfeitos</span>
                <span>• 98% de aprovação no atendimento</span>
                <span>• R$100K em vendas automatizadas</span>
            </div>
        </div>
    </section>
);

const SocialProofSection: React.FC = () => (
    <section className="py-16 bg-neutral-100 dark:bg-neutral-900 text-center">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-6 mb-8">
                <img src="/whatsapp-logo.png" alt="WhatsApp" className="h-8" />
                <img src="/eduzz-logo.png" alt="Eduzz" className="h-8" />
            </div>
            <blockquote className="max-w-2xl mx-auto italic text-lg text-neutral-700 dark:text-neutral-300">
                "Com o ZapVoice, minhas vendas cresceram 150% sem perder a personalização. A interface simples e os áudios humanizados transformaram nosso atendimento!"
            </blockquote>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400">— Carlos, Coordenador de Vendas</p>
            <p className="text-sm text-green-600 dark:text-green-400">Aumento de 150% na conversão</p>
        </div>
    </section>
);

const CoreBenefitsSection: React.FC = () => (
    <section className="py-20 bg-white dark:bg-neutral-800">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Por que escolher o ZapVoice?</h2>
            <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center">
                    <div className="text-4xl mb-3">🎤</div>
                    <h3 className="font-semibold text-xl mb-2">Atendimento Humanizado Automatizado</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-2">Utilize áudios pré-gravados com simulação de gravação para manter a proximidade com o cliente.</p>
                    <a href="#recursos" className="text-green-600 font-medium">Saiba Mais</a>
                </div>
                <div className="text-center">
                    <div className="text-4xl mb-3">⏱️</div>
                    <h3 className="font-semibold text-xl mb-2">Agilidade nas Respostas</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-2">Programe mensagens e follow-ups automáticos, conquistando mais tempo e produtividade.</p>
                    <a href="#funcionalidades" className="text-green-600 font-medium">Ver Funcionalidade</a>
                </div>
                <div className="text-center">
                    <div className="text-4xl mb-3">⚙️</div>
                    <h3 className="font-semibold text-xl mb-2">Instalação Simples e Rápida</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-2">Instale a extensão Chrome e comece a automatizar em minutos, com suporte direto via WhatsApp.</p>
                    <a href="https://sun.eduzz.com/996637?a=525913" className="text-green-600 font-medium">Instalar Agora</a>
                </div>
            </div>
        </div>
    </section>
);

const StepsSection: React.FC = () => (
    <section className="py-20 bg-neutral-100 dark:bg-neutral-900">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center">Como Transformar Seu Atendimento em 3 Passos</h2>
            <div className="mt-12 grid md:grid-cols-3 gap-12 text-center">
                <div>
                    <div className="text-5xl mb-3">🔌</div>
                    <h3 className="font-semibold text-lg mb-2">Passo 1: Instale a Extensão</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">Adicione o ZapVoice ao seu Google Chrome com um clique, sem complicações.</p>
                </div>
                <div>
                    <div className="text-5xl mb-3">🎙️</div>
                    <h3 className="font-semibold text-lg mb-2">Passo 2: Configure Seus Áudios</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">Personalize seus áudios e configure gatilhos para simulação de “gravando…”.</p>
                </div>
                <div>
                    <div className="text-5xl mb-3">📈</div>
                    <h3 className="font-semibold text-lg mb-2">Passo 3: Automatize e Venda</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">Implemente funis automáticos e acompanhe seus clientes com follow-ups programados.</p>
                </div>
            </div>
            <p className="mt-8 text-center text-green-600 dark:text-green-400 font-semibold">Venda mais com um atendimento automatizado que mantém o toque humano.</p>
        </div>
    </section>
);

const ResourcesSection: React.FC = () => (
    <section className="py-20 bg-white dark:bg-neutral-800" id="recursos">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Recursos Gratuitos para Potencializar suas Vendas</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-12">Baixe materiais exclusivos e conheça cases de sucesso.</p>
            <div className="grid md:grid-cols-3 gap-8">
                <div>
                    <h3 className="font-semibold text-lg mb-2">E-book: Automatize seu WhatsApp</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-2">Descubra estratégias inovadoras para escalar seu atendimento.</p>
                    <a href="#" className="text-green-600 font-medium">Baixar agora</a>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">Tutorial em Vídeo</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-2">Veja como configurar o ZapVoice e potencializar sua comunicação.</p>
                    <a href="https://youtu.be/_xiYTqNZiI0" className="text-green-600 font-medium">Assistir vídeo</a>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">Case Study Real</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-2">Conheça empresas que cresceram com atendimento humanizado.</p>
                    <a href="#" className="text-green-600 font-medium">Ler mais</a>
                </div>
            </div>
        </div>
    </section>
);

const MidCTASection: React.FC = () => (
    <section className="py-20 bg-green-600 text-white text-center">
        <h2 className="text-3xl font-bold">Preparado para aumentar suas vendas sem perder o toque humano?</h2>
        <a href="https://sun.eduzz.com/996637?a=525913" className="mt-8 inline-block bg-white text-green-600 font-bold py-3 px-8 rounded-md transition-transform transform hover:scale-105">
            Teste Grátis 7 Dias
        </a>
        <p className="mt-2 text-sm text-green-100">Sem necessidade de cartão de crédito</p>
    </section>
);

const ComparisonSection: React.FC = () => (
    <section className="py-20 bg-neutral-100 dark:bg-neutral-900 text-center">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12">Por que o ZapVoice é único no mercado?</h2>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-green-600 text-white">
                            <th className="p-4">Abordagem Tradicional</th>
                            <th className="p-4">ZapVoice</th>
                        </tr>
                    </thead>
                    <tbody className="text-neutral-700 dark:text-neutral-300">
                        <tr>
                            <td className="p-4 border">❌ Mensagens frias e robóticas</td>
                            <td className="p-4 border">✅ Áudios humanizados com simulação real</td>
                        </tr>
                        <tr>
                            <td className="p-4 border">❌ Respostas manuais demoradas</td>
                            <td className="p-4 border">✅ Automação ágil e personalizada</td>
                        </tr>
                        <tr>
                            <td className="p-4 border">❌ Sem sinal de interação real</td>
                            <td className="p-4 border">✅ Simulação de “digitando/gravando”</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
);

const TestimonialsGridSection: React.FC = () => (
    <section className="py-20 bg-white dark:bg-neutral-800">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">O que nossos clientes dizem</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-12">Histórias reais de quem já transformou seu atendimento</p>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { quote: "Nossa equipe triplicou o engajamento. A personalização fez toda a diferença.", author: "Mariana, Gerente de Vendas", result: "Aumento de 200% em conversões" },
                    { quote: "Surpreendente! Primeiro cliente em apenas 5 dias.", author: "Ricardo, Infoprodutor", result: "Primeira venda em tempo recorde" },
                    { quote: "Automatizar sem perder o toque humano era essencial.", author: "Fernanda, SDR", result: "Conversão 150% maior" },
                    { quote: "Minha rotina ficou mais leve e eficiente.", author: "Paulo, Empreendedor", result: "Economia de 10h semanais" },
                    { quote: "Clientes se sentem valorizados com a comunicação humanizada.", author: "Beatriz, Lançadora", result: "Crescimento de 120% em vendas" },
                    { quote: "Inovação que equilibra tecnologia e emoção.", author: "João, Administrador", result: "Melhora de 180% em follow-ups" },
                ].map((t, i) => (
                    <div key={i} className="bg-neutral-100 dark:bg-neutral-900 p-6 rounded-lg shadow">
                        <p className="text-yellow-400 mb-2">★★★★★</p>
                        <p className="italic text-neutral-700 dark:text-neutral-300 mb-2">"{t.quote}"</p>
                        <p className="font-semibold">{t.author}</p>
                        <p className="text-sm text-green-600">{t.result}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const FAQSection: React.FC = () => (
    <section className="py-20 bg-neutral-100 dark:bg-neutral-900" id="faq">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
            <div className="max-w-3xl mx-auto space-y-6 text-neutral-700 dark:text-neutral-300">
                <div>
                    <h3 className="font-semibold">Como a extensão ZapVoice funciona?</h3>
                    <p>Instale no seu Chrome, configure áudios e gatilhos, e automatize mantendo a personalização.</p>
                </div>
                <div>
                    <h3 className="font-semibold">Preciso ter conhecimento técnico para usar?</h3>
                    <p>Não! A interface é intuitiva e fácil de usar.</p>
                </div>
                <div>
                    <h3 className="font-semibold">Os áudios realmente soam naturais?</h3>
                    <p>Sim, a simulação de “gravando...” proporciona experiência real e acolhedora.</p>
                </div>
                <div>
                    <h3 className="font-semibold">Como é oferecido o suporte?</h3>
                    <p>Temos suporte direto via WhatsApp para dúvidas rápidas e práticas.</p>
                </div>
                <div>
                    <h3 className="font-semibold">Posso testar o ZapVoice antes de assinar?</h3>
                    <p>Sim! Você tem 7 dias de teste grátis sem compromisso.</p>
                </div>
            </div>
        </div>
    </section>
);

const FinalCTASection: React.FC = () => (
    <section className="py-20 bg-green-600 text-white text-center">
        <h2 className="text-3xl font-bold">Não perca a chance de transformar seu atendimento no WhatsApp!</h2>
        <p className="mt-2 text-lg text-green-100">Experimente o ZapVoice e sinta a diferença de um atendimento humanizado e automatizado.</p>
        <a href="https://sun.eduzz.com/996637?a=525913" className="mt-8 inline-block bg-white text-green-600 font-bold py-3 px-8 rounded-md transition-transform transform hover:scale-105">
            Teste Grátis Agora →
        </a>
        <div className="mt-6 text-sm text-green-100 space-y-2">
            <p>✔ Garantia de satisfação</p>
            <p>✔ Suporte via WhatsApp dedicado</p>
            <p>✔ Comunidade ativa e engajada</p>
        </div>
    </section>
);

const HomePage: React.FC = () => {
    return (
        <>
            <HeroSection />
            <SocialProofSection />
            <CoreBenefitsSection />
            <StepsSection />
            <ResourcesSection />
            <MidCTASection />
            <ComparisonSection />
            <TestimonialsGridSection />
            <FAQSection />
            <FinalCTASection />
        </>
    );
};

export default HomePage;
