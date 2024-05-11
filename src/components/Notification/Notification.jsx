import React from 'react';
import DailySummaryNotificationComponent from './NotificationDaily';
import NotificationsForWebsitesComponent from './NotificationWarning';
import NotificationMessageComponent from './NotificationMessage';

const Notification = () => {
  return (
    <div className="mt-8 space-y-8">
      {/* <h1>Notification</h1> */}
      <div className="mb-8"><DailySummaryNotificationComponent /></div>
      <div className="mb-8"><NotificationsForWebsitesComponent /></div>
      <div className="mb-8"><NotificationMessageComponent /></div>
    </div>
  );
}

export default Notification;
