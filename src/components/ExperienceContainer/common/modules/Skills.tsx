import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';

import { CommonArticleContainer, CommonArticleContainerTitle } from '../../styled';

interface ImageProps {
  src: string;
  alt: string;
}

interface SkillProps {
  skill: string;
  explain: string;
  image?: ImageProps;
}

const Skills = ({ skills }: { skills: SkillProps[] }) => {
  return (
    <CommonArticleContainer>
      <CommonArticleContainerTitle>
        <BorderColorOutlinedIcon />
        사용기술들
      </CommonArticleContainerTitle>
      {skills.map((skill, index) => (
        <Accordion key={`${index + 1}-${skill.skill}`}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="content" id="header">
            <Typography>{skill.skill}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ whiteSpace: 'pre-wrap' }}>{skill.explain}</Typography>
          </AccordionDetails>
          {skill.image ? (
            <AccordionDetails>
              <img style={{ width: '100%', objectFit: 'contain' }} src={skill.image.src} alt={skill.image.alt} />
            </AccordionDetails>
          ) : null}
        </Accordion>
      ))}
    </CommonArticleContainer>
  );
};

export default Skills;
