import React, { Component } from 'react'


class MovieDetail extends Component {


  render() {

    const baseURL = "http://image.tmdb.org/t/p/w1280/"
    const result = this.props.movies.map(movie=>{
    <div>
      <img src={baseURL+movie.backdrop_path}/>
      <h2>{movie.title}</h2>
      <h2>Overview:</h2>
      <p>{movie.overview}</p>
    </div>

    })


    return (
      <div>
        {result}
      </div>
    )
  }
}

export default MovieDetail
