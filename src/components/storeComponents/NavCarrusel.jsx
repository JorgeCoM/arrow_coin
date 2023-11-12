import { v4 as uuidv4 } from "uuid";
import {Card} from "./Card";
import { Carroussel } from "./Carroussel";

export const NavCarrusel = () => {

  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card text={"Accesorio"} imagen="https://movilion.com/wp-content/uploads/2012/11/accesorios-smartphone.jpg" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card text="Cocina" imagen="https://cdn.shopify.com/s/files/1/2098/0315/files/blog-cocinas-1_480x480.png?v=1625534449" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card text={"Ropa"} imagen="https://www.mcmobiliariocomercial.com/res/uploads/-92.jpg" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card text={"tarjetas"} imagen="https://http2.mlstatic.com/D_NQ_NP_929405-MLM47282967491_082021-W.jpg" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card text={"tarjetas"} imagen="https://http2.mlstatic.com/D_NQ_NP_929405-MLM47282967491_082021-W.jpg" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card text={"tarjetas"} imagen="https://http2.mlstatic.com/D_NQ_NP_929405-MLM47282967491_082021-W.jpg" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card text={"tarjetas"} imagen="https://http2.mlstatic.com/D_NQ_NP_929405-MLM47282967491_082021-W.jpg" />
      )
    }
    
  ];

  return (
    <div className="flex justify-center items-center w-full h-full">
      <Carroussel
        cards={cards}
        height="125px"
        width="90%"
        offset={2}
        showArrows={false}
      />
    </div>
  );
};
