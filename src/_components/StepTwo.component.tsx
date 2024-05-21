import {
  TextField,
  Button,
  Select,
  MenuItem,
  SelectChangeEvent,
  FormControl,
  InputLabel,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
const Tab2Content = () => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
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
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <p>How big is your lawn? Give us your best guess.*</p>
        <div className="" style={{ width: "400px" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Lawn Size</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Lawn Size"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>

        <p>
          or <a>login</a> to an existing account
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <p>Select your grass length.*</p>
        <div className="" style={{ width: "400px" }}>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={age}
            onChange={handleChange}
            label="grass Length"
            fullWidth
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </div>

        <p>
          or <a>login</a> to an existing account
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <p>
          Request a date for service{" "}
          <small>(Services are weather dependent)</small>.*
        </p>
        <div className="" style={{ width: "400px" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
          </LocalizationProvider>
        </div>

        <p>
          or <a>login</a> to an existing account
        </p>
      </div>
    </div>
  );
};

export default Tab2Content;
