import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Currency = () => {
    return (
        <div>
            <h1 style={{ marginLeft: "50px" }}>Dövizler</h1>
            <div className="row d-flex justify-content-between">
            <div style={{ marginLeft: "50px", borderRadius: "10%" }} class="table-responsive card col-md-6">
                <table class="table card-table table-bordered ">
                    <thead>
                        <tr>
                            <th>İsim</th>
                            <th >Alış</th>
                            <th>Satış</th>
                            <th>Yüksek</th>
                            <th>Düşük</th>
                            <th>Değişim</th>
                            <th>Güncelleme</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr>
                            <td>Çağrı</td>
                            <td>asdasd</td>
                            <td>asdasdasd</td>
                            <td>asdsadasd</td>
                            <td>asdasdasd</td>
                            <td>asdassdasda</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div style={{ marginLeft: "50px" }} class="table-responsive card col-md-4">
            <table class="table card-table table-bordered ">
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

export default Currency;
