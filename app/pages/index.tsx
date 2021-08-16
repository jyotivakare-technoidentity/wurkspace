import React, { Suspense } from "react"
import { Link, BlitzPage, useMutation, Routes, useRouter } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import LoginForm from "app/auth/components/LoginForm"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const Home: BlitzPage = () => {
  const router = useRouter()
  return (
    <div className="flex">
      <img src="/login.png" className="w-4/12 mt-20 ml-20 mr-20" alt="remote work"></img>
      <LoginForm onSuccess={() => router.push(Routes.DashBoard())} />
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
