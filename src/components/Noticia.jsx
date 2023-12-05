import { Grid, Typography, Link, Card, CardContent, CardMedia, CardActions } from "@mui/material";

const Noticia = ({ noticia }) => {

  const { urlToImage, url, title, description, content, source } = noticia
  // console.log(content);

  return (
    <Grid item md={6} lg={4}>
      <Card>
        {urlToImage && (
          <CardMedia
            component={'img'}
            alt={`Imagen de la Noticia ${title}`}
            image={urlToImage}
            height={250}
          />
        )}

        <CardContent>

          <Typography variant="body1" color={'error'} fontWeight={700}>
            {source.name}
          </Typography>

          <Typography variant="h5" component="div">
            {title}
          </Typography>

          <Typography variant="body2">
            {description}
          </Typography>

        </CardContent>

        <CardActions>
          <Link
            href={url}
            target='_blank'
            variant="button"
            width={'100%'}
            textAlign='center'
            sx={{
              textDecoration: 'none'
            }}
          >
            Leer noticias
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Noticia