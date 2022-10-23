import axios from 'axios';


const API_URL = 'http://localhost:8081/';

class homePageService {
    getProducts() {
        try {
            return axios.get(API_URL + 'homePage');
        } catch (error) {
            return error
        }
    }

}

export default new homePageService();