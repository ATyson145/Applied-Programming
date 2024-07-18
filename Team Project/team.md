# CSE 310 - Team Project Report

Canvas Team Number: 1

Team Member Names: Adam Tyson, Paul Amago, Austin Jones, Caleb Tubbs, Noah Larsen, Zachariah Mills

## Part 1 - Initial Planning

This section should be filled out during the first Sprint and submitted by one member of the team.

### Section 1.1 - Initial Project Scope

During this semester, your team will work together to create an application to help students in college.  Your app can be written for the web, mobile device, desktop, or terminal.  The app must include some form of data storage in either a database or a file.  During Sprint 2 you will provide a more detailed scope of the project. 

1. Provide a high level description of the software you plan to create:
We are going to write a typing tutor software that will be made into a web app. 
2. Describe the purpose of the Software:
The purpose of the typing tutor software is to help others either learn or improve on how to type. 
3. Identify the programming languages, frameworks, and libraries you will most likely need to learn and use:
Node.Js, JS, HTML, CSS. 
### Section 1.2 Communication

1. What tool will use for team assignments (e.g. Trello, MS Planner, Asana)? 
Trello
2. What tool will use for team communication (e.g. MS Teams, Slack, Discord)? 
Discord
3. Is every team members connected with the tools that you selected?
Yes
### Section 1.3 Team Roles

Every team member is a software developer on the project.  Each team member is also responsible for preparing for and participating in all presentations.  Identify who will be responsible for the following items:

| Responsiblity                    | Team Member | Titles        |
|----------------------------------|-------------|---------------|
| Conducting Meetings              | Zach        | Conductor     |
| Maintaining Team Assignment List | Noah        | Maintainer    |
| Ensuring GitHub is Working       | Paul        | Gitter Hubber |
| Maintaining Documentation        | Caleb       | Documenter    |
| Create & Display Presentations   | Austin      | Presenter     |
| Submit Team Assignments          | Adam        | Submitter     |

### Section 1.4 - General Schedule

Team members will spend 4 hours per Sprint (2 in class and 2 outside of class) working on the team project. Here is the general schedule that most teams will follow:

|Sprint|Activities                                      |
|------|------------------------------------------------|
|  1   |Planning, Tool Installation, Technology Learning|
|  2   |Prototyping and Detailed Software Planning      |
|  3   |Core Feature Developemnt \ Sub-Team Development |
|  4   |Integration & Continued Development             |
|  5   |Integration & Continued Development             |
| Post |Refinement & Demo                               |

Each Sprint you will present at the Team Review Meeting for 5 minutes.  You will use the 4-Square presentation template in Canvas.  During Week 13, you will provide a demo for 15 minutes.  You will use the final demo presentation template in Canvas.

1. Does every team member understand the time requirements for the project?
Yes
### Section 1.5 - Grading

All deliverables except the final project delivery will be a team pass/fail grade.  The final project delivery will be a team grade as follows:

|Criteria                                     |Possible Points|
|---------------------------------------------|---------------|
|Published in GitHub                          |       50      |
|Many features implemented in working software|       30      |
|Readme.md Documentation                      |       20      |
|**Total Points**                             |    **100**    |

Each team member will report their individual participation each Sprint using a Canvas quiz.  These points will represent the individual grade on the project.

1. Does every team member understand the grading rubric for the project?
Yes

## Part 2 - Final Planning

This section should be filled out during the second Sprint and submitted by one member of the team.

### Section 2.1 - Project Scope

1. Software Title:
Lil gloomy typing tutor

2. Software Description:
A typing tutor that helps people learn how to type faster/show their errors while typing. This typing tutor will
also be a hub for people wanting to display their skill in typing with the Ranked mode.

3. Make a list of features that you plan to include in your software by the end of Week 13.  List your features in terms of priority (highest priority items listed first):

| Feature #              | Description                                                                  |
|------------------------|------------------------------------------------------------------------------|
| Log in + Register      | Working with the database to store user info and accomplishments             |
| Virtual Keyboard       | An image of a keyboard on our website that shows the keys the user is typing |
| Heatmap on Keyboard    | A heatmap that shows the keys with the most errors on the virtual keyboard   |
| Ranked mode            | A hard mode for users of the website to compete in                           |
| Leaderboards           | Points earned during Ranked mode shown to all users                          |
| Practice mode          | A mode where users can practice typing prompts. More helpful than Ranked     |
| Databases for prompts  | Databases used for storing the prompts for both practice and ranked modes    |
| Making it look pretty  | Fixing the CSS and HTML in order to make the website look presentable        |
| Avatars for profiles   | Images for each user's profile page                                          |
| Mobile format for site | Implementing CSS to have mobile browser use                                  |
|                        |                                                                              |

_Note: Add more rows as needed._


4. Identify the programming languages, frameworks, and libraries you will be using:
Firestore, HTML, CSS, Javascript, Node.JS

### Section 2.2 - Updated Team Roles

You can change the roles of team members if desired.  Provide the updated list of responsibilities here:

|Responsiblity                   |Team Member         |
|--------------------------------|--------------------|
|Conducting Meetings             |    Zach            |
|Maintaining Team Assignment List|    Caleb           |
|Ensuring GitHub is Working      |    Paul            |
|Maintaining Documentation       |    Noah            |
|Create & Display Presentations  |    Austin          |
|Submit Team Assignments         |    Adam            |

## Part 3 - Results

This section should be filled out during Week 13.

### Section 3.1 - Software

1. Put your GitHub link for your team project here:
   https://github.com/BowlofRocks/typingSimulator
2. Complete the following checklist by either indicating "Yes" or "No".  If you indicate "No" then provide an explanation of why beneath the table.

|Question                                                    | Response |
|------------------------------------------------------------|----------|
|Is the link above public and working?                       | Yes      |
|Did you add comments to your code?                          | Yes      |
|Did you fully complete the readme.md file?                  | Yes      |
|Did you put the readme.md file in GitHub in the top folder? | Yes      |

3. Referring back to the list of planned requirements in Part 2 above, make a list of all the features and their status (Completed, In Progress, Not Started).  Include in your list features that you added or attempted that were not originally planned.

| Feature #              | Status      | Description                                                                                                                       |
|------------------------|-------------|-----------------------------------------------------------------------------------------------------------------------------------|
| Log in + Register      | Complete    | Using google authenticate to be able to store user progress and nickname                                                          |
| Virtual Keyboard       | Complete    | A keyboard that shows the keys typed as the user works on the prompt                                                              |
| Heatmap on Keyboard    | Complete    | An addition to the keyboard that shows user errors in the form of colors on the keys after a prompt is finished                   |
| Ranked mode            | In progress | A different set of quotes of a higher difficulty where the leaderboard would be more competitive                                  |
| Leaderboards           | Complete    | A display of each user's words per minute listed from best to worst                                                               |
| Practice mode          | In progress | A set of quotes that the user can practice typing on without the data being recorded in the leaderboard                           |
| Databases for prompts  | Not started | A set of databases that include quotes of varying difficulties                                                                    |
| Making it look pretty  | Complete    | Changing the css to make the website look more professional and colorful                                                          |
| Avatars for profiles   | Not started | A feature that would allow the user to pick the image they would want to be associated with in their profile                      |
| Mobile format for site | In progress | Allowing users to continue to work on their typing skills on their phone (changing the css or perhaps using React Native)         |
| Shop + Skins           | Complete    | Incrementing money after a user finishes a prompt, after which the user can purchase a skin that changes the color of the website |
| Animations             | In progress | Animations that would appear as the user finishes a prompt, perhaps showing coin incrementation in a more fun way                 |
| Shuffle Button         | Complete    | A button to allow in the user to change prompts when they wish.                                                                   |

_Note: Add more rows as needed._

### Section 3.2 - Retrospection

1. Did all team members create a fork of the public GitHub repository to include in their own personal software portfolio?
Yes
2. Spend at least 10 minutes as a team have a retrospection meeting (also called a lessons learned).  Identify 3 things that went well and 3 things that did not go well.  Scope your observations to the team and not about specific individuals.  For the things that did not go well, identify how you can improve in future team projects.
What went well as a team was that we were able to meet together as a team often, we were able to find and assign assignments professionally within the team, and we were able
to make sure that the progress that we made was known to one another, stopping instances of overriding code. 

The things that did not go well were the following: 1. Relying on an api for all of our quotes. This caused a few issues of quotes not being able to be processed due to other symbols 
being used other than normal keyboard keys and just recently, when the api went out for a few days, stalled progress on the project. We have now made it so the program runs on a json file
filled with quotes, but to continue solving thie problem, we could make databases filled with quotes and use them to display quotes to the user and so that we can change the 
information in the future. 2. Not putting comments into the code for the longest time. We had a lot of communications on our discord about what certain parts of the program did, 
all of which could have been prevented if we had made comments as we were writing code. We have since then fixed that issue, but a lesson we can keep as we go forward would be to
keep comments on our code as we write them. 3. The lack of using any other software to communicate other than discord. Though discord was a good way for us to communicate, and we used 
it a lot, there are other applications that we could have used in order to better share code with one another, as we ran into problems where we would need help implementing code but we 
could not see what was going on at that time. The way to fix that would be to explore different avenues where communicating and sharing code would be easier.
