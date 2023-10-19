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
  .then(data => {
    const results = data.results;
    const movieList = document.getElementsByClassName('item');

    results.forEach(movie => {
      const item = document.createElement("div");
      const title = document.createElement('h4');
      const text = document.createElement('p');
      const poster = document.createElement('img');

      poster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      title.innerHTML = `${movie.title}`;
      text.innerHTML = `${movie.overview} <br><br>⭐${movie.vote_average}`;
      
      item.appendChild(poster)
      item.appendChild(title)
      item.appendChild(text)

      const container = document.getElementsByClassName("container")[0]
      container.appendChild(item)
    });

  })
  .catch(error => {
    console.error('오류 발생:', error);
  });


//1. 검색어를 담는 변수를 만든다
//2. 이 변수를 데이터 안에서 찾는다
//3. 데이터를 찾아 일치하는 영화가 있으면 그 영화만 보여준다 or 
//4. 일치하는 영화가 없으면 빈 창 보여주기 