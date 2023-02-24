import { Outlet, Link } from "react-router-dom";
import "./SharedLayout.styles";
import { Navbar, BigSidebar, SmallSidebar } from "../../../components";
import Wrapper from "./SharedLayout.styles";

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        {/* First Column */}
        <SmallSidebar />
        <BigSidebar />

        {/* Second Column */}
        <div>
          <Navbar />
          <div className="dashboard-page">
            {/* outlet for the nested pages */ <Outlet />}
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayout;
