module.exports = {
  afterInstall: function () {
    const packagesToRemove = [
      'ember-frost-button',
      'ember-frost-checkbox',
      'ember-frost-css-core',
      'ember-frost-icons',
      'ember-frost-link',
      'ember-frost-loading',
      'ember-frost-password',
      'ember-frost-select',
      'ember-frost-text',
      'ember-frost-textarea',
      'ember-frost-theme',
      'svg4everybody'
    ].map((packageName) => {
      return {name: packageName}
    })

    return this.removePackagesFromProject(packagesToRemove)
      .then(() => {
        return this.addBowerPackagesToProject([
          {name: 'chai-jquery', target: '^2.0.1'},
          {name: 'perfect-scrollbar', target: '>=0.6.7 <2.0.0'},
          {name: 'sinon-chai', target: '^2.8.0'}
        ])
      })
      .then(() => {
        return this.addAddonsToProject({
          packages: [
            {name: 'ember-cli-htmlbars-inline-precompile', target: '^0.3.1'},
            {name: 'ember-concurrency', target: '^0.7.8'},
            {name: 'ember-computed-decorators', target: '>=0.2.2 <2.0.0'},
            {name: 'ember-elsewhere', target: '~0.4.1'},
            {name: 'ember-hook', target: '^1.3.5'},
            {name: 'ember-one-way-controls', target: '>=0.5.3 <2.0.0'},
            {name: 'ember-sinon', target: '^0.5.1'},
            {name: 'ember-test-utils', target: '^1.1.2'},
            {name: 'ember-truth-helpers', target: '^1.0.0'}
          ]
        })
      })
  },

  normalizeEntityName: function () {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter to us)
  }
}
