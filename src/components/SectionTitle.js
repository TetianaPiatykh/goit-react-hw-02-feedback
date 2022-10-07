import PropTypes from 'prop-types';
import { StatisticTitleSection } from './App.styled';


export const SectionTitle = ({ title, children }) => {
    return (
        <StatisticTitleSection>
            <h2>{title}</h2>
            {children}</StatisticTitleSection>

    )
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};