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

import * as Models from './models';

export class PIAnalysisRuleLinks {
	public Self?: string;
	public AnalysisRules?: string;
	public Analysis?: string;
	public AnalysisTemplate?: string;
	public Parent?: string;
	public PlugIn?: string;
	constructor(self?: string, analysisRules?: string, analysis?: string, analysisTemplate?: string, parent?: string, plugIn?: string)
	{
		if (self!=null)
		{
			this.Self=self
		}
		if (analysisRules!=null)
		{
			this.AnalysisRules=analysisRules
		}
		if (analysis!=null)
		{
			this.Analysis=analysis
		}
		if (analysisTemplate!=null)
		{
			this.AnalysisTemplate=analysisTemplate
		}
		if (parent!=null)
		{
			this.Parent=parent
		}
		if (plugIn!=null)
		{
			this.PlugIn=plugIn
		}
	}
}
