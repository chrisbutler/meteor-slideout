Package.describe({
  name: 'chriswessels:slideout',
  version: '0.1.9',
  summary: 'A touch slideout navigation menu for your mobile web apps',
  git: 'https://github.com/chriswessels/meteor-slideout',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('lib/dist/slideout.min.js', 'client');
  api.addFiles('lib/index.css', 'client');
  api.addFiles('export.js', 'client');
  api.export('Slideout');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('chriswessels:slideout');
  api.addFiles('test.js', 'client');
});
