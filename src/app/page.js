"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import WalletIcon from '@mui/icons-material/Wallet';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import SvgIcon from '@mui/material/SvgIcon';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Carousel from 'react-material-ui-carousel';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://decycle.org/">
        Decycle.org
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function FlagIcon() {
  return (
    <SvgIcon sx={{fontSize: 40}}>
      <svg fill="#000000" viewBox="0 -8 72 72" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><title>us-flag-straight</title><path d="M8,8V48.1H64V8Zm20.58,4.9.74-1.49.73,1.49,1.65.24-1.19,1.17L30.79,16l-1.47-.78L27.84,16l.28-1.64-1.19-1.17Zm2.21,13.72-1.47-.77-1.48.77L28.12,25l-1.19-1.17,1.65-.23.74-1.5.73,1.5,1.65.23L30.51,25Zm-5.28-9.8.74,1.49,1.65.24-1.19,1.17L27,21.36l-1.48-.78L24,21.36l.28-1.64-1.19-1.17,1.65-.24Zm-2.6,9.8-1.47-.77L20,26.62,20.24,25l-1.19-1.17,1.65-.23.74-1.5.73,1.5,1.65.23L22.63,25ZM20.7,12.9l.74-1.49.73,1.49,1.65.24-1.19,1.17L22.91,16l-1.47-.78L20,16l.28-1.64-1.19-1.17Zm-3.45,3.92L18,18.31l1.65.24-1.19,1.17.28,1.64-1.48-.78-1.47.78.28-1.64-1.2-1.17,1.65-.24ZM13.11,12.9l.74-1.49.74,1.49,1.65.24L15,14.31,15.33,16l-1.48-.78L12.38,16l.28-1.64-1.2-1.17Zm0,10.68.74-1.5.74,1.5,1.65.23L15,25l.29,1.64-1.48-.77-1.48.77L12.66,25l-1.2-1.17Zm48,21.94L11,45.57v-3.7H61.08Zm0-6.19H11V35.69H61.08Zm0-5.85H11V29.84H61.08Zm0-6.5H35.5V23.34H61.08Zm0-6.59H35.5V16.74H61.08Zm0-6.21H35.5V10.53H61.08Z"/></svg>
    </SvgIcon>
  )
}

const cards = [
  "/images/BACK-ISO.JPG",
  "/images/BACK-STAND.JPG",
  "/images/FRONT-STAND.JPG",
  "/images/FRONT.JPG",
  "/images/IN-USE_END.JPG",
  "/images/IN-USE_SIDE.JPG",
  "/images/IN-USE.JPG",
  "/images/NO-SLIP-MAT.JPG",
  "/images/SIDE.JPG",
  "/images/TOP.JPG",
];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

// export const metadata = {
//   title: 'Freedom Clip - Decycle.org',
// }

export default function Album() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar sx={{backgroundColor: 'grey'}}>
          {/* <WalletIcon sx={{ mr: 2 }} /> */}
          <FlagIcon></FlagIcon>
          <Typography variant="h6" color="inherit" noWrap sx={{ ml: 1 }}>
            Freedom Clip
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 1,
            pb: 6,
          }}
        >
          <Container maxWidth="lg">
            <Grid container>
              <Grid item xs={12} sm={6} justify="center" align="center" alignContent="center" justifyContent="center">
                <video src="/videos/freedom-clip-loop.mp4" height="480" autoPlay loop muted />
              </Grid>
              <Grid item xs={12} sm={6} justify="center" justifyContent="center">

            <Typography
              component="h1"
              variant="h2"
              color="text.primary"
            >
              Freedom Clip
            </Typography>
            <Typography
              component="h1"
              variant="h4"
              color="text.primary"
              gutterBottom
            >
              Expandable Money Clip
            </Typography>
                <Typography>
                  Features:
                </Typography>
                <List>
                  <ListItem>RFID/NFC Jamming Technology</ListItem>
                  <ListItem>Cash & Card At Your Fingertips</ListItem>
                  <ListItem>World's smallest scan-proof Card Holder</ListItem>
                  <ListItem>Carbon Fiber Reinforced Body</ListItem>
                  <ListItem>100% Black Stainless Steel Band</ListItem>
                  <ListItem>Made From 100% Recycled Plastic</ListItem>
                  <ListItem>Soft Rubber No-Slip Backing</ListItem>
                  <ListItem>No Batteries Required</ListItem>
                  <ListItem>One Year Warranty</ListItem>
                  <ListItem>Patent Pending</ListItem>
                </List>
                <Button variant="contained" sx={{width: '100%', mb: 2}}>Request More Info</Button>
              </Grid>
            </Grid>
            <Grid item xs={12} alignContent="center" align="center" justifyContent="center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/U75c6DnrCYI?si=TMKIgWZTSfvtjm9j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Grid>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container>
            <Grid item xs={12} sm={6} sx={{ p: 2 }}>
              <Typography variant="h4" color="text.primary">
                BUILT TOUGH
              </Typography>
              <Typography>
              The Freedom Clip is made from high-quality materials that make it strong and rugged, 
              capable of withstanding the toughest of conditions. Whether you're out camping, hiking, 
              or just going about your daily life, you can trust that this wallet will keep up.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} justify="center" align="center" alignContent="center" justifyContent="center">
              <img src="/images/FRONT.JPG" width="100%" />
            </Grid>
            <Grid item xs={12} sm={6} justify="center" align="center" alignContent="center" justifyContent="center">
              <img src="/images/BACK-ISO.JPG" width="100%" />
            </Grid>
            <Grid item xs={12} sm={6} sx={{ p: 2 }}>
              <Typography variant="h4" color="text.primary">
                SLEEK &amp; MINIMAL
              </Typography>
              <Typography>
              The streamlined design allows you to carry only what you need, 
              eliminating the need for bulky wallets that take up too much space in your pocket. 
              With its slim profile and minimalist aesthetic, 
              the Freedom Clip is perfect for those who appreciate simplicity and want to declutter 
              their lives.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        {/* <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography> */}
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Decycle<sup>&trade;</sup>
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}