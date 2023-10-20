const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTc5NDcwYzIyM2U2NWU4MzUwOTZmNjRlNzA0MTQwZiIsInN1YiI6IjY1MmYzNzRhMGNiMzM1MTZmZWM5Y2U0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SRyc6umjQRslcbrDGmgDP1YkorROAWFTKq0TBmGnrsg'
  }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => {
    if (!response.ok) {
      throw new Error('네트워크 오류');
    }
    return response.json(); // JSON 데이터 가져오기
  })
  //영화 리스트
  .then(data => {
    const results = data.results;

    //변수로 지정하는 방법?
    results.forEach(movie => {
      const item = document.createElement("div");
      const title = document.createElement('h4');
      const text = document.createElement('p');
      const poster = document.createElement('img');

      item.appendChild(poster)
      item.appendChild(title)
      item.appendChild(text)

      poster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      title.innerHTML = `${movie.title}`;
      text.innerHTML = `${movie.overview} <br><br>⭐${movie.vote_average}`;

      const container = document.getElementsByClassName("container")[0];
      container.appendChild(item)

      item.classList.add('card');
      title.classList.add('title');
      poster.classList.add('poster');
    });

    const searchInput = document.getElementById('search');
    const searchBtn = document.getElementById('searchBtn');

    searchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const val = searchInput.value.toLowerCase();
      const movieCards = document.querySelectorAll('.card');

      movieCards.forEach(card => {
        const title = card.querySelector('.title').textContent.toLowerCase(); // 카드 안의 타이틀 요소 가져오기
        if (title.includes(val)) {
          card.style.display = 'block'; // 일치하면 카드 보이기
        } else {
          card.style.display = 'none'; // 일치하지 않으면 카드 숨기기
        }
      });
    });

  })

  .catch(error => {
    console.error('오류 발생:', error);
  });

  document.querySelector('.nav-search').addEventListener('click', function(){
    window.scrollTo(0, 200, window.innerHeight);
  })

  document.querySelector('.nav-movielist').addEventListener('click', function(){
    window.scrollTo(0, 500, window.innerHeight);
  })



