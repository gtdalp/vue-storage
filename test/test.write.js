import Factory from '../factory';

describe('读取数据', () => {
    it('Test: 读取一个不存在的数据, 不指定默认值, 期望返回 "" ', () => {
        let storage = Factory.getLocal();
        expect(storage.get('arr')).toEqual('');
        expect(storage.get('num')).toEqual('');
        expect(storage.get('boo')).toEqual('');
        expect(storage.get('str')).toEqual('');
        expect(storage.get('obj')).toEqual('');
    });

    it('Test: 读取一个不存在的数据，获取默认值', () => {
        let storage = Factory.getLocal();
        expect(storage.get('arr', Array)).toEqual([]);
        expect(storage.get('num', Number)).toEqual(0);
        expect(storage.get('boo', Boolean)).toEqual(false);
        expect(storage.get('str', String)).toEqual('');
        expect(storage.get('obj', Object)).toEqual({});
    });

    it('Test: 读取一个不存在的数据，并指定返回的默认值', () => {
        let storage = Factory.getLocal();
        expect(storage.get('arr', Array, [1, 2, 3])).toEqual([1, 2, 3]);
        expect(storage.get('num', Number, 4)).toEqual(4);
        expect(storage.get('boo', Boolean, true)).toEqual(true);
        expect(storage.get('str', String, 'this is my string')).toEqual('this is my string');
        expect(storage.get('obj', Object, { a: 1, b: 2 })).toEqual({ a: 1, b: 2 });
    });

    it('Test: 读取一个不存在的数据，并指定返回的默认值(不同的类型)', () => {
        let storage = Factory.getLocal();
        expect(storage.get('arr', Array, 'str')).toEqual('str');
        expect(storage.get('obj', Object, [])).toEqual([]);
    });

    it('Test: 写入并读取一个存在的数据，不指定返回的默认值', () => {
        let storage = Factory.getLocal();
        storage.set('arr', [3, 4, 5]);
        storage.set('num', 110);
        storage.set('boo', false);
        storage.set('str', 'this is str');
        storage.set('obj', { name: {} });

        expect(storage.get('arr')).toEqual([3, 4, 5]);
        expect(storage.get('num')).toEqual(110);
        expect(storage.get('boo')).toEqual(false);
        expect(storage.get('str')).toEqual('this is str');
        expect(storage.get('obj')).toEqual({ name: {} });
    });

    it('Test: 写入并读取一个存在的数据，并指定返回的默认值，期望得到写入值', () => {
        let storage = Factory.getLocal();
        storage.set('arr', [3, 4, 5]);
        storage.set('num', 110);
        storage.set('boo', false);
        storage.set('str', 'this is str');
        storage.set('obj', { name: {} });

        expect(storage.get('arr', Array, [1, 2, 3])).toEqual([3, 4, 5]);
        expect(storage.get('num', Number, 4)).toEqual(110);
        expect(storage.get('boo', Boolean, true)).toEqual(false);
        expect(storage.get('str', String, 'string??')).toEqual('this is str');
        expect(storage.get('obj', Object, { a: 1, b: 2 })).toEqual({ name: {} });
    });

    it('Test: 写入并读取一个存在的数据，并指定返回的默认值, 指定返回的类型不同于写入值', () => {
        let storage = Factory.getLocal();
        storage.set('arr', [3, 4, 5]);
        storage.set('num', 110);
        storage.set('boo', false);
        storage.set('str', 'this is str');
        storage.set('obj', { name: {} });

        expect(storage.get('arr', String, [1, 2, 3])).toEqual([3, 4, 5]);
        expect(storage.get('num', Object, 4)).toEqual(110);
        expect(storage.get('boo', Number, true)).toEqual(false);
        expect(storage.get('str', Boolean, 'string??')).toEqual('this is str');
        expect(storage.get('obj', String, { a: 1, b: 2 })).toEqual({ name: {} });
    });

    it('Test: 写入字符串并读取一个存在的数据，并指定返回的默认值，期望得到写入值', () => {
        let storage = Factory.getLocal();
        storage.set('arr', '[3, 4, 5]');
        storage.set('num', '110');
        storage.set('boo', 'false');
        storage.set('str', 'this is str');
        storage.set('obj', '{ "name": {} }');

        expect(storage.get('arr', Array, [1, 2, 3])).toEqual([3, 4, 5]);
        expect(storage.get('num', Number, 4)).toEqual(110);
        expect(storage.get('boo', Boolean, true)).toEqual(false);
        expect(storage.get('str', String, 'string??')).toEqual('this is str');
        expect(storage.get('obj', Object, { a: 1, b: 2 })).toEqual({ name: {} });
    });
});
