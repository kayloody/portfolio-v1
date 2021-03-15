import React from "react"
import Helmet from "react-helmet"

export default function Head() {
  return (
    <Helmet>
      {/* <!-- Primary Meta Tags --> */}
      <title>Khaled Al-Amoodi</title>
      <meta name="title" content="Khaled Al-Amoodi" />
      <meta
        name="description"
        content="I code for the web. I craft for humans."
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#738582" />
      <meta name="msapplication-TileColor" content="#738582" />
      <meta name="theme-color" content="#f1f1f1" />

      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;800&display=swap');
      </style>

      <script
        src="https://kit.fontawesome.com/7adfda7d68.js"
        crossorigin="anonymous"
      ></script>
    </Helmet>
  )
}
