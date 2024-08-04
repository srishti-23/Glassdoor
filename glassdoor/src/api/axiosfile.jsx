import axios from "axios";


// export const baseApi=axios.create({
//     baseUrl:'https://jsearch.p.rapidapi.com',
//     headers:{
//        'x-rapidapi-key': 'c9aabb0847mshfb8c3e00e99677fp1ac30bjsn0b415fdfcc47',
//     'x-rapidapi-host': 'jsearch.p.rapidapi.com',  
//     'Content-Type':'application/json',
//     },
// })


export const baseapi=async(endpoint)=>{
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com${endpoint}`,
        params: {
          query: 'Node.js developer in New-York,USA',
          page: '1',
          num_pages: '1',
          date_posted: 'all'
        },
        headers: {
          'x-rapidapi-key': 'c9aabb0847mshfb8c3e00e99677fp1ac30bjsn0b415fdfcc47',
          'x-rapidapi-host': 'jsearch.p.rapidapi.com',
          'Content-Type':'application/json'
        }
      };
    try {
        const response = await axios.request(options);
        console.log(response.data);
    
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
