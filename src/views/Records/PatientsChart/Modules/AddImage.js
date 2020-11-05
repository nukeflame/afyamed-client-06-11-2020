import React, { Component } from "react";
import { Row, Col, Card, CardHeader } from "reactstrap";
import first from "../pics/1.png";
import second from "../pics/2.jpg";


class AddImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      media: []
    };
  }

  handleUploadScan = e => {
    e.preventDefault();
    this.refs.refScan.click();
  };

  uploadScan = e => {
    const { media } = this.state;

    let reader,
      file = e.target.files[0];

    reader = new FileReader();
    reader.onload = e => {
      let image = media;
      image.push(e.target.result);
      this.setState({
        media: image
      });
    };
    reader.readAsDataURL(file);

    console.log(media);
  };

  handlePhotos = e => {
    this.setState({ media: null, mediaData: null });
    const { media } = this.state;

    var reader,
      files = e.target.files;

    if (files.length === 0) {
      return console.log("no file ADDED");
    }

    this.setState({ mediaData: files });

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      reader = new FileReader();
      reader.onload = e => {
        var images = media;
        images.unshift(e.target.result);

        this.setState({
          media: images
        });
      };

      reader.readAsDataURL(file);
    }

    this.showMediaBox();
  };

  render() {
    return (
      <div>
        <Row>
          <Col sm="12">
            <Card className="box">
              <CardHeader className="box-header mb-1">
                <div>
                  <ul className="header-left">
                    <li>
                      <button
                        className="btn-box"
                        onClick={this.handleUploadScan}
                      >
                        <i className="fa fa-plus c-primary pr-1" />
                        <span className="mini-title">Add Image</span>
                      </button>
                      <input
                        type="file"
                        ref="refScan"
                        accept="image/*"
                        onChange={this.uploadScan}
                        className="hidden"
                      />
                    </li>
                    <li>
                      <button className="btn-box">
                        <i className="fa fa-plus c-primary pr-1" />
                        <span className="mini-title">Capture Image</span>
                      </button>
                    </li>
                    <li>
                      <button className="btn-box">
                        <span>Capture Multiple</span>
                      </button>
                    </li>
                    <li>
                      <button className="btn-box">
                        <span>Compare</span>
                      </button>
                    </li>
                    <li>
                      <button className="btn-box">
                        <i className="fa fa-print  pr-1" />
                        <span>Print</span>
                      </button>
                    </li>
                  </ul>
                  <ul className="header-right">
                    <li>
                      <select className="form-control header-control pt-1">
                        <option>Today Only</option>
                        <option>Show All</option>
                      </select>
                    </li>
                  </ul>
                </div>
              </CardHeader>
              <div>
                <Row>
                  <Col sm="6">
                    <Row>
                      <Col sm="4">
                        <div className="avatar-box">
                          <img src={first} alt="" className="avatar-default" />
                        </div>
                        <div className="avatar-text">
                          <p>Hello.jpg</p>
                        </div>
                      </Col>
                      <Col sm="4">
                        <div className="avatar-box">
                          <img src={second} alt="" className="avatar-default" />
                        </div>
                        <div className="avatar-text">
                          <p>Hello.jpg</p>
                        </div>
                      </Col>
                      <Col sm="4">
                        <div className="avatar-box">
                          <img src={first} alt="" className="avatar-default" />
                        </div>
                        <div className="avatar-text">
                          <p>Hello.jpg</p>
                        </div>
                      </Col>
                      <Col sm="4">
                        <div className="avatar-box">
                          <img src={first} alt="" className="avatar-default" />
                        </div>
                        <div className="avatar-text">
                          <p>Hello.jpg</p>
                        </div>
                      </Col>
                      <Col sm="4">
                        <div className="avatar-box">
                          <img src={first} alt="" className="avatar-default" />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col sm="6">
                    AddImage
                    <div className="avatar-display">
                      <img src={first} alt="" className="avatar-dis" />
                    </div>
                    <div className="avatar-text">
                      <p>Hello.jpg</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AddImage;
