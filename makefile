TRANSPILER = 'babel'
COMBINEFONTS = for f in src/font_faces/*; do cat $$f >> processing/ft_fonts.css; done;
DISTCHECK = if [ ! -d dist ]; then mkdir dist; fi;

dist/fontester.js: src/*.es6
	$(DISTCHECK) lib/finc src/index.es6 > processing/index.es6; $(TRANSPILER) processing/index.es6 > dist/fontester.js; rm processing/*;

dist/index.html: src/index.html
	$(DISTCHECK) cp src/index.html dist/index.html

dist/ft_fonts.css: src/font_faces
	$(DISTCHECK) $(COMBINEFONTS) lib/generate_font_array processing/ft_fonts.css > dist/ft_fonts.js; cp processing/ft_fonts.css dist; rm processing/*;

# less verbose alias of above task
fonts: dist/ft_fonts.css

lib/generate_font_array: generate_font_array.l
	sh compile_font_scanner.sh

all: dist/fontester.js dist/index.html dist/ft_fonts.css

clean:
	rm -rf dist