import { Chart, Interval, Tooltip } from 'bizcharts';

const data = [
    { score: '4分', num: 3 },
    { score: '8分', num: 2 },
    { score: '12分', num: 1 },
    { score: '16分', num: 5 },
    { score: '20分', num: 4 },
    { score: '24分', num: 8 },
    { score: '28分', num: 5 },
    { score: '32分', num: 10 },
];


function Score() {
    return <Chart height={300} width={500}  autoFit data={data} interactions={['active-region']} padding={[30, 30, 30, 50]} >
        {/* color:#ff7875 */}
        <Interval position="score*num" color="l (270) 0:rgba(247, 152, 143, 0.93) 1:rgba(255, 120, 117, 1)" />
        <Tooltip shared />
    </Chart>
}

export default Score