import React from "react";
import T1Item from "./T1Item";

const T1ItemsSection = ({ items, onItemChange, translations }) => (
  <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
    {items.map((item, i) => (
      <div className="w-full" key={i}>
        <T1Item
          index={i}
          traits={item.traits}
          onTraitChange={(traitIdx, value) => onItemChange(i, traitIdx, value)}
          additionalBlessing={item.additionalBlessing}
          onAdditionalBlessingChange={val => onItemChange(i, 'additionalBlessing', val)}
          translations={translations}
          isFirst={i === 0}
        />
      </div>
    ))}
  </div>
);

export default T1ItemsSection;
