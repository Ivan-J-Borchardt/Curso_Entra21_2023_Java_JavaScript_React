# GIT BASICS
- git init <directory>
- git clone <repo>
- git config user.name <name>
- git add <directory>
- git commit -m "<message>"
- git status 
- git log
- git diff



# GIT BRANCHES
- git branch 
- git checkout -b <branch>
- git merge <branch>

# REMOTE REPOSITORIES
- git remote add <name> <url>
- git fetch <remote> <branch>
- git pull <remote>
- git push <remote> <branch>

# UNDOING CHANGES 
- git revert <commit>
- git reset <file>
- git clean -n 

# GIT REBASE
- git rebase -i <base>

# GIT RESET
- git reset
- git reset --hard
- git reset <commit>
- git reset --hard <commit>

# GIT LOG
- git log -<limit>
- git log --oneline
- git log -p
- git log --stat
- git log --author= "<pattern>"
- git log --grep= "<pattern>"
- git log <since>..<until>
- git log <file>
- git log --graph --decorate

# REWRITTING GIT HISTORY
- git commit --amend
- git rebase <base>
- git reflog

# GIT CONFIG
- git config --global user.name <name>
- git config --global user.email <email>
- git config --global alias.<alias-name> <git-command>
- git config --system core.editor <editor>
- git config --global --edit