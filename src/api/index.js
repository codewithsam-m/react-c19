import React from 'react'
import axios from 'axios';
import { CountryPicker } from '../components';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async( country ) => {
    let changeableUrl = url;

    if (country){
        changeableUrl = url + '/countries/' + country;
        console.log(changeableUrl);
    }

    try{

        //destructure
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(changeableUrl);
        
        return { confirmed, recovered, deaths, lastUpdate };
    }
    catch (error){

    }
}

export const fetchDailyData = async() => {
    try{

        //destructure
        const { data } = await axios.get('https://covid19.mathdro.id/api/daily'); 
        
        const modifiedData = data.map((dailyData) => ({
            confirmed : dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));
        
        return modifiedData;
    }
    catch (error){

    }
}

export const fetchCountries = async() => {
    try{

        //destructure
        const { data: { countries } } = await axios.get('https://covid19.mathdro.id/api/countries'); 
        
        return countries.map((country) => country.name);
    }
    catch (error){

    }
}
