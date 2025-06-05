import { Box,Typography } from '@mui/material'
import React from 'react'

const Kural = () => {
  return (
    <Box sx={{width:'100%',height:170,backgroundColor:'white',display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'}}>

         <Typography variant="h6" sx={{ whiteSpace: "pre-line",fontSize:30,textAlign:'left',fontStyle:'italic',wordSpacing:7 }}>
        "சொல்லுதல்  யார்க்கும்  எளிய அரியவாம்<br />
        சொல்லிய  வண்ணம்  செயல்"
    </Typography>
    </Box>
  )
}

export default Kural
