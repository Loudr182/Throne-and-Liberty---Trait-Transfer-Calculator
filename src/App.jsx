import React, { useState, useEffect, useCallback } from 'react';
import LanguageSelector from './components/LanguageSelector';
import RulesSection from './components/RulesSection';
import T1ItemsSection from './components/T1ItemsSection';
import T2ItemSection from './components/T2ItemSection';
import MaxOutButton from './components/MaxOutButton';
import TotalBlessingsDisplay from './components/TotalBlessingsDisplay';
import T2BlessingStatus from './components/T2BlessingStatus';
import { Box, Typography, Paper, MenuItem, Select, FormControl, InputLabel, Button, Grid, Divider } from '@mui/material';
import './App.css';

const DEFAULT_T1_COUNT = 1;
const TRAIT_COUNT = 3;
const T1_TRAIT_MAX = 4;
const T2_TRAIT_MAX = 4;
const T2_TOTAL_BLESSING = 9900;

const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'cz', name: 'Czech', flag: '🇨🇿' }
];

function getDefaultT1Item(isFirst = false) {
  return {
    traits: { levels: [1, 0, 0], blessing: 0 },
    additionalBlessing: 0
  };
}

function getDefaultT1Items(count) {
  return Array.from({ length: count }, (_, i) => getDefaultT1Item(i === 0));
}

function getDefaultT2Traits() {
  return [1, 0, 0];
}

function calculateT1Blessing(item, index) {
  let blessing = 0;
  const perLevel = index === 0 ? 240 : 120;
  item.traits.levels.forEach((level, j) => {
    if (j === 0) {
      blessing += (level - 1) * perLevel;
    } else {
      blessing += level * perLevel;
    }
  });
  blessing += item.additionalBlessing || 0;
  return blessing;
}

function calculateAllT1Blessings(items) {
  return items.map((item, i) => {
    const blessing = calculateT1Blessing(item, i);
    return { ...item, traits: { ...item.traits, blessing } };
  });
}

function calculateTotalBlessings(items) {
  return items.reduce((sum, item, i) => sum + calculateT1Blessing(item, i), 0);
}

function calculateT2UsedBlessings(traits) {
  let used = 0;
  traits.forEach((level, j) => {
    if (j === 0) {
      used += (level - 1) * 900;
    } else {
      used += level * 900;
    }
  });
  return used;
}

function App() {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState({});
  const [t1Count, setT1Count] = useState(DEFAULT_T1_COUNT);
  const [t1Items, setT1Items] = useState(getDefaultT1Items(DEFAULT_T1_COUNT));
  const [t2Traits, setT2Traits] = useState(getDefaultT2Traits());

  // DEBUG: Log environment and translation fetch
  React.useEffect(() => {
    console.log('DEBUG: App loaded. Environment:', {
      NODE_ENV: import.meta.env.MODE,
      BASE_URL: import.meta.env.BASE_URL,
      VITE_PUBLIC_URL: import.meta.env.VITE_PUBLIC_URL,
      windowLocation: window.location.href
    });
  }, []);

  React.useEffect(() => {
    console.log('DEBUG: Fetching translation for language', language);
    fetch(`/assets/translations/lang-${language}.json`)
      .then(res => {
        console.log('DEBUG: Translation fetch response', res);
        return res.json();
      })
      .then(setTranslations)
      .catch((err) => {
        console.error('DEBUG: Translation fetch error', err);
        setTranslations({ title: 'Trait Transfer Calculator' });
      });
  }, [language]);

  // Update blessings when t1Items or t1Count changes
  useEffect(() => {
    setT1Items(items => calculateAllT1Blessings(items));
  }, [t1Count]);

  // Handlers
  const handleT1CountChange = useCallback(count => {
    setT1Count(count);
    setT1Items(items => {
      const newItems = getDefaultT1Items(count);
      for (let i = 0; i < Math.min(items.length, count); i++) {
        newItems[i] = { ...newItems[i], ...items[i] };
      }
      return calculateAllT1Blessings(newItems);
    });
  }, []);

  const handleT1ItemChange = useCallback((itemIdx, traitIdxOrBlessing, value) => {
    setT1Items(items => {
      const newItems = items.map((item, i) => {
        if (i !== itemIdx) return item;
        if (traitIdxOrBlessing === 'additionalBlessing') {
          return { ...item, additionalBlessing: value };
        } else {
          const newLevels = [...item.traits.levels];
          newLevels[traitIdxOrBlessing] = value;
          return { ...item, traits: { ...item.traits, levels: newLevels } };
        }
      });
      return calculateAllT1Blessings(newItems);
    });
  }, []);

  const handleT2TraitChange = useCallback((traitIdx, value) => {
    setT2Traits(traits => {
      const newTraits = [...traits];
      newTraits[traitIdx] = value;
      return newTraits;
    });
  }, []);

  const handleMaxOutT1 = useCallback(() => {
    setT1Items(items =>
      calculateAllT1Blessings(
        items.map((item, i) => ({
          ...item,
          traits: { ...item.traits, levels: [4, 4, 4] },
        }))
      )
    );
  }, []);

  // Calculations
  const totalBlessings = calculateTotalBlessings(t1Items);
  const t2UsedBlessings = calculateT2UsedBlessings(t2Traits);
  const remainingBlessing = T2_TOTAL_BLESSING - t2UsedBlessings;
  const sufficient = totalBlessings >= remainingBlessing;

  return (
    <Box
      minHeight="100vh"
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        px: 2,
        py: 4,
        overflow: 'hidden',
      }}
    >
      <Box position="absolute" top={16} right={32} zIndex={10}>
        <LanguageSelector language={language} setLanguage={setLanguage} languages={LANGUAGES} />
      </Box>
      <Box
        width="100%"
        maxWidth={1200}
        mx="auto"
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          bgcolor: 'transparent',
          borderRadius: 0,
          boxShadow: 'none',
          p: { xs: 2, sm: 4 },
          mt: 4
        }}
      >
        <Typography variant="h3" fontWeight={800} color="white" mb={2} align="center" sx={{ textShadow: '0 2px 16px #0008', letterSpacing: 1 }}>
          {translations.title || 'Trait Transfer Calculator'}
        </Typography>
        <Box mb={2} width="100%" maxWidth={900} mx="auto" textAlign="left">
          <RulesSection translations={translations} />
        </Box>
        <Box width="100%" maxWidth={400} textAlign="center" mx="auto" mb={4}>
          <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 700, mb: 1, textAlign: 'center' }}>
            {translations.numberOfT1Items || 'Number of T1 Items:'}
          </Typography>
          <FormControl variant="outlined" sx={{ minWidth: 200, maxWidth: 320, bgcolor: 'white', borderRadius: 2, boxShadow: 2 }} size="small">
            <Select
              labelId="t1-items-label"
              id="t1-items"
              value={t1Count}
              onChange={e => handleT1CountChange(Number(e.target.value))}
              sx={{ color: '#232e3d', fontWeight: 600 }}
            >
              {[...Array(8)].map((_, i) => (
                <MenuItem key={i + 1} value={i + 1}>{i + 1}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box width="100%" maxWidth={1200} mb={4} mx="auto">
          <T1ItemsSection items={t1Items} onItemChange={handleT1ItemChange} translations={translations} />
        </Box>
        <TotalBlessingsDisplay total={totalBlessings} translations={translations} />
        <Box mt={2} mb={4}>
          <Button variant="contained" color="primary" onClick={handleMaxOutT1} sx={{ bgcolor: '#38bdf8', color: '#fff', fontWeight: 700, '&:hover': { bgcolor: '#0ea5e9' } }}>
            {translations.maxOutT1Traits || 'Max Out T1 Traits'}
          </Button>
        </Box>
        <Box width="100%" maxWidth={1200} mx="auto" mb={4}>
          <T2ItemSection traits={t2Traits} onTraitChange={handleT2TraitChange} translations={translations}>
            <T2BlessingStatus
              remaining={t2UsedBlessings === 0 ? null : remainingBlessing}
              sufficient={sufficient}
              translations={translations}
            />
          </T2ItemSection>
          <Divider sx={{ my: 2, bgcolor: '#334155' }} />
        </Box>
        <Box mt={2} color="#bfc9db" fontSize={14} textAlign="center" opacity={0.8}>
          &copy; {new Date().getFullYear()} Trait Transfer Calculator. All rights reserved.
        </Box>
      </Box>
    </Box>
  );
}

export default App;
