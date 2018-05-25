import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'https://burger-builder-bd02c.firebaseio.com/'
})

export default instance;