import React, { Component } from "react";
import MovieCard from './MovieCard.js'

export default class SearchMovies extends Component{
    constructor(props){
        super(props)
        this.state = {
            query: "", 
            movies: [],
            placeholder: "i.e. JAWS"
        }
    }

    searchLogic = async (e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=5b517189a0a5351534c3313c224fc4b5&language=en-US&query=${this.state.query}&page=1&include_adult=false`;

        fetch(url);

        try{
            const res = await fetch(url);
            const data  = await res.json();
            let results = data.results
            if(results == null){
                let errorMessage = "Please enter a movie."
                this.setState({placeholder: errorMessage})
            }
            this.setState({movies: results})
        }catch(err){
            console.error(err);
        }
    }

    setQuery = (e) => {
        let newQuery = e.target.value
        this.setState({query: newQuery})
    }

    render(){
        return (
            <>
                <form className="form" onSubmit={this.searchLogic}>
                    <label className="label" htmlFor="query">Movie:</label>
                    <input className="input" type="text" name="query"
                        placeholder={this.state.placeholder}
                        value={this.state.query}
                        onChange={this.setQuery}/>
                    <button className="button" type="submit">Search</button>
                </form>
                <div className="card-list">
                {this.state.movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} />
                ))}
                </div> 
            </>
        )
    }
}