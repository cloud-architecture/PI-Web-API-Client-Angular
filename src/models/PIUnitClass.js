"use strict";
/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
exports.__esModule = true;
var PIUnitClass = (function () {
    function PIUnitClass(webId, id, name, description, canonicalUnitName, canonicalUnitAbbreviation, path, links, webException) {
        if (webId != null) {
            this.WebId = webId;
        }
        if (id != null) {
            this.Id = id;
        }
        if (name != null) {
            this.Name = name;
        }
        if (description != null) {
            this.Description = description;
        }
        if (canonicalUnitName != null) {
            this.CanonicalUnitName = canonicalUnitName;
        }
        if (canonicalUnitAbbreviation != null) {
            this.CanonicalUnitAbbreviation = canonicalUnitAbbreviation;
        }
        if (path != null) {
            this.Path = path;
        }
        if (links != null) {
            this.Links = links;
        }
        if (webException != null) {
            this.WebException = webException;
        }
    }
    return PIUnitClass;
}());
exports.PIUnitClass = PIUnitClass;
