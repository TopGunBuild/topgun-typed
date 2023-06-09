import { number, optional } from '../src/structs';
import { expectErr, expectOk } from './test-util';


const struct = optional(number('test'));

it('returns ok if the input is undefined', () =>
    expectOk(struct(undefined), undefined));

it('returns ok if the input is a number', () => expectOk(struct(1), 1));

it('returns err if the input is not undefined or a number', () =>
    expectErr(struct('hello'), 'test', { input: 'hello', path: [] }));
