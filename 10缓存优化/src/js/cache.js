const cache = {};
const maxAge = 60000;

export default {
    set(key, data) {
        cache[key] = {
            data: data,
            time: Date.now()
        };
    },
    get(key) {
        let tempObj = cache[key];
        if (!tempObj || Date.now() - tempObj.time > maxAge) {
            this.remove(key);
        } else {
            return tempObj.data;
        }
    },
    remove(key) {
        delete cache[key];
    }
};