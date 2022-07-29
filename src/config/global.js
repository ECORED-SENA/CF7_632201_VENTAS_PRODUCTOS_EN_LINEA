export default {
  global: {
    componenteFormativo: 'Ventas de productos en línea',
    descripcionCurso:
      'Para plantear estrategias exitosas de ventas en línea es de gran importancia conocer cuáles son las diferencias entre productos y servicios, al igual que la definición de atributos, beneficios y características especiales y saber cuál es el papel que cumplen sus calificaciones y funciones.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Productos y servicios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto de producto en el marketing digital',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Atributos, beneficios y valor agregado',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Calificación y funciones de los productos',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Tipos de producto: tangibilidad y usabilidad',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Embudo de ventas AIDA',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Ventas en línea',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos de ventas',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Técnicas y aplicabilidad',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Protocolo de venta y procesos',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Estrategia de ventas en medios digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Diseño de una estrategia de ventas',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Metas, tácticas e implementación',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Establecimiento de términos y condiciones',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Díaz, M. (2018). Cómo crear llamadas a la acción que conviertan usuarios en clientes.',
      link:
        'https://www.fuegoyamana.com/llamadas-a-la-accion-convertir-clientes/',
    },
    {
      referencia:
        'Hotmart. (2021). ¿Qué es el marketing digital? Guía completa con todo lo que necesitas saber.',
      link: 'https://hotmart.com/es/blog/que-es-marketing-digital',
    },
    {
      referencia:
        'Iberdrola. (2020). Industria 4.0: ¿qué tecnologías marcarán la Cuarta Revolución Industrial?',
      link: 'https://www.iberdrola.com/innovacion/cuarta-revolucion-industrial',
    },
    {
      referencia:
        'Salecycle. (2022). 17 ejemplos de upselling y cross-selling para vender más.',
      link:
        'https://www.salecycle.com/es/blog/guias/ejemplos-upselling-cross-selling/ ',
    },
    {
      referencia:
        'Santander. (2022). Método AIDA: qué es y cómo aplicarlo en marketing y ventas. ',
      link: 'https://www.becas-santander.com/es/blog/metodo-aida.html',
    },
    {
      referencia:
        'Romero, P., J. (2018). ¿Qué es un embudo de ventas y cómo gestionarlo en tu negocio?',
      link: 'https://www.emprendices.co/embudo-ventas-gestionarlo-negocio/',
    },
    {
      referencia:
        'Silva (2021). Aumentar ventas por internet: 3 poderosas estrategias para tu empresa. ',
      link: 'https://www.zendesk.com.mx/blog/aumentar-ventas-internet/',
    },
  ],
  glosario: [
    {
      termino: '<em>Bundle</em>',
      significado:
        'técnica de venta consistente en sugerir la compra de un grupo de productos a un usuario que ha mostrado un interés previo por alguno de ellos de manera individual.',
    },
    {
      termino: '<em>Call to action</em>',
      significado:
        '(llamada a la acción) es un botón o enlace situado en nuestro <em>site</em> que busca atraer clientes potenciales y convertirlos en clientes finales.',
    },
    {
      termino: 'Campañas digitales',
      significado:
        'campaña de mercadeo que se desarrolla dentro de entornos digitales.',
    },
    {
      termino: '<em>Free trial</em>',
      significado:
        'estrategia de promoción de ventas que se basa en atraer a nuevos consumidores a partir de probar la marca una vez sin necesidad de pagar durante un tiempo definido y limitado.',
    },
    {
      termino: 'KPI',
      significado:
        '<em>Key Performance Indicators</em> son todas las variables, unidades y factores de medición para generar una estrategia de marketing.',
    },
    {
      termino: '<em>Landing Pages</em>',
      significado:
        'página web en donde el usuario aterriza para conocer un producto, servicio, novedad o promoción.',
    },
    {
      termino: '<em>Marketing</em>',
      significado:
        'conjunto de estrategias cuya finalidad es facilitar la venta de un producto o servicios dentro de un entorno determinado.',
    },
    {
      termino: '<em>Marketplace</em>',
      significado:
        'plataforma en donde diferentes tiendas pueden anunciar sus productos, ofreciendo un abanico de opciones de consumo al cliente.',
    },
    {
      termino: 'Necesidades de los clientes',
      significado:
        'se definen como los factores de influencia que los impulsan a comprar un determinado producto o servicio. ',
    },
    {
      termino: 'Público objetivo',
      significado:
        'segmento de la población a la que va encaminada una estrategia de <em>marketing</em>.',
    },
    {
      termino: 'Redes sociales',
      significado:
        'plataformas virtuales creadas en línea para que personas u organizaciones que comparten intereses en común se unan.',
    },
    {
      termino: '<em>Top of mind</em>',
      significado:
        'concepto que describe el pensamiento inmediato que un consumidor tiene al asociar una necesidad con un producto.',
    },
  ],
  complementario: [
    {
      tema: '2. Embudo de ventas AIDA',
      referencia:
        'Romero, P., J. (2018). ¿Qué es un embudo de ventas y cómo gestionarlo en tu negocio?',
      tipo: 'Artículo',
      link: 'https://www.emprendices.co/embudo-ventas-gestionarlo-negocio/',
    },
    {
      tema: '2. Embudo de ventas AIDA',
      referencia:
        'Díaz, M. (2018). Cómo crear llamadas a la acción que conviertan usuarios en clientes.',
      tipo: 'Artículo',
      link:
        'https://www.fuegoyamana.com/llamadas-a-la-accion-convertir-clientes/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Julian Ramirez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lizeth Karina Manchego',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Veimar Celis Melendez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
