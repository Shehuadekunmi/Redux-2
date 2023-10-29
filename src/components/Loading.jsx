import React from 'react'
import { Puff } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div>Loading

<Puff
  height="280"
  width="280"
  radius={1}
  color="#4fa94d"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    </div>
  )
}

export default Loading