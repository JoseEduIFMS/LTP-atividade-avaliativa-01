class Noticia {
  constructor(titulo, dataPubliacacao, resumo, texto) {
    this.titulo = titulo
    this.dataPublicacao = dataPubliacacao
    this.resumo = resumo
    this.texto = texto
  }
  mostrarNoticia() {
    return this.titulo + "\n\n" + this.dataPublicacao + "\n\n" + this.resumo + "\n\n" + this.texto
  }
}
let noticia = new Noticia("Em vídeo de teste de míssil, Kim Jong-Un surge como astro de cinema", "25/03/2022 12h01", "O líder da Coreia do Norte, Kim Jong-Un, apareceu com ares de astro de filme em um vídeo divulgado pela TV estatal do país que anuncia o teste de um novo míssil.", "Com uma dramaticidade cinematográfica, a produção começa com o líder saindo de um galpão ladeado por dois militares e caminhando em câmera lenta. Atrás deles está o míssil que vai ser testado. Em seguida, eles olham para o relógio, Kim tira os óculos escuros e autoriza o início da operação.As imagens vêm sendo comparadas ao filme Top Gun, de 1986, estrelado por Tom Cruise.")
console.log(noticia.mostrarNoticia())