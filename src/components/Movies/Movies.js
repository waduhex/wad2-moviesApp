import React, { Component } from "react";
import { connect } from "react-redux";
import { getpopularMovies } from "../../actions/movie_actions/getpopularMovies";
import { getnowplayingMovies } from "../../actions/movie_actions/getnowplayingMovies";
import { gettopratedMovies } from "../../actions/movie_actions/gettopratedMovies";
import { getupcomingMovies } from "../../actions/movie_actions/getupcomingMovies";
import { gettrendingMovies } from "../../actions/movie_actions/gettrendingMovies";
import { getgenre } from "../../actions/movie_actions/getgenre";
import VerticalMovieCarousel from "../VerticalMovieCarousel/VerticalMovieCarousel";
import "./Movies.css";
import HorizontalMovieCarousel from "../HorizontalCarousel/HorizontalMovieCarousel";
import Footer from "../Footer/Footer";
class Movies extends Component {
  componentDidMount() {
    console.log("Did mount movies");
    this.props.getpopularMovies();
    this.props.getnowplayingMovies();
    this.props.gettopratedMovies();
    this.props.getupcomingMovies();
    this.props.gettrendingMovies();
    this.props.getgenre();
  }
  render() {
    const { nowplayingMovies, popularMovies, topratedMovies, upcomingMovies, trendingMovies } = this.props;

    return (
      <React.Fragment>
        <div className="header">
          <VerticalMovieCarousel
            nowplayingMovies={nowplayingMovies}
            genre={this.props.genre}
          />
        </div>

        <div className="home-container">
          <div className="container pb-6">
            <HorizontalMovieCarousel
              carouselName="Popular"
              movies={popularMovies}
              genre={this.props.genre}
            />
            <hr className="section-separator" />
            <HorizontalMovieCarousel
              carouselName="Trending"
              movies={trendingMovies}
              genre={this.props.genre}
            />
            <hr className="section-separator" />
            <HorizontalMovieCarousel
              carouselName="Top Rated"
              movies={topratedMovies}
              genre={this.props.genre}
            />
            <hr className="section-separator" />
            <HorizontalMovieCarousel
              carouselName="Upcoming"
              movies={upcomingMovies}
              genre={this.props.genre}
            />
            <hr className="section-separator" />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  popularMovies: state.popularmovies.popularMovies,
  nowplayingMovies: state.nowplayingMovies.nowplayingMovies,
  topratedMovies: state.topratedMovies.topratedMovies,
  upcomingMovies: state.upcomingMovies.upcomingMovies,
  trendingMovies: state.trendingMovies.trendingMovies,
  genre: state.genre.genre
});
export default connect(
  mapStateToProps,
  {
    getpopularMovies,
    getnowplayingMovies,
    gettopratedMovies,
    getupcomingMovies,
    gettrendingMovies,
    getgenre
  }
)(Movies);
