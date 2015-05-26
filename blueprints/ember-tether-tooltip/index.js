module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackageToProject('tether-tooltip', '~1.0.5');
  }
};
