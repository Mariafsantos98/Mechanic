# PRD - Mecânico do Bairro Website

## Problema Original
Criar uma página web simples para o "Mecânico do Bairro", uma oficina mecânica com mais de 7 anos de experiência em Lisboa, Portugal.

## Arquitetura
- Frontend: React + Tailwind CSS + Shadcn UI
- Backend: FastAPI + MongoDB (estrutura base criada, não utilizada ainda)
- Deploy: Emergent Agent Platform

## Personas de Usuário
1. **Clientes Locais**: Moradores do bairro que precisam de serviços mecânicos confiáveis
2. **Novos Clientes**: Pessoas procurando mecânicos bem avaliados na região
3. **Clientes Internacionais**: Turistas/expatriados que precisam de informação em inglês

## Requisitos Principais (Estáticos)
- ✅ Landing page responsiva e moderna
- ✅ Suporte bilíngue (Português e Inglês)
- ✅ Seções: Hero, Sobre, Serviços, Avaliações, Contato
- ✅ Informações de contato (telefone, email, endereço, horários)
- ✅ Formulário de contato simples
- ✅ Design moderno mantendo identidade da marca

## Implementado (Dezembro 2024)

### Frontend Completo com Mock Data
**Data**: Dezembro 2024

**Arquivos Criados**:
- `/app/frontend/src/pages/Home.jsx` - Página principal com todas as seções
- `/app/frontend/src/data/mock.js` - Dados mock bilíngues (PT/EN)
- Atualizações em `App.js` e `App.css`

**Funcionalidades**:
1. ✅ Header fixo com navegação e toggle de idiomas
2. ✅ Hero section com CTAs principais
3. ✅ Cards informativos (Horário, Localização, Experiência)
4. ✅ Seção "Sobre Nós" com features destacadas
5. ✅ Seção de Serviços (6 serviços principais)
6. ✅ Seção de Avaliações (3 depoimentos reais)
7. ✅ Seção de Contato com informações e formulário
8. ✅ Footer responsivo
9. ✅ Sistema bilíngue funcional (PT/EN)
10. ✅ Formulário de contato com validação (mock submission)
11. ✅ Animações e transições suaves
12. ✅ Design responsivo para mobile, tablet e desktop
13. ✅ Uso de lucide-react icons
14. ✅ Paleta de cores moderna (amber/zinc)

**Design**:
- Cores principais: Amber (dourado) e Zinc (cinza)
- Tipografia: Sans-serif system font
- Componentes: Shadcn UI (Button, Card, Input, Textarea)
- Ícones: Lucide React
- Toast notifications: Sonner

## Dados Mock
Atualmente todos os dados são estáticos no arquivo `mock.js`:
- Informações da empresa
- Lista de serviços
- Avaliações de clientes
- Textos bilíngues (PT/EN)
- Formulário de contato (não envia para backend)

## Backlog Priorizado

### P0 - Não Necessário para MVP
- Sistema de agendamento online
- Backend para formulário de contato
- Integração com email
- Galeria de fotos de trabalhos realizados

### P1 - Melhorias Futuras
- Google Maps integrado
- WhatsApp Business integration
- Sistema de avaliações dinâmico
- Blog/notícias

### P2 - Recursos Avançados
- Painel administrativo
- Sistema de orçamentos online
- Histórico de serviços de clientes
- Sistema de notificações

## Próximas Tarefas
1. ✅ Landing page completa com mock data (CONCLUÍDO)
2. Aguardar feedback do usuário para ajustes de design
3. Se necessário: implementar backend para formulário de contato
4. Se necessário: adicionar mais funcionalidades

## Tecnologias Utilizadas
- React 19.0.0
- React Router DOM 7.5.1
- Tailwind CSS 3.4.17
- Shadcn UI Components
- Lucide React 0.507.0
- Sonner (toasts) 2.0.3
- Axios 1.8.4

## URLs
- Frontend: https://oficina-damasceno.preview.emergentagent.com
- Backend API: https://oficina-damasceno.preview.emergentagent.com/api

## Observações
- Site 100% funcional como landing page
- Formulário de contato usa mock submission (console.log + toast)
- Todas as interações funcionam no frontend
- Backend está pronto para expansão futura quando necessário
