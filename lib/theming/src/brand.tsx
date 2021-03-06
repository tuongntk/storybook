import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Svg = styled.svg(({ inline }: { inline: boolean; children: React.ReactNode }) =>
  inline
    ? {
        display: 'inline-block',
      }
    : {
        display: 'block',
      }
);
Svg.displayName = 'Svg';

const Storybook = (props: { inline: boolean; height: string }) => (
  <Svg viewBox="0 0 420 538" {...props}>
    <path d="M 420,0 28,28 52,520 420,538 Z" fill="#f1618c" />
    <path d="M 324.8652,6.79492 320,72 348.4004,50.5996 372,72 V 3.42774 Z" fill="#fff" />
    <path
      d="m 230,96.80078 c 67.6,0 106.5996,37.19884 104.5996,111.79882 l -77.4004,2 v -0.1992 c 1.6,-40 -15.7984,-44 -25.3984,-44 -9,0 -24.4004,2.8004 -24.4004,24.4004 0,53.4 131.4004,50.4 131.4004,158 0,60.4 -46.8008,88.39844 -106.8008,88.39844 -62,0 -116.4,-21.19884 -110,-113.79884 h 81 c -1,37.4 7.2008,50.79884 27.8008,50.79884 16,0 23.1992,-8.99844 23.1992,-24.39844 0,-54.8 -129.5996,-56.6 -129.5996,-157 0,-57.6 37.5996,-96 105.5996,-96 z"
      fill="#fff"
    />
    <path d="M 42,520 18,28 H 0 l 18,492 z" fill="#b57ee5" />
  </Svg>
);
const BrandWrapper = styled.a({
  minHeight: 30,
  verticalAlign: 'top',
  display: 'flex',
  color: 'inherit',
  textDecoration: 'none',
});
const BrandText = styled.span({
  paddingLeft: 10,
  alignItems: 'center',
  display: 'flex',
  lineHeight: '12px',
});

export const Brand = ({ title }: { title: string }) => (
  <BrandWrapper href="./">
    <Storybook height="30px" inline />
    <BrandText>
      <strong>{title}</strong>
    </BrandText>
  </BrandWrapper>
);
Brand.propTypes = {
  title: PropTypes.string.isRequired,
};
