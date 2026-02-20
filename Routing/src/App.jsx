import {Routes, Route} from 'react-router-dom'
import './App.css'
import Categories from './components/Categories'
import Home from './components/Home'
import About from './components/About'
import Layout from './components/Layout'
import Category from './components/Category'
import CategoryLayout from './components/CategoryLayout'
import { useEffect, useState } from 'react'

function App() {

  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path='categories' element={<CategoryLayout />}>
          <Route index element={<h1>Kategorier</h1>} />
          <Route path=':slug' element={<Categories />} />
          <Route path=':slug/:cat' element={<Category />} />
        </Route>
        <Route path='about' element={<About />} />
      </Routes>
    </Layout>
  )
}

export default App
