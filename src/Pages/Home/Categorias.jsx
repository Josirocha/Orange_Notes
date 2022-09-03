import React from "react";
import { Box, Typography } from "@mui/material";
import CreateCategory from "../../Components/CreateCategory/CreateCategory";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";

const Categorias = () => {
    return (
        <>
            <Typography variant="h3" sx={{ my: 2 }}>
                Categorias
            </Typography>
            <Typography variant="p">
                Selecione uma categoria para suas notas ou crie uma nova.
            </Typography>

            <Box sx={{ py: 2 }}>
                <CreateCategory />
            </Box>
            <Box sx={{ py: 2, flexWrap: "wrap", display: "flex", gap: 3 }}>
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
            </Box>
        </>
    );
};

export default Categorias;
