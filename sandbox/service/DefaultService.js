'use strict';


/**
 * Calculates risk stratification index for COVID-19
 *
 * body List  (optional)
 * returns RiskAssessment
 **/
exports.qcovidPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "note" : [ "", "" ],
  "mitigation" : "",
  "method" : "{}",
  "reasonReference" : [ null, null ],
  "language" : "",
  "encounter" : "{}",
  "basis" : [ null, null ],
  "contained" : [ "", "" ],
  "meta" : "",
  "prediction" : [ {
    "relativeRisk" : "",
    "probabilityRange" : "",
    "whenPeriod" : "",
    "whenRange" : "{}",
    "probabilityDecimal" : 0.8008281904610115,
    "rationale" : "{}"
  }, {
    "relativeRisk" : "",
    "probabilityRange" : "",
    "whenPeriod" : "",
    "whenRange" : "{}",
    "probabilityDecimal" : 0.8008281904610115,
    "rationale" : "{}"
  } ],
  "occurrenceDateTime" : "occurrenceDateTime",
  "text" : "",
  "reasonCode" : [ null, null ],
  "resourceType" : "RiskAssessment",
  "status" : "{}"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

