import axios from 'axios';

axios.defaults.baseURL = 'http://office.e-lingcloud.com:51401';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default axios;
