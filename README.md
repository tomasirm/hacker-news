# Project

This is a project for reign job application

## Docker Compose

In the root folder (where the docker-compose.yml file is), execute this command:

```bash
sudo docker-compose up
```

Once is running, for initial populate data, call this endpoint with GET method:

```bash
GET
http://localhost:3000/endpoint/initialPopulate
```

To test the server execute this command (is in a docker stage by the way):

```bash
npm run test
```

Then, open client localhost with::

```bash
http://localhost:4200
```

## Localhost

Create .env file into the server folder

```python
DB_URI=mongodb://localhost:27017/reign
```

Then start the server

```bash
npm run start
```

For initial populate data, execute this command:

```bash
GET
http://localhost:3000/endpoint/initialPopulate
```

For client start, execute this command:

```bash
ng serve
```

Then, open client localhost with:

```bash
http://localhost:4200
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
