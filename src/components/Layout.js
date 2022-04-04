import Footer from './Footer';
import Header from './Header';

export default function Layout(props) {
  return (
    <>
      <Header />
      <main style={{ marginTop: '20px' }}>{props.children}</main>
      <Footer />
    </>
  );
}
