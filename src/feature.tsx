import React from 'react';
import { Consumer} from './context';

type Feature = { [key: string]: string }
export type Features = { features: Feature }
type CustomComponent<T extends object> = React.ComponentType<T & Features>
type CustomChildren<T extends object> = React.ReactElement<Features> | CustomComponent<T>

interface FeatureProps<T extends object> {
  children: (features: Features) => CustomChildren<T>
  activeComponent?: CustomComponent<T>
  inactiveComponent?: CustomComponent<T>
  name: string
  props: T
}

export const Feature = <T extends object>({
  activeComponent,
  children,
  inactiveComponent,
  name,
  props
}: FeatureProps<T>): React.ReactElement => (
  <Consumer>
    {({features}): CustomChildren<T> => {
      const Component = features[name] ? activeComponent : inactiveComponent;

      return activeComponent && Component
        ? <Component {...props} features={features} />
        : children({ features })
    }}
  </Consumer>
);