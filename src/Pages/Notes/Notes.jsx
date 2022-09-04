import React, { useState, useEffect } from "react";
import {
    Button,
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    FormGroup,
} from "@mui/material";
import CreateNoteModal from "../../Components/CreateNoteModal/CreateNoteModal";
import { useParams } from "react-router-dom";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import Note from "../../Components/Note/Note";

const Notes = () => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [notes, setNotes] = useState([]);

    const { id } = useParams();

    function handleNoteChange(noteId, checked) {
        const updatedNotes = notes.map((item) => {
            if (item.id === noteId) {
                item.checked = checked;
            }
            return item;
        });
        setNotes(updatedNotes);
        localStorage.setItem(id, JSON.stringify(updatedNotes));
    }

    useEffect(() => {
        const categories = JSON.parse(localStorage.getItem("category"));
        const category = categories.find((i) => i.id === id);
        setName(category.name);
        setDescription(category.description);
        setImage(category.image);

        const noteData = JSON.parse(localStorage.getItem(id)) || [];
        setNotes(noteData);
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

                        <FormGroup name="notes">
                            {notes.map((item) => (
                                <Note
                                    key={item.id}
                                    id={item.id}
                                    label={item.note}
                                    checked={item.checked}
                                    onChange={handleNoteChange}
                                />
                            ))}
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

            <CreateNoteModal
                open={open}
                onClose={() => setOpen(false)}
                id={id}
            />
        </>
    );
};

export default Notes;
