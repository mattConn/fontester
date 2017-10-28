TRANSPILER = 'babel'
DISTCHECK = if [ ! -d dist ]; then mkdir dist; fi;

dist/fontester.js: src/index.es6
	$(DISTCHECK) $(TRANSPILER) src/index.es6 > dist/fontester.js

dist/index.html: src/index.html
	$(DISTCHECK) cp src/index.html dist/index.html

dist/ft_fonts.css: src/font_faces
	$(DISTCHECK) sh combine_font_faces.sh; lib/generate_font_array.o dist/ft_fonts.css > dist/ft_fonts.js

lib/generate_font_array.o: generate_font_array.l
	sh compile_font_scanner.sh

all: dist/fontester.js dist/index.html dist/ft_fonts.css

clean:
	rm -rf dist