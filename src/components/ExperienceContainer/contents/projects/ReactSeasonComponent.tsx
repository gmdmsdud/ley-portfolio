import React from 'react';

import { Explain, InlineLinkText, Links, Skills } from '../../common';
import * as Styled from '../../styled';
import EXPLAIN from './explains';

const LINKS = [
  {
    text: 'graphql을 이용한 홈페이지',
    href: 'https://myhome5-pbg12k9ea-gmdmsdud.vercel.app/',
  },
  {
    text: 'GitHub Repository',
    href: 'https://github.com/gmdmsdud/myhome5 ',
  },
];

const SKILLS = [
  {
    skill: 'Frontend',
    explain: EXPLAIN.frontend,
  },
  {
    skill: 'Backend',
    explain: EXPLAIN.backend,
  },
];

const ReactSeasonComponent = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>개인 프로젝트</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="graphql을 이용한 홈페이지">
        <InlineLinkText href="https://myhome5-pbg12k9ea-gmdmsdud.vercel.app/">graphql을 이용한 홈페이지</InlineLinkText>
      </Styled.ExperienceCardTitle>

      <Styled.ExperienceCardExplainContainer>
        <Explain>Graphql을 이용한 게시물 댓글 수정, 등록 기능</Explain>
        <Explain>pagination을 이용한 페이지 버튼</Explain>
        <Explain>openapi를 이용해 사진불러오기</Explain>
        <Explain>이미지업로드, 검색기능 구현</Explain>
      </Styled.ExperienceCardExplainContainer>
      <video controls>
        <source src="myhome.mp4" type="video/mp4" />
        <track src="captions_en.vtt" kind="captions" srcLang="en" label="english_captions" />
      </video>
      <Links links={LINKS} />
      <Skills skills={SKILLS} />
    </Styled.ExperienceCard>
  );
};

export default ReactSeasonComponent;
