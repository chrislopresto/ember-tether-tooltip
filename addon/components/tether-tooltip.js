import Ember from 'ember';

const computed = Ember.computed;
const observer = Ember.observer;
const get = Ember.get;
const run = Ember.run;

export default Ember.Component.extend({
  classNames: ['ember-tether-tooltip'],
  target: null,
  position: null,
  content: null,
  classes: 'ember-tether-tooltip-content',

  tooltipTarget: computed('target', function() {
    let t = get(this, 'target');
    if (Ember.View.detectInstance(t)) {
      t = t.element;
    } else if (Ember.$(t)) {
      t = Ember.$(t)[0];
    }
    return t;
  }),

  tooltipContent: computed('content', function() {
    let c = get(this, 'content');
    if (get(this, 'template') && this.element) {
      c = this.element.innerHTML;
    }
    return c;
  }),

  toggle: function() {
    this._tetherTooltip.toggle();
  },

  didInsertElement: function() {
    this.addTetherTooltip();
  },

  willDestroyElement: function() {
    var tetherTooltip = this._tetherTooltip;
    run.schedule('render', () => {
      this.removeTetherTooltip(tetherTooltip);
    });
  },

  tetherTooltipDidChange: observer(
    'target',
    'position',
    'content',
    'classes',
    function() {
      var tetherTooltip = this._tetherTooltip;
      run.schedule('render', () => {
        this.removeTetherTooltip(tetherTooltip);
        this.addTetherTooltip();
      });
    }
  ),

  addTetherTooltip: function() {
    this._tetherTooltip = new Tooltip(this._tetherTooltipOptions());
  },

  removeTetherTooltip: function(tetherTooltip) {
    tetherTooltip.destroy();
  },

  _tetherTooltipOptions: function() {
    const options = {
      target: get(this, 'tooltipTarget') ,
      content: get(this, 'tooltipContent')
    };

    [ 'position',
      'classes'
    ].forEach((k) => {
      const v = get(this, k);
      if (!Ember.isNone(v)) {
        options[k] = v;
      }
    });
    return options;
  }
});
