import React from "react";
import { Box, Typography } from "@mui/material";
import CreateCategory from "../../Components/CreateCategory/CreateCategory";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import CreateCategoryModal from "../../Components/CreateCategoryModal/CreateCategoryModal";
import { useState } from "react";

const Categorias = () => {
    const [open, setOpen] = useState(false);
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
            <Box sx={{ py: 2, flexWrap: "wrap", display: "flex", gap: 3 }}>
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
            </Box>

            <CreateCategoryModal open={open} onClose={() => setOpen(false)} />
        </>
    );
};

export default Categorias;
