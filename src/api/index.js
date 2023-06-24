import axios from 'axios';

const URL ='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'





export const getPlacesData = async (sw, ne) => {
    try {
         const {data : {data} } = await axios.get(URL, {
           params: {
             bl_latitude: 'sw.lat',
             tr_latitude: 'ne.lat',
             bl_longitude: 'sw.lng',
             tr_longitude: 'ne.lng',
            
           },
           headers: {
             'X-RapidAPI-Key': '37e1436a60msh19f84678f4445dap15a989jsnb54be3770a19',
             'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
           }
         
         
       });
          
            
            

         return data;
    } catch (error) {
        console.log(error);
    }
}