// DailySummaryNotificationComponent.js
import React, { useState } from 'react';

function DailySummaryNotificationComponent() {
  const [enableNotification, setEnableNotification] = useState(false);
  const [notificationTime, setNotificationTime] = useState('19:00'); // Default notification time set to 7pm

  const handleNotificationToggle = () => {
    setEnableNotification(!enableNotification);
  };

  const handleNotificationTimeChange = (e) => {
    setNotificationTime(e.target.value);
    // Save changes automatically
    // You can add your logic here to save the changes
  };

  return (
    <div className="max-w-lg mx-auto p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Daily Summary Notification</h2>
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox mr-2"
            checked={enableNotification}
            onChange={handleNotificationToggle}
          />
          <span>Enable daily summary notification</span>
        </label>
        <p className="mt-2">At the end of each day, you will receive a notification with a summary of your daily usage.</p>
      </div>
      <div>
        <label className="block mb-2">Notification time:</label>
        <input
          type="time"
          value={notificationTime}
          onChange={handleNotificationTimeChange}
          className="block w-full px-4 py-2 border rounded-lg"
        />
      </div>
    </div>
  );
}

export default DailySummaryNotificationComponent;
