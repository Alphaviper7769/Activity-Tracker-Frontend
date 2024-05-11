import React from "react";

const BlackListPane = () => {
  return (
    <div>
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
    </div>
  );
};

export default BlackListPane;
