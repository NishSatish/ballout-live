import { PropsWithChildren } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { styles } from './OSStyles';
import { useDispatch, useSelector } from 'react-redux';
import { sidebarActions } from '@ballout-app/src/app/store/sidebar';

export const OpacityScreen = () => {
  const sidebarStore = useSelector((state: any) => state.sidebar.open);
  const dispatch = useDispatch();

  return (
    sidebarStore
      ?
    <TouchableWithoutFeedback
      onPress={() => {
        dispatch(sidebarActions.toggleSidebar({}))
      }}
    >
      <View style={styles.opacityScreen}></View>
    </TouchableWithoutFeedback>
      :
    null
  )
}
