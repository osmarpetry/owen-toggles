import React from 'react';
import { Features } from './feature';

export const { Consumer, Provider } = React.createContext<Features>({
  features: {},
});
