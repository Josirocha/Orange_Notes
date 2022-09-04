import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    IconButton,
    Button,
} from "@mui/material";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import React from "react";

const CategoryCard = ({ name, description, image }) => {
    return (
        <Card sx={{ minWidth: 345,  backgroundColor: "#eff0f3" }}>
            <CardMedia
                component="img"
                height="140"
                image={image}
            />

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>

            <CardActions
                sx={{
                    justifyContent: "space-between",
                }}
            >
                <div>
                    <IconButton size="small" color="secondary">
                        <CreateOutlinedIcon />
                    </IconButton>

                    <IconButton size="small" color="secondary">
                        <DeleteOutlineOutlinedIcon />
                    </IconButton>
                </div>

                <Button
                    color="secondary"
                    variant="contained"
                    sx={{ color: "#eff0f3" }}
                >
                    Abrir
                </Button>
            </CardActions>
        </Card>
    );
};

export default CategoryCard;
