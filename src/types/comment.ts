import {User} from './user.ts';

export type Comment = {
  id: string;
  user: User;
  comment: string;
  rating: number;
  date: Date;
};

export type Comments = Comment[];
