import React, { useState } from 'react'
import { useTrail, a } from '@react-spring/web'

import styles from './scss/styles.module.scss';

const Trail: React.FC<{ open: boolean }> = ({ open, children }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 150 : 0,
    from: { opacity: 0, x: 20, height: 0 },
    loop: { reverse: true },
    delay: 2000
  })
  return (
    <div className="judul">
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}

export const Judul = () => {
  const [open, set] = useState(true)
  return(
    <div>
    <div className={styles.container} onClick={() => set(state => !state)}>
      <Trail open={open}>
        <span>Welcome to</span>
        <span>My Personal</span>
        <span>Website</span>
      </Trail>
    </div>
    </div>
  )
}


export default Judul;
