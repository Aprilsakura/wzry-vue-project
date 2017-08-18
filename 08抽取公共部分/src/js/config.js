const domain = 'http://139.199.192.48:9092';
export default {
    domin: domain,

    getHomeLunbo: domain + '/api/getlunbo?type=home',
    getHomeNav: domain + '/api/getnavlist',
    getHomeNews: domain + '/api/getnews?type=公告',
    getHomeVideos: domain + '/api/getvideos',
    getHomeRaiders: domain + '/api/getraiders?type=精品',
    
    getVideoLunbo: domain + '/api/getlunbo?type=video',
    getVideos: domain + '/api/getvideos',    
    getVideoType: domain + '/api/getvideotype',    
        
    getMatch: domain + '/api/getnews?type=赛事'    
}
