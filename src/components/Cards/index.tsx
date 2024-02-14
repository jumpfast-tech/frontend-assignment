import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, CircularProgress } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import InfoIcon from "@mui/icons-material/Info";
import styles from "./cards.module.css";

interface Cat {
  id: string;
  url: string;
  breeds: { name: string; description: string }[];
}

export default function Cards() {
  const [catData, setCatData] = React.useState<Cat[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    // Fetch data from API

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.thecatapi.com/v1/images/search?limit=18&api_key=live_QoaBpKKeEoYpktaO6okJrmoozZSngdHGeisp8JNEJm7rZAzMZHuZFRoFS83XDgg7"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data: Cat[] = await response.json();
        console.log("Data fetched from API:", data);
        setCatData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (!catData) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Grid container spacing={3} className={styles.cardContainer}>
        {loading ? (
          <CircularProgress className={styles.circularProgress} />
        ) : (
          catData.map((cat) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={cat.id}>
              <Card key={cat.id} className={styles.card}>
                <CardMedia className={styles.cardMedia} image={cat.url} />
                <Grid className={styles.cardContentContainer}>
                  {cat.breeds.map((breed) => (
                    <CardContent className={styles.cardContent}>
                      <Typography gutterBottom variant="h5">
                        {breed.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {/* {breed.description} */}
                      </Typography>
                    </CardContent>
                  ))}
                </Grid>
                <CardActions className={styles.cardActions}>
                  <Button
                    variant="contained"
                    size="small"
                    className={styles.readButton}
                  >
                    READ MORE
                  </Button>

                  <Button size="small">
                    <ShareIcon className={styles.shareButton} />
                  </Button>
                  <Button size="small">
                    <InfoIcon className={styles.infoButton} />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
}
