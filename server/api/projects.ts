import {Octokit} from "@octokit/core";
import Columnable from "~/models/columnContent";
import {defineEventHandler} from "h3";
import usersRepos = namespace.UsersRepos;

const token = process.env.GITHUB_API_TOKEN;

export default defineEventHandler(async (_event): Promise<{ private: Columnable[]; public: Columnable[] }> => {
	const octokit = new Octokit({"auth": token});
	/*get public and private repos from GitHub; pre-mount*/
	
	const toColumns = (repos: any[]): Columnable[] => {
		const arr = repos as usersRepos[];
		return arr.map(repo => {
			return <Columnable>{
				"name": repo.name.replaceAll('-', ' '),
				"description": repo.description,
				"url": repo.html_url,
				"language": repo.language,
				"stars": repo.stargazers_count,
				"forks": repo.forks_count,
				"updated": repo.updated_at,
				"display"() {
					return `${repo.name} - ${repo.description}`;
				}
			};
		});
	};
	const getRepos = async (visibility: "all" | "public" | "private" | undefined): Promise<Columnable[]> => {
		let response = (await octokit.request('GET /user/repos', {
			"username": 'csc530',
			"visibility": visibility,
		})).data;
		return toColumns(response);
	};
	
	try {
		const publicRepos = await getRepos("public");
		const privateRepos = await getRepos("private");
		return {
			"public": publicRepos,
			"private": privateRepos,
		};
	}
	catch(e) {
		console.dir(e);
		let template = `<h1>::title::</h1><h2>::subtitle::</h2><p>::error::</p>`;
		const title = e.message + ': ' + e.status
		//todo figure out a way to redirect to an error page or return an error
		const err = template.replace('::title::', title)
		                    .replace('::subtitle::', e.message)
		                    .replace('::error::', e.stack);
	}
});