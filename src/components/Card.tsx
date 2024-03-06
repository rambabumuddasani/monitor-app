interface CardItem {
    appName : string;
    description : string;
    healthInfo: HealthInfo[];

}
interface HealthInfo {
    name: string
    status: string
    percent: string
}

// const data = { 
//     appName: "GAIA application Ploatform",
//     description: "GAIA application Ploatform is a PaaS Platform capable of transforming application code to running application" ,
//     healthInfo : [
//         {
//             name: 'Health Check',
//             status : 'good',
//             percent: '100.00' 
//         },
//         {
//             name: 'SLO',
//             status : 'good',
//             percent: '99.00' 
//         },
//         {
//             name: 'Error Rate',
//             status : 'good',
//             percent: '33.33' 
//         },

//     ]
// };

const Card = ({item } : CardItem ) => {
    return (
        <div className="col d-flex align-items-start shadow p-3 mb-5 bg-body rounded">
        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
        <svg className="bi" width="1em" height="1em"><use xlinkHref="#toggles2"></use></svg>
        </div>
        <div>
        <h3 className="fs-2 text-body-emphasis">{item.appName}</h3>
        <p> {item.description} </p>

        <ul className="list-group">
        {
            item.healthInfo.map((item) => (
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span className="mb-1">{item.name}</span>
                    <span>&#10003;</span>
                    <small>{item.percent} %</small>
                </li>             
            ))
        }
        </ul>
        
        <br/>
        <a href="#" className="btn btn-primary">
            Detailed Health Report 
        </a>
        </div>
    </div>

    )
}
export default Card;