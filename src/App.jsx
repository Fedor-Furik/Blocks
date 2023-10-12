import React from "react";
import Inter from "./Components/Inter/inter"
import "./style/App.css"

const internet = [
  {
    num: "300",
    mBit: "10",
    Ogr: "не ограничен",
    Color: "blue",
    HdCоlor: "HdBlue"
  },
  {
    num: "450",
    mBit: "50",
    Ogr: "не ограничен",
    Color: "green",
    HdCоlor: "HdGreen"
  },
  {
    num: "550",
    mBit: "100",
    Ogr: "не ограничен",
    Color: "red",
    HdCоlor: "HdRed"
  },
  {
    num: "1000",
    mBit: "200",
    Ogr: "не ограничен",
    Color: "black",
    HdCоlor: "HdBlack"
  }
]
export default function App() {
  return (
    <div className="biba">
      <Inter num={internet[0].num} mBit={internet[0].mBit} ogr={internet[0].Ogr} color={internet[0].Color} bzm={internet[0].HdCоlor}/>
      <Inter num={internet[1].num} mBit={internet[1].mBit} ogr={internet[1].Ogr} color={internet[1].Color} bzm={internet[1].HdCоlor}/>
      <Inter num={internet[2].num} mBit={internet[2].mBit} ogr={internet[2].Ogr} color={internet[2].Color} bzm={internet[2].HdCоlor}/>
      <Inter num={internet[3].num} mBit={internet[3].mBit} ogr={internet[3].Ogr} color={internet[3].Color} bzm={internet[3].HdCоlor}/>
    </div>
  );
}
