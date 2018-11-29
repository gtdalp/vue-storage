import Storage from './storage';
/**
 * 只针对web, 非web环境localStorage不存在
 */
class LocalStorage extends Storage {
    constructor() {
        super(localStorage);
    }
}

export default LocalStorage;

export { LocalStorage };
