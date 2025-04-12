const express=require('express')
const router=express.Router();
const axios=require('axios')


router.get('/weather', async function(req,res){
    const city=req.query.city

    if(!city){
        return res.status(400).json({error:"city is required"})
    }

    try{
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${process.env.API_KEY}&units=metric`
      const answer=await axios.get(url)
      const ans=answer.data;
      
      const weatherData = {
        temperature: ans.main.temp,
        condition: ans.weather[0].main,
        icon: `http://openweathermap.org/img/wn/${ans.weather[0].icon}@2x.png`,
        humidity: ans.main.humidity,
        windSpeed: ans.wind.speed,
    };
    res.json(weatherData);

    }
    catch(err){
        if (err.response && err.response.status === 404) {
            res.status(404).json({ error: 'City not found' });
        } else {
            res.status(500).json({ error: 'Something went wrong' });
        }
    }
})
module.exports=router;