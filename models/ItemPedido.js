import database from "../config/database.js";
import sequelize from "sequelize";
import Pedidos from "./Pedidos.js";
import ItemCardapio from "./ItemCardapio.js";

const ItemPedido = database.define(
  "ItemPedido",
  {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_pedido: {
      type: sequelize.INTEGER,
      allowNull: true,
      references: { model: Pedidos, key: "ID" },
    },
    id_item_do_cardapio: {
      type: sequelize.INTEGER,
      allowNull: true,
      references: { model: ItemCardapio, key: "ID" },
    },
    quantidade: { type: sequelize.INTEGER, allowNull: false },
    preco_unitario: { type: sequelize.DECIMAL(10, 2), allowNull: false },
    subtotal: { type: sequelize.DECIMAL(10, 2), allowNull: false },
    observacao: { type: sequelize.STRING, allowNull: true },
  },
  {
    tableName: "item_pedido",
    timestamps: false,
  }
);

ItemPedido.belongsTo(Pedidos, { foreignKey: "id_pedido" });
ItemPedido.belongsTo(ItemCardapio, { foreignKey: "id_item_do_cardapio" });

export default ItemPedido;
