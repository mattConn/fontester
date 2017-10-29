TRANSPILER = 'babel'
PROCESS = mkdir processing;
ENDPROCESS = rm -rf processing;
COMBINEFONTS = for f in src/font_faces/*; do cat $$f >> processing/ft_fonts.css; done;
DISTCHECK = if [ ! -d dist ]; then mkdir dist; fi;

dist/fontester.js: src/*.es6
	$(DISTCHECK) $(PROCESS) lib/finc src/index.es6 > processing/index.es6; $(TRANSPILER) processing/index.es6 > dist/fontester.js; $(ENDPROCESS)

dist/index.html: src/index.html
	$(DISTCHECK) cp src/index.html dist/index.html

dist/ft_fonts.css: src/font_faces
	$(DISTCHECK) $(PROCESS) $(COMBINEFONTS) lib/generate_font_array.o processing/ft_fonts.css > dist/ft_fonts.js; cp processing/ft_fonts.css dist; $(ENDPROCESS)

lib/generate_font_array.o: generate_font_array.l
	sh compile_font_scanner.sh

all: dist/fontester.js dist/index.html dist/ft_fonts.css

clean:
	rm -rf dist