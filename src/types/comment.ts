import {User} from './User.ts';

export type Comment = {
  id: string;
  user: User;
  comment: string;
  rating: number;
  date: Date;
};

export type Comments = Comment[];
