import React from 'react';
import TeamMember from '../components/TeamMember';
import style from './AboutPage.module.css';

function AboutPage() {
  return (
    <>
      <h1 className={style.title}>Notre équipe</h1>
      <div className={style.memberList}>
        <TeamMember
          name="Nico"
          bio={'Bio Nico'}
          githubUrl="https://github.com/NycoChavanoud"
          avatarUrl={'https://github.com/NycoChavanoud.png'}
        />
        <TeamMember
          name="Pierre"
          bio={'Bio Pierre'}
          githubUrl="https://github.com/ComicScrip"
          avatarUrl={'https://github.com/ComicScrip.png'}
        />
      </div>
    </>
  );
}

export default AboutPage;
