## Jekyll Boilerplate ##

Just what the doctor ordered.

### Getting Started ###

1. `$ git clone git@github.com:robbschiller/jekyll-boilerplate.git`
2. [Bower](http://twitter.github.com/bower): `$ bower install` from the project directory
3. Build
4. Update CNAME before deploy


### Structure ###

<pre>
.
|-- _layouts
|   |-- default.html
|   |-- post.html
|-- _posts
|   |-- 2013-02-26-test-post.md
|-- assets
|   |-- css
|   |   |-- style.css
|   |-- img
|   |-- lib
|   |-- |-- [bower components]
|   |-- sass
|   |-- |-- glob
|-- blog
|   |-- index.html
|-- node_modules
|   |-- [node modules]
|-- .bowerrc
|-- .gitignore
|-- _config.yml
|-- bower.json
|-- CNAME
|-- Gruntfile.js
|-- index.html
|-- package.json
|-- README.md
</pre>

### _includes ###
This folder is where some Jekyll magic can happen using Liquid tags.

### _layouts ###
This folder is where all the layout templates are stored.

#### default.html ####
This is the base layout template. There are no naming conventions, but if you choose to change this file's name make sure you update all the layout references in your file's YAML Front Matter blocks. To learn more about the use of YAML Front Matter check out [this page](https://github.com/mojombo/jekyll/wiki/yaml-front-matter).

#### post.html ####
This is the base post template.

### _posts ###
This folder is where all the posts are stored. Notice the naming convention that is used. You will want to name your files with the the publish date preceeding the posts title all seperated by dashes (Year-Month-Day-Title-Of-The-Post.md). The post date that you see is pulled straight from this filename so make sure you lable your files right.

#### 2013-02-26-placeholder-post.md ####
This is a simple blog post using markdown. To learn more about markdown check out the [markdown syntax documentation](http://daringfireball.net/projects/markdown/syntax). Also notice that there is YAML Front Matter in this file specifying the layout it will use and the title of the post. Layout is one of a couple predefined global variables. You can also specify custom variables in the YAML Front Matter.

### assets ###
This is where you add the sweet sauce.

### blog ###
This is an implementation of Jekyll designed to be used more as a landing page. The blog structuring is set inside yourdomain.com/blog.

### _config.yml ###
This is where you will be putting your Jekyll configuration options. If this file is omitted Jekyll will use its defualts to build your site. You can find the configuration options and default configuration [here](https://github.com/mojombo/jekyll/wiki/configuration).

### bower.json ###
This is the thunderous overlord of the `$ bower install` command. If you've not used bower before, you can read up on it [here](http://twitter.github.com/bower). Be sure to run `$ bower install` to update your components to the latest version. This command reads the `bower.json` file and installs the listed components into a `components` directory.

### index.html ###
This is used to render the site's index. It is essntially a post loop wrapped in your base layout.
