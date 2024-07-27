//to iska name hamne camelcase me diya hai 
//CamelCase is a naming convention in programming and other contexts where the first letter of each word in a compound word is capitalized, except for the very first word.
//Example: myVariableName, calculateTotalAmount

import Link from "../models/link.js";

//ot hamne pahle hi export kr diya hai
export const createShorterLink=async (req,res)=>{
    const { originalUrl }=req.body;
    if(!originalUrl){
        return res.status(400).json({error:"originalurl is required"});
    }
    
    try{
        //the following is similar to
        //const link= await Link.create({originalUrl})
        const link = new Link({ originalurl:originalUrl });//so the field name must match with the name in the scehma
        await link.save();//this is mongoose function to save what we create
        res.status(201).send(link);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
};

export const getOriginalUrl = async (req, res) => {
    const { shortUrl } = req.params;
    try {
        const link = await Link.findOne({ shorturl: shortUrl });
        if (link) {
            link.clicks += 1;
            await link.save();
            res.redirect(link.originalurl);
        } else {
            res.status(404).send("Link not found");
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


//3rd api kya kregi getAnalytics->shortUrl ->reply clicks,originalUrl,shortUrl

export const getAnalytics = async (req, res) => {
    const { shortUrl } = req.params;
    
    try {
        // Query using the correct field name
        const link = await Link.findOne({ shorturl: shortUrl });

        if (link) {
            // Return the correct field names
            res.status(200).json({
                clicks: link.clicks,
                originalUrl: link.originalurl,
                shortUrl: link.shorturl
            });
        } else {
            res.status(404).send("Link not found");
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


//do multiple export krne ke liye just function ya api ke pahle export lga do bas  
