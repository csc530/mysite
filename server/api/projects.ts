import {defineEventHandler} from "h3";
import {Octokit} from "@octokit/core";
import Columnable from "~/models/columnContent";
import usersRepos = namespace.UsersRepos;


export default defineEventHandler(async (_event) => {
	//todo: get repos doesn't work in build
	const octokit = new Octokit({auth: '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'});
	/*get public and private repos from GitHub; pre-mount*/
	
	const toColumns = (repos: any[]): Columnable[] => {
		const arr = repos as usersRepos[];
		return arr.map(repo => {
			const col = <Columnable>{
				name: repo.name.replaceAll('-', ' '),
				description: repo.description,
				url: repo.html_url,
				language: repo.language,
				stars: repo.stargazers_count,
				forks: repo.forks_count,
				updated: repo.updated_at,
				display() {
					return `${repo.name} - ${repo.description}`;
				}
			};
			console.log(JSON.stringify(repos[0]));
			return col;
		});
	};
	const getRepos = async (visibility: "all" | "public" | "private" | undefined): Promise<Columnable[]> => {
		let response = (await octokit.request('GET /user/repos', {
			username: 'csc530',
			visibility: visibility,
		})).data;
		return toColumns(response);
	};
	
	
	const publicRepos = await getRepos("public");
	const privateRepos = await getRepos("private");
	return {
		public: publicRepos,
		private: privateRepos,
	};
});