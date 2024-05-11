// NotificationMessageComponent.js
import React, { useState } from 'react';

function NotificationMessageComponent() {
  const [notificationMessage, setNotificationMessage] = useState('You have spent a lot of time on this site');

  const handleSaveMessage = () => {
    // Save the message
    // You can add your logic here to save the message
    console.log("Notification message saved:", notificationMessage);
  };

  return (
    <div className="max-w-lg mx-auto p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Notification Message</h2>
      <p className="mb-2">You will see this message in notifications for websites every time.</p>
      <div className="flex">
        <input
          type="text"
          placeholder="Enter notification message"
          value={notificationMessage}
          onChange={(e) => setNotificationMessage(e.target.value)}
          className="mr-2 px-4 py-2 border rounded-lg w-full"
        />
        <button onClick={handleSaveMessage} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Save</button>
      </div>
    </div>
  );
}

export default NotificationMessageComponent;
