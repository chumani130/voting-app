import React, { useEffect } from 'react'
import Image from '../assets/error2.gif'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  // const navigate = useNavigate()

  // // redirect user to previous page
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate(-1)
  //   }, 6000)
  // })


  return (
    <section className="errorPage">
      <div className="errorPage__container">
        <img src={Image} alt="Page not found" />
        <h1>404</h1>
        <p>This page does not exist. You will be redirected to the previous page shortly.</p>
      </div>
    </section>
  )
}

export default ErrorPage