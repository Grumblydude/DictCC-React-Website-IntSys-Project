import { Box, Card, CardContent, Grid, IconButton, Typography } from '@mui/material';
import { Book, RecordVoiceOver, Videocam, Laptop } from '@mui/icons-material';

import '../css/colors.module.css'
import '../css/typography.module.css'
import '../css/theme.css'
import '../css/tokens.css'

export default function LearningMethods() {
  return (
    <Box backgroundColor="lightgrey">
      <Typography variant="h6" align="center">Choose your Learning Method</Typography>
      <Grid padding={2} container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ width: 202, height: 216 }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Typography align="center" sx={{ mb: 1 }}>Method 1</Typography>
              <IconButton>
                <Book fontSize="large" />
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ width: 202, height: 216 }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Typography align="center" sx={{ mb: 1 }}>Method 2</Typography>
              <IconButton>
                <RecordVoiceOver fontSize="large" />
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ width: 202, height: 216 }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Typography align="center" sx={{ mb: 1 }}>Method 3</Typography>
              <IconButton>
                <Videocam fontSize="large" />
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ width: 202, height: 216 }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Typography align="center" sx={{ mb: 1 }}>Method 4</Typography>
              <IconButton>
                <Laptop fontSize="large" />
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}