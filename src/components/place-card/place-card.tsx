import {Offer, Offers} from '../../types/offer.ts';
import {useState} from 'react';

export type PlaceCardProps = {
  offer: Offer;
  onCardHovered: (id: number) => void;
}

export default function PlaceCard({ offer, onCardHovered } : PlaceCardProps) {
  return (
    <article className="cities__card place-card"
      onMouseEnter={() => {
        onCardHovered(offer.id);
      }}
      onMouseLeave={() => onCardHovered(0)}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={offer.image} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.pricePerNight}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(offer.rating) * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{offer.title}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

type OffersListProps = {
  offers: Offers;
}

export function PlaceCardsList({offers}: OffersListProps) {
  const [, setActiveOffer] = useState(0);
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard key={offer.id} offer={offer} onCardHovered={(id) => setActiveOffer(id)}/>
      ))}
    </div>
  );
}
