import React from 'react'
import ReactPlayer from 'react-player'

class Player extends React.Component {
  constructor(){
    super()
    this.state = {
      error: null,
      isLoaded: false,
      movies: [],
      movie:{}
     
    };
  };

  getRandomInt(min, max) {
    min= Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getCurrentMovie = () => {
    if (this.state.movies.length > 0){
      let randomNumber = this.getRandomInt(0, this.state.movies.length);
      return this.state.movies[randomNumber];
      
    }
    return "";
  }

  componentDidMount = () => {
    fetch("https://web-brut-api.herokuapp.com/movies")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            movies: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render(){
    const { error, isLoaded, movies } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded && movies.length == 0) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="Player">
          (click to start/stop; arrows to advance/rewind)
          <ReactPlayer url={this.getCurrentMovie().url}/>
        (refresh to load new video 🌊)
        </div>
      );
    }
  }
}

export default Player;
