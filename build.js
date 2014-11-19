var Metalsmith  = require('metalsmith'),
    markdown    = require('metalsmith-markdown'),
    sass        = require('metalsmith-sass'),
    templates   = require('metalsmith-templates'),
    collections = require('metalsmith-collections');


Metalsmith(__dirname)
    .use(markdown())
    .use(sass())
    .use(collections({
      articles: {
        sortBy: 'date',
        reverse: true
      }
    }))
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
      if (err) {
        console.log(err);
      } else {
        console.log("F2411 YOU ROBB")
      }

    })
