import React from 'react';

import ProviderNavigation from '/src/components/ProviderComponents/ProviderNavigation.jsx';

import EventForm from '/src/components/EventForm.jsx';

const ProviderCreate = () => {
  return (
    <div>
    <ProviderNavigation />
    <div>
        {/* Create event form */}
        <EventForm /> 
    </div>
    </div>
);
};

export default ProviderCreate;