module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackageToProject('intl-tel-input', '~12.0.0');
  }
};
