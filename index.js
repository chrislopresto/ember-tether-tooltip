/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-tether-tooltip',

  included: function(app) {
    if (app.import) {
      this.importBowerDependencies(app);
    }
    this._super.included(app);
  },

  importBowerDependencies: function(app) {
    app.import(app.bowerDirectory + '/tether/js/utils.js');
    app.import(app.bowerDirectory + '/tether/js/tether.js');
    app.import(app.bowerDirectory + '/tether-drop/dist/js/drop.js');
    app.import(app.bowerDirectory + '/tether-tooltip/dist/js/tooltip.js');
    app.import(app.bowerDirectory + '/tether-tooltip/dist/css/tooltip-theme-arrows.css');
  }
};
