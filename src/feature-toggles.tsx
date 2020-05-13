import React, { SFC } from 'react';
import { Provider } from './context';
import { FeatureType } from './feature';

interface FeatureTogglesProps {
  children: React.ReactChild;
  features: FeatureType
}

export const FeatureToggles: SFC<FeatureTogglesProps> = ({
  children,
  features = {},
}) => <Provider value={{ features }}>{children}</Provider>;
