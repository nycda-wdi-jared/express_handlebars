# Express Handlebars - Params & Partial Exercise

1. Create a database called ```cars_app```
2. Run the backup.sql file here to add the records to your database, or merely create records of your own. I made three different records with 3 different car makers.
	* This is the command to run in your terminal to run a sql file (```psql -f cars_app backup.sql ```) to your database. You have to make sure that (in your terminal), you are in the directory of the sql file.
3. Look at the ```home.handlebars``` file. 
	* Once you have populated your database with the appropriate information, there should be clickable options in this file. 
	* Look at this line: ```<a href="/cars/{{apiSplit this.make}}">```. This will be the route that you are setting up on the server side. I have commented where that route should go. This route will send information for that car maker to the client
4. Create a ```car.handlebars``` file inside your views folder. This is where the above parameterized route will render to. This page will show the picture of the make of the car that was clicked.
5. For the partial, create a ```footer.handlebars``` file inside your views/partials folder. 
	* Make it a basic footer
	* This footer will be used on the home & car page