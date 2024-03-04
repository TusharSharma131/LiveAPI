
const { query } = require('express');
const ProductModel = require('../models/prodSchema');

const getAllProducts = async (req, res) =>{
    // const myData = await ProductModel.find({});
    // const myData = await ProductModel.find({name: 'iphone'})
    // const myData = await ProductModel.find(req.query);

//---------------------------------------------------------------------------------------------//

    const {company, name, sort, select} = req.query;
    const queryObject = {}; 

    if(company)
    {
      queryObject.company = company;
    }

    if(name)
    {   
       queryObject.name = {$regex : name, $options : "i"};
    }

    let apiData = ProductModel.find(queryObject);
   
    if(sort)
    {
      let sortFix = sort.replace(',',' '); 
      apiData = apiData.sort(sortFix);
    }

    if(select)
    {
      let selectFix = select.split(',').join(' '); 
      apiData = apiData.select(selectFix);
    }

    //------------------------------------Pagination--------------------------------------//

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;
 
     let skip = (page-1)*limit;

    const myData = await apiData.skip(skip).limit(limit);
    res.status(200).json({myData, nbHits: myData.length});
}

const getAllProductsTesting = (req, res) =>{
    res.status(200).json({msg: "Hi, I am getAllProductsTesting function"})
}

module.exports = {getAllProducts, getAllProductsTesting};