import axios from 'axios';

export class BaseService {
    async getData(url) {
        const { data } = await axios.get(url);
        return data;
    }
}


/* export class BaseService {
    async getData(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }
    }
}
 */