'use client'

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { curveCardinal } from 'd3-shape';

const data = [
  {
    name: '11 jun',
    vendas: 962,
    faturamento: 2400,
  },
  {
    name: '15 jun',
    vendas: 493,
    faturamento: 1398,
  },
  {
    name: '19 jun',
    vendas: 498,
    faturamento: 1462,
  },
  {
    name: '23 jun',
    vendas: 239,
    faturamento: 694,
  },
  {
    name: '27 jun',
    vendas: 721,
    faturamento: 5628,
  },
  {
    name: '1 jul',
    vendas: 417,
    faturamento: 2128,
  },
  {
    name: '5 jul',
    vendas: 684,
    faturamento: 3128,
  },
  {
    name: '7 jul',
    vendas: 315,
    faturamento: 4828,
  },
  {
    name: '9 jul',
    vendas: 17,
    faturamento: 428,
  },
];

export function ChartInvoicing() {

  const cardinal = curveCardinal.tension(0.2);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorFaturamento" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#08DD7E" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#fff" stopOpacity={0} />
          </linearGradient>

          <linearGradient id="colorVendas" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#09090B" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#fff" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type={cardinal} dataKey="faturamento" stroke="#82ca9d" fill="url(#colorFaturamento)" fillOpacity={0.3} />
        <Area type="monotone" dataKey="vendas" stroke="#083723" fill="url(#colorVendas)" fillOpacity={0.3} />
      </AreaChart>
    </ResponsiveContainer>
  );
}
