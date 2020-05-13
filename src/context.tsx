import React from 'react';

export interface ContextProps {
  features: Array<object>
}

export const { Consumer, Provider } = React.createContext<Partial<ContextProps>>({features: []});

