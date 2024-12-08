import {PlaceCardsList} from '../../components/place-card/place-card.tsx';
import {Helmet} from 'react-helmet-async';
import {Offer} from '../../types/offer.ts';
import Header from '../../components/header/header.tsx';
import {user} from '../../mocks/users.ts';
import {useState} from 'react';
import {Locations} from '../../components/location/location.tsx';
import Map from '../../components/map/map.tsx';
import {citiesMock} from '../../mocks/citiesMock.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {setCity} from '../../store/action.ts';
import {getOffersByCity} from '../../app/offers.api.ts';


export default function Main() {
  const dispatch = useAppDispatch();
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const currentOffers = getOffersByCity(city.title, offers);
  const [currentOffer, setCurrentOffer] = useState<Offer | undefined>(undefined);


  return (
    <section>
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <Header user={user}/>
      <div className="page page--gray page--main">
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <Locations locations={citiesMock} handleClick={(selectedCity) => dispatch(setCity(selectedCity))}/>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{currentOffers.length} places to stay in {city.title}</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex={0}>
                  Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                    <li className="places__option" tabIndex={0}>Price: low to high</li>
                    <li className="places__option" tabIndex={0}>Price: high to low</li>
                    <li className="places__option" tabIndex={0}>Top rated first</li>
                  </ul>
                </form>
                {<PlaceCardsList offers={currentOffers} handleOfferHovered={(selectedOffer) => setCurrentOffer(selectedOffer)}/>}
              </section>
              <div className="cities__right-section">
                <Map city={city} selectedOffer={currentOffer} offers={currentOffers}/>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
