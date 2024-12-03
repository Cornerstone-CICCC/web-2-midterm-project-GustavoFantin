const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('#searchInput');

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGFlYjkyOGFlNGIxNGQ4OTNhMDZhZTU4NjRiMjUxMyIsIm5iZiI6MTczMzE1ODc4NC42NzYsInN1YiI6IjY3NGRlNzgwNTYyYjAzMGJiNWFkZTNiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qrJPwNG-BGxdoJU055eSD9taob2LnLT_-_xM8QEDIrk'
    }
  };
  
const fetchMovieData = async (id) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/multi?query=${id}&include_adult=false&language=en-US&page=1`,     //  "movieName" pelo nome ou ID do filme que você deseja buscar
      options);
    const data = await res.json();
    return data.results
}



const myHtml = async(queryTerm) => {    //manage de todas as funcoes que eu irei usar, tranferencias de dados etc 
  const movie_name = await fetchMovieData(queryTerm)
  console.log(movie_name)
  console.log(searchInput)
}

const displayHtml = async () => {
  
}



searchBtn.addEventListener('click', async (event) => {
  event.preventDefault()

  const queryTerm = searchInput.value
  
  myHtml(queryTerm)

})
