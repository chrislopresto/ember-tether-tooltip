import Ember from 'ember';

const computed = Ember.computed;
const get = Ember.get;
const set = Ember.set;

export default Ember.Controller.extend({
  exampleTarget: 1,
  exampleTargetSelector: computed('exampleTarget', function() {
    return `#tether-target-${get(this, 'exampleTarget')}`;
  }),

  positions: [
    'top left',
    'left top',
    'left middle',
    'left bottom',
    'bottom left',
    'bottom center',
    'bottom right',
    'right bottom',
    'right middle',
    'right top',
    'top right',
    'top center'
  ],
  positionIndex: 0,

  examplePosition: computed('positionIndex', function() {
    const i = get(this, 'positionIndex');
    return get(this, 'positions')[i];
  }),

  exampleOffset: null,
  exampleConstraintsOn: computed('exampleConstraints', function() {
    if (get(this, 'exampleConstraints')) {
      return 'on';
    } else {
      return 'off';
    }
  }),
  exampleConstraints: null,

  actions: {
    switchTarget: function() {
      const dt = get(this, 'exampleTarget');
      const nt = dt === 3 ? 1 : dt + 1;
      set(this, 'exampleTarget', nt);
    },
    rotateTooltip: function() {
      const numConfigs = get(this, 'positions').length;
      const i = get(this, 'positionIndex');
      const nc = i === (numConfigs - 1) ? 0 : i + 1;
      set(this, 'positionIndex', nc);
    }
  }
});
