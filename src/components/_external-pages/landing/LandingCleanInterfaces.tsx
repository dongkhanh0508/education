// material
import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
//
import { Block } from 'components/FormField/Block';
import { useTranslation } from 'react-i18next';
import { MotionInView, varFadeInUp } from '../../animate';
import CardAccordionLanding from './components/CardAccordionLanding';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 520,
  margin: 'auto',
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    zIndex: 11,
    textAlign: 'left',
    position: 'absolute',
  },
}));

// ----------------------------------------------------------------------

export default function LandingCleanInterfaces() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const { t } = useTranslation();
  const pteSpeckingGuide = [...Array(5)].map((_, index) => {
    const setIndex = index + 1;
    return {
      value: `panel${setIndex}`,
      heading: t(`landing-page.accordion.speaking.heading-${setIndex}`),
      detail: t(`landing-page.accordion.speaking.details-${setIndex}`),
    };
  });

  const pteReadingGuide = [...Array(5)].map((_, index) => {
    const setIndex = index + 1;
    return {
      value: `panel${setIndex}`,
      heading: t(`landing-page.accordion.reading.heading-${setIndex}`),
      detail: t(`landing-page.accordion.reading.details-${setIndex}`),
    };
  });

  const pteWritingGuide = [...Array(2)].map((_, index) => {
    const setIndex = index + 1;
    return {
      value: `panel${setIndex}`,
      heading: t(`landing-page.accordion.writing.heading-${setIndex}`),
      detail: t(`landing-page.accordion.writing.details-${setIndex}`),
    };
  });

  const pteListeningGuide = [...Array(6)].map((_, index) => {
    const setIndex = index + 1;
    return {
      value: `panel${setIndex}`,
      heading: t(`landing-page.accordion.listening.heading-${setIndex}`),
      detail: t(`landing-page.accordion.listening.details-${setIndex}`),
    };
  });

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Typography component="p" variant="overline" sx={{ mb: 2, color: 'text.secondary' }}>
          two
        </Typography>

        <Typography
          variant="h2"
          paragraph
          sx={{
            ...(!isLight && {
              textShadow: (theme) => `4px 4px 16px ${alpha(theme.palette.grey[800], 0.48)}`,
            }),
          }}
        >
          PTE Knowledge
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <CardAccordionLanding
              array={pteSpeckingGuide}
              title={t(`landing-page.accordion.speaking.title`)}
            ></CardAccordionLanding>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CardAccordionLanding
              array={pteWritingGuide}
              title={t(`landing-page.accordion.writing.title`)}
            ></CardAccordionLanding>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CardAccordionLanding
              array={pteReadingGuide}
              title={t(`landing-page.accordion.reading.title`)}
            ></CardAccordionLanding>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CardAccordionLanding
              array={pteListeningGuide}
              title={t(`landing-page.accordion.listening.title`)}
            ></CardAccordionLanding>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
