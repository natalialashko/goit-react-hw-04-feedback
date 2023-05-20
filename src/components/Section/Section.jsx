import React from 'react';
import PropTypes from 'prop-types';
import { SectionData, TitleSectionData} from './Section.styled';

const Section = ({title, children}) => {
    return (
        <SectionData>
            <TitleSectionData>{title}</TitleSectionData>
            {children}
        </SectionData>
        
    );
}
export default Section;

PropTypes.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string
}
 