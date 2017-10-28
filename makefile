DISTCHECK = if [ ! -d dist ]; then mkdir dist; fi;
TRANSPILER = 'babel'

dist/index.js: src/index.es6
	$(DISTCHECK) $(TRANSPILER) src/index.es6 > dist/index.js

dist/index.html: src/index.html
	$(DISTCHECK) cp src/index.html dist/index.html

dist/fonts.css: src/font_faces
	$(DISTCHECK) sh combine_font_faces.sh

all: dist/index.js dist/index.html dist/fonts.css

# first time build
# =================
install:
	npm install

build: install all
# =================

clean:
	rm -rf dist