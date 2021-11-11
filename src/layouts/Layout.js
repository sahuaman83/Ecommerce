import NavBar from "../components/navBar/NavBar";

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
      </main>
    </div>
  );
};
export default Layout;
