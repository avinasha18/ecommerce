import {  useMediaQuery, useTheme } from '@mui/material'
import { Stack } from '@mui/material'
import React from 'react'



export const Footer = () => {

    const theme=useTheme()
    const is700=useMediaQuery(theme.breakpoints.down(700))


  return (
    <Stack sx={{backgroundColor:theme.palette.primary.main,paddingTop:"3rem",paddingLeft:is700?"1rem":"3rem",paddingRight:is700?"1rem":"3rem",paddingBottom:"1.5rem",rowGap:"5rem",color:theme.palette.primary.light,justifyContent:"space-around"}}>

            
           <h1>Tejassri Avinasha</h1>

         
         

    </Stack>
  )
}
