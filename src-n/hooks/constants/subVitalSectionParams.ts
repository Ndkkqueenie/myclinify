import {
  ADD_ANTHROPOMETRY,
  DELETE_ANTHROPOMETRY,
  GET_ANTHROPOMETRY_INFOS,
  UPDATE_ANTHROPOMETRY,
} from 'dashboard-app/queries/anthropometry';
import {
  ADD_BLOOD_GLUCOSE,
  DELETE_BLOOD_GLUCOSE,
  GET_BLOOD_GLUCOSE_INFOS,
  UPDATE_BLOOD_GLUCOSE,
} from 'dashboard-app/queries/bloodGlucose';
import {
  ADD_BLOOD_PRESSURE,
  DELETE_BLOOD_PRESSURE,
  GET_BLOOD_PRESSURE_INFOS,
  UPDATE_BLOOD_PRESSURE,
} from 'dashboard-app/queries/bloodPressure';
import {
  ADD_PULSE_RATE,
  DELETE_PULSE_RATE,
  GET_PULSE_RATE_INFOS,
  UPDATE_PULSE_RATE,
} from 'dashboard-app/queries/pulseRate';
import {
  ADD_RESPIRATORY_RATE,
  DELETE_RESPIRATORY_RATE,
  GET_RESPIRATORY_RATE_INFOS,
  UPDATE_RESPIRATORY_RATE,
} from 'dashboard-app/queries/respiratoryRate';
import {
  ADD_TEMPERATURE,
  DELETE_TEMPERATURE,
  GET_TEMPERATURE_INFOS,
  UPDATE_TEMPERATURE,
} from 'dashboard-app/queries/temperature';
import {
  ADD_URINE_DIPSTICK,
  DELETE_URINE_DIPSTICK,
  GET_URINE_DIPSTICK_INFOS,
  UPDATE_URINE_DIPSTICK,
} from 'dashboard-app/queries/urineDipstick';
import {
  ADD_VISUAL_ACUITY,
  DELETE_VISUAL_ACUITY,
  GET_VISUAL_ACUITY_INFOS,
  UPDATE_VISUAL_ACUITY,
} from 'dashboard-app/queries/visualAcuity';
import { VITAL_INITIAL_VALUES } from 'dashboard-app/vital-signs/constants';

export default {
  Anthropometry: {
    fetchPath: 'getAnthropometryInfos',
    addPath: 'addAnthropometryInfo',
    deletePath: 'deleteAnthropometryInfo',
    updatePath: 'updateAnthropometryInfo',
    fetchQuery: GET_ANTHROPOMETRY_INFOS,
    addQuery: ADD_ANTHROPOMETRY,
    deleteQuery: DELETE_ANTHROPOMETRY,
    updateQuery: UPDATE_ANTHROPOMETRY,
    initialValues: VITAL_INITIAL_VALUES.anthropometry,
  },
  'Blood Glucose': {
    fetchPath: 'getBloodGlucoseInfos',
    addPath: 'addBloodGlucoseInfo',
    deletePath: 'deleteBloodGlucoseInfo',
    updatePath: 'updateBloodGlucoseInfo',
    fetchQuery: GET_BLOOD_GLUCOSE_INFOS,
    addQuery: ADD_BLOOD_GLUCOSE,
    deleteQuery: DELETE_BLOOD_GLUCOSE,
    updateQuery: UPDATE_BLOOD_GLUCOSE,
    initialValues: VITAL_INITIAL_VALUES.bloodGlucose,
  },
  'Blood Pressure': {
    fetchPath: 'getBloodPressureInfos',
    addPath: 'addBloodPressureInfo',
    deletePath: 'deleteBloodPressureInfo',
    updatePath: 'updateBloodPressureInfo',
    fetchQuery: GET_BLOOD_PRESSURE_INFOS,
    addQuery: ADD_BLOOD_PRESSURE,
    deleteQuery: DELETE_BLOOD_PRESSURE,
    updateQuery: UPDATE_BLOOD_PRESSURE,
    initialValues: VITAL_INITIAL_VALUES.bloodPressure,
  },
  'Pulse Rate': {
    fetchPath: 'getPulseRateInfos',
    addPath: 'addPulseRateInfo',
    deletePath: 'deletePulseRateInfo',
    updatePath: 'updatePulseRateInfo',
    fetchQuery: GET_PULSE_RATE_INFOS,
    addQuery: ADD_PULSE_RATE,
    deleteQuery: DELETE_PULSE_RATE,
    updateQuery: UPDATE_PULSE_RATE,
    initialValues: VITAL_INITIAL_VALUES.pulseRate,
  },
  'Respiratory Rate': {
    fetchPath: 'getRespiratoryRateInfos',
    addPath: 'addRespiratoryRateInfo',
    deletePath: 'deleteRespiratoryRateInfo',
    updatePath: 'updateRespiratoryRateInfo',
    fetchQuery: GET_RESPIRATORY_RATE_INFOS,
    addQuery: ADD_RESPIRATORY_RATE,
    deleteQuery: DELETE_RESPIRATORY_RATE,
    updateQuery: UPDATE_RESPIRATORY_RATE,
    initialValues: VITAL_INITIAL_VALUES.respiratoryRate,
  },
  Temperature: {
    fetchPath: 'getTemperatureInfos',
    addPath: 'addTemperatureInfo',
    deletePath: 'deleteTemperatureInfo',
    updatePath: 'updateTemperatureInfo',
    fetchQuery: GET_TEMPERATURE_INFOS,
    addQuery: ADD_TEMPERATURE,
    deleteQuery: DELETE_TEMPERATURE,
    updateQuery: UPDATE_TEMPERATURE,
    initialValues: VITAL_INITIAL_VALUES.temperature,
  },
  'Visual Acuity': {
    fetchPath: 'getVisualAcuityInfos',
    addPath: 'addVisualAcuityInfo',
    deletePath: 'deleteVisualAcuityInfo',
    updatePath: 'updateVisualAcuityInfo',
    fetchQuery: GET_VISUAL_ACUITY_INFOS,
    addQuery: ADD_VISUAL_ACUITY,
    deleteQuery: DELETE_VISUAL_ACUITY,
    updateQuery: UPDATE_VISUAL_ACUITY,
    initialValues: VITAL_INITIAL_VALUES.visualAcuity,
  },
  'Urine Dipstick': {
    fetchPath: 'getUrineDipstickInfos',
    addPath: 'addUrineDipstickInfo',
    deletePath: 'deleteUrineDipstickInfo',
    updatePath: 'updateUrineDipstickInfo',
    fetchQuery: GET_URINE_DIPSTICK_INFOS,
    addQuery: ADD_URINE_DIPSTICK,
    deleteQuery: DELETE_URINE_DIPSTICK,
    updateQuery: UPDATE_URINE_DIPSTICK,
    initialValues: VITAL_INITIAL_VALUES.urineDipstick,
  },
};
