

{$or:[{age:{$lt:25}},{age:{$gt:30}}]} for less than and greater than 
an array is used because more than one condition and or is used means if any one of the condition 
will be true then we will got our value


{$and:[{age:{$gt:34}},{"address.city":"Star City"}]} here and condition is used

{}---> means we will get the whole data


this is lookup(joins)

{
  from:"orders",//from which table
  localField:"email",//common field
  foreignField:"carol@example.com",//choosing value
  as: "order",//order array me store hoga data
}


#The code can also be written in any format from by choosing the options



Aggregation in MongoDB is a powerful feature that allows you to process and analyze data within collections. It involves performing operations on documents to transform,
filter, group, and summarize data. Aggregation operations can be used to perform complex queries and produce useful insights from your data.
