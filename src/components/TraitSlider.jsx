import React from "react";
import { Box, IconButton, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const TraitSlider = ({ label, value, min, max, onChange, disabled }) => (
  <Box display="flex" alignItems="center" mb={2}>
    <Typography variant="body1" fontWeight={500} sx={{ width: 70, minWidth: 60 }}>
      {label}
    </Typography>
    <IconButton
      size="small"
      color="warning"
      sx={{ mx: 1 }}
      onClick={() => onChange(Math.max(min, value - 1))}
      disabled={disabled}
      aria-label={`Decrease ${label}`}
    >
      <ArrowBackIosNewIcon fontSize="small" />
    </IconButton>
    <Box flex={1} mx={1} position="relative" height={10} display="flex" alignItems="center">
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          height: '100%',
          width: '100%',
          bgcolor: '#334155',
          borderRadius: 2,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          height: '100%',
          width: `${((value - min) / (max - min)) * 100}%`,
          bgcolor: '#facc15',
          borderRadius: 2,
          transition: 'width 0.2s',
        }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          opacity: 0,
          cursor: 'pointer',
        }}
        disabled={disabled}
        aria-label={label}
      />
    </Box>
    <IconButton
      size="small"
      color="warning"
      sx={{ mx: 1 }}
      onClick={() => onChange(Math.min(max, value + 1))}
      disabled={disabled}
      aria-label={`Increase ${label}`}
    >
      <ArrowForwardIosIcon fontSize="small" />
    </IconButton>
    <Typography variant="body2" fontWeight={600} sx={{ width: 36, textAlign: 'right', ml: 1 }}>
      {value}/{max}
    </Typography>
  </Box>
);

export default TraitSlider;
