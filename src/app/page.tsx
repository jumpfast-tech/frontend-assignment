"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Typography } from "@mui/material";

type CatData = {
  id: string;
  url: string;
};

const Index = () => {
  const [catData, setCatData] = useState<CatData | null>(null);

  useEffect(() => {
    const fetchCatData = async () => {
      try {
        const response = await axios.get<CatData[]>(
          "https://api.thecatapi.com/v1/images/search?has_breeds=1"
        );
        const randomCat = response.data[0];
        if (randomCat) {
          const catDetailsResponse = await axios.get(
            `https://api.thecatapi.com/v1/images/${randomCat.id}`
          );
          setCatData(catDetailsResponse.data);
        }
      } catch (error) {
        console.error("Error fetching cat data:", error);
      }
    };

    fetchCatData();
  }, []);

  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Random Cat
      </Typography>
      {catData && (
        <div>
          <img
            src={catData.url}
            alt="Random Cat"
            style={{
              borderRadius: "8px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
              marginBottom: "20px",
            }}
          />
          <Typography variant="subtitle1" color="textSecondary">
            ID: {catData.id}
          </Typography>
        </div>
      )}
    </Container>
  );
};

export default Index;
