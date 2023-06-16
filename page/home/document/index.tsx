import { Component } from "vldom";

import email from 'url:./email.eml';
import font from 'url:./font.otf';
import presentation from 'url:./presentation.pptx';
import video from 'url:./video.mov';
import word from 'url:./word.docx';

export class DocumentComponent extends Component {
	render() {
		const files = [
			email,
			font,
			presentation,
			video,
			word
		];

		return <ui-document-samples>
			<ui-title>Document Samples</ui-title>

			<ui-files>
				{files.map(file => <ui-file ui-click={() => open(file)}>
					{file.split('/').pop().replace(/\.[0-9a-f]+\./, '.')}
				</ui-file>)}
			</ui-files>
		</ui-document-samples>;
	}
}