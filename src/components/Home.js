/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Recommends from "./Recommends";
import Viewers from "./Viewers";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import { movies } from "../disneyPlusMoviesData";

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

function Home() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];
  useEffect(() => {
    movies.forEach((movie) => {
      switch (movie.type) {
        case "recommend":
          recommends = [...recommends, { ...movie }];
          break;

        case "new":
          newDisneys = [...newDisneys, { ...movie }];
          break;

        case "original":
          originals = [...originals, { ...movie }];
          break;

        case "trending":
          trending = [...trending, { ...movie }];
          break;
        default:
          break;
      }
    });

    dispatch(
      setMovies({
        recommend: recommends,
        newDisney: newDisneys,
        original: originals,
        trending: trending,
      })
    );
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
    </Container>
  );
}

export default Home;
