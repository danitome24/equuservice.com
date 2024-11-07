// import cameraTransport from "./assets/camara-transporte.png";
// import protectionsTransport from "./assets/protecciones-transporte.png";
// import ventilationTransport from "./assets/ventilacion-transporte.png";
// import horseFoodTransport from "./assets/forraje-transporte.png";
import adviceService from "./assets/asesoramiento-servicio.jpg";
import trainingService from "./assets/entrenamiento-servicio.png";
import transportService from "./assets/transporte-servicio.png";
import eventsService from "./assets/eventos-servicio.png";

export const servicesSectionData = {
  title: "Nuestros servicios",
  subheading: {
    text1_1: "Un Transporte - ",
    text1_2: "Diseñado para una total comodidad.",
    text2:
      "El mejor transporte de caballos de Tarragona.",
  },
  services: [
    // {
    //   title: "Cámaras interiores",
    //   briefDescription:
    //     "Toda nuestra flota dispone de cámaras interiores para tener controlado en todo momento a tu caballo.",
    //   visual: cameraTransport,
    // },
    // {
    //   title: "Alimentación",
    //   briefDescription:
    //     "Tenemos redes para forraje a disposición de nuestros clientes.",
    //   visual: horseFoodTransport,
    // },
    // {
    //   title: "Ventilación",
    //   briefDescription:
    //     "Tu caballo siempre dispondrá de ventilación y una temperatura agradable.",
    //   visual: ventilationTransport,
    // },
    // {
    //   title: "Protecciones",
    //   briefDescription:
    //     "El cajón va totalmente acolchado para la comodidad del caballo.",
    //   visual: protectionsTransport,
    // }
        {
      title: "Transporte",
      briefDescription:
        "Disponemos de furgón de 2 caballos, remolque oblicuo de 2 caballos (3 ponis) y remolque oblicuo de 3 caballos (4 ponis).",
      visual: transportService,
    },
    {
      title: "Entrenamiento",
      briefDescription:
        "Tenemos redes para forraje a disposición de nuestros clientes.",
      visual: trainingService,
    },
    {
      title: "Turismo ecuestre y eventos",
      briefDescription:
        "Tu caballo siempre dispondrá de ventilación y una temperatura agradable.",
      visual: eventsService,
    },
    {
      title: "Marketing y asesoramiento",
      briefDescription:
        "El cajón va totalmente acolchado para la comodidad del caballo.",
      visual: adviceService,
    }
  ],
};
