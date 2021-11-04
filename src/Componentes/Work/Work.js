import react from "react"
import Aside from '../Nav/Nav'
import "./Work.css"
import WorkImg from '../images/two-busines.jpg'
export default function Work() {
    return (
        <div className=''>
            <div className="row">
                <div className="col-md-3">
                    <Aside />
                </div>
                <div className="work col-md-9">
                    <h2>Work</h2>
                    <hr />
                    <div className="Card-work ">

                        <div className="Card col-md-5">
                            <div className="img-wrapper">
                                <img src={WorkImg} className="inner-img" data-toggle="modal"
                                    data-target="#exampleModal" />

                                <div class="modal fade"
                                    id="exampleModal"
                                    tabindex="-1"
                                    role="dialog"
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog"
                                        role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">

                                                <h5 class="modal-title w-100"
                                                    id="exampleModalLabel">
                                                  Service 1
                      </h5>
                                                <button type="button"
                                                    class="close btn btn-warn"
                                                    data-dismiss="modal"
                                                    aria-label="Close">
                                                    <span aria-hidden="true">
                                                        ×
                          </span>
                                                </button>
                                            </div>


                                            <div class="modal-body justify-content-center">
                                                <img src={WorkImg} style={{width:"450px"}}/>
                                            </div>

                                            <div class="modal-footer">
                                                <button type="button"
                                                    class="btn btn-danger"
                                                    data-dismiss="modal">
                                                    Close
                      </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Card-Title">
                                <h3>Service 1</h3>
                                <p>Lorem Lorem lorem Lorem Lorem loremLorem Lorem loremLorem Lorem lorem
                        </p>
                            </div>
                        </div>
                        <div className="Card col-md-5">
                            <div className="img-wrapper">
                                <img src={WorkImg} className="inner-img" />
                            </div>
                            <div className="Card-Title">
                                <h3>Service 1</h3>
                                <p>Lorem Lorem lorem Lorem Lorem loremLorem Lorem loremLorem Lorem lorem
                        </p>
                            </div>
                        </div>
                        <div className="Card col-md-5">
                            <div className="img-wrapper">
                                <img src={WorkImg} className="inner-img" />
                            </div>
                            <div className="Card-Title">
                                <h3>Service 1</h3>
                                <p>Lorem Lorem lorem Lorem Lorem loremLorem Lorem loremLorem Lorem lorem
                        </p>
                            </div>
                        </div>
                        <div className="Card col-md-5">
                            <div className="img-wrapper">
                                <img src={WorkImg} className="inner-img" />
                            </div>
                            <div className="Card-Title">
                                <h3>Service 1</h3>
                                <p>Lorem Lorem lorem Lorem Lorem loremLorem Lorem loremLorem Lorem lorem
                        </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}