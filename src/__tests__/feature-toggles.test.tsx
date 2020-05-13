import React from 'react';
import { render } from '@testing-library/react';

import { FeatureToggles } from '../feature-toggles';
import { CustomComponent, Feature } from '../feature';

describe('<Feature/>', () => {
  it('should render feature', () => {
    const features = { CONFIG_INFRACTIONS: true };
    const Button: CustomComponent<object> = () => <button data-testid="config">Button Config</button>;

    const { queryByTestId } = render(
      <FeatureToggles features={features}>
        <Feature name="CONFIG_INFRACTIONS" activeComponent={Button} />
      </FeatureToggles>
    );
    expect(queryByTestId(/config/i)).toBeTruthy();
  });

  it('should not render feature', () => {
    const features = { CONFIG_INFRACTIONS: false };
    const Button: CustomComponent<object> = () => <button data-testid="config">Button Config</button>;

    const { queryByTestId } = render(
      <FeatureToggles features={features}>
        <Feature name="CONFIG_INFRACTIONS" activeComponent={Button} />
      </FeatureToggles>
    );
    expect(queryByTestId(/config/i)).toBeFalsy();
  });
});
