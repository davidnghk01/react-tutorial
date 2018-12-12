import React, { Component } from 'react';
import FilmsList from './FilmsList';
import Loading from './Loading';


class FilmsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            films: [],
            filter: ''
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
            films: data['results']
        })
    }

    render() {
        if (this.state.loading) {
            return (<Loading/>)
        }
        const {films, filter} = this.state;
        const filteredFilms = filter? films.filter(film => film.title.includes(filter) || film.director.includes(filter)) : films;
        return <><input type="text" name="filter" onChange={this.filterFilms}/>
                <FilmsList films={filteredFilms}/>
            </>;
    }

    filterFilms(event) {
        event.preventDefault();
        const value = event.target.value;
        this.setState({
            filter: value
        })
    }

}

export default FilmsContainer;
