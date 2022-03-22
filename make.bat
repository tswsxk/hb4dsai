yarn docs:build

cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/tswsxk/hb4dsai.git master:gh-pages

cd -