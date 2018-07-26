
import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from '~/components/icon-settings';
import PopoverTooltip from '~/components/tooltip'; // `~` is replaced with design-system-react at runtime
import Icon from '~/components/icon';
import SLDSPageHeader from '~/components/page-header';
import ButtonGroup from '~/components/button-group';
import Button from '~/components/button';

class WTFExample extends React.Component {
	renderContentRight () {
		console.log(this); // Annoying

		return (
			<div className="slds-grid slds-grid_vertical-align-center">
				{(
					<PopoverTooltip align="bottom" content="This context is part of a managed package. It's not allowed to be edited or deleted.">
						<a>
							<Icon category="utility" size="x-small" name="info" />
						</a>
					</PopoverTooltip>
				)}
				<ButtonGroup>
					<Button
						label="edit"
					/>
				</ButtonGroup>
			</div>
		);
	}

	render () {
		return (
			<IconSettings iconPath="/assets/icons">
				<SLDSPageHeader
					contentRight={this.renderContentRight()}
					variant="recordHome"
				/>
			</IconSettings>
		);
	}
}

WTFExample.displayName = 'WTFExample';

export default WTFExample; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
