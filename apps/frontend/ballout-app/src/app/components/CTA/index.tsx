import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import { CTAStyles } from '@ballout-app/src/app/components/CTA/CTAStyles';
import { useFontInComponent } from '@ballout-app/src/app/hooks/useFontInComponent';
import { LinearGradient } from 'expo-linear-gradient';

interface CTAProps {
  text: string;
  onPress: () => void;
  arrow?: boolean;
  uppercase?: boolean;
}

export const CTA = (props: CTAProps) => {
  const fontLoaded = useFontInComponent(['Montserrat']);
  if (!fontLoaded) return;

  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#DA6809', '#FF9F53']}
        style={CTAStyles.gradient}
      >
        <Text style={CTAStyles.btnText}>
          {props.uppercase ? props.text.toUpperCase() : props.text}
        </Text>
        {props.arrow && (
          <Image
            source={require('../../../../assets/arrow_right.png')}
            style={CTAStyles.arrow}
          />
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};
