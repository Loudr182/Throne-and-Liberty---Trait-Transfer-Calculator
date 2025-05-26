import React from "react";

const MaxOutButton = ({ onClick, translations }) => (
  <button
    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
    onClick={onClick}
  >
    {translations.maxOutT1Traits || 'Max Out T1 Traits'}
  </button>
);

export default MaxOutButton;
