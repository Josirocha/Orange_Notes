import React from "react";
import { FormControlLabel, Checkbox } from "@mui/material";

const Note = ({ label, id }) => {
    return (
        <FormControlLabel
            control={<Checkbox color="secondary" />}
            label={label}
        />
    );
};

export default Note;
