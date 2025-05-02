import React from 'react';
import { Link } from 'react-router-dom';
import ProviderActivityCard from '/src/components/ProviderComponents/ProviderActivityCard';

const ProviderActivityCardDisplay = ({ activitySearch }) => {
  return (
    <div >
      {activitySearch?.map(activity => (
        <Link
          key={activity.id}
          to={`/ProviderDetail/${activity.id}`}
          state={{ activity }}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <ProviderActivityCard activity={activity} />
        </Link>
      ))}
    </div>
  );
}
export default ProviderActivityCardDisplay;



/** TO DO: fix the activity cards basically so that on the published posts apge it doesnt link to /activitydeatisl/1 but instead a provider version of the details that then also links back to dashboard instead of home
 *
 */