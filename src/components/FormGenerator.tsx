import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const FormGenerator: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as { purpose: string } | null;

  if (!state?.purpose) {
    navigate('/');
    return null;
  }

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Generating Form for: {state.purpose}</h2>
      {/* You can now call OpenAI API here using the purpose */}
    </div>
  );
};

export default FormGenerator;
