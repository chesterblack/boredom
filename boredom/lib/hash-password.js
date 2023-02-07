const bcrypt = require("bcrypt");

export function hashPassword(rawPassword) {
	return bcrypt.hash(rawPassword, 10).then((hash) => {
		return hash;
	});
}

export function checkPassword(rawPassword, hashedPassword) {
	return bcrypt.compare(rawPassword, hashedPassword).then((result) => {
		return result;
	})
}