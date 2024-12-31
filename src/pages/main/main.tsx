import { PlaceCardsList } from '../../components/place-card/place-card.tsx';
import { Helmet } from 'react-helmet-async';
import { Offer, Offers } from '../../types/offer.ts';
import Header from '../../components/header/header.tsx';
import { user } from '../../mocks/users.ts';
import { useEffect, useState } from 'react';
import { Locations } from '../../components/location/location.tsx';
import Map from '../../components/map/map.tsx';
import { cities } from '../../mocks/cities.ts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCity } from '../../store/action.ts';
import { sortOffers } from '../../api/offers.api.ts';
import SortOptions from '../../components/sort-options/sort-options.tsx';
import { SortOption } from '../../components/sort-options/sort-option.ts';
import LoadingScreen from '../loading-screen/loading-screen.tsx';

export default function Main() {
  const dispatch = useAppDispatch();
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const [currentOffers, setCurrentOffers] = useState<Offers>([]);
  const [activeOffer, setActiveOffer] = useState<Offer | undefined>(undefined);
  const [activeSortOption, setActiveSortOption] = useState<SortOption>(SortOption.Popular);
  const isDataLoading = useAppSelector((state) => state.isDataLoading);

  useEffect(() => {
    const filteredOffers = offers.filter((offer) => offer.city.name === city.name);
    const sortedOffers = sortOffers(filteredOffers, activeSortOption);
    setCurrentOffers(sortedOffers);
  }, [city, offers, activeSortOption]);

  const handleSort = (sortOption: SortOption) => {
    setActiveSortOption(sortOption);
  };

  if (isDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <section>
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <Header user={user} />
      <div className="page page--gray page--main">
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <Locations locations={cities} handleClick={(selectedCity) => dispatch(setCity(selectedCity))} />
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{currentOffers.length} places to stay in {city.name}</b>
                <SortOptions onSort={handleSort} activeSortOption={activeSortOption} />
                <PlaceCardsList offers={currentOffers} handleOfferHovered={(selectedOffer) => setActiveOffer(selectedOffer)} />
              </section>
              <div className="cities__right-section">
                <Map city={city} selectedOffer={activeOffer} offers={currentOffers} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
