terraform {
  required_version = ">= 1.6.0"
  backend "s3" {
  bucket = "my-terraform-state-bucket-zibi"
  key    = "infra/terraform.tfstate"
  region = "ap-south-1"
  encrypt = true
}

}

provider "aws" {
  region = var.region
}
