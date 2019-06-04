import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css';


function Movie({title, poster, genres, synopsis}){
    return(
        <div className="Movie">
            <div className="Movie_Colums">
            <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie_Colums">
                <h1>{title}</h1>
                <div className="Movie_Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index}/>)}
                </div>
                <p className="Movie_Synopsis">
                <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    />   
                </p>
            </div>
        </div>
    )
}

function MoviePoster({poster, alt}){
    return(
        <img src={poster} alt={alt} title={alt} className="Movie_Poster"/>
    )
}

function MovieGenre({genre}){
    return(
        <span className="Movie_Genre">{genre}</span>
    )
}



export default Movie