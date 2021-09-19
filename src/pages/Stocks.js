import React, { useState, useEffect } from 'react'
import dateFormat from 'dateformat';


function Stocks() {
    const [itemData, setItemData] = useState([])
    const fetchData = () => {
        return fetch(process.env.REACT_APP_API + 'stocks')
            .then((response) => response.json())
            .then((data) => setItemData(data.data));
    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            <div>
                <h1 style={{ marginLeft: "60px" }}>Tüm Hisse Senetleri</h1>
                <div className="row d-flex justify-content-between">
                    <div style={{ marginLeft: "60px" }} className="table-responsive  col-md-9">
                        <table className="table card-table table-bordered ">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>İsim</th>
                                    <th>Son Fiyat</th>
                                    <th>Yüksek</th>
                                    <th>Düşük</th>
                                    <th>Hacim</th>
                                    <th>Değişim</th>
                                    <th>Güncelleme</th>
                                    <th>Satın Al</th>
                                </tr>
                            </thead>
                            <tbody >
                                {itemData.map(item =>
                                    <tr key={'key' + item.id}>
                                        <td style={{fontWeight:'bold'}}>{item.shortName}</td>
                                        <td style={{fontWeight:'bold'}} className="text-danger">{item.name}</td>
                                        <td>{item.lastPrice}₺</td>
                                        <td>{item.highestPrice}₺</td>
                                        <td>{item.lowestPrice}₺</td>
                                        <td>{item.size}₺</td>
                                        <td>{item.change}%</td>
                                        <td>
                                            {dateFormat(item.upDateTime, "HH:MM:ss")}
                                        </td>
                                        <td>
                                            <button style={{ width: '100%' }} className="btn outline-danger btn-sm btn-success">Al</button>
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
        </div>
    )
}

export default Stocks
