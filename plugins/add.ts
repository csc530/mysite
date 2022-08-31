import {addRouteMiddleware, defineNuxtPlugin, useNuxtApp, useState} from "#imports";

export default defineNuxtPlugin(() => {
	console.log("add.ts", "called");
	const timer = useState('timer', () => 0)
	if(process.client) {
		
		
		addRouteMiddleware(async () => {
			timer.value = 1
			do {
				await new Promise(resolve => setTimeout(resolve, 100))
				timer.value--
				console.log("time: ", timer.value);
			} while(timer.value)
		})
	}
	
	addRouteMiddleware('add-meta', (to) => {
		const {$config} = useNuxtApp()
		to.meta.title = to.name;
		const title = useState<string>('page-title');
		title.value = to.name.toString();
		console.log(to.meta);
		// console.dir(to);
	}, {global: true});
	
})
