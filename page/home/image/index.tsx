import { Component } from "vldom";

import landscape from './landscape.jpg';
import square from './square.jpg';
import portrait from './portrait.jpg';

export class ImageComponent extends Component {
	render() {
		const images = [
			landscape,
			square,
			portrait
		];

		return <ui-image-samples>
			<ui-title>Image Samples</ui-title>

			<ui-images>
				{images.map(source => {
					const image = new Image();
					let dimensions: HTMLElement;

					image.onload = () => {
						const width = image.naturalWidth;
						const height = image.naturalHeight;

						const greatestCommonDenominator = this.greatestCommonDenominator(width, height);

						dimensions.textContent = `${width / greatestCommonDenominator}:${height / greatestCommonDenominator}`;
					};

					image.src = source;

					return <ui-image>
						{dimensions = <ui-dimensions></ui-dimensions>}

						{image}
					</ui-image>;
				})}
			</ui-images>
		</ui-image-samples>
	}

	greatestCommonDenominator(...values) {
		return values.reduce((a, b) => {
			if (!b) {
				return a;
			}

			return this.greatestCommonDenominator(b, a % b);
		});
	}
}