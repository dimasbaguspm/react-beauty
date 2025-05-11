import { FC } from 'react';
import { useParams } from 'react-router';

const InterfaceDetailPage: FC = () => {
  const { uiSlug } = useParams();
  return (
    <div>
      <h1>Interface Detail Page</h1>
      <p>This is the interface detail page - {uiSlug}</p>
    </div>
  );
};
export default InterfaceDetailPage;
