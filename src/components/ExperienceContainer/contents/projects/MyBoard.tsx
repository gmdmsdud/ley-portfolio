import React from 'react';

import { Explain, Links, Skills } from '../../common';
import * as Styled from '../../styled';
import EXPLAIN from './explains';

const LINKS = [
  {
    text: "'자영업 사장님들' 게시판 ",
    href: 'http://ec2-13-125-0-236.ap-northeast-2.compute.amazonaws.com/',
  },
  {
    text: 'GitHub Repository',
    href: 'https://github.com/gmdmsdud/reddit3/  ',
  },
];

const SKILLS = [
  {
    skill: 'Frontend',
    explain: EXPLAIN.프론트엔드,
  },
  {
    skill: 'Backend',
    explain: EXPLAIN.백엔드,
  },
];

const MyTechBlog = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>개인 프로젝트</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="자영업사장님">자영업 사장님</Styled.ExperienceCardTitle>
      <Styled.ExperienceCardPeriod>2023년 3월 - 1인 개발</Styled.ExperienceCardPeriod>
      <Styled.ExperienceCardExplainContainer>
        <Explain>자유로운 토론, 정보공유를 위한 게시판 개발</Explain>
        <Explain>반응형 웹페이지</Explain>
        <Explain>무한스크롤 기능</Explain>
        <Explain>aws(ec2)배포</Explain>
      </Styled.ExperienceCardExplainContainer>
      <video autoPlay controls>
        <source src="sub.mp4" type="video/mp4" />
        <track src="captions_en.vtt" kind="captions" srcLang="en" label="english_captions" />
      </video>
      <Links links={LINKS} />
      <Skills skills={SKILLS} />
    </Styled.ExperienceCard>
  );
};

export default MyTechBlog;
