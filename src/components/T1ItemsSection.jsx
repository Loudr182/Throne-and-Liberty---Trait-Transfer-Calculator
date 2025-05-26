import React from "react";
import T1Item from "./T1Item";
import { Grid } from '@mui/material';

const T1ItemsSection = ({ items, onItemChange, translations }) => (
  <Grid container spacing={3} justifyContent="center">
    {items.map((item, i) => (
      <Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={i} display="flex" justifyContent="center">
        <T1Item
          index={i}
          traits={item.traits}
          onTraitChange={(traitIdx, value) => onItemChange(i, traitIdx, value)}
          additionalBlessing={item.additionalBlessing}
          onAdditionalBlessingChange={val => onItemChange(i, 'additionalBlessing', val)}
          translations={translations}
          isFirst={i === 0}
        />
      </Grid>
    ))}
  </Grid>
);

export default T1ItemsSection;
