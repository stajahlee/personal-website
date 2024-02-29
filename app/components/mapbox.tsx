"use client";
import React, {useEffect, useState, useMemo, useRef} from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import LocationDetails from '../hooks/user-location';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || ''

const Mapbox: React.FC = () => {
  const loc = LocationDetails()
  const mapContainerRef = useRef<HTMLDivElement>(null);
  
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const [latitude] = useState(loc.default.latitude);
  const [longitude] = useState(loc.default.longitude); 
  const [zoom] = useState(3);

  useEffect(() => {
    const attachMap = (setMap: React.Dispatch<React.SetStateAction<any>>, mapDiv: React.RefObject<HTMLDivElement>) => {
      if (!mapDiv.current) {
        return;
      }

      const map = new mapboxgl.Map({
        container: mapDiv.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: { lat: latitude, lng: longitude },
        zoom: zoom,
      })
      setMap(map);
    }

    if (map !== null) {
      map.addControl(new mapboxgl.NavigationControl(), 'top-right');

      map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true,  
            showUserHeading: true
        })
    );

      map.on("load", () => {
        map && map.resize();  // force map to fit inside container when it loads
      })
    } else {
      attachMap(setMap, mapContainerRef)
    }
    
    // Clean up on unmount
    if (map === null) {
      return;
    }
    if (map !==null) return () => map?.remove();
  }, [latitude, longitude, zoom, map]); 

  return (
    <div className="h-full w-full" ref={mapContainerRef} />
  );
};

export default Mapbox;