import { Router, Component } from 'vldom';
import { registerDirectives } from 'vldom-default-directives';
import { PageComponent } from './page';
import { HomeComponent } from './home';

export class Application {
	static router: Router;

	static async main() {
		if (!location.hash) {
			location.hash = '#/';
		}

		this.router = new Router(PageComponent
			.route('/', HomeComponent)
		);

		registerDirectives(Component, this.router);

		let renderedPath = this.router.activePath;
		this.router.host(document.body);

		onhashchange = async () => {
			if (this.router.activePath != renderedPath) {
				await this.router.update();

				renderedPath = this.router.activePath;
			
				requestAnimationFrame(() => window.scrollTo(0, 0));
			}
		};
	}
}

Application.main();