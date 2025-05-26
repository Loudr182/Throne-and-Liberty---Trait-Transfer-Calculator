import React from "react";

const T2BlessingStatus = ({ remaining, sufficient, translations }) => (
  <span
    style={{
      color: sufficient ? '#22c55e' : '#ef4444',
      fontWeight: 700,
      fontSize: '1rem',
      marginTop: 8,
      display: 'inline-block',
    }}
  >
    {remaining === null || remaining === undefined
      ? translations.totalBlessingRequired || 'Total Blessing Required: 9900'
      : `${translations.remainingBlessingRequired || 'Remaining Blessing Required:'} ${remaining}`}
  </span>
);

export default T2BlessingStatus;
