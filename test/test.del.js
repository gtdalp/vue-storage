import Factory from '../factory';

describe('删除数据', () => {
    it('Test: 删除单个key的storage', () => {
        let storage = Factory.getLocal();
        storage.set('arr', [3, 4, 5]);
        storage.set('num', 110);
        storage.set('boo', false);
        storage.set('str', 'this is str');
        storage.set('obj', { name: {} });

        storage.remove('arr');
        storage.remove('str');
        storage.remove('obj');
        expect(storage.get('arr', Array)).toEqual([]);
        expect(storage.get('num', Number)).toEqual(110);
        expect(storage.get('boo', Boolean)).toEqual(false);
        expect(storage.get('str', String)).toEqual('');
        expect(storage.get('obj', Object)).toEqual({});
    });

    it('Test: 删除指定key([数组])的storage', () => {
        let storage = Factory.getLocal();
        storage.set('arr', [3, 4, 5]);
        storage.set('num', 110);
        storage.set('boo', false);
        storage.set('str', 'this is str');
        storage.set('obj', { name: {} });

        storage.remove(['arr', 'num', 'boo']);
        expect(storage.get('arr')).toEqual('');
        expect(storage.get('num')).toEqual('');
        expect(storage.get('boo')).toEqual('');
        expect(storage.get('str', String)).toEqual('this is str');
        expect(storage.get('obj', Object)).toEqual({ name: {} });
    });

    it('Test: 删除指定key("key1,key2,key3")的storage', () => {
        let storage = Factory.getLocal();
        storage.set('arr', [3, 4, 5]);
        storage.set('num', 110);
        storage.set('boo', false);
        storage.set('str', 'this is str');
        storage.set('obj', { name: {} });

        storage.remove('arr,num,boo');
        expect(storage.get('arr')).toEqual('');
        expect(storage.get('num')).toEqual('');
        expect(storage.get('boo')).toEqual('');
        expect(storage.get('str', String)).toEqual('this is str');
        expect(storage.get('obj', Object)).toEqual({ name: {} });
    });

    it('Test: 删除不存在的数据', () => {
        let storage = Factory.getLocal();

        storage.remove('arr,num,boo');
        expect(storage.get('arr')).toEqual('');
        expect(storage.get('num')).toEqual('');
        expect(storage.get('boo')).toEqual('');
    });

    it('Test: 清空storage', () => {
        let storage = Factory.getLocal();
        storage.set('arr', [3, 4, 5]);
        storage.set('num', 110);
        storage.set('boo', false);
        storage.set('str', 'this is str');
        storage.set('obj', { name: {} });
        storage.clear();
        expect(storage.get('arr', Array)).toEqual([]);
        expect(storage.get('num', Number)).toEqual(0);
        expect(storage.get('boo', Boolean)).toEqual(false);
        expect(storage.get('str', String)).toEqual('');
        expect(storage.get('obj', Object)).toEqual({});
    });
});
