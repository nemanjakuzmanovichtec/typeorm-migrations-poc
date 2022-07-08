import { DataSource } from 'typeorm';

export const MySqlDataSource = new DataSource({
  type: 'mariadb',
  host: 'localhost',
  port: 6700,
  username: 'htec_dev',
  password: 'password',
  database: 'dev_db',
  entities: [`${process.cwd()}/src/entities/*.ts`],
  migrations: [`${process.cwd()}/src/migrations/*.ts`],
});

MySqlDataSource.initialize()
  .then(async () => {
    console.log('Data Source has been initialized!');
  })
  .catch(err => {
    console.error('Error during Data Source initialization', err);
  });
