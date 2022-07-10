<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .cajon.color-primario.p-4.col-md-10.m-auto
      p(data-aos="fade-up") Las estrategias de venta de productos en línea están muy relacionadas con las campañas de mercadeo. Además de contribuir a atraer la atención de los clientes potenciales y consumidores antiguos, uno de sus principales propósitos es el de llevar al consumidor a tomar una serie de decisiones y acciones relacionadas con el proceso de compra, por ello se invita a revisar el siguiente video que le dará la introducción al desarrollo del presente material.

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/m-82u-FOuhM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass">
.cajon.color-primario
  background-color: #DEF2F4
</style>
