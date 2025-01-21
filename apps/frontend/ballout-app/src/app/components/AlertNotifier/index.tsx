import { Easing, Notifier, NotifierComponents } from 'react-native-notifier';

interface alertNotificationBuilderProps {
  title: string;
  description: string;
}

export const alertNotificationBuilder = (
  alertDetails: alertNotificationBuilderProps
) => {
  Notifier.showNotification({
    title: alertDetails.title,
    description: alertDetails.description,
    duration: 3000,
    Component: NotifierComponents.Alert,
    componentProps: {
      alertType: 'error',
    },
    showAnimationDuration: 800,
    showEasing: Easing.bounce,
    onHidden: () => console.log('Hidden'),
    onPress: () => console.log('Press'),
    hideOnPress: false,
  });
};
