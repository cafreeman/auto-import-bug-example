import Component from '@ember/component';

export default Component.extend({
  init() {
    this._super(...arguments);
    this.pickedKeys = Object.keys(this.pick(this.data, ['foo', 'baz']));
  },
});
