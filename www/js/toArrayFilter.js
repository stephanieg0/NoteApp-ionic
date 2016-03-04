git filter-branch -f --commit-filter '
        if [ "$GIT_AUTHOR_EMAIL" = "admin@admins-MacBook-Pro-6.local" ];
        then
                GIT_AUTHOR_NAME="NathanBaldwin";
                GIT_AUTHOR_EMAIL="nathansbaldwin@gmail.com";
                git commit-tree "$@";
        else
                git commit-tree "$@";
        fi' [--all]


git filter-branch -f --commit-filter 'if [ "$GIT_AUTHOR_EMAIL" = "you@example.com" ];
  then export GIT_AUTHOR_NAME="NathanBaldwin"; export GIT_AUTHOR_EMAIL=nathansbaldwin@gmail.com;
  fi; git commit-tree "$@"'

git filter-branch --commit-filter 'if [ "$GIT_AUTHOR_NAME" = "NathanBaldwin" ];
  then export GIT_AUTHOR_NAME="NathanBaldwin"; export GIT_AUTHOR_EMAIL=hobo@example.com;
  fi; git commit-tree "$@"'

  git filter-branch -f --env-filter '
    oldname="(NathanBaldwin)"
    oldemail="(you@example.com)"
    newname="(NathanBaldwin)"
    newemail="(nathansbaldwin@gmail.com)"
    [ "$GIT_AUTHOR_EMAIL" = "$oldemail" ] && GIT_AUTHOR_EMAIL="$newemail"
    [ "$GIT_COMMITTER_EMAIL" = "$oldemail" ] && GIT_COMMITTER_EMAIL="$newemail"
    [ "$GIT_AUTHOR_NAME" = "$oldname" ] && GIT_AUTHOR_NAME="$newname"
    [ "$GIT_COMMITTER_NAME" = "$oldname" ] && GIT_COMMITTER_NAME="$newname"
    ' HEAD

git filter-branch -f --commit-filter \
'if [ "$GIT_AUTHOR_NAME" = "NathanBaldwin" ]; then \
export GIT_AUTHOR_NAME="NathanBaldwin";\
export GIT_AUTHOR_EMAIL=nathansbaldwin@gmail.com;\
export GIT_COMMITTER_NAME="NathanBaldwin";\
export GIT_COMMITTER_EMAIL=nathansbaldwin@gmail.com;\
fi;\
git commit-tree "--all"'
