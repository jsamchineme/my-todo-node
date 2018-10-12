curl --user 28ce1efadd26e4ccbf7975e0b77acf3c24e8fb5e: \
    --request POST \
    --form revision=eaef222493d41eae0636d2d319b7a9b11eca0856\
    --form config=@config.yml \
    --form notify=false \
        https://circleci.com/api/v1.1/project/github/jsamchineme/my-todo-node/tree/master
