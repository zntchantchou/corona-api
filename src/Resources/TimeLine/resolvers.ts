import config from "../../config/config"; 
import got from "got";

export const getTimelines = async() => {
  try{
    const {body} = await got(`${config.apiUrl}/timeline`);
    return JSON.parse(body).data
  }catch(e) {
    console.log(e);
  }
}
