import { Component } from "vldom";
import { TextSampleComponent } from "./sample";

export class TextComponent extends Component {
	render() {
		return <ui-text-samples>
			<ui-title>Text samples</ui-title>

			<ui-matcher>
				<ui-regex>Lorem[\s\n\.A-Za-z]+</ui-regex>

				<ui-hint>
					Use this regex to search for lorem content in the source of your application
				</ui-hint>
			</ui-matcher>

			<ui-text-samples>
				{new TextSampleComponent(10)}
				{new TextSampleComponent(100)}
				{new TextSampleComponent(500)}
			</ui-text-samples>
		</ui-text-samples>;
	}
}