const addMovieModal = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("header button");
const addMovieButton = addMovieModal.querySelector(".btn--success");
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const backdrop = document.getElementById("backdrop");

const userInputs = addMovieModal.querySelectorAll("input");
const movies = [];

const toggleBackDrop = () => {
  backdrop.classList.toggle("visible");
};

const clearMovieInput = () => {
    for (const usrInputs of userInputs) {
        usrInputs.value = "";
    }
}

const cancelAddMovie = () => {
  toggleMovieModal();
  clearMovieInput();
};


const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() == "" ||
    imageUrlValue.trim() == "" ||
    ratingValue.trim() == "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    console.log("Rating should not be below 1 or above 5");
  }
const newMovie = {
    title : titleValue,
    image : imageUrlValue,
    rating : ratingValue
};

movies.push(newMovie);
console.log(movies)
toggleMovieModal();
clearMovieInput();

};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
};

const backdropCLickHandler = () => {
  toggleMovieModal();
};
startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropCLickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovie);
addMovieButton.addEventListener("click", addMovieHandler);
