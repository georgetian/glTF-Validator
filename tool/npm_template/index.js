/*
 * # Copyright (c) 2016-2017 The Khronos Group Inc.
 * #
 * # Licensed under the Apache License, Version 2.0 (the "License");
 * # you may not use this file except in compliance with the License.
 * # You may obtain a copy of the License at
 * #
 * #     http://www.apache.org/licenses/LICENSE-2.0
 * #
 * # Unless required by applicable law or agreed to in writing, software
 * # distributed under the License is distributed on an "AS IS" BASIS,
 * # WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * # See the License for the specific language governing permissions and
 * # limitations under the License.
 */

const validator = require('./gltf_validator.dart.js');

/**
 * @callback loadExternalResourceCallback
 * @param {string} uri - Relative URI of the external resource
 * @returns {Promise} - Promise with Uint8Array data
 */

/**
 @typedef {Object} ValidationOptions
 @property {number} maxIssues - Max number of reported issues. Use `0` for unlimited output.
 @property {string[]} ignoredIssues - Array of ignored issue codes
 @property {Object} severityOverrides - Object with overridden severities for issue codes
 */

/**
 * Validates an asset from bytes.
 * @param {string} name - URI or other ID. Will appear as `uri` in validation report.
 * @param {Uint8Array} data - Byte array containing glTF or GLB data.
 * @param {loadExternalResourceCallback} loadExternalResource - Function for loading external resources
 * @param {ValidationOptions} options - Object with validation options.
 * @returns {Promise} Promise with validation result in object form.
 */
exports.validateBytes = (name, data, loadExternalResource, options) =>
    validator.validateBytes(name, data, loadExternalResource, options);

/**
 * Validates an asset from JSON string.
 * @param {string} name - URI or other ID. Will appear as `uri` in validation report.
 * @param {string} json - String containing glTF JSON.
 * @param {loadExternalResourceCallback} loadExternalResource - Function for loading external resources
 * @param {ValidationOptions} options - Object with validation options.
 * @returns {Promise} Promise with validation result in object form.
 */
exports.validateString = (name, json, loadExternalResource, options) =>
    validator.validateString(name, json, loadExternalResource, options);