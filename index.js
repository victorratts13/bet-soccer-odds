'use strict'

var unirest = require('unirest');

const baseURL = 'https://bet365-scoccer-odds.p.rapidapi.com';
const baseURI = 'bet365-scoccer-odds.p.rapidapi.com'

class soccerOddsAPI {
    constructor(API_KEY) {
        this.API_KEY = API_KEY
    }
    get(endPoint, Params){
        return new Promise((resolve, reject) => {
        if (!endPoint) return reject(new Error('Endpoint cannot be empty'))
   /**
   * Para obter a lista de todos os pontos de extremidade disponíveis, visite a documentação da API https://rapidapi.com/api-sports/api/api-football
   *
   * @param {string} endpoint - The endpoint name, i.e.: 'v2/fixtures/live', 'v2/fixtures/date/2020-02-06'
   * @param {string} params - Parâmetros de consulta a serem anexados à solicitação (se houver). Exemplos: {fuso horário: 'Europa / Londres'}
   * @return {Promise} Resposta API
   *
   */
            // console.log(baseURI);
            // console.log(baseURL);
            // console.log(endPoint);
            // console.log(Params);
            // console.log(this.API_KEY);
            //if(!endPoint){console.log('enpty endPoint')}
            
            var uri = `${baseURL}/${endPoint}/?${Params}`;
            //console.log(uri)
            unirest("GET", `${uri}`)
            .headers({
                "x-rapidapi-host": `${baseURI}`,
                "x-rapidapi-key": this.API_KEY
            })
            .end(function (res) {
                if (res.error) {
                    return reject(res.body)
                }
                if (res.statusCode != 200) {
                    return reject(res.body)
                }
                return resolve(res.body)
            });      

        })
    }
}


module.exports = soccerOddsAPI;