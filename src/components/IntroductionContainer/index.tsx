import React from 'react';

import { UNDER_LINE_COLOR } from '#/colors';
import { FadeInBodyText, FadeInContent, FadeInHeaderText, Underline } from '#/components/gsap';
import YellowPoint from '#/components/YellowPoint';
import { LAST_UPDATED } from '#/constants';

import * as Styled from './styled';

const IntroductionContainer = () => {
  return (
    <Styled.Container>
      <FadeInContent delay={1}>
        <Styled.Sidebar>
          <Styled.LinkContainer>
            <Styled.Link href="https://github.com/gmdmsdud" target="_blank">
              GitHub<YellowPoint>.</YellowPoint>
            </Styled.Link>
            <Styled.Link href="https://occipital-road-050.notion.site/b9264d658480462bb90e429419095f1d/" target="_blank">
              Notion<YellowPoint>.</YellowPoint>
            </Styled.Link>
          </Styled.LinkContainer>

          <Styled.BottomContainer>
            <Styled.Email href="mailto:ley690qw@naver.com">ley690qw@naver.com</Styled.Email>
            <Styled.LastUpdated>Last update: {LAST_UPDATED}</Styled.LastUpdated>
          </Styled.BottomContainer>
        </Styled.Sidebar>
      </FadeInContent>
      <Styled.Main>
        <FadeInHeaderText delay={1.5}>
          <Styled.SubTitle>안녕하세요. Frontend 개발자 </Styled.SubTitle>
        </FadeInHeaderText>
        <FadeInHeaderText delay={1.9}>
          <Styled.Title>
            <Underline color={UNDER_LINE_COLOR} delay={2.4}>
              이은영
            </Underline>
          </Styled.Title>
          <Styled.SubTitle>입니다.</Styled.SubTitle>
        </FadeInHeaderText>
        <FadeInBodyText delay={2.6}>
          <Styled.BodyTextContainer>
            <Styled.BodyText>새로운 기술과 동향 을 주시하며, </Styled.BodyText>
            <Styled.BodyText>항상 배우고 성장하는 것을 중요하게 생각합니다</Styled.BodyText>
          </Styled.BodyTextContainer>
        </FadeInBodyText>
        <div>
          <Styled.ImageBox>
            <img src="/dmsdud5.jpg" alt="ley-background" draggable={false} />
          </Styled.ImageBox>
        </div>

        <FadeInContent delay={3.5}>
          <Styled.DownAnimatedArrow fontSize="large" />
        </FadeInContent>
      </Styled.Main>
    </Styled.Container>
  );
};

export default IntroductionContainer;
