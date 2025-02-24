//Mapa de JavaScript con la información de cada punto en el mapa
//Esto permite actualizar la información de forma sencilla con solo una función
const locationInfo = {
  Argentina: {
    year: 2014,
    image: "img/UK2014.jpg",
    title: "Buenos Aires, Argentina",
    description: "Sede del 99-a Universala Kongreso de Esperanto en 2014",
    attendeees: "706",
  },
  Francia: {
    year: 2015,
    image: "img/UK2015.JPG",
    title: "Lille, Francia",
    description: "Sede del 100-a Universala Kongreso de Esperanto en 2015",
    attendeees: "2698",
  },
  Slovakia: {
    year: 2016,
    image: "img/UK2016.jpg",
    title: "Nitra, Eslovaquia",
    description: "Sede del 101-a Universala Kongreso de Esperanto en 2016",
    attendeees: "1252",
  },
  Surcorea: {
    year: 2017,
    image: "img/UK2017.jpg",
    title: "Seúl, Corea del Sur",
    description: "Sede del 102-a Universala Kongreso de Esperanto en 2017",
    attendeees: "1173",
  },
  Portugal: {
    year: 2018,
    image: "img/UK2018.jpg",
    title: "Lisboa, Portugal",
    description: "Sede del 103-a Universala Kongreso de Esperanto en 2018",
    attendeees: "1567",
  },
  Finlandia: {
    year: 2019,
    image: "img/UK2019.jpg",
    title: "Lahti, Finlandia",
    description: "Sede del 104-a Universala Kongreso de Esperanto en 2019",
    attendeees: "917",
  },
  Virtual: {
    year: 2020,
    image: "img/UK2020.png",
    title: "Congreso Virtual",
    description:
      "105-a Universala Kongreso de Esperanto Virtual en 2020 (debido a la pandemia del COVID-19)",
    attendeees: "1860",
  },
  Virtual2: {
    year: 2021,
    image: "img/UK2021.png",
    title: "Congreso Virtual",
    description:
      "106-a Universala Kongreso de Esperanto Virtual en 2021 (debido a la pandemia del COVID-19)",
  },
  Canada: {
    year: 2022,
    image: "img/UK2022.jpg",
    title: "Montreal, Canadá",
    description: "Sede del 107-a Universala Kongreso de Esperanto en 2022",
    attendeees: "859",
  },
  Italia: {
    year: 2023,
    image: "img/UK2023.jpg",
    title: "Torino, Italia",
    description: "Sede del 108-a Universala Kongreso de Esperanto en 2023",
    attendeees: "1319",
  },
  Tanzania: {
    year: 2024,
    image: "img/UK2024.jpeg",
    title: "Arusha, Tanzania",
    description: "Sede del 109-a Universala Kongreso de Esperanto en 2024",
    attendeees: "854",
  },
};

// Función para actualizar la información según el punto en el mapa seleccionado
function updateLocationInfo(country) {
  const info = locationInfo[country];
  document.getElementById("locationInfo").innerHTML = `
    <img class="locationImage" src="${info.image}" alt="Universala Kongreso ${info.year}">
    <br>
    <strong>${info.title}</strong>
    <br>
    ${info.description}
    <br>
    <strong>Asistentes:</strong> ${info.attendeees || "No disponible"}
    `;
  document.getElementById("locationInfo").scrollIntoView();
}

//Función para resetear la información a la principal
function reset() {
  document.getElementById("locationInfo").innerHTML =
    '<img class="locationImage" src="img/main.jpg" alt="Universala Kongreso"><br><strong>Mapa mundi con ubicaciones de los últimos 10 Congresos de Esperanto</strong><br>Haz clic en alguno de los pequeños botones para ver información sobre el lugar.';
  document.getElementById("locationInfo").scrollIntoView();
}

