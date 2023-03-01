import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Fall = () => {
  const [users, setUsers] =  useState<any>(null)
  useEffect(()=> {
    axios.get("http://localhost:3001/api/getAll")
    .then(res => setUsers(res.data))
    /* .then(data => {
      setUsers(data)
      setUsers([{nom: "ndiaye", prenom: "Issa"}])
    } 
)*/

  }, [])
  return (
    <table border={1}>
      <thead>
        <td>Nom</td>
        <td>Prenom</td>
      </thead>
      <tbody>
      {
        users?.map((user:any) => <tr>
          <td>{user.nom}</td>
          <td>{user.prenom}</td>
        </tr>)
      }
      </tbody>
    </table>
  )
}

export default Fall