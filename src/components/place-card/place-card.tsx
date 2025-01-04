import { Offer, Offers } from '../../types/offer.ts';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { changeFavoriteState } from '../../store/api-actions.ts';
import { useAppDispatch } from '../../hooks';
import { capitalizeFirstLetter, toStarsWidth } from '../../services/utils.tsx';
import PrivateElement from '../../hocs/private-element/private-element.tsx';

export type PlaceCardProps = {
  offer: Offer;
  handleHovered: (offer: Offer) => void;
};

export function PlaceCard({ offer, handleHovered }: PlaceCardProps) {
  const dispatch = useAppDispatch();
  const [isFavorite, setIsFavorite] = useState<boolean>(offer.isFavorite);
  const [isChangedFavorite, setIsChangedFavorite] = useState<boolean>(false);
  const offerLink = `/offer/${offer.id}`;

  useEffect(() => {
    if (isChangedFavorite){
      dispatch(changeFavoriteState({offerId: offer.id, isFavorite: isFavorite}));
      setIsChangedFavorite(false);
    }
  }, [isChangedFavorite, dispatch, isFavorite, offer.id]);

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
          <PrivateElement>
            <button
              className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`}
              type="button"
              onClick={() => {
                setIsFavorite(!isFavorite);
                setIsChangedFavorite(true);
              }}
            >
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">{isFavorite ? 'Remove from bookmarks' : 'To bookmarks'}</span>
            </button>
          </PrivateElement>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: toStarsWidth(offer.rating)}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerLink}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(offer.type)}</p>
      </div>
    </article>
  );
}

type OffersListProps = {
  offers: Offers;
  handleOfferHovered: (offer: Offer) => void;
}

export function PlaceCardsList({offers, handleOfferHovered }: OffersListProps) {
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
