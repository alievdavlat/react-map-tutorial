import { Grid } from '@mui/material'
import CardComponent from '../../components/CardComponent'
import LocationMarker from './LocationMarker'
import "leaflet/dist/leaflet.css";

const LeafFleatMap = () => {
  return (
    <Grid container spacing={6}>
      <CardComponent title='Location Marker'>
        <LocationMarker/>
      </CardComponent>
    </Grid>
  )
}

export default LeafFleatMap