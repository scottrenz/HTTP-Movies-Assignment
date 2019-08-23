import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateMovie from "./Movies/UpdateMovie";
import DeleteMovie from "./Movies/DeleteMovie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />

{/* <Route
        path="/update-item/:id"
        render={props => (
          <UpdateForm {...props} items={items} updateItems={setItems} />
        )}
      /> */}


{/* <Route path="/update-movie/:id" component={UpdateMovie} /> */}

<Route
        path="/update-movie/:id"
        render={props => {
          return <UpdateMovie {...props} movies={MovieList.movies} setMovies={MovieList.setMovies} />;
        }}
      />
      <Route
        path="/delete-movie/:id"
        render={props => {
          return <DeleteMovie {...props} movies={MovieList.movies} setMovies={MovieList.setMovies} />;
        }}
      />
    </>
  );
};

export default App;
