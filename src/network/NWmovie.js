import Config from '../config';
const searchMovie = (searchString) => {
  return new Promise((resolve, reject) => {
    const url = `${Config.API_HOST}${Config.API_KEY}&t=${searchString}`;

    const reqOptions = {
      method: 'GET',
    };

    fetch(url, reqOptions)
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(`search json response: ${JSON.stringify(jsonResponse)}`);
        resolve(jsonResponse);
      })
      .catch((error) => {
        console.log(`search error: ${JSON.stringify(error)}`);
        reject(error);
      });
  });
};

// const fetchInitialMovieList = () => {
//   return new Promise((resolve, reject) => {
//     const url = `${Config.API_HOST}${Config.API_KEY}&t=${searchString}`;

//     const reqOptions = {
//       method: 'GET',
//     };

//     fetch(url, reqOptions)
//       .then((response) => response.json())
//       .then((jsonResponse) => {
//         console.log(`JSON response: ${jsonResponse}`);

//         resolve(jsonResponse);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// };

const NWmovie = {
  // fetchInitialMovieList,
  searchMovie,
};

export default NWmovie;
