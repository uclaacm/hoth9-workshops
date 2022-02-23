import { Container, Grid, Typography } from '@mui/material';

function Header() {
    return (
        <Container maxwidth='fill'>
            <Grid container padding={3} direction='column' textAlign='center'>
                <Grid item>
                    <Typography variant='h2' color='#C900FF'>
                        Welcome to HOTH 9!
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}
export default Header;