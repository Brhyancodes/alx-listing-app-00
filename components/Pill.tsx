import React from 'react';

interface PillProps {
  label: string;
  onClick: () => void;
}

const Pill: React.FC<PillProps> = ({ label, onClick }) => {
  return (
    <span onClick={onClick} className="pill">
      {label}
    </span>
  );
};

export default Pill;