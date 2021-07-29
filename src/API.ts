import {
    SEARCH_BASE_URL,
    POPULAR_BASE_URL,
    API_KEY,
    API_URL,
} from './config';

// const defaultConfig = {
//     method: 'POST',
//     header: {
//         'Content-Type': 'application/json'
//     }
// };

// Types
export type Movie = {
    backdrop_path: string;
    id: number;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    title: string;
    vote_average: number;
    vote_count: number;
    budget: number;
    runtime: number;
    revenue: number;
};

export type Movies = {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
};

export type Cast = {
    character: string;
    credit_id: string;
    name: string;
    profile_path: string;
};

export type Crew = {
    job: string;
    name: string;
    credit_id: number;
};

export type Credits = {
    id: number;
    cast: Cast[];
    crew: Crew[];
};

export default {
    fetchMovies: async (searchTerm: string, page: number): Promise<Movies> => {
        const endpoint: string = searchTerm ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}` : `${POPULAR_BASE_URL}&page=${page}`;

        return await (await fetch(endpoint)).json();
    },

    fetchMovie: async ( movieId: number ): Promise<Movie> => {
        const endpoint: string = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;

        return await (await fetch(endpoint)).json();
    },

    fetchCredits: async ( movieId: number ): Promise<Credits> => {
        const creditEndpoint: string = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;

        return await (await fetch(creditEndpoint)).json();
    },
}