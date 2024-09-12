import "./index.css";
import Naruto from '../../assets/logo.png';
import { IoIosExit, IoMdSettings } from "react-icons/io";
import { RxDashboard } from 'react-icons/rx';
import { FaCalendarAlt } from 'react-icons/fa';
import { MdAlternateEmail, MdLibraryBooks } from 'react-icons/md';
import { HiDocumentReport } from 'react-icons/hi';
import { PiNotebookBold } from 'react-icons/pi';
import { TbWorld } from 'react-icons/tb';
import { IoChatbubbleEllipses } from "react-icons/io5";

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="sidebar-logo">
        <img src={Naruto} alt="Naruto Logo" />
      </div>
      <nav className="sidebar-menu">
        <ul>
          <li>
            <RxDashboard />
            Dashboard
          </li>
          <li>
            <FaCalendarAlt />
            Jadval
          </li>
          <li>
            <MdLibraryBooks />
            Kurslar
          </li>
          <li>
            <HiDocumentReport />
            Report
          </li>
          <li>
            <PiNotebookBold />
            Darslar
          </li>
          <li>
            <MdAlternateEmail />
            Email
          </li>
          <li>
            <IoChatbubbleEllipses />
            Chat
          </li>
          <li>
            <IoMdSettings />
            Sozlamalar
          </li>
          <li>
            <TbWorld />
            Uz
          </li>
        </ul>
      </nav>
      <div className="sidebar-profile">
        <img src={Naruto} alt="Profile" />
        <div>
          <h5>Bobur</h5>
          <p>Student</p>
        </div>
        <IoIosExit />
      </div>
    </div>
  );
}

export default Sidebar;
