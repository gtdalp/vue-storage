import Factory from '../factory';
import { LocalStorage, SessionStorage } from '../index';

describe('new 不同的对象', () => {
    it('Test: 多次new LocalStorage', () => {
        let storage = new LocalStorage();
        let storage1 = new LocalStorage();

        storage.set('num', 210);
        storage.set('boo', 'str1');
        storage1.set('num', 220);
        storage1.set('boo', 'str2');

        expect(storage.get('num', Number)).toEqual(storage1.get('num', Number));
        expect(storage.get('boo', String)).toEqual(storage1.get('boo', String));
    });

    it('Test: 多次new SessionStorage', () => {
        let storage = new SessionStorage();
        let storage1 = new SessionStorage();

        storage.set('num', 210);
        storage.set('boo', 'str1');
        storage1.set('num', 220);
        storage1.set('boo', 'str2');

        expect(storage.get('num', Number)).toEqual(storage1.get('num', Number));
        expect(storage.get('boo', String)).toEqual(storage1.get('boo', String));
    });

    it('Test: 多次Factory.getLocal', () => {
        let storage = Factory.getLocal();
        let storage1 = Factory.getLocal();

        storage.set('num', 210);
        storage.set('boo', 'str1');
        storage1.set('num', 220);
        storage1.set('boo', 'str2');

        expect(storage.get('num', Number)).toEqual(storage1.get('num', Number));
        expect(storage.get('boo', String)).toEqual(storage1.get('boo', String));
    });

    it('Test: 多次Factory.getSession', () => {
        let storage = Factory.getSession();
        let storage1 = Factory.getSession();

        storage.set('num', 210);
        storage.set('boo', 'str1');
        storage1.set('num', 220);
        storage1.set('boo', 'str2');

        expect(storage.get('num', Number)).toEqual(storage1.get('num', Number));
        expect(storage.get('boo', String)).toEqual(storage1.get('boo', String));
    });

    it("Test: 多次Factory.create('local')", () => {
        let storage = Factory.create('local');
        let storage1 = Factory.create('local');

        storage.set('num', 210);
        storage.set('boo', 'str1');
        storage1.set('num', 220);
        storage1.set('boo', 'str2');

        expect(storage.get('num', Number)).toEqual(storage1.get('num', Number));
        expect(storage.get('boo', String)).toEqual(storage1.get('boo', String));
    });

    it("Test: 多次Factory.create('session')", () => {
        let storage = Factory.create('session');
        let storage1 = Factory.create('session');

        storage.set('num', 210);
        storage.set('boo', 'str1');
        storage1.set('num', 220);
        storage1.set('boo', 'str2');

        expect(storage.get('num', Number)).toEqual(storage1.get('num', Number));
        expect(storage.get('boo', String)).toEqual(storage1.get('boo', String));
    });
});

describe('通过getLocal获取单例', () => {
    it('Test: 多次Factory.getLocal()得到相同的实例', () => {
        let storage = Factory.getLocal();
        let storage1 = Factory.getLocal();

        expect(storage).toBe(storage1);
    });
});
