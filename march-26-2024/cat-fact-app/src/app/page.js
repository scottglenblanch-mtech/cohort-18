"use client"
import { useEffect, useState } from 'react'
import styles from "./page.module.css";

async function fetchCatFact() {

  try {
    const response = await fetch('https://catfact.ninja/fact')
    const data = await response.json();
  
    return data?.fact ?? 'No cat Fact Found'
  } catch(e) {
    console.error(e);
  }
}

export default function Home() {
  const [catFact, setCatFact] = useState()

  const handleOnClick = () => {
    setCatFact(null)
    updateCatFact()
  }

  const updateCatFact = async () => {
    const newCatFact = await fetchCatFact();

    setCatFact(newCatFact)
  }

  useEffect(() => {
    updateCatFact()
  }, [])

  return (
    <main className={styles.main}>
      {
        catFact ? (
          <>
            <div>Cat Fact</div>
            <div>{catFact}</div>
            <button onClick={handleOnClick}>Get Another Cat Fact</button>
          </>
        ) : (
          <div>
            Loading...
          </div>
        )
      }

    </main>
 
  );
}
