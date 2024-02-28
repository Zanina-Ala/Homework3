import './RightCard.css';

export default function RightCard({ value, hours, period, bgColor }: any) {

    return (
        <div className='rightContainer' style={{ backgroundColor: bgColor }}>
            <div className='Card'>
                <div className='Header'>
                    <h2>{value}</h2>
                    <span>...</span>
                </div>
                <div className='Time'>
                    <h1>{hours} hrs</h1>
                    <h3>{period} hrs</h3>
                </div>
            </div>
        </div>
    );
}
