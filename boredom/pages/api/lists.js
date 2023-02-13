import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
	const client = await clientPromise;
	const db = client.db("boredom");
	switch (req.method) {
		case "POST":
			let userListExists = await db.collection("lists").findOne({user_id: req.body.user_id});

			if (userListExists) {
				const updateResponse = await db.collection("lists").findOneAndUpdate(
					{ user_id: req.body.user_id },
					{ $push: { list: req.body.list[0] } },
					{ returnOriginal: false }
				);
				const updatedList = updateResponse.value.list;
				res.json({status: 200, list: updatedList});
			} else {
				let newList = await db.collection("lists").insertOne(req.body);
				res.json({status: 200, list: newList});
			}

			break;
		case "GET":
			const userID = req.query.user_id;
			const userList = await db.collection("lists").findOne({user_id: userID});
			res.json({ status: 200, data: userList });
			break;
	}
}
