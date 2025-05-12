import { Icon, Sidebar } from '@react-beauty/interfaces';
import { useThemeContext } from '@react-beauty/ui-core';
import { startCase } from 'lodash';
import { FC, Fragment } from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router';

import { pageLayoutData } from './helpers';

export const SideBar: FC = () => {
  const { pathname } = useLocation();
  const { changeTheme, theme } = useThemeContext();

  return (
    <Sidebar isExpanded>
      <Sidebar.Header>
        @react-beauty
        {theme === 'dark' ? (
          <Icon name="otherSun" onClick={() => changeTheme('light')} />
        ) : (
          <Icon name="otherMoon" onClick={() => changeTheme('dark')} />
        )}
      </Sidebar.Header>
      <Sidebar.Body>
        {pageLayoutData.map(([title, items]) => (
          <Fragment key={title}>
            <Sidebar.Section>
              <Sidebar.SectionTitle>{startCase(title)}</Sidebar.SectionTitle>
              <Sidebar.ItemList>
                {items.map((item) => (
                  <Sidebar.Item
                    active={item.pageId === pathname}
                    key={item.pageId}
                  >
                    <NavLink data-active to={item.pageId}>
                      {item.title}
                    </NavLink>
                  </Sidebar.Item>
                ))}
              </Sidebar.ItemList>
            </Sidebar.Section>
          </Fragment>
        ))}
      </Sidebar.Body>
    </Sidebar>
  );
};
