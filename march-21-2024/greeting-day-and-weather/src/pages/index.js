"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

async function getCoordinates() {
  return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude }}) => {
          resolve({ latitude, longitude })
      })
  })
}

async function getTemperature() {
  const { latitude, longitude } = await getCoordinates();
  const temperatureUnit = 'celsius'
  const fetchUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&temperature_unit=${temperatureUnit}`
  const response = await fetch(fetchUrl);
  const data = await response.json()

  // get current coordinate of the browser
  // get the temperature from an api

  return data.current.temperature_2m;
}


function getGreeting() {
  const hours = (new Date()).getHours();
  let greeting;

  if (hours >=0 && hours < 11) {
    greeting = 'Good Morning'
  } else if (hours >= 11 && hours < 18) {
    greeting = 'Good Afternoon'
  } else if (hours >= 18 && hours < 21) {
    greeting = 'Good Evening'
  } else {
    greeting = 'Good Night'
  }

  return greeting;
}

export default function Home() {

  const greeting = getGreeting();
  // const temperatureInCelsius = await getTemperature();

  const [temperatureInCelsius, setTemperatureInCelsius] = useState(0)

  useEffect(() => {
    getTemperature().then(temp => setTemperatureInCelsius(temp))
  }, [])

  return (
    <>
      <Head>
        <title>Greeting And Temperature</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>{greeting}</h1>
        <p>The temperature in Celisus is {temperatureInCelsius}</p>
      </main>
    </>
  );
}
