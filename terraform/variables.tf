variable "region" {
  description = "AWS region"
  type        = string
  default     = "ap-south-1"
}
variable "project" { default = "devops-app" }
variable "vpc_cidr" { default = "10.0.0.0/16" }
variable "public_subnets" {
  type    = list(string)
  default = ["10.0.1.0/24", "10.0.2.0/24"]
}
variable "private_subnets" {
  type    = list(string)
  default = ["10.0.3.0/24", "10.0.4.0/24"]
}
variable "azs" {
  type    = list(string)
  default = ["ap-south-1a", "ap-south-1b"]
}
variable "ami_id" {}
variable "instance_type" { default = "t3.micro" }
variable "key_pair" {}
variable "db_username" {}
variable "db_password" {}
variable "my_ip" { description = "Your home/office IP for SSH access" }
