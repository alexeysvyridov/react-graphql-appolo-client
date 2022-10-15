import * as React from 'react';
import CircularProgress from "@mui/material/CircularProgress";
import Box from '@mui/material/Box';
type CircularIndeterminateProps = {
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit';
  style: {[key: string]: any};
}
export default function CircularIndeterminate({
  color,
  style,
}:CircularIndeterminateProps) {
  return (
    <Box sx={{ display: 'flex' }} style={style}>
      <CircularProgress color={color} />
    </Box>
  );
}

CircularIndeterminate.defaultProps = {
  color: 'primary',
  style: {},
}