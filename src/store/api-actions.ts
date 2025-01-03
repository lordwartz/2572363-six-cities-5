import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {AppDispatch, State} from '../types/state.ts';
import {DetailedOffer, Offers} from '../types/offer.ts';
import {APIRoute, AuthorizationStatus} from '../const.ts';
import {clearUserData, setOffers, requireAuthorization, setUserData} from './action.ts';
import {AuthData, LoginResponse} from '../types/authorization.ts';
import {dropToken, saveToken} from '../services/token.ts';
import {Comment, Comments} from '../types/comment.ts';
import {User} from '../types/user.ts';

export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offers>(APIRoute.Offers);
      dispatch(setOffers(data));
    } catch (e) {
      dispatch(setOffers([]));
    }
  },
);

export const fetchOffer = createAsyncThunk<DetailedOffer, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<DetailedOffer>(`${APIRoute.Offers}/${offerId}`);
    return data;
  }
);

export const fetchComments = createAsyncThunk<Comments, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async (id, {extra: api}) => {
    try{
      const {data} = await api.get<Comments>(`${APIRoute.Comments}/${id}`);
      return data;
    } catch (e) {
      return [];
    }
  }
);

export const fetchFavorites = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  }>(
    'data/fetchFavorites',
    async (_arg, {extra: api}) => {
      try {
        const {data} = await api.get<Offers>(APIRoute.Favorites);
        return data;
      } catch (e) {
        return [];
      }
    }
  );

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<User>(APIRoute.Login);
      dispatch(setUserData(data));
      dispatch(requireAuthorization(AuthorizationStatus.Authorized));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.Unauthorized));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<LoginResponse>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Authorized));
    dispatch(setUserData({
      name: data.name, email: data.email, isPro: data.isPro, avatarUrl: data.avatarUrl}));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.Unauthorized));
    dispatch(clearUserData());
  },
);

export const sendComment = createAsyncThunk<void, [Comment, string], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/sendComment',
  async ([request, offerId], {extra: api}) => {
    await api.post(`${APIRoute.Comments}/${offerId}`, request);
  }
);
