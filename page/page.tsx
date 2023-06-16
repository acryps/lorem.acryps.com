import { Component } from "vldom";

export class PageComponent extends Component {
	render(child) {
		return <ui-page>
			<ui-navigation>
				<ui-logo>ACRYPS</ui-logo> lorem
			</ui-navigation>

			{child}
		</ui-page>;
	}
}