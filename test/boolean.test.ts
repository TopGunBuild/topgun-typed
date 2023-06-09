import { expectErr, expectOk } from './test-util';
import { boolean } from '../src/structs';


it('returns err if input is not a boolean', () =>
{
    const struct = boolean('test');
    const actual = struct(null);
    expectErr(actual, 'test', { input: null, path: [] });
});

it('returns ok if input is a boolean', () =>
{
    const struct = boolean('test');
    expectOk(struct(true), true);
    expectOk(struct(false), false);
});
