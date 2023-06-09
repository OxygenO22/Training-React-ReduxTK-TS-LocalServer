import { useGetGoodsQuery, useAddGoodMutation, useDeleteGoodMutation } from "./GoodsApi";
import { Button } from "../../ui/buttons/Button";
import { Header } from "../../ui/header/Header";
import { IGoodsList } from "./GoodsTypes";
import { Input } from "../../ui/input/Input";
import styles from "./GoodsList.module.scss";
import { useState } from "react";

export const GoodsList = () => {
  const [count, setCount] = useState("");
  const [newGood, setNewGood] = useState("");
  const {data = [], isLoading} = useGetGoodsQuery(count);
  const [addGood, {isError}] = useAddGoodMutation();
  const [deleteGood] = useDeleteGoodMutation();

  const handleAddGood = async () => {
    if (newGood) {
      await addGood({name: newGood}).unwrap();
      setNewGood("");
    }
  };

  const handleDeleteGood = async (id: any) => {
    await deleteGood(id).unwrap();
  }

  return (
    <div className={styles.taskManager__wrapper}>
      <Header place="goodsList" />
      {isLoading && <h1>Loading...</h1>}
      <div>
        <Input
          placeholder="Add new good"
          value={newGood}
          onChange={(e: any) => setNewGood(e.target.value)}
        />
        <Button name="Add good" onClick={handleAddGood} />
      </div>
      <div>
        <select value={count} onChange={(e: any) => setCount(e.target.value)}>
          <option value="">all</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <ul>
        {data.map((item: IGoodsList) => (
          <li key={item.id} onClick={() => handleDeleteGood(item.id)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
