"use client";
import { useState } from "react";
import { Button } from "@mui/material";
import styles from "./Sidebar.module.css";
import Tab1Content from "./Start.component";
import Tab2Content from "./StepTwo.component";
import CheckCircleIcon from "./SuccessIcon.component";

const tabs = [
  "START",
  "SERVICE",
  "QUOTE",
  "ACCOUNT",
  "EXTRAS",
  "PROPERTY",
  "SUMMARY",
  "SUCCESS",
];

const Tab3Content = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Tab 3</h1>
    <p>This is the custom content for Tab 3.</p>
  </div>
);

const Tab4Content = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Tab 4</h1>
    <p>This is the custom content for Tab 4.</p>
  </div>
);

const Tab5Content = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Tab 5</h1>
    <p>This is the custom content for Tab 5.</p>
  </div>
);

const Sidebar = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleNext = () => {
    if (currentTab < tabs.length - 1) {
      setCurrentTab(currentTab + 1);
    }
  };

  const renderTabContent = () => {
    switch (currentTab) {
      case 0:
        return <Tab1Content />;
      case 1:
        return <Tab2Content />;
      case 2:
        return <Tab3Content />;
      case 3:
        return <Tab4Content />;
      case 4:
        return <Tab5Content />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebarContainer}>
        <ul className={styles.listContainer}>
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={`${styles.listItem} ${
                index === currentTab ? "button-active" : "button-inactive"
              }`}
            >
              <div
                // className={`button ${
                //   index === currentTab ? "button-active" : ""
                // }`}
                onClick={() => setCurrentTab(index)}
              >
                {tab}
              </div>
              <span style={{ paddingRight: "24px" }}>
                {index < currentTab ? (
                  <CheckCircleIcon />
                ) : index === currentTab ? (
                  ">"
                ) : (
                  ""
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="content-container">
        {renderTabContent()}
        {currentTab < tabs.length - 1 && (
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            className="continue"
          >
            Continue
          </Button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
