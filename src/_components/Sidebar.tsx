"use client";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import styles from "../_styles/Sidebar.module.css";
import Tab1Content from "./Start.component";
import Tab2Content from "./StepTwo.component";
import CheckCircleIcon from "./SuccessIcon.component";
import Tab3Content from "./StepThree.component";

const tabs = ["START", "SERVICE", "QUOTE"];

const upcoming = ["ACCOUNT", "EXTRAS", "PROPERTY", "SUMMARY", "SUCCESS"];

const Sidebar = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [data, setData] = useState({
    address: "",
    lawnSize: "",
    grassLength: "",
    requestedDate: "",
    estimatedBudget: 0,
    confirmed: false,
    resolved: false,
  });

  const handleNext = () => {
    if (currentTab < 2) {
      setCurrentTab(currentTab + 1);
    } else {
      alert("This is the final step.");
    }
  };

  const updateData = (newData: any) => {
    setData((prevData) => ({ ...prevData, ...newData }));
  };

  useEffect(() => {
    console.log("main state:", data);
  }, [data]);

  const renderTabContent = () => {
    switch (currentTab) {
      case 0:
        return <Tab1Content data={data} updateData={updateData} />;
      case 1:
        return <Tab2Content data={data} updateData={updateData} />;
      case 2:
        return <Tab3Content data={data} updateData={updateData} />;
      default:
        return null;
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://lawn-backend.onrender.com/client-requestes",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        // Handle successful submission, e.g., show a success message
        alert("Form submitted successfully!");
      } else {
        // Handle error responses
        alert("Failed to submit form. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle network errors or other exceptions
      alert("An unexpected error occurred. Please try again later.");
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.sidebarContainer}>
        <div className={styles.wavyBackground}></div>
        <ul className={styles.listContainer}>
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={`${styles.listItem} ${
                index === currentTab ? "button-active" : "button-inactive"
              }`}
              onClick={() => setCurrentTab(index)}
            >
              <div>{tab}</div>
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

          {upcoming.map((tab, index) => (
            <li key={index} className={`${styles.listItem} button-inactive`}>
              <div>{tab}</div>
              <span style={{ paddingRight: "24px" }}></span>
            </li>
          ))}
        </ul>
      </div>
      <div className="content-container">
        {renderTabContent()}
        {currentTab < 2 ? (
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            className="continue"
          >
            Continue
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            className="continue"
          >
            Submit
          </Button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
