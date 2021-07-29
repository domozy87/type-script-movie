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

export default {
    fetchMovies: async (searchTerm, page) => {
        const endpoint = searchTerm ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}` : `${POPULAR_BASE_URL}&page=${page}`;

        return await (await fetch(endpoint)).json();
    },

    fetchMovie: async (movieId) => {
        const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;

        return await (await fetch(endpoint)).json();
    },

    fetchCredits: async (movieId) => {
        const creditEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;

        return await (await fetch(creditEndpoint)).json();
    },
}