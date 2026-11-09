"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name, e) => {
    e.stopPropagation();
    setOpenDropdown(openDropdown === name ? null : name);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(`.${styles.dropdown}`) &&
        !event.target.closest(`.${styles.menuToggle}`)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.headerContent}`}>
        {/* Left Side: Logo & Title */}
        <div className={styles.brand}>
          <img
            src="/images/sri-lanka.png"
            alt="DAPH Logo"
            className={styles.logo}
          />
          <span className={styles.title}>
            Department of Animal
            <br />
            Production and Health
          </span>
        </div>

        {/* Right Side: Navigation */}
        <nav className={styles.navContainer}>
          {/* Hamburger Toggle Button for Mobile/Tablet */}
          <div
            className={styles.menuToggle}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="fa fa-bars"></i>
          </div>

          <div
            className={`${styles.menu} ${isMobileMenuOpen ? styles.active : ""}`}
          >
            <div className={styles.menuItem}>
              <p>Home</p>
            </div>

            {/* Main Dropdown */}
            <div
              className={`${styles.menuItem} ${styles.dropdown} ${openDropdown === "main" ? styles.active : ""}`}
              onClick={(e) => toggleDropdown("main", e)}
            >
              Main <i className="fa fa-caret-down"></i>
              <div
                className={`${styles.dropdownMenu} ${openDropdown === "main" ? styles.show : ""}`}
              >
                <div className={styles.dropdownItem}>
                  <Link href="/search-request">Search Request</Link>
                </div>
              </div>
            </div>

            {/* Services Dropdown */}
            <div
              className={`${styles.menuItem} ${styles.dropdown} ${openDropdown === "services" ? styles.active : ""}`}
              onClick={(e) => toggleDropdown("services", e)}
            >
              Services <i className="fa fa-caret-down"></i>
              <div
                className={`${styles.dropdownMenu} ${openDropdown === "services" ? styles.show : ""}`}
              >
                <div className={styles.dropdownItem}>
                  <Link href="/update-task">Update my tasks</Link>
                </div>
                <div className={styles.dropdownItem}>
                  <Link href="">Allocate Sub Votes</Link>
                </div>
                <div className={styles.dropdownItem}>
                  <Link href="">Allocate Salary To Vs</Link>
                </div>
              </div>
            </div>

            {/* Planning Dropdown */}
            <div
              className={`${styles.menuItem} ${styles.dropdown} ${openDropdown === "planning" ? styles.active : ""}`}
              onClick={(e) => toggleDropdown("planning", e)}
            >
              Planning <i className="fa fa-caret-down"></i>
              <div
                className={`${styles.dropdownMenu} ${openDropdown === "planning" ? styles.show : ""}`}
              >
                <div className={styles.dropdownItem}>
                  <Link href="">Create Request Claim Barcode</Link>
                </div>
                <div className={styles.dropdownItem}>
                  <Link href="">Request Claim Create</Link>
                </div>
                <div className={styles.dropdownItem}>
                  <Link href="">Capex Budget Create</Link>
                </div>
                <div className={styles.dropdownItem}>
                  <Link href="">Capex Budget Update</Link>
                </div>
                <div className={styles.dropdownItem}>
                  <Link href="">Request Claim Confirm</Link>
                </div>
              </div>
            </div>

            {/* Account Dropdown */}
            <div
              className={`${styles.menuItem} ${styles.dropdown} ${openDropdown === "account" ? styles.active : ""}`}
              onClick={(e) => toggleDropdown("account", e)}
            >
              Account <i className="fa fa-caret-down"></i>
              <div
                className={`${styles.dropdownMenu} ${openDropdown === "account" ? styles.show : ""}`}
              >
                <div className={styles.dropdownItemGroup}>
                  <div className={styles.dropdownItem}>
                    <Link href="">Main Component Configuration</Link>
                  </div>
                  <div className={styles.dropdownItem}>
                    <Link href="">Sub Component Configuration</Link>
                  </div>
                  <div className={styles.dropdownItem}>
                    <Link href="">Board Activity Configuration</Link>
                  </div>
                  <div className={styles.dropdownItem}>
                    <Link href="">Sub Activity Configuration</Link>
                  </div>
                </div>
                <div className={styles.dropdownItemGroup}>
                  <div className={styles.dropdownItem}>
                    <Link href="">Vote Configuration</Link>
                  </div>
                  <div className={styles.dropdownItem}>
                    <Link href="">Capex Vote Mapping</Link>
                  </div>
                  <div className={styles.dropdownItem}>
                    <Link href="">Budget Sub Vote Allocation</Link>
                  </div>
                  <div className={styles.dropdownItem}>
                    <Link href="">Capex BroadActivity Allocation</Link>
                  </div>
                  <div className={styles.dropdownItem}>
                    <Link href="">BroadActivity VS Allocation</Link>
                  </div>
                  <div className={styles.dropdownItem}>
                    <Link href="">Cash Update</Link>
                  </div>
                </div>
                <div>
                  <div className={styles.dropdownItem}>
                    <Link href="">Dashboard</Link>
                  </div>
                  <div className={styles.dropdownItem}>
                    <Link href="">Board Activity Dashboard</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.menuItem}>Inventory</div>
            <div className={styles.menuItem}>Farm</div>

            {/* Reports Dropdown */}
            <div
              className={`${styles.menuItem} ${styles.dropdown} ${openDropdown === "reports" ? styles.active : ""}`}
              onClick={(e) => toggleDropdown("reports", e)}
            >
              Reports <i className="fa fa-caret-down"></i>
              <div
                className={`${styles.dropdownMenu} ${openDropdown === "reports" ? styles.show : ""}`}
              >
                <div className={styles.dropdownItemGroup}>
                  <div className={styles.dropdownItem}>
                    <Link href="">Inventory Report</Link>
                  </div>
                  <div className={styles.dropdownItem}>
                    <Link href="">Vaccination Usage Report</Link>
                  </div>
                  <div className={styles.dropdownItem}>
                    <Link href="">PSDG Funds Drugs Issued Report</Link>
                  </div>
                  <div className={styles.dropdownItem}>
                    <Link href="">Veterinary Drug Monthly Progress Report</Link>
                  </div>
                  <div className={styles.dropdownItem}>
                    <Link href="">Farm Registration Report</Link>
                  </div>
                </div>
                <div className={styles.dropdownItemGroup}>
                  <div className={styles.dropdownItem}>
                    <Link href="">Animal Health Report</Link>
                  </div>
                  <div className={styles.dropdownItem}>
                    <Link href="">Animal Vaccination History Report</Link>
                  </div>
                  <div className={styles.dropdownItem}>
                    <Link href="">AI Performance Report</Link>
                  </div>
                  <div className={styles.dropdownItem}>
                    <Link href="">Pregnancy Diagnosis Report</Link>
                  </div>
                  <div className={styles.dropdownItem}>
                    <Link href="">Calving Performance Report</Link>
                  </div>
                  <div className={styles.dropdownItem}>
                    <Link href="">Animal Sold Report</Link>
                  </div>
                  <div className={styles.dropdownItem}>
                    <Link href="">Animal PostMortem Report</Link>
                  </div>
                  <div className={styles.dropdownItem}>
                    <Link href="">Farm Payment Data Report</Link>
                  </div>
                </div>
                <div className={styles.dropdownItemGroup}>
                  <div className={styles.dropdownItem}>
                    <Link href="">Cash In Hand Report</Link>
                  </div>
                  <div className={styles.dropdownItem}>
                    <Link href="">All Payment Report</Link>
                  </div>
                  <div className={styles.dropdownItem}>
                    <Link href="">Advace CashBook</Link>
                  </div>
                  <div className={styles.dropdownItem}>
                    <Link href="">VoteWise Payment Report</Link>
                  </div>
                  <div className={styles.dropdownItem}>
                    <Link href="">Allocation Utilization Report</Link>
                  </div>
                </div>
                <div>
                  <div className={styles.dropdownItem}>
                    <Link href="">Daily Tasks Report</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Configuration Dropdown */}
            <div
              className={`${styles.menuItem} ${styles.dropdown} ${openDropdown === "config" ? styles.active : ""}`}
              onClick={(e) => toggleDropdown("config", e)}
            >
              Configuration <i className="fa fa-caret-down"></i>
              <div
                className={`${styles.dropdownMenu} ${openDropdown === "config" ? styles.show : ""}`}
              >
                <div className={styles.dropdownItem}>
                  <Link href="">User Configuration</Link>
                </div>
                <div className={styles.dropdownItem}>
                  <Link href="">Area Code Configuration</Link>
                </div>
                <div className={styles.dropdownItem}>
                  <Link href="">
                    Commercial Advance Account Category Configuration
                  </Link>
                </div>
                <div className={styles.dropdownItem}>
                  <Link href="">Treasury Code Configuration</Link>
                </div>
                <div className={styles.dropdownItem}>
                  <Link href="">Opex Object Configuration</Link>
                </div>
                <div className={styles.dropdownItem}>
                  <Link href="">Dairy Knowledge Configuration</Link>
                </div>
              </div>
            </div>

            {/* User Account Dropdown */}
            <div
              className={`${styles.menuItem} ${styles.dropdown} ${openDropdown === "user" ? styles.active : ""}`}
              onClick={(e) => toggleDropdown("user", e)}
            >
              Hi | MR.SANDUN <i className="fa fa-caret-down"></i>
              <div
                className={`${styles.dropdownMenu} ${openDropdown === "user" ? styles.show : ""}`}
              >
                <div className={styles.dropdownItem}>
                  <Link href="">Edit Profile</Link>
                </div>
                <div className={styles.dropdownItem}>
                  <Link href="">Logout</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
