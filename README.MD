<!-- Logo -->
<p align="center">
  <img width="150" src="logo.png" alt="Owen-Toggles logo"></a></p>
</p>

<!-- Name -->
<h1 align="center">Owen-Toggles</h1>

<!-- Badges -->
<div align="center">

[React](http://facebook.github.io/react/) UI toolkit for the web.

![npm version](https://img.shields.io/npm/v/@zup-stark/owen-toggles.svg)
![npm licence](https://img.shields.io/npm/l/@zup-stark/owen-toggles.svg)

</div>

[React](http://facebook.github.io/react/) HOC to toggle components by features on or off.

## Installation

Owen-Toggles is available as an [npm package](https://www.npmjs.com/package/@zup-next/owen-toggles).

```sh
npm install owen-toggles
```

## Usage

First you should declare `<FeatureToggles />` in your main container. Don't forget to pull the list of feature from the backend or a local const.

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { FeatureToggles } from '@zup-stark/owen-toggles';

import { getTogglesFromTheBackend } from 'core/utils/feature-toggles';

const AppRender = (features) => {
  render(
    <FeatureToggles features={features}>
      <AwesomeApplication />
    </FeatureToggles>,
    document.getElementById('root')
  );
}

const renderApplication = async () => {
  const features = await getTogglesFromTheBackend();
  return AppRender(features);
};

renderApplication()
```

Then you implement a component (`<AwesomeComponent />` in this case) inside `<Feature />`.

> Important: Every `<Feature />` should be below `<FeatureToggles />`

```jsx
import React from 'react'
import { Feature } from '@zup-stark/owen-toggles'

import AwesomeComponent from '../components/AwesomeComponent'

const AwesomeContainer = () => {
  const listOfAwesomePeople = ['Ada Lovelace', 'Margaret Hamilton']

  const handleClickOnListItem = (item) => alert(`You clicked on ${item}`)

  return (
    <Feature
      name="AWESOME"
      activeComponent={AwesomeComponent}
      props={{
        list: listOfAwesomePeople,
        onClickOnListItem: handleClickOnListItem
      }}
    />
  )
}

export default AwesomeContainer
```

Features json example:
```js
{
  CONFIG_INFRACTIONS: true,
  CHART_INFRACTIONS: false
}
```

## Contributing

Bug reports, feature requests and other contributions are more than welcome! <br/>
Whenever possible, please make a pull request with the implementation instead of just requesting it.

> If the feature is big, open an issue first for discussion.


## License

This project is licensed under the terms of the
[MIT license](/LICENSE).