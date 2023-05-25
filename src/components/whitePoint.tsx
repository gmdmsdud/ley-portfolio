import React from 'react';
import styled from 'styled-components';

const Text = styled.span`
  color: white;
`;

const YellowPoint = ({ children }: { children: React.ReactNode }) => {
  return <Text>{children}</Text>;
};

export default YellowPoint;
