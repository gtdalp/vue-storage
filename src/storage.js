const getDefaultValue = Symbol('getDefaultValue');
// const initBaseStorage = Symbol('initBaseStorage');

class Storage {
    constructor(props) {
        // this.data = {};
        //if props 不存在,则使用最基本的memory进行初始化
        this.storage = props || localStorage;
    }

    // [initBaseStorage]() {
    //     //模似localStorage&sessionStorage的方法
    //     return {
    //         getItem: key => {
    //             return this.data[key];
    //         },
    //         setItem: (key, val) => {
    //             this.data[key] = val;
    //         },
    //         removeItem: key => {
    //             delete this.data[key];
    //         },
    //         clear: () => {
    //             this.data = {};
    //         }
    //     };
    // }

    [getDefaultValue](type) {
        /* eslint-disable indent */
        switch (type) {
            case String:
                return '';
            case Object:
                return {};
            case Array:
                return [];
            case Number:
                return 0;
            case Boolean:
                return false;
        }
        return '';
    }
    /**
     * 设置
     * @param {string} key
     * @param {any} val
     */
    set(key, val) {
        let str = val;
        //考虑支持[{},{}]
        if (typeof val !== 'string') {
            str = JSON.stringify(val); //this[trycatch](() => { return JSON.stringify(val); });
        }
        this.storage.setItem(key, str);
    }

    /**
     * 取Storage里的数据
     * @param {string} key
     * @param {any} 当取不到数据时，返回的默认值的类型
     * @param {any} 指定取不到数据时的默认值
     */
    get(key, type = String, defaultValue = undefined) {
        let str = this.storage.getItem(key);
        let obj;
        if (!str) {
            //如果str为undefined,
            //返回默认值
            return defaultValue || this[getDefaultValue](type);
        }

        try {
            obj = JSON.parse(str); //this[trycatch](() => { return JSON.parse(str); });
        } catch (error) {
            obj = str;
            // throw new Error(`vue-storage error: your storage value is wrong! { key: ${key}, value: ${str} }`);
        }
        if (obj === null || obj === undefined) {
            return defaultValue || this[getDefaultValue](type);
        }
        return obj;
    }

    /**
     * 获取存储的原值
     * @param {any} key key
     */
    getString(key) {
        return this.storage.getItem(key);
    }

    /**
     *
     * @param {string|Array} keys
     */
    remove(keys) {
        if (!(keys instanceof Array)) {
            keys = keys.split(',');
        }
        keys.forEach(key => {
            this.storage.removeItem(key);
        });
    }

    /**
     * 清空数据
     */
    clear() {
        this.storage.clear();
    }
}

export default Storage;
