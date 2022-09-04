import React, { useState, useEffect } from "react";
import {
    Button,
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    FormGroup,
    LinearProgress,
    Box,
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
    const [notesPercent, setNotesPercent] = useState(0);

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

    function handleDelete(values) {
        setNotes(values);
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

    useEffect(() => {
        const checkedNotes = notes.filter((item) => item.checked).length;
        const totalNotes = notes.length;

        const percent = Math.round((checkedNotes / totalNotes) * 100);

        setNotesPercent(percent);
    }, [notes]);

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
                                    categoryId={id}
                                    label={item.note}
                                    checked={item.checked}
                                    onChange={handleNoteChange}
                                    onDelete={handleDelete}
                                />
                            ))}
                        </FormGroup>
                    </CardContent>
                </div>

                <CardActions>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            width: "200px",
                        }}
                    >
                        <Button
                            color="secondary"
                            onClick={() => setOpen(true)}
                            startIcon={<AddBoxOutlinedIcon />}
                        >
                            Nova nota
                        </Button>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                        }}
                    >
                        {notes.length ? (
                            <>
                                <Box sx={{ width: "100%", mr: 1 }}>
                                    <LinearProgress
                                        color="secondary"
                                        value={notesPercent}
                                        variant="determinate"
                                    />
                                </Box>
                                <Box sx={{ minWidth: 35 }}>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >{`${notesPercent}%`}</Typography>
                                </Box>
                            </>
                        ) : (
                            ""
                        )}
                    </Box>
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
