import React, {Component} from 'react';
import fetchJsonp from 'fetch-jsonp';
import './App.css';
import Movie from './Movie';
import jQuery from 'jquery';



class App extends Component {
  state={
    limit:20
  }
  componentWillMount(){
    console.log("will mount");
    window.$ = window.jQuery = jQuery;
  }
  
  componentDidMount(){
   this._getMovies(20);
   window.addEventListener('scroll', this._infinitiScroll, true)
  }

  _renderMovies = () =>{
    const movies = this.state.movies.map(movie => {
      console.log(movie)
      return <Movie
       title={movie.title} 
       poster={movie.medium_cover_image}
       genres={movie.genres} 
       synopsis={movie.synopsis}
       key={movie.id}/>
    })
    return movies
  }

  _getMovies = async (newlimit) => {
    const movies = await this._callApi(newlimit)
    this.setState({
      limit:newlimit,
      movies
    })
  }

  _callApi = (limit) => {
    return fetch('http://yts.lt/api/v2/list_movies.jsonp?sort_by=download_count&limit='+limit)
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))

  }

  _infinitiScroll = () => {
    let scrollHeight= Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    let clientHeight = document.documentElement.clientHeight;

    if(scrollTop + clientHeight === scrollHeight && this.state.limit < 50){
      this._getMovies(this.state.limit + 10)
    }
  }
  _validateResponse(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
  

  render(){
    const {movies} = this.state;
    return (
      <div className={movies ? "App": "App--loading"}>
        {movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
