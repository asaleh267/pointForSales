import  { POSTabs }  from "./POSTabs";
import { storiesOf } from "@storybook/react";
import React from "react";

storiesOf("Tab", module).add("POS Tabs", () => (
  <POSTabs value="Drinks" tabs={["Drinks", "Sweets", "Food", "Deserts"]}>
    <h1>1</h1>
    <h1>2</h1>
    <h1>3</h1>
    <h1>4</h1>
  </POSTabs>
)); 