import { Component } from "vldom";

export class BlobComponent extends Component {
	render() {
		return <ui-data-samples>
			<ui-title>Binary Blob Samples</ui-title>

			<ui-files>
				{this.renderButton('1 MB', 1 * 1024 * 1024, false)}
				{this.renderButton('1 GB', 1 * 1024 * 1024 * 1024, false)}
				{this.renderButton('5 GB', 5 * 1024 * 1024 * 1024, false)}
				
				{this.renderButton('1 MB', 1 * 1024 * 1024, true)}
				{this.renderButton('1 GB', 1 * 1024 * 1024 * 1024, true)}
				{this.renderButton('5 GB', 5 * 1024 * 1024 * 1024, true)}
			</ui-files>
		</ui-data-samples>;
	}

	renderButton(name: string, size: number, compressable: boolean) {
		return <ui-data-blob ui-href={`/blob/${compressable ? 'repeating' : 'random'}/${size}`}>
			{name} {compressable ? 'Compressable' : 'Random'} Binary File
		</ui-data-blob>
	}
}