import { useState } from "react";
import { TextField, Button, Typography, Grid, Box } from "@mui/material";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <Box sx={{ height: "100vh", background:"linear-gradient(to right, #eb9da6, #f0ebf4, #f7f0f2, #ffcccb)" }}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100%" }}
      >
        <Grid item xs={12} md={4}>
          <Box sx={{ p: 2 }}>
        
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Box  sx={{
                  display: "flex",
                  justifyContent: "center",
                  '@media screen and (max-width: 900px)': {
                    marginTop:"80px"
                    },
          }}>
                    <img
                      src="/Screenshot from 2024-02-13 19-51-05.png"
                      alt="Contact"
                      style={{ maxWidth: "50%", borderRadius:"20px"  }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    margin="normal"
                    required
                    type="email"
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    margin="normal"
                    required
                    multiline
                    rows={4}
                  />
                  <Button variant="contained" type="submit" sx={{ mt: 2 }}>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
