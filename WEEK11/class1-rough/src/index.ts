
export interface Env {

}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		console.log(request.body);
		console.log(request.headers);
		// console.log(request.query);
		const url = new URL(request.url)
		console.log("URL:", url);
		
		

		
		if (request.method === "GET") {
			return Response.json({
				message: "you sent a get request",
				url: url
			});
		} else {
			return Response.json({
				message: "you did not send a get request",
				url: url
			});
		}
	},
};