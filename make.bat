yarn docs:build

cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:tswsxk/hb4dsai.git main:gh-pages

cd -