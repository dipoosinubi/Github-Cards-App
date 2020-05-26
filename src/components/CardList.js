import React from 'react';
import Card from './Card';

const CardList = (props) =>  (

    <div className='cardList'>
      {props.profiles.map(profile => < Card key={profile.id}{...profile}/>)}
    </div>
)

export default CardList;