import { StatisticsList } from './App.styled';

export const Statistics = ({good, neutral, bad, total, positivePercentage }) => {
    return (
        <StatisticsList>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Positive feedback: {positivePercentage}</li>
        </StatisticsList>
    )
};

    // <ul>
    //     <li>Good: {this.state.good}</li>
    //     <li>Neutral: {this.state.neutral}</li>
    //     <li>Bad: {this.state.bad}</li>
    //     <li>Positive feedback: {this.countPositiveFeedbackPercentage()}% </li>
    // </ul>
