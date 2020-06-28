![logo](https://raw.githubusercontent.com/victorratts13/bet365-soccer-odds/master/assets/img/LOGO-SOCCER-ODD.png)
![version](https://img.shields.io/badge/Version-1.0.1-green) ![envire](https://img.shields.io/badge/Javascript-NPM-red)

## Framework For bet365-soccer-odds

Framework for rapidapi (bet365-soccer-odds) final version for obtaining live game data.

### install
```sh
~$ npm install bet365-soccer-odds
```

### Use

```js
const soccerOdds = require('bet-soccer-odds');

let soccer = new soccerOdds('Your_RAPIDAPI_KEY');

soccer.get('v1/events/inplay', 'sport_id=1').then((api) => {
    console.log(api)
}).catch((err) => {
    console.log('Err: '+err.error)
})
```

### Returns

```js
{
  success: 1,
  pager: { page: 1, per_page: 1000, total: 6 },
  results: [
    {
      id: '2494915',
      sport_id: '1',
      time: '1593309600',
      time_status: '1',
      league: [Object],
      home: [Object],
      away: [Object],
      ss: '1-4',
      timer: [Object],
      scores: [Object],
      extra: [Object],
      bet365_id: '90614505'
    },
    {
      id: '2492706',
      sport_id: '1',
      time: '1593310268',
      time_status: '1',
      league: [Object],
      home: [Object],
      away: [Object],
      ss: '1-2',
      timer: [Object],
      scores: [Object],
      extra: [Object],
      bet365_id: '90555612'
    },
    {
      id: '2493779',
      sport_id: '1',
      time: '1593311400',
      time_status: '1',
      league: [Object],
      home: [Object],
      away: [Object],
      ss: '3-0',
      timer: [Object],
      scores: [Object],
      extra: [Object],
      bet365_id: '90521103'
    },
    {
      id: '2493777',
      sport_id: '1',
      time: '1593313200',
      time_status: '1',
      league: [Object],
      home: [Object],
      away: [Object],
      ss: '0-0',
      timer: [Object],
      scores: [Object],
      extra: [Object],
      bet365_id: '90521109'
    },
    {
      id: '2493935',
      sport_id: '1',
      time: '1593315600',
      time_status: '1',
      league: [Object],
      home: [Object],
      away: [Object],
      ss: '3-2',
      timer: [Object],
      scores: [Object],
      extra: [Object],
      bet365_id: '90599211'
    },
    {
      id: '2493936',
      sport_id: '1',
      time: '1593315600',
      time_status: '1',
      league: [Object],
      home: [Object],
      away: [Object],
      ss: '2-2',
      timer: [Object],
      scores: [Object],
      extra: [Object],
      bet365_id: '90599218'
    }
  ]
}
```

#### Contacts: 
>- Twitter @RattsVictor 
>- Telegram @VictorRatts
>- email: victor.ratts13@gmail.com

##### See More:

[RapidAPI - bet365-soccer-odds](https://rapidapi.com/1394697259/api/bet365-scoccer-odds)