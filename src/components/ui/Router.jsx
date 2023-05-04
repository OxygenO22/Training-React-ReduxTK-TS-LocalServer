import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { CarDetail } from "../screens/car-detail/CarDetail";
import { ClothersShop } from "../screens/clothersShop/ClothersShop";
import { EventSourcing } from "../chat/EventSourcing";
import { Home } from "../screens/home/Home";
import { LongPulling } from "../chat/LongPulling";
import { MainTitle } from "./title/MainTitle";
import { ReduxBank } from "../screens/bank/ReduxBank";
import { TaskManager } from "../screens/taskManager/TaskManager";
import { Cars } from "../screens/cars/Cars";
import { ToDo } from "../screens/toDo/ToDo";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/" />
        <Route element={<Cars/>} path="/CarsCatalog" />
        <Route element={<CarDetail/>} path="/car/:id" />
        <Route element={<LongPulling/>} path="/chatLP" />
        <Route element={<EventSourcing /> } path="/chatES" />
        <Route element={<ReduxBank /> } path="/ReduxBank" />
        <Route element={<ClothersShop /> } path="/ReduxToolkit" />
        <Route element={<TaskManager /> } path="/TaskManager" />
        <Route element={<ToDo /> } path="/ToDo" />
        <Route element={<MainTitle name="Not found" />} path="*" />
      </Routes>
    </BrowserRouter>
  );
};
