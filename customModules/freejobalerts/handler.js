const latestNotifications = require('./scraper').latestNotifications;
const topicScraper =require('./scraper').topicScraper;
const signale = require('signale');
var log = signale.scope('handler:global')



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



    





