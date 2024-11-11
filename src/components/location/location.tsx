export type LocationProps = {
  location: string;
  handleClick: () => void;
}

export function Location({location, handleClick}: LocationProps) {
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#" onClick={() => handleClick()}>
        <span>{location}</span>
      </a>
    </li>
  );
}

export type LocationsProps = {
  locations: string[];
  handleClick: (city: string) => void;
}

export function Locations({ locations, handleClick }: LocationsProps) {
  return (
    <ul className="locations__list tabs__list">
      {locations.map((city) => <Location key={city} location={city} handleClick={() => handleClick(city)}/>)}
    </ul>
  );
}
