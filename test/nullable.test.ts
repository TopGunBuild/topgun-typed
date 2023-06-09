import { nullable, number } from '../src/structs';
import { expectErr, expectOk } from './test-util';

const struct = nullable(number('test'));

it('returns ok if the input is null', () => expectOk(struct(null), null));

it('returns ok if the input is a number', () => expectOk(struct(1), 1));

it('returns err if the input is not null or a number', () =>
    expectErr(struct('hello'), 'test', {
        input: 'hello',
        path : [],
    }));
