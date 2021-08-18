import { MdDashboard } from "react-icons/md";
import { BiCube } from "react-icons/bi";
import GroupIcon from "@material-ui/icons/Group";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import WorkIcon from "@material-ui/icons/Work";
import { GoPackage } from "react-icons/go";
import { RiProductHuntLine } from "react-icons/ri";
const theSideBarData = [
  {
    icon: <MdDashboard></MdDashboard>,
    title: "Dashboard",
  },

  {
    icon: <GroupIcon></GroupIcon>,
    title: "Customers",
  },
  {
    icon: <PersonPinIcon></PersonPinIcon>,
    title: "Tailors",
  },

  {
    icon: <GoPackage></GoPackage>,
    title: "Orders",
  },
  {
    icon: <RiProductHuntLine></RiProductHuntLine>,
    title: "Products",
  },
];
export default theSideBarData;
