import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';

// const zipcodes = [
//     60189,
//     60138,
//     60134,
//     60301,
//     60515
// ];

const budget = [
    {name: 'Military', value: 876}, {name: 'Salaries', value: 160}, {name: 'Healthcare', value: 420}, {name: 'Bribes', value: 300}
]
const clientKey = "js-24881b1be3175f6bfcf194ec2ad5e989";

const DeathChartByZip = (props) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // for(var zipcode in zipcodes){
        //     axios.get("https://service.zipapi.us/population/zipcode/" + zipcode + "?X-API-KEY=" + clientKey + "&fields=population")
        //     .then((data) => console.log(data))
        //     .catch((error) => console.log(error));
        // }
    });

    return (
        <div>
            <h1>Deaths By Zip</h1>
            <PieChart width={600} height={600}>
                <Pie dataKey="value" isAnimationActive={true} innerRadius={50} data={budget} fill="#89cff0" label />
                <Tooltip />
            </PieChart>
        </div>
    );
}

export default DeathChartByZip;