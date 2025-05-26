import React from "react";

const TotalBlessingsDisplay = ({ total, translations }) => (
  <div className="mt-6 text-lg font-medium">
    {translations.totalBlessings || 'Total Blessings from T1 items:'} <span>{total}</span>
  </div>
);

export default TotalBlessingsDisplay;
