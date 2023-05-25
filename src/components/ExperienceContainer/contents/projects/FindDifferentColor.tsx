import React from 'react';

import { Explain, InlineLinkText, Links, Skills } from '../../common';
import * as Styled from '../../styled';
import EXPLAIN from './explains';

const LINKS = [
  {
    text: 'GitHub Repository',
    href: 'https://github.com/gmdmsdud/nwitter',
  },
  {
    text: 'firebase 트위터',
    href: 'https://gmdmsdud.github.io/nwitter',
  },
];

const SKILLS = [
  {
    skill: 'Frontend',
    explain: EXPLAIN.프론트엔드1,
  },
  {
    skill: 'Backend',
    explain: EXPLAIN.백엔드1,
  },
];

const FindDifferentColor = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>개인 프로젝트</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="firebase 트위터">
        <InlineLinkText href="https://gmdmsdud.github.io/nwitter">firebase 트위터</InlineLinkText>
      </Styled.ExperienceCardTitle>

      <Styled.ExperienceCardExplainContainer>
        <Explain> 트윗 작성, 수정, 삭제 등 리얼타임CRUD 구현</Explain>
        <Explain>이메일 또는 Google 및 Github 로그인 가입</Explain>
      </Styled.ExperienceCardExplainContainer>
      <video controls>
        <source src="tweet.mp4" type="video/mp4" />
        <track src="captions_en.vtt" kind="captions" srcLang="en" label="english_captions" />
      </video>
      <Links links={LINKS} />
      <Skills skills={SKILLS} />
    </Styled.ExperienceCard>
  );
};

export default FindDifferentColor;
