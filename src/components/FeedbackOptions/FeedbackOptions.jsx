import React from 'react';
import PropTypes from 'prop-types';
import {BtnFeedbackOptions, SectionOption } from './FeedbackOptions.styled'


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
          <SectionOption>
        {options.map((btn) => (
          <BtnFeedbackOptions key={btn}
            onClick={() => onLeaveFeedback(btn)}
          >
            {btn}</BtnFeedbackOptions>)
        )}
      </SectionOption>
  );
}

export default FeedbackOptions;



FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback:PropTypes.func
}