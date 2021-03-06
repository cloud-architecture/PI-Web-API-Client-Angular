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

export class PIEventFrameLinks {
	public Self?: string;
	public Attributes?: string;
	public EventFrames?: string;
	public Database?: string;
	public ReferencedElements?: string;
	public PrimaryReferencedElement?: string;
	public Parent?: string;
	public Template?: string;
	public DefaultAttribute?: string;
	public Categories?: string;
	public Annotations?: string;
	public InterpolatedData?: string;
	public RecordedData?: string;
	public PlotData?: string;
	public SummaryData?: string;
	public Value?: string;
	public EndValue?: string;
	public Security?: string;
	public SecurityEntries?: string;
	constructor(self?: string, attributes?: string, eventFrames?: string, database?: string, referencedElements?: string, primaryReferencedElement?: string, parent?: string, template?: string, defaultAttribute?: string, categories?: string, annotations?: string, interpolatedData?: string, recordedData?: string, plotData?: string, summaryData?: string, value?: string, endValue?: string, security?: string, securityEntries?: string)
	{
		if (self!=null)
		{
			this.Self=self
		}
		if (attributes!=null)
		{
			this.Attributes=attributes
		}
		if (eventFrames!=null)
		{
			this.EventFrames=eventFrames
		}
		if (database!=null)
		{
			this.Database=database
		}
		if (referencedElements!=null)
		{
			this.ReferencedElements=referencedElements
		}
		if (primaryReferencedElement!=null)
		{
			this.PrimaryReferencedElement=primaryReferencedElement
		}
		if (parent!=null)
		{
			this.Parent=parent
		}
		if (template!=null)
		{
			this.Template=template
		}
		if (defaultAttribute!=null)
		{
			this.DefaultAttribute=defaultAttribute
		}
		if (categories!=null)
		{
			this.Categories=categories
		}
		if (annotations!=null)
		{
			this.Annotations=annotations
		}
		if (interpolatedData!=null)
		{
			this.InterpolatedData=interpolatedData
		}
		if (recordedData!=null)
		{
			this.RecordedData=recordedData
		}
		if (plotData!=null)
		{
			this.PlotData=plotData
		}
		if (summaryData!=null)
		{
			this.SummaryData=summaryData
		}
		if (value!=null)
		{
			this.Value=value
		}
		if (endValue!=null)
		{
			this.EndValue=endValue
		}
		if (security!=null)
		{
			this.Security=security
		}
		if (securityEntries!=null)
		{
			this.SecurityEntries=securityEntries
		}
	}
}
