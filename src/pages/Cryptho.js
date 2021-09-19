import React, { useState, useEffect } from 'react'
import dateFormat from 'dateformat';

function Cryptho() {

    const [itemData, setItemData] = useState([]);
    const fetchData = () => {
        return fetch(process.env.REACT_APP_API + 'crypto')
            .then((response) => response.json())
            .then((data) => setItemData(data.data));
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1 style={{ marginLeft: "60px" }}>Dövizler</h1>
            <div className="row d-flex justify-content-between">
                <div style={{ marginLeft: "60px" }} className="table-responsive  col-md-9">
                    <table className="table card-table table-bordered ">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th >İsim</th>
                                <th>Satış($)</th>
                                <th>Satış(₺)</th>
                                <th>Piyasa Değeri</th>
                                <th>Hacim(24s)</th>
                                <th>Değişim</th>
                                <th>Güncelleme</th>
                                <th>Satın Al</th>
                            </tr>
                        </thead>
                        <tbody >
                            {itemData.map(item => 
                                <tr key={'key' + item.id}>
                                    <td >
                                        <img src={item.pathImg} style={{width: '30px', height:'30%' ,marginLeft: '10px',}} alt="cry png" />
                                    </td>
                                    <td style={{fontWeight:'bolder'}} className="text-danger">{item.name}</td>
                                    <td>{item.buyPriceDolar}₺</td>
                                    <td>{item.salePriceTL}₺</td>
                                    <td>{item.marketingValue}₺</td>
                                    <td>{item.size}₺</td>
                                    <td>{item.change}%</td>
                                    <td>
                                        {dateFormat(item.upDateTime, "HH:MM:ss")}
                                    </td>
                                    <td>
                                        <button className="btn btn-danger btn-sm btn-success">Al</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                </div>
                <div style={{ marginRight: 0 }} className="table-responsive  col-md-2">
                    <table className="table card-table table-bordered ">
                        <thead>
                            <tr>
                                <th>İsim</th>
                                <th>İsim</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>asdasd</td>
                                <td>asdasd</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cryptho;
