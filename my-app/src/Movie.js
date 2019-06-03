import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Movie.css';


class Movie extends Component{
   

    render(){
        console.log(this.props);
        return(
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class MoviePoster extends Component{
    render(){
        console.log(this.props)
        return(
        <img src={this.props.poster} alt="Movie Poster"/>)
    }
}
export default Movie