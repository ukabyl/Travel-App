import { transformData } from '../app/client/scripts/utils';

it('Should return an object', async function() {
    const data = transformData({});
    expect(typeof data).toBe('object');
});