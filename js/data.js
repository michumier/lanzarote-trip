const BASE_CAMP = {
  name: "Nuestro Apartamento",
  lat: 28.999,
  lng: -13.502,
  desc: "Base camp en Costa Teguise",
  address: "Costa Teguise, Lanzarote"
};

const places = [
  {
    id: 1,
    name: "Bar El Parral",
    lat: 28.961714,
    lng: -13.551265,
    category: "restaurante",
    day: 3,
    desc: "Bar de tapas clásico en Arrecife. Ambiente auténtico y buena cocina local.",
    address: "C. Hermanos Zerolo, 20, Arrecife",
    img: "https://picsum.photos/seed/elparral/400/300"
  },
  {
    id: 2,
    name: "Parque Nacional de Timanfaya",
    lat: 29.0333,
    lng: -13.7033,
    category: "naturaleza",
    day: 1,
    desc: "Impresionante paisaje volcánico con cráteres, campos de lava y demostraciones geotérmicas. Imperdible el restaurante El Diablo.",
    address: "Carretera LZ-67, Tinajo",
    img: "https://picsum.photos/seed/timanfaya/400/300"
  },
  {
    id: 3,
    name: "Playa Flamingo",
    lat: 28.8578,
    lng: -13.8417,
    category: "playa",
    day: 1,
    desc: "Playa de arena dorada y aguas tranquilas en Playa Blanca. Ideal para bañarse.",
    address: "Costa Oeste de Playa Blanca, Yaiza",
    img: "https://picsum.photos/seed/flamingo/400/300"
  },
  {
    id: 4,
    name: "Jameos del Agua",
    lat: 29.1572,
    lng: -13.4305,
    category: "cultura",
    day: 2,
    desc: "Tubo volcánico transformado en espacio cultural por César Manrique. Piscina natural, auditorio y restaurante.",
    address: "Carretera Punta Mujeres, Haría",
    img: "https://picsum.photos/seed/jameos/400/300"
  },
  {
    id: 5,
    name: "Punta Mujeres",
    lat: 29.1453,
    lng: -13.4478,
    category: "pueblo",
    day: 2,
    desc: "Pueblo costero con piscinas naturales y excelentes restaurantes de pescado.",
    address: "Punta Mujeres, Haría",
    img: "https://picsum.photos/seed/puntamujeres/400/300"
  },
  {
    id: 6,
    name: "Cueva de los Verdes",
    lat: 29.1605,
    lng: -13.4394,
    category: "naturaleza",
    day: 2,
    desc: "Tubo volcánico de 6 km. Recorrido turístico con iluminación artística y sala de conciertos subterránea.",
    address: "Carretera Punta Mujeres, Haría",
    img: "https://picsum.photos/seed/cuevadelosverdes/400/300"
  },
  {
    id: 7,
    name: "Haría",
    lat: 29.1467,
    lng: -13.4983,
    category: "pueblo",
    day: 2,
    desc: "Conocido como el 'Valle de las Mil Palmeras'. Pueblo con encanto y mercado los sábados.",
    address: "Haría",
    img: "https://picsum.photos/seed/haria/400/300"
  },
  {
    id: 8,
    name: "Playa del Risco",
    lat: 29.2092,
    lng: -13.4969,
    category: "playa",
    day: 2,
    desc: "Playa virgen y remota. Acceso a pie (1h) desde Yé. Aguas cristalinas y arena dorada.",
    address: "Acceso desde Yé, Haría",
    img: "https://picsum.photos/seed/playadelrisco/400/300"
  },
  {
    id: 9,
    name: "Jardín de Cactus",
    lat: 29.0804,
    lng: -13.4768,
    category: "cultura",
    day: 2,
    desc: "Última gran obra de César Manrique. 4500 especies de cactus de 5 continentes en un antiguo cantera.",
    address: "Av. Garafía, 98, Guatiza, Teguise",
    img: "https://picsum.photos/seed/jardincactus/400/300"
  },
  {
    id: 10,
    name: "Playa de Famara",
    lat: 29.1262,
    lng: -13.526,
    category: "playa",
    day: 2,
    desc: "Icónica playa de 5 km al pie del Risco de Famara. Surf, puestas de sol espectaculares.",
    address: "Famara, Teguise",
    img: "https://picsum.photos/seed/famara/400/300"
  },
  {
    id: 11,
    name: "Museo Lagomar",
    lat: 29.0452,
    lng: -13.5551,
    category: "cultura",
    day: 3,
    desc: "Espectacular museo en una vivienda excavada en roca volcánica. Antigua casa de Omar Sharif.",
    address: "C. los Loros, 2, Nazaret, Teguise",
    img: "https://picsum.photos/seed/lagomar/400/300"
  },
  {
    id: 12,
    name: "Teguise",
    lat: 29.0611,
    lng: -13.5597,
    category: "pueblo",
    day: 2,
    desc: "Antigua capital de Lanzarote. Famosa por su mercado dominical. Casco histórico precioso.",
    address: "Teguise",
    img: "https://picsum.photos/seed/teguise/400/300"
  },
  {
    id: 13,
    name: "Costa Teguise",
    lat: 28.999,
    lng: -13.502,
    category: "pueblo",
    day: 0,
    desc: "Resort turístico donde nos alojamos. Playas urbanas, restaurantes y ambiente.",
    address: "Costa Teguise",
    img: "https://picsum.photos/seed/costateguise/400/300"
  },
  {
    id: 14,
    name: "Arrecife",
    lat: 28.9611,
    lng: -13.5506,
    category: "pueblo",
    day: 3,
    desc: "Capital de Lanzarote. Charco de San Ginés, Puente de las Bolas, castillo de San Gabriel.",
    address: "Arrecife",
    img: "https://picsum.photos/seed/arrecife/400/300"
  },
  {
    id: 15,
    name: "Islote de Fermina",
    lat: 28.9545,
    lng: -13.5541,
    category: "naturaleza",
    day: 3,
    desc: "Pequeño islote rehabilitado por César Manrique. Piscina, cafetería y vistas a la bahía.",
    address: "Parque Islas Canarias, Arrecife",
    img: "https://picsum.photos/seed/islotefermina/400/300"
  },
  {
    id: 16,
    name: "Las Grietas",
    lat: 28.9738,
    lng: -13.6353,
    category: "naturaleza",
    day: 1,
    desc: "Fisuras volcánicas espectaculares en Montaña Blanca. Parece un mini-Grand Canyon.",
    address: "LZ-30, entre Tías y San Bartolomé",
    img: "https://picsum.photos/seed/lasgrietas/400/300"
  },
  {
    id: 17,
    name: "La Geria",
    lat: 28.9737,
    lng: -13.7005,
    category: "naturaleza",
    day: 1,
    desc: "Paisaje protegido con viñedos únicos plantados en hoyos de picón. Bodegas para visitar.",
    address: "La Geria",
    img: "https://picsum.photos/seed/lageria/400/300"
  },
  {
    id: 18,
    name: "Los Charcones",
    lat: 28.8904,
    lng: -13.8756,
    category: "naturaleza",
    day: 1,
    desc: "Piscinas naturales volcánicas en la costa suroeste. Baño en pozas de agua marina.",
    address: "Yaiza",
    img: "https://picsum.photos/seed/loscharcones/400/300"
  },
  {
    id: 19,
    name: "El Golfo",
    lat: 28.9815,
    lng: -13.8303,
    category: "naturaleza",
    day: 1,
    desc: "Famosa Laguna Verde (Charco de los Clicos) dentro de un cráter volcánico a orillas del mar.",
    address: "El Golfo, Yaiza",
    img: "https://picsum.photos/seed/elgolfo/400/300"
  },
  {
    id: 20,
    name: "Los Hervideros",
    lat: 28.9539,
    lng: -13.8336,
    category: "naturaleza",
    day: 1,
    desc: "Acantilados volcánicos donde el mar entra en cuevas formando géiseres espectaculares.",
    address: "Carretera de El Golfo, Yaiza",
    img: "https://picsum.photos/seed/hervideros/400/300"
  },
  {
    id: 21,
    name: "Restaurante Dunas de Famara",
    lat: 29.1229,
    lng: -13.5247,
    category: "restaurante",
    day: 2,
    desc: "Restaurante con vistas espectaculares a Famara. Cocina canaria de calidad.",
    address: "C. Chirimoya, 13, Famara, Teguise",
    img: "https://picsum.photos/seed/dunasfamara/400/300"
  },
  {
    id: 22,
    name: "Kamezí Boutique Villas",
    lat: 28.8611,
    lng: -13.8657,
    category: "restaurante",
    day: 1,
    desc: "Hotel boutique con restaurante. Cena con vistas al atardecer en Playa Blanca.",
    address: "C. Mónaco, 2, Playa Blanca, Yaiza",
    img: "https://picsum.photos/seed/kamezi/400/300"
  },
  {
    id: 23,
    name: "La Tabla",
    lat: 28.996,
    lng: -13.498,
    category: "restaurante",
    day: 3,
    desc: "Tapas en Costa Teguise. Muy popular, no acepta reservas. Llegar temprano.",
    address: "Av. Islas Canarias 12, CC Maretas, Costa Teguise",
    img: "https://picsum.photos/seed/latabla/400/300"
  },
  {
    id: 24,
    name: "MENEO Smash Burgers",
    lat: 28.9203,
    lng: -13.6463,
    category: "restaurante",
    day: 1,
    desc: "Las mejores smash burgers de la isla. Ambiente joven y cervezas artesanales.",
    address: "Av. de las Playas, 53, Puerto del Carmen, Tías",
    img: "https://picsum.photos/seed/meneo/400/300"
  },
  {
    id: 25,
    name: "Teleclub de Mozaga",
    lat: 29.0225,
    lng: -13.6127,
    category: "restaurante",
    day: 3,
    desc: "Bar-restaurante tradicional canario. Cocina casera, precios populares.",
    address: "C. Sancocho, 61, Mozaga, Teguise",
    img: "https://picsum.photos/seed/teleclub/400/300"
  }
];
