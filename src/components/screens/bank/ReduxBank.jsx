import React from "react";
import styles from "./ReduxBank.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { RouteButton } from "../../ui/buttons/RouteButton";
import { Button } from "../../ui/buttons/Button";
import { MainTitle } from "../../ui/title/MainTitle";




export const ReduxBank = () => {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash);

  const addCash = (cash) => {
    if (!NaN) {
      dispatch({type: "ADD_CASH", payload: cash});
      } else {
        alert("You must fill only numbers")
      }
  }

  const getCash = (cash) => {
    if (!NaN) {
      dispatch({type: "GET_CASH", payload: cash});
    } else {
      alert("You must fill only numbers")
    }
  }

  return (
    <div className={styles.reduxbank__wrapper}>
      <MainTitle name="Redux Bank" />
      <RouteButton path="/" name="Back" />
      <div className={styles.cash__wrapper}>
        <p className={styles.cash__text}>{cash}</p>
      </div>
      <div className={styles.cashbutton__wrapper}>
        <Button onClick={() => addCash(+prompt("You must fill only numbers"))} name="Add Cash"/>
        <Button onClick={() => getCash(+prompt("You must fill only numbers"))} name="Get Cash"/>
      </div>

    </div>
  )
}