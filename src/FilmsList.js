import React, { PureComponent } from 'react';

class FilmsList extends PureComponent {
    render() {
        return (<div>
            {this.props.films.map(film => {
                return (<div key={film.episode_id}>
                    <div>{film.title}</div>
                    <div>{film.director}</div>
                </div>)
            })}
        </div>)
    }
}

export default FilmsList;
