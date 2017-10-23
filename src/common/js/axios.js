import axios from 'axios';

axios.defaults.baseURL = 'http://novel.juhe.im';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default axios;
