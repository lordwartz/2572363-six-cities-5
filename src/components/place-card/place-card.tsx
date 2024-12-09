import {Offer, Offers} from '../../types/offer.ts';
import {Link} from 'react-router-dom';

export type PlaceCardProps = {
  offer: Offer;
  handleHovered: (offer: Offer) => void;
}

export function PlaceCard({ offer, handleHovered } : PlaceCardProps) {
  const offerLink = `/offer/${offer.id}`;

  return (
    <article className="cities__card place-card"
      onMouseEnter={() => {
        handleHovered(offer);
      }}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={offerLink}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
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
          <Link to={offerLink}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

type OffersListProps = {
  offers: Offers;
  handleOfferHovered: (offer: Offer) => void;
}

export function PlaceCardsList({offers, handleOfferHovered}: OffersListProps) {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard key={offer.id}
          offer={offer}
          handleHovered={(selectedOffer) => handleOfferHovered(selectedOffer)}
        />
      ))}
    </div>
  );
}
