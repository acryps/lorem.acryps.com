import { Component } from "vldom";

export class TextSampleComponent extends Component {
	constructor(
		private words: number
	) {
		super();
	}

	render() {
		const lorem = `lorem ipsum dolor sit amet consectetur adipiscing elit donec ullamcorper risus arcu a aliquet ex malesuada sed interdum et malesuada fames ac ante ipsum primis in faucibus nullam lorem erat tristique ac sem hendrerit facilisis sodales lacus morbi sapien dui tincidunt consectetur feugiat eget finibus ac est proin varius eros accumsan tortor finibus dapibus duis vel accumsan quam vestibulum tristique sem ut vestibulum ornare curabitur ac magna dolor suspendisse nec pretium enim sed aliquet imperdiet arcu a volutpat vivamus ut mi eget sapien feugiat eleifend nullam ultrices felis quis sapien ultricies vehicula mauris ex lectus tincidunt a sem et condimentum suscipit risus cras sed ligula turpis integer rhoncus dignissim posuere suspendisse quis turpis tincidunt interdum urna sit amet malesuada neque aliquam mattis velit et consectetur pretium donec vehicula purus at ex malesuada ullamcorper fusce vitae semper sem vivamus leo enim venenatis ut leo in fermentum sodales lacus vestibulum gravida scelerisque lobortis nunc volutpat pulvinar felis at viverra enim suscipit non nullam enim eros feugiat eu massa sit amet lacinia ullamcorper nisl maecenas euismod nulla sit amet tempus vestibulum diam lorem molestie augue id lobortis dui sapien in dui praesent elementum dignissim tellus sed iaculis maecenas dui dui euismod at ultrices in mattis et odio quisque arcu elit tincidunt eget dictum eu facilisis vitae diam duis eu ante tincidunt ultricies nisi sit amet consectetur erat suspendisse aliquet tincidunt vulputate nullam consequat pharetra quam vitae mollis sapien gravida in nullam consequat erat vel fringilla viverra libero lacus maximus augue eget interdum odio erat quis lectus praesent ullamcorper ullamcorper neque sit amet accumsan pellentesque ornare turpis eu lectus consequat nec aliquam felis egestas curabitur tristique neque eu enim sagittis et luctus velit porttitor nullam aliquet purus vel tincidunt luctus est sem porttitor lectus sed consectetur nunc tellus vel purus aliquam eu interdum tortor aliquam dapibus eros massa eget blandit tellus cursus ut proin consectetur semper metus in cursus proin volutpat quis dui a tincidunt fusce non purus neque morbi pharetra elementum tortor et dignissim nulla erat ante volutpat ut ante at malesuada egestas dui morbi est urna elementum iaculis felis id dictum laoreet purus nulla facilisi nam nec aliquet risus sed vestibulum est nulla facilisis tortor non molestie rutrum mi ex interdum felis id pharetra eros justo eget lorem sed rhoncus rhoncus eros eget porttitor suspendisse vel commodo diam curabitur eget gravida tellus ut feugiat dui curabitur eget mauris quis sapien porttitor aliquam id vel urna orci varius natoque penatibus et magnis dis parturient montes nascetur ridiculus mus fusce auctor viverra risus in euismod donec quis ipsum dolor suspendisse et sapien maximus dictum ipsum eleifend fringilla mauris etiam auctor non sem ut gravida ut in mollis ligula morbi ante nisl consequat eu sapien sit amet porta interdum mauris praesent vestibulum felis at scelerisque auctor praesent a lorem sed lacus egestas ullamcorper id nec quam proin id nunc nunc duis euismod urna in arcu elementum placerat nulla faucibus mattis lectus facilisis pharetra est tincidunt ac integer in ante eget nibh vestibulum laoreet id in`.split(' ');
		
		const newLines = 2;
		
		let output = 'Lorem ';
		let sentence = 1;

		for (let i = 0; i < this.words - 1; i++) {
			const word = lorem[Math.floor(lorem.length * Math.random())];

			if (sentence++) {
				output += word;

				if (sentence > 5 && Math.random() < 0.2 && i + 5 < this.words) {
					output += '.' + ((newLines && Math.random() < 0.1) ? '\n'.repeat(newLines) : ' ');

					sentence = 0;
				} else {
					output += ' ';
				}
			} else {
				output += word[0].toUpperCase() + word.substring(1) + ' '; 
			}
		}

		return <ui-text-sample>
			{output}
		</ui-text-sample>
	}
}