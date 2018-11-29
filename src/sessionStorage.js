import Storage from './storage';
/**
 * 只针对web, 非web环境sessionStorage不存在
 */
class SessionStorage extends Storage {
    constructor() {
        super(sessionStorage);
    }
}

export default SessionStorage;

export { SessionStorage };
