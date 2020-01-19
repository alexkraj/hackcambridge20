# FutureUse
---

We were inspired by several challenges to change the world for the better using our hacking skills. We decided to focus on the growing potential of the **Internet of Things** (_IoT_) to improve our relationship with our environment. 

### Machine Learning Capability

An _IoT_  world provides a tangible connection to the environments in which we live and work through our own personal devices and sensors that are already in place in many of our homes and offices. This abundance of data is perfect for **machine learning** techniques that can learn our habits on an individual scale or across an entire company. We allow our models to train on user data over time. This model allows for **time-series forecasting**. When the user logs into the web app they see their energy dashboard. This provides information on total energy usage and also data for specific appliances and predicts energy usage over the next few days. 

We hope that our models could learn from each other so that, once a user-base is established, habits for new users can be predicted from a very small set of data and information about possible changes can be fed back to them immediately. 

### User Interaction

We want to provide the user with **immediate** decision-making capabilities. The focus is on the next few days which is why machine-learning is important to learn habits. The user is encouraged to affect their own habits by changing sliders related to their appliances (or larger scale emission areas for the industry) and by viewing the immediate impact over the next few days. This impact can be presented through energy-consumption, CO2 emission or cost. We believe this will help the user to confront their energy usage. Rather than being presented with large and non-informative data on a monthly or yearly basis they can view their impact on the coming days. 

## Implementation 

We built the back-end of the web app using `flask` so that could interact well with our data and AI resources which are built using `Python`. The front end is simple `html` and `CSS` but we use the `plotly` interactive plotting environment to present our data to the user. The machine-learning processes are created using `Microsoft Azure Machine Learning`. We used various `Azure` services to host the web app. Screenshots of the  `Microsoft Azure Machine Learning` data pipeline are shown below.

![Alt text](https://challengeposts3challengepost.netdnassl.com/photos/production/software_photos/000/913/156/datas/gallery.jpg)
![Alt text]https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/913/157/datas/gallery.jpg)
![Alt text](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/913/158/datas/gallery.jpg)


---

## Challenges and Teamwork

Our group had a variety of different backgrounds and experiences. We all had a common knowledge of Python but for quite different uses. We tried to split our talents and time effectively. **Alex** worked on the back-end using flask while **Irena** produced a stylish and clean front-end display. **Connor** had some previous experience with machine learning specifically using Azure services. **James'**  background was physics and data science so he focussed on collecting and pre-processing the training data while also helping Alex with connecting the data back to the web app.

The greatest challenge we faced was trying to connect all of the pieces of our project together. In particular, we had very limited experience in using web services to create a web app such as this. **Microsoft** were sponsors at this event so we decided to use their platform to create our product. This was difficult for us and it took us many hours to get going.

Another difficult aspect was finding the right kind of data so that we could demonstrate our concept. In the end, we found a study from **The University of Strathclyde** [Click Here!](https://pureportal.strath.ac.uk/en/datasets/refit-electrical-load-measurements). However, this took a while to find and then process the data.

---

## Highlights


Every member of this team gained skills and insight both in the technology used and the business concepts used in this project. We learned how to manage an app on a wider scale using a large web services structure and also how to take data to and from the user. We believe our final product could be developed into a tool that has an immediate impact on the environment if it was integrated into homes and smart meter systems that are already in place. Around the world, we need to confront our energy usage and make changes today that impact all of our futures.





