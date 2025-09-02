terraform {
  required_version = ">= 1.6.0"
  backend "s3" {
    bucket         = "my-terraform-state-bucket"
    key            = "infra/terraform.tfstate"
    region         = "ap-south-1"
    dynamodb_table = "terraform-lock"
    encrypt        = true
  }
}

provider "aws" {
  region = var.region
}
