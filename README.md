# 🚀 DevOps Project – AWS ECS + RDS + CI/CD

## 📌 Project Overview
This project demonstrates a complete DevOps pipeline for deploying a containerized Node.js application on **AWS ECS Fargate** with **RDS** as the database, automated using Infrastructure as Code (Terraform/CloudFormation) and **CI/CD(CodePipeline)**.  
The deployment ensures scalability, high availability, and observability using **CloudWatch** & **Terraform** & **ECS**.
---

## 🏗️ Architecture
<img width="1536" height="1024" alt="aws-" src="https://github.com/user-attachments/assets/ade097df-252e-42de-8d2b-de8be7b7d737" />

**Components:**
- **VPC** with public & private subnets,IGA,NAT & Route Table
- **Application Load Balancer(ALB)** → ECS (Fargate tasks)  
- **RDS (PostgreSQL)** for persistence  
- **CloudWatch** for logs & metrics &Alarm
- **CI/CD** pipeline for automated deployments using Code Build, Code Deployemnt, Code Pipeline.

**Part 1: Infrastructure as Code**
