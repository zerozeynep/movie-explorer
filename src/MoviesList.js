import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MovieDetail from './MovieDetail'






export default class MoviesList extends Component {


    render() {

        const baseURL = "http://image.tmdb.org/t/p/w1280/"
        // console.log(this.props.list) 
        const list = this.props.list.map(movie =>
            <Grid item xs={4}>
                <Paper>

                    <Card >
                        <CardActionArea onClick={this.props.MovieDetail} >
                            
                            <CardContent>
                                <img src={baseURL + movie.poster_path} width="100%" alt="Poster" />
                                <Typography gutterBottom variant="h5" component="h2">
                                    {movie.original_title}
                                </Typography>
                               
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Paper>
            </Grid>
        )
        return (
            <div className="main">
                <Grid container spacing={3}>
                    {list}
                </Grid>
            </div>
        );
    }
}