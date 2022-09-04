import React from "react";
import { FormControlLabel, Checkbox, Typography } from "@mui/material";

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
            label={<Typography sx={{
                textDecoration: checked ? 'line-through' : ''
            }}>{label}</Typography>}
        />
    );
};

export default Note;
