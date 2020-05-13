import React, { SFC } from 'react';
import { Consumer, ContextProps } from './context';


interface FeatureProps {
  activeComponent?: React.ReactElement<{featuresList: FeatureProps}>
  children: (features: ContextProps) => void
  inactiveComponent?: React.ReactElement<{featuresList: FeatureProps}>
  name: string
  props: object
}


export const Feature: SFC<FeatureProps> = ({
  activeComponent,
  children,
  inactiveComponent,
  name,
  props = {}
}) => (
  <Consumer>
    {(features) => {
      const Component: React.ReactElement<{featuresList: FeatureProps}>  = features[name] ? activeComponent : inactiveComponent;
      return activeComponent ? (
        <Component {...props} featuresList={features} />
      ) : (
        children({ features })
      );
    }}
  </Consumer>
);


