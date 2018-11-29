import { Factory, LocalStorage, SessionStorage, MemoryStorage } from './factory';

const install = (VUE, options) => {
    VUE.prototype.$storage = Factory.create('local');
    VUE.prototype.$localStorage = VUE.prototype.$storage;
    VUE.prototype.$sessionStorage = Factory.create('session');
    // VUE.prototype.$memoryStorage = Factory.create('memory');
};

export default Factory;

export { Factory, LocalStorage, SessionStorage, install };
