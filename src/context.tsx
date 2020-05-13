import React from 'react';
import { FeaturesType } from './feature';

export const { Consumer, Provider } = React.createContext<FeaturesType>({
  features: {},
});
