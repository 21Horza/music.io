import React from 'react'
import MainLayout from '../../layouts/MainLayout'

const Index = () => {
    const album = [
        {
        id: 1,
        name: "My album"
        },
        {
        id: 2,
        name: "Cool tracks"
        },
        {
        id: 3,
        name: "Fav songs"
        },
    ]

  return (
    <MainLayout>
        Index
    </MainLayout>
  )
}

export default Index