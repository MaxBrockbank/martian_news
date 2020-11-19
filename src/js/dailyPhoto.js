export default class APODService{

  static async getAPOD(date){
    try{
      const response = await fetch(`https://api.nasa.gov/planetary/apod?date=${date}&hd=true&api_key=${process.env.NASA_KEY}`);
      if(!response.ok){
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error){
      return error.message;
    }
  }

}