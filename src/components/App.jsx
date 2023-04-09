import React, { Component } from "react";
import css from "./App/App.module.css";
import Statistic from "./Statistic/Statistic";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";


class App extends Component {  
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  leaveFeedback = e => {
    this.setState({[e]: this.state[e] + 1 });
  };

  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  countPositiveFeedbackPercentage = ({good}) => Math.round((good * 100) / this.countTotalFeedback(this.state));


  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={css.container}>
        <Section title={'Please leave youre feedback about our service'}>         
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.leaveFeedback} />        
        </Section>          
        
        <Section title={'Our Statistics'}>  
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={this.countPositiveFeedbackPercentage(this.state)}
           />
          
        </Section>

      </div>
    )
  }
};

export default App;
