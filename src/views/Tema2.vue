<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Embudo de ventas AIDA

    p(data-aos="fade-up") El embudo de ventas AIDA es un modelo mediante el cual se pueden identificar las diferentes etapas de conducta y conocimiento por las cuales un cliente pasa un proceso de compra o adquisición de un producto o servicio determinado (Santander, 2022). Sus siglas hacen referencia a los conceptos de atención, interés, deseo y acción y se llama embudo puesto que en atención es mucho más grande el tráfico que en ventas como se verá luego. El principal objetivo de este modelo es el de adaptar las estrategias de #[em marketing] y ventas de una compañía para que sus consumidores puedan pasar de una etapa a otra de manera satisfactoria y sea escalable y repetitivo para la empresa.

    .titulo-sexto.color-acento-contenido.mt-5
      p.mb-0 #[strong Figura 1] Modelo AIDA

    figure.mt-5.col-md-10.m-auto
      img(src="@/assets/curso/tema2/1.svg" data-aos="zoom-in-up")

    .titulo-quinto.color-acento-contenido.text-center.mt-5(data-aos="fade-up")
      h4 Embudo de ventas

    .row.cont_fondo_t_2_1.mt-5(style="position:relative;")
      figure.col-md-10.m-auto
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/7yac0b_8Gcw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      p.mt-5(data-aos="fade-up" style="position:relative;") Un embudo de ventas AIDA permite atraer a nuevos clientes al negocio o hacer que migren desde la competencia y, a su vez, puede impactar a diferentes áreas de una compañía, es por esto que es posible contar con un embudo para #[em marketing], publicidad o ventas. Los embudos son una forma muy utilizada por los equipos de ventas y mercadeo de convertir potenciales clientes en consumidores para la marca. Esto sucede gracias a que este modelo permite identificar en qué momento del ciclo de ventas se encuentra un consumidor prospecto y, de acuerdo con esa información, se pueden tomar acciones que repercutan positivamente en ella. De la misma forma, impactará y dará resultados positivos en términos financieros, mejorará oportunidades y canales de venta, clasificación de clientes potenciales.

      p.mt-5(data-aos="fade-up" style="position:relative") #[strong A continuación, se hará una descripción de las cuatro etapas de un modelo AIDA en detalle:]

      .titulo-quinto.color-acento-contenido.text-center.mt-5(data-aos="fade-up" style="position:relative")
        h4(style="position:relative") AIDA modelo de ventas

      p.text-center(data-aos="fade-up" style="position:relative") #[strong Esta es la representación del modelos de ventas más usado en las ventas en línea, revise a detalle cada fase por favor:]

    .row.mt-5
      .col-lg-6.mb-3.indicador__container
        ComponentTema21
        .indicador--click(v-if="mostrarIndicador1")
      .col-lg-6.mb-3
        .p-5(style="background-color:#ECF3FB;height:100%;box-shadow:#eaeaea 0px 2px 20px 0px;border-radius:30px;")
          #caja1_tema2
            p(style="color:#5921BC;word-spacing:25px;font-weight:bold;") #[strong(style="font-size:50px;") A] Atención
            p.mt-4 Se define como la capacidad que tiene un cliente para enfocarse en un mercado. Es cuando una empresa se hace conocer y le dice a los clientes “aquí está esta empresa y le sirve para solucionar el problema que usted tiene”.
            p.mt-5 #[strong Objetivo fase:]
            p La meta es despertar intriga y curiosidad dentro de esta.
            a.boton.color-acento-contenido.texto-blanco.mt-5(@click.prevent="modal_tema2_1 = true")
              span Video Fase 1
              i.fas.fa-video
            ModalA(:abrir-modal.sync="modal_tema2_1")
              figure
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/gBjpuvJfH_s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          #caja2_tema2(style="display:none;")
            h4(style="color:#43A99B;border-left:7px #43A99B solid;padding:10px;") Interés
            p.mt-4 Luego de llamar la atención se evidencia que a varios clientes mostraron interés por el producto o servicio expuesto, ahí se debe incrementar la atención para estos clientes para volverlos en clientes potenciales.
            p.mt-5 #[strong Objetivo fase:]
            p Mostrar a los clientes interesados los beneficios del producto o servicio para que aumenten su interés.
            a.boton.color-primario.texto-blanco.mt-5(@click.prevent="modal_tema2_2 = true")
              span Video Fase 2
              i.fas.fa-video
            ModalA(:abrir-modal.sync="modal_tema2_2")
              figure
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/dh_kWA4Qndo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          #caja3_tema2(style="display:none;")
            h4(style="color:#0B67D1;border-left:7px #0B67D1 solid;padding:10px;") Deseo
            p.mt-4 Es el momento de transformar ese interés es una necesidad real del cliente, es cuando el cliente quiere hacer uso del producto o servicio, es el momento de la oferta.
            p.mt-5 #[strong Objetivo fase:]
            p Hacer que el cliente se vea como parte del producto o servicio y entienda que es una necesidad para él o ella adquirirlo.
            a.boton.color-secundario.texto-blanco.mt-5(@click.prevent="modal_tema2_3 = true")
              span Video Fase 3
              i.fas.fa-video
            ModalA(:abrir-modal.sync="modal_tema2_3")
              figure
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/gIABpHV37bw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          #caja4_tema2(style="display:none;")
            h4(style="color:#CC6600;border-left:7px #CC6600 solid;padding:10px;") Acción
            p.mt-4 Es cuando la persona se vuelve cliente y se convierte por medio del objetivo presentado inicialmente por ejemplo, se vuelve seguidor de la marca.
            p.mt-5 #[strong Objetivo fase:]
            p Convertir a la persona en cliente.
            a.boton.color-acento-botones.texto-blanco.mt-5(@click.prevent="modal_tema2_4 = true")
              span Video Fase 4
              i.fas.fa-video
            ModalA(:abrir-modal.sync="modal_tema2_4")
              figure
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/ZE5VfBoFSOU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    br
    .titulo-quinto.color-acento-contenido.text-center.mt-5(data-aos="fade-up" style="position:relative")
      h4(style="position:relative") Para entender aún mejor el concepto se hace el siguiente ejemplo de una empresa que probablemente usted conoce:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/vCtUyWNkCIY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)



</template>

<script>
import ComponentTema21 from '../components/ComponentTema21.vue'
import $ from 'jquery'
export default {
  name: 'Tema2',
  components: {
    ComponentTema21: ComponentTema21,
  },
  data: () => ({
    indicadorTarjetaSlide: true,
    indicadorTarjetaFlip: true,
    mostrarIndicador1: true,
    modal_tema2_1: false,
    modal_tema2_2: false,
    modal_tema2_3: false,
    modal_tema2_4: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
    $('#Trazado_222329').click(function() {
      $('#caja2_tema2').hide()
      $('#caja3_tema2').hide()
      $('#caja4_tema2').hide()
      $('#caja1_tema2').show()
    })
    $('#Trazado_222327').click(function() {
      $('#caja1_tema2').hide()
      $('#caja3_tema2').hide()
      $('#caja4_tema2').hide()
      $('#caja2_tema2').show()
    })
    $('#Trazado_222325').click(function() {
      $('#caja2_tema2').hide()
      $('#caja1_tema2').hide()
      $('#caja4_tema2').hide()
      $('#caja3_tema2').show()
    })
    $('#Trazado_222323').click(function() {
      $('#caja2_tema2').hide()
      $('#caja3_tema2').hide()
      $('#caja1_tema2').hide()
      $('#caja4_tema2').show()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.cont_fondo_t_2_1:before
  position: absolute
  content: ''
  width: 115%
  height: 103%
  left: -7%
  background: url(../assets/curso/tema2/2.svg)
#Trazado_222329:hover,#Trazado_222327:hover,#Trazado_222325:hover,#Trazado_222323:hover
  cursor: pointer
  opacity: .8
</style>
