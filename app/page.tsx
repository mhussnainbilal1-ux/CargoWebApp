import Image from "next/image";
import {Header} from "./component/Header"
import { Slider } from "./component/home/Slider";
import { Content } from "./component/home/Content";
export default function Home() {
  return (
    <>
    <Slider/>
    <Content/>
    </>
  
  );
}
