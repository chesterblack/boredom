import clientPromise from "../../lib/mongodb";
import { hashPassword, checkPassword } from "../../lib/hash-password";

export default async function handler(req, res) {
	const client = await clientPromise;
	const db = client.db("boredom");
	switch (req.method) {
		case "POST":
			const username = req.body.username;
			const password = req.body.password;

			const user = await db.collection("users").findOne({username: username});

			const passwordMatch = await checkPassword(password, user.password);

			const hashedPassword = await hashPassword(req.body.password);

			res.json({
				status: 200,
				passwordMatch: passwordMatch,
				userID: user._id,
			});

			break;
		default:
			res.json({ status: 500, error: "Invalid method" });
			break;
	}
}
