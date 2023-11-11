import axios from "axios";

const BASE_URL ='https://youtube-v31.p.rapidapi.com'

const options = {
    method: 'GET',
    url: BASE_URL,
    params: {
      maxResults: '50',
      
    },
    headers: {
      'X-RapidAPI-Key': '76eafce388msh1090b6fd4bcf59ap1b68d8jsn11b45d34f8d6',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchApi = async (url) =>{
    const response = await axios.get(`${BASE_URL}/${url}`,options)

    return response.data


    
  }