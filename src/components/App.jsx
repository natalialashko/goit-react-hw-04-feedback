import React from 'react';
import { useState } from 'react';
import Statistics from './Statistics/Statistics'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Section from 'components/Section/Section';
import { Container } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  console.log(good, neutral, bad);
  const options = ['good', 'neutral', 'bad'];
  
  const handleFeedback = (type) => {
    if (type === 'good') setGood(prevGood => prevGood + 1);
    if (type === 'neutral') setNeutral(prevNeutral => prevNeutral + 1);
    if (type === 'bad') setBad(prevBad => prevBad + 1);
    // console.log(type)
    // this.setState((prevState) => ({[type]:prevState[type] + 1}))
  }
  const countTotalFeedback = (good, neutral, bad) => {
      return good+neutral+bad
    }
  const countPositiveFeedbackPercentage = (good, neutral, bad) => {
    let total = good + neutral + bad;
    return (
       total === 0 ? 0 : ((good / total) * 100).toFixed(0)
      )
    }

const positivePercentage = countPositiveFeedbackPercentage(good, neutral, bad);
const total = countTotalFeedback(good, neutral, bad);
  return (
     <Container >
        
        <Section title="Please leave feedback">
         <FeedbackOptions options={ options } onLeaveFeedback={handleFeedback.bind(this)}  />
         </Section>
         <Section title="Statistics">
         <Statistics stats={{ good, neutral, bad, total, positivePercentage }} />
         </Section>
      </Container> 
  );
}

