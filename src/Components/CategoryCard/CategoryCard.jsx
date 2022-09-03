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

const CategoryCard = () => {
    return (
        <Card sx={{ maxWidth: 345, backgroundColor: "#eff0f3" }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://picsum.photos/200/300"
            />

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                </Typography>
            </CardContent>

            <CardActions sx={{
                justifyContent: 'space-between'
            }}>
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
