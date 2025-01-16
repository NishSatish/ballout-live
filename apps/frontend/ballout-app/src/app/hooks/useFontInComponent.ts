import { FontSource, useFonts } from 'expo-font';
import { fontMaps } from '@ballout-app/src/app/utils/fontMaps';

export const useFontInComponent = (
  fonts: string[]
) => {
  const fontArgs: Record<string, FontSource> = {};
  fonts.forEach(font => {
    fontArgs[font] = fontMaps[font]
  })
  console.log(fontArgs);
  const [loadedFonts, error] = useFonts(
    fontArgs
  );

  return loadedFonts;

}
