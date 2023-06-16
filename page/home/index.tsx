import { Component } from "vldom";
import { TextComponent } from "./text";
import { BlobComponent } from "./blob";
import { ImageComponent } from "./image";
import { DocumentComponent } from "./document";
import { ArchiveComponent } from "./archive";

export class HomeComponent extends Component {
	render() {
		return <ui-samples>
			{new TextComponent()}
			{new DocumentComponent()}
			{new ImageComponent()}
			{new BlobComponent()}
			{new ArchiveComponent()}
		</ui-samples>
	}
}