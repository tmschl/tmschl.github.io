var Metalsmith  = require('metalsmith'),
    markdown    = require('metalsmith-markdown'),
    sass        = require('metalsmith-sass'),
    templates   = require('metalsmith-templates'),
    collections = require('metalsmith-collections'),
    serve       = require('metalsmith-serve'),
    autoprefixer = require('metalsmith-autoprefixer');


Metalsmith(__dirname)
    .use(markdown())
    .use(sass())
    .use(autoprefixer())
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
            head: 'partials/head',
            header: 'partials/header',
            footer: 'partials/footer'
        }
    }))
    .use(serve())
    .build(function(err) {
      if (err) console.log(err);
    })
