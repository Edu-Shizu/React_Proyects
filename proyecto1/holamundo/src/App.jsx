import React from "react"
import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"

export function App () {
    return (
        <section className="App">
            <TwitterFollowCard  userName="pepe" >pepe duran  </TwitterFollowCard>
            <TwitterFollowCard  userName="james">james duran </TwitterFollowCard>
            <TwitterFollowCard  userName="nick" >nick duran  </TwitterFollowCard>
            <TwitterFollowCard  userName="Jack" > Jack duran </TwitterFollowCard>
        </section>
        )
}