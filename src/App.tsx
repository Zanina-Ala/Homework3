import React, { useState } from 'react';
import RightCard from './Components/RightCard';
import LeftContainer from './Components/LeftContainer';
import './App.css';

function App() {
  const [values, setValues] = useState({
    Val1: 25,
    Val2: 30,
    Val3: 65,
    Val4: 15,
    Val5: 16,
    Val6: 29,
    Val7: 'last week - 50',
    Val8: 'last week - 60',
    Val9: 'last week - 44',
    Val10: 'last week - 88',
    Val11: 'last week - 15',
    Val12: 'last week - 19',
  });

  const handlePeriodChange = (periodValues: any) => {
    setValues(periodValues);
  };

  const cards = [
    { value: 'Work', hours: values.Val1, period: values.Val7, bgColor: '#FF8B64' },
    { value: 'Play', hours: values.Val2, period: values.Val8, bgColor: '#56C2E6' },
    { value: 'Study', hours: values.Val3, period: values.Val9, bgColor: '#FF5E7D' },
    { value: 'Exercise', hours: values.Val4, period: values.Val10, bgColor: '#4BCF83' },
    { value: 'Social', hours: values.Val5, period: values.Val11, bgColor: '#7235D1' },
    { value: 'Self care', hours: values.Val6, period: values.Val12, bgColor: '#F1C75B' },
  ];

  return (
    <div className='App'>
      <div className='left'>
        <LeftContainer
          onDailyClick={() =>
            handlePeriodChange({
              Val1: 17,
              Val2: 18,
              Val3: 60,
              Val4: 11,
              Val5: 8,
              Val6: 20,
              Val7: 'last day - 19',
              Val8: 'last day - 15',
              Val9: 'last day - 9',
              Val10: 'last day - 10',
              Val11: 'last day - 5',
              Val12: 'last day - 13',
            })
          }
          onWeeklyClick={() =>
            handlePeriodChange({
              Val1: 25,
              Val2: 30,
              Val3: 65,
              Val4: 15,
              Val5: 16,
              Val6: 29,
              Val7: 'last week - 50',
              Val8: 'last week - 60',
              Val9: 'last week - 44',
              Val10: 'last week - 88',
              Val11: 'last week - 15',
              Val12: 'last week - 19',
            })
          }
          onMonthlyClick={() =>
            handlePeriodChange({
              Val1: 90,
              Val2: 79,
              Val3: 99,
              Val4: 88,
              Val5: 52,
              Val6: 31,
              Val7: 'last month - 99',
              Val8: 'last month - 80',
              Val9: 'last month - 96',
              Val10: 'last month - 80',
              Val11: 'last month - 45',
              Val12: 'last month - 99',
            })
          }
        />
      </div>
      <div className='right'>
        {cards.map((val, index) => (
          <RightCard key={index} {...val} />
        ))}
      </div>
    </div>
  );
}

export default App;
