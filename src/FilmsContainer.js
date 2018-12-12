import React, { Component } from 'react';
import FilmsList from './FilmsList';
import Loading from './Loading';


class FilmsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            films: [],
            cached_films: []
        };
        this.filterFilms = this.filterFilms.bind(this);
    }

    componentDidMount() {
        this.fetchStarwarFlims()
    }

    async fetchStarwarFlims() {
        const res = await fetch("https://swapi.co/api/films/");
        const data = await res.json();
        this.setState({
            loading: false,
            films: data['results'],
            cached_films: data['results']
        })
    }

    render() {
        if (this.state.loading) {
            return (<Loading/>)
        }
        return <FilmsList films={this.state.films} onFilterFilms={this.filterFilms}/>
    }

    filterFilms(event) {
        event.preventDefault();
        const value = event.target.value;
        if (value) {
            const all_films = this.state.cached_films;
            this.setState({
                films: all_films.filter(film => film.title === value || film.director === value)
            });
        }
    }

}

export default FilmsContainer;
