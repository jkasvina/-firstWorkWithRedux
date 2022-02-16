import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const mockChartData = [
    { date: '2021-12-06', value: 10.058 },
    {
        date: '2021-12-07',
        value: 14.192,
    },
    {
        date: '2021-12-08',
        value: 9.138,
    },
    {
        date: '2021-12-09',
        value: 10.124,
    },
    {
        date: '2021-12-10',
        value: 7.988,
    },
    {
        date: '2021-12-13',
        value: 8.57,
    },
    {
        date: '2021-12-14',
        value: 5.546,
    },
    {
        date: '2021-12-15',
        value: 8.544,
    },
];

const mockOperationsData = [
    {
        label: 'ГАЗПРОМ АДР US3682872078',
        typeLabel: 'покупка',
        amount: 19995.73,
        price: {
            value: 9.25,
            currency: 'USD',
            date: '2021-12-09',
            is_percent: false,
        },
        currency: 'USD',
        commission: 0,
        date: '2021-12-09',
        type: 'buy',
        count: 2161,
    },
    {
        label: 'ГАЗПРОМ АДР US3682872078',
        typeLabel: 'покупка',
        amount: 19995.73,
        price: {
            value: 9.25,
            currency: 'USD',
            date: '2021-12-14',
            is_percent: false,
        },
        currency: 'USD',
        commission: 0,
        date: '2021-12-14',
        type: 'buy',
        count: 2161,
    },
];

const Diagram = () => {
    const demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

    let renderDot = (props) => {
        console.log(props)

    }

    return (
        <div style={{height: '300px', width: '1000px'}}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={mockChartData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#8884d8"
                        dot={ renderDot }
                        activeDot={{ r: 8 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Diagram;