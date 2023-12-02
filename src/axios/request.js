import axios from "axios";


export function getUniversity (){
   return axios.get('http://universities.hipolabs.com/search?country=United+States ');
} 
