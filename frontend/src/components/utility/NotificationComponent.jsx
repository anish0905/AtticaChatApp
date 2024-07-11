import React, { useEffect } from 'react';
import Notification from './Notification';


const NotificationComponent = ({ userId }) => {
  useEffect(() => {
    if (window.Notification) {
      if (Notification.permission !== "granted") {
        Notification.requestPermission().then(permission => {
          if (permission === "granted") {
            console.log('Notification permission granted.');
          } else {
            console.log('Notification permission denied.');
          }
        }).catch(error => {
          console.error('Error requesting notification permission:', error);
        });
      }
    } else {
      console.log('This browser does not support desktop notification');
    }
  }, []);

  return (
    <div>
      <Notification userId={userId} />
    </div>
  );
};

export default NotificationComponent;
