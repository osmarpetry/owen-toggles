import React, { SFC } from 'react';
import { Provider } from './context';

interface FeatureTogglesProps {
  children: React.ReactChild;
  features: Array<'string'>;
}

export const FeatureToggles: SFC<FeatureTogglesProps> = ({
  children,
  features = [],
}) => <Provider value={features}>{children}</Provider>;
