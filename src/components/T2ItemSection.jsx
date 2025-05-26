import React from "react";
import TraitSlider from "./TraitSlider";
import { Box, Typography } from '@mui/material';

const T2ItemSection = ({ traits, onTraitChange, translations, children }) => (
  <Box
    id="t2-item-container"
    width="100%"
    maxWidth={1200}
    mx="auto"
    bgcolor="#232e3d"
    color="white"
    p={{ xs: 2, sm: 4 }}
    borderRadius={2}
    boxShadow={3}
    mt={6}
    display="flex"
    flexDirection="column"
    alignItems="center"
  >
    {children}
    <Typography variant="h5" fontWeight={700} mb={2} align="center">
      {translations.t2Item || 'T2 Item'}
    </Typography>
    <Box width="100%" maxWidth={400}>
      {[0, 1, 2].map(j => (
        <TraitSlider
          key={j}
          label={translations[`trait${j+1}`] || `Trait ${j+1}`}
          value={traits[j]}
          min={0} // min is 0 for all, but logic below restricts first slider
          max={4}
          onChange={val => {
            // Prevent reducing first slider below 1
            if (j === 0 && val < 1) return;
            onTraitChange(j, val);
          }}
          disabled={false}
        />
      ))}
    </Box>
  </Box>
);

export default T2ItemSection;
