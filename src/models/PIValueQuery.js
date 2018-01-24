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
var PIValueQuery = (function () {
    function PIValueQuery(attributeName, attributeUOM, attributeValue, searchOperator, webException) {
        if (attributeName != null) {
            this.AttributeName = attributeName;
        }
        if (attributeUOM != null) {
            this.AttributeUOM = attributeUOM;
        }
        if (attributeValue != null) {
            this.AttributeValue = attributeValue;
        }
        if (searchOperator != null) {
            this.SearchOperator = searchOperator;
        }
        if (webException != null) {
            this.WebException = webException;
        }
    }
    return PIValueQuery;
}());
exports.PIValueQuery = PIValueQuery;