"use client"
import { useRef, useState } from 'react'
import styles from "./page.module.css";

export default function Home() {

  // can use either useState or useRef with inputs
  // I'm doing both to show both ways

  // use State way
  const [itemToAdd, setItemToAdd] = useState('');

  const onChangeItemToAdd = (event) => {
    const newItemToAdd = event.target.value
    setItemToAdd(newItemToAdd)

  }

  // use Ref Way
  const itemCostInputRef = useRef();

  const itemCountInputRef = useRef()

  const handleOnClickAddToShoppingCart = () => {

    const itemCost = Number(itemCostInputRef.current.value);

    const itemCount = Number(itemCountInputRef.current.value);

    const newPendingTransactionItem = {
      id: `id-${Math.random()}`, 
      item: itemToAdd, 
      itemCost, 
      itemCount
    }

    // need new copy of array so that setPendingTransactions will notice
    // the array is different and will re-render the list if needed
    const newPendingTransactions = [...pendingTransactions, newPendingTransactionItem]

    setPendingTransactions(newPendingTransactions)

    setItemToAdd('')
    itemCostInputRef.current.value = ''
    itemCountInputRef.current.value = ''

  }

  // list of pending transactions
  const [pendingTransactions, setPendingTransactions] = useState([])


  const totalCost = pendingTransactions.reduce((runningTotalCost, {itemCost, itemCount}) => {
    const subCost = itemCost * itemCount;

    return runningTotalCost + subCost
  }, 0)

  return (
    <main className={styles.main}>
      <div>
        <input placeholder="item" type="text" onChange={onChangeItemToAdd} value={itemToAdd}/>
        <input placeholder="cost" type="number" ref={itemCostInputRef}/>
        <input placeholder="number of items" type="number" ref={itemCountInputRef} />
      </div>
      <button onClick={handleOnClickAddToShoppingCart}>Add to Shopping Cart</button>

      <ul>
        {
          pendingTransactions.map(({
            id, item, itemCost, itemCount
          }) => (
            <li key={id}>
              <label>Item: </label><span>{item}</span>
              <br />
              <label>Cost: </label><span>{itemCost}</span>
              <br />
              <label>Count: </label><span>{itemCount}</span>
              <br />
              <label>Total: </label><span>{itemCost * itemCount}</span>
          </li>
          ))
        }
      </ul>
      <div>
        <label>Total Cost: </label><span>{totalCost}</span>
      </div>
    </main>
  );
}
