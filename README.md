🚀 CI/CD Pipeline for Node.js App with Docker, Jenkins, and GitHub Webhook
🎯 Objective:
Automate deployment of a Node.js app using Docker and Jenkins Freestyle Project, triggered by GitHub Webhook.

🛠️ 1. Setup EC2 Instance:
Launch EC2 (Ubuntu) — Open ports 22 (SSH), 8080 (Jenkins), and 3000 (Node).
Connect to EC2:
bash
Copy
Edit
ssh -i your-key.pem ubuntu@your-ec2-ip
sudo apt update && sudo apt upgrade -y
🔧 2. Install Jenkins & Docker:
Install Java (Jenkins dependency):

bash
Copy
Edit
sudo apt install -y openjdk-17-jdk  
Install Jenkins:

bash
Copy
Edit
curl -fsSL https://pkg.jenkins.io/debian/jenkins.io-2023.key | sudo tee /usr/share/keyrings/jenkins-keyring.asc
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian binary/ | sudo tee /etc/apt/sources.list.d/jenkins.list
sudo apt update && sudo apt install jenkins -y
sudo systemctl start jenkins
sudo systemctl enable jenkins
Install Docker:

bash
Copy
Edit
sudo apt install -y docker.io
sudo usermod -aG docker jenkins
sudo systemctl restart jenkins
🔥 3. Set Up Node.js App:
Install Node & npm:

bash
Copy
Edit
sudo apt install -y nodejs npm
Clone GitHub Repo:

bash
Copy
Edit
git clone https://github.com/yourusername/your-repo.git
cd your-repo
Create app.js:

javascript
Copy
Edit
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello CI/CD! 🚀'));
app.listen(3000, () => console.log('App running on port 3000'));
Create package.json:

json
Copy
Edit
{
  "name": "node-cicd-app",
  "version": "1.0.0",
  "main": "app.js",
  "dependencies": {
    "express": "^4.18.2"
  }
}
Create Dockerfile:

dockerfile
Copy
Edit
FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
Test locally:

bash
Copy
Edit
npm install
node app.js
Visit: http://<your-ec2-ip>:3000

🔧 4. Set Up Jenkins Freestyle Project:
Access Jenkins:

bash
Copy
Edit
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
URL: http://<your-ec2-ip>:8080
Complete setup, install suggested plugins, create an admin user.
Create Freestyle Project:

New Item > Freestyle Project
Source Code Management: Git → add repo URL
Build Triggers: Check "GitHub hook trigger for GITScm polling"
Add Build Steps:

Execute Shell:
bash
Copy
Edit
docker build -t nodejs-app .
docker stop node-app || true
docker rm node-app || true
docker run -d -p 3000:3000 --name node-app nodejs-app
🔥 5. Set Up GitHub Webhook:
In GitHub:

Settings > Webhooks > Add Webhook
Payload URL: http://<your-ec2-ip>:8080/github-webhook/
Content type: application/json
Trigger: "Just the push event"
Test:

bash
Copy
Edit
git add .
git commit -m "CI/CD test"
git push origin main
Jenkins should trigger automatically
Visit http://<your-ec2-ip>:3000 to see the updated app 🎉
🚀 6. Clean Up:
Stop the container:
bash
Copy
Edit
docker stop node-app
docker rm node-app
Terminate EC2 to avoid costs.
