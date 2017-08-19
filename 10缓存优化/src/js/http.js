import Vue from 'vue';
import cache from './cache.js';

export default {
    get(url, success) {
        let data = cache.get(url);
        if (data) {
            success(data);
        }
        else {
            Vue.http.get(url).then(rep => {
                let body = rep.body;
                if (body.status == 0) {
                    cache.set(url, body);
                    success(body);
                } else {
                    console.log('请求失败！');
                }
            })
        }

    }
};