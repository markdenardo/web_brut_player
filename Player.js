import React from 'react'
import ReactPlayer from 'react-player'

class Player extends React.Component {
  constructor(){
    super()
    this.state = {
      movies: [],
      currentMovie: 0
    }
  };

  getRandomInt(min, max) {
    min= Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getCurrentMovie = () => {
    if (this.state.movies.length > 0){
      let randomNumber = this.getRandomInt(0, this.state.movies.length);
      return this.state.movies[randomNumber].url;
    }
    return "";
  }

  componentDidMount = () => {
    const url = "https://web-brut-api.herokuapp.com/movies"
    fetch(url)
    .then(res => res.json())
    .then(movArr => {
      this.setState({
        movies: movArr
        },()=>console.log("movies",this.state.movies))
    })

  }
  render(){
    return <div>
    (click to start/stop; arrows to advance/rewind)
    <ReactPlayer url={this.getCurrentMovie()}playing/>
    (refresh to load new video 🌊)
    </div>
  }
}

export default Player;
