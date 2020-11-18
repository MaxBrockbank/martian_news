export default class marsRoverCamera{
  static async getRoverPhoto(sol) {
    try {
      const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${process.env.NASA_KEY}&camera=mast&sol=${parseInt(sol)}&page=1`);
      if(!response.ok) {
        throw Error(response.statusText);
      }
      console.log(response);
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}