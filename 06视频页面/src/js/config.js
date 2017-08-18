const domain = 'http://139.199.192.48:9092';
export default {
    domin: domain,
    getHomeLunbo: domain + '/api/getlunbo?type=home',
    getHomeNav: domain + '/api/getnavlist',
    getNews: domain + '/api/getnews?type=公告',
    getVideos: domain + '/api/getvideos',
    getRaiders: domain + '/api/getraiders',

    getVieoLunbo: domain + '/api/getlunbo?type=video',

}
