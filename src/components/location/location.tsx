import {City} from '../../types/map.ts';
import {useAppSelector} from '../../hooks';

export type LocationProps = {
  location: City;
  handleClick: () => void;
}

export function Location({location, handleClick}: LocationProps) {
  const selectedCity = useAppSelector((state) => state.city);
  const isCurrentSelected = selectedCity.name === location.name;
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${isCurrentSelected ? 'tabs__item--active' : ''}`} onClick={() => handleClick()}>
        <span>{location.name}</span>
      </a>
    </li>
  );
}

export type LocationsProps = {
  locations: City[];
  handleClick: (city: City) => void;
}

export function Locations({ locations, handleClick }: LocationsProps) {
  return (
    <ul className="locations__list tabs__list">
      {locations.map((city) => <Location key={city.name} location={city} handleClick={() => handleClick(city)}/>)}
    </ul>
  );
}
