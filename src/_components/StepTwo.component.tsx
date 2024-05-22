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
import dayjs, { Dayjs } from "dayjs";

const Tab2Content = ({ data, updateData }: { data: any; updateData: any }) => {
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    updateData({ [name]: value });
  };

  const handleDateChange = (date: Dayjs | null) => {
    updateData({ requestedDate: date ? date.toISOString() : "" });
  };
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
            <InputLabel id="lawn-size-label">Lawn Size</InputLabel>
            <Select
              labelId="lawn-size-label"
              id="lawn-size-select"
              name="lawnSize"
              value={data.lawnSize}
              label="Lawn Size"
              onChange={handleChange}
            >
              <MenuItem value="small">Small</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="large">Large</MenuItem>
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
          <FormControl fullWidth>
            <InputLabel id="grass-length-label">Grass Length</InputLabel>
            <Select
              labelId="grass-length-label"
              id="grass-length-select"
              name="grassLength"
              value={data.grassLength}
              label="Grass Length"
              onChange={handleChange}
            >
              <MenuItem value="short">Short</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="long">Long</MenuItem>
            </Select>
          </FormControl>
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
            <DatePicker
              label="Requested Date"
              value={data.requestedDate ? dayjs(data.requestedDate) : null}
              onChange={handleDateChange}
              renderInput={(params: any) => <TextField {...params} />}
            />
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
