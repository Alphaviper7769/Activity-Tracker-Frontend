// NotificationsForWebsitesComponent.js
import React, { useState } from 'react';

function NotificationsForWebsitesComponent() {
  const [websites, setWebsites] = useState([]);
  const [newWebsite, setNewWebsite] = useState('');
  const [timeLimit, setTimeLimit] = useState('19:00');

  const handleAddWebsite = () => {
    if (newWebsite.trim() === '' || timeLimit.trim() === '') return; // Prevent adding empty website or time limit
    setWebsites([...websites, { name: newWebsite, time: timeLimit }]);
    setNewWebsite(''); // Clear input
    setTimeLimit(''); // Clear input
  };

  const handleRemoveWebsite = (index) => {
    const updatedWebsites = websites.filter((_, i) => i !== index);
    setWebsites(updatedWebsites);
  };

  return (
    <div className="max-w-lg mx-auto p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Notifications for Websites</h2>
      <p className="mb-2">Show notifications every time you spend a selected period of time on the website.</p>
      <div className="max-h-40 overflow-y-auto border mb-4">
        {/* List of websites with scrollbar */}
        {websites.length > 0 ? (
          websites.map((site, index) => (
            <div key={index} className="px-2 py-1 border-b flex justify-between items-center">
              <span>{site.name} - {site.time}</span>
              <button onClick={() => handleRemoveWebsite(index)} className="text-red-600 focus:outline-none">&times;</button>
            </div>
          ))
        ) : (
          <div className="px-2 py-1">No websites</div>
        )}
      </div>
      <div className="flex">
        <input
          type="text"
          placeholder="Enter website URL"
          value={newWebsite}
          onChange={(e) => setNewWebsite(e.target.value)}
          className="mr-2 px-4 py-2 border rounded-lg"
        />
        <input
          type="time"
          placeholder="Enter time (e.g., 1h 30m)"
          value={timeLimit}
          onChange={(e) => setTimeLimit(e.target.value)}
          className="mr-2 px-4 py-2 border rounded-lg"
        />
        <button onClick={handleAddWebsite} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Add Website</button>
      </div>
    </div>
  );
}

export default NotificationsForWebsitesComponent;
