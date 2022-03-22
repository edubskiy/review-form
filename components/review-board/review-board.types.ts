import { ThemedStyledFunction } from 'styled-components';

export interface ReviewBoard {
  id: number;
  scoreCount: number;
  progress: number;
  scoreVotes: number;
  color: string;
}

export interface ReviewBoardBarProps
  extends Partial<ThemedStyledFunction<'div', any, {}, never>> {
  progress: number;
  color: string;
}
