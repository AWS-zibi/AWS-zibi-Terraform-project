# 🚀 DevOps Project – AWS ECS + RDS + CI/CD

## 📌 Project Overview
  This project demonstrates a complete DevOps pipeline for deploying a containerized Node.js application on **AWS ECS Fargate** with **RDS** as the database, automated using Infrastructure as Code (Terraform/CloudFormation) and **CI/CD(CodePipeline)**.  
The deployment ensures scalability, high availability, and observability using **CloudWatch** & **Terraform** & **ECS**.
---

## 🏗️ Architecture
<img width="1536" height="1024" alt="aws-" src="https://github.com/user-attachments/assets/ade097df-252e-42de-8d2b-de8be7b7d737" />

**Part 1: Infrastructure as Code**

[Terraform-Setup.pdf](https://github.com/user-attachments/files/22144108/Terraform-Setup.pdf)
VPC with public and private subnets across 2 Availability Zones
Internet Gateway attached to the VPC
NAT Gateway in public subnet for private subnet routing
EC2 → Target Groups → → Targets (targets healthy).
EC2 → Security Groups for ALB‑SG/ECS‑SG/RDS‑SG (inbound rules visible).
Auto Scaling Group with EC2 instances in private subnets



**Part 2: Application Deployment**

[Node.ls-Application.pdf](https://github.com/user-attachments/files/22144146/Node.ls-Application.pdf)
ECS → Clusters → → Services: show Service Running/Desired, Tasks running.
RDS → Databases → (status = Available, engine, security group).
SECRET MENAGER-> Credentials-> (using database credentials in secret menages).



**Part 3: CI/CD Pipeline**
  
[Part 3 CICD Pipeline.pdf](https://github.com/user-attachments/files/22144300/Part.3.CICD.Pipeline.pdf)

 **Source Stage**  
 Trigger pipeline on Git push to main branch  
 Pull source code from the GitHub repository  

**Build Stage**  
 Build and test Docker image  
 Run basic security scans on the image  
 Push Docker image to AWS ECR  

 **Deploy Stage**  
 Deploy application to staging environment  
 Deploy to production with manual approval



**Part 4: Monitoring & Logging**

[Monitoring_Backup.pdf](https://github.com/user-attachments/files/22144354/Monitoring_Backup.pdf)

**CloudWatch Metrics & Dashboards**
 Set up custom metrics for the application  
 Create CloudWatch dashboard with key metrics (CPU, Memory, RequestCount, Latency)  

 **Logging**
 Centralized logging using CloudWatch Logs  
 Aggregate logs from ECS/EC2 containers  

 **Health Checks**
 Configure application health endpoints (e.g., /health)  
 Set ALB health check paths and thresholds  

 **RDS Backup**
 Enable automated backups for RDS instance  
 Optionally enable snapshot scheduling for disaster recovery

**Back_UP**
 Configure backup retention period (e.g., 7–30 days)  



**Add Your Application URL**

ALB DNS: EC2 → Load Balancers → <devops-app-alb-147514442.ap-south-1.elb.amazonaws.com> → Domain name <themetadatas.in>.
Test in browser and with curl:
**curl -i http://devops-app-alb-147514442.ap-south-1.elb.amazonaws.com/health**
If using HTTPS + domain (Route 53 + ACM): ensure certificate validated and ALB listener 443 uses it.

**ENDPOINT**
https://devops.themetadatas.in
