import axios from 'axios';
import authHeader from './authHeader';


const API_URL = 'http://localhost:8081/products2';

class probaApi {
    getProducts() {
        try {
            return axios.get(API_URL, { headers: authHeader() });
        } catch (error) {
            return error
        }
    }

}

export default new probaApi();