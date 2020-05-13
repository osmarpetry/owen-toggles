import React from 'react';
import { Consumer } from './context';

export type FeatureType = { [key: string]: boolean };
export type FeaturesType = { features: FeatureType };
type FeaturesList = { featuresList: FeatureType };
export type CustomComponent<T extends object> = React.ComponentType<T & FeaturesList>;
type CustomChildren<T extends object> =
  | React.ReactElement<FeaturesList>
  | CustomComponent<T>;

interface FeatureProps<T extends object> {
  children?: (features: FeaturesType) => CustomChildren<T>;
  activeComponent?: CustomComponent<T>;
  inactiveComponent?: CustomComponent<T>;
  name: string;
  props?: T;
}

export const Feature = <T extends object>({
  activeComponent,
  children = () => null,
  inactiveComponent,
  name,
  props,
}: FeatureProps<T>): React.ReactElement => (
  <Consumer>
    {({ features }): CustomChildren<T> => {
      const Component = features[name] ? activeComponent : inactiveComponent;

      return activeComponent && Component ? (
        <Component {...props} featuresList={features} />
      ) : (
        children({ features })
      );
    }}
  </Consumer>
);
