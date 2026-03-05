import React from 'react'
import { Outlet } from 'react-router-dom'
import PublicNavbar from './PublicNavbar'
import PublicFooter from './PublicFooter'
import ScrollToTop from '../../components/ScrollToTop'

export default function PublicLayout() {
  return (
    <>
    <ScrollToTop />
    <PublicNavbar />
    <Outlet />
    <PublicFooter />
    </>
  )
}
