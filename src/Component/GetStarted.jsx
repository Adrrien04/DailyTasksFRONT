import React from 'react'
import { 
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
import imgDetail from '../assets/pexels-alex-staudinger-1732414.jpg';
import imgDetail2 from '../assets/pexels-pixabay-271816.jpg';

const GetStarted = () => {

    const CustomGridItem = styled(Grid) ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })
    
    const CustomTypography = styled(Typography) ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    })

    return (
            
        <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}   
        sx={{
            py: 10,
            px: 2,
        }}
        >
            <CustomGridItem item xs={12} sm={8} md={6} 
            component='section'>
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title text='Transformez vos tâches en jeu' textAlign={'start'} />
                    <CustomTypography>
                        Accomplissez vos tâches quotidiennes tout en vous amusant grâce à Daily Quests !
                    </CustomTypography> 
                </Box>
            </CustomGridItem>

            <Grid item xs={12} sm={4} md={6}>
                <img src={imgDetail} alt="" style={{ width: '100%' }} />
            </Grid>

            <Grid item xs={12} sm={4} md={6}
            sx={{
                order: {xs: 4, sm: 4, md: 3}
            }}
            >
                <img src={imgDetail2} alt="" style={{ width: "100%" }} />
            </Grid>

            <CustomGridItem item xs={12} sm={8} md={6}
            sx={{
                order: {xs: 3, sm: 3, md: 4}
            }}
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}>
                    <Title text='Suivez vos progrès' textAlign={'start'} />
                    <CustomTypography>
                        Suivez vos progrès et obtenez des récompenses à chaque étape franchie avec Daily Quests.
                    </CustomTypography>
                </Box>
            </CustomGridItem>
        </Grid>
    )
}

export default GetStarted;