const fs = require("fs");
const jwt = require("jsonwebtoken");
const secret_key="this_is_a_key";

const writeJsonFile = (filepath, data) => {
    fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
};

const readJsonFile = (filepath) => {
    try {
        const data = fs.readFileSync(filepath, "utf8");
        return JSON.parse(data);
    } catch (err) {
        console.error("ERROR READING USERS DATA:", err);
        return [];
    }
};





module.exports={writeJsonFile,readJsonFile};
