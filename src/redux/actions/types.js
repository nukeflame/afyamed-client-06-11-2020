/**
|--------------------------------------------------
| Action Types
|--------------------------------------------------
*/

//login
export const LOGGING_ERRORS = "LOGGING_ERRORS";
export const LOGGING_USER = "LOGGING_USER";
export const CLEAR_LOGGING_ERRORS = "CLEAR_LOGGING_ERRORS";
export const AUTH_USER = "AUTH_USER";
export const USER_NO = "USER_NO";
export const USER_NO_LOAD = "USER_NO_LOAD";
//notifications
export const FETCH_NOTIFICATIONS = "FETCH_NOTIFICATIONS";
export const CLEAR_NOTIFICATIONS = "CLEAR_NOTIFICATIONS";
export const FETCH_UNREAD_NOTIFICATIONS = "FETCH_UNREAD_NOTIFICATIONS";
// user
export const CHECK_USER_PWD = "CHECK_USER_PWD";
export const CHECK_PWD_ERRORS = "CHECK_PWD_ERRORS";
export const CLEAR_CHECK_PWD_ERRORS = "CLEAR_CHECK_PWD_ERRORS";
export const CHECKING_USER_PWD = "CHECKING_USER_PWD";
export const SAVING_USER = "SAVING_USER";
export const SETTING_BRANCH = "SETTING_BRANCH";
export const IS_UNAUTHORIZED = "IS_UNAUTHORIZED";
//room status
export const FETCH_ROOM_STATUS = "FETCH_ROOM_STATUS";
export const DISABLE_ADM = "DISABLE_ADM";
//users
export const FETCH_USER = "FETCH_USER";
export const FIND_USERS = "FIND_USERS";
export const FETCH_USERS = "FETCH_USERS";
export const ADD_USER = "ADD_USER";
export const UPDATE_USER = "UPDATE_USER";
export const LOADING_USER = "LOADING_USER";
export const USER_ERRORS = "USER_ERRORS";
export const CLEAR_USER_ERRORS = "CLEAR_USER_ERRORS";
//patients
export const FETCH_PATIENTS = "FETCH_PATIENTS";
export const NEW_PATIENT = "NEW_PATIENT";
export const DEL_PATIENT = "DEL_PATIENT";
export const DEL_PATIENTS = "DEL_PATIENTS";
export const UPDATE_PATIENT = "UPDATE_PATIENT";
export const PATIENT_ERRORS = "PATIENT_ERRORS";
export const CLEAR_PATIENT_ERRORS = "CLEAR_PATIENT_ERRORS";
export const FETCH_CUSTOMIZE = "FETCH_CUSTOMIZE";
export const FIND_CUSTOMIZE = "FIND_CUSTOMIZE";
export const SET_CURRENT_PATIENT = "SET_CURRENT_PATIENT";
export const STORAGE_CURRENT_PATIENT = "STORAGE_CURRENT_PATIENT";
export const LOADING_NEW_PATIENT = "LOADING_NEW_PATIENT";
export const DEL_CURRENT_PATIENT = "DEL_CURRENT_PATIENT";

//patient histories
export const FETCH_PATIENT_HISTORIES = "FETCH_PATIENT_HISTORIES";
export const LOADING_PATIENT_VALUES = "LOADING_PATIENT_VALUES";
export const FETCH_PATIENT_HISTORIES_VALUES = "FETCH_PATIENT_HISTORIES_VALUES";
export const FETCH_PATIENT_HISTORY_DATA = "FETCH_PATIENT_HISTORY_DATA";
export const UPDATE_PATIENT_DATA = "UPDATE_PATIENT_DATA";
//chats
export const ADD_CHAT_USER = "ADD_CHAT_USER";
export const FETCH_CHATS = "FETCH_CHATS";
export const SEND_MSG = "SEND_MSG";
export const DISPLAY_CHATS = "DISPLAY_CHATS";
// hospital
export const FETCH_HOSPITALS = "FETCH_HOSPITALS";
export const ADD_HOSPITAL = "ADD_HOSPITAL";
export const FIND_HOSPITAL = "FIND_HOSPITAL";
export const HOSPITAL_ERRORS = "HOSPITAL_ERRORS";
export const FINDING_HOSPITAL = "FINDING_HOSPITAL";
export const SELECTED_HOSP = "SELECTED_HOSP";
//clients
export const FETCH_CLIENTS = "FETCH_CLIENTS";
export const ADD_CLIENT = "ADD_CLIENT";
export const UPDATE_CLIENT = "UPDATE_CLIENT";
export const SAVING_CLIENTS = "SAVING_CLIENTS";
export const CLIENT_ERRORS = "CLIENT_ERRORS";
export const DEL_CLIENTS = "DEL_CLIENTS";
export const CLIENT_CLEAR_ERRORS = "CLIENT_CLEAR_ERRORS";
//branches
export const FETCH_HOSP_BRANCHES = "FETCH_HOSP_BRANCHES";
export const SET_HOSP_BRANCH = "SET_HOSP_BRANCH";
export const ADD_BRANCH = "ADD_BRANCH";
export const UPDATE_BRANCH = "UPDATE_BRANCH";
export const SAVING_BRANCHES = "SAVING_BRANCHES";
export const BRANCH_ERRORS = "BRANCH_ERRORS";
export const DEL_BRANCHES = "DEL_BRANCHES";
export const BRANCH_CLEAR_ERRORS = "BRANCH_CLEAR_ERRORS";
//departments
export const fetchDepartments = "fetchDepartments";
export const createDepartments = "createDepartments";
export const delDepartments = "delDepartments";
//queues
export const FETCH_QUEUE = "FETCH_QUEUE";
export const CREATE_QUEUE = "CREATE_QUEUE";
export const UPDATE_QUEUE = "UPDATE_QUEUE";
export const FIND_QUEUE = "FIND_QUEUE";
export const LOADING_QUEUES = "LOADING_QUEUES";
//groups
export const FETCH_GROUPS = "FETCH_GROUPS";
export const FETCHING_GROUPS = "FETCHING_GROUPS";
export const SAVING_GROUPS = "SAVING_GROUPS";
export const ADD_GROUP = "ADD_GROUP";
export const GROUP_ERRORS = "GROUP_ERRORS";
export const DEL_GROUP = "DEL_GROUP";
export const UPDATE_GROUP = "UPDATE_GROUP";
export const FIND_GROUPS = "FIND_GROUPS";
export const CLEAR_GROUP_ERRORS = "CLEAR_GROUP_ERRORS";
//permisions
export const FETCH_PERM_GROUPS = "FETCH_PERM_GROUPS";
export const SHOW_PERM_GROUP = "SHOW_PERM_GROUP";
//modules
export const FETCH_MODULES = "FETCH_MODULES";
export const FIND_MODULES = "FIND_MODULES";
export const DISPLAY_ROOM = "DISPLAY_ROOM";
//search
export const SEARCH_DIAGNOSES = "SEARCH_DIAGNOSES";
export const SEARCH_PATIENTS = "SEARCH_PATIENTS";
//positions
export const FETCH_POSITIONS = "FETCH_POSITIONS";
//identifications
export const FETCH_IDS = "FETCH_IDS";
//alert
export const SUSPEND_ALERT = "SUSPEND_ALERT";
export const BLOCKED_ALERT = "BLOCKED_ALERT";
//consultations
export const FETCH_CONSULTATIONS = "FETCH_CONSULTATIONS";
export const FIND_CONSULTATIONS = "FIND_CONSULTATIONS";
export const FIND_CONS_LOADING = "FIND_CONS_LOADING";
export const CREATE_CONSULTATION = "CREATE_CONSULTATION";
export const SAVING_CONSULTATION = "SAVING_CONSULTATION";
export const CONSULTATION_ERRORS = "CONSULTATION_ERRORS";
export const CONS_CLEAR_ERRORS = "CONS_CLEAR_ERRORS";
//medics
export const FETCH_MEDICS = "FETCH_MEDICS";
//timeline
export const FETCH_TIMELINE = "FETCH_TIMELINE";
export const FIND_TIMELINE = "FIND_TIMELINE";
//documents
export const ADD_DOCUMENT = "ADD_DOCUMENT";
export const FETCH_DOCUMENTS = "FETCH_DOCUMENTS";
export const FIND_DOCUMENT = "FIND_DOCUMENT";
export const DESTROY_DOCUMENT = "DESTROY_DOCUMENT";
//occupations
export const FETCH_OCCUPATIONS = "FETCH_OCCUPATIONS";
//towns
export const FETCH_TOWNS = "FETCH_TOWNS";
//countries
export const FETCH_COUNTRIES = "FETCH_COUNTRIES";
//clinics
export const FETCH_CLINICS = "FETCH_CLINICS";
