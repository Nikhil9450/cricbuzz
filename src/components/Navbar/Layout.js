import { Fragment } from 'react';
import Navbar from './Navbar';
import layoutStyle from './Layout.module.css'
const Layout = (props) => {
  return (
    <Fragment>
      <Navbar />
      <main className={layoutStyle.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;