// BlacklistComponent.js
import React, { useState } from "react";
import BlackListHeading from "./BlackListHeading";

function BlacklistComponent() {
  const [blacklistedSites, setBlacklistedSites] = useState([]);
  const [siteName, setSiteName] = useState("");
  const [time, setTime] = useState("");

  const handleAddSite = () => {
    // Add the site to the blacklistedSites array
    setBlacklistedSites([...blacklistedSites, { name: siteName, time: time }]);
    // Clear the input fields
    setSiteName("");
    setTime("");
  };

  const handleDeleteSite = (index) => {
    // Remove the site from the blacklistedSites array
    const updatedSites = blacklistedSites.filter((_, i) => i !== index);
    setBlacklistedSites(updatedSites);
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-70vh p-4 border rounded-lg shadow-md">


      <BlackListHeading />

      <div className="max-h-40 overflow-y-auto border mb-4">
        {/* List of blacklisted sites with scrollbar */}
        {blacklistedSites.length > 0 ? (
          blacklistedSites.map((site, index) => (
            <div
              key={index}
              className="px-2 py-1 border-b flex justify-between items-center"
            >
              <span>
                {site.name} - {site.time}
              </span>
              <button
                onClick={() => handleDeleteSite(index)}
                className="text-red-600 focus:outline-none"
              >
                &times;
              </button>
            </div>
          ))
        ) : (
          <div className="px-2 py-1">No blacklisted sites</div>
        )}
      </div>


      
      <div className="flex">
        <input
          type="text"
          placeholder="Enter site name"
          value={siteName}
          onChange={(e) => setSiteName(e.target.value)}
          className="mr-2 px-4 py-2 border rounded-lg"
        />
        <input
          type="time"
          placeholder="Enter time (e.g., 1h 30m)"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="mr-2 px-4 py-2 border rounded-lg"
        />
        <button
          onClick={handleAddSite}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Add Website
        </button>
      </div>
    </div>
  );
}

export default BlacklistComponent;
