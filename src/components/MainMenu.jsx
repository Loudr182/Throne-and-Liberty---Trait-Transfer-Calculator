import React from 'react';
import T1T2Img from '../assets/images/T1-T2.png';
import T2T3Img from '../assets/images/T2-T3.png';
import { Box, Typography, Grid, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

export default function MainMenu() {
  return (
    <Box
      minHeight="100vh"
      width="100vw"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        position: 'fixed',
        inset: 0,
        background:
          'linear-gradient(135deg, #232e3d 0%, #1e2633 60%, #181f29 100%)',
        px: 2,
        overflow: 'auto',
      }}
    >
      <Typography
        variant="h2"
        fontWeight={800}
        color="white"
        mb={4}
        align="center"
        sx={{
          textShadow: '0 2px 16px #0008',
          letterSpacing: 1,
        }}
      >
        Trait Transfer Calculator
      </Typography>
      <Typography
        variant="h6"
        color="#bfc9db"
        mb={6}
        align="center"
        maxWidth={600}
      >
        Plan and simulate trait transfers between item tiers. Select a calculator
        to get started.
      </Typography>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        sx={{ maxWidth: 900 }}
      >
        {/* T1 to T2 Calculator */}
        <Grid item>
          <Card
            sx={{
              width: 320,
              borderRadius: 4,
              boxShadow: 8,
              bgcolor: '#1e2633',
              border: '2px solid #334155',
              transition: '0.2s',
              '&:hover': {
                borderColor: '#38bdf8',
                transform: 'scale(1.04)',
              },
            }}
          >
            <CardActionArea href="T1-T2.html">
              <CardMedia
                component="img"
                height="288"
                image={T1T2Img}
                alt="Tier 1 to Tier 2"
                sx={{ objectFit: 'cover', bgcolor: '#232e3d' }}
              />
              <CardContent sx={{ bgcolor: '#1e2633', textAlign: 'center' }}>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  color="#38bdf8"
                  textAlign="center"
                >
                  Tier 1 → Tier 2 Calculator
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        {/* T2 to T3 (Coming Soon) */}
        <Grid item>
          <Card
            sx={{
              width: 320,
              borderRadius: 4,
              boxShadow: 8,
              bgcolor: '#1e2633',
              border: '2px solid #334155',
              opacity: 0.7,
              filter: 'grayscale(0.5) brightness(0.8)',
            }}
          >
            <CardMedia
              component="img"
              height="288"
              image={T2T3Img}
              alt="Tier 2 to Tier 3 (Coming Soon)"
              sx={{
                objectFit: 'cover',
                bgcolor: '#232e3d',
                filter: 'grayscale(1) brightness(0.7)',
              }}
            />
            <CardContent sx={{ bgcolor: '#1e2633', textAlign: 'center' }}>
              <Typography
                variant="h6"
                fontWeight={700}
                color="#bfc9db"
                textAlign="center"
              >
                Tier 2 → Tier 3 (Coming Soon)
                <LockIcon
                  sx={{
                    fontSize: 22,
                    ml: 1,
                    verticalAlign: 'middle',
                    color: '#bfc9db',
                  }}
                />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box
        mt={8}
        color="#bfc9db"
        fontSize={14}
        textAlign="center"
        opacity={0.8}
      >
        &copy; {new Date().getFullYear()} Trait Transfer Calculator. All rights
        reserved.
      </Box>
    </Box>
  );
}
