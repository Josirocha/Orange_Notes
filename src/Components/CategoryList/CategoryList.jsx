import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import CategoryCard from "../CategoryCard/CategoryCard";

const CategoryList = ({ data }) => {
    return (
        <Box sx={{ py: 2, flexWrap: "wrap", display: "flex", gap: 3 }}>
            {data.map((item, index) => (
                <CategoryCard
                    key={index}
                    name={item.name}
                    description={item.description}
                    image={item.image}
                />
            ))}
        </Box>
    );
};

export default CategoryList;
