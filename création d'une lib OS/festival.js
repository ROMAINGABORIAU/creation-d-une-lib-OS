function getFestivalData() {
  fetch('https://data.culture.gouv.fr/explore/dataset/panorama-des-festivals/api/')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      displayFestivals(data);
    })
    .catch(error => {
      console.error('si vous voyez ce msg, c que vue vous etes à chie*:', error);
    });
}
function displayFestivals(data) {
  data.forEach(festival => {
    const festivalElement = document.createElement('div');
    festivalElement.textContent = festival.name;
    document.body.appendChild(festivalElement);
  });
  getFestivalDataù();
}
