import React from "react";
import Head from "next/head";
import Navbar from "./../components/TopNavbar";
import AfterNav from "./../components/AfterNav";
import RoomsSpaces from "./../components/RoomsSpaces";
import AboutThisProperty from "./../components/AboutThisProperty";
import PropertyManager from "./../components/PropertyManager";
import ImportantInfo from "./../components/ImportantInfo";
import FAQ from "./../components/FAQ";
import ReviewsRatings from "./../components/ReviewsRatings";
import AboutHost from "./../components/AboutHost";
import MyComponent from "./../components/MyComponents";

export default function Home() {
  return (
    <>
      <Head>
        <title>Accomodation Vista</title>
        <meta
          name="description"
          content="A simple Next.js app with TypeScript and Tailwind CSS"
        />
        <link rel='stylesheet' href='https://unpkg.com/boxicons@latest/css/boxicons.min.css' />
        <link rel="stylesheet" href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" />
      </Head>

      {/* Main content can go here */}
      <main className="p-4">
        <MyComponent />
        <Navbar />
        <AfterNav />
        <RoomsSpaces />
        <AboutThisProperty />
        <PropertyManager />
        <ImportantInfo />
        <FAQ />
        <ReviewsRatings/>
        <AboutHost/>
      </main>
    </>
  );
}
