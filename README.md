webhook-starter
===============
A fast, opinonated Webhook starter theme. 

What this Theme does:

* uses `node-bourbon` and `node-neat` 
* uses `live-reload` on css changes 
* uses `auto-prefixer` (bourbon is removing that functionality)
* uses `browserSync` if you enable it (in the Gruntfile) 
* installs libraries via npm, when packages exist 
* concats/compresses js/css in development 
* includes `enquire.js` for javascript media queries
* includes hot-key to toggle the `visual-grid`
* includes sensible, customizable, mobile-first `neat` breakpoints

How to use it:

* install libraries with `npm` - or, if no package, in `static/lib`
* add path to .js libraries to `concat:dist:src` (or)
* import .css/.scss libraries to `main.scss`


## Install

1. `wh create <sitename>`

2. `cd <sitename>`

3. `$ npm install --save-dev grunt-sass grunt-autoprefixer grunt-browser-sync grunt-contrib-concat grunt-contrib-uglify jquery node-bourbon node-neat node-sass normalize.scss normalize-opentype.css enquire.js html5shiv respond.js`

4. `wh serve`

5. at `localhost:2002/cms` click `Start from a theme`, then paste in the url of this repo's `.zip` file (load remote theme)

6. quit and restart server to load new `Gruntfile`

7. Bingo!

