import React, { useState, useEffect } from "react";
import {
    Button,
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    IconButton,
    FormGroup,
    FormControlLabel,
    Checkbox,
} from "@mui/material";
import CreateNoteModal from "../../Components/CreateNoteModal/CreateNoteModal";
import { useParams } from "react-router-dom";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

const Notes = () => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const { id } = useParams();

    useEffect(() => {
        const categories = JSON.parse(localStorage.getItem("category"));
        const category = categories.find((i) => i.id === id);
        setName(category.name);
        setDescription(category.description);
        setImage(category.image);
    }, [open]);

    return (
        <>
            <Card
                sx={{
                    width: "100%",
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

                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox color="secondary" />}
                                label="Tarefas"
                            />
                            <FormControlLabel
                                control={<Checkbox color="secondary" />}
                                label="Disabled"
                            />
                        </FormGroup>
                    </CardContent>
                </div>

                <CardActions
                    sx={{
                        justifyContent: "space-between",
                    }}
                >
                    <div>
                        <Button
                            color="secondary"
                            onClick={() => setOpen(true)}
                            startIcon={<AddBoxOutlinedIcon />}
                        >
                            Nova nota
                        </Button>
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

            <CreateNoteModal open={open} onClose={() => setOpen(false)} id={id} />
        </>
    );
};

export default Notes;
