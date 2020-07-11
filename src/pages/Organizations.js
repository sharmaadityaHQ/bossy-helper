import React from 'react'
import orgList from '../utils/orgs.store'
import Card from '../components/Card'

const Organizations = () => {
  return (
    <div>
      {orgList.map((org, key) => {
        return <Card name={org.name} summary={org.summary} key={key} />
      })}
    </div>
  )
}

export default Organizations
