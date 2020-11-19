
export default class LocationService {
  static async getIPLocation(){
    const url = `http://api.ipstack.com/check?access_key=${process.env.LOCATION_KEY}`;
      return fetch(url)
      .then(function(response){
        if(!response.ok){
          throw Error(response.status);
        }
        return response.json();
      })
      .catch(function(error){
        return Error(error);
      })
  }
}