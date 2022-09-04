import {
    Modal,
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
} from "@mui/material";
import React from "react";

const DeleteCategoryModal = ({ open, onClose, index }) => {
    function handleSubmit() {
        const result = deleteCategory();
        onClose(result)
    }

    function deleteCategory() {
        const previousData = JSON.parse(localStorage.getItem("category"));
        previousData.splice(index, 1);

        const stringData = JSON.stringify(previousData);
        localStorage.setItem("category", stringData);
        return previousData

    }

    return (
        <Modal
            disableEnforceFocus
            disableAutoFocus
            open={open}
            sx={{
                display: "flex",
                p: 1,
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Card
                sx={{
                    maxWidth: 345,
                    width: "100%",
                    backgroundColor: "#eff0f3",
                }}
            >
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        mb={3}
                    >
                        Excluir Categoria
                    </Typography>

                    <Typography gutterBottom variant="p" component="div" mb={3}>
                        Você tem certeza que deseja excluir essa categoria? Se
                        você excluir, todas as notas dessa categoria tbm serão
                        apagadas, e essa ação não poderá ser desfeita.
                    </Typography>
                </CardContent>

                <CardActions
                    sx={{
                        justifyContent: "space-between",
                    }}
                >
                    <Button color="secondary" onClick={() => onClose()}>
                        Fechar
                    </Button>

                    <Button
                        color="secondary"
                        variant="contained"
                        sx={{ color: "#eff0f3" }}
                        onClick={handleSubmit}
                    >
                        Excluir
                    </Button>
                </CardActions>
            </Card>
        </Modal>
    );
};

export default DeleteCategoryModal;
