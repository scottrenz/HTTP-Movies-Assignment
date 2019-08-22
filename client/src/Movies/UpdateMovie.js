import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
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
const [movieData,setMovie] = useState()

console.log('on entering upatemovie props',props)

const   handleAddstars = () => {
    const { stars } = this.state;
    stars.push(this.state.actor);
    this.setState({ actor: '', stars });
  };

const  handleTextInput = e => {
  e.preventDefault();
    console.log('e.target.value',(e.target.value))
    setMovie({ [e.target.name]: e.target.value })
console.log('movieData',movieData)
  };

const  handleSubmitMovie = (e) => {
  e.preventDefault();
  
    const { stars, title, metaScore, director } = props.state.movie;
    const newMovie = { stars, title, metaScore, director };
    const saveMovie = axios
      .put(`http://localhost:5000/api/movies/${props.state.movie.id}`, newMovie)
      .then(response => {
        this.props.history.push('/');
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
          onChange={handleTextInput}
          name="title"
        />
        <input
          type="text"
          placeholder="Director"
          value={props.state.movie.director}
          onChange={handleTextInput}
          name="director"
        />
        <input
          type="text"
          placeholder="Meta Score"
          value={props.state.movie.metaScore}
          onChange={handleTextInput}
          name="metaScore"
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
      </div>

);
  }


export default UpdateMovie;
