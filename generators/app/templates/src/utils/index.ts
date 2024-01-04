const cron = require('node-cron')

function blockProcess(milliseconds:number) {
    const startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliseconds) { }
}

module.exports = { blockProcess,cron }