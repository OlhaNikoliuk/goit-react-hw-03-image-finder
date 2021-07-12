const API_KEY = "21094416-818b6ee494a1708108f1a0838";
const API_URL = "https://pixabay.com/api/";

function fetchImages(searchQuery, page) {
  return fetch(
    `${API_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    console.log(response);
    return Promise.reject(new Error("Can`t find image with entered name"));
  });
}

export default fetchImages;
