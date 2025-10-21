import axios from 'axios';

const API_KEY = '52724963-1b39cb743cbbccbbd6e65dea0';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page) {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                page,
                per_page: 15,
            }
        });

        if (!response.data.hits) {
            throw new Error('Unexpected API response format');
        }

        return response.data;
    }

    catch (error) {
        console.error('Error:', error);
        throw error;
    }
}



