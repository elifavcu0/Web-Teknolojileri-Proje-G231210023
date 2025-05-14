const apiKey = "ee795ea1";

const imdbIDs = [
  "tt0460649", // How I Met Your Mother
  "tt0944947", // Game of Thrones
  "tt0903747", // Breaking Bad
  "tt2861424", // Rick and Morty
  "tt0108778", // Friends
  "tt1475582", // Sherlock
  "tt1442437", // Modern Family
  "tt0386676", // The Office
  "tt4574334", // Stranger Things
  "tt1839578", // Big Bang Theory
];

function getRandomIDs(arr, count) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const randomIDs = getRandomIDs(imdbIDs, 6);

const container = document.getElementById("movie-container");

// Tüm fetch işlemlerini sırayla toplayalım
Promise.all(
  randomIDs.map((id) =>
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`).then((res) =>
      res.json()
    )
  )
)
  .then((results) => {
    for (let i = 0; i < results.length; i += 3) {
      const rowItems = results
        .slice(i, i + 3)
        .map(
          (data) => `
        <div class="col-md-4 mb-4">
          <div class="card h-100 shadow">
            <img src="${data.Poster}" class="card-img-top" alt="${data.Title}">
            <div class="card-body">
              <h5 class="card-title">${data.Title} (${data.Year})</h5>
              <p class="card-text">${data.Plot}</p>
            </div>
          </div>
        </div>
      `
        )
        .join("");
      container.insertAdjacentHTML(
        "beforeend",
        `<div class="row">${rowItems}</div>`
      );
    }
  })
  .catch((err) => {
    console.error("Hata oluştu:", err);
    container.innerHTML =
      '<div class="alert alert-danger">Dizi verileri alınamadı.</div>';
  });
