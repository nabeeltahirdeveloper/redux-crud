'use client';

import Image from 'next/image'
import Add from './components/Add'
import React, {useState} from 'react'
import List from './components/List';
import {store} from "./store/Store"
import { Provider } from 'react-redux'


export default function Home() {
  const [inputItem, setInputItem] = useState()
  // const [itemList, setItemlist] = useState([])
  console.log(inputItem)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Provider store={store}>

     <Add inputItem={inputItem} setInputItem={setInputItem}/>
     <List />
      </Provider>
    </main>
  )
}
