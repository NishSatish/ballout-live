import { SafeAreaView, Text, View, TextInput } from 'react-native';
import { InputBarStyles } from './InputBarStyle';
import { useFonts } from 'expo-font';

export const InputBar = ({
  placeholder,
  text,
  onChange,
}: {
  placeholder: string;
  text?: string;
  onChange: (input: string) => void;
}) => {
  return (
    <SafeAreaView>
      <TextInput
        autoCapitalize={'none'}
        style={InputBarStyles.InputBarContainer}
        placeholder={placeholder}
        value={text}
        onChangeText={onChange}
        placeholderTextColor={'rgba(255,255,255, 0.3)'}
      />
    </SafeAreaView>
  );
};
