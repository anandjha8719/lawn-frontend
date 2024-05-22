import { useState } from "react";
const Tab3Content = ({ data, updateData }: { data: any; updateData: any }) => {
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    updateData({ [name]: value });
  };
  const [value, setValue] = useState<Date | null>(null);
  return (
    <div className="section-content">
      <h1
        className="content-heading"
        style={{ fontSize: "2.4rem", color: "green", fontWeight: "bold" }}
      >
        Lawn Mowing
      </h1>

      <div
        style={{
          border: "1px solid red",
          width: "400px",
          height: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <p
          style={{
            alignSelf: "flex-start",
            padding: "24px 16px",
            marginTop: "24px",
            backgroundColor: "rgb(46, 114, 70)",
            color: "#FFF",
          }}
        >
          One Time
        </p>
        <h3 style={{ margin: "auto", paddingBottom: "64px" }}>$ 72.89</h3>
      </div>
    </div>
  );
};

export default Tab3Content;
