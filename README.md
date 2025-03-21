# Node.js CI/CD Pipeline with Jenkins and Docker

In this project built a CI/CD pipeline using Jenkins, Docker, and GitHub Webhooks. It automates building and deploying a Node.js app whenever I push new code.

## 🛠️ What This Project Does
- **Pulls code** from GitHub automatically using a webhook.
- **Builds a Docker image** with the latest version of the app.
- **Deploys the container** to run the app.
- **Cleans up** old containers to save resources.

## 🚀 Technologies Used
- **Jenkins** – automates the build and deployment.
- **Docker** – containers for a lightweight, consistent environment.
- **GitHub Webhooks** – triggers the pipeline on code changes.
- **Node.js** – the web app backend.

## 🧠 Setup Instructions

1. **Clone the repo:**
   ```bash
   git clone https://github.com/yourusername/nodejs-jenkins-docker.git
   cd nodejs-jenkins-docker
   ```

2. **Install Node.js and npm:**
   ```bash
   sudo apt update
   sudo apt install nodejs npm
   ```

3. **Install Docker:**
   ```bash
   sudo apt install docker.io
   sudo usermod -aG docker $USER
   ```

4. **Set up Jenkins:**
   - Install Jenkins.
   - Add Docker and Git plugins.
   - Create a Freestyle Project.

5. **Configure GitHub Webhook:**
   - Go to your repo's settings → Webhooks.
   - Add `http://<jenkins-server-ip>:8080/github-webhook/` as the payload URL.

## 🛠️ Building and Running the Docker Container

1. **Build the Docker image:**
   ```bash
   docker build -t nodejs-app .
   ```

2. **Run the container:**
   ```bash
   docker run -d -p 3000:3000 nodejs-app
   ```

3. **Check running containers:**
   ```bash
   docker ps
   ```
## Screenshots
webhook
![webhook](https://github.com/user-attachments/assets/d340ef9a-6821-4641-a214-71948e1fa8b1)
Docker container run success
![docker container run success](https://github.com/user-attachments/assets/280e7309-006c-46f8-bba7-2409bc4632d5)
docker build image success
![docker build image success](https://github.com/user-attachments/assets/c9e82cc3-fbb7-4e0a-ad28-621a0b04f0c9)
node.js app running 
![node js app](https://github.com/user-attachments/assets/66e77302-fa0c-449e-ae9e-320e7b29e0d6)
Jenkins success
![jenkins running](https://github.com/user-attachments/assets/d386180b-f235-4e0a-9f4c-144ceed016a0)

## 🧹 Cleaning Up
To stop and remove containers:
```bash
docker stop $(docker ps -q)
docker rm $(docker ps -aq)
```

## 🎯 Final Thoughts
This project was a great hands-on way for me to dive into CI/CD automation. If you’re building this too — feel free to fork the repo, try it yourself, and make it even better!

Happy deploying! 🚀

