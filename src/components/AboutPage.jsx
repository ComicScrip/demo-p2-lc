import React from 'react';
import TeamMember from './TeamMember';
import style from './AboutPage.module.css';

function AboutPage() {
  return (
    <>
      <h1 className={style.title}>Notre équipe</h1>
      <div className={style.memberList}>
        <TeamMember
          name="Pierre"
          bio={'Bio Pierre'}
          githubUrl="https://github.com/ComicScrip"
          avatarUrl={'https://github.com/ComicScrip.png'}
        />
        <TeamMember
          name="Nico"
          bio={'Bio Nico'}
          githubUrl="https://github.com/NycoChavanoud"
          avatarUrl={'https://github.com/NycoChavanoud.png'}
        />
      </div>
    </>
  );
}

export default AboutPage;

/*
INFO POUR LES MEMBRES
        name="Pierre"
        bio={'Bio Pierre'}
        githubLink="https://github.com/ComicScrip"

        name="Nico"
        bio={'Bio Nico'}
        githubLink="https://github.com/NycoChavanoud"

        */
