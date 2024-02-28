import React from 'react';
import AccountPic from '../Assets/AccountPic.png';
import PeriodSelector from './PeriodSelector';

interface LeftContainerProps {
  onDailyClick: () => void;
  onWeeklyClick: () => void;
  onMonthlyClick: () => void;
}

const LeftContainer: React.FC<LeftContainerProps> = ({ onDailyClick, onWeeklyClick, onMonthlyClick }) => {
  return (
    <div className='leftContainer'>
      <div className='Presentation'>
        <img src={AccountPic} alt='Person' />
        <h3 className='Text Report'>Report for</h3>
        <h1 className='Text'>Zanina Ala</h1>
      </div>
      <div className='Period'>
        <PeriodSelector onClick={onDailyClick} label='Daily' />
        <PeriodSelector onClick={onWeeklyClick} label='Weekly' />
        <PeriodSelector onClick={onMonthlyClick} label='Monthly' />
      </div>
    </div>
  );
};

export default LeftContainer;
