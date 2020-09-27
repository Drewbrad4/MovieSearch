import React, { Component } from "react";

export default class SearchMovies extends Component{

    searchLogic = async (e) => {
        e.preventDefault();
        console.log("Submitting");

        const query = "Jurassic Park"

        const url = `https://api.themoviedb.org/3/search/movie?api_key=5b517189a0a5351534c3313c224fc4b5&language=en-US&query=${query}&page=1&include_adult=false`;

        fetch(url);

        const res = await fetch(url);
        const data  = await res.json();
        console.log(data);
    }

    render(){
        return (
            <form className="form" onSubmit={this.searchLogic}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query"
                    placeholder="i.e. JAWS"/>
                <button className="button" type="submit">Search</button>
            </form>
        )
    }
}