import React, { Fragment } from 'react';
import '../assets/css/latar.css';
     

const Latar =() =>{
    return (
        <Fragment>
            <div id='scene'>
                <div className="container" >

                </div>
            </div>

            <form  id="pencarian" >
                <div className="container ">
                    <div class="row align-items-center mx-2 mt-4">
                        <div className="col mt-2">
                            <label for="tipe-sopir" class="mb-2">Tipe Sopir</label>
                                <select class="form-select">
                                    <option>Pilih Tipe Driver</option>
                                    <option>Dengan Sopir</option>
                                    <option>Tanpa Sopir(Lepas Kunci)</option>
                                </select>
                        </div>

                        <div className="col mt-2">
                            <label for="tanggal" class="mb-2">Tanggal</label>
                                <input type="date" id="tanggal" name="tanggal" placeholder="Pilih Tanggal"/>
                        </div>

                        <div className="col mt-2">
                            <label for="waktu-jemput" class="mb-2">Waktu Jemput</label>
                                <select className="form-select" img="fi_clock.png">
                                    <option>Pilih Waktu</option>
                                    <option>08.00 WIB</option>
                                    <option>10.00 WIB</option>
                                    <option>14.00 WIB</option>
                                </select>
                        </div>
                        <div className="col mt-2">
                            <label for="jumlah-penumpang" class="mb-2 text-black">Jumlah Penumpang </label>
                            <input type="text"  placeholder="Jumlah Penumpang"/> 
                        </div>
                        <div className="col mt-5 justify-content-center">
                            <button type="button" className="btn btn-outline-primary">Edit</button>  
                        </div>
                    </div>
                </div>
            </form>
       </Fragment> 
    )
}
export default Latar;