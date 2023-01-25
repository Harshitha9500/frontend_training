import { createAction, props } from '@ngrx/store';

export const search = createAction(
    '[Search Book] Search',
    props<{ coll: string; book: string }>()
  );