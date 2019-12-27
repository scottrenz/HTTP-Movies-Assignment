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
const DeleteMovie = (props) => {

console.log('on entering upatemovie props',props)

      
    const  handleSubmitMovie = (e) => {
  e.preventDefault();
  console.log("props0",props)
  const id  = props.state.movie.id;
    
    const saveMovie = axios
      .delete(`http://localhost:5000/api/movies/${props.state.movie.id}`)
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
        {/* <button onClick={handleAddstars}>Add Actor to List</button> */}
        <button onClick={handleSubmitMovie}>Delete Movie</button>
        {/* {props.state.stars.map(actor => {
          return <div>{actor}</div>;
        })} */}
   {/* <Link to={`/`}>
      <MovieList />
    </Link> */}
 
      </div>

);
  }


export default DeleteMovie;
