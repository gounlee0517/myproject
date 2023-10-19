const apiKey = '8979470c223e65e835096f64e704140f';
const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;

const options = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
  }
};

fetch(apiUrl, options)
  .then(response => {
    if (!response.ok) {
      throw new Error('네트워크 오류');
    }
    return response.json(); // JSON 데이터 가져오기
  })
  .then(data => {
    const results = data.results;
    // HTML에서 이미 존재하는 item을 가져오는 것 => 이렇게 하면 item을 너무 많이 만들어야 함
    const movieList = document.getElementsByClassName('item');
    console.log(movieList[0]);

    // results = 실제로 가져온 데이터 10 => 10개 item을 만들면 됨
    results.forEach(movie => {
      const item = document.createElement("div"); // <div></div>
      const title = document.createElement('h4'); // <h4></h4>
      const text = document.createElement('p');
      const poster = document.createElement('img');

      title.innerHTML = `${movie.title}`;
      text.innerHTML = `${movie.overview} <br><br>⭐${movie.vote_average}`;                      
      // <h4><b>영화제목:</b> ${movie.title}, <b>평점:</b> ${movie.vote_average}</h4>
      // movieList[0].appendChild(listItem);
      // item.innerHTML = item
      item.appendChild(poster)
      item.appendChild(title)
      item.appendChild(text)
      // <div><h4><b>영화제목:</b> ${movie.title}, <b>평점:</b> ${movie.vote_average}</h4></div>

      const container = document.getElementsByClassName("container")[0]
      // <div class="container"></div>
      container.appendChild(item)
    });
  })
  .catch(error => {
    console.error('오류 발생:', error);
  });

