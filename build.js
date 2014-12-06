var Metalsmith  = require('metalsmith'),
    markdown    = require('metalsmith-markdown'),
    sass        = require('metalsmith-sass'),
    templates   = require('metalsmith-templates'),
    collections = require('metalsmith-collections'),
    serve       = require('metalsmith-serve'),
    watch       = require('metalsmith-watch'),
    autoprefixer = require('metalsmith-autoprefixer');

Metalsmith(__dirname)
    .source('src/public/scss')
    .destination('build/public')
    .use(sass({
      outputStyle: 'expanded',
      outputDir: 'css'
    }))
    .use(autoprefixer())
    .use(watch('**/*.scss'))
    .build(function(err) {
      if (err) throw err;
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
