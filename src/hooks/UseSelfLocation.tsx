import { useState, useEffect } from 'react';

interface Location {
  latitude: number | null;
  longitude: number | null;
}

interface UseSelfLocationResult {
  location: Location;
  error: string | null;
}

const useSelfLocation = (): UseSelfLocationResult => {
  const [location, setLocation] = useState<Location>({ latitude: null, longitude: null });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error: GeolocationPositionError) => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, []);

  return { location, error };
};

export default useSelfLocation;
