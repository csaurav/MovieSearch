const fetchInitialMovieList = (dispatch) => {
  return new Promise((resolve, reject) => {
    const apiKey = 'afa012a7';
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=a`;

    const reqOptions = {
      method: 'GET',
    };

    fetch(url, reqOptions)
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(`JSON response: ${jsonResponse}`);
        // dispatch(movieActions.loadInitialMovieList(jsonResponse));
        resolve(jsonResponse);
      })
      .catch((error) => {
        // console.log(`error: ${JSON.stringify(error)}`);
        reject(error);
      });
  });
};

const NWmovie = {
  fetchInitialMovieList,
};

export default NWmovie;
