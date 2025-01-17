import { SafeAreaView, Text, View } from 'react-native';
import { styles } from '@ballout-app/src/app/components/Sidebar/SidebarStyles';
import { useSelector } from 'react-redux';
import { Portal } from 'react-native-paper';

export const Sidebar = () => {
  const sidebarStore = useSelector((state: any) => state.sidebar.open)
  return (
    sidebarStore
      ?
    <View style={styles.sidebarContainer}>
      <SafeAreaView>
        {/*Opacity layer to dim the background*/}

        <Text>fr</Text>
      </SafeAreaView>
    </View>
      :
    null
  );
}
