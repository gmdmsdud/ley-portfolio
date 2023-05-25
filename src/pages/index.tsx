import { useMediaQuery } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';

import ExperienceContainer from '#/components/ExperienceContainer';
import Footer from '#/components/Footer';
import IntroductionContainer from '#/components/IntroductionContainer';
import ScrollTopButton from '#/components/ScrollTopButton';

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export default function Main() {
  const isOver1100px = useMediaQuery('(min-width:1100px)');

  return (
    <>
      <Head>
        {/* HTML Meta Tags */}
        <title>이은영 포트폴리오</title>
        <meta name="description" content="최고의 프론트엔드 개발자를 꿈꾸는 이은영의 포트폴리오입니다." />

        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1 maximum-scale=1, user-scalable=no" />
      </Head>
      <main>
        <Section>
          <IntroductionContainer />
          <ExperienceContainer />
          <Footer />
          {isOver1100px && <ScrollTopButton />}
        </Section>
      </main>
    </>
  );
}
