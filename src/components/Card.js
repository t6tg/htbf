import React from "react"

import "../components/layout.css"

export default function Card({ data }) {
  return (
    <div className="card">
      <h3>Name : {data.name}</h3>
      <h3>
        Github :{" "}
        <a href={`https://github.com/${data.github}`}>@{data.github}</a>
      </h3>
      <h4>{data.message}</h4>
    </div>
  )
}
