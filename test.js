const soccerOdds = require('./index');

let soccer = new soccerOdds('RAPIDAPI_KEY');

soccer.get('v1/events/inplay', 'sport_id=1').then((api) => {
    console.log(api)
}).catch((err) => {
    console.log('Err: '+err.error)
})