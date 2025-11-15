
import React, { useState } from 'react';
import { CheckCircleIcon } from '../components/icons';

// --- HERO SECTION ---

const HeroSection: React.FC = () => (
  <section id="hero" className="py-20 md:py-32 bg-neutral-100 dark:bg-neutral-900">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
        Humanize seu WhatsApp: <span className="text-primary dark:text-primary-light">Atenda com Emoção Agora!</span>
      </h1>
      <p className="mt-6 text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
        Automatize seu atendimento e vendas com áudios humanizados e funis inteligentes integrados ao WhatsApp Web.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#plans"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-md transition-transform transform hover:scale-105"
        >
          Teste 7 Dias Grátis
        </a>
        <a
          href="#benefits"
          className="bg-white dark:bg-neutral-800 text-green-600 dark:text-green-400 border border-green-500 font-semibold py-3 px-8 rounded-md transition-transform transform hover:scale-105"
        >
          Saiba Mais
        </a>
      </div>
      <p className="mt-3 text-sm text-neutral-500">Sem necessidade de cartão de crédito</p>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-neutral-600 dark:text-neutral-400 text-sm">
        <div>💼 500+ empresas utilizando</div>
        <div>⭐ 95% de satisfação dos usuários</div>
        <div>💰 R$500K em resultados gerados</div>
      </div>
    </div>
  </section>
);

// --- SOCIAL PROOF IMEDIATO ---

const SocialProofSection: React.FC = () => (
  <section id="social-proof" className="py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex justify-center gap-8 flex-wrap items-center">
        <div className="text-2xl font-semibold text-neutral-500">StartUp Hub</div>
        <div className="text-2xl font-semibold text-neutral-500">ConectaCRM</div>
        <div className="text-2xl font-semibold text-neutral-500">TechSales</div>
        <div className="text-2xl font-semibold text-neutral-500">VendaFácil</div>
      </div>
      <div className="mt-8 max-w-3xl mx-auto bg-neutral-50 dark:bg-neutral-800 p-8 rounded-lg shadow-md">
        <p className="italic text-neutral-700 dark:text-neutral-200">
          “ZapVoice transformou nosso atendimento: a combinação de automação com áudios realistas nos aproximou diretamente
          dos clientes, elevando nossa conversão em tempo recorde.”
        </p>
        <p className="mt-4 font-semibold">— Mariana Souza, Gerente de Vendas</p>
        <p className="text-sm text-green-600 mt-1">Aumento de conversão em 150%</p>
      </div>
    </div>
  </section>
);

// --- BENEFÍCIOS PRINCIPAIS ---

const BenefitsSection: React.FC = () => (
  <section id="benefits" className="py-20 bg-neutral-100 dark:bg-neutral-900">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Funcionalidades Principais</h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md">
          <div className="text-4xl mb-4">🎤</div>
          <h3 className="font-semibold text-lg">Áudios que Encantam Clientes</h3>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            Envie mensagens pré-gravadas que simulam o áudio real, aproximando sua comunicação e evitando a frieza dos
            robôs.
          </p>
          <a href="#" className="text-green-500 hover:text-green-600 mt-3 inline-block text-sm font-medium">
            Saiba como →
          </a>
        </div>
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md">
          <div className="text-4xl mb-4">⏱️</div>
          <h3 className="font-semibold text-lg">Automatização Inteligente</h3>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            Implemente funis automáticos com gatilhos e intervalos programados para um fluxo de atendimento contínuo e
            preciso.
          </p>
          <a href="#" className="text-green-500 hover:text-green-600 mt-3 inline-block text-sm font-medium">
            Ver benefícios →
          </a>
        </div>
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md">
          <div className="text-4xl mb-4">🔌</div>
          <h3 className="font-semibold text-lg">Integração Simples e Rápida</h3>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            Instale a extensão oficial para Google Chrome e comece a operar com atualizações automáticas e suporte
            dedicado.
          </p>
          <a href="#" className="text-green-500 hover:text-green-600 mt-3 inline-block text-sm font-medium">
            Confira instalação →
          </a>
        </div>
      </div>
    </div>
  </section>
);

// --- COMO FUNCIONA ---

const HowItWorksSection: React.FC = () => (
  <section id="how" className="py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
        Como Humanizar seu WhatsApp em 3 Passos
      </h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 rounded-lg bg-white dark:bg-neutral-800 shadow-md">
          <div className="text-5xl mb-2">⬇️</div>
          <h3 className="font-semibold text-lg">1. Instale a Extensão</h3>
          <p className="text-neutral-600 dark:text-neutral-400 mt-2">
            Adicione o ZapVoice ao seu Chrome com um clique e fique pronto para transformar seu atendimento.
          </p>
        </div>
        <div className="p-6 rounded-lg bg-white dark:bg-neutral-800 shadow-md">
          <div className="text-5xl mb-2">🎙️</div>
          <h3 className="font-semibold text-lg">2. Configure seus Áudios</h3>
          <p className="text-neutral-600 dark:text-neutral-400 mt-2">
            Personalize os áudios humanizados de acordo com sua marca e perfil do cliente, garantindo uma abordagem única.
          </p>
        </div>
        <div className="p-6 rounded-lg bg-white dark:bg-neutral-800 shadow-md">
          <div className="text-5xl mb-2">🚀</div>
          <h3 className="font-semibold text-lg">3. Automatize e Conquiste</h3>
          <p className="text-neutral-600 dark:text-neutral-400 mt-2">
            Ative os funis automáticos e veja a comunicação fluir com a naturalidade de um atendimento real.
          </p>
        </div>
      </div>
      <p className="mt-8 text-lg text-neutral-600 dark:text-neutral-400">
        Transforme seu atendimento e aumente as vendas com comunicação automatizada, mas sempre humana.
      </p>
    </div>
  </section>
);

// --- RECURSOS EXCLUSIVOS ---

const ResourcesSection: React.FC = () => (
  <section id="resources" className="py-20 bg-neutral-100 dark:bg-neutral-900">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">Explore Nossos Recursos Exclusivos</h2>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        Materiais gratuitos que comprovam a eficácia do ZapVoice
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg">E-book: Estratégias de Venda no WhatsApp</h3>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            Aprenda táticas infalíveis para escalar seu atendimento e vender mais.
          </p>
          <a href="#" className="mt-3 inline-block text-green-500 font-medium">
            Baixar agora →
          </a>
        </div>
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg">Checklist: Automatize seu Atendimento</h3>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            Identifique os principais pontos para uma comunicação eficiente e personalizada.
          </p>
          <a href="#" className="mt-3 inline-block text-green-500 font-medium">
            Baixar checklist →
          </a>
        </div>
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg">Guia Rápido: Personalize seus Áudios</h3>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            Dicas práticas para gravar áudios que realmente conectam com seus clientes.
          </p>
          <a href="#" className="mt-3 inline-block text-green-500 font-medium">
            Ler guia →
          </a>
        </div>
      </div>
    </div>
  </section>
);

// --- CTA INTERMEDIÁRIO ---

const MidCTASection: React.FC = () => (
  <section id="cta-mid" className="py-20 bg-green-500 text-white text-center">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h3 className="text-3xl font-bold">Pronto para dar o próximo passo e humanizar seu WhatsApp?</h3>
      <a
        href="#plans"
        className="mt-8 inline-block bg-white text-green-600 font-bold py-3 px-8 rounded-md shadow-md hover:scale-105 transition-transform"
      >
        Teste 7 Dias Grátis
      </a>
      <p className="mt-2 text-white/90 text-sm">Sem cartão de crédito</p>
    </div>
  </section>
);

// --- COMPARAÇÃO ---

const ComparisonSection: React.FC = () => (
  <section id="comparison" className="py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">Por que ZapVoice é Diferente?</h2>
      <div className="mt-10 overflow-x-auto">
        <table className="min-w-full border border-neutral-300 dark:border-neutral-700 text-left text-neutral-700 dark:text-neutral-300">
          <thead>
            <tr>
              <th className="border-b p-3 font-semibold">Abordagem Tradicional</th>
              <th className="border-b p-3 font-semibold">ZapVoice</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b p-3">❌ Mensagens frias e robóticas</td>
              <td className="border-b p-3">✅ Áudios humanizados e realistas</td>
            </tr>
            <tr>
              <td className="border-b p-3">❌ Falta de personalização</td>
              <td className="border-b p-3">✅ Simulação de “gravando...” e “digitando...”</td>
            </tr>
            <tr>
              <td className="p-3">❌ Instalação complexa</td>
              <td className="p-3">✅ Extensão simples e atualizada</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

// --- DEPOIMENTOS EM GRID ---

const TestimonialsSection: React.FC = () => (
  <section id="testimonials" className="py-20 bg-neutral-100 dark:bg-neutral-900">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">O que Nossos Usuários Dizem</h2>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        Casos reais: resultados rápidos, superação de desafios e grandes conquistas
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            text: 'Com o ZapVoice, conseguimos uma integração perfeita entre automação e personalização. Meus clientes se surpreenderam com o toque humano!',
            author: 'João M., Empresário',
            result: 'Primeiro atendimento com 95% de aprovação',
          },
          {
            text: 'O diferencial dos áudios humanizados fez toda a diferença. Vimos um aumento de 120% nas conversões em poucas semanas.',
            author: 'Ana P., Marketing Digital',
            result: 'Conversão nas vendas disparou',
          },
          {
            text: 'Eu achava que automação e humanização não combinavam, mas o ZapVoice mudou esse cenário. Recomendo fortemente!',
            author: 'Carlos R., Gestor de Vendas',
            result: 'Aumento de 150% na fidelização de clientes',
          },
          {
            text: 'Rapidez e eficiência com um toque pessoal. O ZapVoice revolucionou a forma como nos comunicamos pelo WhatsApp.',
            author: 'Fernanda L., Consultora de Vendas',
            result: 'Resposta instantânea e humanizada',
          },
          {
            text: 'Resultados expressivos em poucos dias. A ferramenta é intuitiva e o suporte é exemplar!',
            author: 'Marcos S., Empreendedor Digital',
            result: 'Atendimento 24/7 com alta qualidade',
          },
          {
            text: 'Finalmente uma ferramenta que traz proximidade mesmo em atendimento automatizado. Meus clientes se sentem valorizados!',
            author: 'Luana D., Coordenadora de CRM',
            result: 'Fidelização e aumento de engajamento',
          },
        ].map((t, i) => (
          <div key={i} className="bg-white dark:bg-neutral-800 p-6 rounded-lg text-left shadow-md">
            <div className="text-yellow-400 mb-3">★★★★★</div>
            <p className="italic text-neutral-700 dark:text-neutral-200">“{t.text}”</p>
            <p className="mt-4 font-semibold">{t.author}</p>
            <p className="text-sm text-green-600 mt-1">{t.result}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- FAQ ---

const FAQSection: React.FC = () => {
  const faqs = [
    {
      q: 'Como faço para instalar o ZapVoice?',
      a: 'A extensão é simples de instalar no Google Chrome. Basta clicar no link, adicionar e em instantes estará pronta para operar.',
    },
    {
      q: 'O ZapVoice é compatível com todas as versões do WhatsApp Web?',
      a: 'Sim, nosso produto foi desenvolvido para funcionar com a versão mais recente do WhatsApp Web, garantindo compatibilidade máxima.',
    },
    {
      q: 'Posso personalizar os áudios conforme minha marca?',
      a: 'Com certeza! Você pode gravar mensagens personalizadas e configurar funis automáticos de acordo com a identidade e necessidades do seu negócio.',
    },
    {
      q: 'Existe integração com outras plataformas?',
      a: 'Atualmente, o ZapVoice integra-se ao WhatsApp Web, mas estamos sempre em desenvolvimento para futuras integrações.',
    },
    {
      q: 'Como funciona o teste gratuito de 7 dias?',
      a: 'Basta clicar em "Teste 7 Dias Grátis", sem necessidade de cartão de crédito, e aproveitar todos os recursos durante esse período.',
    },
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white text-center mb-12">Dúvidas Frequentes</h2>
        {faqs.map((f, i) => (
          <div key={i} className="mb-4 bg-neutral-100 dark:bg-neutral-800 rounded-md">
            <button
              className="w-full text-left p-4 font-medium flex justify-between items-center"
              onClick={() => setOpen(open === i ? null : i)}
            >
              {f.q}
              <span>{open === i ? '–' : '+'}</span>
            </button>
            {open === i && <p className="px-4 pb-4 text-neutral-600 dark:text-neutral-300">{f.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

// --- CTA FINAL ---

const FinalCTASection: React.FC = () => (
  <section id="cta-final" className="py-20 bg-green-600 text-white text-center">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold">Pronto para humanizar e escalar suas vendas no WhatsApp?</h2>
      <p className="mt-2 text-lg text-green-100">
        Não perca mais tempo com mensagens frias – transforme seu atendimento com ZapVoice!
      </p>
      <a
        href="#plans"
        className="mt-8 inline-block bg-white text-green-600 font-bold py-3 px-8 rounded-md shadow-md hover:scale-105 transition-transform"
      >
        Assine Agora →
      </a>
      <div className="mt-8 text-sm space-y-1 text-green-100">
        <p>✅ Garantia: 7 dias grátis sem riscos</p>
        <p>💬 Suporte: Atendimento direto via WhatsApp</p>
        <p>🤝 Comunidade: Mais de 500 empresas confiando na solução</p>
      </div>
    </div>
  </section>
);

// --- PAGE COMPONENT ---

const LandingPage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <SocialProofSection />
      <BenefitsSection />
      <HowItWorksSection />
      <ResourcesSection />
      <MidCTASection />
      <ComparisonSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
};

export default LandingPage;
