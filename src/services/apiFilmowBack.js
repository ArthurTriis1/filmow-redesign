import axios from 'axios';

export default axios.create({
    baseURL: "https://filmow-redesign-back.netlify.app/.netlify/functions/api"
})