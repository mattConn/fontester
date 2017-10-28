COMPILER='clang'

flex generate_font_array.l; $COMPILER lex.yy.c -lfl -o lib/generate_font_array.o;

# clean up
rm lex.yy.c;