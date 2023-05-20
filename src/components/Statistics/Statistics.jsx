// import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notification from 'components/Notification/Notification';
import { SectionStatistics, NameStat, ContainerStat } from './Statistics.styled';

import React from 'react';

const Statistics = ({stats}) => {
  const {good, neutral, bad, total, positivePercentage} = stats;
   console.log(stats);
  console.log(stats.total);
  return (
     <SectionStatistics>
         {total ? (
           <ContainerStat>
             <NameStat>Good {good} </NameStat>
             <NameStat>Neutral: {neutral} </NameStat>
             <NameStat>Bad: {bad} </NameStat>
             <NameStat>Total: {total} </NameStat>
             <NameStat>Positive feedback: {positivePercentage} % </NameStat>
           </ContainerStat>
         ) : (
           <Notification message="There is no feedback" />
         )}
       </SectionStatistics>
  );
}

export default Statistics;

Statistics.propTypes = {
  stats: PropTypes.object,
}