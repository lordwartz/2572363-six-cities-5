export type LocationProps = {
  location: string;
  onClickHandle: () => void;
}

export function Location({location, onClickHandle}: LocationProps) {
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#" onClick={() => onClickHandle()}>
        <span>{location}</span>
      </a>
    </li>
  );
}

export type LocationsProps = {
  locations: string[];
  onClickHandle: (city: string) => void;
}

export function Locations({ locations, onClickHandle }: LocationsProps) {
  return (
    <ul className="locations__list tabs__list">
      {locations.map((city) => <Location key={city} location={city} onClickHandle={() => onClickHandle(city)}/>)}
    </ul>
  );
}
