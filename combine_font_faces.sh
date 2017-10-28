FONTS='dist/fonts.css'
if [ ! -f $FONTS ]; then touch $FONTS; fi;

for f in src/font_faces/*
do
cat $f >> $FONTS;
done