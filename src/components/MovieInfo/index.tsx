import React from 'react';

// Styles
import { Wrapper, Content, Text } from './MovieInfo.styles';

// Components
import Thumb from '../Thumb';

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';

// Image
import NoImage from '../../images/no-image.jpeg';

// API
import { MovieState } from '../../hooks/useMovieFetch';

// Types
type Props = {
    movie: MovieState;
};

const MovieInfo: React.FC<Props> = ( { movie } ) => (
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumb
                image={
                    movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage
                }
                clickable={false}
                movieId={movie.id}
            />
            <Text>
                <h1>{movie.title}</h1>
                <h3>PLOT</h3>
                <p>{movie.overview}</p>
                <div className="rating-directors">
                    <div>
                        <h3>RATING</h3>
                        <div className="score">{movie.vote_average}</div>
                    </div>
                    <div className="director">
                        <h3>DIRECTOR{ movie.directors.length > 1 ? 'S' : '' }</h3>
                        {movie.directors.map( director => (
                            <p key={director.credit_id}>{director.name}</p>
                        ) )}
                    </div>
                </div>
            </Text>
        </Content>
    </Wrapper>
);

export default MovieInfo;