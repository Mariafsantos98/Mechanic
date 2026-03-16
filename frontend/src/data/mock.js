import { Wrench, Settings, Gauge, Shield, Award, Clock } from 'lucide-react';

export const mockData = {
  pt: {
    nav: {
      about: 'Sobre',
      services: 'Serviços',
      reviews: 'Avaliações',
      contact: 'Contato'
    },
    hero: {
      badge: 'Mais de 7 anos de experiência',
      title: 'O Mecânico de Confiança do Seu Bairro',
      subtitle: 'Serviços automotivos profissionais com honestidade, rapidez e preços justos. Deixe seu veículo em boas mãos.',
      cta: 'Agendar Serviço',
      callButton: 'Ligar Agora'
    },
    info: {
      hours: {
        title: 'Horário',
        value: 'Seg-Sex: 9h às 18h'
      },
      location: {
        title: 'Localização',
        value: 'R. Damasceno Monteiro 106A'
      },
      experience: {
        title: 'Experiência',
        value: 'Mais de 7 anos'
      }
    },
    about: {
      title: 'Sobre Nós',
      description1: 'Com mais de 7 anos de experiência em usinagem automotiva, o Mecânico do Bairro é reconhecido pela honestidade, qualidade e rapidez nos serviços.',
      description2: 'Nosso compromisso é entregar seu veículo completamente renovado, no prazo combinado e com preços justos. A satisfação dos nossos clientes é nossa maior conquista.',
      features: [
        {
          icon: Shield,
          title: 'Honestidade Garantida',
          description: 'Transparência total em todos os orçamentos e serviços realizados'
        },
        {
          icon: Award,
          title: 'Qualidade Comprovada',
          description: '4.9 estrelas com mais de 123 avaliações positivas'
        },
        {
          icon: Clock,
          title: 'Pontualidade',
          description: 'Entrega no prazo combinado, sem atrasos'
        }
      ]
    },
    services: {
      title: 'Nossos Serviços',
      subtitle: 'Oferecemos uma ampla gama de serviços automotivos com qualidade profissional',
      list: [
        {
          icon: Wrench,
          title: 'Manutenção Geral',
          description: 'Revisão completa, troca de óleo, filtros e manutenção preventiva para manter seu veículo em perfeito estado'
        },
        {
          icon: Settings,
          title: 'Usinagem Automotiva',
          description: 'Serviços especializados de usinagem para motores, blocos, cabeçotes e componentes mecânicos'
        },
        {
          icon: Gauge,
          title: 'Diagnóstico Completo',
          description: 'Identificação rápida e precisa de problemas mecânicos e elétricos do seu veículo'
        },
        {
          icon: Shield,
          title: 'Reparos Gerais',
          description: 'Consertos de motor, suspensão, freios, embreagem e sistema de arrefecimento'
        },
        {
          icon: Settings,
          title: 'Serviços no Local',
          description: 'Atendimento direto na nossa oficina com toda estrutura e equipamentos necessários'
        },
        {
          icon: Award,
          title: 'Renovação Completa',
          description: 'Revitalização total do veículo, deixando-o como novo'
        }
      ]
    },
    reviews: {
      title: 'O Que Dizem Nossos Clientes',
      reviewsCount: 'avaliações',
      list: [
        {
          text: 'Deixei meu velho X-sara Picasso na mão do Sr. Helder e meus problemas acabaram. Super atencioso, conhece muito bem do assunto, entregou a viatura completamente renovada a tempo e horas combinadas. O preço foi justo por tudo que precisei fazer no carro.',
          author: 'Cliente Satisfeito'
        },
        {
          text: 'Atendimento muito bom! Encontraram o problema rapidamente e o consertaram por um preço muito justo. Recomendo fortemente este mecânico.',
          author: 'Maria Silva'
        },
        {
          text: 'Honestidade, rapidez e preços excelentes. Não hesitaria em contratá-lo novamente. Muito obrigado!',
          author: 'João Santos'
        }
      ]
    },
    contact: {
      title: 'Entre em Contato',
      subtitle: 'Estamos prontos para cuidar do seu veículo',
      phone: {
        label: 'Telefone'
      },
      email: {
        label: 'Email'
      },
      address: {
        label: 'Endereço'
      },
      hours: {
        label: 'Horário de Funcionamento',
        value: 'Segunda a Sexta: 9h às 18h'
      }
    },
    form: {
      title: 'Envie uma Mensagem',
      name: 'Seu Nome',
      email: 'Seu Email',
      phone: 'Seu Telefone',
      message: 'Sua Mensagem',
      submit: 'Enviar Mensagem',
      successMessage: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
    },
    footer: {
      rights: 'Todos os direitos reservados.',
      tagline: 'Serviços automotivos de qualidade com honestidade e preços justos'
    }
  },
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      reviews: 'Reviews',
      contact: 'Contact'
    },
    hero: {
      badge: 'Over 7 years of experience',
      title: 'Your Trusted Neighborhood Mechanic',
      subtitle: 'Professional automotive services with honesty, speed, and fair prices. Leave your vehicle in good hands.',
      cta: 'Schedule Service',
      callButton: 'Call Now'
    },
    info: {
      hours: {
        title: 'Hours',
        value: 'Mon-Fri: 9am to 6pm'
      },
      location: {
        title: 'Location',
        value: 'R. Damasceno Monteiro 106A'
      },
      experience: {
        title: 'Experience',
        value: 'Over 7 years'
      }
    },
    about: {
      title: 'About Us',
      description1: 'With over 7 years of experience in automotive machining, Mecânico do Bairro is recognized for honesty, quality, and speed in services.',
      description2: 'Our commitment is to deliver your vehicle completely renewed, on schedule, and with fair prices. Our customers\' satisfaction is our greatest achievement.',
      features: [
        {
          icon: Shield,
          title: 'Guaranteed Honesty',
          description: 'Total transparency in all quotes and services performed'
        },
        {
          icon: Award,
          title: 'Proven Quality',
          description: '4.9 stars with over 123 positive reviews'
        },
        {
          icon: Clock,
          title: 'Punctuality',
          description: 'Delivery on the agreed date, no delays'
        }
      ]
    },
    services: {
      title: 'Our Services',
      subtitle: 'We offer a wide range of automotive services with professional quality',
      list: [
        {
          icon: Wrench,
          title: 'General Maintenance',
          description: 'Complete inspection, oil changes, filters, and preventive maintenance to keep your vehicle in perfect condition'
        },
        {
          icon: Settings,
          title: 'Automotive Machining',
          description: 'Specialized machining services for engines, blocks, cylinder heads, and mechanical components'
        },
        {
          icon: Gauge,
          title: 'Complete Diagnosis',
          description: 'Quick and accurate identification of mechanical and electrical problems in your vehicle'
        },
        {
          icon: Shield,
          title: 'General Repairs',
          description: 'Engine, suspension, brakes, clutch, and cooling system repairs'
        },
        {
          icon: Settings,
          title: 'On-Site Services',
          description: 'Direct service at our workshop with all necessary structure and equipment'
        },
        {
          icon: Award,
          title: 'Complete Renovation',
          description: 'Total vehicle revitalization, making it like new'
        }
      ]
    },
    reviews: {
      title: 'What Our Customers Say',
      reviewsCount: 'reviews',
      list: [
        {
          text: 'I left my old X-sara Picasso in Mr. Helder\'s hands and my problems were over. Super attentive, very knowledgeable, delivered the vehicle completely renewed on time. The price was fair for everything I needed to do to the car.',
          author: 'Satisfied Customer'
        },
        {
          text: 'Very good service! They found the problem quickly and fixed it for a very fair price. I strongly recommend this mechanic.',
          author: 'Maria Silva'
        },
        {
          text: 'Honesty, speed, and excellent prices. I wouldn\'t hesitate to hire him again. Thank you very much!',
          author: 'João Santos'
        }
      ]
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'We are ready to take care of your vehicle',
      phone: {
        label: 'Phone'
      },
      email: {
        label: 'Email'
      },
      address: {
        label: 'Address'
      },
      hours: {
        label: 'Business Hours',
        value: 'Monday to Friday: 9am to 6pm'
      }
    },
    form: {
      title: 'Send a Message',
      name: 'Your Name',
      email: 'Your Email',
      phone: 'Your Phone',
      message: 'Your Message',
      submit: 'Send Message',
      successMessage: 'Message sent successfully! We will contact you soon.'
    },
    footer: {
      rights: 'All rights reserved.',
      tagline: 'Quality automotive services with honesty and fair prices'
    }
  }
};
