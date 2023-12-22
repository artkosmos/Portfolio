import React from 'react';
import style from './Project.module.css'
import {BlockTitle} from '../componets/BlockTitle';
import {Card} from "../componets/Card";
import plan_pilot_preview from './img/planner_preview.png'
import brain_decks_preview from './img/brain_decks_preview.png'
import shelter_preview from './img/shelter_review.png'
import uber_preview from './img/uber_preview.png'

type ProjectPropsType = {
  id: string
}

export const Project = (props: ProjectPropsType) => {
  return (
    <div className={style.project} id={props.id}>
      <div className={style.project__body}>
        <BlockTitle title={'Projects'}/>
        <div className={style.project__cards}>
          <Card
            title={'PlanPilot'}
            img={plan_pilot_preview}
            text={'This app is a place where you can create, edit and delete notes, ' +
              'keep them in active or complete status and divide into separate cards.'}
            info={'Tech stack : JavaScript, TypeScript, React, Redux Toolkit, React Router, SCSS'}
            href={'https://artkosmos.github.io/PlanPilot'}
            hrefCode={'https://github.com/artkosmos/PlanPilot'}
          />
          <Card
            title={'BrainDecks'}
            img={brain_decks_preview}
            text={'This app represents decks of cards that can be sorted, edited, added, or viewed by other users. ' +
              'Users can create cards with images, answers and questions and then study or guess these ones evaluate them. This makes a rating of cards.'}
            info={'Tech stack : JavaScript, TypeScript, React, RTK Query, React Router, React Hook Form, i18n, Storybook, Radix UI, SCSS'}
            href={'https://brain-decks.vercel.app/'}
            hrefCode={'https://github.com/artkosmos/BrainDecks'}
          />
          <Card
            title={'Shelter'}
            img={shelter_preview}
            text={'This project presents a landing of \'Shelter\' for dogs and cats, where you can choose your new little friend.'}
            info={'Tech stack : HTML, CSS, Javascript'}
            href={'https://artkosmos.github.io/Shelter/shelter/pages/main/main.html'}
            hrefCode={'https://github.com/artkosmos/Shelter'}
          />
          <Card
            title={'Uber'}
            img={uber_preview}
            text={'The landing designed for recruiting and managing taxi drivers in ' +
              'the city of Moscow. It invites drivers with their own vehicles and ' +
              'also describes the advantages of working with the company.'}
            info={'Tech stack : HTML, CSS'}
            href={'https://artkosmos.github.io/UBER-landing/src/index.html'}
            hrefCode={'https://github.com/artkosmos/Uber-landing'}
          />
        </div>
      </div>
    </div>
  );
};
