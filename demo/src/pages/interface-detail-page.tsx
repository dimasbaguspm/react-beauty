import { FC } from 'react';
import { useLocation } from 'react-router';

import { DEEP_LINKING_ROUTES } from '../constants/routes';
import Interfaces from '../modules/interfaces';

const InterfaceDetailPage: FC = () => {
  const { pathname } = useLocation();

  const isSameWith = (path: string): boolean => pathname.includes(path);

  return (
    <>
      {isSameWith(DEEP_LINKING_ROUTES.UI_ACCORDION) && <Interfaces.Accordion />}
      {isSameWith(DEEP_LINKING_ROUTES.UI_AVATAR) && <Interfaces.Avatar />}
    </>
  );
};
export default InterfaceDetailPage;
