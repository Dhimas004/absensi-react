import React from "react";
import { useParams } from "react-router-dom";

const Sidebar = () => {
  const { pages, subpages } = useParams();

  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
      </a>

      <hr className="sidebar-divider my-0" />

      <li className={"nav-item " + (pages == "dashboard" ? "active" : "")}>
        <a className="nav-link" href="/main">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </a>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Absensi</div>

      <li className={"nav-item " + (pages == "absensi" ? "active" : "")}>
        <a
          className={"nav-link " + (pages == "absensi" ? "" : "collapsed")}
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-book-open"></i>
          <span>Absensi</span>
        </a>
        <div
          id="collapseTwo"
          className={"collapse " + (pages == "absensi" ? "show" : "")}
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            {/* <h6 className="collapse-header">Custom Components:</h6> */}
            <a
              className={
                "collapse-item " + (subpages == "dosen" ? "active" : "")
              }
              href="/main/absensi/dosen"
            >
              Dosen
            </a>
            <a
              className={
                "collapse-item " + (subpages == "mahasiswa" ? "active" : "")
              }
              href="/main/absensi/mahasiswa"
            >
              Mahasiswa
            </a>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Sidebar;
