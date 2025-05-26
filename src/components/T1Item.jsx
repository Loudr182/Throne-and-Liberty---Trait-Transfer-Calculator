import React from "react";
import TraitSlider from "./TraitSlider";
import { Box, Typography, Paper, TextField } from '@mui/material';

const T1Item = ({
  index,
  traits,
  onTraitChange,
  additionalBlessing,
  onAdditionalBlessingChange,
  translations,
  isFirst
}) => (
  <Paper
    elevation={3}
    sx={{
      bgcolor: '#232e3d',
      color: 'white',
      p: 2,
      borderRadius: 2,
      minWidth: 240,
      maxWidth: 280,
      width: '100%',
      boxSizing: 'border-box',
      border: isFirst ? '2px solid #f87171' : '1px solid #334155',
      mb: 2
    }}
  >
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
      <Typography variant="h6" fontWeight={700}>
        T1 Item {index + 1}
      </Typography>
      <Typography variant="subtitle1" color="#facc15" fontWeight={600}>
        {translations.blessingLabel}: {traits.blessing}
      </Typography>
    </Box>
    {[0, 1, 2].map(j => (
      <TraitSlider
        key={j}
        label={translations[`trait${j+1}`] || `Trait ${j+1}`}
        value={traits.levels[j]}
        min={j === 0 ? 0 : 0} // min is 0 for all, but logic below restricts first slider
        max={4}
        onChange={val => {
          // Prevent reducing first slider below 1
          if (j === 0 && val < 1) return;
          onTraitChange(j, val);
        }}
        disabled={false}
      />
    ))}
    <Box mb={2} mt={2}>
      <Typography variant="body1" fontWeight={600} mb={1}>
        {translations.additionalBlessing || 'Additional Blessing:'}
      </Typography>
      <TextField
        type="number"
        min={0}
        value={additionalBlessing}
        onChange={e => onAdditionalBlessingChange(Number(e.target.value))}
        size="small"
        fullWidth
        sx={{ bgcolor: 'white', borderRadius: 1 }}
        inputProps={{ style: { color: '#232e3d', fontWeight: 600 } }}
      />
    </Box>
    {isFirst && translations.maxTraitDisclaimer && (
      <Typography variant="body2" color="#f87171" mt={1}>
        {translations.maxTraitDisclaimer}
      </Typography>
    )}
  </Paper>
);

export default T1Item;
