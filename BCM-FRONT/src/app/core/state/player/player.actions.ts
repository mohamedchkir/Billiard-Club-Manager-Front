import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const PlayerActions = createActionGroup({
  source: 'Player',
  events: {
    'Load Players': emptyProps(),
    'Load Players Success': props<{ data: unknown }>(),
    'Load Players Failure': props<{ error: unknown }>(),
  }
});
