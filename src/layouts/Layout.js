// import "./../i18n";
// import Head from "next/head";
import NavBar from "../components/navBar/NavBar";
// import Footer from "components/footer/Footer";

const Layout = ({
  children,
  title,
  setActiveTab,
  tabs,
  value,
  handleChange,
}) => {
  return (
    <div>
      <main>
        <NavBar
          setActiveTab={setActiveTab}
          tabs={tabs}
          value={value}
          handleChange={handleChange}
        />
        {children}
        {/* <Footer /> */}
      </main>
    </div>
  );
};
export default Layout;
