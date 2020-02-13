module.exports = {
    mutify: process.env.NODE_MOTIFY == 'true' ? true : false,
    debug: process.env.NODE_ENV == "development",
    page: "miner",
};