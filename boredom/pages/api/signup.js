import { hashPassword } from "../../lib/hash-password";
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
	const client = await clientPromise;
	const db = client.db("boredom");
	switch (req.method) {
		case "POST":
			let bodyObject = req.body;

			const exists = await db.collection("users").findOne({username: bodyObject.username});

			if (exists) {
				res.json({
					status: 500, error: "A user with that username already exists"
				});
			} else {
				bodyObject.password = await hashPassword(bodyObject.password);
				let newUser = await db.collection("users").insertOne(bodyObject);
				res.json(newUser.ops[0]);
			}

			break;
		default:
			res.json({ status: 500, error: "Invalid method" });
			break;
	}
}
