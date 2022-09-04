import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import CreateCategory from "../../Components/CreateCategory/CreateCategory";
import CreateCategoryModal from "../../Components/CreateCategoryModal/CreateCategoryModal";
import CategoryList from "../../Components/CategoryList/CategoryList";

const Categories = () => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("category")) || []);
    }, [open]);

    return (
        <>
            <Typography variant="h3" sx={{ my: 2 }}>
                Categorias
            </Typography>
            <Typography variant="p">
                Selecione uma categoria para suas notas ou crie uma nova.
            </Typography>

            <Box sx={{ py: 2 }}>
                <CreateCategory onClick={() => setOpen(true)} />
            </Box>
            <CategoryList data={data} />

            <CreateCategoryModal open={open} onClose={() => setOpen(false)} />
        </>
    );
};

export default Categories;
