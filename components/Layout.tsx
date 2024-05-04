import FollowBar from "./layout/FollowBar";
import SideBar from "./layout/SideBar";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen bg-black">
      <div className="container h-full mx-auto xl:px-30 max-w-6xl">
        <div className="grid grid-cols-4 h-full">
          <SideBar />
          <div className="col-span-3 border-x-[1px] border-neutral-800 lg:col-span-2">
            {children}
          </div>
          <FollowBar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
