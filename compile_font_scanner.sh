COMPILER='clang'

flex generate_font_array.l; $COMPILER lex.yy.c -o lib/generate_font_array;

# clean up
rm lex.yy.c;
