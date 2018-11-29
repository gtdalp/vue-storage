import Factory from '../factory';

describe('写入数据', () => {
    it('Test: 写入并读取storage', () => {
        let storage = Factory.getLocal();
        storage.set('test1', { key: 'test1' });
        storage.set('test2', { key: 'test2' });

        expect(storage.get('test1')).toEqual({ key: 'test1' });
        expect(storage.get('test2')).toEqual({ key: 'test2' });
    });

    it('Test: 覆盖已有数据，重新写入storage', () => {
        let storage = Factory.getLocal();
        storage.set('test1', { key: 'test1' });
        storage.set('test1', { key: 'test3' });
        storage.set('test2', { key: 'test2' });

        expect(storage.get('test1')).toEqual({ key: 'test3' });
        expect(storage.get('test2')).toEqual({ key: 'test2' });
    });

    it('Test: getString测试', () => {
        let storage = Factory.getLocal();
        storage.set('test1', { key: 'test3' });
        storage.set('test2', { key: 'test2' });

        expect(storage.getString('test1')).toEqual('{"key":"test3"}');
        expect(storage.getString('test2')).toEqual('{"key":"test2"}');
    });
});
