type Coordinates = {
  latitude: number
  longitude: number
}

export type Position = {
  coords: Coordinates
}

type Error = {
  code: number
  message: string
}

const LocationDetails = () => {
  const centralUSLat = 40
  const centralUSLng = -98
  let coordinates = { latitude: centralUSLat, longitude: centralUSLng }

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  return { 
    default: coordinates, 
    options
  }
}

export default LocationDetails;