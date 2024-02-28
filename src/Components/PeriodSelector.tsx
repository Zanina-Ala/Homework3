import React from 'react';

interface PeriodSelectorProps {
  onClick: () => void;
  label: string;
}

const PeriodSelector: React.FC<PeriodSelectorProps> = ({ onClick, label }) => {
  return <h2 onClick={onClick}>{label}</h2>;
};

export default PeriodSelector;