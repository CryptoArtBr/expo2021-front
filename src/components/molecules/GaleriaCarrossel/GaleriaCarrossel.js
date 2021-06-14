import { useRef, useState, useLayoutEffect } from 'react'
import { Button, CryptoLink } from '../../atoms'
import styles from './GaleriaCarrossel.module.css'

const CarrosselItem = ({ title, description, image, link }) => {
  return (
    <div className={styles.carrossel_item}>
      <img
        src={image}
        alt="title"
        className={styles.carrossel_item__image}
      ></img>
      <span
        className={`${styles.carrossel_item__info} ${styles.carrossel_item__bg}`}
      ></span>
      <div className={styles.carrossel_item__info}>
        <p className={styles.carrossel_item__title}>{title}</p>
        <p className={styles.carrossel_item__text}>{description}</p>
        <CryptoLink {...link} />
      </div>
    </div>
  )
}

const CarrosselItems = ({ items = [], offset }) => {
  return (
    <div
      className={styles.carrossel__images_container}
      style={{ left: `-${offset}px` }}
    >
      {items.map((item, index) => (
        <CarrosselItem key={index} {...item} />
      ))}
    </div>
  )
}

export const GaleriaCarrossel = ({ items = [] }) => {
  const [activeItem, setActiveItem] = useState(0)
  const [offset, setOffset] = useState(0)
  const carrosselElement = useRef(null)

  useLayoutEffect(() => {}, [])

  const navigate = (page) => {
    let nextCalc = activeItem + page
    if (nextCalc < 0) {
      nextCalc = items.length - 1
    }

    if (nextCalc >= items.length) {
      nextCalc = 0
    }

    setActiveItem(nextCalc)
    if (carrosselElement.current) {
      setOffset(carrosselElement.current.offsetWidth * nextCalc)
    }
  }

  return (
    <>
      <div ref={carrosselElement} className={styles.carrossel}>
        <CarrosselItems items={items} offset={offset} />
        <div className={styles.carrossel__buttons_container}>
          <Button type="nav" onClick={() => navigate(-1)}>
            h
          </Button>
          <Button type="nav" onClick={() => navigate(1)}>
            e
          </Button>
        </div>
      </div>
      <div className={styles.item_indicators}>
        {items.map((item, index) => (
          <span
            className={
              index === activeItem
                ? styles.active_item_indicator
                : styles.item_indicator
            }
          ></span>
        ))}
      </div>
    </>
  )
}
