// material
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

export default function Logo({ sx }: BoxProps) {
  return (
    <Box sx={{ width: 40, height: 40, ...sx }}>
      <img src="/static/icons/logopte.png" alt="error" />
    </Box>
  );
}
