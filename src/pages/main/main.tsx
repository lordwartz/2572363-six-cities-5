import {PlaceCardsList} from '../../components/place-card/place-card.tsx';
import {Helmet} from 'react-helmet-async';
import {Offers} from '../../types/offer.ts';
import Header from '../../components/header/header.tsx';
import {user} from '../../mocks/users.ts';
import {useState} from 'react';
import {Locations} from '../../components/location/location.tsx';
import {Cities} from '../../const.ts';

type MainProps = {
  offers: Offers;
}

export default function Main({ offers }: MainProps) {
  const [location, setLocation] = useState<string>('Amsterdam');

  const offersFilteredByLocation = offers.filter((offer) => offer.location === location);

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
              <Locations locations={Cities} onClickHandle={(city) => setLocation(city)}/>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offersFilteredByLocation.length} places to stay in {location}</b>
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
                {<PlaceCardsList offers={offersFilteredByLocation} />}
              </section>
              <div className="cities__right-section">
                <section className="cities__map map"></section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
