import 'leaflet/dist/leaflet.css';
import {useEffect, useRef} from 'react';
import {Icon, layerGroup, Marker} from 'leaflet';
import useMap from '../../hooks/use-map.tsx';
import {City} from '../../types/map.ts';
import {CURRENT_MARKER, DEFAULT_MARKER} from '../../const.ts';
import {Offer, Offers} from '../../types/offer.ts';

const defaultCustomIcon = new Icon({
  iconUrl: DEFAULT_MARKER,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: CURRENT_MARKER,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

type MapProps = {
  city: City;
  offers: Offers;
  selectedOffer: Offer | undefined;
};

export default function Map(props: MapProps) {
  const {city, offers, selectedOffer} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map !== null) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            selectedOffer !== undefined && offer.id === selectedOffer.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [offers, selectedOffer, city, map]);

  return (
    <section
      style={{height: '500px'}}
      className="cities__map map"
      ref={mapRef}
    />);
}
