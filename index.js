/*jshint node:true*/
'use strict';
const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
    name: 'external-admin',
    lazyLoading: true,
    babel: {
        plugins: ['transform-object-rest-spread']
    }
});