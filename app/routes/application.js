import Route from '@ember/routing/route';
import { hash } from 'rsvp';

const data = {
  foo: 1,
  bar: 2,
  baz: 3
};

export default Route.extend({
  model() {
    return hash({
      data,
      pick: import('lodash/pick').then(pick => pick.default)
    })
  }
});
