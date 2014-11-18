var Metalsmith = require('metalsmith'),
    markdown   = require('metalsmith-markdown'),
    sass       = require('metalsmith-sass'),
    templates  = require('metalsmith-templates');


Metalsmith(__dirname)
    .use(markdown())
    .use(sass())
    .use(templates({
        engine: 'handlebars',
        directory: './src/templates',
        partials: {
            header: 'partials/header',
            footer: 'partials/footer'
        }
    }))
    .destination('./build')
    .build(function(err) {
      if (err) console.log(err);
    })
