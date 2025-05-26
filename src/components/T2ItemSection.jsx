import React from "react";
import TraitSlider from "./TraitSlider";

const T2ItemSection = ({ traits, onTraitChange, translations }) => (
  <div id="t2-item-container" className="w-[32rem] max-w-full sm:max-w-[32rem] bg-gray-800 text-white p-4 rounded shadow mt-6">
    <div className="flex flex-col items-start mb-4">
      <h2 className="text-lg font-bold">{translations.t2Item || 'T2 Item'}</h2>
      {/* The blessing status will be shown by T2BlessingStatus */}
    </div>
    <div id="t2-traits-container">
      {['Trait 1', 'Trait 2', 'Trait 3'].map((label, j) => (
        <TraitSlider
          key={j}
          label={translations[`trait${j+1}`] || label}
          value={traits[j]}
          min={j === 0 ? 1 : 0}
          max={4}
          onChange={val => onTraitChange(j, val)}
        />
      ))}
    </div>
  </div>
);

export default T2ItemSection;
