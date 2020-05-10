const latestNotifications = require('./scraper').latestNotifications;
const topicScraper =require('./scraper').topicScraper;
const stateWiseScraper=require('./scraper').stateWiseScraper;
const signale = require('signale');
var log = signale.scope('handler:global');


const stateCodes =require('../../data/freeJobAlertStateMap.json');





// var state = stateCodes.filter(function(item) {
//     return item.code == 'AP';
// })[0];
// signale.log(state.link);




// stateWiseScraper("http://www.freejobalert.com/wb-government-jobs/").then((data)=>{
//     log.log(data);
// }).catch((err)=>{
//     log.error(err);
// })



// latestNotifications("http://www.freejobalert.com/")
//     .then((data) => {
//         log.await("Data printing started");
//         log.log(data);
//         log.complete("Data printing ended");
//     })
//     .catch((err) => {
//         log.error("Empty data");
//     });


// topicScraper('http://www.freejobalert.com/government-jobs/',"",4)
//     .then((data)=>{
//         log.await("Data printing started");
//         log.log(data);
//     })
//     .catch((err)=>{
//         log.error("Empty data");
//     })






    





