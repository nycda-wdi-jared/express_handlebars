# Handlebars Scrape Homework

<p>Please Read All of the instructions on the assignments before starting</p>
<p>Please view this repo to learn about scraping: https://github.com/nycda-wdi-jared/scraping</p>

<h2>Easiest Assignment</h2>

* Scrape a few items off of a website
* On the ui, display the first item from that scrape
* Using a "Next" button, when that is clicked, display the next item of the scrape
* Bonus: Implement a "Previous" button as well
* View the 'easy' video in this repo to see how I did it
* The node modules that you need are request, cheerio, express, & express-handlebars. If you are using a database, then also include pg. If you want to use sequelize, then include sequelize and pg-hstore.
* You do not need a database for this one, but it would be nice to save your items as you know.
* In this example, I scraped from http://www.nfl.com/stats/categorystats?archive=false&conference=null&role=TM&offensiveStatisticCategory=TOTAL_YARDS&defensiveStatisticCategory=null&season=2017&seasonType=REG&tabSeq=2&qualified=false&Submit=Go

Example Folder/File Structure:

![easiest](./github_images/easiest_architecture.png?raw=true "Easiest")

<h2>Medium Assignment</h2>

* This is an addition to the easier assignment
* Look at the medium video on github for an example
* Under the data/button, have 2 tables that separates your data in some way.
* Set some functionality on each row on the table
* For each row on mine, it displays the color the nfl team, and provides a link to the teams site on nfl.com
* This addition will require you to use the javascript functionality within handlebars, including adding data items to html items through the handlebars, ```<button data-id={{this.id}}>Submit</button>```
* There are class examples in the express_handlebars repo

Example Folder/File Structure:

![medium](./github_images/medium_ex_architecture.png?raw=true "Medium")

<h2>Difficult Assignment</h2>

* You will be using a database here
* Scrape a few more items off of a website
* On the ui, display: 
	* a section for a name & comment input
	* a section for the scraped data
	* a section for the comments
* You should have 2 models: One for your scraped data, and one for the comments
* Instead of sending the scraped data over to the client, add that data to the database
	* You will wrap your scrape in a route, and only hit that route when you want more data added to the db
* Just like the first assignment, you will display one item in the scraped data, and have buttons to navigate.
* Basically, people are going to be commenting on the scraped data
	* Good sites to scrape: news, music/food reviews
* There are two different routes that you can take here:
	1. You can display all of the comments in the database
		* Name & Comment Inputs can be in the html
	2. Display all of the comments per piece of scraped data
		* Name & Comment Input should be in the jQuery
* View the 'medium' video in this repo to see how I did it
* The node_modules that you need for this one are body-parser, cheerio, express, express-handlebars, pg, pg-hstore, request, & sequelize
* In this example, I scraped from http://www.nfl.com/stats/categorystats?seasonType=REG&offensiveStatisticCategory=GAME_STATS&d-447263-n=1&d-447263-o=2&d-447263-p=1&d-447263-s=TOTAL_POINTS_GAME_AVG&tabSeq=2&season=2017&role=TM&Submit=Go&archive=false&conference=null&defensiveStatisticCategory=null&qualified=false

Example Folder/File Structure:

![difficult](./github_images/difficult_architecture.png?raw=true "Difficult")
