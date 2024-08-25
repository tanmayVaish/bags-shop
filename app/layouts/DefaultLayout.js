import Header from "../components/Header";
import Footer from "../components/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div className="default-layout">
      <Header />
      <main className="main">{children}</main>
    </div>
  );
};

export default DefaultLayout;
