import Formulario from "./components/Formulario";
import { NoticiasProvider } from "./context/NoticiasProvider";
import { Container, Grid, Typography } from "@mui/material";
function App() {

  return (
    <NoticiasProvider>
      <Container>
        <header>
          <Typography
            align="center"
            marginY={5}
            component="h1"
            variant="h3"
          >
            Buscador de Noticias
          </Typography>
        </header>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            md={6}
            xs={12}
            lg={4}

          >
            <Formulario />
          </Grid>
        </Grid>
      </Container>
    </NoticiasProvider>
  )
}

export default App
