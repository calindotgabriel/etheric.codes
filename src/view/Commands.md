# copy ssh key to clipboard
$ pbcopy < ~/.ssh/id_rsa.pub

# cd into webserver 
$ ssh -p 21098 etheynhq@server307.web-hosting.com

# open in finder
open . 

# get full path
realpath build/

# sync remote ssh and local folders  
$ scp /Users/mac/Dev/etheric-code-003/build/* etheynhq@server307.web-hosting.com:/public_html

$ rsync -av --delete --rsh=ssh /Users/mac/Dev/etheric-code-003/build etheynhq@server307.web-hosting.com:/public_html
