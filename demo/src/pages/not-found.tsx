import { FC } from 'react';

const NotFoundPage: FC = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p>
        Please check the URL or return to the <a href="/">home page</a>.
      </p>
    </div>
  );
};

export default NotFoundPage;
