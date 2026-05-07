const places = [
  {
    id: 1,
    name: "Bar El Parral",
    lat: 28.961714,
    lng: -13.551265,
    category: "restaurante",
    desc: "Bar de tapas en Arrecife. 20-30 €",
    address: "C. Hermanos Zerolo, 20, Arrecife"
  },
  {
    id: 2,
    name: "Parque Nacional de Timanfaya",
    lat: 29.0333,
    lng: -13.7033,
    category: "naturaleza",
    desc: "Impresionante paisaje volcánico con cráteres y campos de lava.",
    address: "Carretera LZ-67, Tinajo"
  },
  {
    id: 3,
    name: "Playa Flamingo",
    lat: 28.8578,
    lng: -13.8417,
    category: "playa",
    desc: "Playa de arena dorada en Playa Blanca.",
    address: "Costa Oeste de Playa Blanca, Yaiza"
  },
  {
    id: 4,
    name: "Jameos del Agua",
    lat: 29.1572,
    lng: -13.4305,
    category: "cultura",
    desc: "Tubo volcánico transformado en espacio cultural por César Manrique.",
    address: "Carretera Punta Mujeres, Haría"
  },
  {
    id: 5,
    name: "Punta Mujeres",
    lat: 29.1453,
    lng: -13.4478,
    category: "pueblo",
    desc: "Pueblo costero en el municipio de Haría.",
    address: "Punta Mujeres, Haría"
  },
  {
    id: 6,
    name: "Cueva de los Verdes",
    lat: 29.1605,
    lng: -13.4394,
    category: "naturaleza",
    desc: "Tubo volcánico de más de 6 km. Recorrido subterráneo fascinante.",
    address: "Carretera Punta Mujeres, Haría"
  },
  {
    id: 7,
    name: "Haría",
    lat: 29.1467,
    lng: -13.4983,
    category: "pueblo",
    desc: "Municipio del norte de Lanzarote, conocido como el 'Valle de las Mil Palmeras'.",
    address: "Haría"
  },
  {
    id: 8,
    name: "Playa del Risco",
    lat: 29.2092,
    lng: -13.4969,
    category: "playa",
    desc: "Playa virgen y remota al norte de la isla.",
    address: "Acceso desde Yé, Haría"
  },
  {
    id: 9,
    name: "Jardín de Cactus",
    lat: 29.0804,
    lng: -13.4768,
    category: "cultura",
    desc: "Última gran obra de César Manrique. 4500 especies de cactus.",
    address: "Av. Garafía, 98, Guatiza, Teguise"
  },
  {
    id: 10,
    name: "Playa de Famara",
    lat: 29.1262,
    lng: -13.5260,
    category: "playa",
    desc: "Icónica playa de 5 km al pie del Risco de Famara. Ideal para surf.",
    address: "Famara, Teguise"
  },
  {
    id: 11,
    name: "Museo Lagomar",
    lat: 29.0452,
    lng: -13.5551,
    category: "cultura",
    desc: "Museo de arte en una vivienda excavada en la roca volcánica.",
    address: "C. los Loros, 2, Nazaret, Teguise"
  },
  {
    id: 12,
    name: "Teguise",
    lat: 29.0611,
    lng: -13.5597,
    category: "pueblo",
    desc: "Antigua capital de Lanzarote. Famosa por su mercado dominical.",
    address: "Teguise"
  },
  {
    id: 13,
    name: "Costa Teguise",
    lat: 28.999,
    lng: -13.502,
    category: "pueblo",
    desc: "Resort turístico en la costa este de la isla.",
    address: "Costa Teguise"
  },
  {
    id: 14,
    name: "Arrecife",
    lat: 28.9611,
    lng: -13.5506,
    category: "pueblo",
    desc: "Capital de Lanzarote, con el Charco de San Ginés y el Puente de las Bolas.",
    address: "Arrecife"
  },
  {
    id: 15,
    name: "Islote de Fermina",
    lat: 28.9545,
    lng: -13.5541,
    category: "naturaleza",
    desc: "Pequeño islote en Arrecife rehabilitado por César Manrique.",
    address: "Parque Islas Canarias, Arrecife"
  },
  {
    id: 16,
    name: "Las Grietas",
    lat: 28.9738,
    lng: -13.6353,
    category: "naturaleza",
    desc: "Fisuras volcánicas en la ladera de Montaña Blanca.",
    address: "LZ-30, entre Tías y San Bartolomé"
  },
  {
    id: 17,
    name: "La Geria",
    lat: 28.9737,
    lng: -13.7005,
    category: "naturaleza",
    desc: "Paisaje protegido de viñedos plantados en hoyos volcánicos.",
    address: "La Geria"
  },
  {
    id: 18,
    name: "Los Charcones",
    lat: 28.8904,
    lng: -13.8756,
    category: "naturaleza",
    desc: "Piscinas naturales en la costa suroeste de la isla.",
    address: "Yaiza"
  },
  {
    id: 19,
    name: "El Golfo",
    lat: 28.9815,
    lng: -13.8303,
    category: "naturaleza",
    desc: "Localidad costera con la famosa Laguna Verde.",
    address: "El Golfo, Yaiza"
  },
  {
    id: 20,
    name: "Los Hervideros",
    lat: 28.9539,
    lng: -13.8336,
    category: "naturaleza",
    desc: "Acantilados volcánicos donde el mar entra con fuerza formando géiseres.",
    address: "Carretera de El Golfo, Yaiza"
  },
  {
    id: 21,
    name: "Restaurante Dunas de Famara",
    lat: 29.1229,
    lng: -13.5247,
    category: "restaurante",
    desc: "Restaurante con vistas espectaculares a la playa de Famara.",
    address: "C. Chirimoya, 13, Famara, Teguise"
  },
  {
    id: 22,
    name: "Kamezí Boutique Villas",
    lat: 28.8611,
    lng: -13.8657,
    category: "restaurante",
    desc: "Hotel boutique con villas privadas y vistas al mar en Playa Blanca.",
    address: "C. Mónaco, 2, Playa Blanca, Yaiza"
  },
  {
    id: 23,
    name: "La Tabla",
    lat: 28.996,
    lng: -13.498,
    category: "restaurante",
    desc: "Tapas en Costa Teguise. Muy popular, no acepta reservas.",
    address: "Av. Islas Canarias 12, CC Maretas, Costa Teguise"
  },
  {
    id: 24,
    name: "MENEO Smash Burgers",
    lat: 28.9203,
    lng: -13.6463,
    category: "restaurante",
    desc: "Smash burgers y cervezas especiales en Puerto del Carmen.",
    address: "Av. de las Playas, 53, Puerto del Carmen, Tías"
  },
  {
    id: 25,
    name: "Teleclub de Mozaga",
    lat: 29.0225,
    lng: -13.6127,
    category: "restaurante",
    desc: "Bar-restaurante tradicional canario en Mozaga.",
    address: "C. Sancocho, 61, Mozaga, Teguise"
  }
];
