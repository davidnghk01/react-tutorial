import React, { Component } from 'react';
import { connect } from "react-redux";
import FilmsList from './FilmsList';
import Loading from './Loading';

import {fetchFilms, filterFilm} from "./actions";

class FilmsContainer extends Component {
    componentDidMount() {
        this.props.fetchFilms()
    }
    componentWillUnmount() {
        //
    }

    onChange = (event) => {
        event.preventDefault();
        const value = event.target.value;
        this.props.filterFilm(value);
    };

    render() {
        const {films} = this.props;
        if (!films) {
            return (<Loading/>)
        }
        return <><input type="text" name="filter" onChange={this.onChange}/>
                <FilmsList films={films}/>
            </>;
    }
}

const getFilteredFilms = (state) => {
    const {films, filterFilms:filter} = state;
    return films.filter(film => film.title.includes(filter) || film.director.includes(filter));
};

const mapStateToProps = (state, ownProps) => ({ films: getFilteredFilms(state) });

const mapDispatchToProps = {
    filterFilm,
    fetchFilms
};

export default connect(mapStateToProps,
    mapDispatchToProps)(FilmsContainer);
