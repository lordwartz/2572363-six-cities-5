import {MutableRefObject, useEffect, useRef, useState} from 'react';
import {Map, TileLayer} from 'leaflet';
import {City} from '../types/map.ts';
import {COPYRIGHT, TILE_LAYER_TEMPLATE} from '../const.ts';

export default function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: City
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null) {
      if(!isRenderedRef.current){
        const instance = new Map(mapRef.current, {
          center: {
            lat: city.lat,
            lng: city.lng
          },
          zoom: city.zoom,
        });

        const layer = new TileLayer(
          TILE_LAYER_TEMPLATE,
          {
            attribution: COPYRIGHT
          }
        );

        instance.addLayer(layer);
        setMap(instance);
        isRenderedRef.current = true;
      } else {
        map?.setView({ lat: city.lat, lng: city.lng }, city.zoom);
      }
    }
  }, [city, map, mapRef]);

  return map;
}
