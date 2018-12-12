import React, { PureComponent } from 'react';

class FilmsList extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <div><input type="text" name="filter" onChange={this.props.onFilterFilms}/></div>
            {this.props.films.map(film => {
                return (<div>
                    <div>{film.title}</div>
                    <div>{film.director}</div>
                </div>)
            })}
        </div>)
    }
}

export default FilmsList;
