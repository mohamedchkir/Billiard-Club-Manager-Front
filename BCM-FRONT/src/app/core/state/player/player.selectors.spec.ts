import * as fromPlayer from './player.reducer';
import { selectPlayerState } from './player.selectors';

describe('Player Selectors', () => {
  it('should select the feature state', () => {
    const result = selectPlayerState({
      [fromPlayer.playerFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
