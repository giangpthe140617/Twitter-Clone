import { IconType } from "react-icons";

interface SideBarItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
}
const SideBarItem: React.FC<SideBarItemProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
}) => {
  return (
    <div className="flex flex-row items-center">
      <div
        className="
            rounded-full 
            h-14
            w-14
            p-4
            flex
            items-center
            justify-center
            hover:bg-blue-300
            hover:bg-opacity-10
            cursor-pointer
            lg:hidden
        "
      >
        <Icon size={24} color="white" />
      </div>
      <div
        className="
        relative
        hidden
        lg:flex
        gap-4
        p-4
        rounded-full
        hover:bg-blue-300
        hover:bg-opacity-10
        cursor-pointer
      "
      >
        <Icon size={28} color="white" />
        <p className="hidden lg:block text-white text-xl">{label}</p>
      </div>
    </div>
  );
};

export default SideBarItem;
