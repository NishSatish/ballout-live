import { SafeAreaView, Text, View, TextInput } from 'react-native';
import { InputBarStyles } from './InputBarStyle';
import { useFontInComponent } from '../../hooks/useFontInComponent';

export const InputBar = ({
  placeholder,
  text,
  onChange,
  autoCapitalize = 'none',
  password = false
}: {
  placeholder: string;
  text?: string;
  onChange: (input: string) => void;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters'
  password?: boolean
}) => {
  const fontLoaded = useFontInComponent(['Orbitron']);
  if (!fontLoaded) return null;
  return (
    <SafeAreaView>
      <TextInput
        autoCapitalize={autoCapitalize}
        style={InputBarStyles.InputBarContainer}
        placeholder={placeholder}
        value={text}
        onChangeText={onChange}
        secureTextEntry={password}
        placeholderTextColor={'rgba(255,255,255, 0.3)'}
      />
    </SafeAreaView>
  );
};
