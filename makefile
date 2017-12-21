TRANSPILER = 'node_modules/babel-cli/bin/babel.js'
COMBINEFONTS = for f in src/font_faces/*; do cat $$f >> tmp/ft_fonts.css; done;
DIST = 'dist'
DISTCHECK = if [ ! -d $(DIST) ]; then mkdir $(DIST); fi;

# ================ #
# main build tasks #
# ================ #

# main script
$(DIST)/fontester.js: src/*.es6
	$(DISTCHECK) lib/finc src/main.es6 > tmp/main.es6; $(TRANSPILER) tmp/main.es6 > $(DIST)/fontester.js; rm tmp/*.es6;

# generate new font stylesheet and corresponding array for script
$(DIST)/ft_fonts.css: src/font_faces
	$(DISTCHECK) $(COMBINEFONTS) lib/generate_font_array tmp/ft_fonts.css > $(DIST)/ft_fonts.js; mv tmp/ft_fonts.css $(DIST);

# less verbose alias of above task
fonts: $(DIST)/ft_fonts.css

# copy chrome-extension files to dist
chrome-extension:
	$(DISTCHECK) cp src/chrome-extension/* $(DIST)

# ================================================= #
# optional build tasks for compiling ./lib binaries #
# ================================================= #

# recompile font scanner 
lib-scanner:
	sh compile_font_scanner.sh

# recompile file includer 
lib-finc:
	sh compile_file_includer.sh

# recompile all lib binaries
lib-recompile: lib-finc lib-scanner

# ================================================= #

all: $(DIST)/fontester.js $(DIST)/ft_fonts.css chrome-extension # run all main build tasks

clean:
	rm -rf $(DIST)
