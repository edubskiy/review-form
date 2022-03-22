import { ThemedStyledFunction } from 'styled-components';

export type RateItem = {
  name: string;
  text: string;
  value: number;
};

export interface StarsLabelProps
  extends Partial<ThemedStyledFunction<'label', any, {}, never>> {
  checked?: boolean;
  hovered?: boolean;
}
