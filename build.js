var Metalsmith  = require('metalsmith'),
    markdown    = require('metalsmith-markdown'),
    sass        = require('metalsmith-sass'),
    templates   = require('metalsmith-templates'),
    collections = require('metalsmith-collections'),
    autoprefixer = require('metalsmith-autoprefixer'),
    serve       = require('metalsmith-serve');

Metalsmith(__dirname)
    .source('src/public/scss')
    .destination('build/public')
    .use(sass({
      outputStyle: 'expanded',
      outputDir: 'css'
    }))
    .use(autoprefixer())
    .build(function(err) {
      if (err) console.log(err);
    })

Metalsmith(__dirname)
    .use(markdown())
    .use(collections({
      articles: {
        sortBy: 'date',
        reverse: true
      }
    }))
    .use(templates({
        engine: 'handlebars',
        directory: 'templates',
        partials: {
            head: 'partials/head',
            navigation: 'partials/navigation',
            footer: 'partials/footer'
        }
    }))
    .build(function(err, a, b, c) {
      if (err) console.log(err);
    })
