import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("boredom");
  switch (req.method) {
    case "POST":
	  let userListExists = await db.collection("lists").findOne({user_id: req.body.user_id});

	  if (userListExists) {
		let updatedList = await db.collection("lists").updateOne(
			{ user_id: req.body.user_id },
			{ $push: { list: req.body.list[0] } }
		);
		res.json({status: 200, item: req.body.list[0]});
	  } else {
		  let newList = await db.collection("lists").insertOne(req.body);
		  res.json({status: 200, item: newList.ops[0]});
	  }

      break;
    case "GET":
      const allPosts = await db.collection("lists").find({}).toArray();
      res.json({ status: 200, data: allPosts });
      break;
  }
}
