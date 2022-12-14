import React, { useState } from "react";
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
import DeleteCategoryModal from "../DeleteCategoryModal/DeleteCategoryModal";
import EditCategoryModal from "../EditCategoryModal/EditCategoryModal";
import {  useNavigate } from "react-router-dom";

const CategoryCard = ({ name, description, image, onUpdate, index, id }) => {
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const [openModalEdit, setOpenModalEdit] = useState(false);

    const navigate = useNavigate()

    function handleCloseDeleteModal(value) {
        setOpenModalDelete(false);
        onUpdate(value);
    }

    function handleCloseEditModal(value) {
        setOpenModalEdit(false);
        onUpdate(value);
    }

    return (
        <>
            <Card
                sx={{
                    width: "100%",
                    maxWidth: "375px",
                    backgroundColor: "#eff0f3",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                <div>
                    <CardMedia component="img" height="140" image={image} />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                </div>

                <CardActions
                    sx={{
                        justifyContent: "space-between",
                    }}
                >
                    <div>
                        <IconButton
                            size="small"
                            color="secondary"
                            onClick={() => setOpenModalEdit(true)}
                        >
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
                        onClick={()=>navigate(`notes/${id}`)}
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

            <EditCategoryModal
                index={index}
                open={openModalEdit}
                onClose={handleCloseEditModal}
                values={{ name, description, image, index }}
            />
        </>
    );
};

export default CategoryCard;
