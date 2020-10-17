echo deploy project

# 拉取最新代码
git pull origin master

#强制重新编译容器
docker-compose down
docker-compose up -d --force-recreate --build