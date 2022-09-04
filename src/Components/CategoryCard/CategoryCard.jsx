import React, {useState} from "react";
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
import DeleteCategoryModal from "../DeleteCategoryModal/DeleteCategoryModal"

const CategoryCard = ({ name, description, image, onUpdate, index }) => {

    const [openModalDelete, setOpenModalDelete] = useState(false);

    function handleCloseDeleteModal(value) {
        setOpenModalDelete(false)
        onUpdate(value)
    }

    return (
        <>
            <Card sx={{ minWidth: 345, backgroundColor: "#eff0f3" }}>
                <CardMedia component="img" height="140" image={image} />

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

                        <IconButton
                            size="small"
                            color="secondary"
                            onClick={() => setOpenModalDelete(true)}
                        >
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

            <DeleteCategoryModal
                index={index}
                open={openModalDelete}
                onClose={handleCloseDeleteModal}
            />
        </>
    );
};

export default CategoryCard;
