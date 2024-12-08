import cn from 'classnames';
import {Offers} from '../../types/offer.ts';
import {useState} from 'react';

export enum SortOption {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first'
}

type SortOptionsProps = {
  offers: Offers;
  onSort: (sortedOffers: Offers, sortOption: SortOption) => void;
  activeSortOption: SortOption;
}

export const sortOffers = (offers: Offers, sortOption: SortOption) => {
  const sortedOffers = [...offers];
  switch (sortOption) {
    case SortOption.Popular:
      break;
    case SortOption.PriceLowToHigh:
      sortedOffers.sort((a, b) => a.pricePerNight - b.pricePerNight);
      break;
    case SortOption.PriceHighToLow:
      sortedOffers.sort((a, b) => b.pricePerNight - a.pricePerNight);
      break;
    case SortOption.TopRatedFirst:
      sortedOffers.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }
  return sortedOffers;
};
export default function SortOptions(props: SortOptionsProps) {
  const {offers, onSort, activeSortOption} = props;
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const handleOptionClick = (sortOption: SortOption) => {
    const sortedOffers = sortOffers(offers, sortOption);
    onSort(sortedOffers, sortOption);
    setIsOptionsOpen(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOptionsOpen((prev) => !prev)}
      >
        {activeSortOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isOptionsOpen && <ul className="places__options places__options--custom places__options--opened">
        {Object.values(SortOption).map((option, index) => (
          <li
            key={index}
            className={cn('places__option', { 'places__option--active': option === activeSortOption })}
            tabIndex={0}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>}
    </form>
  );
}
