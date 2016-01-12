cd src
meteor build prod
cp prod/bloombud.tar.gz ../openshift
rm prod/bloombud.tar.gz
cd ../openshift
tar -xvf bloombud.tar.gz -s
rm bloombud.tar.gz
cd bundle
mv * ../
cd ..
git add .
git commit -am "Production ready"
git push
