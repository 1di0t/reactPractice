import { Component } from 'react'
import ClassComponent from './ClassComponent'
import ArrowComponent from './ArrowComponents'

export default function App() {
  return (
  <ul>
    <ClassComponent href='https://www.google.com' text='Google'/>
    <ArrowComponent href='https://www.naver.com' text='Naver'/>
  </ul>)
}