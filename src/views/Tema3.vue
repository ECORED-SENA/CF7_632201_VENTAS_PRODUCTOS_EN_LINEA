<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Ventas en línea

    .row.cont_fondo_t_3_1(style="position:relative;")
      .col-md-7(style="place-self:center;")
        p(data-aos="fade-up" style="position:relative;") Si bien no existen fórmulas mágicas para tener éxito en las ventas, se presentan diversas alternativas y técnicas que ayuden al experto en ventas en líneas a mejorar las posibilidades de resultados de objetivos.
        p.mt-4(data-aos="fade-up" style="position:relative") #[strong Para empezar, es importante identificar algunas clases de ventas que se realizan a través de canales digitales.]
      .col-md-5
        figure.text-center
          img(src="@/assets/curso/tema3/2.svg" data-aos="fade-left" style="position:relative;display:inline;max-width:300px;")

    br
    .titulo-segundo.mt-5
      h2#t_3_1 3.1 Tipos de ventas

    p(data-aos="fade-up") Hay diversos criterios para establecer los parámetros para indicar los tipos de ventas; para empezar, se debe tener claridad en las configuraciones o posibilidades de relaciones entre vendedor y comprador, esta se da principalmente entre negocio #[em (business)], clientes #[em (consumer)] y otros que si bien no es el enfoque principal, también se dan las relaciones con empleados #[em (employee)] y entidades gubernamentales #[em (government)].

    p.mt-4(data-aos="fade-up") Aquí solo se mencionará el tipo de ventas bajo el criterio de relaciones comerciales que se establecen entre diversas entidades, pues en otros componentes se ahonda un poco al respecto. #[strong(style="background-color:#ECE5F7;padding:2px;") La clasificación de las ventas por medio del modelo de negocio es la siguiente:]

    .row.cont_fondo_t_3_2.mt-5.pb-5(style="position:relative;")
      ImagenInfografica.color-secundario.col-md-10.m-auto.mt-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema3/4.svg', alt='' style="position:relative")
        .tarjeta.color-acento-botones.p-3(x="15%" y="15%" numero="1")
          p #[em Business to business:] son las relaciones comerciales entre empresas; el producto comercializado no está destinado al consumidor o usuario final del producto.
        .tarjeta.color-acento-botones.p-3(x="41%" y="55%" numero="2")
          p #[em Business to consumer:] son las ventas realizadas directamente al consumidor o usuario del producto.
        .tarjeta.color-acento-botones.p-3(x="62%" y="55%" numero="3")
          p #[em Business to government:] surge cuando las empresas venden productos o prestan servicios al Gobierno en sus diferentes niveles (municipal, nacional, departamental y entidades oficiales). En el caso colombiano las compras de entidades del Gobierno están normalizadas bajo las compras y contrataciones estatales.
        .tarjeta.color-acento-botones.p-3(x="88%" y="15%" numero="4")
          p #[em Business to employee:] son aquellas que se dan entre el negocio y sus empleados. Por lo general, busca beneficios y motivación para los colaboradores a través de descuentos, ventajas exclusivas, etc.

      .titulo-quinto.color-acento-contenido.text-center.mt-5(style="position:relative")
        h4.mt-5(style="position:relative") Las ventas también se clasifican por la interacción con el cliente así:

    SlyderF(columnas="col-lg-4 col-xl-4 col-md-6")
      .tarjeta.color-acento-botones.p-4(style="background-color:#ECE5F7;min-height:550px;")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema3/5.svg' alt='')
        h3.mt-5 Venta directa
        p.mb-0 Es la venta que se hace en vivo entre el comprador y el vendedor en donde se hace la negociación sobre el artículo específico y el vendedor tiene todas las ventajas comerciales. Por ejemplo, la venta en los supermercados de grandes superficies.
      .tarjeta.color-acento-botones.p-4(style="background-color:#FDF3E1;min-height:550px;")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema3/6.svg' alt='')
        h3.mt-5 Venta indirecta
        p.mb-0 Estos tipos de venta se realizan a través de terceros, tiene ventajas como la facilidad de expandir los alcances de la venta y cubrir más volumen y mercado con el producto; sin embargo, hay poco control de la calidad marca y los precios se incrementan. Por ejemplo, las comercializadoras que traen cosas que nadie más tiene.
      .tarjeta.color-acento-botones.p-4(style="background-color:#DEF2F4;min-height:550px;")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema3/7.svg' alt='')
        h3.mt-5 Venta cruzada
        p.mb-0 También llamada #[em cross-selling] consiste en fomentar la venta de productos complementarios a un producto principal que el consumidor está comprando. Por ejemplo, una funda para un teléfono, un ratón inalámbrico para un portátil, etc. (Salecycle, 2022).
      .tarjeta.color-acento-botones.p-4(style="background-color:#ECE5F7;min-height:550px;")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema3/8.svg' alt='')
        h3.mt-5 Venta adicional
        p.mb-0 También conocida como venta sugestiva o #[em up selling], busca comercializar productos similares a los que una persona desea comprar o ya haya comprado, pero con mayores características y precio. Por ejemplo, un teléfono similar al que está mirando, pero de la siguiente gama por un poco más de dinero.

    .cajon.color-primario.p-4.mt-5(style="background-color:#DEF2F4;")
      p.mb-0(data-aos="fade-up") Tanto la venta cruzada como la adicional, son técnicas que buscan que el cliente compre más. Tanto la fuerza de venta como las plataformas de #[em e-commerce], deben tener presente estas técnicas procurando mejorar la comercialización sin perder el inventario de productos disponibles para el mercado.

    p.mt-5(data-aos="fade-up") También se presentan otros tipos de ventas que surgen de la necesidad que tiene el mercado de conocer su producto o servicio, #[strong estas ventas se activan si el cliente conoce el producto previamente a detalle, este tipo de ventas son:]

    .col-lg-8.mt-5.m-auto.row
      .col-lg-6.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/9.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h3.text-center Venta #[em inbound]
              p.mt-5 Las empresas que usan esta técnica buscan educar a clientes potenciales ya sea en temas técnicos del gremio, de esa manera se fortalece la confianza y presencia de marca ante un público especializado o que tengan los mismos gustos o pasiones. En la venta #[em inbound] el cliente llega a la marca; un ejemplo de estas ventas, son las ruedas de negocios o seminarios web, ferias, etc.
      .col-lg-6.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/10.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h3.text-white.text-center Venta #[em outbound]
              p.mt-5.text-white Su traducción es “ventas activas”, y ocurre cuando la empresa o el representante de ventas busca al comprador, contrario al #[em inbound] donde el cliente llega, para hacer #[em outbound sales], es necesario que la fuerza de ventas tenga claridad sobre cuál es el target de la marca, para accionarlas de manera más estratégica y asertiva. Por ejemplo, una campaña de ADS en redes sociales.

    .titulo-quinto.color-acento-contenido.text-center.mt-5(style="position:relative")
      h4.mt-5(style="position:relative") A nivel de profundidad el experto explica en el siguiente video los conceptos vistos anteriormente:

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/XBlHtCQxW6g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador

    .titulo-segundo
      h2#t_3_2 3.2 Técnicas y aplicabilidad
    .row
      .col-md-6
        p(data-aos="fade-up") La evolución sigue tal como lo dice #[strong Iberdrola (2020)].
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left(data-aos="fade-right")
            h4.mb-0(data-aos="fade-up") La industria 4.0 es el origen de una nueva revolución ‒la conocida como cuarta Revolución Industrial‒ que mezcla vanguardistas técnicas de producción con sistemas inteligentes que se integran con las organizaciones y las personas.
            i.fas.fa-quote-right(data-aos="fade-left")
      .col-md-6
        figure.text-center
          img(src="@/assets/curso/tema3/11.svg" data-aos="fade-left" style="position:relative;display:inline;max-width:350px;")

    p.mt-5(data-aos="fade-up") Esta revolución entre otros fenómenos sociales y económicos, ha acelerado la transformación digital tanto de los ciudadanos como de las empresas y organizaciones; el comercio electrónico ha tenido un crecimiento exponencial y cada vez, son más recursos y millones diarios que transan en internet y plataformas de ventas. En el contexto nacional, en comparación con Brasil, México y Argentina, aún falta crecer, sin embargo, esta realidad va cambiando a pasos acelerados.

    .row.mt-5
      .col-md-6(style="place-self:center;")
        figure.text-center
          img(src="@/assets/curso/tema3/12.svg" data-aos="fade-right" style="position:relative;display:inline;max-width:350px;")
      .col-md-6
        p.mt-4.parrafo_fondo31(data-aos="fade-up" style="position:relative;z-index:1;") Los consumidores han descubierto la facilidad, comodidad, ahorro, disponibilidad y otra cantidad de ventajas que significa hacer compras por internet. Por lo que cada día no solo aumenta la cantidad de personas comprando on line, también el monto en dinero se viene incrementando y las barreras como la desconfianza e inseguridad se han venido superando.
        p.mt-4(data-aos="fade-up") Lo anterior no significa que instaurar un negocio soportado en plataformas tecnológicas de ventas sea exitoso por el hecho de crearlo, pues parte del crecimiento del #[em e-commerce] ha sido la sobreoferta de negocios tratando de hacer lo mismo. Hay que tener conocimientos técnicos para aplicar las técnicas de venta en entornos digitales y tener promesas de valor ganadoras.
        p.mt-4(data-aos="fade-up") Las técnicas de ventas deberían establecer prioridades claras que todos entienden, aportar directrices qué seguir y marcar unos objetivos hacia cuales avanzar. Así, se podrían definir cinco elementos importantes que apuntan las acciones y técnicas de ventas.

    .titulo-sexto.color-acento-contenido.mt-5
      p.mb-0 #[strong Figura 2] Ciclo para aumentar ventas

    .col-md-6.m-auto.mt-4
      figure
        img(src="@/assets/curso/tema3/13.png" data-aos="zoom-in-up")

    p.mt-5(data-aos="fade-up") Cuando se crea un negocio de ventas, montando las plataformas y productos de manera apresurada y ejecutando acciones sin tener visión técnica o estratégica, se tiene una alta probabilidad de que los resultados no sean los esperados, es como saber conducir, pero sin tener idea hacia dónde ir ni conocer las carreteras ni tener mapa, esto supone un gran riesgo. No se deberían empezar las acciones de venta sin tener algunos aspectos claros para reducir la incertidumbre y aumentar la posibilidad de éxito.

    .row.col-md-8.m-auto.p-4.mt-5(style="border-radius:27px;background-color:#5921BC;")
      .col-md-2
        figure.text-center
          img(src="@/assets/curso/tema3/14.svg" data-aos="fade-up" style="position:relative;display:inline;max-width:80px;")
      .col-md-10(style="place-self:center")
        p.mb-0.text-white(data-aos="fade-up") Una de las acciones más importantes dentro de la estrategia de venta, es la de hacerse notar para llegar a más público, convertirlo en clientes y estos, a su vez, en ingresos significativos.

    p.mt-5(data-aos="fade-up") #[strong A continuación, se indican cuatro claves para definir la estrategia de ventas para que cada vendedor pueda aplicar, según sus particularidades y propio contexto:]

    br
    br
    br
    .row.cont_fondo_t_3_3.mt-5.pb-5(style="position:relative;")
      .col-lg-3.mb-5
        .p-3.cont_numero1(style="position:relative")
          h3(data-aos="fade-up" style="position:relative") Posicionamiento del negocio.
          p.mt-4(data-aos="fade-up" style="position:relative") Analizar el pasado y proyectar el negocio con respaldo legal, comercial y gestionar presencia en las plataformas elegidas (saber qué vende y su respaldo).
      .col-lg-3.mb-5
        .p-3.cont_numero2(style="position:relative")
          h3(data-aos="fade-up" style="position:relative") Creación de un perfil de cliente ideal.
          p.mt-4(data-aos="fade-up" style="position:relative") Dentro de los análisis, definir el público, es decir, qué tipo de personas gastan más dinero en lo que se ofrece, qué clientes compran más de un producto, qué personalidades, de qué edad, etc., y tenerlo muy claro para enfocarse en ellos.
      .col-lg-3.mb-5
        .p-3.cont_numero3(style="position:relative")
          h3(data-aos="fade-up" style="position:relative") Estrategia de mercado.
          p.mt-4(data-aos="fade-up" style="position:relative") ¿Cuánto se puede vender a diario? #[br] ¿Cómo podría aumentarse los ingresos? #[br] ¿Cuánto podría aumentar los ingresos con nuevos productos o productos que rotan poco? #[br] Se deben responder las preguntas que se consideren para aumentar las ventas un poco cada vez más.
      .col-lg-3.mb-5
        .p-3.cont_numero4(style="position:relative")
          h3(data-aos="fade-up" style="position:relative") Plan de acción.
          p.mt-4(data-aos="fade-up" style="position:relative") Usar la creatividad e ingenio para definir acciones que apunten a las acciones de venta, es quizás la parte más complicada, cada acción se enmarca según la particularidad de cada tipo de cliente. Se pueden tomar referencias de comercios exitosos para seguir los protocolos y algunas acciones que ellos usan.

    Separador

    .titulo-segundo
      h2#t_3_3 3.3. Protocolo de venta y procesos

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/16.svg')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 Las compañías exitosas aplican, a través de su fuerza de ventas, los pasos o protocolos de ventas efectivas, por lo general, cada empresa de acuerdo con su naturaleza define estos pasos; en el caso de negocios de ventas on line es importante adaptar estas técnicas de venta al negocio. Pues si bien muchos agentes de venta se realizan a través de plataformas, es importante tener conciencia de que cada negocio podría tener su ruta para llegar a la venta efectiva.

    p.mt-5(data-aos="fade-up") A continuación, un mapa conceptual que puede usarse como referencia para aplicar en los negocios de venta. Es importante anotar, que según la naturaleza de cada negocio, estos protocolos pueden variar y ser ajustados o adaptados.

    .titulo-sexto.color-acento-contenido.mt-5
      p.mb-0 #[strong Figura 3] Mapa conceptual del protocolo de la venta

    .col-md-10.m-auto.mt-4
      figure
        img(src="@/assets/curso/tema3/17.png" data-aos="zoom-in-up")

    .titulo-quinto.color-acento-contenido.text-center.mt-5(style="position:relative")
      h4.mt-5(style="position:relative") Para ver el contexto general de estos elementos se presenta un video del instructor:
    figure.mt-5.col-md-10.m-auto
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Iv05Y-VoUjA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)




</template>

<script>
export default {
  name: 'Tema3',
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
.cont_fondo_t_3_1:before
  position: absolute
  content: ''
  width: 115%
  height: 110%
  right: -15%
  top: -5%
  background: url(../assets/curso/tema3/1.svg)
.cont_fondo_t_3_2:before
  position: absolute
  content: ''
  width: 115%
  height: 100%
  left: -7%
  background: url(../assets/curso/tema3/3.svg)
.img-infografica.color-secundario .img-infografica__item__dot:before, .img-infografica.color-secundario .img-infografica__item__dot:after, .img-infografica.color-secundario .img-infografica-b__item__dot:before, .img-infografica.color-secundario .img-infografica-b__item__dot:after, .img-infografica-b.color-secundario .img-infografica__item__dot:before, .img-infografica-b.color-secundario .img-infografica__item__dot:after, .img-infografica-b.color-secundario .img-infografica-b__item__dot:before, .img-infografica-b.color-secundario .img-infografica-b__item__dot:after
    background-color: #EEAC3A
.img-infografica__card .tarjeta.color-acento-botones
  background-color: #fff
  border: 2px #EEAC3A solid
.slyder-f__btn i
  color: #EEAC3A
.bloque-texto-b.color-secundario:before
  background-color: #E5F0FF
.parrafo_fondo31:before
  content: ''
  position: absolute
  width: 70%
  left: -2%
  background-color: #DAFCF7
  height: 105%
  top: -3%
  z-index: -1
.cont_fondo_t_3_3:before
  position: absolute
  content: ''
  width: 115%
  height: 100%
  left: -7%
  background: url(../assets/curso/tema3/15.svg)
  background-size: 800px
.cont_numero1:before
  content: '01'
  position: absolute
  font-size: 140px
  color: #EAEBEE
  font-weight: bold
  top: -30%
  left: 10%
.cont_numero2:before
  content: '02'
  position: absolute
  font-size: 140px
  color: #EAEBEE
  font-weight: bold
  top: -30%
  left: 10%
.cont_numero3:before
  content: '03'
  position: absolute
  font-size: 140px
  color: #EAEBEE
  font-weight: bold
  top: -30%
  left: 10%
.cont_numero4:before
  content: '04'
  position: absolute
  font-size: 140px
  color: #EAEBEE
  font-weight: bold
  top: -30%
  left: 10%
</style>
