import PropTypes from 'prop-types';
import { BtnList, Btn } from './App.styled';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (<BtnList>
        {options.map(option => (
            <li key={option}>
                <Btn onClick={() => onLeaveFeedback(option)}>{option}</Btn>
            </li>
          )) }
    </BtnList>);
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

//  <BtnList>
//              <li>
//                <Btn type="button" onClick={() => this.handleFeedbackClick('good')}>good</Btn>
//              </li>
//              <li>
//                <Btn type="button" onClick={() => this.handleFeedbackClick('neutral')}>neutral</Btn>
//              </li>
//              <li>
//                <Btn type="button" onClick={() => this.handleFeedbackClick('bad')}>bad</Btn>
//              </li>
//           </BtnList>