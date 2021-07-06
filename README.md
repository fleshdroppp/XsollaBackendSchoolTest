# XsollaBackendSchoolTest

## Starting project

1. Clone my repo : `git clone https://github.com/fleshdroppp/XsollaBackendSchoolTest.git`

2. Move to directory where my project is : `cd XsollaBackendSchoolTest`

3. Install all dependencies : `npm install`

4. Start project by using : `npm start`

## Using project

This API has 6 endpoints : 
1. **/products/all/:page** - here you can get all products. They are    divided by pages where 0 page is the first.
2. **/products/all/** - get all products without specifying page parameter.
3. **/products/one/:id** - get single product by it's ID or SKU.
4. **/products/create** - create product.
5. **/products/update/:id** - update product by it's ID or SKU. You can't change here SKU or ID.
6. **/products/delete/:id** - delete product by it's ID or SKU.

## Running in Docker
1. Firstly, we need to make our image. So, run : `sudo docker build --build-arg APP_DIR=var/app -t fl35hdr0ppp/node-app:V1 .`
2. After first step we should run our container. In my app I am using 5000 port, so I have exposed it Dockerfile. Use this command to run container: `sudo docker run -p 8000:5000 -d --name node-app fl35hdr0ppp/node-app:V1`
3. Now you can make requests on this url: http://localhost:8000/api/products

If you are having some problems with database, contact me : https://t.me/fleshdroppp
