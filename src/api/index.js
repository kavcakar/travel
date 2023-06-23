import axios from 'axios';

const URL ='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
   
  },
  headers: {
    'X-RapidAPI-Key': '37e1436a60msh19f84678f4445dap15a989jsnb54be3770a19',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

export const getPlacesData = async () => {
    try {
         const {data : {data} } = await axios.get(URL, options);

         return data;
    } catch (error) {
        console.log(error);
    }
}