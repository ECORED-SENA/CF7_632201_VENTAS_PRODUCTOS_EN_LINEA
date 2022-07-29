<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1  Estrategia de ventas en medios digitales

    p(data-aos="fade-up") #[strong Es de conocimiento que todas las ventas se hacen por medio de una estrategia, tal como se verá en el siguiente video:]

    figure.mt-5.col-md-10.m-auto
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/LhqbNOk2iyg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador

    .titulo-segundo
      h2#t_4_1 4.1  Diseño de una estrategia de ventas

    p(data-aos="fade-up") Para empezar con el diseño de una estrategia, hay que tener en cuenta algunos principios.

    .row.mt-5
      .col-md-7
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="El contexto es parte de la estrategia")
            p Estar ubicado en diversos es fundamental, en este sentido es importante saber el contexto del negocio en relación al tamaño de la empresa, experiencias, contextos sociales, económicos, culturales, etc.
          .row(titulo="Visión y misión definidas")
            p Saber hacia dónde se desea llegar y cuál es el interés fundamental debe ser el insumo para iniciar las estrategias que ayuden a enfocar hacia esas visiones del futuro y sus labores como negocio de manera realista, medible y lograble.
          .row(titulo="Las mediciones y la flexibilidad como principio de los planes")
            p Medir indica el éxito o no de las acciones desarrolladas, no se deben iniciar acciones sin antes definir métricas y metas de las cifras para definir el impacto de los resultados. También se debe contar con adaptabilidad y ajustes rápidos en caso de situaciones inesperadas.
          .row(titulo="Enfoque de acciones concretas")
            p La estrategia contiene elementos altamente operativos y debe fijar tareas definidas con plazos, indicadores, metas y responsables.
          .row(titulo="Alineación de la organización")
            p La estructura de la empresa, junto con sus colaboradores, deben estar alineados en torno a ella. En este sentido, todos los miembros de la organización deben conocer los elementos principales de la estrategia de ventas y las tareas específicas de cada uno, junto con las métricas o tareas.
          .row(titulo="Proceso continuo")
            p Las estrategias tienen un ciclo de mejoramiento y ajuste permanente, ajustándose en cada paso o ciclo para mejorar cifras cada vez más.
      .col-md-5(style="place-self:center;")
        figure.text-center
          img(src="@/assets/curso/tema4/1.svg" data-aos="zoom-in-up" style="display:inline;")

    .row.col-md-10.m-auto.p-4.mt-5(style="border-radius:27px;background-color:#5921BC;")
      .col-md-2
        figure.text-center
          img(src="@/assets/curso/tema4/2.svg" data-aos="fade-up" style="position:relative;display:inline;max-width:80px;")
      .col-md-10(style="place-self:center")
        h4.text-white.mb-0(data-aos="fade-up") ¿La estrategia de ventas es igual que la estrategia de #[em marketing]?
        p.mb-0.text-white(data-aos="fade-up") Si bien son conceptos complementarios, que se juntan en varios aspectos o fases de cada uno, es sustancial diferenciar entre una estrategia comercial con una estrategia de mercadeo.

    .tabla-a.color-acento-botones.mt-4.col-md-10.m-auto
      table
        thead(style="border:0;")
          tr
            th.p-4.text-white(style="background-color:#43A99B;") Estrategia de #[em marketing]
            th.p-4.text-white(style="background-color:#43A99B;") Estrategia de ventas
        tbody
          tr(style="background-color:#F6F6F6;")
            td.p-4 Busca generar oportunidades de mercado.
            td.p-4 A partir de las oportunidades detectadas, aprovechar para convertirlas en ventas e ingresos.
          tr(style="background-color:#EBEBEB;")
            td.p-4 Busca captar nuevos clientes, incluso aquellos que compran a la competencia.
            td.p-4 Busca el cierre de la venta con clientes conocidos.

    Separador

    .titulo-segundo
      h2#t_4_2 4.2 Metas, tácticas e implementación

    p(data-aos="fade-up") Vender más es el objetivo de las empresas, pero es importante tener presente en la estrategia comercial las metas y los métodos para aplicar y mejorar la efectividad.

    .row.col-md-10.m-auto.mt-5
      .col-md-8
        .row
          .col-auto
            figure
              img(src="@/assets/curso/tema4/3.svg")
          .col(style="place-self:end")
            h4.mb-0.pb-1(data-aos="fade-up" style="border-bottom:2px #43A99B solid;") Posicionamiento en redes sociales
            p.mt-5.parrafo_fondo41(data-aos="fade-up" style="position:relative;z-index:1;") La expansión y uso de las redes sociales, junto con la continua innovación que estos ecosistemas digitales presentan, amplían cada vez más los alcances y opciones orientados a las empresas. Si bien es imprescindible tener presencia en redes sociales es prácticamente imposible abordarlas todas de manera eficaz; además, Facebook, Twitter, Instagram y LinkedIn están entre las más usadas para aumentar ventas por internet (Silva, 2021). #[br] #[br]La selección del canal social no debe ser un asunto impulsivo, debe ser algo bien pensado y siempre alineado a la estrategia, y buscando la mayor efectividad posible según el producto, el #[em target], la inversión y las posibilidades técnicas.
      .col-md-4(style="place-self:center")
        figure.text-center
          img(src="@/assets/curso/tema4/4.svg" data-aos="fade-left" style="display:inline")

    .row.col-md-10.m-auto.mt-5
      .col-md-8
        .row
          .col-auto
            figure
              img(src="@/assets/curso/tema4/3.svg")
          .col(style="place-self:end")
            h4.mb-0.pb-1(data-aos="fade-up" style="border-bottom:2px #43A99B solid;")  Crear comunidad alrededor de temas asociados a la marca
            p.mt-5.parrafo_fondo42(data-aos="fade-up" style="position:relative;z-index:1;") La expansión y uso de las redes sociales, junto con la continua innovación que estos ecosistemas digitales presentan, amplían cada vez más los alcances y opciones orientados a las empresas. Si bien es imprescindible tener presencia en redes sociales es prácticamente imposible abordarlas todas de manera eficaz; además, Facebook, Twitter, Instagram y LinkedIn están entre las más usadas para aumentar ventas por internet (Silva, 2021). #[br] #[br] La selección del canal social no debe ser un asunto impulsivo, debe ser algo bien pensado y siempre alineado a la estrategia, y buscando la mayor efectividad posible según el producto, el target, la inversión y las posibilidades técnicas.
      .col-md-4(style="place-self:center")
        figure.text-center
          img(src="@/assets/curso/tema4/5.svg" data-aos="fade-left" style="display:inline")

    .row.col-md-10.m-auto.mt-5
      .col-md-8
        .row
          .col-auto
            figure
              img(src="@/assets/curso/tema4/3.svg")
          .col(style="place-self:end")
            h4.mb-0.pb-1(data-aos="fade-up" style="border-bottom:2px #43A99B solid;") Desarrollar estrategias multicanal
            p.mt-5.parrafo_fondo43(data-aos="fade-up" style="position:relative;z-index:1;") La atención al cliente por diferentes canales u opciones, además de permitir mayor presencia digital, les permitirá a los clientes tener más facilidad de comunicarse y recibir las respuestas. Los usuarios deben ser atendidos de manera oportuna sin importar cómo elija el cliente, esto podría ser un factor diferenciador con la competencia y se podría distinguir por la excelencia en las respuestas y canales de comunicación y venta. #[br] #[br] Emplear sistemas automatizados, como CRM, podrían ayudar a gestionar clientes de manera personalizada, pero a su vez de manera masiva según el perfil y momento de la aplicación de la estrategia comercial seleccionada.
      .col-md-4(style="place-self:center")
        figure.text-center
          img(src="@/assets/curso/tema4/6.svg" data-aos="fade-left" style="display:inline")

    .row.col-md-10.m-auto.mt-5
      .col-md-8
        .row
          .col-auto
            figure
              img(src="@/assets/curso/tema4/3.svg")
          .col(style="place-self:end")
            h4.mb-0.pb-1(data-aos="fade-up" style="border-bottom:2px #43A99B solid;") Aplicabilidad
            p.mt-5.parrafo_fondo44(data-aos="fade-up" style="position:relative;z-index:1;") Para este tema se usará un ejemplo de una estrategia comercial para una empresa en línea que decide emplear dentro de su estrategia, las técnicas o tipos de ventas: venta cruzada #[em (cross selling)] y venta adicional #[em (upselling)]. Estas son una clase de venta que debe estar bien definida, lo primero es establecer, a partir de lo que se vende, qué otros productos se relacionan; es decir, si un cliente compra un sombrero para verano, es muy probable que necesite lentes de sol.
      .col-md-4(style="place-self:center")
        figure.text-center
          img(src="@/assets/curso/tema4/7.svg" data-aos="fade-left" style="display:inline")

    .titulo-sexto.color-acento-contenido.mt-5
      p.mb-0 #[strong Figura 4] Ejemplo de venta cruzada

    .col-md-6.m-auto.mt-4
      figure
        img(src="@/assets/curso/tema4/8.svg" data-aos="zoom-in-up")
      figcaption(style="font-weight:500;") Nota. Tomada de Ingenio virtual (2020).

    p.mt-5(data-aos="fade-up") Otra técnica de venta que ayuda a vender con más precio y más cosas, es la denominada venta adicional o #[em upselling], aquí la idea es persuadir al comprador para que adquiera productos con mayores ventajas o de mejor calidad, evidentemente a un precio mayor, la clave del diseño de estas estrategias es que los productos tengan mejores beneficios para que haya más aceptación de la oferta.

    .titulo-sexto.color-acento-contenido.mt-5
      p.mb-0 #[strong Figura 5] Ejemplo de #[em upselling]

    .col-md-6.m-auto.mt-4
      figure
        img(src="@/assets/curso/tema4/9.svg" data-aos="zoom-in-up")

    p.mt-5(data-aos="fade-up") En el ejemplo anterior, cuando un usuario de una aerolínea compra el derecho a llevar equipaje de 15 kg, se recomienda de manera resaltada la de 20 kg, kilo a kilo comparada con la seleccionada de primera vez suena más económica y menos riesgosa. Además, se refuerzan los beneficios al cliente con el anuncio resaltado sobre la imagen del porcentaje de ahorro.

    Separador

    .titulo-segundo.mt-5
      h2#t_4_3 4.3 Establecimiento de términos y condiciones

    p(data-aos="fade-up") Una venta es un contrato legal, el cual implícitamente ya está normalizado por las leyes que rigen en cada país. En Colombia, la regulación del consumidor y las disposiciones legales se encuentran fundamentadas en la Ley 1480 de 2011, que dicta el Estatuto del Consumidor, y tiene como objetivos proteger, promover y garantizar la efectividad y el libre ejercicio de los derechos de los consumidores, así como amparar el respeto a su dignidad y a sus intereses económicos.

    .row.col-md-10.m-auto.p-4.mt-5(style="border-radius:27px;background-color:#5921BC;")
      .col-md-2
        figure.text-center
          img(src="@/assets/curso/tema4/10.svg" data-aos="fade-up" style="position:relative;display:inline;max-width:80px;")
      .col-md-7(style="place-self:center")
        p.mb-0.text-white(data-aos="fade-up") Como empresa, es fundamental tener en cuenta los derechos de compradores y vendedores con el fin de no violentar la ley que traiga consecuencias como sanciones impuestas por la Superintendencia de Industria y Comercio.
      .col-md-3.text-center(style="place-self:center")
        a.boton.color-acento-botones(href="https://www.sic.gov.co/" target="_blank")
          span Ir al sitio web
          i.fas.fa-link

    p.mt-5(data-aos="fade-up") Además, de tener en cuenta los estatutos, se deben redactar los términos y condiciones teniendo en cuenta disposiciones comerciales y viabilidad técnica y económica, como por ejemplo, los costos adicionales, tiempo de garantías, tiempos máximos de cumplimiento, plazos de promociones y sostenimiento del precio, entre otros elementos.


</template>

<script>
export default {
  name: 'Tema4',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
    indicadorTarjetaFlip: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.acordion__accion__btn--a
  background-color: #EEAC3A
.tarjeta--azul.acordion__activo
  background-color: #ECF3FB
.tarjeta--azul.acordion__activo .acordion__accion__btn--a
  background-color: #fff
.parrafo_fondo41:before
  content: ''
  position: absolute
  width: 35%
  left: -2%
  background-color: #DEF2F4
  height: 110%
  top: -3%
  z-index: -1
.parrafo_fondo42:before
  content: ''
  position: absolute
  width: 35%
  left: -2%
  background-color: #ECE5F7
  height: 110%
  top: -3%
  z-index: -1
.parrafo_fondo43:before
  content: ''
  position: absolute
  width: 35%
  left: -2%
  background-color: #FFECCC
  height: 110%
  top: -3%
  z-index: -1
.parrafo_fondo44:before
  content: ''
  position: absolute
  width: 35%
  left: -2%
  background-color: #D0E6FF
  height: 110%
  top: -3%
  z-index: -1
</style>
