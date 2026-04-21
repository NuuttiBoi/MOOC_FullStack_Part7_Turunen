import { Notificationbox } from './styles.js';
import { useMessageStore, useNotification } from '../stores/notificationStore';

const Notification = () => {
  const message = useNotification()
  if (!message) {
    return null;
  }

  return <Notificationbox>{message}</Notificationbox>;
};

export default Notification;