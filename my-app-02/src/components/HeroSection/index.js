import React, { useState } from "react";
import { Button } from "../ButtonElements";
import Video from "../../videos/video.mp4";
import {
  HeroContainer,
  VideoBg,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg>
          <video autoPlay loop muted type="video/mp4" src={Video} />
        </VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign up for a new account today and recive $250 in credit towards your
          next payment
        </HeroP>
        <HeroBtnWrapper>
          <Button onMouseEnter={onHover} onMouseLeave={onHover} to="signup">
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
