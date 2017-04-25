var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var app = express();
var port = 8000;


var url="https://www.indeed.com/viewjob?jk=54c60100c9f4391b&q=junior+web+developer&l=Lawrenceville%2C+GA&tk=1beip362p0njm0fg&from=web";


request(url,function(err,resp,body){
	var $ = cheerio.load(body);
	var companyName= $('b.jobtitle').next().next();
	var companyNameText=companyName.text();

	var location=$('.location').first();
	var locationText=location.text();
	var jobTitle=$('b.jobtitle').first();
	var jobTitleText=jobTitle.text();
	var jobSummary=$('#job_summary').first();
	var jobSummary=jobSummary.text();

	var job={
		companyName:companyNameText,
		jobTitle:jobTitleText,
		location:locationText,
		jobSummary:jobSummary
	};

	console.log(job);
	
});

app.listen(port);
console.log("Listening on port "+ port);

