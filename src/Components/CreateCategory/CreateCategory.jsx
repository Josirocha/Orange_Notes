import React from "react";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import { Paper, Typography } from "@mui/material";

const CreateCategory = ({ onClick }) => {
    return (
        <Paper
            onClick={onClick}
            elevation={3}
            color="secondary"
            sx={{
                width: "180px",
                borderRadius: "16px",
                marginTop: "16px",
                padding: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#ff8e3c",
                cursor: "pointer",
            }}
        >
            <CreateNewFolderOutlinedIcon color="primary" size={50} />
            <Typography variant="h5" sx={{ ml: 2 }} color="primary">
                Novo
            </Typography>
        </Paper>
    );
};

export default CreateCategory;
