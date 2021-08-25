import axios from 'axios';
import Cookies from 'js-cookie';

export const axiosInstance = axios.create({
    baseURL: 'https://api.spotify.com/v1/search',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
});
  

  export const SearchTracks = async (Input,filterType) => {
    const token = Cookies.get('spotifyAuthToken')
    
    const res = await axios.get(`https://api.spotify.com/v1/search?q=${Input}&type=${filterType}&market=IS&limit=20`, {
        headers: {
          'Accept': "application/json",
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      });
      if (res && res.data && res.data[filterType+'s'] && res.data[filterType+'s'].items.length > 0) {
        return res.data[filterType+'s'];
      } else {
        return null;
      };
};

export const LoadMore = async (query, filterType) => {
  const token = Cookies.get('spotifyAuthToken')
  
  const res = await axios.get(query, {
      headers: {
        'Accept': "application/json",
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    });
    if (res && res.data && res.data[filterType+'s'] && res.data[filterType+'s'].items.length > 0) {
      return res.data[filterType+'s'];
    } else {
      return null;
    };
};