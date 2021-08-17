import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      {children}
      <footer>
        <span>Created By Hayden West</span>
      </footer>
    </div>
  );
};

export default Layout;
