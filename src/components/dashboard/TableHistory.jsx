import { useState } from "react";
import {
  Card,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
} from "@tremor/react";

const salesPeople = [
  {
    id: 1,
    categoria: "Pago online",
    monto: "19.00",
    lugar: "netflix",
    fecha: "23.11.2023. 10:30AM",
    status: "Completado",
    bgEstatus: "bg-green-300",
  },
  {
    id: 2,
    categoria: "Pago online",
    monto: "19.00",
    lugar: "fornite",
    fecha: "23.10.2023. 7:30AM",
    status: "Rechazado",
    bgEstatus: "bg-red-300",
  },
  {
    id: 3,
    categoria: "Pago online",
    monto: "25.00",
    lugar: "Spotofy",
    fecha: "22.10.2023. 1:30PM",
    status: "Pendiente",
    bgEstatus: "bg-yellow-300",
  }
];

export const TableHistory = () => {
  return (
    <Card className="w-full">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell className="text-center">Categoria</TableHeaderCell>
            <TableHeaderCell className="text-center">Estado</TableHeaderCell>
            <TableHeaderCell className="text-center">Monto ($)</TableHeaderCell>
            <TableHeaderCell className="text-center">Lugar</TableHeaderCell>
            <TableHeaderCell className="text-center">Fecha</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {salesPeople.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="text-center">{item.categoria}</TableCell>
              <TableCell className="text-center">
                <div className={`${item.bgEstatus} rounded-lg p-1 text-center`}>
                  <p className="text-black">{item.status}</p>
                </div>
              </TableCell>
              <TableCell className="text-center">{item.monto}</TableCell>
              <TableCell className="text-center">{item.lugar}</TableCell>
              <TableCell className="text-center">{item.fecha}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};
