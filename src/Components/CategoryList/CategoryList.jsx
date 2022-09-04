import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import CategoryCard from "../CategoryCard/CategoryCard";

const CategoryList = ({ data, onUpdate }) => {
    return (
        <>
            <Box sx={{ py: 2, flexWrap: "wrap", display: "flex", gap: 3 }}>
                {data.map((item, index) => (
                    <CategoryCard
                        key={index}
                        index={index}
                        name={item.name}
                        description={item.description}
                        image={item.image}
                        onUpdate={onUpdate}
                    />
                ))}
            </Box>
        </>
    );
};

export default CategoryList;
