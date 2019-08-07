import React from "react";
import Head from "../components/head";

export default () => (
  <div>
    <Head title="Home" />
    <iframe
      width="800"
      height="450"
      src="https://www.youtube.com/embed/videoseries?list=PLdRZWLkK99Q9TMyYJ0ZlpUo95AIrx0qBg"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
);
