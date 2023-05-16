import React, { useState } from "react";

export default function Slider () {
  const [noImgs, setNoImgs] = useState(4);
  const [index, setIndex] = useState(0);
  const [prevDisabled, setPrevDisabled] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(false);
  const [stopDisabled, setStopDisabled] = useState(true);
  const [playDisabled, setPlayDisabled] = useState(false);
  let interval;

  const showNextImg = () => {
    if (index < noImgs - 1) {
      setIndex((index) => index + 1);
      setPrevDisabled(false);
      setNextDisabled(index + 1 === noImgs - 1 ? true : false);
    }
  };

  const showPrevImg = () => {
    if (index === noImgs - 1) {
      setNextDisabled(false);
    }

    if (index > 0) {
      setIndex((index) => index - 1);
      setPrevDisabled(index - 1 === 0 ? true : false);
    }
  };

  const startAutoSlider = () => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % noImgs);
      setPrevDisabled(index > 0 ? false : true);
      setNextDisabled(index === noImgs - 1 ? true : false);
    }, 1000);

    setStopDisabled(false);
    setPlayDisabled(true);
  };

  const stopAutoSlider = () => {
    clearInterval(interval);
    setStopDisabled(true);
    setPlayDisabled(false);
  };

  return (
    <section class="container m-auto mt-5 outer p-3 rounded-3">
      <div class="container  rounded-3 shadow-lg pt-3 pb-1 px-4 bg-transparent" id="my_slider">
        <h5 className=" my_slider_header text-center"> My Slideshow</h5>
        <div class="m-auto py-3 text-center" id="fig-div">
          <img src={`./imgs/${index}.jpg`} className="rounded-1 " id="img" alt="img" />
        </div>
        <div class="d-flex justify-content-center my-3">
          <button
            class="slider-btn btn-primary mx-2"
            disabled={prevDisabled}
            onClick={showPrevImg}
          > Prev
            <i class="bi bi-caret-left-fill text-white"></i>
          </button>
          <button
            class="slider-btn btn-primary mx-2"
            disabled={playDisabled}
            onClick={startAutoSlider}
          > Slide
            <i class="bi bi-power text-white"></i>
          </button>
          <button
            class="slider-btn btn-primary mx-2"
            disabled={stopDisabled}
            onClick={stopAutoSlider}
          > Stop
            <i class="bi bi-stop-fill text-white"></i>
          </button>
          <button
            class="slider-btn btn-primary mx-2"
            disabled={nextDisabled}
            onClick={showNextImg}
          >Next
            <i class="bi bi-caret-right-fill text-white"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

