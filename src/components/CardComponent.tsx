import React, { ReactNode } from "react";
import {Card, CardHeader, CardContent, Grid} from '@mui/material';
import Divider from '@mui/material/Divider'

interface ICardProps {
  children: ReactNode,
  title:string
}

const CardComponent:React.FC<ICardProps> = ({children, title}) => {
  return (
    <Grid item xs={12} sx={{height:'300px', p:0, m:0}}>
      <Card>
      <CardHeader title={title} />
      <Divider sx={{ m: '0 !important' }} />
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </Grid>
  )
}

export default CardComponent