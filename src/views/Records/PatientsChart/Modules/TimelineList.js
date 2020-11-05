import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchMedics,
  findMedics,
} from "../../../../redux/actions/medicActions";

export class TimelineList extends Component {
  componentDidMount() {
    this.props.fetchMedics();
  }

  render() {
    const { timeline } = this.props;

    const getMedic = (t) => {
      const medIds = Object.keys(t.items);
      // this.props.findMedics(medIds);
      return medIds;
    };

    return (
      <div>
        {timeline && timeline.length > 0
          ? timeline.map((t, index) => (
              <li key={index}>
                <div className="timelist">
                  <h6 className="bold">{getMedic(t)}</h6>
                  <div className="time-right">
                    <span>{t.date}</span>
                  </div>
                </div>
                <div>
                  <table className="timeline table no-border">
                    <tbody>
                      {t.items.map((s) => (
                        <tr key={s.id}>
                          <td className="timeline-td">{s.nameType}</td>
                          <td>
                            <div className="inner-ul">
                              <ul>
                                {JSON.parse(s.content).map((r, index) => (
                                  <li key={index}>{r}</li>
                                ))}
                                {/* <li>Enoxoparin 80 mg - 1 - Continous</li>
                                <li>Warfarin 5 mg - 1 - daily - 6 months</li> */}
                              </ul>
                            </div>
                            {/* {JSON.parse(s.content).map((r, index) => (
                              <p key={index}>{r}</p>
                            ))} */}
                          </td>
                        </tr>
                      ))}

                      {/* <tr>
                        <td className="timeline-td">Consultation</td>
                        <td>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Quisque scelerisque diam non nisi semper, et
                            elementum lorem ornare. Maecenas placerat facilisis
                            mollis. D uis sagittis ligula in sodales
                            vehicula.... Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Quisque scelerisque diam non nisi
                            semper, et elementum lorem ornare. Maecena s
                            placerat facilisis mollis. Duis sagittis ligula in
                            sodales vehicula....
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consec tetur adipiscing
                            elit. Quisque scelerisque diam non nisi semper, et
                            eleme ntum lorem ornare. Maecenas placerat facilisis
                            mollis. Duis sagittis ligula in sodales vehicula....
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Quisque scelerisque diam non nisi semper, et
                            elementum lorem ornare. Maecenas placerat facilis is
                            mollis . Duis sagittis ligula in sodales
                            vehicula....
                          </p>
                        </td>
                      </tr>
                    */}
                    </tbody>
                  </table>
                </div>
              </li>
            ))
          : null}

        {/* <tr>
                  <td className="timeline-td">Medication</td>
                  <td>
                    <div className="inner-ul">
                      <ul>
                        <li>Enoxoparin 80 mg - 1 - Continous</li>
                        <li>Warfarin 5 mg - 1 - daily - 6 months</li>
                      </ul>
                    </div>
                  </td>
                </tr> */}
        {/* //       </tbody>
              //     </table>
              //   </div>
              // </li> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  medics: state.medics.medics,
});

const mapDispatchToProps = {
  fetchMedics,
  findMedics,
};

export default connect(mapStateToProps, mapDispatchToProps)(TimelineList);
