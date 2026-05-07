const BASE_CAMP = {
  name: "Apartamento en Costa Teguise",
  lat: 28.999,
  lng: -13.502,
  desc: "Nuestra base camp en Calle Adelfas",
  address: "Calle Adelfas, Costa Teguise, Lanzarote",
  airbnb: "https://www.airbnb.es/rooms/631883225772335804?adults=2&check_in=2026-06-05&check_out=2026-06-09&children=0&infants=0&pets=0&wishlist_item_id=11006211048188&source_impression_id=p3_1778175003_P3Ad5khacq5d6Q-V&previous_page_section_name=1000",
  fotos: [
    "https://a0.muscache.com/im/pictures/d543dd48-b192-41ef-86e2-40cd11a9b80c.jpg?im_w=1440",
    "https://a0.muscache.com/im/pictures/427dfe31-2ef2-4e5e-8f8b-e4ece235c5aa.jpg?im_w=960&im_q=medq",
    "https://a0.muscache.com/im/pictures/9a8f860b-7d62-40ad-b405-a0c54b98bc7f.jpg?im_w=1200",
    "https://a0.muscache.com/im/pictures/8c0bb963-9d4c-4cc6-8c5c-ab8979dfed37.jpg?im_w=960&im_q=medq"
  ]
};

const places = [
  {
    id: 1,
    name: "Bar El Parral",
    lat: 28.961714,
    lng: -13.551265,
    category: "restaurante",
    day: 3,
    desc: "Bar de tapas clásico en Arrecife.",
    address: "C. Hermanos Zerolo, 20, Arrecife",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/af/49/38/desayunos-y-tapas.jpg"
  },
  {
    id: 2,
    name: "Parque Nacional de Timanfaya",
    lat: 29.0333,
    lng: -13.7033,
    category: "naturaleza",
    day: 1,
    desc: "Paisaje volcánico único con cráteres y demostraciones geotérmicas.",
    address: "LZ-67, Tinajo",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/41/Timanfaya_National_Park_landscape.jpg"
  },
  {
    id: 3,
    name: "Playa Flamingo",
    lat: 28.8578,
    lng: -13.8417,
    category: "playa",
    day: 1,
    desc: "Playa de arena dorada en Playa Blanca.",
    address: "Costa Oeste de Playa Blanca, Yaiza",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/45/Yaiza_Playa_Blanca_-_Avenida_Maritima_-_Playa_Flamingo_04_ies.jpg"
  },
  {
    id: 4,
    name: "Jameos del Agua",
    lat: 29.1572,
    lng: -13.4305,
    category: "cultura",
    day: 2,
    desc: "Tubo volcánico convertido en centro cultural por César Manrique.",
    address: "Carretera Punta Mujeres, Haría",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/08/Har%C3%ADa_-_MNLC_-_LZ-1_-_Jameos_del_Agua_12_ies.jpg"
  },
  {
    id: 5,
    name: "Punta Mujeres",
    lat: 29.1453,
    lng: -13.4478,
    category: "pueblo",
    day: 2,
    desc: "Pueblo costero con piscinas naturales.",
    address: "Punta Mujeres, Haría",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/25/Punta_Mujeres_Lanzarote.jpg"
  },
  {
    id: 6,
    name: "Cueva de los Verdes",
    lat: 29.1605,
    lng: -13.4394,
    category: "naturaleza",
    day: 2,
    desc: "Tubo volcánico de 6 km con iluminación artística.",
    address: "Carretera Punta Mujeres, Haría",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/10/Lanzarote_5_Luc_Viatour.jpg"
  },
  {
    id: 7,
    name: "Haría",
    lat: 29.1467,
    lng: -13.4983,
    category: "pueblo",
    day: 2,
    desc: "Valle de las Mil Palmeras.",
    address: "Haría",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Har%C3%ADa_with_Monte_Corona_on_Lanzarote%2C_June_2013_%282%29.jpg"
  },
  {
    id: 8,
    name: "Playa del Risco",
    lat: 29.2092,
    lng: -13.4969,
    category: "playa",
    day: 2,
    desc: "Playa virgen remota. Acceso a pie (1h).",
    address: "Acceso desde Yé, Haría",
    img: "https://turismolanzarote.com/wp-content/uploads/2017/03/MG_4257-Panora%CC%81mica-copia.jpg"
  },
  {
    id: 9,
    name: "Jardín de Cactus",
    lat: 29.0804,
    lng: -13.4768,
    category: "cultura",
    day: 2,
    desc: "4500 especies de cactus. Última obra de Manrique.",
    address: "Av. Garafía, 98, Guatiza, Teguise",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Jard%C3%ADn_de_Cactus-pjt.jpg"
  },
  {
    id: 10,
    name: "Playa de Famara",
    lat: 29.1262,
    lng: -13.526,
    category: "playa",
    day: 2,
    desc: "5 km de playa al pie del Risco de Famara.",
    address: "Famara, Teguise",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/39/Risco_de_Famara.jpg"
  },
  {
    id: 11,
    name: "Museo Lagomar",
    lat: 29.0452,
    lng: -13.5551,
    category: "cultura",
    day: 3,
    desc: "Museo en vivienda excavada en roca volcánica.",
    address: "C. los Loros, 2, Nazaret, Teguise",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Teguise_Nazaret_-_Calle_Los_Loros_-_Lagomar_26_ies.jpg"
  },
  {
    id: 12,
    name: "Teguise",
    lat: 29.0611,
    lng: -13.5597,
    category: "pueblo",
    day: 2,
    desc: "Antigua capital. Mercado dominical famoso.",
    address: "Teguise",
    img: "https://www.barcelo.com/guia-turismo/wp-content/uploads/2020/07/teguise-1.jpg"
  },
  {
    id: 13,
    name: "Costa Teguise",
    lat: 28.999,
    lng: -13.502,
    category: "pueblo",
    day: 0,
    desc: "Resort donde nos alojamos.",
    address: "Costa Teguise",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Costa_Teguise-Playa_del_Jablillo.JPG"
  },
  {
    id: 14,
    name: "Arrecife",
    lat: 28.9611,
    lng: -13.5506,
    category: "pueblo",
    day: 3,
    desc: "Capital de Lanzarote.",
    address: "Arrecife",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Arrecife%2C_Lanzarote_2011.JPG"
  },
  {
    id: 15,
    name: "Islote de Fermina",
    lat: 28.9545,
    lng: -13.5541,
    category: "naturaleza",
    day: 3,
    desc: "Islote rehabilitado por César Manrique.",
    address: "Parque Islas Canarias, Arrecife",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/29/Arrecife_-_Islote_de_Fermina_04_ies.jpg"
  },
  {
    id: 16,
    name: "Las Grietas",
    lat: 28.9738,
    lng: -13.6353,
    category: "naturaleza",
    day: 1,
    desc: "Fisuras volcánicas espectaculares.",
    address: "LZ-30, Tías - San Bartolomé",
    img: "https://www.lanzarote.com/wp-content/uploads/2023/02/las-grietas-lanzarote.jpg"
  },
  {
    id: 17,
    name: "La Geria",
    lat: 28.9737,
    lng: -13.7005,
    category: "naturaleza",
    day: 1,
    desc: "Viñedos únicos en hoyos volcánicos.",
    address: "La Geria",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Lanzarote_LaGeria.jpg"
  },
  {
    id: 18,
    name: "Los Charcones",
    lat: 28.8904,
    lng: -13.8756,
    category: "naturaleza",
    day: 1,
    desc: "Piscinas naturales volcánicas.",
    address: "Yaiza",
    img: "https://ociolanzarote.com/wp-content/imagenes/piscina-natural-tranquila.jpg"
  },
  {
    id: 19,
    name: "El Golfo",
    lat: 28.9815,
    lng: -13.8303,
    category: "naturaleza",
    day: 1,
    desc: "Laguna Verde (Charco de los Clicos).",
    address: "El Golfo, Yaiza",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Charco_de_los_Clicos_-_El_Golfo.jpg"
  },
  {
    id: 20,
    name: "Los Hervideros",
    lat: 28.9539,
    lng: -13.8336,
    category: "naturaleza",
    day: 1,
    desc: "Acantilados volcánicos con géiseres.",
    address: "Carretera de El Golfo, Yaiza",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Los_Hervideros_-_Lanzarote_-_LH05.jpg"
  },
  {
    id: 21,
    name: "Restaurante Dunas de Famara",
    lat: 29.1229,
    lng: -13.5247,
    category: "restaurante",
    day: 2,
    desc: "Cocina canaria con vistas a Famara.",
    address: "C. Chirimoya, 13, Famara, Teguise",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/45/60/7a/atardecer-en-dunas-de.jpg"
  },
  {
    id: 22,
    name: "Kamezí Boutique Villas",
    lat: 28.8611,
    lng: -13.8657,
    category: "restaurante",
    day: 1,
    desc: "Cena con vistas al atardecer.",
    address: "C. Mónaco, 2, Playa Blanca, Yaiza",
    img: "https://images.trvl-media.com/lodging/2000000/1460000/1455800/1455762/cdaaeede.jpg"
  },
  {
    id: 23,
    name: "La Tabla",
    lat: 28.996,
    lng: -13.498,
    category: "restaurante",
    day: 3,
    desc: "Tapas en Costa Teguise.",
    address: "Av. Islas Canarias 12, CC Maretas, Costa Teguise",
    img: "https://latablafamily.com/wp-content/themes/yootheme/cache/49/La-Tabla_027_2023-11-10-scaled-497366dd.jpeg"
  },
  {
    id: 24,
    name: "MENEO Smash Burgers",
    lat: 28.9203,
    lng: -13.6463,
    category: "restaurante",
    day: 1,
    desc: "Smash burgers y cervezas artesanas.",
    address: "Av. de las Playas 53, Puerto del Carmen, Tías",
    img: "https://glovo.dhmedia.io/image/vso-so-backend/GV_ES/HT4E9Q/attachment__1765910198919840143.jpg"
  },
  {
    id: 25,
    name: "Teleclub de Mozaga",
    lat: 29.0225,
    lng: -13.6127,
    category: "restaurante",
    day: 3,
    desc: "Cocina tradicional canaria.",
    address: "C. Sancocho, 61, Mozaga, Teguise",
    img: "https://img.carta.menu/storage/media/company_images/42492104/conversions/thumbnail.jpg"
  }
];
