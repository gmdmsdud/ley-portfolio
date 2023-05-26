import { useMediaQuery } from '@material-ui/core';
import React from 'react';

import { FadeInContent } from '#/components/gsap';

import TableOfContents from '../TableOfContents';
import { ExperienceTitle } from './common';
import * as Content from './contents';
import * as Styled from './styled';

const CONTENT_DELAY_TIME = 0.3;

const ExperienceContainer = () => {
  const isOver1100px = useMediaQuery('(min-width:1100px)');

  return (
    <Styled.Container id="experience-container">
      {isOver1100px && (
        <Styled.TableOfContents>
          <TableOfContents />
        </Styled.TableOfContents>
      )}
      <Styled.Contents>
        <Styled.ExperienceContainer>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <ExperienceTitle title="Project" />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.MyTechBlogAsProjects />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.ReactSeasonComponent />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.FindDifferentColor />
          </FadeInContent>
        </Styled.ExperienceContainer>
      </Styled.Contents>
    </Styled.Container>
  );
};

export default ExperienceContainer;
