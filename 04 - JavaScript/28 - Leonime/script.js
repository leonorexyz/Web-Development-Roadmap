const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', async function () {
  try {
    console.log('Searching...');
    const inputKeyword = document.getElementById('searchInput');
    const animes = await getAnimes(inputKeyword.value);
    updateUI(animes);
  } catch (error) {
    alert(error);
  }
});

function getAnimes(keyword) {
  return fetch(`https://api.jikan.moe/v4/anime?q=${keyword}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((response) => {
      if (response.data.length === 0) {
        throw new Error('Anime not found!');
      }
      return response.data;
    });
}

function updateUI(animes) {
  let cards = '';
  animes.forEach((anime) => {
    cards += showAnimeCard(anime);
  });
  const animeContainer = document.querySelector('.anime-container');
  animeContainer.innerHTML = cards;
}

// Event binding
document.addEventListener('click', async function (e) {
  if (e.target.classList.contains('modal-detail-button')) {
    const dataid = e.target.dataset.id;
    const animeDetail = await getAnimeDetail(dataid);
    updateUIDetail(animeDetail);
  }
});

function getAnimeDetail(id) {
  return fetch(`https://api.jikan.moe/v4/anime/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((response) => response.data);
}

function updateUIDetail(anime) {
  const modalBody = document.querySelector('.modal-body');
  modalBody.innerHTML = showAnimeDetail(anime);
}

function showAnimeCard(anime) {
  return `<div class="col-md-4 my-3">
            <div class="card">
              <img src="${anime.images.webp.image_url}" class="card-img-top" alt="${anime.title}">
              <div class="card-body">
                <h5 class="card-title>${anime.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${anime.title_japanese}</h6>
                <p class="card-text">${anime.synopsis}</p>
                <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#animeDetailModal" data-id="${anime.mal_id}">Show Details</a>
              </div>
            </div>
          </div>`;
}

function showAnimeDetail(anime) {
  return `<div class="container-fluid">
            <div class="row">
              <div class="col-md-3">
                <img src="${anime.images.webp.image_url}" class="img-fluid" alt="${anime.title}">
              </div>
              <div class="col-md">
                <ul class="list-group">
                  <li class="list-group-item"><h4>${anime.title}</h4></li>
                  <li class="list-group-item"><strong>Japanese Title: </strong>${anime.title_japanese}</li>
                  <li class="list-group-item"><strong>Score: </strong>${anime.score}</li>
                  <li class="list-group-item"><strong>Episodes: </strong>${anime.episodes}</li>
                  <li class="list-group-item"><strong>Status: </strong>${anime.status}</li>
                  <li class="list-group-item"><strong>Aired: </strong>${anime.aired.string}</li>
                  <li class="list-group-item"><strong>Duration: </strong>${anime.duration}</li>
                  <li class="list-group-item"><strong>Rating: </strong>${anime.rating}</li>
                  <li class="list-group-item"><strong>Synopsis: </strong><br>${anime.synopsis}</li>
                </ul>
              </div>
            </div>
          </div>`;
}
