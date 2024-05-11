import React from "react";

const BlackListHeading = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        Daily access restrictions for the websites
      </h2>
      <p className="mb-4">
        Set the maximum time allowed to visit the website per day. After this
        time, the site will be blocked. If you set the blocking time to 0 hours
        0 minutes, the website will be blocked immediately.
      </p>
    </div>
  );
};

export default BlackListHeading;
