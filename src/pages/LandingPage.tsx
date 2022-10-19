// material
import { styled } from '@mui/material/styles';
// components
import Page from '../components/Page';
import {
  LandingHero,
  LandingMinimal,
  LandingDarkMode,
  LandingThemeColor,
  LandingAdvertisement,
  LandingCleanInterfaces,
  LandingHugePackElements,
} from '../components/_external-pages/landing';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%',
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <RootStyle title="PTE Practice Platform | PTE" id="move_top">
      <LandingHero />
      <ContentStyle>
        <LandingHugePackElements />
        <LandingCleanInterfaces />
      </ContentStyle>
    </RootStyle>
  );
}
