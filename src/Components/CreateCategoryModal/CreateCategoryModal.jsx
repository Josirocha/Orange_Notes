import {
    Modal,
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    TextField,
    Box
} from "@mui/material";
import React from "react";

const CreateCategoryModal = ({ open, onClose }) => {
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
                        Criar Categoria
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: 'column',
                            gap: 2,
                        }}
                    >
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="nome da categoria"
                            color="secondary"
                        />
                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            variant="outlined"
                            label="descrição"
                            color="secondary"
                        />
                    </Box>
                </CardContent>

                <CardActions
                    sx={{
                        justifyContent: "space-between",
                    }}
                >
                    <Button color="secondary" onClick={onClose}>
                        Fechar
                    </Button>

                    <Button
                        color="secondary"
                        variant="contained"
                        sx={{ color: "#eff0f3" }}
                    >
                        Criar Categoria
                    </Button>
                </CardActions>
            </Card>
        </Modal>
    );
};

export default CreateCategoryModal;
