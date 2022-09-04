import React from "react";
import { FormControlLabel, Checkbox } from "@mui/material";

const Note = ({ label, id, onChange, checked }) => {
    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={checked}
                    color="secondary"
                    onChange={(e) => onChange(id, e.target.checked)}
                    name="notes"
                />
            }
            label={label}
        />
    );
};

export default Note;
