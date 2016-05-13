# MoonShot_DashBoard
This is the dashboard(hosted on heroku) for the MoonShot Project.


The URL for the dashboard is:

moonshot239.herokuapp.com

The dashboard features the following:
***********************************************
  a. Single page application which is build on bootstrap.
  b. The entire applicaiton built and hosted on NodeJS.
  c. HighCharts that stream the data from constantly Updated MySQL databasse, hosted on EC2.
  d. CanvasJS charts that stream the data from constantly Updated MySQL databasse, hosted on EC2.
  
About the DashBoard:
***********************************************
  .The Dashboard visualises the realtime predictive analytics of a bank's credit card applications.
  .Based on the credit card applications that are likely to be approved or denied; a task which is performed by Apache Spark's ecosystem which uses Machine Learning library (Naive Bayes Prediction Algorithm) to predict the outcome for the random applications (streamed using Apache Kafka) online. 
  .The analytics have the following 4 scenarios which are predicted:
    a. Average employment years - What's the average employment duration of the applicant applying. 
    b. Application count - From the applications being streamed, what could be the possible count of the application that are likely to      be approved/denied.
    c. Average Income Range - What's the average income range of the applicant applying. 
    d. Area wise approvals - Based on the stream of applications that are coming, what could the top areas of applicants who will be approved the credit cards with.

Technologies Used:
******************
REST(NodeJS), Heroku Cloud, HTML5, CSS3, BootStrap, HighCharts, CanvasJS, MySQL, EC2 - Amazon Web Services.
    
For more details on the other side of the moonshot(project) - look for Moonshot_Application project in my repository.

