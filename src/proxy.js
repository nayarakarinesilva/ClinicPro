import { NextResponse } from 'next/server';

// O middleware roda antes das páginas.
// Evitar coisas lentas aqui: chamadas HTTP, banco de dados ou funções assíncronas.

// Rotas que não precisam de autenticação
// whenAuthenticated define o que acontece caso o usuário já esteja logado:
// - redirect: manda o usuário para outra página
// - next: deixa continuar normalmente
const publicRoutes = [
  { path: '/login', whenAuthenticated: 'redirect' },
  { path: '/cadastro', whenAuthenticated: 'redirect' },
  // { path: '/painel', whenAuthenticated: 'next' },
];

// Rota para onde o usuário vai quando tentar acessar algo sem estar logado
const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = '/login';

export function proxy(request) {
  // Pega a rota atual que o usuário está tentando acessar
  const path = request.nextUrl.pathname;

  // Verifica se a rota atual está na lista de rotas públicas
  const publicRoute = publicRoutes.find((route) => route.path === path);

  // Verifica se existe um token de autenticação nos cookies
  const authToken = request.cookies.get('token');

  // Usuário não está logado e está tentando acessar uma rota pública
  // Exemplo: acessar /login sem token
  // Permite continuar normalmente
  if (!authToken && publicRoute) {
    return NextResponse.next();
  }

  // Usuário não está logado e tentou acessar uma rota protegida
  // Redireciona para a tela de login
  if (!authToken && !publicRoute) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;

    return NextResponse.redirect(redirectUrl);
  }

  // Usuário está logado e tentou acessar uma rota pública
  // Exemplo: usuário logado tentando abrir /login novamente
  // Redireciona para a página inicial
  if (
    authToken &&
    publicRoute &&
    publicRoute.whenAuthenticated === 'redirect'
  ) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/painel';

    return NextResponse.redirect(redirectUrl);
  }

  // Usuário está logado e acessou uma rota protegida
  // Aqui poderia validar se o token ainda é válido
  // Caso esteja expirado:
  // - remover o cookie
  // - redirecionar para login
  if (authToken && !publicRoute) {
    return NextResponse.next();
  }

  if (request.nextUrl.pathname.includes('.')) {
    return NextResponse.next();
  }

  // Caso nenhuma regra acima seja aplicada, continua normalmente
  return NextResponse.next();
}

// Define onde o middleware será executado
export const config = {
  matcher: [
    /*
      Executa em todas as rotas, menos:

      - api -> rotas de API
      - _next/static -> arquivos estáticos do Next.js
      - _next/image -> otimização de imagens
      - favicon.ico -> ícone do site
    */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
