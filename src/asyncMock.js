const items = [
  {
    id: 1,
    name: "NO LO TESTEAMOS NI UN POCO",
    description:
      "Un juego como vos (siempre y cuando seas absurdo y sin sentido). No Lo Testeamos Ni Un Poco es un juego de eliminación, donde ganás si te mantenés en juego. Si perdés, no ganás y estás eliminado. Si buscás un juego lleno de estrategia... ¡Claramente no es este! En una partida todo es posible: desde perder por un piedra, papel o tijera hasta ganar por ser el más bajito.",
    category: ["previa"],
    img: "https://res.cloudinary.com/dmueqrag0/image/upload/v1696595157/Kupuka/cpkmadpqxag2yegltqfe",
    price: 6990,
    stock: 11,
  },
  {
    id: 2,
    name: "H.D.P.",
    description:
      "¿Qué es el H.D.P.? Un juego de humor políticamente incorrecto. Uno de esos juegos donde respondés una carta negra con cartas blancas. Mucho humor negro en una caja pequeña que además tiene un mono. Una vuelta más en mi espiral de decadencia y hedonismo. Un ataque de palometas.",
    category: ["previa"],
    img: "https://res.cloudinary.com/dmueqrag0/image/upload/v1696595158/Kupuka/ge9xqf7vpq9cwbftwo94",
    price: 14900,
    stock: 8,
  },
  {
    id: 3,
    name: "PLANET B",
    description:
      "En algún momento de un futuro no muy lejano, los seres humanos tuvieron que buscar un nuevo lugar para vivir. Justo cuando pensaban que tendrían que conformarse con Marte, descubrieron de repente un nuevo planeta, al que bautizaron cariñosamente como «Planeta B». Era una segunda oportunidad para la humanidad y, por supuesto, esta vez estaban decididos a hacerlo todo bien porque, como todo el mundo sabe, los humanos aprenden muy bien de sus errores…",
    category: ["familiar", "novedad"],
    img: "https://res.cloudinary.com/dmueqrag0/image/upload/v1696595158/Kupuka/j2eupmxedpz63tczi4cp",
    price: 62700,
    stock: 0,
  },
  {
    id: 4,
    name: "AQUALIN",
    description:
      "Diseñado por Marcello Bertocchi, Aqualin es un juego abstracto y estratégico de colocación de losetas para 2 jugadores, a partir de 8 años, que ofrece partidas de unos 20 minutos de duración. En un arrecife rebosante de vida marina, los jugadores compiten para sumar la máxima puntuación posible, formando o bien grupos de un color o bien bancos con el mismo tipo de animal. En turnos sucesivos, los jugadores añadirán y moverán las fichas para tratar de formar los conjuntos más favorables a sus intereses hasta que ya no quede espacio.",
    category: ["familiar"],
    img: "https://res.cloudinary.com/dmueqrag0/image/upload/v1696595157/Kupuka/d6wclgbpjqbxv1dgj16v",
    price: 21600,
    stock: 6,
  },
  {
    id: 5,
    name: "EL CAMARERO",
    description:
      "El Camarero es un juego de mesa que hace honor a la memoria prodigiosa de los camareros de todo el mundo. ¿Creés que podrías ser un gran camarero? Entradas, principales, guarniciones, postres y bebidas. Debes recordar todos los pedidos de la mesa y servir los platos que salen de la cocina. ¡Pero estate atento! Si alguien comete algún error, podés salvar el honor de la profesión corrigiendo al distraído.",
    category: ["familiar", "cartas", "party"],
    img: "https://res.cloudinary.com/dmueqrag0/image/upload/v1696595157/Kupuka/rdupppzb6ftl7egkbpn7",
    price: 14200,
    stock: 9,
  },
  {
    id: 6,
    name: "SHIKI",
    description:
      "Shiki es un juego de mesa de cartas y dados, una combinación ideal para los niños que están entrando en el mundo de los juegos de mesa. Se reparten las cartas de las estaciones del año: Invierno, primavera, verano y otoño. En cada turno, un jugador tira el dado que marcará la estación en juego. Quien lo tiró se descartará de todas las cartas que tenga de esa estación. El resto de los jugadores también juegan y se descartarán de una sola carta de esa estación. El primero que se queda sin cartas en la mano, avanza un lugar en el contador. El primero que cruza la línea de la victoria, será el ganador. Un juego de mesa para jugar en familia, manteniendo la atención plena ya que en todas las manos todos juegan. El dado también puede hacer que todos roben una carta, menos vos o que puedas tirar la carta que quieras, al salir la estrella.",
    category: ["kids", "cartas"],
    img: "https://res.cloudinary.com/dmueqrag0/image/upload/v1696595158/Kupuka/ixzj5ogdm6kzfrjrqjzn",
    price: 4500,
    stock: 13,
  },
  {
    id: 7,
    name: "TACO GATO CABRA QUESO PIZZA",
    description:
      "Acostumbrate a estas 5 palabritas... ¡No te las vas a poder sacar de la cabeza! Taco Gato Cabra Queso Pizza es un juego ideal para sobremesas y cualquier momento con unos minutos libres, ¡Incluso previas! Un juego rápido y fácil que va a poner a prueba tu poder de concentración y velocidad mental. Bah: te va a poner a laburar la cabeza... ¡Y al toque te la va a quemar!",
    category: ["familiar", "kids", "party"],
    img: "https://res.cloudinary.com/dmueqrag0/image/upload/v1696595160/Kupuka/eytwxjhcarkpcilqwwg2",
    price: 6990,
    stock: 11,
  },
  {
    id: 8,
    name: "SAY MY NAME",
    description:
      "Se juega en equipo de 2-3 personas, se elije una categoría y se arman dos mazos. El objetivo: adivinar la mayor cantidad de tarjetas lo más rápido posible. ¿Cómo? Dándole pistas a tu equipo respetando las reglas de cada ronda.",
    category: ["previa", "familiar", "party"],
    img: "https://res.cloudinary.com/dmueqrag0/image/upload/v1696595158/Kupuka/o3lyuouddbdg8npbmnou",
    price: 12900,
    stock: 10,
  },
  {
    id: 9,
    name: "AMIGOS DE MIERDA",
    description:
      "Amigos de Mierda es un juego ideal para romper amistades de toda la vida, caerle como el ojete a gente que acabás de conocer y/o arruinar cualquier tipo de reunión familiar.",
    category: ["previa"],
    img: "https://res.cloudinary.com/dmueqrag0/image/upload/v1696595156/Kupuka/huijhrj7sef1f0g7rpuc",
    price: 6990,
    stock: 11,
  },
  {
    id: 10,
    name: "TINY TURBO CARS",
    description:
      "Tiny Turbo Cars es un frenético juego de carreras para 2 a 4 jugadores en el que programas de antemano los movimientos de tu diminuto coche de juguete, con un puzzle deslizante que actúa como mando a distancia. Elige tu coche, toma el mando a distancia, crea la pista y ¡prepárate para la carrera! Al principio de cada ronda, los jugadores tienen que trabajar simultáneamente con sus mandos de puzzle deslizante, intentando crear la secuencia de acciones que quieren que su coche realice durante la ronda.",
    category: ["familiar"],
    img: "https://res.cloudinary.com/dmueqrag0/image/upload/v1696595159/Kupuka/hz8d7xxxlpbwvkezrdtc",
    price: 28000,
    stock: 4,
  },
  {
    id: 11,
    name: "SOUND BOX",
    description:
      "Sound Box es un party game cooperativo para 4 a 7 jugadores en el que escuchas a tus amigos interpretar sonidos extraños mientras intentan hacerte adivinar todo tipo de conceptos. Al principio de cada ronda, colocas tarjetas de sonido en el tablero y sacas una ficha numerada de una bolsa para descubrir cuál te ha tocado. Tómate tu tiempo para dar con el sonido perfecto que represente tu tarjeta: tendrás que imitar ese sonido para sugerir tu concepto al Adivinador. Si eres el Adivinador, en cambio, tu trabajo consistirá en escuchar los sonidos interpretados por los Soundmakers.",
    category: ["familiar"],
    img: "https://res.cloudinary.com/dmueqrag0/image/upload/v1696595158/Kupuka/etnyr3f2tckhd6onaitt",
    price: 19380,
    stock: 7,
  },
  {
    id: 12,
    name: "CARCASSONNE",
    description:
      "Carcassonne es un juego de colocación de fichas en el que los jugadores dibujan y colocan una ficha con un trozo de paisaje del sur de Francia. La ficha puede incluir una ciudad, una carretera, un claustro, un prado o alguna combinación de los mismos, y debe colocarse junto a las fichas que ya se han jugado, de manera que las ciudades estén conectadas con ciudades, caminos con caminos, etcétera. Después de colocar una loseta, el jugador puede decidir colocar uno de sus meeples en una de las áreas de la misma: en la ciudad como un caballero, en el camino como un ladrón, en un claustro como un monje o en el césped como un granjero. Cuando esa área está completa, ese meeple anota puntos para su propietario.",
    category: ["euro"],
    img: "https://res.cloudinary.com/dmueqrag0/image/upload/v1696595157/Kupuka/xg7sh6vramc3zupatdiu",
    price: 28700,
    stock: 3,
  },
  {
    id: 13,
    name: "THE MIND",
    description:
      "The Mind es más que un simple juego, es una experiencia grupal, un experimento, un viaje. Un juego colaborativo, donde la intuición cumple un rol fundamental. Hay un mazo de cartas del 1 al 100 que se reparten entre los jugadores y sin turnos y sin poder hablar entre ellos, se deben bajar en orden. Es un juego alemán, creado por Wolfgang Warsch que el año pasado revolucionó el mercado de los juegos por su originalidad y su simpleza. Ganó todo tipo de premios incluso fue finalista de Spiel de Jahres, premio con mayor prestigio del mundo.",
    category: ["familiar", "estrategia", "cartas", "party"],
    img: "https://res.cloudinary.com/dmueqrag0/image/upload/v1696595159/Kupuka/elzmydz3p67i4nvtux9i",
    price: 14200,
    stock: 9,
  },
  {
    id: 14,
    name: "ESQUINADOS",
    description:
      "Esquinados es un juego de atención y velocidad. ¡Ideal para la familia, adolescentes, previas y amigos! Las cartas tienen en cada lado una fIgura central, y en cada esquina hay una figura cortada. En este juego no hay turnos, todos juegan al mismo tiempo. Se reparten todas las cartas entre los jugadores. Se pone una carta en el centro y ¡comienza el juego! Deberás encontrar entre todas tus cartas una figura cortada que coincida en forma y color con la figura central de la carta del pozo. Cuando la encuentres, tendrás que apoyar la carta rápido sobre la que está en la mesa antes de que alguien lo haga antes que vos y te cambie la figura central. ¡El objetivo del juego es quedarse sin cartas! Las cartas no tienen orden. Siempre hay que buscar entre todas las cartas que tengas en la mano",
    category: ["familiar", "cartas", "party"],
    img: "https://res.cloudinary.com/dmueqrag0/image/upload/v1696595157/Kupuka/cbxjds4udc7idvpmtss1",
    price: 4500,
    stock: 13,
  },
  {
    id: 15,
    name: "JARDINERO",
    description:
      "Un juego para toda la familia, simple y dinámico, donde podrás aprovechar la suerte de los demás. Utilizando el dado, deberás ordenar tus cartas, del 1 al 7, acorde al crecimiento de una planta. Quien primero lo logre, será el ganador.",
    category: ["kids", "familiar", "estrategia", "cartas"],
    img: "https://res.cloudinary.com/dmueqrag0/image/upload/v1696595157/Kupuka/pcckuaxo7g56lyu4btgz",
    price: 4500,
    stock: 13,
  },
  {
    id: 16,
    name: "RED7",
    description:
      "Red7 es un juego de cartas compacto, rápido y fluido, para 2 a 4 jugadores, que exige a fondo tu ingenio para ganar. Las reglas son muy fáciles... ¡Lástima que cambian todo el tiempo!",
    category: ["familiar"],
    img: "https://res.cloudinary.com/dmueqrag0/image/upload/v1696595158/Kupuka/jb04vcjkxlcqbduofedk",
    price: 6990,
    stock: 11,
  },
  {
    id: 17,
    name: "TOMALO VOS",
    description:
      "Un juego ideal para tus previas, en el que tu objetivo es lograr que tu amigxs tomen más que vos. Tomalo Vos es un juego para gente responsable peeeeeero, si te ponés las pilas, también podés jugarlo vos.",
    category: ["previa"],
    img: "https://res.cloudinary.com/dmueqrag0/image/upload/v1696595159/Kupuka/afgwmt2ttlxek9psn7dg",
    price: 4990,
    stock: 12,
  },
  {
    id: 18,
    name: "EL ANSIA",
    description:
      "¡Es hora de salir a cazar! El ansia es un juego con mecánicas de construcción de mazos y push your luck (fuerza la suerte) que nos pone en la piel de temibles vampiros sedientos de sangre. Los jugadores deberán conseguir el máximo número de puntos de victoria cazando humanos, llevando a cabo misiones secretas, consiguiendo el favor de familiares o recolectando la rosa más bella del laberinto. Todo ello antes que se haga de día, pues tras las primeras luces del alba los vampiros morirán convertidos en ceniza si no han regresado a su castillo.",
    category: ["familiar", "novedad"],
    img: "https://res.cloudinary.com/dmueqrag0/image/upload/v1696595156/Kupuka/csm9h0b8nva81yekll9b",
    price: 45200,
    stock: 1,
  },
  {
    id: 19,
    name: "CATAN",
    description:
      "Pocos juegos reúnen tantas cualidades como Catan. Su mecánica innovadora, capaz de satisfacer hasta el paladar del jugador más exquisito en materia de juegos de mesa, lo ha hecho merecedor de los más importantes premios internacionales.",
    category: ["euro"],
    img: "https://res.cloudinary.com/dmueqrag0/image/upload/v1696595157/Kupuka/ezvgfh5cqi0ryuc1yvmy",
    price: 39900,
    stock: 2,
  },
  {
    id: 20,
    name: "EL SEÑOR DIX",
    description:
      "El Señor Dix es un juego de cartas que invita pensar y asociar. Tiene dos mazos: uno de dibujos y otro de cualidades. Para jugar con chicos a partir de 4 años, y con distintos niveles de dificultad, se deberán asociar los dibujos con una o más características para ir acumulando cartas y ganar el juego. Un juego de cartas simple, didáctico y divertido para jugar con los más chicos.",
    category: ["kids", "cartas"],
    img: "https://res.cloudinary.com/dmueqrag0/image/upload/v1696595159/Kupuka/iigfdfqd5tp2r8guypu6",
    price: 4500,
    stock: 13,
  },
  {
    id: 21,
    name: "PESCADORES",
    description:
      "Pescadores es un juego de mesa de velocidad y observación. Un juego ideal para jugar en familia con jugadores de varias edades. Los pescadores quieren salir de pesca. En este juego de mesa la velocidad y la observación te harán ganar, pero debes estar atento y encontrar en los tres barcos el patrón o característica común que se repite. Hay pescadores de tres tamaños, tres cantidades, tres orígenes y tres colores. Si descubrís una característica común en los 3 pozos, apurate a tocar la campana y decirlo en voz alta para poder quedarte con todas las cartas y juntar tu tripulación de pescadores. Pescadores es un juego de mesa del reconocido autor Roberto Fraga, que Maldón edita exclusivamente para el mercado latinoamericano.",
    category: ["familiar", "cartas"],
    img: "https://res.cloudinary.com/dmueqrag0/image/upload/v1696595158/Kupuka/gqung6zcy33xobe9cfmm",
    price: 14200,
    stock: 9,
  },
  {
    id: 22,
    name: "DANY",
    description:
      "Dany es un sugestivo y original juego de «roles ocultos», cartas oníricas, pistas, acusaciones cruzadas y traición. Sí, todo eso dentro de la mente de un muchacho que escucha voces en su cabeza (habría sido más correcto mandarlo a terapia, pero era más divertido hacer un juego).",
    category: ["party"],
    img: "https://res.cloudinary.com/dmueqrag0/image/upload/v1696595157/Kupuka/tg9anbuvvqyw0h82in7b",
    price: 12900,
    stock: 10,
  },
  {
    id: 23,
    name: "EL ERUDITO",
    description:
      "El Erudito es un juego de mesa de preguntas en donde no gana el que más sabe sino el que mejor razona. Es ideal para jugar en equipos. Un juego de mesa que combina ingenio, cultura general y apuestas en más de mil consignas. Según el casillero, se apostará un monto y se deberá responder una de las tarjetas.",
    category: ["familiar", "party"],
    img: "https://res.cloudinary.com/dmueqrag0/image/upload/v1696595157/Kupuka/ty9gc430auw6cilbcudq",
    price: 22660,
    stock: 5,
  },
];

export function getItems() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items);
    }, 2000);
  });
}
