import LBCLogo from '../Logo/logo';
import Footer from '../Footer/footer';
import BackHome from '../BackHome/backhome';

const Layout: React.FC<{children: JSX.Element, home: boolean}> = ({ children, home }): JSX.Element => {
  return (
    <div className="container">
        <main className="main">
            <LBCLogo />
            {children}
            {!home && <BackHome />}
        </main>
        <Footer />
    </div>
  );
}

Layout.defaultProps = {
  home: false,
}

export default Layout;