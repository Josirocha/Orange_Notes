import React from "react";
import {
    FormControlLabel,
    Checkbox,
    Typography,
    IconButton,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const Note = ({ label, id, onChange, onDelete, checked, categoryId }) => {
    function handleDelete() {
        const previousData = JSON.parse(localStorage.getItem(categoryId));
        const updatedData = previousData.filter((item) => item.id != id);
        localStorage.setItem(categoryId, JSON.stringify(updatedData));
        onDelete(updatedData);
    }

    return (
        <div>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked}
                        color="secondary"
                        onChange={(e) => onChange(id, e.target.checked)}
                        name="notes"
                    />
                }
                label={
                    <Typography
                        sx={{
                            textDecoration: checked ? "line-through" : "",
                        }}
                    >
                        {label}
                    </Typography>
                }
            />
            <span>
                <IconButton onClick={handleDelete}>
                    <DeleteOutlineOutlinedIcon />
                </IconButton>
            </span>
        </div>
    );
};

export default Note;
