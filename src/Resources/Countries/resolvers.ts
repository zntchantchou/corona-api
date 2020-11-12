import config from "../../config/config"; 
import {ICountryInput} from "./types";
import got from "got";

export const getCountry = async({isoCode}: ICountryInput ) => {
  try{
    // console.log(config.apiUrl, isoCode);
    // TODO add isoCode validation 
    const {body} = await got(`${config.apiUrl}/countries/${isoCode}`); 
    return JSON.parse(body).data
  }catch(e) {
    console.log(e);
  }
}

export const getCountries = async() => {
  try {
    const {body} = await got(`${config.apiUrl}/countries`); 
    console.log(JSON.parse(body).data)
    return JSON.parse(body).data;
  } catch(e){
    console.log(e);
  }
}