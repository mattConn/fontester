TRANSPILER = 'node_modules/babel-cli/bin/babel.js'
COMBINEFONTS = for f in src/font_faces/*; do cat $$f >> processing/ft_fonts.css; done;
DIST = 'fontester-extension'
DISTCHECK = if [ ! -d $(DIST) ]; then mkdir $(DIST); fi;

# main script
$(DIST)/fontester.js: src/*.es6
	$(DISTCHECK) lib/finc src/main.es6 > processing/main.es6; $(TRANSPILER) processing/main.es6 > $(DIST)/fontester.js; rm processing/*;

# generate new font stylesheet and corresponding array for script
$(DIST)/ft_fonts.css: src/font_faces
	$(DISTCHECK) $(COMBINEFONTS) lib/generate_font_array processing/ft_fonts.css > $(DIST)/ft_fonts.js; cp processing/ft_fonts.css $(DIST); rm processing/*;

# less verbose alias of above task
fonts: $(DIST)/ft_fonts.css

# copy chrome-extension files to dist
chrome-extension:
	$(DISTCHECK) cp src/chrome-extension/* $(DIST)

# update font scanner (array generator) if needed
lib/generate_font_array: generate_font_array.l
	sh compile_font_scanner.sh

all: $(DIST)/fontester.js $(DIST)/ft_fonts.css chrome-extension

clean:
	rm -rf $(DIST)
