import React, { useState, useEffect }from 'react';
import axios from 'axios';
import { Route, useRouteMatch, useParams } from "react-router-dom";

import Movie from './Movie';
import MovieList from './MovieList';

export default function MovieCard (props) {
  const routeMatch = useRouteMatch();
  const params = useParams();

  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies") // Study this endpoint with Postman
        .then((response) => {
          // Study this response with a breakpoint or log statements
          console.log("Movies:", response.data);
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data);
        })
        .catch((error) => {
          console.error("Server Error", error);
        });
    };
    getMovies();
  }, []);

  

}
