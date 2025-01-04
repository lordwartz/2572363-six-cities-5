import {Offers} from '../../types/offer.ts';
import {FavoriteCard} from '../favorite-card/favorite-card.tsx';

type FavoritesListProps = {
  offers: Offers;
}

export function FavoriteCardsList({offers }: FavoritesListProps) {
  return (
    <div className="favorites__places">
      {offers.map((offer) => (
        <FavoriteCard key={offer.id}
          offer={offer}
        />
      ))}
    </div>
  );
}
