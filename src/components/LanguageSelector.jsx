import React from "react";
import { FormControl, InputLabel, Select, MenuItem, Box, Typography } from "@mui/material";

const LanguageSelector = ({ language, setLanguage, languages }) => (
  <FormControl variant="outlined" size="small" sx={{ minWidth: 120, bgcolor: 'white', borderRadius: 2, boxShadow: 2 }}>
    <InputLabel id="language-selector-label" sx={{ color: '#334155' }}>Language</InputLabel>
    <Select
      labelId="language-selector-label"
      id="language-selector"
      value={language}
      label="Language"
      onChange={e => setLanguage(e.target.value)}
      sx={{
        '& .MuiSelect-select': { display: 'flex', alignItems: 'center', gap: 1 },
        color: '#232e3d',
        fontWeight: 600,
      }}
      renderValue={selected => {
        const opt = languages.find(l => l.code === selected);
        return (
          <Box display="flex" alignItems="center" gap={1}>
            <span style={{ fontSize: 20 }}>{opt.flag}</span>
            <Typography variant="body1" color="#232e3d">{opt.name}</Typography>
          </Box>
        );
      }}
    >
      {languages.map(opt => (
        <MenuItem key={opt.code} value={opt.code} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <span style={{ fontSize: 20 }}>{opt.flag}</span>
          <Typography variant="body1" color="#232e3d">{opt.name}</Typography>
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default LanguageSelector;
