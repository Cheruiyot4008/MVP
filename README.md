This are the fikes to our portfolo project Naiwaste solution limited, it is a project that we decided to undertake after realising the hazardous effects garbbage pile us in the sub states of the city have caused. 
With the project the user creates an account , then logs in and checks on the services offered after which their location is verified. After verification, services are offered depending on the states in which the users come from, they then choose on their preferred method of collecting garbagge, or can request for turnell drainage services or water paths openings,..the the driver is assigned to carry the crew to perform the requested operation and lastly the user is given a chance to perform the requested operation. 

The link to our deplyoded project is :https://github.com/Cheruiyot4008/MVP/commit/a252b50e01690ecb58a55a6ce7ee4fa383753e74
The Link to the Linkeldn blog post :https://www.linkedin.com/posts/brian-cheruiyot-17763a214_naiwaste-solution-is-a-project-that-came-activity-7206352352268713985-gN_r?utm_source=share&utm_medium=member_desktop
Lik to my Linkeldn page :https://www.linkedin.com/in/brian-cheruiyot-17763a214/
     
     INSTALLATION 
1. Cloning the Repository
First, clone the repository from your version control system (e.g., GitHub).
Copy code
git clone https://github.com/your-username/naïwaste-solution.git
cd naïwaste-solution
2. Setting Up a Virtual Environment.
Install nvm if you haven't already, then use it to install and manage the Node.js version:
# Install nvm if you haven't already
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash

# Install the required Node.js version
nvm install 16.13.0
nvm use 16.13.0
3. Installing Dependencies
Install the necessary dependencies for both the frontend and backend using npm or yarn.
# Navigate to the project directory if not already there
cd naïwaste-solution

# Install backend dependencies
npm install

# If you have a separate frontend, navigate to the frontend directory and install dependencies there
cd frontend
npm install
4. Setting Up Environment Variables
Create a .env file in the root directory of your project to set up environment-specific variables. Here’s an example of what your .env file might look like:
# .env file at the root of your project
PORT=3000
DATABASE_URL=mongodb://localhost:27017/naïwaste
SECRET_KEY=your_secret_key
5. Running Database Migrations
If you’re using a database, ensure that you set up the schema and run any necessary migrations. This step depends on the database you are using. Assuming you’re using MongoDB with Mongoose, you might not need explicit migrations, but ensure your database connection is established.
For example, in our case  app.js or a similar file:
const mongoose = require('mongoose');
const dbUrl = process.env.DATABASE_URL;

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.log('Database connection error: ', err));
6. Running the Application
Finally, start your application. Typically, you will do this by running:
# In the root directory of your project
npm start
This command usually triggers a script defined in your package.json:
{
  "scripts": {
    "start": "node app.js"
  }
}
If you have different environments (e.g., development, production), you might have different start scripts and hence use this instead:
npm run dev  # For development
npm run start  # For production


Usage
Once the application is up and running, you can start using Naiwaste solution by following these steps:
1.Register an Account:
Navigate to the registration page and create a new account.
2.Log In:
Use your credentials to log in.
3.Dashboard:
Access your dashboard/ Landing page to check on the services offered.

4 Inquiry
The user then Inquires on the kind of services offered to them by the system

5 Services Offered page
The services to different customers depend heavily on the various sub-states that they come from

6 Location verification
After choosing on the service they want to be given to them theie location is verified to authenticate the kind of service to offere them

7 Colletion Mechanism
The user chooses whethey they want garbage from theie sites to be collected by Large trucks, Mini trucks or by Tractors

9 Collection
Garbagge is now collected from the user location

10 Feedback
After the service has been provided to the customer, the user is given a chance to rate the services offered to them by means of writing a message in a dialog box assigned to them.


Contributions
We are open to any kind of corrections, keeping in mind that we learn through making mistakes then we are soo much open and ready to correct on our mistakes if any, we also wellcome any suggestion to further enhance the functionality and effectiveness of our project.
