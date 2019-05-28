const request = require('request');
const cheerio = require('cheerio');
//const log = require('signale');
const signale = require('signale');

function topicScraper(URL, topic,tableNO) {
    var log = signale.scope("scraper:TopicScraper");
    const options = {
        url: URL,
        headers: {
            'User-Agent': 'request'
        }
    };
    var results = [];
    return new Promise((resolve,reject)=>{
        request.get(options,(error,response,html)=>{
            if(error)
            {
                log.error("could not fetch the source");
                reject(error);
            }
            else if(!error && response.statusCode === 200)
            {
                
                log.success("successfully fetched");
                const $ = cheerio.load(html);
                var allPosts = $('div .post');
                var topic = $(allPosts).find('table').eq(tableNO);
                // log.log(topic.html());
                var entries = $(topic).find('tr').toArray();
               // log.log(entries.length);

                entries.forEach((el,index)=>{
                    if(index===0) return; //to skip the first row which contains empty data
                    var result ={
                        postDate:"",
                        postBoard:"",
                        postName:"",
                        qualification:"",
                        advtNo:"",
                        lastDate:"",
                        link:""
                    }
                    result.postDate = $(el).find('td').eq(0).text();
                    result.postBoard=$(el).find('td').eq(1).text();
                    result.postName=$(el).find('td').eq(2).text();
                    result.qualification = $(el).find('td').eq(3).text();
                    result.advtNo = $(el).find('td').eq(4).text();
                    result.lastDate = $(el).find('td').eq(5).text();
                    result.link = $(el).find('td').eq(6).find('a').attr('href');

                    results.push(result);
                 
                });
                //log.log(results);
                resolve(results);
            }
        })
    })
}

function latestNotifications(URL) {
var log = signale.scope("scraper:latestNotifications");
const options = {
    url: URL,
    headers: {
        'User-Agent': 'request'
    }
};

var results = [];
return new Promise((resolve, reject) => {

    request.get(options, (error, response, html) => {
        if (error) {
            log.error("could not fetch the source");
            reject(error);
        }
        else if (!error && response.statusCode === 200) {
            log.success("successfully fetched");
            const $ = cheerio.load(html);
            const notifications = $('div .listcontentj').find('ul').toArray();
            notifications.forEach((el, index) => {
                var result = {
                    title: "",
                    link: ""
                };
                var entry = $(el).first('li').find('a');
                result.title = $(entry).text();
                result.link = $(entry).attr('href');
                // add it to the list
                results.push(result);
            });
            //log.log(results);
            resolve(results);
        }

    });
});
}


module.exports.latestNotifications = latestNotifications;
module.exports.topicScraper = topicScraper;