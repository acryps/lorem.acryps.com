import { Component } from "vldom";

import code from 'url:./code.zip';
import documents from 'url:./documents.zip';
import tarball from 'url:./tarball.tar';
import nested from 'url:./nested.zip';

export class ArchiveComponent extends Component {
	render() {
		const archives = [
			code,
			documents,
			tarball,
			nested
		];

		return <ui-archive-samples>
			<ui-title>Archive Samples</ui-title>

			<ui-files>
				{archives.map(file => <ui-file ui-click={() => open(file)}>
					{file.split('/').pop().replace(/\.[0-9a-f]+\./, '.')}
				</ui-file>)}
			</ui-files>
		</ui-archive-samples>;
	}
}