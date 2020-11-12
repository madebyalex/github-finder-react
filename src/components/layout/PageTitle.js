import React from 'react';
import Helmet from 'react-helmet';

const PageTitle = ({ title }) => {
  let defaultTitle = 'GitHub Finder App';
  return (
    <Helmet>
      <title>{title ? title : defaultTitle}</title>
    </Helmet>
  );
};

export { PageTitle };
