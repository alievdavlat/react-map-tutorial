import React, { useRef, useState, useMemo, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import useSelfLocation from '../../hooks/UseSelfLocation';

const LocationMarker: React.FC = () => {
  const [draggable, setDraggable] = useState(false);
  const [position, setPosition] = useState<L.LatLngExpression | null>(null);
  //@ts-ignore
  const mapRef = useRef<MapContainer>(null);
  //@ts-ignore
  const markerRef = useRef<Marker>(null);
  const { location, error } = useSelfLocation();

  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d);
  }, []);

  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
        }
      },
    }),
    []
  );

  const LocationEvents: React.FC = () => {
    useMapEvents({
      click() {
        mapRef.current?.locate();
      },
      locationfound(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);
        mapRef.current?.flyTo(e.latlng, mapRef.current.getZoom());
      },
    });
    return null;
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (location.latitude === null || location.longitude === null) {
    return <p>Loading...</p>;
  }

  return (
    <MapContainer
      center={[location.latitude, location.longitude]}
      zoom={13}
      ref={mapRef}
      style={{ height: '500px', width: '100vw' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationEvents />
      {position && (
        <Marker
          draggable={draggable}
          eventHandlers={eventHandlers}
          position={position}
          ref={markerRef}
        >
          <Popup minWidth={90}>
            <span onClick={toggleDraggable}>
              {draggable
                ? 'Marker is draggable'
                : 'Click here to make marker draggable'}
            </span>
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default LocationMarker;
