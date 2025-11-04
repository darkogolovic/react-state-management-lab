import React from 'react'

export default function Team({team,onHandleRemoveFighter}) {
   
  return (
    <>
    
    <ul>
        {team.map(t=>{
            return <li key={t.id}>
          <img src={t.img} alt={t.name} />
          <h2>{t.name}</h2>
          <p>Price : ${t.price}</p>
          <p>Strength: {t.strength}</p>
          <p>Agility: {t.agility}</p>
          <button onClick={()=> onHandleRemoveFighter(t)}>Remove fighter</button>
        </li>
        })}
    </ul>
    </>
  )
}
