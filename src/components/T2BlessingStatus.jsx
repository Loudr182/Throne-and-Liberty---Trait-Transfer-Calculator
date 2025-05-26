import React from "react";

const T2BlessingStatus = ({ remaining, sufficient, translations }) => (
  <span
    className={`text-sm font-medium mt-1 ${sufficient ? 'text-green-400' : 'text-red-500'}`}
  >
    {remaining === null || remaining === undefined
      ? translations.totalBlessingRequired || 'Total Blessing Required: 9900'
      : `${translations.remainingBlessingRequired || 'Remaining Blessing Required:'} ${remaining}`}
  </span>
);

export default T2BlessingStatus;
