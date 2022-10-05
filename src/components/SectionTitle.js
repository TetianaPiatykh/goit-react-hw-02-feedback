import { StatisticTitleSection } from './App.styled';


export const SectionTitle = ({ title, children }) => {
    return (
        <StatisticTitleSection>
            <h2>{title}</h2>
            {children}</StatisticTitleSection>

    )
};