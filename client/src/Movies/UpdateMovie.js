import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import MovieList from "./MovieList";
// import {reducer as formReducer} from 'redux-form/immutable';
// const reducer = combineReducers
// {

//     form: formReducer
// }
// import {Field, reduxForm} from 'redux-form/immutable';

/* your component */
// const initialmovie = {
//   title: '',
//   director: '',
//   metaScore: 0,
//   actor: '',
//   stars: []
// };

// const initialItem = {
//   name: '',
//   price: '',
//   imageUrl: '',
//   description: '',
//   shipping: ''
// };

// class UpdateMovie extends Component {
  // state = {
  //   title: '',
  //   director: '',
  //   metaScore: 0,
  //   actor: '',
  //   stars: []
  // };
const UpdateMovie = (props) => {
  const [movieTitle,setTitle] = useState()
  const [movieDirector,setDirector] = useState()
  const [movieMetascore,setMetascore] = useState()

console.log('on entering upatemovie props',props)

const   handleAddstars = () => {
    const { stars } = this.state;
    stars.push(this.state.actor);
    this.setState({ actor: '', stars });
  };

  const  handleTitleInput = e => {
    e.persist();
    e.preventDefault();
      console.log('e.target.value',(e.target.value))
      setTitle({ [e.target.name]: e.target.value })
  console.log('movieTitle',movieTitle)
    };
  
    const  handleDirectorInput = e => {
      e.persist();
      e.preventDefault();
        console.log('e.target.value',(e.target.value))
        setDirector({ [e.target.name]: e.target.value })
    console.log('movieDirector',movieDirector)
      };
      const  handleMetascoreInput = e => {
        e.persist();
        e.preventDefault();
          console.log('e.target.value',(e.target.value))
          setMetascore({ [e.target.name]: e.target.value })
      console.log('movieMetascore',movieMetascore)
        };
      
    const  handleSubmitMovie = (e) => {
  e.preventDefault();
  console.log("props0",props)
  console.log("movieTitle, movieDirector",movieTitle, movieDirector)
  const { stars, id } = props.state.movie;
  const title = movieTitle ? movieTitle.title : props.state.movie.title
  const director = movieDirector ? movieDirector.director : props.state.movie.director
  const metascore = movieMetascore ? movieMetascore.metascore : props.state.movie.metascore
  const newMovie =
    // {id: props.state.movie.id,
    // title: "The Godfather", director: "Francis Ford Coppola", metascore: 100, stars: Array(3)}
    { stars, title, metascore, director, id };
    console.log("newMovie",newMovie)
  

    const saveMovie = axios
      .put(`http://localhost:5000/api/movies/${props.state.movie.id}`, newMovie)
      .then(response => {
        console.log('put response',response)
        // ///////
        // axios
        // .get("http://localhost:5000/api/movies")
        // .then(res => 
        //   {
        //     console.log('movielist did mount',res.data)
        //   // this.setState({ movies: res.data })
        // })
        // .catch(err => console.log(err.response));
    
  
        // //////

console.log('history',props)
        props.propp.history.push('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  // render() {
    console.log('updatemovie',props)
if (!props.state) {return <div></div> } else return (
<div>

        <input
          type="text"
          placeholder="Movie Title"
          defaultValue={props.state.movie.title}
          onChange={handleTitleInput}
          name="title"
        />
        <input
          type="text"
          placeholder="Director"
          defaultValue={props.state.movie.director}
          onChange={handleDirectorInput}
          name="director"
        />
        <input
          type="text"
          placeholder="Meta Score"
          defaultValue={props.state.movie.metascore}
          onChange={handleMetascoreInput}
          name="metascore"
        />
        {/* <input
          type="text"
          placeholder="..Add actor"
          value={props.state.movie.actor}
          onChange={handleTextInput}
          name="actor"
        /> */}
        {/* <button onClick={handleAddstars}>Add Actor to List</button> */}
        <button onClick={handleSubmitMovie}>Update Movie</button>
        {/* {props.state.stars.map(actor => {
          return <div>{actor}</div>;
        })} */}
   {/* <Link to={`/`}>
      <MovieList />
    </Link> */}
 
      </div>

);
  }


export default UpdateMovie;
