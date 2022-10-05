import { Component } from "react";
import { FeedbackOptions } from './FeedbackOptions';
import { SectionTitle } from "./SectionTitle";
import { Statistics } from "./Statistics";
// import { StatisticTitleSection, BtnList, Btn, StatisticsSection } from './App.styled';

export class App extends Component {

state = {
  good: 0,
  neutral: 0,
  bad: 0
}

  handleFeedbackClick = type => (this.setState(prevState => ({ [type]: prevState[type] + 1, })));

  countTotalFeedback = () => {
   const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {

    return Math.round((this.state.good * 100) / this.countTotalFeedback());

  };

  render() {
    const { good, neutral, bad } = this.state;
     return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
       >
        <SectionTitle title="Please leave feedback">
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleFeedbackClick}></FeedbackOptions>      
        </SectionTitle>

        <SectionTitle title="Statistics">
           {this.countTotalFeedback() > 0 ? 
         ( <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.handleFeedbackClick()}/>) : (<p>No feedback given</p>)}
        </SectionTitle>
    </div>
  );
}

 
};
