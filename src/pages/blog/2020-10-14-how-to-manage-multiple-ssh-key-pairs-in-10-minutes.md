---
templateKey: blog-post
title: How to manage multiple SSH key pairs in 10 minutes.
date: 2020-10-14T04:01:54.208Z
description: Connect to multiple SSH key in one environment can be such a hard
  thing, here's a little trick on how to set up them all. Cheers!
featuredpost: true
featuredimage: /img/github-gitlab-azure-dev-ops.png
tags:
  - azure
  - github
  - how to
  - gitlab
  - SSH
  - ""
---
![Github, Gitlab and Azure Devops trinity](/img/github-gitlab-azure-dev-ops.png "Github, Gitlab and Azure Devops trinity")

It's based on my experience working from different remote repository. it began in 2017 when I was working in my first company and the company uses Azure DevOps for their remote repository. since I only have an experience using GitHub so it's kinda hard for me to connect to multiple repos using ssh ways.



*~ I use Ubuntu 18.04 at the moment I write this article. so maybe the syntax will differ from your local environment.*



# About SSH

Using the SSH protocol, you can connect and authenticate to remote servers and services. With SSH keys, you can connect to GitHub or another remote repository without supplying your username or password at each visit.

for more information about ssh, you can visit [Github docs](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/about-ssh)

Here's how I do it:

# Generate an ssh key in your local environment

firstly you need to generate an ssh key in your environment, in this case, we want to create a three different ssh key for let's say a personal (GitHub), work (Azure DevOps), and another need (Gitlab).

open your favorite command line and type:

`ssh-keygen -t rsa -b 4096 -C "<your_email@email.com>"`

*make sure the email is the email you use for login to each remote repository.*

and when the command line asks for which file u want to save the SSH, add a **naming** for it so you know which key and what for.

![id_rsa_github](/img/id_rsa_github.png "naming your rsa file github")



the rest just keep the default, and voila! we just add an ssh key pair for GitHub and do repeat two-step above for Azure DevOps and Gitlab.

now you should have `id_rsa_github.pub`, `id_rsa_azure.pub`, and `id_rsa_gitlab.pub` files in your environment.



# Add pub key to the remote repository

### GITHUB

1. Open `Settings` -> `SSH and GPG keys` -> `+New SSH key`.
2. add your `id_rsa_github.pub` value.
3. save.

*in Ubuntu, you can type \`cat id_rsa_github.pub\` to view the value.*

### Azure DevOps

1. Open `User settings` -> `SSH public keys` -> `+New Key`.
2. add your `id_rsa_azure.pub` value.
3. save.

##  

### Gitlab

1. Open `Settings` -> `SSH keys`.
2. add your `id_rsa_gitlab.pub` value.
3. save.



# Create a config file

create a config file in your `~/.ssh` folder to define the mapping from each remote repository.

`touch ~/.ssh/config`

write in the config file like this:

```
Host ssh.dev.azure.com

HostName ssh.dev.azure.com

IdentityFile ~/.ssh/id_rsa_azure

User <your_devops@email.com>

IdentitiesOnly yes



Host gitlab

HostName https://gitlab.com/<yourRepositoryName>/

IdentityFile ~/.ssh/id_rsa_gitlab

User <your_gitlab@email.com>

IdentitiesOnly yes



Host github

HostName https://github.com/<yourProfileName>/

IdentityFile ~/.ssh/id_rsa_github

User <your_github@email.com>

IdentitiesOnly yes
```

save the file.



# Test for fetch and push

you are almost done for set up the multiple key pairs, now it's time to test it. just clone via ssh from one of the remote repositories and test for fetch and push.

assuming we clone from GitHub:

`git clone git@github.com:<your_username>/<some_repo.git>`

change to the cloned repository

`cd some_repo`

fetch or update the repository

`git fetch`

if the cmd doesn't require us to supplying our username or password then you are safe to go :), don't forget to test the other remote repositories that you defined in the config file.

That's all from me hope this helps and share this article with your friends and colleagues.