import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchSearchPatient } from "../../../redux/actions/searchActions";
import $ from "jquery";
import { setCurrentPatient } from "../../../redux/actions/patientActions";
import imageUrl from "../../../config/urls/imageUrl";
import defaultAvatar from "../../../assets/avatar/defAvatar.gif";
import moment from "moment";

class SearchPatient extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    autofocus: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = {
      search: "",
      options: ""
    };
  }

  handleChange = e => {
    let value = e.target.value;

    if (!value) {
      value = "";
    }

    this.setState({ search: value }, () => {
      const { search } = this.state;
      if (search && search.length > 1) {
        if (search.length % 2 === 0) {
          const data = { patients: search };
          this.props.fetchSearchPatient(data).then(() => {
            const { searchPatients } = this.props;
            this.setState({ options: searchPatients });
          });
        }
      }
    });
  };

  handleKeyPress = e => {
    if (!this.state.options || this.state.options.length < 1) {
      return;
    }
    // enter
    if (e.keyCode === 13) {
      console.log("dd");

      // this.handleEnter();
    }
    // arrow down
    if (e.keyCode === 40) {
      console.log("down");

      // _this.handleArrowDown();
    }
  };

  onBlur = e => {
    e.preventDefault();
    const { options } = this.state;
    if (!options.length > 0) {
      $(".select-search-box__select").removeClass(
        "select-search-box__select--block"
      );
    }
  };

  handleClickOutside = () => {};
  handleFocus = () => {};
  handleBlur = () => {};
  findByValue = () => {};
  chooseOption = () => {};
  removeOption = () => {};
  scrollToSelected = () => {};

  handleSelectedSearch = value => {
    this.props.setCurrentPatient(value);
    this.props.history.push("/records/patientChart");
    $(".select-search-box__select").removeClass(
      "select-search-box__select--block"
    );
  };

  handleSearchKeyUp = () => {
    const { search } = this.state;
    if (search.length % 3 === 0) {
      $(".select-search-box__select").addClass(
        "select-search-box__select--block"
      );
    }
  };

  getMomentDate = date => {
    return moment(date).format("DD-MMM-YYYY");
  };

  componentDidMount() {
    if (this.props.autofocus === true) {
      $("#patientsList").focus();
    }

    //search selected
    $(".select-search-box__search").keyup(e => {
      this.handleSearchKeyUp(e);
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.autofocus) {
      $("#patientsList").focus();
    }
    if (prevState.search.length) {
      this.setState({ search: "" });
    }
  }

  render() {
    const { options } = this.state;
    return (
      <div className="select-search-box select-search-box--focus select-search-box--select">
        <input
          name="patientsList"
          autoComplete="off"
          required
          title="3 characters minimum"
          className="select-search-box__search"
          type="search"
          ref="searchInput"
          autoFocus={this.props.autofocus}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
          onKeyPress={e => this.handleKeyPress(e)}
          onBlur={this.onBlur}
          id="patientsList"
        />

        <div
          className="select-search-box__select"
          style={{ maxHeight: "378px" }}
        >
          <ul className="select-search-box__options">
            {options && options.length > 0 ? (
              options.map(p => (
                <li
                  key={p.id}
                  role="menuitem"
                  className="select-search-box__option select-search-box__row"
                  data-value={p.fullname}
                  onClick={e => this.handleSelectedSearch(p)}
                >
                  <div className="panel-avatar">
                    <div className="panel-profile">
                      {p.avatar !== null ? (
                        <div className="panel-profile">
                          <img
                            width="40"
                            height="40"
                            src={imageUrl + p.avatar}
                            alt=""
                          />
                        </div>
                      ) : (
                        <div className="panel-profile">
                          <img
                            width="40"
                            height="40"
                            src={defaultAvatar}
                            alt=""
                          />
                        </div>
                      )}
                    </div>
                    <div className="panel-avatar-item bold">{p.fullname}</div>
                    <span className="panel-avatar-date">
                      {this.getMomentDate(p.dob)}
                    </span>
                  </div>
                </li>
              ))
            ) : (
              <li className="select-search-box__option select-search-box__row text-center">
                No records found
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchPatients: state.search.patients
});
const mapDispatchToProps = {
  fetchSearchPatient,
  setCurrentPatient
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPatient);
