import React from 'react'
import { useParams } from 'react-router-dom';

export default function Login() {
  let { slug } = useParams();
  return (
    <div>
      <div>Login</div>
      <div>{slug}</div>
    </div>
  )
}
