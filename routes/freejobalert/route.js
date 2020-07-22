const express = require('express');
const router = express.Router();
var log = require('signale');
const latestNotifications = require('../../customModules/freejobalerts/scraper').latestNotifications;
const topicScraper = require('../../customModules/freejobalerts/scraper').topicScraper;
const smartScraper = require('../../customModules/freejobalerts/scraper').smartScraper;
const stateCodes =require('../../data/freeJobAlertStateMap.json');
log.scope("freejobalert:global");


/////////////////////////////////////////////////// routes //////////////////////////////////////////////
router.get('/', getDefault, (req, res) => {

    res.send(res.results);
});

router.get('/gov/other-all-india-exam', otherAllIndiaExam, (req, res) => {
    res.send(res.results);
});

router.get('/gov/state/:code([a-zA-Z]{2})', stateWiseGovjobs, (req, res) => {
    res.send(res.results);
})


router.get('/bank-jobs', bankJobs, (req, res) => {
    res.send(res.results);
});

router.get('/teaching-jobs', allIndiaTeachingJobs, (req, res) => {
    res.send(res.results);
});

router.get('/engineering-jobs', allIndiaEngineeringJobs, (req, res) => {
    res.send(res.results);
});

router.get('/railway-jobs', allIndiaRailwayJobs, (req, res) => {
    res.send(res.results);
});

router.get('/defence-jobs', allIndiaDefenceJobs, (req, res) => {
    res.send(res.results);
});


















/////////////////////////////////////////////////////// Invalid URL ////////////////////////////////////////

router.all('*', notFound, (req, res) => {
    res.json({ err: "404: invlid URL" });
})

///////////////////////////////////////// middleware functions /////////////////////////////////////////////




async function stateWiseGovjobs(req, res, next) {
    log = log.scope("freejobalert:stateWiseGovjobs");
    var stateCode = req.params.code.toUpperCase();
    var state = stateCodes.filter(function (item) {
        return item.code == stateCode;
    })[0];
    var URL = state.link;
    log.info(URL);
    const topic = "Govt. job for " + state.name;
    await smartScraper(URL, topic)
        .catch((error) => {
            res.status(404);
            log.error(error);
            return res.results = { err: "Something Went Wrong" };
        })
        .then((data) => {
            log.success(data);
            res.status(200);
            return res.results = data;
        })
    next();
}










async function allIndiaDefenceJobs(req, res, next) {
    log = log.scope("freejobalert:allIndiaDefenceJobs");
    const URL = "http://www.freejobalert.com/police-defence-jobs/";
    const topic = "All India Defence Jobs";
    const tableNo = 1;
    let results;

    await topicScraper(URL, topic, tableNo)
        .catch((error) => {
            res.status(404);
            log.error(error);
            return res.results = { err: "Something Went Wrong" };
        })
        .then((data) => {
            log.success(data);
            res.status(200);
            return res.results = data;
        })
    next();
}








async function allIndiaRailwayJobs(req, res, next) {
    log = log.scope("freejobalert:allIndiaRailwayJobs");
    const URL = "http://www.freejobalert.com/railway-jobs/";
    const topic = "All India Railway Jobs";
    const tableNo = 1;
    let results;

    await topicScraper(URL, topic, tableNo)
        .catch((error) => {
            res.status(404);
            log.error(error);
            return res.results = { err: "Something Went Wrong" };
        })
        .then((data) => {
            log.success(data);
            res.status(200);
            return res.results = data;
        })
    next();
}


async function allIndiaEngineeringJobs(req, res, next) {
    log = log.scope("freejobalert:allIndiaEngineeringJobs");
    const URL = "http://www.freejobalert.com/engineering-jobs/";
    const topic = "All India Engineering Jobs";
    const tableNo = 1;
    let results;

    await topicScraper(URL, topic, tableNo)
        .catch((error) => {
            res.status(404);
            log.error(error);
            return res.results = { err: "Something Went Wrong" };
        })
        .then((data) => {
            log.success(data);
            res.status(200);
            return res.results = data;
        })
    next();
}


async function bankJobs(req, res, next) {
    log = log.scope("freejobalert:bankJobs");
    const URL = "http://www.freejobalert.com/bank-jobs/";
    const topic = "Bankikng Jobs";
    const tableNo = 1;
    let results;

    await topicScraper(URL, topic, tableNo)
        .catch((error) => {
            res.status(404);
            log.error(error);
            return res.results = { err: "Something Went Wrong" };
        })
        .then((data) => {
            log.success(data);
            res.status(200);
            return res.results = data;
        })
    next();
}


async function otherAllIndiaExam(req, res, next) {
    log = log.scope("freejobalert:otherAllIndiaExam");
    const URL = "http://www.freejobalert.com/government-jobs/";
    const topic = "Other All India Exams";
    const tableNo = 4;
    let results;
    await topicScraper(URL, topic, tableNo)
        .catch((error) => {
            res.status(404);
            log.error(error);
            return res.results = { error: "Something Went Wrong" }
        })
        .then((data) => {
            res.status(200);
            log.success(data);
            return res.results = data;
        })
    next();
}


async function allIndiaTeachingJobs(req, res, next) {
    log = log.scope("freejobalert:allIndiaTeachingJobs");
    const URL = "http://www.freejobalert.com/teaching-faculty-jobs/";
    const topic = "All India Teaching Jobs";
    const tableNo = 2;
    let results;
    await topicScraper(URL, topic, tableNo)
        .catch((error) => {
            res.status(404);
            log.error(error);
            return res.results = { error: "Something Went Wrong" }
        })
        .then((data) => {
            res.status(200);
            log.success(data);
            return res.results = data;
        })
    next();
}

//////////////////////////////////////////////////////////////////////////////////////
async function getDefault(req, res, next) {
    log = log.scope("freejobalert:getDefault");
    let results;
    await latestNotifications("http://www.freejobalert.com/")
        .catch((error) => {
            res.status(404);
            log.error(error);
            return res.results = { error: "Something Went Wrong" }
        })
        .then((data) => {
            res.status(200);
            log.success(data);
            return res.results = data;
        })

    next();
}

function notFound(req, res, next) {
    log.error("freejobalert:Invalid URL");
    res.status(404);
    next();
}

module.exports = router;
