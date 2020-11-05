/**
|--------------------------------------------------
| Default Store
|--------------------------------------------------
*/
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import userReducer from "../reducers/userReducer";
import usersReducer from "../reducers/usersReducer";
import patientReducer from "../reducers/patientReducer";
import chatReducer from "../reducers/chatReducer";
import hospitalsReducer from "../reducers/hospitalsReducer";
import clientReducer from "../reducers/clientReducer";
import depReducer from "../reducers/depReducer";
import queueReducer from "../reducers/queueReducer";
import groupReducer from "../reducers/groupReducer";
import permGroupReducer from "../reducers/permGroupReducer";
import moduleReducer from "../reducers/moduleReducer";
import positionReducer from "../reducers/positionReducer";
import idsReducer from "../reducers/idsReducer";
import alertReducer from "../reducers/alertReducer";
import branchesReducer from "../reducers/branchesReducer";
import medicReducer from "../reducers/medicReducer";
import consultationReducer from "../reducers/consultationReducer";
import timelineReducer from "../reducers/timelineReducer";
import docsReducer from "../reducers/docsReducer";
import roomStatusReducer from "../reducers/roomStatusReducer";
import searchReducer from "../reducers/searchReducer";
import occpReducer from "../reducers/occpReducer";
import townReducer from "../reducers/townReducer";
import countryReducer from "../reducers/countryReducer";
import notificationsReducer from "../reducers/notificationsReducer";
import patientHistoryReducer from "../reducers/patientHistoryReducer";
import patientHistoryValueReducer from "../reducers/patientHistoryValueReducer";
import patientHistoryDataReducer from "../reducers/patientHistoryDataReducer";
import clinicReducer from "../reducers/clinicReducer";

const rootReducer = combineReducers({
  user: userReducer,
  users: usersReducer,
  patients: patientReducer,
  chats: chatReducer,
  hospitals: hospitalsReducer,
  clients: clientReducer,
  departments: depReducer,
  queues: queueReducer,
  groups: groupReducer,
  permGroups: permGroupReducer,
  modules: moduleReducer,
  positions: positionReducer,
  ids: idsReducer,
  alert: alertReducer,
  branches: branchesReducer,
  consultations: consultationReducer,
  medics: medicReducer,
  timeline: timelineReducer,
  documents: docsReducer,
  roomStatus: roomStatusReducer,
  search: searchReducer,
  occupations: occpReducer,
  towns: townReducer,
  countries: countryReducer,
  notifications: notificationsReducer,
  patientHistories: patientHistoryReducer,
  patientHistoriesValues: patientHistoryValueReducer,
  patientHistoryData: patientHistoryDataReducer,
  clinics: clinicReducer
});

const initState = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initState,
  compose(
    applyMiddleware(...middleware)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
