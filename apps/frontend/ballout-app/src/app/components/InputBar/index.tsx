import { SafeAreaView, Text, View, TextInput } from 'react-native';
import { InputBarStyles } from './InputBarStyle';

export const InputBar = ({
  placeholder,
  text,
  onChange,
}: {
  placeholder: string;
  text: string;
  onChange: (input: string) => void;
}) => {
  return (
    <SafeAreaView>
      <TextInput
        style={InputBarStyles.InputBarContainer}
        placeholder={placeholder}
        value={text} // Use the `text` prop here
        onChangeText={onChange} // Pass the `onChange` function to `onChangeText`
      />
    </SafeAreaView>
  );
};
