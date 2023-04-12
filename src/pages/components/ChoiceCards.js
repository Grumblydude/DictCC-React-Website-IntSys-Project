import { Box, Card, CardContent, Grid, IconButton, Typography } from '@mui/material';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import FlashOnOutlinedIcon from '@mui/icons-material/FlashOnOutlined';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function LearningMethods() {

  const methods = [
    { text: "Standard", icon: <LayersOutlinedIcon fontSize="inherit" />, link: "/StandardTrain" },
    { text: "Image", icon: <ImageOutlinedIcon fontSize="inherit" />, link: "/ImageTrain" },
    { text: "Speedrun", icon: <FlashOnOutlinedIcon fontSize="inherit" />, link: "/SpeedrunTrain" },
  ];

  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  const handleCardMouseEnter = (index) => {
    setHoveredCardIndex(index);
  };

  const handleCardMouseLeave = () => {
    setHoveredCardIndex(null);
  };

  return (
    <Box backgroundColor="lightgrey">
      <Typography variant="h6" align="center">Choose your Learning Method</Typography>
      <Grid container spacing={3} padding={4} sx={{ mt: 2 }}>
        {methods.map((method, index) => (
          <Grid item xs={12} sm={6} md={4} key={method.text}>
            <NavLink to={method.link} style={{ textDecoration: 'none' }}>
              <Card
                sx={{
                  width: 202,
                  height: 216,
                  position: 'relative',
                }}
                onMouseEnter={() => handleCardMouseEnter(index)}
                onMouseLeave={handleCardMouseLeave}
              >
                {hoveredCardIndex === index && (
                  <Box
                    sx={{
                      borderTop: '3px solid orange',
                      width: '100%',
                      height: 0,
                      position: 'absolute',
                      top: 0,
                      left: 0,
                    }}
                  />
                )}
                <CardContent sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}>
                  <IconButton sx={{ fontSize: "3rem" }}>
                    {method.icon}
                  </IconButton>
                  <Typography align="center" sx={{ mb: 1, fontSize: 20 }}>{method.text}</Typography>
                </CardContent>
              </Card>
            </NavLink>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}