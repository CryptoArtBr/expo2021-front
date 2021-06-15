export const schema = {
  nome: {
    type: 'string',
    required: true,
    placeHolder: 'Coloque aqui seu nome artístico',
  },
  cidade: {
    type: 'string',
    required: true,
  },
  estado: {
    type: 'string',
    required: true,
  },
  instagram: {
    type: 'url',
    required: false,
    placeHolder: '/intagram_user',
  },
  twitter: {
    type: 'url',
    required: false,
    placeHolder: '@twitter_use',
  },
  site: {
    type: 'url',
    required: false,
    placeHolder: 'http://meu_site.com',
  },
  outro: {
    type: 'url',
    required: false,
    placeHolder: 'http://rede_social.com',
  },
  categorias: {
    type: 'lista',
    required: false,
  },
  bio: {
    type: 'text',
    required: false,
  },
  outro: {
    type: 'url',
    required: false,
  },
  email: {
    type: 'email',
    required: true,
  },
  senha: {
    type: 'password',
    required: true,
  },
}
