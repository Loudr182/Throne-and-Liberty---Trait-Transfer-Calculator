import React from "react";

const RulesSection = ({ translations }) => (
  <section className="mb-4 w-full max-w-2xl">
    <p className="text-sm text-gray-400 mb-2">
      {translations.blessingRules}
    </p>
    <ul className="text-sm text-gray-400 list-disc list-inside">
      {(translations.rules || []).map((rule, i) => (
        <li key={i}>{rule}</li>
      ))}
    </ul>
  </section>
);

export default RulesSection;
