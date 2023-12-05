import Noticia from "./Noticia";
import { Grid, Typography, Pagination, Stack } from "@mui/material";
import useNoticias from "../hooks/useNoticias";

const ListadoNoticias = () => {

  const { noticias, totalNoticias } = useNoticias();

  const totalPaginas = Math.ceil(totalNoticias / 20)

  // console.log(totalNoticias, 'cantidad de paginas: ', totalPaginas);

  return (
    <>
      <Typography
        textAlign={'center'}
        marginY={5}
        variant="h3"
        component={'h2'}
      >
        Últimas Noticias
      </Typography>

      <Grid container spacing={2}>
        {noticias.map(noticia => (
          <Noticia
            key={noticia.url}
            noticia={noticia}
          />
        ))}
      </Grid>

      <Stack
        sx={{ marginY: 5 }}
        spacing={2}
        direction={'row'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Pagination
          count={totalPaginas}
          // variant="outlined"
          color="primary"
        />
      </Stack>

    </>
  )
}

export default ListadoNoticias