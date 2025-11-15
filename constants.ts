import type { Product, Testimonial, NavLink } from './types';

export const SITE_NAV_LINKS: NavLink[] = [
  { name: 'Início', href: '/' },
  { name: 'Blog', href: '/blog' }
];

export const LANDING_NAV_LINKS: NavLink[] = [
  { name: 'Início', href: '/' },
  { name: 'Funcionalidades', href: '#features' },
  { name: 'Planos', href: '#plans' },
  { name: 'Público-Alvo', href: '#audience' },
  { name: 'Vídeo Demo', href: '#video' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contato', href: '#contact' },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Teste Grátis 7 Dias',
    price: 'R$ 0',
    features: [
      'Acesso completo por 7 dias',
      'Sem necessidade de cartão',
      'Cancelamento automático após o período',
    ],
    isFeatured: true,
  },
  {
    id: 2,
    name: 'Plano Mensal',
    price: 'R$ 49,90/mês',
    features: [
      'Envio de áudios humanizados',
      'Mensagens automáticas com simulação “digitando...”',
      'Chatbot integrado e agendamentos',
      'Suporte direto via WhatsApp',
      'Atualizações automáticas',
    ],
  },
  {
    id: 3,
    name: 'Plano Anual',
    price: '12x de R$ 29,99',
    features: [
      'Todos os recursos do Plano Mensal',
      'Economia de mais de 35%',
      'Suporte prioritário',
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Com o ZapVoice consegui automatizar meu atendimento no WhatsApp sem parecer um robô. Meus clientes amam a personalização dos áudios!',
    author: 'Mariana Lopes',
    role: 'Gestora de Vendas – Loja Online',
    avatarUrl: 'https://picsum.photos/id/1005/100/100',
  },
  {
    quote: 'O recurso de enviar áudios com simulação de gravação é simplesmente genial. Foi um grande diferencial no meu processo de vendas.',
    author: 'Eduardo Silva',
    role: 'Afiliado Digital',
    avatarUrl: 'https://picsum.photos/id/1006/100/100',
  },
  {
    quote: 'A produtividade da minha equipe aumentou muito. O ZapVoice é essencial para quem trabalha com atendimento via WhatsApp.',
    author: 'Camila Santos',
    role: 'Coordenadora de Suporte – Agência MAV',
    avatarUrl: 'https://picsum.photos/id/1007/100/100',
  },
];

export const FAQ_DATA = [
  {
    question: 'O que é o ZapVoice?',
    answer: 'O ZapVoice é uma extensão para Google Chrome que se integra ao WhatsApp Web, adicionando automações inteligentes e humanizadas para vendas e atendimento.'
  },
  {
    question: 'Preciso instalar algo complicado?',
    answer: 'Não! A instalação é simples — basta adicionar a extensão oficial do Chrome e fazer o login na sua conta ZapVoice.'
  },
  {
    question: 'Os áudios são reais?',
    answer: 'Sim, são áudios previamente gravados e enviados com simulação de gravação em tempo real, proporcionando uma experiência humanizada.'
  },
  {
    question: 'Posso cancelar a assinatura?',
    answer: 'Sim! Você pode cancelar a qualquer momento diretamente no painel de controle, sem multas ou burocracia.'
  },
  {
    question: 'Como funciona o teste grátis?',
    answer: 'Você pode experimentar o ZapVoice gratuitamente por 7 dias, com acesso total aos recursos do plano Pro.'
  },
];

export const FOOTER_LINKS = {
  company: {
    name: 'ZapVoice',
    description: 'Automatize seu WhatsApp sem perder a conexão humana.',
    cnpj: '',
    address: 'zp.valoresdigitais.com',
  },
  support: [
    { name: 'Suporte via WhatsApp', href: 'https://wa.me/5551999999999' },
    { name: 'E-mail: suporte@zapvoice.com', href: 'mailto:suporte@zapvoice.com' },
  ],
  legal: [
    { name: 'Termos de Uso', href: '/termos-de-servico' },
    { name: 'Política de Privacidade', href: '/politica-de-privacidade' },
  ],
  enterprise: [
    { name: 'Contato Comercial', href: '#contact' },
  ],
};
