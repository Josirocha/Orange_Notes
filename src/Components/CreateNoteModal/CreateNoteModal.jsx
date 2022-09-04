import {
    Modal,
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    TextField,
    Box,
} from "@mui/material";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CreateNoteModal = ({ open, onClose, id }) => {
    const [note, setNote] = useState("");

    function handleSubmit() {
        saveNote();
        onClose();
    }

    function saveNote() {
        const previousData = JSON.parse(localStorage.getItem(id)) || [];
        const stringData = JSON.stringify([
            ...previousData,
            { id: uuidv4(), note, checked: false },
        ]);
        localStorage.setItem(id, stringData);
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
                        Criar Nota
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                        }}
                    >
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="nota"
                            color="secondary"
                            value={note}
                            onChange={(event) => setNote(event.target.value)}
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
                        onClick={handleSubmit}
                    >
                        Criar Nota
                    </Button>
                </CardActions>
            </Card>
        </Modal>
    );
};

export default CreateNoteModal;
