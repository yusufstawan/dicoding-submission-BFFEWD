import "../component/app-bar.js";
import "../component/search-bar.js";
import "../component/film-list.js";
import "../component/footer-bar";
import DataSource from "../data/data-source.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const filmListElement = document.querySelector("film-list");

  const searchClicked = () => {
    DataSource.searchFilm(searchElement.value).then(renderResult).catch(fallbackResult);
  };

  const renderResult = (result) => {
    filmListElement.films = result;
  };

  const fallbackResult = (message) => {
    filmListElement.renderError(message);
  };

  searchElement.clickEvent = searchClicked;
};

export default main;
